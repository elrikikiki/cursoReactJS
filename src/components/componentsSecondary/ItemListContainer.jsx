const ItemListContainer = ({greeting}) => {
    /* const {greeting} = props */
    return(
        <div className="col-3 text-center mb-5">
            <h3>
            {greeting}
        </h3>
        </div>
    )
}
export default ItemListContainer