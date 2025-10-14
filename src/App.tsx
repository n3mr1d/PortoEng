import { useEffect, useRef, useState } from "react"
import {

    Code,
    Database,
    Server,
    Layers,
    User,
    TerminalIcon,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/Navbar"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Banner } from "./components/banner"
import Footer from "./components/footer"
import BorderBeamButton from "./components/borderBem"
import Certificate from "./components/certificate"
import ProfileGit from "./components/profileGit"
import FeatureProject from "./components/featureproject"
import Hero from "./components/hero"
import Getouch from "./components/gettouch"
import LogoLoader from "./components/loader"
export default function Page() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const rootRef = useRef<HTMLDivElement | null>(null)
    const [loading, setloading] = useState(true)
    document.title = "Home | Nameraid";
    function umurHitung(umur: number) {
        const tahun = new Date().getFullYear();
        const umurJawab = tahun - umur;
        return umurJawab;
    }

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const ctx = gsap.context(() => {
            // Hero intro
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
            tl.from(".hero-badge", { y: 20, opacity: 0, duration: 0.5 })
                .from(".hero-title", { y: 24, opacity: 0, duration: 0.6 }, "-=0.2")
                .from(".hero-subtitle", { y: 20, opacity: 0, duration: 0.6 }, "-=0.35")
                .from(".hero-cta", { y: 18, opacity: 0, duration: 0.5, stagger: 0.08 }, "-=0.35")

            gsap.utils.toArray<HTMLElement>(".reveal-section").forEach((el) => {
                gsap.from(el, {
                    opacity: 0,
                    y: 30,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 75%",
                        toggleActions: "play none none reverse",
                    },
                })
            })

            // Skill cards
            gsap.utils.toArray<HTMLElement>(".skill-card").forEach((card) => {
                gsap.from(card, {
                    opacity: 0,
                    y: 20,
                    duration: 0.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                    },
                })
            })

            // Project cards
            gsap.utils.toArray<HTMLElement>(".project-card").forEach((card) => {
                gsap.from(card, {
                    opacity: 0,
                    y: 24,
                    duration: 0.6,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                    },
                })
            })
        }, rootRef)

        return () => ctx.revert()
    }, [])
    useEffect(() => {
        const timeOut = setTimeout(() => {
            setloading(false)
        }, 3000)
        return () => clearTimeout(timeOut)
    }, [])
    const skills = [
        {
            name: "Frontend",
            icon:
                <Layers className="w-6 h-6" />,
            items: ["React", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
        },
        {
            name: "Backend",
            icon:
                <Server className="w-6 h-6" />,
            items: ["PHP"],
        },
        {
            name: "Database",
            icon:
                <Database className="w-6 h-6" />,
            items: ["PostgreSQL", "MariaDB", "MySQL", "MongoDB"],
        },
        {
            name: "Tools",
            icon: <Code className="w-6 h-6" />,
            items: ["Git", "Linux"],
        },
        {
            name: "Frameworks",
            icon: <Code className="w-6 h-6" />,
            items: ["Vite", "Next.js", "Laravel"],
        }
    ]




    return (
        <div ref={rootRef} className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Animated background gradient */}
            <div style={{ transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`, }} className="
          fixed top-0 left-0 z-[9999]
          w-4 h-4
          flex items-center justify-center
          pointer-events-none
          transition-transform duration-75 ease-linear
        ">
                <div className="relative w-full h-full">
                    {/* Garis vertikal */}
                    <span className="absolute top-0 left-1/2 w-[1px] h-full bg-white -translate-x-1/2" />
                    {/* Garis horizontal */}
                    <span className="absolute top-1/2 left-0 h-[1px] w-full bg-white -translate-y-1/2" />
                </div>
            </div>
            <div className="fixed inset-0 opacity-30 pointer-events-none" style={{
                background:
                    `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px,
                        rgba(255,255,255,0.1), transparent 40%)`,
            }} />

            {/* Grid pattern overlay */}
            <div className="fixed inset-0 opacity-10 pointer-events-none" style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)"
                , backgroundSize: "50px 50px",
            }} />

            {loading ? (
                <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
                  <LogoLoader rotate={false} colorClassName="text-white" />
                    <span>Loading ...</span>
                </div>
            ) : (
                    <>
                    <Navbar />


                    <Hero />
                    <section className="w-full flex justify-center">
                        <Banner speed={10000} />
                    </section>


                    <section id="about"
                        className="reveal-section min-h-screen flex items-center justify-center px-6 py-20">
                        <div className="max-w-5xl flex flex-col justify-center mx-auto w-full">
                            <div className="flex justify-center">
                                <div
                                    className="header-badge inline-flex justify-center items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                                    <User className="w-4 h-4 text-white" />
                                    <span className="text-sm text-gray-400">Who Am I</span>
                                </div>
                            </div>

                            {/* Title */}
                            <h2
                                className="text-4xl md:text-5xl flex items-center justify-center font-bold mb-12 text-center">
                                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                    About Me
                                </span>
                            </h2>

                            {/* Content */}
                            <div className="flex flex-col-reverse md:flex-row gap-8">

                                {/* Left Card (Text) */}
                                <Card className="bg-white/5 border-white/10 w-full backdrop-blur-lg shadow-lg">
                                    <CardContent className="p-8">
                                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                            I'm a passionate full-stack developer with expertise in building
                                            scalable web applications. With a strong foundation in both
                                            frontend and backend technologies, I create seamless digital
                                            experiences that solve real-world problems.
                                        </p>
                                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                            My journey in software development started with a curiosity about
                                            how things work on the web. </p>
                                    </CardContent>
                                </Card>

                                {/* Right Card (Image) */}
                                <Card
                                    className="bg-white/5 border-white/10 w-full md:max-w-sm backdrop-blur-lg shadow-lg flex items-center justify-center">
                                    <CardContent className="p-6 flex-col flex justify-center">
                                        <div className="relative">
                                            <img src="./file.png" alt="About me"
                                                className="rounded-lg w-full h-auto object-cover shadow-md" />
                                            <div className="absolute m-2 top-0 right-0">
                                                <Badge className="border-white/20 font-xl text-white">
                                                    <User /> {umurHitung(2006)} <span className="text-gray-400">Years
                                                        Old</span>
                                                </Badge>

                                            </div>
                                        </div>

                                        <div>

                                            <BorderBeamButton />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </section>
                    <ProfileGit />
                    <Certificate />
                    {/* Skills Section */}
            <section id="skills"
                className="reveal-section min-h-screen flex items-center justify-center px-6 py-20">
                <div className="max-w-6xl mx-auto w-full">
                    <div className="flex justify-center">
                        <div
                            className="header-badge inline-flex justify-center items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                            <TerminalIcon className="w-4 h-4 text-white" />
                            <span className="text-sm text-gray-400">Skill And Experience</span>
                        </div>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                        <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            Skills & Expertise
                        </span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skills.map((skill, index) => (
                            <Card key={index}
                                className="skill-card bg-white/5 border-white/10 backdrop-blur hover:bg-white/10 transition-all duration-300 hover:scale-105">
                                <CardHeader>
                                    <div className="mb-4 text-white">{skill.icon}</div>
                                    <CardTitle className="text-white">{skill.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {skill.items.map((item, i) => (
                                            <li key={i} className="text-gray-400 flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-white rounded-full" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <FeatureProject />
            <Getouch />
            <Footer />
            </>
         )}

        </div>

    )
}
