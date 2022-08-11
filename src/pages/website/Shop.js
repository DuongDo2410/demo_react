import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Website/Footer'
import Header from '../../components/Website/Header'
import Subcribe from '../../components/Website/Subscribe'
const Shop = (props) => {

    return (
        <div>
            <Header />
            {/* <SlideShow /> */}
            <div className="grid grid-cols-12 container mx-auto ">
                <div className="col-span-3 mt-6">
                    <div>
                        <h3 className="text-xl my-6 font-semibold">Product Categories</h3>
                        <ul className="text-lg  text-gray-500">   
                            {
                                props.category ? props.category.map((categories, index) => {
                                    return (
                                        <li classname=" my-4 "><a href>{categories.name}</a></li>
                                    );

                                    // console.log(category.name)
                                })
                                    : ""}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl my-6  font-semibold">Any Size</h3>
                        <ul className="text-lg text-gray-500">
                            <li className=" my-4 "><a href="" >S(1)</a></li>
                            <li className=" my-4"><a href="" >L(0)</a></li>
                            <li className=" my-4"><a href="" >XL(0)</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl my-6 font-semibold">Choose Color</h3>
                        <ul className="text-lg text-gray-500">
                            <li className=" my-4"><a href="" >Black(1)</a></li>
                            <li className=" my-4"><a href="" >Pink(0)</a></li>
                            <li className=" my-4"><a href="" >Pink(0)</a></li>
                            <li className=" my-4"><a href="" >White(0)</a></li>
                            <li className=" my-4"><a href="" >Yellow(0)</a></li>

                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl my-6 font-semibold">Top Rated</h3>
                        <ul>
                            <li className="flex my-6">
                                <img className="w-24" src="https://firebasestorage.googleapis.com/v0/b/shop-11594.appspot.com/o/images%2F1-14-300x382.jpg?alt=media&token=e887b4ea-747b-4634-920e-bfc431b39257" alt="" />
                                <div className="mx-6">
                                    <h4 className="text-lg text-gray-500">Consectetur adipiscing elit</h4>
                                    <p className="mt-5">$400</p>
                                </div>
                            </li>
                            <li className="flex my-6">
                                <img className="w-24" src="https://firebasestorage.googleapis.com/v0/b/shop-11594.appspot.com/o/images%2F1-15-300x382.jpg?alt=media&token=bfe8192a-7617-40c0-8471-724d3e0e2517" alt="" />
                                <div className="mx-6">
                                    <h4 className="text-lg text-gray-500">Pellentesque aliquet</h4>
                                    <p className="mt-5">$200</p>
                                </div>
                            </li>
                            <li className="flex my-6">
                                <img className="w-24" src="https://firebasestorage.googleapis.com/v0/b/shop-11594.appspot.com/o/images%2F1-17-300x382.jpg?alt=media&token=8154438a-6b2f-4e7f-b0d1-8a00b750bb66" alt="" />
                                <div className="mx-6">
                                    <h4 className="text-lg text-gray-500">Ipsum metus feugiat</h4>
                                    <p className="mt-5">$100</p>
                                </div>
                            </li>
                            <li className="flex my-6    ">
                                <img className="w-24" src="https://firebasestorage.googleapis.com/v0/b/shop-11594.appspot.com/o/images%2F1-21-300x382.jpg?alt=media&token=38cc283e-09a1-404e-b06b-09d1e6a02486" alt="" />
                                <div className="mx-6">
                                    <h4 className="text-lg text-gray-500">Sed commodo augue nisi</h4>
                                    <p className="mt-5">$400</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-span-9 mt-12 relative">
                    <div className="grid grid-cols-3">
                        {props.products.map((products, index) => {
                            return (

                                <div className="mx-4 mb-12 y-4">
                                    <div className="relative ">
                                        <Link to={`/detail/${products._id}`}>
                                            <img className="w-full" src={products.photo} alt="" />
                                        </Link>
                                        <div className="absolute bottom-0 right-0 text-gray-500 bg-white m-4 p-3 ">
                                            <ul>
                                                <li className=" border-b-1 py-2">
                                                    <Link to="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                        </svg>
                                                    </Link>
                                                </li>
                                                <li className=" border-b-1 py-2">
                                                    <Link to="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                            <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                                                        </svg>
                                                    </Link>
                                                </li>
                                                <li className="py-2">
                                                    <Link to="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                                        </svg>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="text-gray-500 text-base mb-1 mt-2">{products.name}</p>
                                    <p className="text-base">{products.price}</p>
                                </div>

                            );

                        })}
                    </div>
                    <div className="absolute bottom-0 text-base text-gray-500 w-full">
                        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                            <div className=" sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                <div>
                                    <p className="text-base text-gray-500">
                                        Showing
                                        <span className="font-medium mx-1">1</span>
                                        to
                                        <span className="font-medium mx-1">10</span>
                                        of
                                        <span className="font-medium mx-1">97</span>
                                        results
                                    </p>
                                </div>
                                <div>
                                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                        <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                            <span className="sr-only">Previous</span>
                                            {/* Heroicon name: solid/chevron-left */}
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                        {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
                                        <a href="#" aria-current="page" className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                                            1
                                        </a>
                                        <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                                            2
                                        </a>
                                        <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50  md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">
                                            3
                                        </a>

                                        <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                            <span className="sr-only">Next</span>
                                            {/* Heroicon name: solid/chevron-right */}
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <Subcribe />
            <Footer />
        </div>
    )
}

export default Shop
