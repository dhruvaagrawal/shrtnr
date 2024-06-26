import ShrtnrInput from "@/components/lib/shrtnr-input"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_app/home")({
    component: () => HomeComponent,
})

const HomeComponent = () => {
    return (
        <div className="flex min-h-screen flex-col">
            <ShrtnrInput />
        </div>
    )
}
