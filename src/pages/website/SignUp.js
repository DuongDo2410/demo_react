import React from 'react'
import LayoutWebsite from '../../layouts/Website'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { signUp } from '../../api/auth/auth'
import { Link, NavLink } from 'react-router-dom'
import Header from '../../components/Website/Header'
import Footer from '../../components/Website/Footer'
import Subscribe from '../../components/Website/Subscribe'
const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const onSubmit = (data, e) => {
        signUp(data)
            .then(dataInput => {
                console.log(dataInput)
                if (dataInput.error) {
                    setError(dataInput.error);
                } else {
                    e.target.reset();
                    setError("");
                    setSuccess(true);
                }
            })
    }
    const Error = () => {
        return (
            <div className="bg-red-400" style={{ display: error ? "block" : "none" }}>
                {error}
            </div>)
    }
    const Success = () => {
        return (
            <div className="bg-green-400" style={{ display: success ? "block" : "none" }}>
                Bạn đã tạo tài khoản thành công. click để <Link to="/signin">Đăng nhập</Link>.
            </div>)
    }
    const SignUpForm = () => {
        return (

            // <div className="mt-10 sm:mt-0">
            //     <div className="md:grid md:grid-cols-3 md:gap-6">

            //         <div className="mt-5 md:mt-0 md:col-span-2">
            //             <form onSubmit={handleSubmit(onSubmit)}>
            //                 <div className="shadow overflow-hidden sm:rounded-md">
            //                     <div className="px-4 py-5 bg-white sm:p-6">
            //                         <div className="grid grid-cols-6 gap-6">
            //                             <div className="col-span-6 sm:col-span-3">
            //                                 <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Full name</label>
            //                                 <input type="text" 
            //                                 name="last_name" 
            //                                 id="last_name" 
            //                                 autoComplete="family-name" 
            //                                 className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 
            //                                 {...register('name')}
            //                                 />
            //                             </div>
            //                             <div className="col-span-6 sm:col-span-4">
            //                                 <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">Email address</label>
            //                                 <input type="text" 
            //                                 name="email_address" 
            //                                 id="email_address" 
            //                                 autoComplete="email" 
            //                                 className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 
            //                                 {...register('email')}
            //                                 />
            //                             </div>

            //                             <div className="col-span-6">
            //                                 <label htmlFor="street_address" className="block text-sm font-medium text-gray-700">Password</label>
            //                                 <input type="text" 
            //                                 name="street_address" 
            //                                 id="street_address" 
            //                                 autoComplete="street-address" 
            //                                 className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            //                                 {...register('password')}
            //                                 />
            //                             </div>

            //                         </div>
            //                     </div>
            //                     <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            //                         <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            //                             Create an account
            //                         </button>
            //                     </div>
            //                 </div>
            //             </form>
            //         </div>
            //     </div>
            // </div>
            <div className="container mx-auto py-14">
                <h2 className="my-8 text-2xl font-bold">Sign Up</h2>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="w-11/12 mx-auto mt-4">
                            <label htmlFor="last_name" className="block text-base font-medium text-gray-700 my-2">Full name</label>
                            <input id="email-address" 
                                required 
                                className="appearance-none  block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                {...register('name')}
                                />  
                        </div>
                        <div className="w-11/12 mx-auto">
                            <label htmlFor="last_name" className="block text-base font-medium text-gray-700 my-2">Email</label>
                            <input id="email-address" 
                                type="email"
                                required 
                                className="appearance-none  block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                {...register('email')}
                                />  
                        </div>
                        <div className="w-11/12 mx-auto mb-6">
                            <label htmlFor="last_name" className="block text-base font-medium text-gray-700 my-2">Password</label>
                            <input id="email-address" 
                                type="password"
                                required 
                                className="appearance-none  block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                {...register('password')}
                                />  
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Create an account
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        )
    }
    return (
        <LayoutWebsite>
            <Header />
            {Error()}
            {Success()}
            {SignUpForm()}
            <Subscribe />
            <Footer />
        </LayoutWebsite>
    )
}

export default SignUp
