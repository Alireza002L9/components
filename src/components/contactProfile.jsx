import { BiSolidPencil } from 'react-icons/bi'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { BiSolidMessageSquareAdd } from 'react-icons/bi'
import {  AiFillHeart  } from 'react-icons/ai'
import { BsShareFill } from 'react-icons/bs'
import { BsPersonCircle } from 'react-icons/bs'
import { BsThreeDots } from 'react-icons/bs'
const ContactProfile = ()=> {

    return(
        <div className=' bg-white inline-flex border-2 border-violet-500 rounded-md shadow-lg mt-2'>
            <Pfp/>
            <ContactInfo/>
        </div>
    )
}

const ContactInfo = ({name, phone, email, work, relation,})=> {

    return(
        <table className="table-auto bg-white rounded-md border-l-2">
                <tr>
                    <th>Name:</th>
                    <td>{name}</td>
                    <td><BiSolidPencil/></td>
                </tr>
                <tr>
                    <th>Phone Number:</th>
                    <td>{phone}</td>
                    <td><BiSolidPencil/></td>
                </tr>
                <tr>
                    <th>Email Address:</th>
                    <td>{email}</td>
                    <td><BiSolidPencil/></td>
                </tr>
                <tr className=' hidden'>
                    <th>Work Info:</th>
                    <td>{work}</td>
                    <td><BiSolidPencil/></td>
                </tr>
                <tr className=' hidden'>
                    <th>Relationship:</th>
                    <td>{relation}</td>
                    <td><BiSolidPencil/></td>
                </tr>
                <tr>
                    <th>Action:</th>
                    <td className='flex justify-around gap-4 '> 
                    <span><RiDeleteBin6Fill className='icon text-xl hover:text-orange-500'/></span>
                    <span><BiSolidMessageSquareAdd className='icon text-xl hover:text-emerald-500'/></span>
                    <span><BsShareFill className='icon hover:text-orange-500'/></span>
                    <span><AiFillHeart className='icon text-xl hover:text-orange-500 active:text-rose-600'/></span>
                    </td>
                    <td><BsThreeDots className='icon mb-1'/></td>
                </tr>
        </table>
    )
}
const Pfp = ()=> {
    return(
        <div className='self-center grid px-3 transition-all duration-300'>
            <div>
                <BsPersonCircle className=' text-6xl text-violet-500 m-auto  '/>
            </div>
            
            <div className='hover-underline-animation text-violet-500 font-bold cursor-pointer transition-all duration-300 ease-in-out'>
                Edit Profile
            </div>
        </div>
    )
}

export default ContactProfile;