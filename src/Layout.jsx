import {Link} from "react-router-dom";
import './App.css';

export function Layout({children}) {
    const links = ['a', 'b', 'c', 'd', 'e'];
    return (
        <section className="h-screen flex flex-col">
            <header className="bg-blue-800 h-44">header</header>
            <nav className="p-4 text-lg bg-yellow-800 h-36 space-x-4">
                {links.map((link) =>
                    <Link className="underline" to={"/" + link}>{link}</Link>
                )}
            </nav>
            <main className="grow overflow-auto">
                {children}
            </main>
        </section>
    )
}
