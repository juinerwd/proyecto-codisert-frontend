import React from 'react'

import { Input } from "./ui/input"
import { Label } from "./ui/label"

interface Props {
    id: string;
    name: string;
    type: string;
    label: string;
    value?: string | number;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    errors?: string;
}

const InputComponent = ({ id, name, type, label, value, placeholder, onChange, className, errors}: Props) => {
    return (
        <div className={`mt-2 ${className}`}>
            {label && <Label htmlFor="name">{label}</Label>}
            <Input
                id={id}
                placeholder={placeholder}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className='border-gray-500 dark:border-gray-800'
            />
            {errors && <Label className="text-red-500">{errors}</Label>}
        </div>
    )
}

export default InputComponent