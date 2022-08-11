import React, {useState, useEffect} from 'react'
import { NavLink, useHistory, useLocation } from 'react-router-dom'
import { isAuthenticated, singOut } from '../../api/auth/auth'

const Header = () => {
    const History = useHistory();
    const {pathname} = useLocation();
    const [isLogged, setIsLogged] = useState(false);
    useEffect(() => {
        isAuthenticated() && setIsLogged(true)
    }, [pathname, isLogged])
    return (
        <header className="  bg-gray-100 font-semibold text-gray-500">
            <nav className="container mx-auto py-8 text-base ">
                <div className=" flex relative justify-between">
                    <NavLink to="">
                        <img src="https://firebasestorage.googleapis.com/v0/b/shop-11594.appspot.com/o/image%2Flogo.png?alt=media&token=e9dc402e-1c5d-46ab-aa25-7bd417df781a" alt />
                    </NavLink>
                    <ul className="flex ">
                        <li><NavLink to="" className=" flex mx-2 px-2 text-gray-700">
                            Home
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-7 mt-2" fill="none" viewBox="0 0 45 45" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </NavLink></li>
                        <li className="group">
                            <NavLink to="/shop" className=" flex mx-2 px-2">
                                Shop
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-7 mt-2 " fill="none" viewBox="0 0 45 45" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </NavLink>
                            
                        </li>
                        <li><NavLink to="" className=" flex mx-2 px-2">
                            Page
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-7 mt-2" fill="none" viewBox="0 0 45 45" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </NavLink></li>
                        <li><NavLink to="" className=" flex mx-2 px-2">
                            Blog
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-7 mt-2" fill="none" viewBox="0 0 45 45" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </NavLink></li>
                        <li><NavLink to="" className="flex mx-2 px-2">
                            Portfolio
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-7 mt-2" fill="none" viewBox="0 0 45 45" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </NavLink></li>
                    </ul>
                    <ul className="flex ">
                        <li>
                            <NavLink to="" className="flex mx-3 px-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                search
                            </NavLink>
                        </li>
                        <li><NavLink to="" className="flex mx-3 px-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        cart(0)
                    </NavLink>
                    </li>
                        { !isLogged &&(
                            <>
                                <li>
                                    <NavLink to="/signin" className="flex mx-3 px-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </NavLink>
                                </li>
                            </>
                        )}    
                        { isLogged &&(
                            
                                <li>
                                    <NavLink to="#" onClick={() => singOut(() => {History.push('/')})}>Sign out</NavLink>
                                </li>   
                        )

                        }
                        
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
