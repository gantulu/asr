import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
const buttonStyles = cva("inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {variants:{variant:{primary:"bg-brand text-white hover:bg-brand-hover",secondary:"bg-orange-50 text-orange-800 hover:bg-orange-100",outline:"border border-line bg-white text-ink hover:bg-mist",ghost:"text-ink hover:bg-mist",destructive:"bg-red-700 text-white hover:bg-red-800"},size:{sm:"min-h-9 px-3 text-xs",md:"min-h-11 px-4",lg:"min-h-12 px-5 text-base",icon:"size-11 p-0"}},defaultVariants:{variant:"primary",size:"md"}});
type Props = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonStyles> & {asChild?:boolean};
export function Button({className,variant,size,asChild=false,...props}:Props){const Component=asChild?Slot:"button";return <Component className={cn(buttonStyles({variant,size}),className)} {...props}/>;}
