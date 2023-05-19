import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProductDB } from "../redux/product/productThunk";

export const MainProduct = ({ _id, name, price, category, description, isActiveProduct }) => {

    const dispatch = useDispatch()
	const navigate = useNavigate();

	const viewProduct = (_id) => {
		navigate("/product/" + _id);
	};

    const deleteProduct = (_id) => {
        dispatch( deleteProductDB(_id) )
    }

	return isActiveProduct ? (
		<div className="bg-white rounded-2xl hover:shadow-xl shadow-md">
			<div className="pb-2 px-3 pt-6 text-center">
				<p className="mb-4 text-base md:text-xl font-bold tracking-tight text-[#282828]">{name}</p>
                <p className="mb-4 text-base md:text-xl font-bold tracking-tight text-[#282828]">Price: ${price}</p>
				<button
					onClick={() => viewProduct(_id)}
					className="bg-[#007AFF] rounded-full text-white text-sm px-6 pb-[10px] pt-[7px] font-medium w-full mt-2"
				>
					View Product
				</button>
                <button
                    onClick={() => deleteProduct(_id)}
                    className="bg-red-800 rounded-full text-white text-sm px-6 pb-[10px] pt-[7px] font-medium w-full mt-2"
                >
                    Delete product
                </button>
			</div>
		</div>
	) : null;
};
