import { Computer, ExternalLink, GitGraph } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"

const projects = [
    {
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with payment integration and real-time",
        repo: "repo",
        tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
        link: "#",
    },
    {
        title: "AI Chat Application",
        description: "Real-time chat application with AI-powered responses and sentiment analysis",
        tags: ["Next.js", "Python", "TensorFlow", "WebSocket"],
        repo: "repo",
        link: "#",
    },
    {
        title: "Analytics Dashboard",
        description: "Interactive data visualization dashboard for business intelligence",
        tags: ["React", "D3.js", "FastAPI", "MongoDB"],
        repo: "repo",
        link: "#",
    },
    {
        title: "DevOps Pipeline",
        description: "Automated CI/CD pipeline with containerization and monitoring",
        tags: ["Docker", "Kubernetes", "Jenkins", "AWS"],
        link: "#",
        repo: "repo",
    },
]


export default function FeatureProject() {
    function handleClick(link: string) {
        window.open(link, "_blank")
    }
    return (
        <section id="projects" className="reveal-section min-h-screen flex items-center justify-center px-6 py-20">
            <div className="max-w-6xl mx-auto w-full">
                <div className="flex justify-center">
                    <div
                        className="header-badge inline-flex justify-center items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                        <Computer className="w-4 h-4 text-white" />
                        <span className="text-sm text-gray-400">New Projects And Features</span>
                    </div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                    <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        Featured Projects
                    </span>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {projects.map((project: any, index: number) => (
                        <Card key={index}
                            className="project-card flex flex-col justify-between bg-white/5 border-white/10 backdrop-blur hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
                            {/* Header */}
                            <CardHeader>
                                <CardTitle className="text-white text-center mb-2">
                                    {project.title}
                                </CardTitle>
                                <CardDescription className="text-center text-gray-400">
                                    {project.description}
                                </CardDescription>
                            </CardHeader>

                            {/* Content */}
                            <CardContent>
                                <img src={project.image || "https://placehold.co/400x300/1a1a1a/666666?text=Project"}
                                    alt={project.title} className="rounded-lg w-full h-auto object-cover shadow-md" />
                                <div className="flex flex-wrap gap-2 justify-center mt-4">
                                    {project.tags.map((tag: string, i: number) => (
                                        <Badge key={i} variant="outline" className="border-white/20 text-gray-300">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>

                            {/* Footer */}
                            <CardFooter className="flex flex-col gap-4">
                                <div className="w-full border border-gray-800"></div>
                                <div className="flex items-center justify-around w-full">
                                    <Button onClick={() => handleClick(project.link)}
                                        className="w-1/2 cursor-pointer text-white bg-black/50 border-2 border-gray-600"
                                        variant="outline"
                                    >
                                        <ExternalLink className="mr-2 h-4 w-4" /> View Project
                                    </Button>
                                    <Button variant="outline" onClick={() => handleClick(project.repo)}
                                        className="flex cursor-pointer items-center"
                                    >
                                        <GitGraph className="mr-2 h-4 w-4" /> Repo
                                    </Button>
                                </div>
                            </CardFooter>

                        </Card>
                    ))}
                </div>

            </div>
        </section>
    )

}
