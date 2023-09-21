const Something = ()=> {
    return(
        <div className="flex flex-col shrink w-1/6 bg-white rounded-md p-4 m-2 shadow-md">
            <div>
                <h4 className="p-4 text-center text-black font-semibold text-lg">
                    Are you sure?
                </h4>
            </div>
            <div className="text-center">
                <button className="bg-teal-100 cursor-pointer border-2 border-teal-600 rounded-sm p-1 pr-4 pl-4 mr-4 hover:bg-teal-500 hover:text-white">
                    Yes
                </button>
                <button className="bg-red-100 cursor-pointer border-2 border-red-600 rounded-sm p-1 pr-4 pl-4 hover:bg-red-500 hover:text-white">
                    No
                </button>
            </div>
        </div>
    )
}

export default Something;