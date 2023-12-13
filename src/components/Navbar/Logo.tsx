import { NavLink } from "react-router-dom";
import LogoImage from '@/assets/logo.png'

export default function Logo(): JSX.Element {
    return (
        <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={LogoImage} className="h-12" alt="Site Logo" />
            <span className="text-white self-center text-2xl font-semibold whitespace-nowrap">MyClips</span>
        </NavLink>
    )
}