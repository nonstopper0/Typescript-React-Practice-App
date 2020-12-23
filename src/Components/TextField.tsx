import React, { useRef, useState } from "react";

interface Props {
    text: string;
    ok?: boolean;
    i?: number;
    function?: (bob: string) => string;
    object?: {
        f1: string;
    }
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: React.FC<Props> = ({handleChange, text}) => {
    const [count, setCount] = useState<number | null>(5);
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={divRef}>
            <h1>{text}</h1>
            <input ref={inputRef} onChange={handleChange}/>
        </div>
    )
}