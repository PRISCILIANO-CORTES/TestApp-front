import { NavLink } from 'react-router-dom'

export const NavigateLink = () => {
    return (
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
    )
}
