import './Product.css';
import { Link } from 'react-router-dom';

function Product(props) {

    const {product, showBtn, totalText, details} = props;

    return (
        <>
            {details ?
            <div className="card container pt-5 d-flex flex-lg-row align-items-center border-0">
                <div className='card-img border p-5 mt-5 mt-md-0 text-center'>
                    <h5 className="card-title">
                        {totalText ? product.title : `${product.title.slice(0, 22)}...`} 
                    </h5>
                    <img src={product.image} className="card-img-top mb-0 mt-3" alt={product.title} />
                </div>
                <div className="card-body card-info d-flex flex-column justify-content-between mx-3">
                    <p className="card-text mx-0">
                        {totalText ? product.description : `${product.description.slice(0, 50)}...`}
                    </p>
                    <p>Available For - <span className='fw-bold'>{product.price}$</span></p>
                    {/* <p>Rating - <span className='fw-bold'>{product.rating.rate} Stars</span></p> */}
                    {showBtn && <Link className="btn btn-primary mb-2" to={`/products/${product.id}`}>See more</Link>}
                </div>
            </div> :
            <div className="card">
                <img src={product.image} className="card-img-top m-4 ms-auto me-auto" alt={product.title} />
                <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title">
                        {totalText ? product.title : `${product.title.slice(0, 22)}...`} 
                    </h5>
                    <p className="card-text mx-0">
                        {totalText ? product.description : `${product.description.slice(0, 50)}...`}
                    </p>
                    {showBtn && <Link className="btn btn-primary" to={`/products/${product.id}`}>See more</Link>}
                </div>
            </div>}
        </>
    )
}

export default Product;