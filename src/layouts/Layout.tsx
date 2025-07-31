import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export function Layout() {
    return (
        <>
            <Header />
            <main className="container md:max-w-[98%] mx-auto py-16 pl-16 border border-gray-200 rounded-lg shadow-xl">
                <Outlet />
            </main>
        </>
    );
}