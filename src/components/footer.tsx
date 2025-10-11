import { Github, Heart } from "lucide-react";

export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className="border-t border-white/10 py-8 px-6 text-center text-gray-400">
            <div className="flex flex-wrap justify-center items-center gap-2">
                <span>© {year} Built with</span>

                <Heart className="w-5 h-5 text-red-500 fill-red-500 mx-1" />

                <span className="flex block items-center  ">
                    by{" "}
                    <a target="_blank" href="https://github.com/n3mr1d" className="text-white mx-2 font-medium hover:text-gray-200 hover:underline transition-colors flex">
                        <Github /> Nameraid
                    </a>
                </span>
            </div>
        </footer>

    )
}
