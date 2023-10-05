import React from 'react'
const Header = ({id}) => {
    return (
    <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light position-fixed" id={id}>
        <div className="container-fluid position-fixed top-0 px-3" style={{backdropFilter: 'blur(10px)'}}>
            <a className="navbar-brand" href="#">Navbar</a>
        <div className="navbar-nav d-flex flex-row gap-2">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            <a className="nav-link" href="#">Features</a>
            <a className="nav-link" href="#">Pricing</a>
            <a className="nav-link" href="#">FAQs</a>
            <a className="nav-link" href="#">About</a>
        </div>
        </div>
    </nav>
    </header>
    )
}
export default Header