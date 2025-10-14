import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SiLeetcode, SiYoutube } from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ExternalLink, Link, Mail, Github, Twitter, Linkedin, Instagram, Facebook, PhoneCall, Heart, UserSquareIcon, Store }
    from
    "lucide-react";
import logo from "@/assets/logo.svg";
import Navbar from "../Navbar";
export default function Linktree() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    {/* env import */ }
    const email = import.meta.env.VITE_EMAIL;
    const phone = import.meta.env.VITE_PHONE;
    const message = encodeURIComponent("Hallo @nameraid, aku ingin bekerja sama denganmu.");
    const github = import.meta.env.VITE_GITHUB;
    const insta = import.meta.env.VITE_INSTAGRAM;
    const linkid = import.meta.env.VITE_LINKID;
    const appurl = import.meta.env.VITE_APPURL;
    const youtube = import.meta.env.VITE_YOUTUBE;
    const twitter = import.meta.env.VITE_TWITTER;
    const facebook = import.meta.env.VITE_FACEBOOK;
    const leetcode = import.meta.env.VITE_LEETCODE;
    const lynk = import.meta.env.VITE_LYNKID;
    useEffect(() => {
        document.title = "LinkTree | Nameraid";
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const links = [
        {
            title: "Portfolio Website",
            subtitle: "View my latest work & projects",
            icon:
                <UserSquareIcon className="h-5 w-5" />,
            url: `${appurl}`
        },
        {
            title: "Leet Code",
            subtitle: "Solve coding challenges",
            icon:
                <SiLeetcode className="h-5 w-5" />,
            url: `${leetcode}`
        },
        {
            title: "YouTube Channel",
            subtitle: "Subscribe for tutorials & content",
            icon:
                <SiYoutube className="h-5 w-5" />,
            url: `${youtube}`
        },
        {
            title: "GitHub Profile",
            subtitle: "Check out my open source work",
            icon:
                <Github className="h-5 w-5" />,
            url: `${github}`
        },
        {
            title: "lynk.id",
            subtitle: "Check out my digital product store",
            icon: <Store className="h-5 w-5" />,
            url: `${lynk}`
        }
    ];

    const socialLinks = [
        {
            icon:
                <Twitter className="h-5 w-5" />, label: "Twitter", url: `${twitter}`
        },
        {
            icon:
                <Linkedin className="h-5 w-5" />, label: "LinkedIn", url: `${linkid}`
        },
        {
            icon:
                <Instagram className="h-5 w-5" />, label: "Instagram", url: `${insta}`
        },
        {
            icon:
                <Facebook className="h-5 w-5" />, label: "Facebook", url: `${facebook}`
        },
    ];
    const gridSize = 100; // ukuran grid (jarak antar titik)
    return (<>
        <Navbar />
        <section className="relative bg-black min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 opacity-30 transition-all duration-300" style={{
                background:
                    `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1),
            transparent 80%)`,
            }} />

            {/* Grid pola garis */}
            <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: ` linear-gradient(rgba(255,255,255,0.05)
            1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px) `,
                backgroundSize: `${gridSize}px ${gridSize}px`,
            }} />

            {/* Logo di setiap perpotongan grid */}
            <div className="absolute inset-0 opacity-2" style={{
                backgroundImage: `url(${logo})`, backgroundRepeat: "repeat"
                , backgroundSize: `${gridSize}px ${gridSize}px`, backgroundPosition: "center center",
                filter: "grayscale(1)",
            }}>
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-2xl w-full">
                {/* Profile Section */}
                <div className="flex items-center flex-col justify-center mb-12 space-y-6">
                    {/* Avatar with Glow Effect */}
                    <div className="relative group">
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-white via-gray-300 to-white rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                        <Avatar
                            className="relative h-32 w-32 border-2 border-white/20 bg-gradient-to-br from-gray-800 to-black">
                            <AvatarFallback
                                className="bg-gradient-to-br from-gray-800 to-black text-5xl font-bold text-white">
                                <img src="/file.png" alt="Avatar" />
                            </AvatarFallback>
                        </Avatar>
                    </div>

                    <Badge variant="outline" className="border-white/20 bg-white/5 text-white backdrop-blur-sm px-4 py-1">
                        <Link className="mr-2 h-3 w-3" />
                        @nameraid
                    </Badge>

                    {/* Name & Title */}
                    <div className="text-center space-y-3">
                        <h1 className="text-3xl md:text-5xl flex flex-col justify-center font-bold tracking-tight">
                            <span
                                className="flex justify-center items-center block bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                                <img src={logo} width={50} height={50} alt="Nameraid Logo" /> ameraid
                            </span>
                        </h1>
                        <div className="space-y-1">
                            <p className="text-gray-400 font-medium">
                                Creator • Designer • Developer
                            </p>
                            <p className="text-sm text-gray-500">
                                Building digital experiences that matter
                            </p>
                            <span className="flex flex-wrap items-center gap-3 text-white font-semibold text-sm">
                                {/* Email */}
                                <span className="flex items-center gap-2">
                                    <Mail className="w-4 h-4" />
                                    {email}
                                    <Button size="sm" variant="default"
                                        className="ml-2 border-white  cursor-pointer hover:bg-white hover:text-black transition"
                                        onClick={() =>
                                            window.open(`mailto:${email}?subject=Kerja Sama&body=${message}`, "_blank")
                                        }
                                    >
                                        Send Email
                                    </Button>
                                </span>

                                <span className="mx-2 text-gray-400">|</span>

                                {/* WhatsApp */}
                                <span className="flex items-center gap-2">
                                    <PhoneCall className="w-4 h-4" />
                                    +{phone}
                                    <Button size="sm" variant="default"
                                        className="ml-2 border-green-500 bg-green-500 text-white cursor-pointer  hover:bg-green-800 hover:text-white transition"
                                        onClick={() =>
                                            window.open(`https://wa.me/${phone}?text=${message}`, "_blank")
                                        }
                                    >
                                        WhatsApp
                                    </Button>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center gap-3 mb-8">
                    {socialLinks.map((social, i) => (
                        <Button key={i} variant="outline" size="icon" asChild className="
        relative
        h-12 w-12
        border border-white/10
        bg-white/5
        hover:bg-white/10
        hover:border-white/30
        transition-all
        group
        backdrop-blur-sm
        rounded-xl
        hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]
      ">
                            <a href={social.url} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                                {/* Background glow yang berputar */}
                                <div className="
            absolute inset-0
            rounded-xl
            bg-gradient-to-br from-white/40 to-transparent
            opacity-0
            group-hover:opacity-100
            transition-opacity
            blur-sm
            animate-none
            group-hover:animate-[spin_8s_linear_infinite]
          " />

                                {/* Icon */}
                                <span
                                    className="relative text-white text-lg group-hover:scale-110 transition-transform duration-300">
                                    {social.icon}
                                </span>
                            </a>
                        </Button>
                    ))}
                </div>

                {/* Links Grid */}
                <div className="space-y-3 mb-8">
                    {links.map((link, i) => (
                        <a key={i} href={link.url} className="block group">
                            <Card
                                className="relative bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] overflow-hidden">
                                {/* Hover Glow Effect */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <CardContent className="relative p-5">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div
                                                className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors border border-white/10">
                                                <span className="text-white">
                                                    {link.icon}
                                                </span>
                                            </div>
                                            <div className="text-left">
                                                <h3 className="text-white font-semibold text-base mb-1">
                                                    {link.title}
                                                </h3>
                                                <p className="text-gray-400 text-sm">
                                                    {link.subtitle}
                                                </p>
                                            </div>
                                        </div>
                                        <ExternalLink
                                            className="text-gray-400 group-hover:text-white transition-colors h-5 w-5 flex-shrink-0" />
                                    </div>
                                </CardContent>
                            </Card>
                        </a>
                    ))}
                </div>

                {/* Social Media Links */}

                {/* Footer */}
                <div className="text-center">
                    <div className=" flex block items-center justify-center space-x-3 text-sm">
                        <span className="text-gray-500">© {new Date().getFullYear()} All rights reserved made with </span>
                        <Heart className="fill-red-500" /> <span className="text-gray-500"> by </span><a
                            className="underline text-white items-center flex" href={github} target="_blank">
                            <Github />Nameraid
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
}
