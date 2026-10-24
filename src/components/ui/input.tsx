import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
type Props = InputHTMLAttributes<HTMLInputElement> & { label?: string; hint?: string; error?: string };
export function Input({id,label,hint,error,className,...props}:Props) {
 const inputId=id ?? props.name;
 const hintId=hint&&inputId?inputId+"-hint":undefined;
 const errorId=error&&inputId?inputId+"-error":undefined;
 return <div className="grid gap-1.5">
  {label&&<label htmlFor={inputId} className="text-sm font-medium text-ink">{label}</label>}
  <input id={inputId} aria-invalid={error?true:undefined} aria-describedby={[hintId,errorId].filter(Boolean).join(" ")||undefined} className={cn("min-h-11 w-full rounded-xl border border-line bg-white px-3 text-sm text-ink outline-none placeholder:text-muted focus:border-brand focus:ring-2 focus:ring-brand/20 disabled:cursor-not-allowed disabled:bg-mist",error&&"border-red-700 focus:border-red-700 focus:ring-red-700/20",className)} {...props}/>
  {hint&&<p id={hintId} className="text-xs text-muted">{hint}</p>}
  {error&&<p id={errorId} role="alert" className="text-xs font-medium text-red-700">{error}</p>}
 </div>;
}
