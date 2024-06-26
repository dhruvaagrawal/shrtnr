import { Link } from "@tanstack/react-router"
import { FC } from "react"

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
    return (
        <div className="flex items-center justify-between gap-2 px-4 py-2">
            <Link to="/" className="text-2xl font-medium">
                shrtnr
            </Link>
            <div>
                <Link to="/about" className="[&.active]:font-bold">
                    About
                </Link>
            </div>
        </div>
    )
}

export default Header
