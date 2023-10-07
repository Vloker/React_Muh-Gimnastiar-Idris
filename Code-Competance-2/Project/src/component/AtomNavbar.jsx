'use client';

import { Navbar } from 'flowbite-react';

const AtomNavbar = () => {
    return (
     <Navbar fluid rounded className='mx-4 rounded-lg'>
            <img className="self-center whitespace-nowrap w-10 h-10" src="/images/Subtract.svg" />

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