import NotificationSettings from "./components/NotificationSettings";

export const metadata = {
  title: "Notification Settings",
  description: "Responsive notifications settings module that allows users to manage how they receive notifications across different communication channels (push, email, SMS).",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Notification Settings
      </h1>
      <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 bg-white border-b border-gray-200">
            <NotificationSettings />
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
