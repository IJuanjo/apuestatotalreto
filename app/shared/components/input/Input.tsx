import { ComponentPropsWithRef } from "react";

interface InputProps extends ComponentPropsWithRef<"input">{
  label: string;
  className?: string;
}

const Input = ({ label, className, ...propsInput }: InputProps) => {
  return (
    <div className={className}>
      <div className="mb-2">{label}</div>
      <input className="px-4 py-2 border-input outline-0 w-full" {...propsInput} />
    </div>
  )
}

export default Input
