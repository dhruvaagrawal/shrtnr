import Header from "@/components/shared/header.js"
import { Outlet, createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_app")({
    component: LayoutComponent,
})

function LayoutComponent() {
    return (
        <>
            <Header />
            <hr />
            <Outlet />
        </>
    )
}
