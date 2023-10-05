'use client';

import { Navbar } from 'flowbite-react';

const AtomNavbar = () => {
    return (
     <Navbar fluid rounded className='mx-4 rounded-lg'>
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
            </span>

      <Navbar.Collapse>
        <Navbar.Link href="#">Home</Navbar.Link>
        <Navbar.Link href="#">About Us</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
        <Navbar.Link href="#">Sign Up</Navbar.Link>
      </Navbar.Collapse>

    </Navbar>
    )
}
export default AtomNavbar