export function getAllCategories() {
    return `${import.meta.env.VITE_FAKE_STORE_URL}/products/categories`;
}

export function getAllProducts() {
    return `${import.meta.env.VITE_FAKE_STORE_URL}/products`;
}

export function getProductByCategory(category) {
    return `${import.meta.env.VITE_FAKE_STORE_URL}/products/category/${category}`;
}

export function getProductById(id) {
    return `${import.meta.env.VITE_FAKE_STORE_URL}/products/${id}`;
}


export function signup() {
    return `${import.meta.env.VITE_FAKE_STORE_URL}/users`;
}

export function signin() {
    return  `${import.meta.env.VITE_FAKE_STORE_URL}/auth/login`;
}

export function getCartByUser(userId) {
    return  `${import.meta.env.VITE_FAKE_STORE_URL}/carts/user/${userId}`;
}

export function addProductToUserCart() {
    return `${import.meta.env.VITE_FAKE_STORE_URL}/carts`;
} 

export function updateProductInCart() {
    return `${import.meta.env.VITE_FAKE_STORE_URL}/carts/updateProduct`;
} 

