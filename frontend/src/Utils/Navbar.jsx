import React from 'react'

const Navbar = () => {
    return (
        <div className='mb-5'>
            <nav class="border-gray-200 dark:bg-gray-900" style={{ background: '#212731' }}>
                <div class="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
                    <div className='flex justify-between items-center' >
                        <a href="https://flowbite.com/" class="flex items-center px-2 mx-5 hide500 hide650 space-x-3 ">
                            <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                            <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Logo & Name</span>
                        </a>
                        <div className='flex bg-white rounded space-x-3 py-1 px-2 mx-5 px-1'>
                            <i class="bi bi-search"></i>
                            <input className='rounded' />
                        </div>
                        <div class="hidden w-full mx-5 md:block md:w-auto space-x-3 px-2" id="navbar-default">
                            <ul class="font-medium flex justify-between w-full">
                                <li className='mx-3'>
                                    <a href="#" class="text-white block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Categories</a>
                                </li>
                                <li className='mx-3'>
                                    <a href="#" class="text-white block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Website Builders</a>
                                </li>
                                <li className='mx-3'>
                                    <a href="#" class="text-white block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Today's Deals</a>
                                </li>
                                {/* <li>
                                    <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                                </li> */}
                            </ul>
                        </div>


                        <div class="text-center maxWIdth768 pt-2">
                            <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example">
                                <svg class="w-5 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            </button>
                        </div>
                        <div id="drawer-example" class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-label">
                            <h3 id="drawer-label" class=" text-xl inline-flex items-center mb-4 text-base text-gray-500 dark:text-gray-400" style={{ fontWeight: '500' }} >
                                Organization Name
                            </h3>
                            <button type="button" data-drawer-hide="drawer-example" aria-controls="drawer-example" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span class="sr-only">Close menu</span>
                            </button>
                            <div class="w-full border mb-2 rounded-e-lg shadow" style={{ fontWeight: '500' }}>
                                <a href="#" class="text-black block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Categories</a>
                            </div>
                            <div class="w-full border mb-2 rounded-e-lg shadow" style={{ fontWeight: '500' }}>
                                <a href="#" class="text-black block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Website Builders</a>
                            </div>
                            <div class="w-full border mb-2 rounded-e-lg shadow" style={{ fontWeight: '500' }}>
                                <a href="#" class="text-black block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Today's Deals</a>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
