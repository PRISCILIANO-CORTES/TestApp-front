import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useProductStore } from "../hooks/useProductStore";
import { Header } from "./Header";

export const DetailProductUI = () => {
	const { id } = useParams();

	const { detailProduct, getOneProduct } = useProductStore();

	useEffect(() => {
		getOneProduct(id);
		// eslint-disable-next-line
	}, []);

	const { name, price, category, description } = detailProduct;

	if (!detailProduct) {
		return <Navigate to="/product" />;
	}

	return (
		<div>
			<Header colors={`backdrop-filter backdrop-blur`} />

			<div className="pt-16 sm:pt-[92px] lg:pt-24">
            <div className="w-[93%] sm:w-[85%] block mx-auto">
					<div className="grid gap-4 md:grid-cols-1 pt-4 pb-12">
						<div className="p-[12px] bg-white rounded-xl border border-gray-200 shadow-md">
							<h6 className="mb-2 text-xl font-medium tracking-tight text-gray-900">Product:</h6>
							<div className="sm:max-h-[200px] overflow-y-auto section">
								{name}
							</div>

                            <h6 className="mb-2 pt-6 text-xl font-medium tracking-tight text-gray-900">Price:</h6>
							<div className="sm:max-h-[200px] overflow-y-auto section">
								${price}
							</div>

                            <h6 className="mb-2 pt-6 text-xl font-medium tracking-tight text-gray-900">Category:</h6>
							<div className="sm:max-h-[200px] overflow-y-auto section">
								{category}
							</div>
						</div>

						<div className="p-[12px] bg-white rounded-xl border border-gray-200 shadow-md">
							<h6 className="mb-2 text-xl font-medium tracking-tight text-gray-900">Description:</h6>
							<div className="sm:max-h-[200px] overflow-y-auto section">
 								{description}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
