import { HiOutlineCloudUpload } from "react-icons/hi";

const Card = ({children,title}) =>{
    return (
    <div className=" mx-auto flex flex-col items-center text-center w-[384px] h-[208px] bg-white rounded-lg hover:shadow-gray-400 hover:shadow-md">
        <div className="bg-[#3F75FE] p-2 rounded-md shadow-gray-400 shadow-lg -translate-y-6"><HiOutlineCloudUpload className=" w-8 h-8 text-white" /></div>
        <h1 className="px-2 mb-4 font-semibold text-[#111827]">{title}</h1>
        <p className="px-2 text-xs text-[#6B7280]">{children}</p>
    </div>
    )
}

export default Card;