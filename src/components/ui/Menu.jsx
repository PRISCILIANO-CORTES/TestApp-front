import { NavigateLink } from '../Navigate/NavigateLink'

export const Menu = ({ openMenu }) => {
    return (
        <div className={ openMenu ? "showMenuNav" : "hideMenuNav" }>
            <div className={ openMenu ? "w-full px-6" : "hidden"}>
                <div className="text-center">
                    <p className='mb-6 text-2xl font-bold'>PRODUCT APP MENU</p>
                    <NavigateLink />
                </div>
            </div>
        </div>
    )
}
