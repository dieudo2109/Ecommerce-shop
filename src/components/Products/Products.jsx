import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Products() {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)

    useEffect(() => {
        const getProducts = async () => {

            const response = await fetch("https://fakestoreapi.com/products");

            setData(await response.clone().json());
            setFilter(await response.json());





        }
        getProducts()
    }, [])


    const filterProduct = (cat) => {
        const updateList = data.filter((x) => x.category === cat);
        setFilter(updateList)
    }
    const Showproduct = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pd-5">
                    <button className='btn btn-outline-dark me-2' onClick={() => setFilter(data)}>All</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("women's clothing")}>Women's Cloting</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("electronics")}>Electronics</button>
                </div>
                {filter.map((product) => {
                    return (

                        <div className="col-md-3 mb-4" key={product.id}>
                            <div className="card text-center p-4 h-100"  >
                                <img className="card-img-top" src={product.image} alt={product.title} height="250px" />
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                                    <p className="card-text lead fw-bold">${product.price}</p>
                                    <NavLink to={`/product/${product.id}`} className="btn btn-outline-danger">By Now</NavLink>
                                </div>
                            </div>
                        </div>


                    )
                })}
            </>
        );

    };
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row mb-5">
                    <div className="col-12">
                        <h1 className='fw-border text-center display-6'>
                            <img src='./accsets/text.png' alt='' />
                        </h1>
                        <hr />
                    </div>
                    <div className="row justify-content-center ">
                        {<Showproduct />}
                    </div>
                </div>
            </div>

        </div>
    )
}
