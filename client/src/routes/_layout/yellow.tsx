import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/yellow")({
	component: () => <div>Hello /_layout/yellow!</div>,
});
