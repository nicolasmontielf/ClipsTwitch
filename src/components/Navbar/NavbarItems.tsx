import { NavLink } from "react-router-dom";

export default function NavbarItems() {
    const items = [
        { url: '/', label: 'Home' },
        { url: '/about', label: 'About' },
        { url: '/contact', label: 'Contact' },
    ];

    return (
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
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
    return 'text-white block py-2'
}

function getClassInactiveClasses() {
    return `${getCommonClasses()}`
}

function getClassActiveClasses() {
    return `${getCommonClasses()} border-b-2 border-white`
}