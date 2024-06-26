import Header from "@/components/shared/header.js"
import { Outlet, createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_app")({
    component: AppLayoutComponent,
})

function AppLayoutComponent() {
    return (
        <div className="flex min-h-screen flex-col p-4">
            <Header />
            <Outlet />
        </div>
    )
}
