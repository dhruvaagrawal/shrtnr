import Header from "@/components/shared/header"
import { Outlet, createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_app")({
    component: AppLayoutComponent,
})

function AppLayoutComponent() {
    return (
        <div className="relative flex min-h-screen flex-col gap-4 p-4">
            <Header className="flex-none" />
            <div className="flex min-h-0 flex-1 flex-col">
                <Outlet />
            </div>
        </div>
    )
}
