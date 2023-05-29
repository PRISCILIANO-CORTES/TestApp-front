
export const MenuHamburger = () => {
    return (
        <div className="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0 md:hidden">
            <div  className="w-full flex justify-between lg:w-max md:px-0">
                <label className="peer-checked:hamburger block relative z-20 p-2 -mr-2 cursor-pointer lg:hidden">
                    <div 
                        aria-hidden="true" 
                        className="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                    ></div>
                    <div 
                        aria-hidden="true" 
                        className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                    ></div>
                    <div 
                        aria-hidden="true" 
                        className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                    ></div>
                </label>
            </div>
        </div>
    )
}
