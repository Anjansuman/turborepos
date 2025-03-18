"use client"

import { TextInput } from "@repo/ui/text-input";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function Home() {

  const route = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      backgroundColor: 'black',
      margin: '0',
      display: 'flex',
      justifyContent: 'center',
      justifyItems: 'center',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        justifyItems: 'center',
        flexDirection: 'column',
        height: '80px',
        width: '300px'   
      }}>
        <TextInput placeholder={"Type a room I'd"}
          ref={inputRef}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (inputRef.current) inputRef.current.value = e.target.value;
          }}
        />
        <button onClick={() => {
          route.push(`/chat/${inputRef.current?.value}`);
        }}>
          Join room
        </button>
      </div>
    </div>
  );
}
