import { useRouter } from "next/router";
import { Sidebar } from "./Sidebar";

export function Layout({ children }) {
    const router = useRouter();
    const showSidebar = router.pathname === '/' ? false : true;
    return (
        <>
            { showSidebar && <Sidebar />}
            {children}
        </>
    )
}