const Form = ()=> {
    const name = "Enter your name:"
    const email = "Enter your Email address:" 
    const password = "Enter a password:"
    const className = "outline-none  border-slate-300 border-b-2 focus:border-indigo-600 transition-all ease-in-out duration-500"
    const button = "bg-purple-500 text-white cursor-pointer w-1/3 justify-self-center p-2 rounded-md hover:bg-purple-600 active:bg-purple-400 transition-all"
    return(
        <div>
            <form action="" className=" grid bg-white rounded-lg shadow-lg p-4 w-4/12">
                <Inputs label={name} type="text" className={className} />
                <Inputs label={email} type="email" className={className} />
                <Inputs label={password} type="password" className={className} />
                <Inputs type="submit" className={button} />
            </form>
        </div>
    )
}

const Inputs = ({label, type, className})=> {
    return(
        <label className="grid mb-2 ">
        {label} <br />
        <input type={type} className={className} />
        </label>
    )
}

export default Form;
