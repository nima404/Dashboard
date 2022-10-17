export const ListItem = (props) => {
    const { listItemClassName, buttonClassName, iconClassName, paragrafClassName, paragrafText } = props;
    return (
        <>
            <li className={listItemClassName}>
                <button className={buttonClassName}>
                    <i className={iconClassName}></i>
                    <p className={paragrafClassName}>{paragrafText}</p>
                </button>
            </li>
        </>
    )
}