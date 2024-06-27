import ShrtnrInput from "@/components/lib/shrtnr-input"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_app/home")({
    component: HomeComponent,
})

function HomeComponent() {
    return (
        <div className="my-auto flex max-h-screen justify-center">
            <ShrtnrInput />
        </div>
    )
}
