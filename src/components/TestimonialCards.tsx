"use client";
 
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./UI/infinite-moving-cards";

function TestimonialCards() {
    const testimonials = [
        {
          quote:
            "Joining this academy was the best decision I made for my business. The courses are practical, the community is supportive, and the insights are invaluable. The mentorship I received here has been pivotal in refining my business strategy and scaling my startup efficiently. I highly recommend it to anyone serious about entrepreneurship.",
          name: "Alex Johnson",
          title: "Founder, InnovateTech",
        },
        {
          quote:
            "The real-time market insights have transformed the way I approach my business strategy. Staying ahead of the competition has never been easier. The platform's comprehensive analytics and up-to-date information allow me to make informed decisions swiftly, which has been crucial for our growth and success.",
          name: "Maria Rodriguez",
          title: "CEO, MarketMinds",
        },
        {
          quote:
            "This platform's collaborative tools have made teamwork more efficient and productive. Our projects are now completed faster and with better results. The ability to work in real-time with my team, share ideas seamlessly, and keep everyone aligned has significantly boosted our productivity and innovation.",
          name: "James Lee",
          title: "Project Manager, Visionary Ventures",
        },
        {
          quote:
            "The mentorship and resources provided here are top-notch. I feel more confident and prepared to tackle the challenges of entrepreneurship. The hands-on approach and practical advice from seasoned entrepreneurs have given me the edge I needed to succeed in a competitive market.",
          name: "Sarah Williams",
          title: "Entrepreneur, GrowthHackers",
        },
        {
          quote:
            "The comprehensive courses and hands-on workshops have equipped me with the skills I needed to launch and scale my startup successfully. From developing a solid business plan to mastering digital marketing, every aspect of entrepreneurship is covered. The support and guidance I received here have been instrumental in my journey.",
          name: "Michael Brown",
          title: "Co-Founder, StartupBoost",
        },
      ];
      
      
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
    <h2 className="text-3xl font-bold text-center mb-8 z-10">Success Stories from Our Entrepreneurial Community</h2>
    <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
    <div className="w-full max-w-6xl">
    <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      </div>
    </div>

   </div>
  )
}

export default TestimonialCards