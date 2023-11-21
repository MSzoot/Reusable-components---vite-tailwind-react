import { FaQuoteLeft } from "react-icons/fa6";


export default function Testimonial({children,img,author,company}) {
    return(
        <div className="bg-[#2545B8] w-96 mx-auto mt-20 md:w-[1358px] md:py-5">
            <div className=" -translate-y-24 flex flex-col gap-10 md:flex-row md:-translate-y-0 md:items-center md:max-h-96">
                <div className="flex justify-center">
                    <img src={img} className=" w-80 h-52 object-cover object-top rounded-xl md:w-[464px] md:h-[484px] md:ml-20 "></img>
                </div>
                <div className="mx-4 md:w-8/12">
                    <FaQuoteLeft className="w-20 h-20 text-white opacity-25 mb-10" />
                    <p className="text-white text-lg mb-8">{children}</p>
                    <p className="text-white font-bold">{author}</p>
                    <p className="text-white">{company}</p>
                </div>
            </div>
        </div>
    )
}