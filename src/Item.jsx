const Item = (props) => {
    console.log(props.content)//{content:"課題をする"}
    return (
        <li>
            <input type='checkbox' />
            <span>{props.content}</span>
        </li>
    )
}

export default Item;