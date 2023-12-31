import { useState } from 'react'

export default function Avatar(): JSX.Element {
    const [showDropdown, setShowDropdown] = useState<boolean>(false)

    function toggleDropdown(): void {
        setShowDropdown((prevState) => !prevState)
    }

    function TwitchItem(): JSX.Element {
        const twitchUser = JSON.parse(localStorage.getItem('twitchUser')!)
        if (!twitchUser) {
            return (<></>)
        }

        return (
            <>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                    <path fill="#7e57c2" d="M42,27.676c-3,3.441-6,6.882-9,10.324c-2.333,0-4.667,0-7,0c-2.333,2-4.667,4-7,6c-1,0-2,0-3,0	c0-2,0-4,0-6c-3.333,0-6.667,0-10,0c0-7.431,0-14.863,0-22.294C7.455,12.804,8.909,9.902,10.364,7C20.909,7,31.455,7,42,7	C42,13.892,42,20.784,42,27.676z"></path>
                    <path fill="#fafafa" d="M39,26.369c-1.667,1.877-3.333,3.754-5,5.631c-2.333,0-4.667,0-7,0c-2.333,2-4.667,4-7,6c0-2,0-4,0-6	c-2.667-0.008-5.333-0.016-8-0.024c0-7.326,0-14.651,0-21.976c9,0,18,0,27,0C39,15.456,39,20.912,39,26.369z"></path>
                    <rect width="3" height="10" x="21" y="16" fill="#7e57c2"></rect>
                    <rect width="3" height="10" x="30" y="16" fill="#7e57c2"></rect>
                </svg> {twitchUser.display_name}
            </>
        )
    }

    return (
        <div>
            <img
                className="w-10 h-10 rounded-full cursor-pointer"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="Rounded avatar"
                onClick={toggleDropdown}
            />
            <div
                className={`absolute border shadow-lg rounded bg-white px-5 py-3 ${showDropdown ? 'flex' : 'hidden'}`}
                id="user-dropdown"
            >
                <ul>
                    <li className="flex items-center gap-3">
                        <TwitchItem />
                    </li>
                </ul>
            </div>
        </div>
    )
}