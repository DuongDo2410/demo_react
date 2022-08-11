import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form'
import { useHistory, useParams } from "react-router-dom";
import CategoryApi from '../../../api/CategoryApi';
const UpdateCategory = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [category, setState] = useState({});
    let { id } = useParams();
    let history = useHistory();
    // console.log(id);

    useEffect(() => {
        const getCategory = async () => {
            try {
                const { data } = await CategoryApi.get(id);
                // console.log(data)
                setState(data);
            } catch (err) {
                console.log(err);
            }
        };
        getCategory();
    }, []);

    const onSubmit = (data) => {
        console.log('data', data);
        const newdata = {
            id: id,
            ...data,
        };

        // setState(newdata)
        props.updateCategory(newdata);
        alert('update thành công');
        history.push("/admin/category");
    };

    return (
        <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" onSubmit={handleSubmit(onSubmit)}>
                <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="">
                            <label className="block text-sm font-medium text-gray-700 ml-1">Category name</label>
                            <input id="name"
                                className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded focus:z-10 sm:text-sm"
                                {...register('name', { required: true })}
                            />
                            {errors.name && <span className="text-red-500 my-2">Vui lòng nhập danh mục sản phẩm</span>}
                        </div>
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

export default UpdateCategory


