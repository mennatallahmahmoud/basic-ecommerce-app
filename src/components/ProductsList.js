import { useEffect, useState } from "react";
import Product from "./Product";
import Loading from "./Loading";
import './ProductsList.css';

function ProductsList(props) {
    const apiUrl = "https://fakestoreapi.com/products";

    const [prds, setPrds] = useState([]);
    const [cats, setCats] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [loading, setLoading] = useState(false);

    const getAllPrds = () => {
        setLoading(true);
        fetch(apiUrl).then((res) => res.json()).then((data) => {
            setPrds(data);
            setLoading(false);
        });
    }

    const getAllCats = () => {
        setLoading(true);
        fetch(`${apiUrl}/categories`).then((res) => res.json()).then((data) => {
            setCats(data);
            setLoading(false);
        });
    }

    const getPrdsInCat = (catName) => {
        setLoading(true);
        fetch(`${apiUrl}/category/${catName}`).then((res) => res.json()).then((data) => {
            setPrds(data);
            setLoading(false);
        });        
    }
 
    useEffect(() => {
        getAllPrds();
        getAllCats();
    }, [])

    const products = prds.filter((product) => {
        return (
            product.title.toLowerCase().startsWith(searchInput.toLowerCase())
        )
    }).map((product) => {
        return (
            <div className="col-sm-12 col-md-6 col-lg-3" key={product.id}>
                {
                   <Product product={product} showBtn={true} totalText={false} details={false}/>

                }
            </div>
        )
    })

    const categories = cats.map((cat) => {
        return (
            <button className="btn btn-light mx-1 mb-2 mb-md-5 mt-md-5" key={cat} onClick={() => {
                getPrdsInCat(cat)
            }}>{cat}</button>
        )
    })

    return (
        <>
            <div className="container products-list text-center pt-5">
                <h2 className="text-center py-3 mt-5 text-uppercase">Our Products</h2>
                <div className="d-flex align-items-center justify-content-between flex-column flex-md-row">
                    <div className="categories">
                        <button className="btn btn-light mx-1 mb-2 mb-md-5 mt-md-5" onClick={() => {getAllPrds()}}>All</button>
                        {categories}
                    </div>
                    <div className="search mb-5 mb-md-0">
                        <input type="text" className="rounded" onChange={(e) => {
                            setSearchInput(e.target.value)
                        }}/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                    </div>
                </div>
                <div className="row g-4">
                    {loading ? (<Loading />) : (products.length > 0 ? products : <h2>No Products</h2>)}
                </div>
            </div>
        </>
    )
}

export default ProductsList;