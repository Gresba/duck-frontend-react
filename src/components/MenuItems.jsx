function MenuItem(props) 
{
    const clickHandler = (e) => {
        console.log(e.target.image)
        props.setImageUrl(e.target.dataset.image)
    }

    return (
        <ul>
            {props.pictures.map(picture => { 
                console.log(picture)
                return <li onClick={clickHandler} data-image={picture}>{picture.split("/")[4]}</li>
            })}
        </ul>
    );
}

export default MenuItem;
