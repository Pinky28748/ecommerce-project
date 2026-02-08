import { useParams } from "react-router-dom";

const SingleProduct = () => {
    const {id} = useParams();
    return (
        <div className="single-container">
            <div className="img-box">

            </div>
            <div className="productdetails-conatiner">
                <div className="brand"></div>
            </div>
        </div>
    )

}
export default SingleProduct;