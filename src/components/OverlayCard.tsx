"use client";

export function OverlayCard({ text }: { text: { heading: string; description: string; image: string; } }) {
  return (
    <div className="max-w-64 w-full">
      <div 
        className="group w-full cursor-pointer overflow-hidden relative card h-80 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800" 
        style={{ backgroundImage: `url(${text.image})`, backgroundSize: 'cover' }}
      >
        <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
        <div className="relative z-10 ">
          <h1 className="font-bold text-xl md:text-xl text-gray-50">
            {text.heading}
          </h1>
          <p className="font-normal text-xs text-gray-50 mb-4 mt-2">
            {text.description}
          </p>
        </div>
      </div>
    </div>
  );
}
