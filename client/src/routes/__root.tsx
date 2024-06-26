import { ThemeProvider } from "@/components/utils/theme-provider"
import { createRootRoute, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"

export const Route = createRootRoute({
    component: () => (
        <div className="font-work-sans">
            <ThemeProvider defaultTheme="system" storageKey="shrtnr-ui-theme">
                <Outlet />
            </ThemeProvider>
            <TanStackRouterDevtools />
        </div>
    ),
})
