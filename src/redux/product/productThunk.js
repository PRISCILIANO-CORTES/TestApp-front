import productApi from "../../api/productApi";
import { globalFilterProducts } from "../../helper/globalFilter";
import { onAddNewProduct, onDeleteProduct, setFilterProduct, setProduct } from "./productSlice";

export const addNewProduct = (values) => {
    return async (dispatch) => {
        try {
            const { data } = await productApi.post('/product/', values);

            console.log(data)
            const newProduct = {
                _id: data.product._id,
                name: data.product.name,
                price: data.product.price,
                category: data.product.category,
                description: data.product.description,
                available: data.product.available,
            }

            dispatch(onAddNewProduct({ product: newProduct }))

        } catch (error) {
            console.log(error)
        }
    }
}

export const deleteProductDB = (_id) => {
    return async (dispatch) => {

        try {
            await productApi.delete(`/product/${_id}`);
            const key = _id;

            dispatch(onDeleteProduct(key));

            const [{ data: products }] = await Promise.all([
                await productApi.get("/product")
            ])

            const { products: allProducts } = products

            const listProduct = allProducts.map((product) => {
                const isProduct = product.available;
                return {
                    ...product,
                    isActiveProduct: isProduct
                }
            })

            const filterProduct = globalFilterProducts(listProduct);

            dispatch(setProduct(listProduct));
            dispatch(setFilterProduct(filterProduct));

        } catch (error) {
            console.log(error)
        }
    }
}
