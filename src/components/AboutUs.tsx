"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "./UI/tracing-beam";
import { OverlayCard } from "./OverlayCard";

export default function AboutUs() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative mb-4">
        <div  className="mb-4">
          <h1 className="text-2xl md:text-5xl text-center font-sans font-bold mb-8 text-white">About Us</h1>
          <p className="text-white/75 text-center">Welcome to Business Academy, where we empower aspiring entrepreneurs and business professionals to achieve their dreams. Our mission is to provide top-notch education, resources, and a supportive community to help you succeed in the competitive world of business.</p>
        </div>
        {content.map((item: Content, index) => (
          <div key={`content-${index}`} className="mb-10">
            {/* <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2> */}

            <h2 className="text-2xl text-teal-500 font-semibold tracking-wide uppercase my-4">
              {item.title}
            </h2>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt={item.title}
                  height="800"
                  width="800"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

interface Content {
  title: string;
  description: JSX.Element;
  image?: string;
}

const content = [
  {
    title: "Our Mission and Story",
    description: (
      <>
        <p className="text-white/75">
          Founded in 2020, Business School was born out of a passion for entrepreneurship and a desire to make high-quality business education accessible to everyone. Our mission is to nurture and develop the next generation of business leaders by offering comprehensive courses, mentorship, and real-world insights.
        </p>
        <p className="text-white/75">
          Since our inception, we&apos;ve helped thousands of students turn their business ideas into reality. Our programs are designed to be practical and hands-on, ensuring that you gain the skills and knowledge needed to thrive in today&apos;s competitive market.
        </p>
      </>
    ),
    image: "https://images.unsplash.com/photo-1521316730702-829a8e30dfd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "What We Offer",
    description: (
      <>
       <p className="text-white/75">
          We offer a wide range of courses covering essential business topics such as market analysis, business planning, digital marketing, leadership skills, and more. Our programs are designed to be practical and hands-on, ensuring that you gain the skills and knowledge needed to thrive.
        </p>
        <p className="text-white/75">
          Join our vibrant community of like-minded individuals and benefit from networking opportunities, collaborative projects, and ongoing support from our experienced mentors.
        </p>
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Success Stories",
    description: (
      <>
        <p className="text-white/75">
          Our alumni have gone on to create successful businesses and make significant impacts in their industries. Here are a few of their stories:
        </p>
        <div className="flex flex-wrap md:flex-nowrap gap-6 justify-evenly mt-8">
        <OverlayCard 
        text={
          {
            heading: "Alex Johnson", 
            description: "Founder of InnovateTech: Joining this academy was the best decision I made for my business. The courses are practical, the community is supportive, and the insights are invaluable.",
            image: "https://images.unsplash.com/photo-1584043720379-b56cd9199c94?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            }/>
        <OverlayCard 
        text={
          {
            heading: "Maria Rodriguez",
        description: "CEO of MarketMinds: The real-time market insights have transformed the way I approach my business strategy. Staying ahead of the competition has never been easier.",
        image: "https://images.unsplash.com/photo-1614786269829-d24616faf56d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            }/>
        <OverlayCard 
        text={
          {
            heading: "James Lee",
            description: "Project Manager at Visionary Ventures: This platforms collaborative tools have made teamwork more efficient and productive. Our projects are now completed faster and with better results.",
            image: "https://images.unsplash.com/photo-1595956553066-fe24a8c33395?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            }/>
        </div>
        
      </>
    ),
    // image:
    //   "https://images.unsplash.com/photo-1497561813398-8fcc7a37b567?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
