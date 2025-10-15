import { Building, ChevronDown, Computer, Eye, FileDown, Github} from "lucide-react"
import LightRays from "./background"
import { Badge } from "./ui/badge"
import TextType from "@/components/Typetext"
import { Button } from "./ui/button"
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger
} from "./ui/dropdown-menu"


export default function Hero() {
    function handleClick(link: string) {
        window.open(link, "_blank")
    }
    function handleDownload(link: string) {
        const a = document.createElement('a');
        a.href = link;
        a.download = 'osama_nurul_haq_cv.pdf';
        document.body.appendChild(a);
        a.click();
        URL.revokeObjectURL(a.href);

    }
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
            {/* Light Rays */}
            <LightRays className="absolute inset-0  pointer-events-none" raysOrigin="top-center" raysColor="#ffffff"
                raysSpeed={1.5} lightSpread={0.8} rayLength={1.2} followMouse={true} mouseInfluence={0.1} noiseAmount={0.1}
                distortion={0.05} />

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <Badge className="hero-badge mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20">
                    <span className="mr-2">Welcome to My Space</span>
                    <Computer className="w-4 h-4" />
                </Badge>

                <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    <span
                        className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent inline-block">
                        <TextType text={["Hey, I'm Nameraid", "I'm a Full Stack Dev", "Lets Connect With me!"]} loop={true}
                            variableSpeed={{ min: 100, max: 200 }} cursorClassName="text-green-400 font-bold"
                            cursorCharacter="<"
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
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline"
                                className="flex items-center gap-2 bg-black/40 text-white border border-white/20 hover:bg-white/10 hover:border-white/40 hover:text-white transition-all duration-300">
                                <Building className="w-4 h-4 text-white" />
                                <span>View CV</span>
                                <ChevronDown className="w-4 h-4 text-white" />
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent
                            className="bg-neutral-900/90 text-white border border-white/10 rounded-xl shadow-lg backdrop-blur-md"
                            align="end">
                            <DropdownMenuLabel className="text-gray-300">
                                Curriculum Vitae
                            </DropdownMenuLabel>
                            <DropdownMenuGroup>
                                <DropdownMenuItem onClick={() => handleDownload('/src/cv/osama_nurul_haq_cv.pdf')}
                                    className="cursor-pointer hover:bg-white/10 focus:bg-white/10 focus:text-white
                            transition-colors duration-200"
                                >
                                    <FileDown  className="w-4 h-4 mr-2

                                text-gray-300" />
                                    Download CV (PDF)
                                </DropdownMenuItem>

                                <DropdownMenuItem onClick={() =>
                                    handleClick('/src/cv/osama_nurul_haq_cv.pdf')}
                                    className="cursor-pointer
                            hover:bg-white/10 focus:bg-white/10 focus:text-white">
                                    <Eye className="w-4 h-4 mr-2 text-gray-300" />
                                    View CV

                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <div className="mt-12 animate-bounce">
                    <ChevronDown className="w-6 h-6 mx-auto text-gray-400" />
                </div>
            </div>
        </section>

    )
}
