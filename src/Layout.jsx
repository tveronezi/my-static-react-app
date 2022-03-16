import {Link} from "react-router-dom";
import './App.css';

export function Layout({children}) {
    return (
        <section className="h-screen flex flex-col">
            <header className="bg-blue-800 h-{headerHeight}">header</header>
            <nav className="p-4 text-lg bg-yellow-800 h-{navHeight}">
                <Link className="underline" to="/a">a</Link>
                <Link className="underline" to="/b">b</Link>
                <Link className="underline" to="/c">c</Link>
                <Link className="underline" to="/d">d</Link>
                <Link className="underline" to="/e">e</Link>
            </nav>
            <main className="grow overflow-auto">
                {children}
            </main>
        </section>
    )
}
