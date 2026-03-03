const Dropdown = () => {
    return(
        <div className="dropdown">
            <div className="box1">
                <span className="box1-text">Welcome</span>
                <span className="box1-text2">To access account and manage orders</span>
                <button className="login-btn">LOGIN/SIGNUP</button>
            </div>
            <hr />
            <div className="box2">
                <div className="content-list">
                    <li>Orders</li>
                    <li>WishList</li>
                    <li>Gift Cards</li>
                    <li>Contact use</li>
                </div>
            </div>
        </div>
    )

}
export default Dropdown;