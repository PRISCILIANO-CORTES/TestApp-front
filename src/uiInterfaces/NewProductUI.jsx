import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { Header } from './Header';
import ValidationForm from "../validations/validateForm";
import { addNewProduct } from '../redux/product/productThunk';
import { useNavigate } from "react-router-dom";

export const NewProductUI = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const newProduct = useFormik({
		initialValues: {
			name: "",
			price: "",
            category: "",
            description: ""
		},
		validationSchema: ValidationForm,
		onSubmit: (values) => {
			try {
				dispatch(addNewProduct(values));
                setTimeout(() => {
                    navigate('/product')
                }, 1000);
			} catch (error) {
				console.log(error);
			}
		},
	});

    return (
        <>
            <Header colors={`bg-[#F9F9F9] border-b-2`} />
            <div className="mx-auto text-center pt-6 sm:pt-16">
                    <div className='px-[10px] md:px-28 lg:px-96 pt-20 md:pt-24'>
                    <h2 className='text-center mb-8 text-lg'>Register Product</h2>
                    <form onSubmit={newProduct.handleSubmit}>
                        <div className="block">
                            <input
                                name="name"
                                autoComplete="off"
                                onBlur={newProduct.handleBlur}
                                value={newProduct.values.name}
                                onChange={newProduct.handleChange}
                                placeholder="Name"
                                className="border rounded-full bg-[#686868] border-gray-300 py-2 sm:py-[6px] px-3 w-full lg:w-[500px] focus:outline-none placeholder-[#fff] text-[#fff]"
                            />
                        </div>
                        {newProduct.touched.name && newProduct.errors.name ? (
                            <div className="text-base sm:text-xs text-bold text-[#FFE001] mt-[5px] mb-[-10px] sm:mt-[5px] sm:mb-[15px]">
                                {newProduct.errors.name}
                            </div>
                        ) : (
                            <div className="mt-[18px] sm:mb-[5px]" />
                        )}

                        <div className="block">
                            <input
                                name="price"
                                autoComplete="off"
                                onBlur={newProduct.handleBlur}
                                value={newProduct.values.price}
                                onChange={newProduct.handleChange}
                                placeholder="Price"
                                className="border rounded-full bg-[#686868] border-gray-300 py-2 sm:py-[6px] px-3 w-full lg:w-[500px] focus:outline-none placeholder-[#fff] text-[#fff]"
                            />
                        </div>
                        {newProduct.touched.price && newProduct.errors.price ? (
                            <div className="text-base sm:text-xs text-bold text-[#FFE001] mt-[5px] mb-[-10px] sm:mt-[5px] sm:mb-[15px]">
                                {newProduct.errors.price}
                            </div>
                        ) : (
                            <div className="mt-[18px] sm:mb-[5px]" />
                        )}

                        <div className="block">
                            <input
                                name="category"
                                autoComplete="off"
                                onBlur={newProduct.handleBlur}
                                value={newProduct.values.category}
                                onChange={newProduct.handleChange}
                                placeholder="Category"
                                className="border rounded-full bg-[#686868] border-gray-300 py-2 sm:py-[6px] px-3 w-full lg:w-[500px] focus:outline-none placeholder-[#fff] text-[#fff]"
                            />
                        </div>
                        {newProduct.touched.category && newProduct.errors.category ? (
                            <div className="text-base sm:text-xs text-bold text-[#FFE001] mt-[5px] mb-[-10px] sm:mt-[5px] sm:mb-[15px]">
                                {newProduct.errors.category}
                            </div>
                        ) : (
                            <div className="mt-[18px] sm:mb-[5px]" />
                        )}

                        <div className="block">
                            <textarea
                                name="description"
                                autoComplete="off"
                                onBlur={newProduct.handleBlur}
                                value={newProduct.values.description}
                                onChange={newProduct.handleChange}
                                placeholder="Description"
                                className="border rounded-full bg-[#686868] border-gray-300 py-2 sm:py-[6px] px-3 w-full lg:w-[500px] focus:outline-none placeholder-[#fff] text-[#fff]"
                            />
                        </div>
                        {newProduct.touched.description && newProduct.errors.description ? (
                            <div className="text-base sm:text-xs text-bold text-[#FFE001] mt-[5px] mb-[-10px] sm:mt-[5px] sm:mb-[15px]">
                                {newProduct.errors.description}
                            </div>
                        ) : (
                            <div className="mt-[18px] sm:mb-[5px]" />
                        )}
                    
                    
                        {!newProduct.values.name || !newProduct.values.price || !newProduct.values.category || !newProduct.values.description ? (
                            <button
                                className="mt-4 sm:mt-6 py-[11px] sm:py-[9px] rounded-full bg-[#CACACA] text-[#686868] w-full lg:w-[500px] text-sm cursor-pointer"
                                disabled
                            >
                                Register product
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="mt-4 sm:mt-6 py-[11px] sm:py-[9px] rounded-full bg-[#00A98B] hover:bg-opacity-80 text-white w-full lg:w-[500px] text-sm"
                            >
                                Register product
                            </button>
                        )}
                    </form>
                    </div>
            </div>


            
        </>
    )
}
