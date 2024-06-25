"use client";
import React from "react";
import { StickyScroll } from "./UI/sticky-scroll-reveal";
import Image from "next/image";
 

function WhyChooseUs() {
    const content = [
        {
          title: "Collaborative Business Planning",
          description:
            "Work together in real time with your team, mentors, and peers. Collaborate on business plans, share innovative ideas, and make strategic decisions quickly. Our platform streamlines your entrepreneurial workflow and boosts productivity.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
              Collaborative Business Planning
            </div>
          ),
        },
        {
          title: "Real-Time Market Insights",
          description:
            "Get real-time insights into market trends and changes. With our platform, you can track market dynamics and adjust your strategies instantly. Stay ahead of the competition with up-to-date information and data-driven decisions.",
          content: (
            <div className="h-full w-full flex items-center justify-center text-white">
              Market Insights
            </div>
          ),
        },
        {
          title: "Seamless Project Management",
          description:
            "Experience seamless project management with real-time updates. Our platform ensures you're always working on the latest version of your business projects, eliminating the need for constant manual updates. Keep your team aligned and maintain the flow of your entrepreneurial ventures without any interruptions.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
              Seamless Project Management
            </div>
          ),
        },
        {
          title: "Content Creation Mastery",
          description:
            "Master the art of content creation with real-time updates and streamlined workflows. Our platform ensures that your marketing materials are always current, helping you stay ahead in the digital landscape. Enhance your brand presence and engage your audience effectively.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
              Content Creation Mastery
            </div>
          ),
        },
      ];
      
  return (
    <div className="">
      <StickyScroll content={content} />
    </div>
  )
}

export default WhyChooseUs