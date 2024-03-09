import React from "react"

export const RevenueCard = ({title,orderCount,amount}) =>{

    return <div className="bg-white rounded shadow-md p-4">
        <div>
            {title}
            ?
        </div>

        <div className="flex justify-between">

            <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg> {amount}
            </div>

            {orderCount ? <div className="flex">
                <div className="text-blue-600 underline cursor-pointer font-medium ">
                    {orderCount} order(s)
                </div>

                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
                 
            </div> : null}
        </div>
    </div>
}

