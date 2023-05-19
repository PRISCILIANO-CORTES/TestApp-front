import { useEffect, useState } from "react";
import { useProductStore } from '../hooks/useProductStore';
import { Header } from "./Header";
import { Elements } from "./Elements";
import { MainProduct } from "./MainProduct";

export const ProductUI = () => {

    const { filterProduct, getProducts, searchingByName } = useProductStore()

	const [searchName, setSearchName] = useState("");
	
    const changeSearchName = (e) => {
		setSearchName(e.target.value);
	};

	useEffect(() => {
		const fetchData = async () => {
			await getProducts();
		};
		fetchData();
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		searchingByName(searchName);
		// eslint-disable-next-line
	}, [searchName]);

	return (
		<>
        <Header colors={`bg-[#F9F9F9] border-b-2`} />
			<div className="px-[10px] md:px-5 pt-20 md:pt-24">
				<Elements
					searchName={searchName}
					changeSearchName={changeSearchName}
				/>

				<div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 pb-10 md:pt-8 md:pb-10">
					{filterProduct.map((product, proId) => (
						<MainProduct key={proId} {...product} />
					))}
				</div>
			</div>
		</>
	);
}
