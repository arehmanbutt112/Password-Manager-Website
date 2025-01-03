import React from 'react'

const PasswordManager = () => {
    return (
        <main>
            <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div></div>

            <div className='container mx-auto py-5 max-w-[50vw]'>
                <div className='flex justify-center items-center flex-col gap-2'>
                    <h1 className='font-bold text-2xl'>
                        <spna className='text-green-500'>&lt;</spna>
                        <spna>Pass</spna>
                        <spna className='text-green-500'>OP/&gt;</spna>
                    </h1>
                    <p>Your own Password Manager</p>
                </div>
                <div className='flex justify-center items-center flex-col gap-3 py-5'>
                    <input className='rounded-full border border-green-500 w-full px-4 py-1' placeholder='Enter Website URL' type="text" />
                    <div className='flex gap-2 w-full'>
                        <input className='rounded-full w-full border border-green-500 px-4 py-1' placeholder='Enter Username, Email or Phone number' type="text" />
                        <div className='relative'>
                            <input className='rounded-full w-full border border-green-500 px-4 py-1' placeholder='Enter Passowrd' type="text" />
                            <span className='absolute right-2 top-2 cursor-pointer'>
                                <img width={20} src="icons/eye.png" alt="eye" />
                            </span>
                        </div>
                    </div>
                    <button className='flex justify-center items-center bg-green-400 hover:bg-green-300 rounded-full px-2 border border-green-900'>
                        <lord-icon
                            src="https://cdn.lordicon.com/hmzvkifi.json"
                            trigger="hover"
                            state="hover-pinch"
                            colors="primary:#000000"
                            style={{ "width": "28px", "height": "28px" }}>
                        </lord-icon>Save
                    </button>
                </div>
            </div>

        </main>
    )
}

export default PasswordManager