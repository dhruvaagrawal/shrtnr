import { Link } from "@tanstack/react-router"
import { FC } from "react"
import ThemeToggle from "@/components/utils/theme-toggle"

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
    return (
        <div className="flex items-center justify-between gap-2">
            <div className="flex gap-10">
                <Link to="/" className="text-2xl font-medium">
                    shrtnr
                </Link>
                <div className="flex items-center">
                    <Link to="/about" className="[&.active]:font-bold">
                        About
                    </Link>
                </div>
            </div>
            <div className="flex gap-4">
                <ThemeToggle />
            </div>
        </div>
    )
}

export default Header
