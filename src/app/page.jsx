"use client";

import Image from "next/image";
import { FaArrowCircleDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [visibleSections, setVisibleSections] = useState({});

  const toggleSection = (section) => {
    setVisibleSections((prev) => ({
      ...prev,
      [section]: !prev[section], // Toggle only the clicked section
    }));
  };

  return (
    <>
      <h1 className="text-center py-10 text-5xl">Welcome to my Portfolio</h1>
      
      <Image
        src="https://res.cloudinary.com/dom4vyzw7/image/upload/v1740168471/IMG_2671_o6ztuq.png"
        alt="Image Of Me"
        width={200}
        height={200}
        className="m-auto rounded-xl border-2 border-white"
      />

      <h1 className="w-4/5 mx-auto text-center py-10 text-4xl">Here is a little information about me!</h1>

      {/* Sections */}
      {[
        {
          title: "My Future Aspirations",
          content: (
            <>
              <Image
                src="https://res.cloudinary.com/dom4vyzw7/image/upload/v1740196425/gcu_obczrm.webp"
                alt="Grand Canyon University Logo"
                width={300}
                height={300}
                className="mx-auto my-5 rounded-2xl"
              />
              My name is Diego Esquivias, and I am currently a senior in high school, on my way to graduate with an honors diploma. I got a full ride and am enrolled in GCU for a degree in software development. I hope that this degree can help me get a job in front-end web development or coding in general.
            </>
          ),
        },
        {
          title: "My Hobbies",
          content: (
            <>
              <Image
                src="https://res.cloudinary.com/dom4vyzw7/image/upload/v1740196053/fortnite_erorsg.jpg"
                alt="Fortnite"
                width={300}
                height={300}
                className="mx-auto my-5 rounded-2xl"
              />
              I enjoy playing many games like Fortnite, Street Fighter, Mortal Kombat, Marvel Rivals, and many more. I also listen to artists like NF, Cordae, Kendrick Lamar, J. Cole, and others. I love watching Marvel movies and anime like Demon Slayer, Naruto, Avatar, Blue Lock, etc.
            </>
          ),
        },
        {
          title: "About My Logo",
          content: (
            <>
              <Image
                src="https://res.cloudinary.com/dom4vyzw7/image/upload/v1740195679/myLogo_kvthbt.png"
                alt="My logo"
                width={200}
                height={200}
                className="mx-auto my-5 rounded-2xl"
              />
              My logo was inspired by car brands like Lamborghini, Ferrari, and Porsche. I chose to include only my last name because it is unique and makes the logo look more premium. The logo was made using Kittl.com.
            </>
          ),
        },
        {
          title: "Reason Behind Color Theme",
          content: (
            <>
              <Image
                src="https://res.cloudinary.com/dom4vyzw7/image/upload/v1740195691/hope_jtlvzv.webp"
                alt="NF Album"
                width={200}
                height={200}
                className="mx-auto my-5 rounded-2xl"
              />
              I chose this color theme based on the latest album from one of my favorite artists, NF. I liked how it looked and wanted to use it for my portfolio.
            </>
          ),
        },
      ].map((section) => (
        <div key={section.title} className="text-center bg-blocks w-4/5 lg:w-1/2 mx-auto rounded-xl p-5 text-2xl my-4">
          {/* Clickable Header */}
          <div
            className="flex justify-center items-center cursor-pointer hover:animate-bounce"
            onClick={() => toggleSection(section.title)}
          >
            {section.title}
            <FaArrowCircleDown
              className={`ml-2 transition-transform duration-300 ${visibleSections[section.title] ? "rotate-180" : ""}`}
            />
          </div>

          {/* Animated Content */}
          <motion.div
            initial={false}
            animate={{ height: visibleSections[section.title] ? "auto" : 0, opacity: visibleSections[section.title] ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-2">{section.content}</div>
          </motion.div>
        </div>
      ))}
    </>
  );
}
