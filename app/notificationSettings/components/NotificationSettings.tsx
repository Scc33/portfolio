"use client";

import { useState, useEffect } from "react";
import NotificationRow from "./NotificationRow";

interface NotificationPreferences {
  [key: string]: {
    push: boolean;
    email: boolean;
    sms: boolean;
  };
}

const NotificationSettings: React.FC = () => {
  const [preferences, setPreferences] = useState<NotificationPreferences>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPreferences();
  }, []);

  const fetchPreferences = async () => {
    try {
      const response = await fetch(
        "https://www.greatfrontend.com/api/projects/challenges/account/notifications"
      );
      const data = await response.json();
      setPreferences(data.preferences);
      setIsLoading(false);
    } catch (error) {
      setError(
        "We're facing some issues at the moment. Please try again later or contact support."
      );
      setIsLoading(false);
    }
  };

  const updatePreference = (
    category: string,
    channel: "push" | "email" | "sms"
  ) => {
    setPreferences((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [channel]: !prev[category][channel],
      },
    }));
  };

  const saveChanges = async () => {
    try {
      const response = await fetch(
        "https://www.greatfrontend.com/api/projects/challenges/account/notifications",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ preferences }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save changes");
      }

      alert("Changes saved successfully");
    } catch (error) {
      setError("Unexpected error. Please try again later or contact support.");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Unexpected error </strong>
        <p className="block sm:inline">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">
        Manage Your Notifications
      </h1>
      <p className="text-sm text-gray-600 mb-6">
        Choose how you want to be notified about the latest updates and
        messages.
      </p>

      <div className="mb-6">
        <div className="flex justify-end mb-2 gap-7">
          <span className="text-sm font-medium text-gray-500">Push</span>
          <span className="text-sm font-medium text-gray-500">Email</span>
          <span className="text-sm font-medium text-gray-500">SMS</span>
        </div>
        {Object.entries(preferences).map(([category, channels]) => (
          <NotificationRow
            key={category}
            title={category
              .replace("_", " ")
              .replace(/\b\w/g, (l) => l.toUpperCase())}
            pushEnabled={channels.push}
            emailEnabled={channels.email}
            smsEnabled={channels.sms}
            onPushToggle={() => updatePreference(category, "push")}
            onEmailToggle={() => updatePreference(category, "email")}
            onSmsToggle={() => updatePreference(category, "sms")}
          />
        ))}
      </div>

      <button
        onClick={saveChanges}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Save changes
      </button>
    </div>
  );
};

export default NotificationSettings;
