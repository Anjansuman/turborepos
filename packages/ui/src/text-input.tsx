import { Ref } from "react"

interface InputProps {
    placeholder: string,
    ref?: Ref<HTMLInputElement>,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextInput = ({ placeholder, ref, onChange }: InputProps) => {
    return <input type="text"
        placeholder={placeholder}
        style={{
            padding: '10px',
            margin: '10px',
            height: '20px'
        }}
        ref={ref}
        onChange={onChange}
    />
        
}