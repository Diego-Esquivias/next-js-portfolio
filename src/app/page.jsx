import Image from "next/image";
import { FaArrowCircleDown } from "react-icons/fa";

export default function Home() {
  return (
    <>
    <h1 className="text-center py-10 text-4xl">Welcome to my Portfolio</h1>
    
    <Image
      src="https://res.cloudinary.com/dom4vyzw7/image/upload/v1734382346/samples/chair-and-coffee-table.jpg"
      alt="test image"
      width={300}
      height={300}
      className="m-auto"
    />

    <h1 className="text-center py-10 text-3xl">Here is a little information about me!</h1>

    <div className="text-center bg-blocks w-4/5 mx-auto rounded-xl p-5 text-xl my-4">
      Name
      <FaArrowCircleDown className="hover:animate-bounce peer"/>
      <div className="hidden peer-focus:block">
        Diego Esquivias
      </div>
    </div>

    <div className="text-center bg-blocks w-4/5 mx-auto rounded-xl p-5 text-xl my-4">
      My Hobbies
      <div>

      </div>
    </div>

    <div className="text-center bg-blocks w-4/5 mx-auto rounded-xl p-5 text-xl my-4">
      Reason For Logo
      <div>

      </div>
    </div>

    <div className="text-center bg-blocks w-4/5 mx-auto rounded-xl p-5 text-xl my-4">
      Reason Behind Color/Font
      <div>

      </div>
    </div>
    </>
  );
}
