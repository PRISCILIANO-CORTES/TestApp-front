import { useDispatch, useSelector } from "react-redux";
import productApi from "../api/productApi";
import { globalFilterProducts } from "../helper/globalFilter";
import {
    onGetProduct,
    setProduct,
    setFilterProduct,
    searchByName
} from "../redux/product/productSlice";

export const useProductStore = () => {
    const dispatch = useDispatch();

    const { product, detailProduct, filterProduct } = useSelector((state) => state.product);

    const getProducts = async () => {

        try {
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
            console.log(error);
        }
    };

    const getOneProduct = async (id) => {
        try {
            const { data } = await productApi.get(`/product/${id}`);

            const detail = data.product

            dispatch(onGetProduct(detail));
        } catch (error) {
            console.log(error);
        }
    };

    const searchingByName = (searchName) => {
        try {
            const filterProduct = globalFilterProducts(product, {
                name: searchName
            });

            dispatch(searchByName(searchName));
            dispatch(setFilterProduct(filterProduct));
        } catch (error) {
            console.log(error);
        }
    };
    
    return {
        filterProduct,
        detailProduct,
        getProducts,
        getOneProduct,
        searchingByName
    };
};
