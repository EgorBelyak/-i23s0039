import clases from './ColorName.module.css'
export const ColorName = ({ color, setColor }) => {
    return (
        <input
            className={clases.input}
            type="text"
            value={color}
            onInput={(e) => setColor(e.target.value)}
        />
    )
}