import * as React from "react"
import { cn } from "@/lib/utils"
import { Eye, EyeOff } from "lucide-react"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  icon?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, icon, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)
    const isPassword = type === "password"

    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-semibold text-gray-700">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              {icon}
            </div>
          )}
          <input
            type={isPassword ? (showPassword ? "text" : "password") : type}
            className={cn(
              "flex h-12 w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-sm transition-all duration-200",
              "placeholder:text-gray-400 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 focus:outline-none",
              "disabled:cursor-not-allowed disabled:opacity-50",
              icon && "pl-10",
              isPassword && "pr-10",
              error && "border-red-300 focus:border-red-500 focus:ring-red-100",
              className
            )}
            ref={ref}
            {...props}
          />
          {isPassword && (
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          )}
        </div>
        {error && (
          <p className="text-sm text-red-600 animate-fade-in">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"

export { Input }