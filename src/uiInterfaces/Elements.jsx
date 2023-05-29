
export const Elements = ({ searchName, changeSearchName }) => {

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			<div className="lg:col-span-2 flex">

				<div className="w-full md:w-[82%] lg:w-[90%] xl:w-[92%] ">
					<div className="relative">
						<div className="flex absolute inset-y-0 left-0 items-center pl-2 md:pl-3 cursor-pointer">
							<img 
                                src="https://img.icons8.com/?size=512&id=132&format=png"
                                alt="search" 
                                className="w-6 h-6"
                            />
						</div>
						<input
							type="text"
							className="border border-[#686868] w-full lg:w-[55%] xl:w-[45%] text-[#9A9A9A] text-sm rounded-full block pl-10 p-2.5"
							placeholder="Search"
							autoComplete="off"
							value={searchName}
							onChange={changeSearchName}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
