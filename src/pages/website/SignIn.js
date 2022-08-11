import {React, useState} from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import LayoutWebsite from '../../layouts/Website'
import { useForm } from'react-hook-form'
import { authenticate, isAuthenticated, signIn } from'../../api/auth/auth'
const SignIn = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const [error, setError] = useState("");
    let History = useHistory();
    const {user} = isAuthenticated();

    const onSubmit = (data, e) => {
        signIn(data)
            .then(dataUser => {
                
                if (dataUser.error) {
                    setError(dataUser.error);
                } else {
                    
                    authenticate(dataUser, () => {
                        console.log(dataUser.user.role)
                        
                        // History.push('/')
                        if(dataUser.user.role == 1){
                            History.push('/admin')
                        } else {
                            History.push('/')
                        }
                    })
                    
                }
            })
    }
    const Error = () => {
        return(
        <div className="bg-red-400" style={{display: error ? "block" : "none"}}>
            {error}
        </div>)
    }
    const SignInForm = () => {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 ">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <NavLink to="/">
                            <img className="mx-auto  w-auto" src="https://firebasestorage.googleapis.com/v0/b/shop-11594.appspot.com/o/image%2Flogo.png?alt=media&token=e9dc402e-1c5d-46ab-aa25-7bd417df781a" alt="Workflow" />
                        </NavLink>
                        
                        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
                            Sign in to your account
                        </h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email-address" className="sr-only">Email address</label>
                                <input id="email-address" 
                                name="email" type="email" 
                                autoComplete="email" 
                                required 
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address" 
                                {...register('email')}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">Password</label>
                                <input id="password"
                                name="password" 
                                type="password" 
                                autoComplete="current-password" 
                                required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                placeholder="Password"
                                {...register('password')} 
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>
                            <div className="text-sm">
                                <NavLink to="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Forgot your password?
                                </NavLink>
                            </div>
                        </div>
                        <div>
                            <button  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    {/* Heroicon name: solid/lock-closed */}
                                    <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                Sign in
                            </button>
                        </div>
                        <div className="flex justify-between items-center my-8 py-8">
                            <span>Don't have an account?</span>
                            <NavLink to="/signup" className="group flex justify-center w-1/2  py-3  border border-transparent text-sm font-medium rounded-md text-black border-gray-900 hover:border-gray-500   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:border-gray-700 items-center">
                                <span className=" inset-y-0 mx-10">
                                    {/* Heroicon name: solid/lock-closed */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                                    Create an account
                            </NavLink>
                        </div>

                    </form>
                </div>
            </div>   
        )
    }
    return (
        <LayoutWebsite>
            {Error()}
            {SignInForm()}
        </LayoutWebsite>
    )
}

export default SignIn
