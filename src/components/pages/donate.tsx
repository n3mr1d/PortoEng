import { Heart } from "lucide-react";
import Navbar from "../Navbar";
import { useEffect, useState } from "react";

export default function Donate() {
   const [mousePosition,setMousePosition] = useState({x:0,y:0})

    useEffect(()=>{
        const handleMouseMove = ((e: MouseEvent) => {
            setMousePosition({x:e.clientX,y:e.clientY})
        })
        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    })
    return (
        <>
            <div className="min-h-screen bg-black text-white relative overflow-hidden">
                <div className="fixed inset-0 opacity-30 pointer-events-none" style={{
                    background: `radial-gradient(600px circle
            at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1), transparent 40%)`,
                }} />

                {/* Grid pattern overlay */}
                <div className="fixed inset-0 opacity-10 pointer-events-none" style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)"
                    , backgroundSize: "50px 50px",
                }} />


                <Navbar />
                <section className="w-full flex max-h-screen ">
                    <h1>
                        <Heart /> Donate
                    </h1>
                </section>
            </div>
        </>
    )
}
