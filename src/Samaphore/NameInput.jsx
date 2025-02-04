import { ColorName } from './ColorName'
import { useState } from 'react'
export const Samaphone = () => {
    const [color, setColor] = useState();
    return (
        <>
            <ColorName />
        </>
    )
}