interface BadgeProps {
  label: string;
  size?: "sm" | "md" | "lg";
  color: "default" | "red" | "yellow" | "green" | "blue";
}

const Badge: React.FC<BadgeProps> = ({ label, size = "md", color="default" }) => {
  const baseClasses = "px-2 rounded-full font-medium";

  const sizeClasses = {
    sm: "text-sm h-5",
    md: "text-md h-7",
    lg: "text-lg h-9"
  };

  const colorClasses = {
    default: "bg-neutral-100 text-neutral-900 border border-neutral-200",
    red: "bg-red-50 text-red-600 border border-red-200",
    yellow: "bg-amber-50 text-amber-700 border border-amber-200",
    green: "bg-green-50 text-green-700 border border-green-200",
    blue: "bg-indigo-50 text-indigo-700 border border-indigo-200",
  };

  return (
    <button className={`${baseClasses} ${sizeClasses[size]} ${colorClasses[color]}`}>
      {label}
    </button>
  );
};

export default Badge;
