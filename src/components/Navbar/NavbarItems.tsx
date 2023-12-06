import { NavLink } from "react-router-dom";

export default function NavbarItems() {
    const items = [
        { url: '/', label: 'Home' },
        { url: '/contact', label: 'Contact' },
        { url: '/streamer/illojuan', label: 'Streamer' },
    ];

    return (
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {
                items.map((item, index) => {
                    return (
                        <li key={`navbar_item_${index}`}>
                            <NavLink
                                to={item.url}
                                className={({ isActive }) => isActive 
                                        ? getClassActiveClasses()
                                        : getClassInactiveClasses()
                                }
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    )
                })
            }
        </ul>
    )
}

function getCommonClasses() {
    return 'block py-2 px-3 rounded md:p-0 dark:text-white'
}

function getClassInactiveClasses() {
    return `${getCommonClasses()} text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`
}

function getClassActiveClasses() {
    return `${getCommonClasses()} text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500`
}