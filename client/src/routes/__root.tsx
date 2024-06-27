import { ThemeProvider } from "@/components/utils/theme-provider"
import { createRootRoute, Outlet } from "@tanstack/react-router"

export const Route = createRootRoute({
    component: () => (
        <div className="font-work-sans antialiased">
            <ThemeProvider defaultTheme="system" storageKey="shrtnr-ui-theme">
                <Outlet />
            </ThemeProvider>
        </div>
    ),
})
