"use client"

import React from 'react';
import { Eye, EyeOff } from "lucide-react";

interface TextInputProps {
  label: string;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  hint?: string;
  error?: string;
  value: string;
  onChange: (value: string) => void;
  icon?: React.ReactNode;
  className?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  type = 'text',
  placeholder,
  hint,
  error,
  value,
  onChange,
  icon,
  className = '',
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const inputId = React.useId();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`flex flex-col space-y-1 ${className}`}>
      <label
        htmlFor={inputId}
        className="text-sm font-medium text-neutral-700"
      >
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            {icon}
          </div>
        )}
        <input
          id={inputId}
          type={type === 'password' && showPassword ? 'text' : type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full px-3 py-2 text-base bg-neutral-50 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
            icon ? 'pl-10' : ''
          } ${
            error
              ? 'border-red-600 focus:border-red-600 focus:ring-red-600'
              : 'border-neutral-200 focus:border-indigo-500'
          }`}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={`${inputId}-hint ${inputId}-error`}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5 text-neutral-500" />
            ) : (
              <Eye className="w-5 h-5 text-neutral-500" />
            )}
          </button>
        )}
      </div>
      {hint && !error && (
        <p id={`${inputId}-hint`} className="text-sm text-neutral-500">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${inputId}-error`} className="text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};

export default TextInput;