import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { DollarSign, FolderArchive, Heart, Home, Menu, X } from "lucide-react";
import logo from "@/assets/logo.svg";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const logon = useRef(null);
    function openMobile(){
        // ambil element navbar
        const nav = document.getElementsByTagName("nav")[0];
        nav.classList.toggle("bg-black");
        setOpen(!open);
    }
    useEffect(() => {
         // mengubah background navbar saat scroll y > 10

      const handleScroll = () => {
      const nav = document.querySelector("nav");
      if (!nav) return;
      if (window.scrollY > 10) {
        nav.classList.add("bg-black", "backdrop-blur-lg", "shadow-lg");
      } else {
        nav.classList.remove("bg-black", "backdrop-blur-lg", "shadow-lg");
      }
    };

        const tl = gsap.timeline();

        tl.to(logon.current, {
            rotate: 100,
            duration: 1,
            ease: "power2.inOut",
            yoyo: true,
            repeat: 1,
            transformOrigin: "center center",
        });

        tl.to(logon.current, {
            backgroundColor: "black",

            x: 100,
            duration: 1,
            ease: "power2.inOut",
            yoyo: true,
            repeat: 1,
        });
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

        // kalau ingin loop terus semua animasi:

    }, []);

    const navlist = [
        { name: "Home", href: "#", icon: Home },
        { name: "Project", href: "#", icon: FolderArchive },
        { name: "Donate", href: "#", icon: Heart },
        { name: "Contribution", href: "#", icon: DollarSign },
    ];

    return (
        <nav className="fixed top-0 rounded-full left-0 right-0 z-50 backdrop-blur-full">
            <div className="flex items-center backdrop-blur-sm justify-between max-w-6xl mx-auto px-4 py-3">
                {/* Logo */}
                <div className="flex items-center ">
                    <img ref={logon} src={logo} alt="nameraid logo" className="w-8 h-8 inline-block rounded-full" />
                    <span className="text-white font-bold text-xl tracking-tight">
                        ameraid
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6 text-gray-300">
                    {navlist.map((item) => (
                        <a key={item.name} href={item.href}
                            className="flex items-center gap-1 hover:text-white transition-colors duration-200">
                            <item.icon className="w-5 h-5" />
                            <span>{item.name}</span>
                        </a>
                    ))}
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
                    <Button variant="ghost" size="icon" onClick={openMobile}
                        className="text-white"
                    >
                        {open ?
                            <X className="w-6 h-6" /> :
                            <Menu className="w-6 h-6" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {open && (
                <div className="md:hidden flex flex-col items-start bg-neutral-950 border-t border-neutral-800 px-6 py-3 space-y-3">
                    {navlist.map((item) => (
                        <a key={item.name} href={item.href}
                            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200">
                            <item.icon className="w-5 h-5" />
                            <span>{item.name}</span>
                        </a>
                    ))}
                    <Button variant="secondary" className="w-full bg-white text-black hover:bg-gray-200 font-semibold">
                        Touch Me
                    </Button>
                </div>
            )}
        </nav>
    );
}
