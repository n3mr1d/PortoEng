import { useState } from "react"
import { ArrowRight, Award } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "./ui/button"

export default function Certificate() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    const certificates = [
        {
            title: 'Introduction to HTML',
            desc: 'has successfully completed the course by demonstrating theoretical and practical understanding off',
            source: 'https://www.sololearn.com/certificates/CC-KMV4JEAD',
            image: '/src/html-introduction.png'
        },
        {
            title: 'Introduction to CSS',
            desc: 'has successfully completed the course by demonstrating theoretical and practical understanding off',
            source: 'https://www.sololearn.com/certificates/CC-VHPL7GQM',
            image: '/src/html-introduction.png'
        },
        {
            title: 'Introduction to JavaScript',
            desc: 'has successfully completed the course by demonstrating theoretical and practical understanding off',
            source: 'https://www.sololearn.com/certificates/CC-3NJ1U67E',
            image: '/src/js-introduction.png'
        },
        {
            title: 'JavaScript Intermediate',
            desc: 'has successfully completed the course by demonstrating theoretical and practical understanding off',
            source: 'https://www.sololearn.com/certificates/CC-EMS8QSLJ',
            image: '/src/js-intermediate.png'
        },
        {
            title: 'Introduction to SQL',
            desc: 'has successfully completed the course by demonstrating theoretical and practical understanding off',
            source: 'https://www.sololearn.com/certificates/CC-7EIB8KAI',
            image: '/src/sql-introduction.png'
        },

    ]

    return (
        <section className="reveal-section mt-10 relative z-10 w-full px-6 max-w-7xl mx-auto">
            <div className="mb-16 text-center">
                <div
                    className="header-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
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
                    <Card key={index}
                        className="group bg-gradient-to-b from-white/[0.08] to-white/[0.02] border-white/10 backdrop-blur-sm hover:bg-white/[0.12] transition-all duration-300 overflow-hidden">
                        {/* Image + Dialog */}
                        <Dialog>
                            <DialogTrigger asChild>
                                <div onClick={() => setSelectedImage(cert.image)}
                                    className="relative overflow-hidden cursor-pointer group"
                                >
                                    {/* Overlay hitam halus */}
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 z-10 transition-opacity duration-300 group-hover:opacity-80" />

                                    {/* Gambar sertifikat */}
                                    <img src={cert.image} alt={cert.title}
                                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />

                                    <div className="absolute flex items-center gap-2 top-4 right-4 z-20">
                                        {/* Award Icon */}
                                        <div className="bg-black/60 backdrop-blur-md border border-white/20 rounded-full p-2">
                                            <Award className="w-4 h-4 text-white" />
                                        </div>
                                    </div>


                                    {/* Tombol muncul saat hover */}
                                    <Button variant="secondary" size="sm"
                                        className="absolute inset-0 flex h-full items-center justify-center opacity-0 group-hover:opacity-100 z-30 transition-opacity duration-300 bg-black/60 text-white cursor-pointer  hover:bg-transparent">

                                        Click to View
                                    </Button>
                                </div>

                            </DialogTrigger>

                            <DialogContent className="max-w-3xl bg-black/90 border-white/10 p-0 overflow-hidden">
                                <img src={selectedImage || cert.image} alt="Certificate Preview"
                                    className="w-full h-auto object-contain" />
                            </DialogContent>
                        </Dialog>

                        {/* Content */}
                        <div className="p-6">
                            <div className="flex items-center gap-2 mb-3">
                                <h2 className="text-xl text-white font-semibold group-hover:text-gray-200 transition-colors">
                                    {cert.title}
                                </h2>
                            </div>
                            <p className="text-gray-400 text-sm mb-6 line-clamp-2">{cert.desc}</p>
                            <div className="border-t border-white/10 mb-4"></div>

                            <a href={cert.source} target="_blank" rel="noopener noreferrer"
                                className="inline-flex float-right items-center gap-2 text-sm text-white/80 hover:text-white transition-colors group/link">
                                <span>View Certificate</span>
                                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                            </a>
                        </div>

                        {/* Shine effect */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    )
}
