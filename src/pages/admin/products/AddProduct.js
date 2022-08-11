import React from 'react'
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import firebase from '../../../firebase'
const AddProduct = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory()
    const onSubmit = (data) => {
        let file = data.photo[0];
        let storageRef = firebase.storage().ref(`images/ ${file.name}`);
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                const newItems = {
                    ...data,
                    id: "",
                    photo: url
                };

                props.addProduct(newItems)
                alert("Thêm sản phẩm thành công")
                history.push("/admin/products");
            });
        });

    }
    return (
        <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" onSubmit={handleSubmit(onSubmit)}>
                <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-2">
                            <div className="mx-2">
                                <div className="my-2">
                                    <label className="block text-sm font-medium text-gray-700">Product name</label>
                                    <input
                                        className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded focus:z-10 sm:text-sm"
                                        {...register('name')}
                                    />
                                </div>
                                <div className="my-2">
                                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Price</label>
                                    <input
                                        className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded focus:z-10 sm:text-sm"
                                        {...register('price')}
                                    />
                                </div>
                                <div className="my-2">
                                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Quantity</label>
                                    <input
                                        type="number"
                                        className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded focus:z-10 sm:text-sm"
                                        {...register('quantity')}
                                    />
                                </div>
                                <div className="my-2">
                                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">Category</label>
                                    <select {...register('category')} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        {

                                            props.category ? props.category.map((categories, index) => {
                                                return (
                                                    <option key={index} value={categories._id}>{categories.name}</option>
                                                );

                                                // console.log(category.name)
                                            })
                                                : ""}
                                    </select>

                                </div>

                            </div>
                            <div className="mx-2 mt-6">
                                <div>
                                    {/* <label className="block text-sm font-medium text-gray-700">
                                        Cover photo
                                    </label> */}
                                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 h-60 border-2 border-gray-300 border-dashed rounded-md">
                                        <div className="space-y-1 text-center">
                                            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <div className="flex text-sm text-gray-600">
                                                <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                    <span>Upload a file</span>
                                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" {...register('photo')} />
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs text-gray-500">
                                                PNG, JPG, GIF up to 10MB
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className=" mx-5">
                        <label htmlFor="email_address" className="block text-sm font-medium text-gray-700 mx-2">description</label>
                        <textarea className="w-full h-28 border-gray-900" {...register('description')} />
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">

                        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>


    )
}

export default AddProduct

