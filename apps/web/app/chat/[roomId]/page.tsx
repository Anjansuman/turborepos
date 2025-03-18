import { TextInput } from "@repo/ui/text-input";

export default function Room() {
    return <div
        style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            margin: '0px',
            padding: '0px'
        }}
    >
        <div>
            Hello
        </div>

        <TextInput placeholder={'Type a message...'} />
        
    </div>
}