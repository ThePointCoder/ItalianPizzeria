import React from 'react'
import Button from './Button'

const Navbar = () => {
    const onClick = () => {}

    return (
        <nav className="bg-blue-400 p-2 font-quicksand text-lg text-gray-50 grid aut-cols-auto justify-center">
            <Button text="New Task" onClick={onClick}/>
        </nav>
    )
}

export default Navbar;