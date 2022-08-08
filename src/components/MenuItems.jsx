function MenuItem(props) 
{
    let counter = 1;

    const getDogName = (url) => {
        let urlArr = url.split("/");
        return urlArr[4];
    }
    
    return (
        <ul>
            {console.log("Props")}
            {console.log(props.pictures)}
            {props.pictures.map(picture => { 
                console.log(picture)
                return <li>{picture}</li>
            })}
        </ul>
    );
}

export default MenuItem;
