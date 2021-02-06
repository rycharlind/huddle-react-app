import firebase from "./firebase.service";

const db = firebase.firestore()

const addProduct = async (tenantId: string, product: any) => {
    await db
        .collection(`products`)
        .doc(tenantId)
        .collection('products')
        .add({
            title: product.title,
            description: product.description
        });
}

class Product {
    title: string;
    description: string;
    constructor(title: string, description: string) {
        this.title = title;
        this.description = description;
    }
}

const productConverter: any = {
    toFirestore: function (product: Product) {
        return {
            title: product.title,
            description: product.description
        }
    },
    fromFirestore: function (snapshot: any, options: any) {
        const data = snapshot.data(options);
        return new Product(data.title, data.description)
    }
}

const getProducts = async (tenantId: string) => {
    const response: any = await db.collection('products')
        .doc(tenantId)
        .collection('products')
        .withConverter(productConverter)
        .get()

    const products: Product[] = [];
    response.docs.map( (doc: any) => {
        products.push(doc.data())
    })

    return products
}

export {
    addProduct,
    getProducts
}
