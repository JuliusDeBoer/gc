import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";
import pokeball from "~/assets/images/pokeball.jpg";
import pokedex from "~/assets/images/pokedex.png";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "preconnect", href: "https://raw.githubusercontent.com" },
  { rel: "preconnect", href: "https://pokeapi.co" },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div
          style={{ backgroundImage: `url(${pokeball})` }}
          className="w-full min-h-screen py-16 flex flex-col items-center"
        >
          <Link to="/" className="m-8" reloadDocument>
            <img src={pokedex} className="w-96" />
          </Link>
          <main className="mx-auto container bg-white shadow-xl rounded p-8">
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
          </main>
        </div>
      </body>
    </html>
  );
}
