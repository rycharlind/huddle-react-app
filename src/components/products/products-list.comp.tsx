import React, {useEffect, useState} from 'react'
import firebase from "../../services/firebase.service";
import {getProducts} from "../../services/products.service";

const ProductsListComponent = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        firebase.auth().onAuthStateChanged(async userAuth => {
            console.log('getProducts')
            const data: any = await getProducts('1')
            console.log(data)
            setProducts(data)
        })
    }, [])

    return (
        <div>
            <h3>Product List</h3>
        </div>
    )

}

export default ProductsListComponent
