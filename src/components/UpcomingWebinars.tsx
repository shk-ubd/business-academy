'use client'
import React from 'react'
import Link from 'next/link'
import { HoverEffect } from './UI/card-hover-effect';

function UpcomingWebinars() {

    const featuredWebinars = [
        {
            title: 'Understanding Market Dynamics',
            description:
                'Dive deep into the fundamentals of market dynamics and enhance your business acumen.',
            slug: 'understanding-market-dynamics',
            isFeatured: true,
        },
        {
            title: 'The Art of Business Planning',
            description:
                'Learn the craft of business planning from experienced entrepreneurs and business strategists.',
            slug: 'the-art-of-business-planning',
            isFeatured: true,
        },
        {
            title: 'Mastering Leadership Skills',
            description:
                'Advanced techniques to master your leadership skills and drive your team to success.',
            slug: 'mastering-leadership-skills',
            isFeatured: true,
        },
        {
            title: 'Business Development Essentials',
            description:
                'Get started with business development with this comprehensive overview.',
            slug: 'business-development-essentials',
            isFeatured: true,
        },
        {
            title: 'Effective Networking Strategies',
            description:
                'Enhance your networking skills with expert tips and strategies to grow your business connections.',
            slug: 'effective-networking-strategies',
            isFeatured: true,
        },
        {
            title: 'Digital Marketing Mastery',
            description:
                'Learn how to promote your business effectively in the digital age.',
            slug: 'digital-marketing-mastery',
            isFeatured: true,
        },
    ];




    return (
        <div className="py-12 px-2 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
                </div>

                <div className="mt-10">
                    <HoverEffect items={featuredWebinars.map(webinar => ({ title: webinar.title, description: webinar.description, link: webinar.slug })
                    )} />
                    {/*  */}
                </div>

                <div className="mt-10 text-center">
                    <Link href={"/"}
                        
                    >
                       <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-8 py-3 rounded-xl tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200" type="button">View All Webinars</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UpcomingWebinars