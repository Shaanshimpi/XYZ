import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'xl'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-gradient-to-r from-primary-500 to-blue-600 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95": 
              variant === "default",
            "bg-red-500 text-white hover:bg-red-600 shadow-lg hover:shadow-xl": 
              variant === "destructive",
            "border-2 border-primary-200 bg-white text-primary-700 hover:bg-primary-50 hover:border-primary-300": 
              variant === "outline",
            "bg-secondary-100 text-secondary-900 hover:bg-secondary-200": 
              variant === "secondary",
            "hover:bg-secondary-100 hover:text-secondary-900": 
              variant === "ghost",
            "text-primary-600 underline-offset-4 hover:underline": 
              variant === "link",
          },
          {
            "h-10 px-6 py-2 text-sm": size === "default",
            "h-8 px-4 py-1 text-xs": size === "sm",
            "h-12 px-8 py-3 text-base": size === "lg",
            "h-14 px-10 py-4 text-lg": size === "xl",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button }