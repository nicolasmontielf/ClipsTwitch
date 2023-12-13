import Logo from "@/components/Navbar/Logo";
import NavbarItems from '@/components/Navbar/NavbarItems'
import SearchInput from '@/components/Common/SearchInput'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";

export default function Navbar(): JSX.Element {
    const [isHomePage, setIsHomePage] = useState<boolean>(false)
    const location = useLocation();

    useEffect(() => {
        location.pathname === '/' ? setIsHomePage(true) : setIsHomePage(false)
    }, [location])

    return (
        <nav className="bg-purple-700 border-gray-200">
            <div className="max-w-screen-xl grid grid-cols-3 mx-auto p-4">
                <div>
                    <Logo />
                </div>

                <div className="items-center justify-center flex md:w-auto" id="navbar-search">
                    <NavbarItems />
                </div>

                <div
                    className="flex justify-end w-full"
                    style={isHomePage ? { display: 'none' } : { display: 'flex' }}
                >
                    <div className="w-full max-w-xs">
                        <SearchInput />
                    </div>
                </div>

            </div>
        </nav>
    )
}