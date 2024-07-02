import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'destructive' | 'link';
  size?: 'md' | 'lg' | 'xl' | '2xl';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', leftIcon, rightIcon, children, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background';
    
    const variantClasses = {
      primary: 'bg-indigo-700 text-white hover:bg-indigo-800',
      secondary: 'bg-white text-neutral-900 hover:bg-neutral-50 border border-neutral-200',
      tertiary: 'text-indigo-700 hover:bg-indigo-50',
      destructive: 'bg-red-600 text-white hover:bg-red-700',
      link: 'text-indigo-700 underline-offset-4 hover:underline',
    };

    const sizeClasses = {
      md: 'h-10 py-2 px-4',
      lg: 'h-11 px-8',
      xl: 'h-12 px-10',
      '2xl': 'h-14 px-12',
    };

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

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