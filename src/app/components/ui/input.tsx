import React, { useEffect, useRef } from "react";

interface InputProps {
  type: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  error: string | null;
  required: boolean;
  name: string;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  name,
  onChange,
  className,
  required,
  error,
}) => {

    const inputRef = useRef<HTMLInputElement | null>(null);


  return (
    <div ref={inputRef}>
      <input
        ref={inputRef}
        type={type}
        placeholder={placeholder}
        name={name}
        required={required}
        onChange={onChange}
        className={`border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none ${className}`}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default Input;
