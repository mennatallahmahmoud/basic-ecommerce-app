import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import './ProductsDetails.css'
import Loading from "./Loading";

function ProductDetails() {
    const api_url = "https://fakestoreapi.com/products";
    const params = useParams();

    const [prd, setPrd] = useState({});
    const [loading, setLoading] = useState(false);

    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        setLoading(true);
        fetch(`${api_url}/${params.productId}`).then((res) => res.json()).then((prd) => {
            setPrd(prd);
            setLoading(false);
        });
    }, [])
    
    return(
        <div className="container prd-details-container">
            {loading ? <Loading /> : <Product product={prd} showBtn={false} totalText={true} details={true}/>}
        </div>
    )
}

export default ProductDetails;