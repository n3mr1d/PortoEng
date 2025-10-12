import { ArrowRight, Award, ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function Certificate() {

    const certificates = [
        { title: 'Professional Web Development', desc: 'Advanced certification in modern web technologies and frameworks', source: '#', image: 'https://placehold.co/400x300/1a1a1a/666666?text=Certificate' },
        { title: 'Cloud Architecture', desc: 'Expertise in cloud infrastructure and distributed systems design', source: '#', image: 'https://placehold.co/400x300/1a1a1a/666666?text=Certificate' },
        { title: 'UI/UX Design Excellence', desc: 'Mastery of user-centered design principles and methodologies', source: '#', image: 'https://placehold.co/400x300/1a1a1a/666666?text=Certificate' },
        { title: 'Data Science Professional', desc: 'Advanced analytics and machine learning implementation', source: '#', image: 'https://placehold.co/400x300/1a1a1a/666666?text=Certificate' },
        { title: 'Cybersecurity Specialist', desc: 'Security best practices and threat mitigation strategies', source: '#', image: 'https://placehold.co/400x300/1a1a1a/666666?text=Certificate' },
        { title: 'DevOps Engineering', desc: 'CI/CD pipelines and infrastructure automation expertise', source: '#', image: 'https://placehold.co/400x300/1a1a1a/666666?text=Certificate' },
    ]



    return (
                  <section className="reveal-section mt-10 relative z-10 w-full px-6 max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <div className="header-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                        <Award className="w-4 h-4 text-white" />
                        <span className="text-sm text-gray-400">Certifications & Achievements</span>
                    </div>
                    <h1 className="header-title text-4xl md:text-6xl font-bold tracking-tight mb-4">
                        <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                             Certificates
                        </span>
                    </h1>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((cert, index) => (
                        <Card
                            key={index}
                            className="group bg-gradient-to-b from-white/[0.08] to-white/[0.02] border-white/10 backdrop-blur-sm hover:bg-white/[0.12] transition-all duration-300 overflow-hidden"
                        >
                            {/* Image container with overlay */}
                            <div className="relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 z-10"></div>
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 z-20">
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-2">
                                        <Award className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h2 className="text-xl text-white font-semibold mb-3 group-hover:text-gray-200 transition-colors">
                                    {cert.title}
                                </h2>
                                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                                    {cert.desc}
                                </p>

                                {/* Divider */}
                                <div className="border-t border-white/10 mb-4"></div>

                                {/* CTA */}
                                <a
                                    href={cert.source}
                                    className="inline-flex float-right items-center gap-2 text-sm text-white/80 hover:text-white transition-colors group/link"
                                >
                                    <span>View Certificate</span>
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                </a>
                            </div>

                            {/* Shine effect on hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* View all link */}
                           </section>

    )
}
