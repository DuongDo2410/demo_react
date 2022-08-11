import React from 'react'
import Footer from '../../components/Website/Footer'
import Header from '../../components/Website/Header'
import SlideShow from '../../components/Website/SlideShow'
import Subscribe from '../../components/Website/Subscribe'
import { Link } from 'react-router-dom'
const HomePage = (props) => {

    return (
        <div>
            <Header />
            <SlideShow />
            <div className="container mx-auto grid grid-cols-3 py-8">
                <div className="mx-4">
                    <div className="relative">
                        <div className="absolute inset-y-1/3 mx-8">
                            <h3 className="w-2/3 font-bold text-lg mb-4">British Made Pocket Knife-Oak</h3>
                            <p className="text-base text-gray-500">Discover Now</p>
                        </div>
                        <div>
                            <img className="w-full" src="https://firebasestorage.googleapis.com/v0/b/shop-11594.appspot.com/o/images%2FUntitled-1.jpg?alt=media&token=1892bc17-30cf-4101-a9b6-c85a6dab1cc9" alt="" />
                        </div>
                    </div>
                </div>
                <div className="mx-4">
                    <div className="relative">
                        <div className="absolute inset-y-1/3 mx-8">
                            <h3 className="w-2/3 font-bold text-lg mb-4">Chair Kimi No Isu Project</h3>
                            <p className="text-base text-gray-500">Discover Now</p>
                        </div>
                        <div>
                            <img className="w-full" src="https://firebasestorage.googleapis.com/v0/b/shop-11594.appspot.com/o/images%2Fbannerhome1-2.jpg?alt=media&token=ef188f1c-4e73-4daf-8621-987f1f93eda3" alt="" />
                        </div>
                    </div>
                </div>
                <div className="mx-4">
                    <div className="relative">
                        <div className="absolute inset-y-1/3 mx-8">
                            <h3 className="w-2/3 font-bold text-lg mb-4">Merino Lambswool Scarf Moss</h3>
                            <p className="text-base text-gray-500">Discover Now</p>
                        </div>
                        <div>
                            <img className="w-full" src="https://firebasestorage.googleapis.com/v0/b/shop-11594.appspot.com/o/images%2Fbanner-2.jpg?alt=media&token=37be20fa-79cf-413a-bdf8-67ab952f0ab0" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-16">
                <div className="text-center mb-20">
                    <h2 className="font-semibold text-4xl my-2">Products</h2>
                    <p className="text-gray-500">Mirum est notare quam littera gothica quam nunc putamus parum claram!</p>
                </div>
                <div className="container mx-auto">
                    <div className="grid grid-cols-4">
                        {props.products.map((products, index) => {
                            return (

                                <div className="mx-4 y-4">
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
                </div>
            </div>
            <div className="grid grid-cols-12 mb-14">
                <div className="col-span-6 relative mr-4">
                    <div>
                        <img className="w-full" src="https://firebasestorage.googleapis.com/v0/b/shop-11594.appspot.com/o/images%2Fbannerhome1-4.jpg?alt=media&token=04c43a2a-2b92-4f4a-8d42-8d4558f44824" alt="" />
                    </div>
                    <div className="absolute top-20 w-1/2 mx-16">
                        <p className="text-yellow-600">Products Essentials</p>
                        <p className="text-xl my-2"><strong>Bottle With Wooden Cork</strong></p>
                        <p className="text-gray-500 mb-12">The Newtown sofa is the first product Jonas Wagell has designed for Zaozuo.</p>
                        <a href="#" className="border-2 border-gray-900 text-yellow-600 text-sm py-4 px-6"> BUY NOW / $196.98</a>
                    </div>
                </div>
                <div className="col-span-6 relative ml-4">
                    <div>
                        <img className="w-full" src="https://firebasestorage.googleapis.com/v0/b/shop-11594.appspot.com/o/images%2Fhome1-slider.jpg?alt=media&token=2f4ececa-bafa-48e1-893b-90888b6955a4" alt="" />
                    </div>
                    <div className="absolute top-20 w-1/2 mx-16">
                        <p className="text-yellow-600">Products Essentials</p>
                        <p className="text-xl my-2"><strong>Bottle With Wooden Cork</strong></p>
                        <p className="text-gray-500 mb-12">The Newtown sofa is the first product Jonas Wagell has designed for Zaozuo.</p>
                        <a href="#" className="border-2 border-gray-900 text-yellow-600 text-sm py-4 px-6"> BUY NOW / $196.98</a>
                    </div>
                </div>
            </div>
            <div className="container mx-auto py-10">
                <ul className="flex">
                    <li><img src="https://firebasestorage.googleapis.com/v0/b/shop-11594.appspot.com/o/images%2F2-1-1.jpg?alt=media&token=edc347bd-8400-4234-bed0-b6400d9522c3" alt=""/></li>
                    <li><img src="https://firebasestorage.googleapis.com/v0/b/shop-11594.appspot.com/o/images%2F3-1-1.jpg?alt=media&token=2a67317c-4cb7-4b22-ba0c-ef3a59d72539" alt=""/></li>
                    <li><img src="https://firebasestorage.googleapis.com/v0/b/shop-11594.appspot.com/o/images%2F4-1-1.jpg?alt=media&token=ccfaae10-7a9b-41ad-bd7b-0d5bca708438" alt=""/></li>
                    <li><img src="https://firebasestorage.googleapis.com/v0/b/shop-11594.appspot.com/o/images%2F5-1-1.jpg?alt=media&token=986285cc-510c-4e9b-b827-7be37333f337" alt=""/></li>
                    <li><img src="https://firebasestorage.googleapis.com/v0/b/shop-11594.appspot.com/o/images%2F6-1-1.jpg?alt=media&token=b1570c7e-565c-4572-8c80-de2757f664c4" alt=""/></li>
                </ul>
            </div>
            <Subscribe />
            <Footer />

        </div>
    )
}

export default HomePage
