const getSingleProduct = async () => {
    const SINGLE_PRODUCT_API = 'https://fakestoreapi.com/products/1';
    try {
        const response = await fetch(SINGLE_PRODUCT_API);
        if (!response.ok) {
            handleHttpError(response.status);
            throw new Error(`Error HTTP: ${response.status}`);
        }
        const data = await response.json();
        handleProduct(data);
    } catch (error) {
        console.error(error);
    }
};

const handleHttpError = (status) => {
    switch(status) {
        case 400:
            console.log('La solicitud no es válida');
            break;
        case 404:
            console.log('El producto no fue encontrado, inténtalo mas tarde');
            break;
        case 500:
            console.log('Ocurrió un error en el servidor, inténtalo mas tarde por favor');
            break;
        default:
            console.log('No se pudo establecer una conexión estable, inténtalo mas tarde');
    }
};

getSingleProduct();

const handleProduct = ({id, image, title, description, category, rating, price}) => {
    const product = {
        id,
        image,
        title,
        description,
        category,
        rating,
        price
    };
    renderProduct(product);
};

const imageProduct = document.getElementById('image');
const titleProduct = document.getElementById('title');
const descriptionProduct = document.getElementById('description');
const categoryProduct = document.getElementById('category');
const rateProduct = document.getElementById('rate');
const countProduct = document.getElementById('count');
const priceProduct = document.getElementById('price');

const renderProduct = ({image, title, description, category, rating, price}) => {
    imageProduct.src = image;
    titleProduct.innerText = title;
    descriptionProduct.innerText = description;
    categoryProduct.innerText = category;
    rateProduct.innerText = rating.rate;
    countProduct.innerText = `(${rating.count})`;
    priceProduct.innerText = `$${price}`;
};