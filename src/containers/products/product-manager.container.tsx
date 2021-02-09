import React from 'react'
import ProductsAddFormComponent from "../../components/products/products-add-form.comp";
import ProductsTableComponent from "../../components/products/products-table.comp";

const ProductManagerContainer = () => {

    return (
        <div>
            <div>
                <ProductsAddFormComponent></ProductsAddFormComponent>
            </div>
            <div style={{marginTop: "64px"}}>
                <ProductsTableComponent></ProductsTableComponent>
            </div>
        </div>
    )

}

export default ProductManagerContainer
