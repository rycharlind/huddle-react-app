import React from 'react'
import ProductsAddFormComponent from "../../components/products/products-add-form.comp";
import ProductsListComponent from "../../components/products/products-list.comp";

const ProductManagerContainer = () => {

    return (
        <div>
            <div>
                <ProductsAddFormComponent></ProductsAddFormComponent>
            </div>
            <div style={{marginTop: "64px"}}>
                <ProductsListComponent></ProductsListComponent>
            </div>
        </div>
    )

}

export default ProductManagerContainer
