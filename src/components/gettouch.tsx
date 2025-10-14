import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { MailCheck, Loader2 } from "lucide-react"
import { toast } from "sonner"

export default function ContactSection() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })
    const formspare = import.meta.env.VITE_FORM

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })
    const [processing, setProcessing] = useState(false)
    const [status, setStatus] = useState("")

    function validateForm() {
        const newErrors = { name: "", email: "", subject: "", message: "" }
        let isValid = true

        if (!form.name.trim()) {
            newErrors.name = "Name is required."
            isValid = false
        }
        if (!form.email.trim()) {
            newErrors.email = "Email is required."
            isValid = false
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = "Please enter a valid email address."
            isValid = false
        }
        if (!form.subject.trim()) {
            newErrors.subject = "Subject cannot be empty."
            isValid = false
        }
        if (!form.message.trim()) {
            newErrors.message = "Message cannot be empty."
            isValid = false
        }

        setErrors(newErrors)
        return isValid
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault()
        setStatus("")

        if (!validateForm()) {
            toast.error("Please fix the errors before submitting")
            return
        }

        // mulai loading
        setProcessing(true)

        try {
            const response = await fetch(formspare, {
                method: "POST",
                body: JSON.stringify(form),
                headers: { "Content-Type": "application/json" },
            })

            if (response.ok) {
                toast.success("Message sent successfully 🎉")
                setForm({ name: "", email: "", subject: "", message: "" })
            }
        } catch (error) {
            toast.error("Failed to send message")
            setStatus("Failed to send message.")
        } finally {
            setProcessing(false)
        }
    }

    return (
        <motion.section id="contact" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{
            duration:
                0.8
        }} viewport={{ once: true }}
            className="reveal-section min-h-screen flex flex-col items-center justify-center px-6 py-20">
            {/* Header */}
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                className="flex justify-center">
                <div
                    className="header-badge inline-flex justify-center items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                    <MailCheck className="w-4 h-4 text-white" />
                    <span className="text-sm text-gray-400">Contact Us</span>
                </div>
            </motion.div>

            {/* Title */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                className="max-w-4xl mx-auto w-full text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                    <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        Get In Touch
                    </span>
                </h2>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                    I'm always open to discussing new projects, creative ideas, or opportunities
                    to be part of your vision.
                </p>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{
                delay: 0.6,
                duration: 0.6
            }} className="w-full flex justify-center">
                <Card className="bg-white/5 border-white/10 backdrop-blur-md max-w-xl w-full shadow-2xl">
                    <CardContent className="p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name & Email */}
                            <div className="flex flex-col md:flex-row gap-4 w-full">
                                <div className="flex w-full flex-col space-y-1">
                                    <Label htmlFor="name" className="text-white">Name</Label>
                                    <Input id="name" name="name" placeholder="John Doe" value={form.name} onChange={(e) =>
                                        setForm({ ...form, name: e.target.value })}
                                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:ring
                            focus:ring-blue-500/30"
                                    />
                                    {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
                                </div>
                                <div className="flex w-full flex-col space-y-1">
                                    <Label htmlFor="email" className="text-white">Email</Label>
                                    <Input id="email" name="email" placeholder="nameraid@gmail.com" type="email"
                                        value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:ring
                            focus:ring-blue-500/30"
                                    />
                                    {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
                                </div>
                            </div>

                            {/* Subject */}
                            <div className="flex flex-col space-y-1">
                                <Label htmlFor="subject" className="text-white">Subject</Label>
                                <Input id="subject" name="subject" placeholder="Subject" value={form.subject} onChange={(e) =>
                                    setForm({ ...form, subject: e.target.value })}
                                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:ring
                        focus:ring-blue-500/30"
                                />
                                {errors.subject && <p className="text-red-400 text-sm">{errors.subject}</p>}
                            </div>

                            {/* Message */}
                            <div className="flex flex-col space-y-1">
                                <Label htmlFor="message" className="text-white">Message</Label>
                                <textarea id="message" name="message" rows={4} placeholder="Write your message here..."
                                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    className="bg-white/10 border border-white/20 rounded-md p-2 text-white
                            placeholder:text-gray-300 resize-none focus:ring focus:ring-blue-500/30"
                                />
                                {errors.message && <p className="text-red-400 text-sm">{errors.message}</p>}
                            </div>

                            {/* Submit */}
                            <div className="flex justify-end">
                                <Button type="submit" disabled={processing}
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center gap-2">
                                    {processing ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        "Send Message"
                                    )}
                                </Button>
                            </div>
                        </form>

                        {/* Status Text */}
                        {status && (
                            <p className="text-gray-300 text-center mt-4 text-sm">{status}</p>
                        )}
                    </CardContent>
                </Card>
            </motion.div>
        </motion.section>
    )
}
