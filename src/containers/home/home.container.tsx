import React from 'react'
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

const HomeContainer = () => {

    return (
        <div>
            <h1>Home</h1>

            <Button variant="link">
                <Link to="/schema-builder">Schema Builder</Link>
            </Button>

            <Button variant="link">
                <Link to="/products">My Products</Link>
            </Button>
        </div>
    )

}

export default HomeContainer
