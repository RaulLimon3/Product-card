// Accedemos a nuestro endpoint
const getSingleProduct = async () => {
    const SINGLE_PRODUCT_API = 'https://fakestoreapi.com/products/1';
    try {
        const response = await fetch(SINGLE_PRODUCT_API);
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.error(error);
    }
};

getSingleProduct();

