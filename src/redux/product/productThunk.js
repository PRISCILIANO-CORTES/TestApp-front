import Swal from "sweetalert2";
import productApi from "../../api/productApi";
import { globalFilterProducts } from "../../helper/globalFilter";
import { onAddNewProduct, onDeleteProduct, onUpdateProduct, setFilterProduct, setProduct } from "./productSlice";

export const addNewProduct = (values) => {
    return async (dispatch) => {
        try {
            const { data } = await productApi.post('/product/', values);

            const newProduct = {
                _id: data.product._id,
                name: data.product.name,
                price: data.product.price,
                category: data.product.category,
                description: data.product.description,
                available: data.product.available,
            }

            dispatch(onAddNewProduct({ product: newProduct }))

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
              
            Toast.fire({
                icon: 'success',
                title: 'Product create successfully'
            })
        } catch (error) {
            console.log(error);
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
              
            Toast.fire({
                icon: 'error',
                title: 'Failed in created product'
            })
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

export const updateProductDB = (values) => {
    return async(dispatch) => {

        const { id, name, price, category, description } = values;

        try {
            await productApi.put(`/product/${id}`, { name, price, category, description });

            dispatch(onUpdateProduct(values))

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
              
            Toast.fire({
                icon: 'success',
                title: 'Product updated successfully'
            })

        } catch (error) {
            console.log(error)
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
              
            Toast.fire({
                icon: 'error',
                title: 'Failed in updated product'
            })
        }
    }
}