import React, {useEffect, useState} from 'react'
import firebase from "../../services/firebase.service";
// import Table from 'react-bootstrap/Table'
import { DataGrid } from '@material-ui/data-grid';

const db = firebase.firestore()

const ProductsTableComponent = () => {
    const [products, setProducts] = useState<any[]>([])

    useEffect(() => {
        db
            .collection('products')
            .doc('1')
            .collection('products')
            .orderBy('createdAt', "desc")
            .limit(20)
            .onSnapshot(response => {
                const products: any[] = [];
                response.docs.map( (doc: any) => {
                    const product: any = doc.data()
                    product.id = doc.id
                    products.push(product)
                });
                setProducts(products)
            })
    }, [])

    const columns = [
        { field: 'title', headerName: 'Title' },
        { field: 'description', headerName: 'Description', width: 300 },
        { field: 'price', headerName: 'Price' }
    ];

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={products} columns={columns} pageSize={20} checkboxSelection />
        </div>
    )
}

export default ProductsTableComponent
