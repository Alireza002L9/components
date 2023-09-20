const Something = ()=> {
    return(
        <div className="flex flex-col shrink w-1/6 bg-slate-400 border-2 border-slate-700 rounded-sm p-4">
            <div>
                <h4 className="p-4 text-center text-white font-semibold text-lg">
                    Are you sure?
                </h4>
            </div>
            <div className="text-center">
                <button className="bg-slate-200 cursor-pointer border-2 border-slate-500 rounded-sm p-1 pr-2 pl-2 mr-4">
                    Yes✅
                </button>
                <button className="bg-slate-200 cursor-pointer border-2 border-slate-500 rounded-sm p-1 pr-2 pl-2">
                    No❌
                </button>
            </div>
        </div>
    )
}

export default Something;