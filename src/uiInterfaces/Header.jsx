import { useState } from 'react';
import { Menu } from '../components/ui/Menu';
import { NavigateLink } from '../components/Navigate/NavigateLink';
import { MenuHamburger } from '../components/ui/MenuHamburger';

export const Header = ({ colors }) => {

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <nav className={`${colors} px-3 py-3 sm:px-8 sm:py-5 fixed w-full z-20 top-0`}>
                <div className="flex flex-wrap justify-between items-center mx-auto">
                    <div className="flex items-center">
                        <p className='text-lg font-bold'>Prisciliano Cortés</p>
                    </div>

                    <div onClick={ () => setOpenMenu( (prev) => !prev) }>
                        <MenuHamburger />
                    </div>

                    <div className="hidden md:flex md:justify-between md:items-center">
                        <NavigateLink />
                    </div>
                </div>
            </nav>
            <Menu openMenu={openMenu} />
        </>
    )
}
