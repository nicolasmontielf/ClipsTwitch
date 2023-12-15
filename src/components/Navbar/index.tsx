import Logo from "@/components/Navbar/Logo";
import NavbarItems from '@/components/Navbar/NavbarItems'
import SearchInput from '@/components/Common/SearchInput'
import Avatar from '@/components/Navbar/Avatar'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";

export default function Navbar(): JSX.Element {
    const [hideSearchInput, setHideSearchInput] = useState<boolean>(false)
    const location = useLocation();
    const isLoggedIn = localStorage.getItem('twitchToken')

    useEffect(() => {
        const bannedPaths = ['/twitch/callback', '/']
        bannedPaths.includes(location.pathname) ? setHideSearchInput(true) : setHideSearchInput(false)
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
                    className="flex justify-end items-center w-full"
                >
                    <div className="w-full max-w-sm grid grid-cols-3 gap-5">
                        <div className="col-span-2">
                            <span style={hideSearchInput ? { display: 'none' } : { display: 'flex' }}>
                                <SearchInput />
                            </span>
                        </div>
                        <div className="col-span-1" style={isLoggedIn ? { display: 'block' } : { display: 'none' }}>
                            <Avatar />
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    )
}