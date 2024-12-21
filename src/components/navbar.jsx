// Imports
import React from 'react';
import Link from 'next/link';

// Navbar Component
function Navbar() {
    return (
        <div className="mx-4 p-4 flex justify-between items-center">
            <h1 class="text-2xl"><b className="text-pacstall-yellow">Chaotic</b> <span className="text-pacstall-green">PPR</span></h1>
            <div className="flex-justify-end">
                <Link className="text-pacstall-green text-2xl font-bold" href="https://pacstall.dev">Pacstall</Link>
            </div>
        </div>
    )
}

export default Navbar;