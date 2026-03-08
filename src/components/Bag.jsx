const Bag = ({cartItems,removeFromCart}) => {
    return(
        <div>
            <h2>Your Bag</h2>
            {cartItems.length ===0 ? (
                <p>Your bag is empty</p>
            ):(
                cartItems.map((p) => (
                    <div key={p.id}>
                         <img src={p.image} width="100" />
                         <h4>{p.title}</h4>
                         <p>{p.price}</p>
                         <button onClick={() => removeFromCart(p.id)}>Remove</button>
                    </div>
                ))
            )}
        </div>
    )
}

export default Bag;