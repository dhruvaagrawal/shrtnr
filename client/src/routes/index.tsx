import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: IndexComponent,
});

function IndexComponent() {
	return (
		<>
			<div className="p-2">Hello from the top!</div>
		</>
	);
}
