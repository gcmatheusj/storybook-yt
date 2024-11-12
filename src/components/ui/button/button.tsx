import React, { ComponentProps } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../../libs/styles'

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-blue-500 text-primary-foreground hover:bg-blue-500/90",
        destructive: "bg-red-500 text-destructive-foreground hover:bg-red-500/90",
        outline: "bg-transparent text-blue-500 border border-blue-500 hover:border-blue-500/90 hover:text-blue-500/90",
        secondary: "bg-yellow-500 text-secondary-foreground hover:bg-secondary/80",
        link: "bg-transparent text-blue-500 border-none underline-offset-4 hover:underline hover:border-none",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof buttonVariants>

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    console.log({ btnVar: buttonVariants({ variant, size, className }) })
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"
