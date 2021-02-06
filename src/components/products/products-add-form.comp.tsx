import React from 'react';
import {useFormik} from "formik";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {addProduct} from "../../services/products.service";

const ProductsAddFormComponent = (props: any) => {

    const formik = useFormik({
        initialValues: {
            title: '',
            description: ''
        },
        validate: (values) => {
            const errors: any = {};
            // todo add validation
            return errors;
        },
        onSubmit: async (values: any, {setSubmitting}) => {
            try {
                addProduct('1', values)
            } catch (e) {
                console.log(e)
            }
            setSubmitting(false)
        }
    });

    return (
        <div>
            <h3>Add Product</h3>
            <Form style={{maxWidth: '600px', minWidth: '400px'}}
                  onSubmit={formik.handleSubmit}>

                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        placeholder="Title"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.title}
                        size="lg"
                    />
                </Form.Group>

                <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        name="description"
                        placeholder="Description"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.description}
                        size="lg"
                    />
                </Form.Group>

                <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={formik.isSubmitting}
                    style={{width: '100%'}}>Add Product</Button>

            </Form>
        </div>
    )

}

export default ProductsAddFormComponent;
