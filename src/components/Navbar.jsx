import React from 'react'

const Navbar = () => {
    return (
        <nav className='container mx-auto bg-slate-800 text-white flex justify-around items-center h-14 p-4'>
            <div className='font-bold text-2xl cursor-pointer'>
                <spna className='text-green-500'>&lt;</spna>
                <spna>Pass</spna>
                <spna className='text-green-500'>OP/&gt;</spna>
            </div>
            <div>
                <button className='flex justify-center items-center gap-2 text-xl bg-green-700 rounded-full px-2 py-1 ring-1 ring-white'>
                    <img width={25} src="icons/github.svg" alt="Github" />Github
                </button>
            </div>
        </nav>
    )
}

export default Navbar
