import React, { Component } from 'react';
import logo from '../images/logo192.png';


export class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <>
            {/* <Navbar sticky="bottom" collapseOnSelect="md" bg="dark" variant="dark">
            <img
                src={logo}
                height={30}
                width={30}
                className="d-inline-block align-top"
                alt="logo"
            />

            </Navbar> */}

            <footer className='footer bg-dark fixed-bottom p-3' style={{height: '6vh'}}>
            <img
                src={logo}
                height={30}
                width={30}
                className="d-inline-block align-top"
                alt="logo"
            />
            </footer>
            </>
        );
    }
}
 
