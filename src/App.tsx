import { useEffect, useRef, useState } from "react"
import {
    Computer,
    Github,
    Linkedin,
    Mail,
    ExternalLink,
    Code,
    Database,
    Server,
    Layers,
    ChevronDown,
    User,
    TerminalIcon,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import LightRays from "./components/background"
import TextType from "./components/Typetext"
import { Banner } from "./components/banner"
import Footer from "./components/footer"
import BorderBeamButton from "./components/borderBem"
import Certificate from "./components/certificate"
import ProfileGit from "./components/profileGit"
import FeatureProject from "./components/featureproject"

export default function Page() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const rootRef = useRef<HTMLDivElement | null>(null)
    document.title = "Home | Nameraid";
    function umurHitung(umur: number) {
        const tahun = new Date().getFullYear();
        const umurJawab = tahun - umur;
        return umurJawab;
    }
    function handleClick(link: string) {
        window.open(link, "_blank")
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

            // Sections reveal on scroll
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

    const skills = [
        {
            name: "Frontend",
            icon:
                <Layers className="w-6 h-6" />,
            items: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
        },
        {
            name: "Backend",
            icon:
                <Server className="w-6 h-6" />,
            items: ["Node.js", "Python", "Express", "FastAPI"],
        },
        {
            name: "Database",
            icon:
                <Database className="w-6 h-6" />,
            items: ["PostgreSQL", "MongoDB", "Redis", "Firebase"],
        },
        {
            name: "Tools",
            icon: <Code className="w-6 h-6" />,
            items: ["Git", "Docker", "AWS", "Linux"],
        },
    ]



    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    }

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

            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <section id="home"
                className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
                {/* Light Rays */}
                <LightRays className="absolute inset-0  pointer-events-none" raysOrigin="top-center"
                    raysColor="#ffffff" raysSpeed={1.5} lightSpread={0.8} rayLength={1.2} followMouse={true}
                    mouseInfluence={0.1} noiseAmount={0.1} distortion={0.05} />

                {/* Content */}
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <Badge className="hero-badge mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20">
                        <span className="mr-2">Welcome to My Space</span>
                        <Computer className="w-4 h-4" />
                    </Badge>

                    <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        <span
                            className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent inline-block">
                            <TextType text={["Hey, I'm Nameraid", "I'm a Full Stack Dev"
                                , "Lets Connect With me!"]} loop={true} variableSpeed={{ min: 100, max: 200 }}
                                cursorClassName="text-green-400 font-bold" cursorCharacter="<"
                                className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent" />
                        </span>
                    </h1>


                    <p className="hero-subtitle text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        Building modern web applications with cutting-edge technologies
                    </p>
                    <div className="flex gap-4 justify-center w-full">
                        <Button variant={"outline"} onClick={() => handleClick('https://github.com/n3mr1d')}
                            type="button" className="text-black cursor-pointer font-semibold">
                            <Github /> Github
                        </Button>
                        <Button>Hallo dan</Button>
                    </div>

                    <div className="mt-12 animate-bounce">
                        <ChevronDown className="w-6 h-6 mx-auto text-gray-400" />
                    </div>
                </div>
            </section>
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
                                    how things work on the web. Today, I specialize in modern
                                    JavaScript frameworks, cloud architecture, and database
                                    optimization.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <Badge variant="outline" className="border-white/20 text-white">
                                        5+ Years Experience
                                    </Badge>
                                    <Badge variant="outline" className="border-white/20 text-white">
                                        20+ Projects Completed
                                    </Badge>
                                    <Badge variant="outline" className="border-white/20 text-white">
                                        Open Source Contributor
                                    </Badge>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Right Card (Image) */}
                        <Card
                            className="bg-white/5 border-white/10 w-full md:max-w-sm backdrop-blur-lg shadow-lg flex items-center justify-center">
                            <CardContent className="p-6 flex-col flex justify-center">
                                <div className="relative">
                                    <img src="./file.jpg" alt="About me"
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
            {/* Projects Section */}
            <FeatureProject />
            {/* Contact Section */}
            <section id="contact"
                className="reveal-section min-h-screen flex items-center justify-center px-6 py-20">
                <div className="max-w-4xl mx-auto w-full text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">
                        <span
                            className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Get
                            In Touch</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part
                        of your vision.
                    </p>
                    <Card className="bg-white/5 border-white/10 backdrop-blur">
                        <CardContent className="p-8">
                            <div className="flex flex-col md:flex-row gap-4 justify-center">
                                <Button className="bg-white text-black hover:bg-gray-200 gap-2" onClick={() =>
                                    (window.location.href = "mailto:your@email.com")}
                                >
                                    <Mail className="w-4 h-4" />
                                    Email Me
                                </Button>
                                <Button variant="outline"
                                    className="border-white/20 text-white hover:bg-white/10 gap-2 bg-transparent"
                                    onClick={() => window.open("https://github.com", "_blank")}
                                >
                                    <Github className="w-4 h-4" />
                                    GitHub
                                </Button>
                                <Button variant="outline"
                                    className="border-white/20 text-white hover:bg-white/10 gap-2 bg-transparent"
                                    onClick={() => window.open("https://linkedin.com", "_blank")}
                                >
                                    <Linkedin className="w-4 h-4" />
                                    LinkedIn
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    )
}
