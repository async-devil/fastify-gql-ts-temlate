import { RouteOptions } from "fastify";

import { server } from "./server";

const routes: RouteOptions[] = [];

server.addHook("onRoute", (route) => {
	routes.push(route);
});

function printRoute(route: RouteOptions) {
	console.log(`Route ${route.method.toString()} ${route.url} initialized`);
}

server.listen({ port: 8080, host: "0.0.0.0" }, (err, address) => {
	if (err) {
		console.error(err);
		process.exit(1);
	}
	console.log(`Server is listening at ${address}\n`);

	for (const route of routes) printRoute(route);
});
