"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./UI/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ", className)}
        >
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="Home">

                    </MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="Our Courses">
                <div className="flex flex-col space-y-4">
                    <HoveredLink href="/courses">All Courses</HoveredLink>
                    <HoveredLink href="/courses">Leadership Mastery</HoveredLink>
                    <HoveredLink href="/courses">Investment Strategies</HoveredLink>
                    <HoveredLink href="/courses">Entrepreneurship Fundamentals</HoveredLink>
                    <HoveredLink href="/courses">E-commerce Mastery</HoveredLink>
                </div>
                </MenuItem>
                <Link href={"/contact-us"}>
                    <MenuItem setActive={setActive} active={active} item="Contact Us">

                    </MenuItem>
                </Link>
            </Menu>
        </div>
    )
}

export default Navbar