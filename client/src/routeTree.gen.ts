/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from "@tanstack/react-router"

// Import Routes

import { Route as rootRoute } from "./routes/__root"
import { Route as AppImport } from "./routes/_app"
import { Route as IndexImport } from "./routes/index"
import { Route as AppHomeImport } from "./routes/_app/home"

// Create Virtual Routes

const AboutLazyImport = createFileRoute("/about")()

// Create/Update Routes

const AboutLazyRoute = AboutLazyImport.update({
    path: "/about",
    getParentRoute: () => rootRoute,
} as any).lazy(() => import("./routes/about.lazy").then((d) => d.Route))

const AppRoute = AppImport.update({
    id: "/_app",
    getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
    path: "/",
    getParentRoute: () => rootRoute,
} as any)

const AppHomeRoute = AppHomeImport.update({
    path: "/home",
    getParentRoute: () => AppRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
    interface FileRoutesByPath {
        "/": {
            id: "/"
            path: "/"
            fullPath: "/"
            preLoaderRoute: typeof IndexImport
            parentRoute: typeof rootRoute
        }
        "/_app": {
            id: "/_app"
            path: ""
            fullPath: ""
            preLoaderRoute: typeof AppImport
            parentRoute: typeof rootRoute
        }
        "/about": {
            id: "/about"
            path: "/about"
            fullPath: "/about"
            preLoaderRoute: typeof AboutLazyImport
            parentRoute: typeof rootRoute
        }
        "/_app/home": {
            id: "/_app/home"
            path: "/home"
            fullPath: "/home"
            preLoaderRoute: typeof AppHomeImport
            parentRoute: typeof AppImport
        }
    }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
    IndexRoute,
    AppRoute: AppRoute.addChildren({ AppHomeRoute }),
    AboutLazyRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_app",
        "/about"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_app": {
      "filePath": "_app.tsx",
      "children": [
        "/_app/home"
      ]
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/_app/home": {
      "filePath": "_app/home.tsx",
      "parent": "/_app"
    }
  }
}
ROUTE_MANIFEST_END */
