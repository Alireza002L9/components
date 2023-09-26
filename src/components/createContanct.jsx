import Inputs from "./InputComponent";

const CreateContact = ()=> {

    const getNameValue = (value)=> {
        const name = value
        return name;
        
    }
    const getEmailValue = (value)=> {
        const email = value
        return email
    }
    const getNumberValue = (value)=> {
        const number = value
        return number
    }
    const getRelationValue = (value)=> {
        const relation = value
        return relation
    }
    const getWorkValue = (value)=> {
        const work = value
        return work
    }

    const submitHandler = (e)=> {
        e.preventDefault();
        const name = getNameValue()
        console.log(name) //it gives undefined
    }
    const contactName = 'Name:'
    const contactEmail = 'Email Address:'
    const contactNumber = 'Phone Number:'
    const contactRelationship = 'Relationship:'
    const contactWorkInfo = 'Work Info:'
    const className = "outline-none  border-slate-300 border-b-2 focus:border-indigo-600 transition-all ease-in-out duration-500"
    return(
        <form className=" grid bg-white rounded-lg shadow-lg p-4 w-4/12 gap-2">
            <h3 className="text-center font-bold text-lg my-3">Contact Information</h3>
            <Inputs label={contactName} type={'text'} className={className} valueTaker={getNameValue}/>
            <Inputs label={contactEmail} type={'email'} className={className} valueTaker={getEmailValue}/>
            <Inputs label={contactNumber} type={'number'} className={className} valueTaker={getNumberValue}/>
            <Inputs label={contactRelationship} type={'text'} className={className} valueTaker={getRelationValue}/>
            <Inputs label={contactWorkInfo} type={'text'} className={className} valueTaker={getWorkValue}/>
            <button type="submit" className="bg-green-500 text-white cursor-pointer w-1/3 justify-self-center p-2 rounded-md hover:bg-green-400 active:bg-sky-500 transition-all" onClick={submitHandler}>Submit</button>
        </form>
    )
}

export default CreateContact;