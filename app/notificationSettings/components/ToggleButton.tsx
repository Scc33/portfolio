interface ToggleButtonProps {
  isOn: boolean;
  onToggle: () => void;
  disabled?: boolean;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  isOn,
  onToggle,
  disabled = false,
}) => {
  return (
    <button
      onClick={onToggle}
      disabled={disabled}
      className={`relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
        isOn ? "bg-indigo-600" : "bg-gray-200"
      } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
    >
      <span className="sr-only">{isOn ? "Enable" : "Disable"}</span>
      <span
        className={`${
          isOn ? "translate-x-6" : "translate-x-1"
        } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out`}
      />
    </button>
  );
};

export default ToggleButton;
