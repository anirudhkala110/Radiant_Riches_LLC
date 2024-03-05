import React from 'react'
import PI from './productImage.png'
import './Homepage.css'

const Homepage = () => {
    return (
        <div>
            <div className='md:container container' style={{ maxWidth: "1100px" }}>
                {/* Title */}
                <div className='text-4xl text-start mb-5'>Best Website builders in the US</div>
                {/* info part */}
                <span className='flex justify-between items-center border py-2' style={{ width: "", borderLeft: '0px', borderRight: '0px' }}>
                    <div className='flex justify-between infoPart items-center'>
                        <div className='me-6 mb-2'><i class="bi bi-check-circle"></i></div>
                        <div className='me-6 mb-2'>Last Updated - February 22, 2020</div>
                        <div className='me-6 mb-2'><i class="bi bi-exclamation-circle"></i>&nbsp;&nbsp;<span>Advertising Disclosure</span></div>
                    </div>
                    <div className='flex items-center'>
                        <p>Top Relevent</p> &nbsp;  <i class="bi bi-chevron-down"></i>
                    </div>
                </span>
                {/* Slider */}
                <div className='my-2 displayForLowerResolution729'>
                    <button class="bg-white hover:bg-gray-100 text-gray-800 px-4 border rounded shadow me-3">Tools</button>
                    <button class="bg-white hover:bg-gray-100 text-gray-800 px-4 border rounded shadow me-3">AWS Builder</button>
                    <button class="bg-white hover:bg-gray-100 text-gray-800 px-4 border rounded shadow me-3">Start Build</button>
                    <button class="bg-white hover:bg-gray-100 text-gray-800 px-4 border rounded shadow me-3">Build Supplies</button>
                    <button class="bg-white hover:bg-gray-100 text-gray-800 px-4 border rounded shadow me-3">Tooling</button>
                    <button class="bg-white hover:bg-gray-100 text-gray-800 px-4 border rounded shadow me-3">BlueHosting</button>
                </div>
                <br />
                {/* Navigator */}
                <div className='flex navigator'>
                    <div className='' style={{ minWidth: '60px' }}>Home<i class="bi bi-chevron-right"></i></div><div style={{ minWidth: '120px' }}>Hosting for all<i class="bi bi-chevron-right"></i></div><div style={{ minWidth: '80px' }}>Hosting<i class="bi bi-chevron-right"></i></div><div style={{ minWidth: '80px' }}>Hosting6<i class="bi bi-chevron-right"></i></div><div style={{ minWidth: '120px' }}>Hosting5&nbsp;&nbsp;</div>
                </div>
                {/* Base */}
                <div className='my-4 py-2' style={{ background: '' }}>
                    <div className='bg-white displayForLowerResolution767 border px-3 pb-2 shadow my-5 rounded'>
                        <button className='px-4 py-1 bestChoice font-semibold' style={{ position: 'absolute', marginTop: '-15px', background: '#FF7724', borderTopRightRadius: "10px", borderBottomRightRadius: "10px", color: "white" }}><i class="bi bi-trophy"></i> &nbsp;Best Choice</button>
                        <div className='px-2 border numberShown' style={{ borderRadius: '50px', position: 'absolute', marginLeft: '', marginTop: '20px' }}>1</div>
                        <div className='flex items-flex justify-between displayForLowerResolution645' style={{}}>
                            <div className='flex justify-center items-center w-1/4 baseForImg'>
                                <div className='text-center'>
                                    <img src={PI} width={120} />
                                    <p>Builder 1</p>
                                </div>
                            </div>
                            <div className='w-1/2 baseForText py-2' style={{ maxWidth: '450px' }}>
                                <b>WixPro 72-Inch Responsive Website Builder</b>- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)
                                <br />
                                <b>Main highlights</b>
                                <ul style={{ listStyle: 'none' }}>
                                    <li className='ms-3'>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</li>
                                </ul>
                                <button className='text-blue-500 mt-3'>Show more &nbsp;<i class="bi bi-chevron-down"></i></button>
                            </div>
                            <div className='w-1/4 baseForRate px-1'>
                                <div class="rounded-b-lg text-center p-5 text-blue-900" style={{ background: "#F3F9FF" }}>
                                    <t style={{ textDecoration: 'none' }} className='text-4xl font-semibold'>9.8</t>
                                    <div>Exceptional</div>
                                    <div><i class="bi bi-star-fill" style={{ color: '#FFB80F' }}></i><i class="bi bi-star-fill" style={{ color: '#FFB80F' }}></i><i class="bi bi-star-fill" style={{ color: '#FFB80F' }}></i><i class="bi bi-star-fill" style={{ color: '#FFB80F' }}></i><i class="bi bi-star-fill" style={{ color: '#FFB80F' }}></i></div>
                                </div>
                                <button className='bg-blue-500 text-white px-9 mt-9 py-2 rounded-lg' style={{ width: '100%' }}>View</button>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white displayForLowerResolution767 border px-3 pb-2 shadow my-5 rounded'>
                        <button className='px-4 py-1 bestChoice font-semibold' style={{ position: 'absolute', marginTop: '-15px', background: '#FF7724', borderTopRightRadius: "10px", borderBottomRightRadius: "10px", color: "white" }}><i class="bi bi-gem"></i> &nbsp;Best Choice</button>
                        <div className='px-2 border numberShown' style={{ borderRadius: '50px', position: 'absolute', marginLeft: '', marginTop: '20px' }}>2</div>
                        <div className='flex items-flex justify-between displayForLowerResolution645' style={{}}>
                            <div className='flex justify-center items-center w-1/4 baseForImg'>
                                <div className='text-center'>
                                    <img src={PI} width={120} />
                                    <p>Builder</p>
                                </div>
                            </div>
                            <div className='w-1/2 baseForText py-2' style={{ maxWidth: '450px' }}>
                                <b>SiteCraft 68-Inch Ultimate Web Design Studio</b>- Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)
                                <br />
                                <b>Main highlights</b>
                                <ul style={{ listStyle: 'none' }}>
                                    <li className='ms-3'>[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.</li>
                                </ul>
                                <button className='text-blue-500 mt-3'>Show more &nbsp;<i class="bi bi-chevron-down"></i></button>
                            </div>
                            <div className='w-1/4 baseForRate px-1'>
                                <div class="rounded-b-lg text-center p-5 text-blue-900" style={{ background: "#F3F9FF" }}>
                                    <t style={{ textDecoration: 'none' }} className='text-4xl font-semibold'>9.5</t>
                                    <div>Exceptional</div>
                                    <div><i class="bi bi-star-fill" style={{ color: '#FFB80F' }}></i><i class="bi bi-star-fill" style={{ color: '#FFB80F' }}></i><i class="bi bi-star-fill" style={{ color: '#FFB80F' }}></i><i class="bi bi-star-fill" style={{ color: '#FFB80F' }}></i><i class="bi bi-star-half" style={{ color: '#FFB80F' }}></i></div>
                                </div>
                                <button className='bg-blue-500 text-white px-9 mt-9 py-2 rounded-lg' style={{ width: '100%' }}>View</button>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white displayForLowerResolution767 border px-3 pb-2 shadow my-5 rounded'>
                        {/* <button className='px-4 py-1 bestChoice font-semibold' style={{ position: 'absolute', marginTop: '-15px', background: '#FF7724', borderTopRightRadius: "10px", borderBottomRightRadius: "10px", color: "white" }}><i class="bi bi-trophy"></i> &nbsp;Best Choice</button> */}
                        <div className='px-2 border numberShown' style={{ borderRadius: '50px', position: 'absolute', marginLeft: '', marginTop: '20px' }}>3</div>
                        <div className='flex items-flex justify-between displayForLowerResolution645' style={{}}>
                            <div className='flex justify-center items-center w-1/4 baseForImg'>
                                <div className='text-center'>
                                    <img src={PI} width={120} />
                                    <p>Builder 1</p>
                                </div>
                            </div>
                            <div className='w-1/2 baseForText py-2' style={{ maxWidth: '450px' }}>
                                <b>SiteCraft 68-Inch Ultimate Web Design Studio</b>- Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)
                                <br />
                                <b>Main highlights</b>
                                <ul style={{ listStyle: 'none' }}>
                                    <li className='ms-3'>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</li>
                                </ul>
                                <button className='text-blue-500 mt-3'>Show more &nbsp;<i class="bi bi-chevron-down"></i></button>
                            </div>
                            <div className='w-1/4 baseForRate px-1'>
                                <div class="rounded-b-lg text-center p-5 text-blue-900" style={{ background: "#F3F9FF" }}>
                                    <t style={{ textDecoration: 'none' }} className='text-4xl font-semibold'>9.3</t>
                                    <div>Exceptional</div>
                                    <div><i class="bi bi-star-fill" style={{ color: '#FFB80F' }}></i><i class="bi bi-star-fill" style={{ color: '#FFB80F' }}></i><i class="bi bi-star-fill" style={{ color: '#FFB80F' }}></i><i class="bi bi-star-fill" style={{ color: '#FFB80F' }}></i><i class="bi bi-star" style={{ color: '#FFB80F' }}></i></div>
                                </div>
                                <button className='bg-blue-500 text-white px-9 mt-9 py-2 rounded-lg' style={{ width: '100%' }}>View</button>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white displayForLowerResolution767 border px-3 pb-2 shadow my-5 rounded'>
                        {/* <button className='px-4 py-1 bestChoice font-semibold' style={{ position: 'absolute', marginTop: '-15px', background: '#FF7724', borderTopRightRadius: "10px", borderBottomRightRadius: "10px", color: "white" }}><i class="bi bi-trophy"></i> &nbsp;Best Choice</button> */}
                        <div className='px-2 border numberShown' style={{ borderRadius: '50px', position: 'absolute', marginLeft: '', marginTop: '20px' }}>4</div>
                        <div className='flex items-flex justify-between displayForLowerResolution645' style={{}}>
                            <div className='flex justify-center items-center w-1/4 baseForImg'>
                                <div className='text-center'>
                                    <img src={PI} width={120} />
                                    <p>CDK</p>
                                </div>
                            </div>
                            <div className='w-1/2 baseForText py-2' style={{ maxWidth: '450px' }}>
                                <b>CDK Resposive Builder:</b> An extensive library of widgets and apps, and detailed step-by-step guides.
                                <br />
                                <button className='bg-cyan-100 my-2 rounded px-1' style={{ background: '#F2F4F7', color: '#074786' }}>26% Off</button>
                                <br />
                                <b>Main highlights</b>
                                <ul style={{ listStyle: 'none' }}>
                                    <li className='ms-3 rounded-lg' style={{ background: "#FFF4ED" }}>
                                        <ul className='rounded p-1' style={{ background: "#FFF4ED", listStyle: 'none' }}>
                                            <li className='mb-1'><button className='rounded px-1' style={{ background: '#FFFFFF', color: '#1B88F4' }}>9.9</button> Building Responsive</li>
                                            <li className='mb-1'><button className='rounded px-1' style={{ background: '#FFFFFF', color: '#1B88F4' }}>8.9</button> Cool</li>
                                            <li className='mb-1'><button className='rounded px-1' style={{ background: '#FFFFFF', color: '#1B88F4' }}>8.9</button> Docs</li>
                                        </ul>
                                    </li>
                                </ul>
                                <div>
                                    <p>Why we love it</p><br />
                                    <t><i class="bi bi-check-circle" style={{ background: '#EBF5FF', borderRadius: "50%", color: '#0855A1' }}></i>&nbsp;Documentation</t><br />
                                    <t><i class="bi bi-check-circle" style={{ background: '#EBF5FF', borderRadius: "50%", color: '#0855A1' }}></i>&nbsp;Easy Use</t><br />
                                    <t><i class="bi bi-check-circle" style={{ background: '#EBF5FF', borderRadius: "50%", color: '#0855A1' }}></i>&nbsp;Out of Box</t><br />
                                </div>
                                <button className='text-blue-500 mt-3'>Show more &nbsp;<i class="bi bi-chevron-down"></i></button>
                            </div>
                            <div className='w-1/4 baseForRate px-1'>
                                <div class="rounded-b-lg text-center p-5 text-blue-900" style={{ background: "#F3F9FF" }}>
                                    <t style={{ textDecoration: 'none' }} className='text-4xl font-semibold'>9.1</t>
                                    <div>Very Good</div>
                                    <div><i class="bi bi-star-fill" style={{ color: '#FFB80F' }}></i><i class="bi bi-star-fill" style={{ color: '#FFB80F' }}></i><i class="bi bi-star-fill" style={{ color: '#FFB80F' }}></i><i class="bi bi-star-half" style={{ color: '#FFB80F' }}></i><i class="bi bi-star" style={{ color: '#FFB80F' }}></i></div>
                                </div>
                                <button className='bg-blue-500 text-white px-9 mt-9 py-2 rounded-lg' style={{ width: '100%' }}>View</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Related Deals */}
                <br />
                <div>
                    <t className="mb-3" style={{ fontSize: '32px' }}>Related deals you might like for</t>
                    <hr />
                    <div className='mt-2 flex relatedData'>
                        <div className='bg-white px-3 py-1 rounded-lg m-2 shadow' style={{ minWidth: '300px', mmaxWidth: '320px' }}>
                            <div className='flex justify-center items-center'>
                                <img src={PI} width={150} />
                            </div>
                            <div>
                                <button className='bg-cyan-100 my-2 rounded px-1 me-2' style={{ background: '#F2F4F7', color: '#074786' }}>20% Off</button>
                                <button className='bg-cyan-100 my-2 rounded px-1 me-2' style={{ background: '#F2F4F7', color: '#074786' }}>Limited Time</button>
                                <center style={{ color: '#626E79', fontWeight: '700' }}>Webbuilder</center>
                                <text>Computer Moder clasic with wix support</text>
                                <br /><button className='my-2 rounded px-1' style={{ background: '', color: '#626E79', fontWeight: '500' }}>$ 39.96</button>
                                <button className='my-2 rounded px-1' style={{ background: '', color: 'gray', fontSize: '14px' }}>$ 49.96</button>
                                <button className='my-2 rounded px-1' style={{ background: '', color: 'red', fontSize: '14px' }}>(20% off)</button>
                            </div>
                        </div>
                        <div className='bg-white px-3 py-1 rounded-lg m-2 shadow' style={{ minWidth: '300px', mmaxWidth: '320px' }}>
                            <div className='flex justify-center items-center'>
                                <img src={PI} width={150} />
                            </div>
                            <div>
                                <button className='bg-cyan-100 my-2 rounded px-1 me-2' style={{ background: '#F2F4F7', color: '#074786' }}>20% Off</button>
                                <button className='bg-cyan-100 my-2 rounded px-1 me-2' style={{ background: '#F2F4F7', color: '#074786' }}>Limited Time</button>
                                <center style={{ color: '#626E79', fontWeight: '700' }}>Webbuilder</center>
                                <text>Computer Moder clasic with wix support</text>
                                <br /><button className='my-2 rounded px-1' style={{ background: '', color: '#626E79', fontWeight: '500' }}>$ 39.96</button>
                                <button className='my-2 rounded px-1' style={{ background: '', color: 'gray', fontSize: '14px' }}>$ 49.96</button>
                                <button className='my-2 rounded px-1' style={{ background: '', color: 'red', fontSize: '14px' }}>(20% off)</button>
                            </div>
                        </div>
                        <div className='bg-white px-3 py-1 rounded-lg m-2 shadow' style={{ minWidth: '300px', mmaxWidth: '320px' }}>
                            <div className='flex justify-center items-center'>
                                <img src={PI} width={150} />
                            </div>
                            <div>
                                <button className='bg-cyan-100 my-2 rounded px-1 me-2' style={{ background: '#F2F4F7', color: '#074786' }}>20% Off</button>
                                <button className='bg-cyan-100 my-2 rounded px-1 me-2' style={{ background: '#F2F4F7', color: '#074786' }}>Limited Time</button>
                                <center style={{ color: '#626E79', fontWeight: '700' }}>Webbuilder</center>
                                <text>Computer Moder clasic with wix support</text>
                                <br /><button className='my-2 rounded px-1' style={{ background: '', color: '#626E79', fontWeight: '500' }}>$ 39.96</button>
                                <button className='my-2 rounded px-1' style={{ background: '', color: 'gray', fontSize: '14px' }}>$ 49.96</button>
                                <button className='my-2 rounded px-1' style={{ background: '', color: 'red', fontSize: '14px' }}>(20% off)</button>
                            </div>
                        </div>
                        <div className='bg-white px-3 py-1 rounded-lg m-2 shadow' style={{ minWidth: '300px', mmaxWidth: '320px' }}>
                            <div className='flex justify-center items-center'>
                                <img src={PI} width={150} />
                            </div>
                            <div>
                                <button className='bg-cyan-100 my-2 rounded px-1 me-2' style={{ background: '#F2F4F7', color: '#074786' }}>20% Off</button>
                                <button className='bg-cyan-100 my-2 rounded px-1 me-2' style={{ background: '#F2F4F7', color: '#074786' }}>Limited Time</button>
                                <center style={{ color: '#626E79', fontWeight: '700' }}>Webbuilder</center>
                                <text>Computer Moder clasic with wix support</text>
                                <br /><button className='my-2 rounded px-1' style={{ background: '', color: '#626E79', fontWeight: '500' }}>$ 39.96</button>
                                <button className='my-2 rounded px-1' style={{ background: '', color: 'gray', fontSize: '14px' }}>$ 49.96</button>
                                <button className='my-2 rounded px-1' style={{ background: '', color: 'red', fontSize: '14px' }}>(20% off)</button>
                            </div>
                        </div>
                        <div className='bg-white px-3 py-1 rounded-lg m-2 shadow' style={{ minWidth: '300px', mmaxWidth: '320px' }}>
                            <div className='flex justify-center items-center'>
                                <img src={PI} width={150} />
                            </div>
                            <div>
                                <button className='bg-cyan-100 my-2 rounded px-1 me-2' style={{ background: '#F2F4F7', color: '#074786' }}>20% Off</button>
                                <button className='bg-cyan-100 my-2 rounded px-1 me-2' style={{ background: '#F2F4F7', color: '#074786' }}>Limited Time</button>
                                <center style={{ color: '#626E79', fontWeight: '700' }}>Webbuilder</center>
                                <text>Computer Moder clasic with wix support</text>
                                <br /><button className='my-2 rounded px-1' style={{ background: '', color: '#626E79', fontWeight: '500' }}>$ 39.96</button>
                                <button className='my-2 rounded px-1' style={{ background: '', color: 'gray', fontSize: '14px' }}>$ 49.96</button>
                                <button className='my-2 rounded px-1' style={{ background: '', color: 'red', fontSize: '14px' }}>(20% off)</button>
                            </div>
                        </div>
                        <div className='bg-white px-3 py-1 rounded-lg m-2 shadow' style={{ minWidth: '300px', mmaxWidth: '320px' }}>
                            <div className='flex justify-center items-center'>
                                <img src={PI} width={150} />
                            </div>
                            <div>
                                <button className='bg-cyan-100 my-2 rounded px-1 me-2' style={{ background: '#F2F4F7', color: '#074786' }}>20% Off</button>
                                <button className='bg-cyan-100 my-2 rounded px-1 me-2' style={{ background: '#F2F4F7', color: '#074786' }}>Limited Time</button>
                                <center style={{ color: '#626E79', fontWeight: '700' }}>Webbuilder</center>
                                <text>Computer Moder clasic with wix support</text>
                                <br /><button className='my-2 rounded px-1' style={{ background: '', color: '#626E79', fontWeight: '500' }}>$ 39.96</button>
                                <button className='my-2 rounded px-1' style={{ background: '', color: 'gray', fontSize: '14px' }}>$ 49.96</button>
                                <button className='my-2 rounded px-1' style={{ background: '', color: 'red', fontSize: '14px' }}>(20% off)</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* below part */}
                <div className='flex justify-between belowPart items-center'>
                    <div className='my-3' style={{ fontSize: '32px', fontWeight: '400' }}>Sign up and get exclusive special deals</div>
                    <div class="my-3">
                        <button className='py-3 rounded-e-lg px-3 text-white' style={{ background: '#1B88F4', fontSize: '14px', fontWeight: '400' }}>Signup</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage