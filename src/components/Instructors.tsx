'use client'
import React from 'react'
import { WavyBackground } from './UI/wavy-background'
import { AnimatedTooltip } from './UI/animated-tooltips';

function Instructors() {
    const people = [
        {
          id: 1,
          name: "Tony Robbins",
          designation: "Entrepreneur, Author, and Peak Performance Strategist",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Tony_Robbins.jpg/330px-Tony_Robbins.jpg",
        },
        {
          id: 2,
          name: "Marie Forleo",
          designation: "Entrepreneur, Author, and Speaker",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Marie_Forleo_1.jpg/1280px-Marie_Forleo_1.jpg",
        },
        {
          id: 3,
          name: "Barbara Corcoran",
          designation: "Businesswoman, Investor, and 'Shark Tank' Judge",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/BarbaraCorcoran2023.jpg/800px-BarbaraCorcoran2023.jpg",
        },
        {
          id: 4,
          name: "Suze Orman",
          designation: "Financial Advisor, Author, and TV Host",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/5.3.10SuzeOrmanByDavidShankbone.jpg/800px-5.3.10SuzeOrmanByDavidShankbone.jpg",
        },
      ];
      
      
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
    <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructors</h2>
        <p className="text-base md:text-lg text-white text-center mb-4">Discover the influential experts who will guide your financial freedom journey</p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
            <AnimatedTooltip items={people}/>
            
        </div>
    </WavyBackground>
</div>
  )
}

export default Instructors