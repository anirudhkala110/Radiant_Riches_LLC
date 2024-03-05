import React from 'react'

const Footbar = () => {
    return (
        <div className='flex items-center justify-center' style={{ height: '452px', background: '#212731' }}>
            <div className='container  w-3/4' >
                <div className='moreThan800px p-2'>
                    <div className='text-white'>
                        <div className='' style={{ fontSize: '18px', fontWeight: '400' }}>CATEGORIES</div>
                        <div className='my-3' style={{ color: '#B6BDC4', fontSize: '13px' }}>Web Builder</div>
                        <div className='my-3' style={{ color: '#B6BDC4', fontSize: '13px' }}>Hosting</div>
                        <div className='my-3' style={{ color: '#B6BDC4', fontSize: '13px' }}>Data Center</div>
                        <div className='my-3' style={{ color: '#B6BDC4', fontSize: '13px' }}>Robotic-Automation</div>
                    </div>
                    <div className='text-white'>
                        <div className='' style={{ fontSize: '18px', fontWeight: '400' }}>CONTACT</div>
                        <div className='my-3' style={{ color: '#B6BDC4', fontSize: '13px' }}>Contact</div>
                        <div className='my-3' style={{ color: '#B6BDC4', fontSize: '13px' }}>Privacy Policy</div>
                        <div className='my-3' style={{ color: '#B6BDC4', fontSize: '13px' }}>Terms Of Service</div>
                        <div className='my-3' style={{ color: '#B6BDC4', fontSize: '13px' }}>Categories</div>
                        <div className='my-3' style={{ color: '#B6BDC4', fontSize: '13px' }}>About</div>
                    </div>
                    <div className='text-white'>
                        <div selected style={{ fontSize: '16px', color: 'white' }} >United States &nbsp;<i class="bi bi-chevron-down text-white"></i></div>
                    </div>
                </div>
                <div className='text-white lessThan800 mb-3'>
                    <br />
                    <button id="dropdownDefaultButton2" data-dropdown-toggle="dropdown2" class="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"><label className='' style={{ fontSize: '18px', fontWeight: '400' }}>OTHER CATEGORIES</label>
                        <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                    <div id="dropdown2" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton2">
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    <div className='my-3' style={{ color: 'black', fontSize: '13px' }}>Web Builder</div>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    <div className='my-3' style={{ color: 'black', fontSize: '13px' }}>Hosting</div>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    <div className='my-3' style={{ color: 'black', fontSize: '13px' }}>Data Center</div>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    <div className='my-3' style={{ color: 'black', fontSize: '13px' }}>Robotic-Automation</div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='text-white lessThan800 mb-3'>
                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown1" class="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">
                        <div className='' style={{ fontSize: '18px', fontWeight: '400' }}>CONTACT</div>
                        <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                    <div id="dropdown1" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    <div className='my-3' style={{ color: 'black', fontSize: '13px' }}>Contact</div>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    <div className='my-3' style={{ color: 'black', fontSize: '13px' }}>Privacy Policy</div>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    <div className='my-3' style={{ color: 'black', fontSize: '13px' }}>Terms Of Service</div>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    <div className='my-3' style={{ color: 'black', fontSize: '13px' }}>Categories</div>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    <div className='my-3' style={{ color: 'black', fontSize: '13px' }}>About</div>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className='text-white lessThan800 ms-4 mb-3 ps-1'>
                        <div style={{ color: 'white',fontSize:'18px' }} >United States <i class="bi bi-chevron-down text-white"></i></div>
                </div>
            </div>
        </div>
    )
}

export default Footbar