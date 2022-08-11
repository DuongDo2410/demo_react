import React from 'react'

const Subscribe = () => {
    return (
        <div className="container mx-auto mt-24 pb-20 text-center  border-t border-gray-200">
            <h2 className="text-gray-800 mt-20 mb-8 text-4xl">Get Discount Info</h2>
            <p className="text-gray-400">Subscribe to the Outstock mailing list to receive updates on new arrivals, special<br/> offers and other discount information.</p>
            <input type="text" className="w-2/3 mt-14 py-2 text-lg border-b border-gray-200 text-center" placeholder="Subscribe to our newsletter..."/><br/>
            <button type="submit" className="border-2 border-gray-900 text-xs font-medium mt-12 py-3 px-10 hover:bg-yellow-600 hover:text-white">SUBCRIBE!</button>
        </div>
    )
}

export default Subscribe
