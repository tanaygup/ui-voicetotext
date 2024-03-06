import React from 'react';
import { Nav } from 'react-bootstrap';
const Sidebar = () => {
    return (
        <div className="sidebar bg-primary" style={{padding: '0 20px'}}> 
            <Nav defaultActiveKey="/home" className="flex-column vh-100">
                <Nav.Link href="/home" className="my-3 text-white">Home</Nav.Link>
                <Nav.Link href="/about" className="my-3 text-white">About</Nav.Link>
                <Nav.Link href="/services" className="my-3 text-white">Services</Nav.Link>
                <Nav.Link href="/contact" className="my-3 text-white">Contact</Nav.Link>
            </Nav>
        </div>
    );
};

export default Sidebar;
