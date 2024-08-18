import ThemeToggle from "@/components/utils/theme-toggle"
import { cn } from "@/lib/utils"
import { Link } from "@tanstack/react-router"
import { FC, HTMLAttributes } from "react"

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

const Header: FC<HeaderProps> = ({ className, ...props }) => {
    return (
        <div className={cn("flex items-center justify-between gap-2", className)} {...props}>
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
