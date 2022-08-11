import React from 'react'
import { Link } from'react-router-dom'
const ListProduct = (props) => {
    const onHandleRemove = (id) => {
        const question =window.confirm('Bạn có chắc muốn xóa không?');
        if(question){
            props.removeProduct(id);
        }
        
    }
    return (
        
        <div >
            <div className="flex justify-end mx-8 mt-10">
                <Link to="/admin/addproduct" className="  border rounded-3xl py-3 px-12 mt-10 hover:bg-yellow-600 hover:text-white font-bold">Add</Link>
            </div>
            <div className="flex flex-col py-6 p-8">
                <div className="-my-2 overflow-x-auto ">
                    <div className="py-2 align-middle inline-block min-w-full">
                        <div className="shadow overflow-hidden border-b border-gray-200 ">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Image
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Quantity
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Price
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 ">
                                    {props.products.map((products, index) => (
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10">
                                                        <img className="h-10 w-10 rounded-full text-center" src={products.photo} alt />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div>
                                                    <div className="text-sm font-medium text-gray-900 ">
                                                        {products.name}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                                                {products.quantity}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                                                {products.price}
                                            </td>
                                            <td className="px-6 py-6 whitespace-nowrap  flex justify-center items-center">
                                                <Link to={`/admin/updateproduct/${products._id}`} className="text-black hover:text-indigo-900 px-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 30 30" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                    </svg>
                                                </Link>
                                                <Link to="#" className="text-black hover:text-indigo-900 px-2" onClick={() => onHandleRemove(products._id)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ListProduct


