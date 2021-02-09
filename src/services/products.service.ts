import firebase from "./firebase.service";

const db = firebase.firestore()

const addProduct = async (tenantId: string, product: any) => {
    await db
        .collection(`products`)
        .doc(tenantId)
        .collection('products')
        .add({
            title: product.title,
            description: product.description,
            price: product.price,
            createdAt: firebase.firestore.Timestamp.fromDate(new Date())
        });
}

const getProducts = async (tenantId: string) => {
    const response: any = await db
        .collection('products')
        .doc(tenantId)
        .collection('products')
        .orderBy('createdAt')
        .limit(20)
        .get()

    const products: any[] = [];
    response.docs.map( (doc: any) => {
        const product = doc.data()
        product.id = doc.id
        products.push(product)
    })

    return products
}

export {
    addProduct,
    getProducts
}
