import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_app/home")({
    component: () => <div>Hello /_app/home!</div>,
})
