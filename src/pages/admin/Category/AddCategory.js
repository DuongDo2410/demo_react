import { React, useState} from 'react'
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
const AddCategory = ({addCategory}) => {
    const history = useHistory()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const onSubmit = (data) => {
        console.log(data);
        addCategory(data)
        alert("Thêm sản phẩm thành công")
                history.push("/admin/category");
    }
    // const Error = () => {
    //     return (
    //         <div className="bg-red-400" style={{ display: error ? "block" : "none" }}>
    //             {error}
    //         </div>)
    // }
    // const Success = () => {
    //     return (
    //         <div className="bg-green-400" style={{ display: success ? "block" : "none" }}>
    //             Thêm mới thành công.
    //         </div>)
    // }
    return (
        
        <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" onSubmit={handleSubmit(onSubmit)}>
                <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="">
                            <label className="block text-sm font-medium text-gray-700 ml-1">Category name</label>
                            <input id="name"
                                className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded focus:z-10 sm:text-sm"
                                {...register('name', {required: true})}
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

export default AddCategory
