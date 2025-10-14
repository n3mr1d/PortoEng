"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, GitFork, ExternalLink, Github, Code2, HandGrab } from "lucide-react";
import { Button } from "../ui/button";
import Navbar from "../Navbar";
import { Dialog, DialogContent } from "../ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";

// 🎨 Animation variants for framer-motion
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Contribution() {
    const [open, setOpen] = useState<string|null>(null);
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState<string>("");
 function limitString(str: string, limit:number) {
    if (!str) return "";
    if (str.length > limit) {
      return str.substring(0, limit).concat("...");
    } else {
      return str;
    }
  }

  // 🎯 Track mouse position for dynamic gradient background
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const background = useTransform([mouseX, mouseY], ([x, y]) => {
    return `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,255,255,0.1), transparent 40%)`;
  });

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    }
    window.addEventListener("mousemove", handleMouseMove);

    async function fetchData() {
      try {
        const apikey = import.meta.env.VITE_MEKEY as string;
        const url = "https://api.github.com/graphql";
        const query = `
          query {
            viewer {
              login
              repositories(first: 100, privacy: PUBLIC, isFork: false) {
                nodes {
                  name
                  description
                  stargazerCount
                  forkCount
                  primaryLanguage {
                    name
                    color
                  }
                  languages(first: 10) {
                    edges {
                      node {
                        name
                        color
                      }
                    }
                  }
                  url
                }
              }
            }
          }
        `;

        const response = await fetch(url, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apikey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
        });

        const json = await response.json();
        const user = json?.data?.viewer?.login;
        setUsername(user);
        const nodes = json?.data?.viewer?.repositories?.nodes ?? [];
        setRepos(nodes);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen bg-black text-white px-6 py-20 overflow-hidden">
      {/* 🌀 Dynamic gradient background following cursor */}
      <motion.div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{ background }}
      />

      {/* Grid pattern overlay */}
      <div
        className="fixed inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <Navbar />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* 🧩 Header section */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-4">
            <Github className="w-4 h-4" />
            <span className="text-sm font-medium">Open Source Contributions</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Repositories
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my open-source projects and contributions
          </p>
        </motion.div>

        {/* 🕓 Loading skeletons */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl h-96 animate-pulse"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              />
            ))}
          </div>
        )}

        {/* 📦 Repositories grid */}
        {!loading && repos.length > 0 && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
          >
            {repos.map((repo, i) => (
              <motion.div key={repo.url} variants={fadeInUp} custom={i}>
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden group backdrop-blur-sm">
                  {/* Project Image */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-900 to-black"
                  >
                                        <Dialog>
                                            <DialogTrigger asChild>
                    <img
                      src={`https://raw.githubusercontent.com/${username}/${repo.name}/refs/heads/main/doc/images.png`}
                      alt={repo.name}
                    onClick={() => setOpen(repo.name)}

                      className="w-full h-full object-cover group-hover:opacity-80 transition-all duration-700"
                      onError={(e) =>
                        (e.currentTarget.src =
                          "https://source.unsplash.com/800x600/?code,technology")
                      }
                    />
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl bg-black/90 border-white/10 p-0 overflow-hidden">
                        <img src={`https://raw.githubusercontent.com/${username}/${open}/refs/heads/main/doc/images.png`} alt="Project Preview"
                            className="w-full h-auto object-contain" />
                    </DialogContent>
                    </Dialog>


                    {/* Language Badge */}
                    {repo.primaryLanguage && (
                      <div className="absolute top-4 right-4">
                        <Badge
                          className="bg-white/10 backdrop-blur-md border-white/20 text-white"
                          style={{
                            borderColor: repo.primaryLanguage.color,
                            color: repo.primaryLanguage.color,
                          }}
                        >
                          <Code2 className="w-3 h-3 mr-1" />
                          {repo.primaryLanguage.name}
                        </Badge>
                      </div>
                    )}
                  </motion.div>

                  <CardHeader className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors line-clamp-1">
                        {repo.name}
                      </CardTitle>
                      <a
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                    <CardDescription className="text-gray-400 line-clamp-2 min-h-[3rem]">
                      { limitString(repo.description,80) || "No description available"}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <motion.div
                      className="flex flex-wrap justify-center mb-4 gap-2 text-sm text-gray-400"
                      layout
                    >
                      {repo.languages.edges.map((lang: any, idx: number) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          <Badge
                            variant="outline"
                            className="border-white/20 bg-white/20 text-white"

                          >
                            {lang.node.name}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* 🎯 CTA Button */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center justify-center w-full mb-4"
                    >
                      <Button className="bg-black/80 text-white hover:bg-gray-200 hover:text-black border border-white/20 hover:border-white/40 gap-2 transition-all duration-300">
                        <a
                          className="flex items-center justify-center"
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <HandGrab className="w-5 h-5 mr-3" /> Contribute now
                        </a>
                      </Button>
                    </motion.div>

                    {/* ⭐ Stats */}
                    <motion.div
                      className="flex items-center justify-center gap-6 text-sm text-gray-400"
                      layout
                    >
                      <div className="flex items-center gap-1.5">
                        <Star className="w-4 h-4" />
                        <span>{repo.stargazerCount}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <GitFork className="w-4 h-4" />
                        <span>{repo.forkCount}</span>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* 🌙 Empty State */}
        {!loading && repos.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Github className="w-16 h-16 mx-auto mb-4 text-gray-600" />
            <h3 className="text-xl font-semibold mb-2">No repositories found</h3>
            <p className="text-gray-400">Start creating your first project!</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

