const Main = (props) => {
    console.log(props);
    return (
        <div className="bg-light">
        <h2>MAIN</h2>
        <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus explicabo cum deleniti porro dolor at. Suscipit tempore in consequatur id beatae 
        iure similique veritatis quia, perspiciatis doloribus, eaque atque? Facere!
        <strong>{props.saludo}</strong>
        </p>
        <div>
        
        </div>
        </div>
        
    )
}
export default Main 