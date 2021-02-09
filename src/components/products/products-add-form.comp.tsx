import React from 'react';
import {useFormik} from "formik";
import Form from "react-bootstrap/Form";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import {addProduct} from "../../services/products.service";

const ProductsAddFormComponent = () => {

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            price: 0
        },
        validate: (values) => {
            const errors: any = {};
            // todo add validation
            return errors;
        },
        onSubmit: async (values: any, {setSubmitting, setValues}) => {
            try {
                addProduct('1', values)
            } catch (e) {
                console.log(e)
            }
            setSubmitting(false)
            setValues({title: '', description: '', price: 0})
        }
    });

    return (
        <div>
            <h3>Add Product</h3>
            <Form style={{maxWidth: '600px', minWidth: '400px'}}
                  onSubmit={formik.handleSubmit}>

                <TextField
                    id="title"
                    label="Title"
                    variant="outlined"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.title}
                    fullWidth
                    margin="normal"
                />

                <TextField
                    id="description"
                    label="Description"
                    variant="outlined"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.description}
                    fullWidth
                    multiline
                    rows={4}
                    margin="normal"
                />

                <TextField
                    id="price"
                    label="Price"
                    variant="outlined"
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.price}
                    margin="normal"
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    disabled={formik.isSubmitting}
                    style={{width: '100%', marginTop: '16px'}}>Add Product</Button>

            </Form>
        </div>
    )

}

export default ProductsAddFormComponent;
