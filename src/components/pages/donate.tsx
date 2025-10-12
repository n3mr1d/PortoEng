"use client"
import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Link } from "react-router-dom"
import Navbar from "../Navbar"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import QRCode from "react-qr-code"
import { Copy, CopyCheck, DollarSign, Heart } from "lucide-react"
import { Badge } from "../ui/badge"

gsap.registerPlugin(ScrollTrigger)

export default function DonatePage() {
    const donate = [
        { name: "Ethereum", icon: "fab fa-ethereum", address: "0xETh1234xxxx" },
        { name: "Bitcoin", icon: "fab fa-bitcoin", address: "bc1BTCxxxx" },
    ]

    const anotherDonate = [
        {
            name: "Saweria.co",
            icon: "https://cdn.brandfetch.io/idBZLSRGbG/w/3893/h/2404/theme/light/logo.png?c=1bxid64Mup7aczewSAYMX&t=1707980904080",
            address: "https://saweria.co/nameraid"
        }
    ]

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [activeQR, setActiveQR] = useState<string | null>(null)
    const [copied, setCopied] = useState<string | null>(null)
    const sectionRef = useRef<HTMLDivElement>(null)

    function handleLongtex(text: string, panjang: number) {
        if (text.length > panjang) {
            return text.substring(0, panjang).trim() + "..."
        } else {
            return text
        }
    }

    useEffect(() => {
        document.title = "Donate | Nameraid"

        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener("mousemove", handleMouseMove)

        if (sectionRef.current) {
            gsap.utils.toArray<HTMLElement>(".donate-card").forEach((el, i) => {
                gsap.fromTo(
                    el,
                    { opacity: 0, y: 60 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        delay: i * 0.15,
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                            toggleActions: "play none none reverse",
                        },
                        ease: "power3.out",
                    }
                )
            })
        }

        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    function handleCopy(data: string, name: string) {
        navigator.clipboard.writeText(data)
        setCopied(name)
        setTimeout(() => {
            setCopied(null)
        }, 1000)
    }

    return (
        <section
            ref={sectionRef}
            className="relative bg-black text-white min-h-screen flex flex-col overflow-hidden"
        >
            {/* ✦ Custom Cursor */}
            <div
                style={{
                    transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
                }}
                className="fixed top-0 left-0 z-[9999] w-4 h-4 flex items-center justify-center pointer-events-none transition-transform duration-75 ease-linear"
            >
                <div className="relative w-full h-full">
                    <span className="absolute top-0 left-1/2 w-[1px] h-full bg-white -translate-x-1/2" />
                    <span className="absolute top-1/2 left-0 h-[1px] w-full bg-white -translate-y-1/2" />
                </div>
            </div>

            {/* ✦ Mouse light */}
            <div
                className="fixed inset-0 opacity-30 pointer-events-none"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.12), transparent 40%)`,
                }}
            />

            {/* ✦ Grid Overlay */}
            <div
                className="fixed inset-0 opacity-[0.06] pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            <Navbar />

            {/* ✦ Header */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-24 md:pt-36 pb-12">
                    <div className="flex justify-center">
                    <div
                        className="header-badge inline-flex justify-center items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                        <DollarSign className="w-4 h-4 text-white" />
                        <span className="text-sm text-gray-400">Donate and Support</span>
                    </div>
                    </div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent"
                >
                    Buy me a Coffee
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="mt-4 text-gray-400 max-w-2xl leading-relaxed"
                >
                    Every donation helps us maintain and expand open-source projects for developers around the world.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-8"
                >
                    <Badge
                        variant="outline"
                        className="cursor-pointer rounded-full text-base md:text-lg px-6 py-3 md:px-8 md:py-4 font-medium border border-white/20 bg-gradient-to-r from-white/5 to-white/10 text-white hover:from-white/10 hover:to-white/20 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 ease-in-out"
                    >
                        <span className="tracking-wide flex space-x-3 items-center">
                            <Heart className="w-5 fill-red-700 h-5 animate-bounce" />
                            <span>Donate Now</span>
                        </span>
                    </Badge>
                </motion.div>
            </div>

            {/* ✦ Crypto Donation Section */}
            <div className="relative z-10 w-full px-6 pb-16">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-2xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent text-center mb-12"
                    >
                        Donate with Crypto
                    </motion.h2>

                    <div
                        id="donate"
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {donate.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                            >
                                <Card className="donate-card border border-white/10 bg-gradient-to-b from-neutral-900 to-black rounded-2xl shadow-lg hover:shadow-white/10 transition-all duration-300 group overflow-hidden relative">
                                    <CardContent className="p-8 flex flex-col items-center justify-center gap-3">
                                        <motion.div
                                            whileHover={{ rotateY: 360 }}
                                            transition={{ duration: 1.2, ease: "easeInOut" }}
                                            className="text-4xl"
                                        >
                                            <i className={`${item.icon} text-white`} />
                                        </motion.div>
                                        <h3 className="text-xl text-white font-semibold">{item.name}</h3>
                                        <p className="text-sm text-gray-400">{handleLongtex(item.address, 10)}</p>

                                        <div className="flex gap-3 mt-4">
                                            <Button
                                                className="cursor-pointer"
                                                variant="default"
                                                size="sm"
                                                onClick={() => handleCopy(item.address, item.name)}
                                            >
                                                {copied === item.name ? <CopyCheck /> : <Copy className="cursor-pointer" />}
                                                {copied === item.name ? 'Copied!' : 'Copy'}
                                            </Button>

                                            <Button
                                                variant="default"
                                                size="sm"
                                                className="border-white/20 hover:border-white/40 text-white transition"
                                                onClick={() => setActiveQR(activeQR === item.name ? null : item.name)}
                                            >
                                                <i className="fas fa-qrcode mr-2" />
                                                QR
                                            </Button>
                                        </div>

                                        {activeQR === item.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                                transition={{ duration: 0.4 }}
                                                className="mt-5 p-4 border border-white/10 rounded-xl bg-black/60 backdrop-blur-sm"
                                            >
                                                <QRCode
                                                    value={item.address}
                                                    size={128}
                                                    bgColor="transparent"
                                                    fgColor="#ffffff"
                                                    level="M"
                                                />
                                            </motion.div>
                                        )}
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ✦ Alternative Donation Section */}
            <div className="relative z-10 w-full px-6 pb-24">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent text-center mb-12"
                    >
                        Another way to support me
                    </motion.h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                        {anotherDonate.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                                whileHover={{ scale: 1.03 }}
                            >
                                <Card className="donate-card border border-white/10 bg-gradient-to-b from-neutral-900 to-black rounded-2xl shadow-lg hover:shadow-white/10 transition-all duration-300 overflow-hidden">
                                    <CardContent className="p-8 flex flex-col items-center justify-center gap-4">
                                        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center overflow-hidden">
                                            <img
                                                src={item.icon}
                                                alt={item.name}
                                                className="w-12 h-12 object-contain"
                                            />
                                        </div>
                                        <h3 className="text-xl text-white font-semibold">{item.name}</h3>

                                        <a
                                            href={item.address}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full"
                                        >
                                            <Button
                                                variant="default"
                                                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                                            >
                                                <Heart className="w-4 h-4 mr-2 fill-current" />
                                                Support on {item.name}
                                            </Button>
                                        </a>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
