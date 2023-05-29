import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import validateForm from '../validations/validateForm';
import { updateProductDB } from '../redux/product/productThunk';
import { useNavigate } from 'react-router-dom';

export const ModalEdit = ({ setShowModal, id, name, price, category, description }) => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-5xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-4xl font-semibold">
                                Edit product: { name }
                            </h3>
                            
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <Formik
                                initialValues={{ name, price, category, description }}
                                onSubmit={(values, { setSubmitting }) => {
                                    try {
                                        const val = {
                                            ...values,
                                            id
                                        }

                                        dispatch( updateProductDB(val) )
                                        setTimeout(() => {
                                            setShowModal(false);
                                            navigate('/product')
                                        }, 1000);
                                    } catch (error) {
                                        console.log(error)
                                    }
                                }}
                                validationSchema={ validateForm }
                            >
                                { formData => (
                                    <Form>
                                        <div className='mb-4'>
                                            <Field 
                                                name="name" 
                                                type="text"
                                                placeholder="Name"
                                                className="border rounded-full bg-[#686868] border-gray-300 py-2 sm:py-[6px] px-3 w-full lg:w-[500px] focus:outline-none placeholder-[#fff] text-[#fff]"
                                            />
                                            <ErrorMessage name="name">
                                                { err => 
                                                    <div className="text-base sm:text-xs text-bold text-red-800 mt-[3px] mb-[-10px] sm:mt-[4px] sm:mb-[15px]">
                                                    {err}
                                                </div> 
                                                }
                                            </ErrorMessage>
                                        </div>

                                        <div className='mb-4'>
                                            <Field 
                                                name="price" 
                                                type="number"
                                                placeholder="Price"
                                                className="border rounded-full bg-[#686868] border-gray-300 py-2 sm:py-[6px] px-3 w-full lg:w-[500px] focus:outline-none placeholder-[#fff] text-[#fff]"
                                            />
                                            <ErrorMessage name="price">
                                                { err => 
                                                    <div className="text-base sm:text-xs text-bold text-red-800 mt-[3px] mb-[-10px] sm:mt-[4px] sm:mb-[15px]">
                                                    {err}
                                                </div> 
                                                }
                                            </ErrorMessage>
                                        </div>

                                        <div className='mb-4'>
                                            <Field 
                                                name="category" 
                                                type="text"
                                                placeholder="Category"
                                                className="border rounded-full bg-[#686868] border-gray-300 py-2 sm:py-[6px] px-3 w-full lg:w-[500px] focus:outline-none placeholder-[#fff] text-[#fff]"
                                            />
                                            <ErrorMessage name="category">
                                                { err => 
                                                    <div className="text-base sm:text-xs text-bold text-red-800 mt-[3px] mb-[-10px] sm:mt-[4px] sm:mb-[15px]">
                                                    {err}
                                                </div> 
                                                }
                                            </ErrorMessage>
                                        </div>

                                        <div className='mb-4'>
                                            <Field 
                                                name="description"
                                                as="textarea"
                                                placeholder="Description"
                                                className="border rounded-full bg-[#686868] border-gray-300 py-2 sm:py-[6px] px-3 w-full lg:w-[500px] focus:outline-none placeholder-[#fff] text-[#fff]"
                                            />
                                            <ErrorMessage name="description">
                                                { err => 
                                                    <div className="text-base sm:text-xs text-bold text-red-800 mt-[3px] mb-[-10px] sm:mt-[4px] sm:mb-[15px]">
                                                    {err}
                                                </div> 
                                                }
                                            </ErrorMessage>
                                        </div>

                                        {
                                            !formData.values.name || !formData.values.price || !formData.values.category || !formData.values.description ?
                                            (
                                                <button
                                                    className="mt-4 sm:mt-6 py-[11px] sm:py-[9px] rounded-full bg-[#CACACA] text-[#686868] w-full lg:w-[500px] text-sm cursor-pointer"
                                                    disabled
                                                >
                                                    Edit product
                                                </button>
                                            ) : (
                                                <button
                                                    type="submit"
                                                    className="mt-4 sm:mt-6 py-[11px] sm:py-[9px] rounded-full bg-[#00A98B] hover:bg-opacity-80 text-white w-full lg:w-[500px] text-sm"
                                                >
                                                    Edit product
                                                </button>
                                            )
                                        }
                                    </Form>
                                )}
                            </Formik>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}
