import { useState } from "react"



function Settings() {
const [nick,setnick] = useState('')

    return (
        <>
            <input
            type="text"
            value={nick}
            onChange={(event) => setnick(event.target.value)}
            />
        </>
    )
}

export default Settings