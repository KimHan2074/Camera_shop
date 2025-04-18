function Items({image, name, price}){
    return(
        <div>
            <img src={image} width="200" height="200" alt={name} />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
        </div>
    );
}

export default Items;