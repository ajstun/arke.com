import React from 'react'
import Navbar from './Navbar'
import Navbar2 from './Navbar2'

const NavbarManager = (props) => {
    let imp = props.importLinks

    
    if (imp != undefined) {
        return(
            <div>
                <Navbar />
                <Navbar2 Objects={imp}  />
            </div>
        )
    } else {
        return <Navbar />
    }

    
}



export default NavbarManager