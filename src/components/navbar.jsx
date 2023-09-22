const Navbar = ()=> {

    return(
        <div className="flex gap-2 justify-around items-center bg-white w-100 h-14 rounded-md shadow-md  ">
            <div className="font-semibold cursor-pointer text-lgn">
                Contact Manager
            </div>
            <div>
                <input type="text" className=" font-thin border-b-2 p-1 border-slate-300 focus:border-indigo-600 transition-all ease-in-out  mr-2 outline-none pr-5" placeholder="Contact search..." />
                <button className="font-semibold text-white bg-purple-500 hover:bg-purple-600 p-1 pr-2 pl-2 rounded-sm border-2  border-purple-500 shadow-md shadow-purple-300 transition-all duration-300 ease-in-out">Search</button>
            </div>
            <button className="font-semibold border-b-2 border-white hover:border-b-2 hover:border-blue-600 hover:text-blue-600 transition-all duration-300 ease-in-out">
                Add Contanct
            </button>
        </div>
    )
}


export default Navbar;