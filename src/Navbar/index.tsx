import Logo from "./Logo";
import NavbarItems from './NavbarItems'
import SearchInput from './SearchInput'

export default function Navbar() {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div>
                    <Logo />
                </div>
                
                <div className="flex md:order-2">
                    <SearchInput />
                </div>

                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                    <NavbarItems />
                </div>
            </div>
        </nav>

    )
}