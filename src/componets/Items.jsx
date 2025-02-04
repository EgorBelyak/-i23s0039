const Items = [
    "Красный",
    "Желтый",
    "Зелёный"
];

export const List = () => {
    return (
        <ul className={StyleSheet.list}>
            {Items.map((it) => <li>{it}</li>)
            }
        </ul>
    )

}