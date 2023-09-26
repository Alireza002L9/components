import { useState } from "react";
const Inputs = ({label, type, className, valueTaker})=> {
    const [values, setValue] = useState('')

    const getValue = (event)=> {
        setValue(event.target.value)
        valueTaker(values)
    }
    return(
        <label className="grid mb-2 ">
        {label} <br />
        <input type={type} className={className} onChange={getValue} value={values} />
        </label>
    )
}


export default Inputs;