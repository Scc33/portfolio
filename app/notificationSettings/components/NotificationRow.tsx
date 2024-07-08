import ToggleButton from "./ToggleButton";

interface NotificationRowProps {
  title: string;
  pushEnabled: boolean;
  emailEnabled: boolean;
  smsEnabled: boolean;
  onPushToggle: () => void;
  onEmailToggle: () => void;
  onSmsToggle: () => void;
}

const NotificationRow: React.FC<NotificationRowProps> = ({
  title,
  pushEnabled,
  emailEnabled,
  smsEnabled,
  onPushToggle,
  onEmailToggle,
  onSmsToggle,
}) => {
  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-200">
      <span className="text-sm font-medium text-gray-700">{title}</span>
      <div className="flex space-x-4">
        <ToggleButton isOn={pushEnabled} onToggle={onPushToggle} />
        <ToggleButton isOn={emailEnabled} onToggle={onEmailToggle} />
        <ToggleButton isOn={smsEnabled} onToggle={onSmsToggle} />
      </div>
    </div>
  );
};

export default NotificationRow;
