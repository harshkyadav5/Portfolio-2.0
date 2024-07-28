import "./Navigation.css";

function Navigation() {
    return (
        <>
        <nav className="navbar">
            <ul className="navbarList">
                <li className="navbarItem">
                    <button className="navbarLink active">About</button>
                </li>
                <li className="navbarItem">
                    <button className="navbarLink">Resume</button>
                </li>
                <li className="navbarItem">
                    <button className="navbarLink">Portfolio</button>
                </li>
                <li className="navbarItem">
                    <button className="navbarLink">Blog</button>
                </li>
                <li className="navbarItem">
                    <button className="navbarLink">Contact</button>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Navigation;