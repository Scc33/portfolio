import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'destructive' | 'link';
  size?: 'md' | 'lg' | 'xl' | '2xl';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  color?: 'indigo' | 'red' | 'green' | 'blue' | 'yellow'; // New prop for link color
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', color = 'indigo', leftIcon, rightIcon, children, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background';
    
    const variantClasses = {
      primary: 'bg-indigo-700 text-white hover:bg-indigo-800',
      secondary: 'bg-white text-neutral-900 hover:bg-neutral-50 border border-neutral-200',
      tertiary: 'text-indigo-700 hover:bg-indigo-50',
      destructive: 'bg-red-600 text-white hover:bg-red-700',
      link: `underline-offset-4 hover:underline`,
    };

    const linkColorClasses = {
      indigo: 'text-indigo-700 hover:text-indigo-800',
      red: 'text-red-600 hover:text-red-700',
      green: 'text-green-600 hover:text-green-700',
      blue: 'text-blue-600 hover:text-blue-700',
      yellow: 'text-yellow-600 hover:text-yellow-700',
    };

    const sizeClasses = {
      md: 'h-10 py-2 px-4',
      lg: 'h-11 px-8',
      xl: 'h-12 px-10',
      '2xl': 'h-14 px-12',
    };

    const classes = `${baseClasses} ${variantClasses[variant]} ${variant === 'link' ? linkColorClasses[color] : ''} ${sizeClasses[size]} ${className}`;

    return (
      <button className={classes} ref={ref} {...props}>
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button };
export type { ButtonProps };