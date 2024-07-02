"use client";

import { useState } from "react";
import TextInput from "./TextInput";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (field: keyof FormData) => (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <>
      <TextInput
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleInputChange("email")}
      />
      <TextInput
        label="Name"
        value={formData.name}
        onChange={handleInputChange("name")}
      />
      <TextInput
        label="Password"
        type="password"
        value={formData.password}
        onChange={handleInputChange("password")}
      />
      <TextInput
        label="Password"
        type="password"
        value={formData.password}
        onChange={handleInputChange("password")}
        error="Password should contain (criteria)"
      />
    </>
  );
};

export default Form;
