import React from 'react';

interface InputBoxProps {
    id?: string;
    name?: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    autoComplete?: string;
    className?: string;
    error?: string;
    touched?: boolean;
}

const InputBox: React.FC<InputBoxProps> = ({
    id,
    name,
    type = 'text',
    placeholder,
    value,
    onChange,
    onBlur,
    autoComplete,
    className,
    error,
    touched,
}) => {
    return (
        <div className="flex flex-col">
            <input
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                autoComplete={autoComplete}
                className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${error && touched
                    ? 'ring-red-500 focus:ring-red-500'
                    : 'ring-gray-300 focus:ring-indigo-600'
                    } placeholder:text-gray-400 sm:text-sm/6 ${className}`}
            />
            {error && touched && (
                <div className="mt-1 text-red-500 text-sm bg-red-50 p-2 rounded-md">
                    {error}
                </div>
            )}
        </div>
    );
};

export default InputBox;
