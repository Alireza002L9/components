import { BiSolidPencil } from 'react-icons/bi'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { BiSolidMessageSquareAdd } from 'react-icons/bi'
import {  AiFillHeart  } from 'react-icons/ai'
import { BsShareFill } from 'react-icons/bs'
const ContactProfile = ()=> {

    return(
        <div>
            <ContactInfo/>
        </div>
    )
}

const ContactInfo = ()=> {

    return(
        <table className="table-auto bg-white rounded-md shadow-lg m-1">
                <tr>
                    <th>Name:</th>
                    <td>{}alireza</td>
                    <td><BiSolidPencil/></td>
                </tr>
                <tr>
                    <th>Phone Number:</th>
                    <td>{}09135367500</td>
                    <td><BiSolidPencil/></td>
                </tr>
                <tr>
                    <th>Email Address:</th>
                    <td>{}alirezaesmaili6036@gmail.com</td>
                    <td><BiSolidPencil/></td>
                </tr>
                <tr>
                    <th>Work Info:</th>
                    <td>{}learning react - computer repair intern</td>
                    <td><BiSolidPencil/></td>
                </tr>
                <tr>
                    <th>Relationship:</th>
                    <td>{}me literally</td>
                    <td><BiSolidPencil/></td>
                </tr>
                <tr>
                    <th>Action:</th>
                    <td className='flex justify-between'><RiDeleteBin6Fill className=' text-xl'/><BiSolidMessageSquareAdd className=' text-xl'/><BsShareFill/><AiFillHeart className='text-xl'/></td>
                    <td></td>
                </tr>
        </table>
    )
}


export default ContactProfile;