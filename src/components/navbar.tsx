import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { DollarSign, FolderArchive, Heart, Home, Menu, X } from "lucide-react";
import logo from "@/assets/logo.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const logon = useRef(null);
  useEffect(() => {
    gsap.to(logon.current, {
      rotate: 100, // putaran penuh
      duration: 1,
      repeat: -1, // tanpa batas
      ease: "power1.in",
      yoyo: true,
    });
  }, []);

  const navlist = [
    { name: "Home", href: "#", icon: Home },
    { name: "Project", href: "#", icon: FolderArchive },
    { name: "Donate", href: "#", icon: Heart },
    { name: "Contribution", href: "#", icon: DollarSign },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-transparent z-50 backdrop-blur-sm">
      <div className="flex items-center justify-between max-w-6xl mx-auto px-4 py-3">
        {/* Logo */}
        <div className="flex items-center ">
          <img
            ref={logon}
            src={logo}
            alt="nameraid logo"
            className="w-8 h-8 inline-block rounded-full"
          />
          <span className="text-white font-bold text-xl tracking-tight">
            ameraid
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-gray-300">
          {navlist.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-1 hover:text-white transition-colors duration-200"
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </a>
          ))}
        </div>

        {/* Button */}
        <div className="hidden md:flex">
          <Button
            variant="secondary"
            className="bg-white text-black hover:bg-gray-200 transition-all duration-200 font-semibold"
          >
            Touch Me
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(!open)}
            className="text-white"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden flex flex-col items-start bg-neutral-950 border-t border-neutral-800 px-6 py-3 space-y-3">
          {navlist.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </a>
          ))}
          <Button
            variant="secondary"
            className="w-full bg-white text-black hover:bg-gray-200 font-semibold"
          >
            Touch Me
          </Button>
        </div>
      )}
    </nav>
  );
}
