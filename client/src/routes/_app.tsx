import Header from "@/components/shared/header.js"
import { Outlet, createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_app")({
    component: LayoutComponent,
})

function LayoutComponent() {
    return (
        <div className="p-4">
            <Header />
            <Outlet />
        </div>
    )
}
