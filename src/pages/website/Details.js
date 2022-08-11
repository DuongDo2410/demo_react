import React, { useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductApi from '../../api/ProductApi'
// import CategoryApi from '../../api/CategoryApi'
import Footer from '../../components/Website/Footer'
import Header from '../../components/Website/Header'
import Subscribe from '../../components/Website/Subscribe'


const Details = (props) => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const readProduct = async () => {
            try {
                const { data } = await ProductApi.get(id);
                
                setProduct(data)
            } catch (error) {
                console.log(`error`, error)
            }
        }
        readProduct()
    }, [])
    return (
        <div>
            <Header />
            <div className=" bg-gray-100 pb-10">
                <div className="container mx-auto grid grid-cols-12 pt-6">
                    <div className=" col-span-5 flex justify-end">
                        <img className="w-2/3" src={product.photo} alt="" />
                    </div>
                    <div className=" col-span-7 mx-20">
                        <h2 className="text-2xl mb-6 font-semibold tracking-widest">{product.name}</h2>
                        <span className="text-2xl font-semibold">$ {product.price}</span>
                        <div className="border-t  items-center py-6 mt-8">
                            <input className="w-12 py-3 text-center" type="number" name="" id="" />
                            <button type="submit" className="border-2 border-gray-900 bg-black text-white text-base font-bold  mx-2 py-3 px-10 hover:bg-yellow-600">+ Add To Cart</button>
                        </div>
                        <div className="flex border-b mb-4 pb-6">
                            <a href="#" className="border py-3 px-4 hover:text-white hover:bg-yellow-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </a>
                            <a href="#" className="border py-3 px-5 mx-3 hover:text-white hover:bg-yellow-600" >
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                                </svg>
                            </a>
                        </div>
                        <div className="flex text-sm my-2 font-medium text-gray-500">
                            <p>Quantity:</p>
                            <p className="mx-2">{product.quantity}</p>
                        </div>
                        <div className="flex text-sm my-2 font-medium text-gray-500">
                            <p>Category:</p>
                            <p className="mx-2">{product.category}</p>
                        </div>
                        <div className="flex my-6 font-medium ">
                            <h6 className="text-sm text-gray-500">Share This Product:</h6>
                            <ul className="flex text-gray-600">
                                <li className="mx-3 px-3 ">
                                    <a href>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="mx-3 px-3">
                                    <a href>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="mx-3 px-3">
                                    <a href>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                                            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="mx-3 px-3">
                                    <a href>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                        </svg>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto my-10">
                <h3 className=" text-xl font-semibold my-4">Description</h3>
                <p className="text-left w-2/3 text-gray-500">
                    {product.description}
                </p>
            </div>
            <div className="container mx-auto">
                <div className="flex justify-between">
                    
                <h3 className="text-3xl text-center font-bold my-6  ">Related Products</h3>
                
                </div>
                
                <div class="grid grid-cols-4">
                    <div className="mx-4 mb-12 y-4">
                        <div className="relative ">
                            <img className="w-full" src="https://firebasestorage.googleapis.com/v0/b/shop-11594.appspot.com/o/images%2F3-3-300x382.jpg?alt=media&token=c4b1b69e-861e-4ca4-841b-74122dfb5420" alt="" />
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
                        <p className="text-gray-500 text-base mb-1 mt-2">Cras nec nisl ut erat co</p>
                        <p className="text-base">$200</p>
                    </div>
                </div>
            </div>
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Details