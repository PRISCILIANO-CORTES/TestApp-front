import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = ({ colors }) => {

    return (
        <nav className={`${colors} px-3 py-3 sm:px-8 sm:py-5 fixed w-full z-20 top-0`}>
			<div className="flex flex-wrap justify-between items-center mx-auto">
				<div className="flex items-center">
					<p>Prisciliano Cortés</p>
				</div>
				<div className="hidden md:flex md:justify-between md:items-center" id="navbar-default">
					<div className="pr-4">
						<NavLink
							to="/product"
							className={({ isActive }) =>
								`text-red-900 rounded-full text-sm px-6 pb-[6px] pt-[3px] font-medium mr-4 ${
									isActive ? "bg-[#007AFF] text-red-900" : "text-[#282828]"
								}`
							}
						>
							Products
						</NavLink>
                        <NavLink
							to="/new"
							className={({ isActive }) =>
								`text-red-900 rounded-full text-sm px-6 pb-[6px] pt-[3px] font-medium mr-4 ${
									isActive ? "bg-[#007AFF] text-red-900" : "text-[#282828]"
								}`
							}
						>
							New Product
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
    )
}
