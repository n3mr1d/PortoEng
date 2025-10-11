import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, FolderArchive, Heart, DollarSign, X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Navbar() {
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const logon = useRef<HTMLImageElement>(null);
    const openMobile = () => {
        // ambil element navbar
        const nav = document.getElementsByTagName("nav")[0];
        nav.classList.toggle("bg-black");
        setOpen(!open);
    }
    useEffect(() => {
        const tl = gsap.timeline()
        tl.to(logon.current, {
            rotate: 100,
            duration: 1,
            ease: "power2.inOut",
            yoyo: true,
            repeat: 1,
            transformOrigin: "center center",
        })
        tl.to(logon.current, {
            backgroundColor: "black",

            x: 100,
            duration: 1,
            ease: "power2.inOut",
            yoyo: true,
            repeat: 1,
        })
    })
    const navlist = [
        { name: "Home", href: "/", icon: Home },
        { name: "Project", href: "/project", icon: FolderArchive },
        { name: "Donate", href: "/donate", icon: Heart },
        { name: "Contribution", href: "/contribution", icon: DollarSign },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-full">
            <div className="flex items-center justify-between max-w-6xl mx-auto px-4 py-3 backdrop-blur-sm">
                {/* Logo */}
                <div className="flex items-center">
                    <img ref={logon} src={logo} alt="nameraid logo" className="w-8 h-8 rounded-full" />
                    <span className="text-white font-bold text-xl tracking-tight ml-1">
                        ameraid
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6 text-gray-300 relative">
                    {navlist.map((item) => {
                        const isActive = location.pathname === item.href;
                        return (
                            <div key={item.href} className="relative">
                                <NavLink to={item.href}
                                    className="flex items-center gap-1 px-3 py-2 rounded-full transition-all duration-300 hover:text-white">
                                    <item.icon className="w-5 h-5" />
                                    <span>{item.name}</span>
                                </NavLink>

                                {/* Smooth moving highlight */}
                                {isActive && (
                                    <motion.div layoutId="activeBubble" className="absolute inset-0 bg-white/20 rounded-full -z-10"
                                        transition={{ type: "spring", stiffness: 300, damping: 25 }} />
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Button */}
                <div className="hidden md:flex">
                    <Button variant="secondary"
                        className="bg-white text-black hover:bg-gray-200 transition-all duration-200 font-semibold">
                        Touch Me
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <Button variant="ghost" size="icon" onClick={openMobile} className="text-white">
                        {open ?
                            <X className="w-6 h-6" /> :
                            <Menu className="w-6 h-6" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {open && (
                <div
                    className="md:hidden flex flex-col items-start bg-neutral-950 border-t border-neutral-800 px-6 py-3 space-y-3">
                    {navlist.map((item) => (
                        <NavLink key={item.href} to={item.href} onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                                `flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-200 ${isActive ? 'bg-white/20 text-white' : 'text - gray - 300 hover:text-white'
                }`
                }
                >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                </NavLink>
            ))}
            <Button className="w-full bg-white text-black hover:bg-gray-200 font-semibold">
                Touch Me
            </Button>
        </div>
    )
}
    </nav >
    );
    }
