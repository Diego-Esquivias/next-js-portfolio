import Image from "next/image";
import { FaArrowCircleDown } from "react-icons/fa";

export default function Home() {
  return (
    <>
    <h1 className="text-center py-10 text-4xl">Welcome to my Portfolio</h1>
    
    {/* Image of Myself */}
    <Image
      src="https://res.cloudinary.com/dom4vyzw7/image/upload/v1740168471/IMG_2671_o6ztuq.png"
      alt="test image"
      width={300}
      height={300}
      className="m-auto rounded-xl border-2 border-white"
    />

    <h1 className="text-center py-10 text-3xl">Here is a little information about me!</h1>

    {/* Info About Me and The Website */}
    <div className="text-center bg-blocks w-4/5 mx-auto rounded-xl p-5 text-xl my-4">
      <div className="flex justify-center items-center hover:animate-bounce">
        My Future Aspirations
          <FaArrowCircleDown className="ml-2"/>
      </div>
      <div className="hidden">
        Diego Esquivias
      </div>
    </div>

    <div className="text-center bg-blocks w-4/5 mx-auto rounded-xl p-5 text-xl my-4">
      My Hobbies
      <div>
        Sample 1
      </div>
    </div>

    <div className="text-center bg-blocks w-4/5 mx-auto rounded-xl p-5 text-xl my-4">
      Reason For Logo
      <div>
        Sample 2
      </div>
    </div>

    <div className="text-center bg-blocks w-4/5 mx-auto rounded-xl p-5 text-xl my-4">
      Reason Behind Color/Font
      <div>
        Sample 3
      </div>
    </div>
    </>
  );
}
