import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Modal from "../components/Modal";
import { useEffect }  from "react";
import { useAppStore } from "../stores/useAppStore";
import Notification from "../components/Notification";
export function Layout() {
    const loadFromStorage = useAppStore((state) => state.loadFromStorage);
    useEffect(() => {
      loadFromStorage();
    }, [])
    
    return (
        <>
            <Header />
            <main className="container md:max-w-[98%] mx-auto py-16 pl-16 border border-gray-200 rounded-lg shadow-xl">
            <Outlet />
            </main>
            <Modal />
            <Notification />
        </>
    );
}