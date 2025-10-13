import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, GitFork, ExternalLink, Github, Code2, HandGrab } from "lucide-react"
import Navbar from "../Navbar";
import { Button } from "../ui/button";

export default function Contribution() {
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
    function limitString(str:string,limit:number){
        if(!str) return "";
        if(str.length > limit){
            return str.substring(0,limit).concat("...");
        }else{
            return str;
        }
    }
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
 function moustMove(e: MouseEvent){
setMousePosition({ x: e.clientX, y: e.clientY })
        }

    async function fetchData() {
      try {
        const apikey = import.meta.env.VITE_MEKEY as string;
        const url = "https://api.github.com/graphql";
        const query = `
          query {
            viewer {
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
                  url
                }
              }
            }
          }`;
        const response = await fetch(url, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apikey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
        });
        const json = await response.json();
        const nodes = json?.data?.viewer?.repositories?.nodes ?? [];
        setRepos(nodes);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
        return()=> window.addEventListener("mousemove", moustMove)
  }, [mousePosition])

  // Generate dummy image URL based on repo name
  const getProjectImage = (repoName: string, index: number) => {
    const seed = repoName.toLowerCase().replace(/\s+/g, '-');
    return `https://source.unsplash.com/800x600/?technology,coding,${seed}&sig=${index}`;
  };

  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">

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
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-4">
            <Github className="w-4 h-4" />
            <span className="text-sm font-medium">Open Source Contributions</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Repo</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my collection of open-source projects and contributions
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl h-96 animate-pulse" />
            ))}
          </div>
        )}

        {/* Projects Grid */}
        {!loading && repos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, index) => (
              <Card
                key={repo.url}
                className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden group cursor-pointer backdrop-blur-sm"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                  <img
                    src={getProjectImage(repo.name, index)}
                    alt={repo.name}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                  {/* Language Badge on Image */}
                  {repo.primaryLanguage && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                        <Code2 className="w-3 h-3 mr-1" />
                        {repo.primaryLanguage.name}
                      </Badge>
                    </div>
                  )}
                </div>

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
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <CardDescription className="text-gray-400 line-clamp-2 min-h-[3rem]">
                    {limitString(repo.description,80) || "No description available"}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                <div className="flex items-center justify-center w-full mb-4 gap-4 text-sm text-gray-400">
                <Button className="bg-black/80 text-white hover:bg-gray-200 transition-all duration-300 gap-2 border-white/20 hover:border-white/40 hover:text-black">
                                            <a className="flex items-center justify-center" href={repo.url} target="_blank" rel="noopener noreferrer"> <HandGrab className="w-5 h-5 mr-3"/> Contribute now</a></Button>

                </div>
                  <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <Star className="w-4 h-4" />
                      <span>{repo.stargazerCount}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <GitFork className="w-4 h-4" />
                      <span>{repo.forkCount}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && repos.length === 0 && (
          <div className="text-center py-20">
            <Github className="w-16 h-16 mx-auto mb-4 text-gray-600" />
            <h3 className="text-xl font-semibold mb-2">No repositories found</h3>
            <p className="text-gray-400">Start creating your first project!</p>
          </div>
        )}

        {/* Stats Footer */}
        {!loading && repos.length > 0 && (
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold">{repos.length}</div>
                <div className="text-sm text-gray-400">Total Projects</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold">
                  {repos.reduce((acc, repo) => acc + repo.stargazerCount, 0)}
                </div>
                <div className="text-sm text-gray-400">Total Stars</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold">
                  {repos.reduce((acc, repo) => acc + repo.forkCount, 0)}
                </div>
                <div className="text-sm text-gray-400">Total Forks</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold">
                  {new Set(repos.map(r => r.primaryLanguage?.name).filter(Boolean)).size}
                </div>
                <div className="text-sm text-gray-400">Languages</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
