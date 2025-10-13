"use client";
import { Github, Star, GitFork, Users, BookOpen, MapPin, Link as LinkIcon, Calendar, Code, TrendingUp, Hand } from
    "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import GitHubCalendar from "react-github-calendar";
interface Viewer {
    name: string;
    bio: string;
    avatarUrl: string;
    login: string;
    email: string;
    company: string;
    location: string;
    websiteUrl: string;
    createdAt: string;
    followers: { totalCount: number };
    following: { totalCount: number };
    repositories: { totalCount: number };
    starredRepositories: { totalCount: number };
    contributionsCollection: {
        contributionCalendar: {
            totalContributions: number;
        };
    };
}

interface Repository {
    name: string;
    description: string;
    stargazerCount: number;
    forkCount: number;
    primaryLanguage: { name: string; color: string } | null;
    url: string;
}

export default function ProfileGit() {
    const [viewer, setViewer] = useState<Viewer | null>(null);
    const [repositories, setRepositories] = useState<Repository[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const key = import.meta.env.VITE_MEKEY as string;

    useEffect(() => {
        const fetchProfile = async () => {
            const query = `
            query {
            viewer {
            name
            bio
            avatarUrl
            login
            email
            company
            location
            websiteUrl
            createdAt
            followers { totalCount }
            following { totalCount }
            repositories(first: 100, privacy: PUBLIC, isFork: false) {
            totalCount
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
            starredRepositories { totalCount }
            contributionsCollection {
            contributionCalendar {
            totalContributions
            }
            }
            }
            }
            `;

            try {
                const response = await fetch("https://api.github.com/graphql", {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${key}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ query }),
                });
                const json = await response.json();

                if (json.errors) {
                    console.error(json.errors);
                    // Fallback to static data if API fails
                    setViewer(staticData.viewer);
                    setRepositories(staticData.repositories);
                    setLoading(false);
                    return;
                }

                setViewer(json.data.viewer);
                setRepositories(json.data.viewer.repositories.nodes.slice(0, 6));
                setLoading(false);
            } catch (err) {
                console.error(err);
                // Fallback to static data
                setViewer(staticData.viewer);
                setRepositories(staticData.repositories);
                setLoading(false);
            }
        };

        fetchProfile();
    }, [key]);

    if (loading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-white/10 border-t-white rounded-full animate-spin"></div>
                    <p className="text-gray-400 text-sm">Loading profile...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <p className="text-red-500">{error}</p>
            </div>
        );
    }

    if (!viewer) return null;

    const joinDate = new Date(viewer.createdAt).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric'
    });

    return (
        <div className="reveal-section  min-h-screen bg-black text-white">
            {/* Gradient Background Effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-radial from-white/5 to-transparent blur-3xl">
                </div>
                <div
                    className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-radial from-white/5 to-transparent blur-3xl">
                </div>
            </div>

            {/* Main Content */}
            <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                {/* Header Badge */}
                <div className="mb-16 text-center">
                    <div
                        className="header-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                        <Github className="w-4 h-4 text-white" />
                        <span className="text-sm text-gray-400">Github Profile</span>
                    </div>
                    <h1 className="header-title text-4xl md:text-6xl font-bold tracking-tight mb-4">
                        <span
                            className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                            Github
                        </span>
                    </h1>

                </div>

                {/* Profile Section */}
                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                    {/* Left Column - Profile Card */}
                    <div className="lg:col-span-1">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                            <div className="flex flex-col items-center text-center">
                                <div className="relative mb-6">
                                    <div
                                        className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-full blur-xl">
                                    </div>
                                    <img src={viewer.avatarUrl} alt={viewer.name}
                                        className="relative w-32 h-32 rounded-full border-4 border-white/10" />
                                </div>

                                <h2 className="text-2xl font-bold mb-2">{viewer.name}</h2>
                                <p className="text-gray-400 mb-1">@{viewer.login}</p>
                                <p className="text-gray-500 text-sm mb-6">{viewer.bio}</p>

                                <a href={`https://github.com/${viewer.login}`} target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 group">
                                    <span>View on GitHub</span>
                                    <Github className="w-4 h-4 transition-transform group-hover:scale-110" />
                                </a>

                                {/* Quick Info */}
                                <div className="w-full mt-8 space-y-3 text-left">
                                    {viewer.company && (
                                        <div className="flex items-center gap-3 text-sm text-gray-400">
                                            <Code className="w-4 h-4" />
                                            <span>{viewer.company}</span>
                                        </div>
                                    )}
                                    {viewer.location && (
                                        <div className="flex items-center gap-3 text-sm text-gray-400">
                                            <MapPin className="w-4 h-4" />
                                            <span>{viewer.location}</span>
                                        </div>
                                    )}
                                    {viewer.websiteUrl && (
                                        <div className="flex items-center gap-3 text-sm text-gray-400">
                                            <LinkIcon className="w-4 h-4" />
                                            <a href={viewer.websiteUrl} target="_blank" rel="noopener noreferrer"
                                                className="hover:text-white transition-colors">
                                                {viewer.websiteUrl.replace(/^https?:\/\//, '')}
                                            </a>
                                        </div>
                                    )}
                                    <div className="flex items-center gap-3 text-sm text-gray-400">
                                        <Calendar className="w-4 h-4" />
                                        <span>Joined {joinDate}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Stats Grid */}
                    <div className="lg:col-span-2">
                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                            <StatCard icon={<Users className="w-5 h-5" />}
                                label="Followers"
                                value={viewer.followers.totalCount}
                                trend="+12% this month"
                            />
                            <StatCard icon={<Users className="w-5 h-5" />}
                                label="Following"
                                value={viewer.following.totalCount}
                                trend="Active network"
                            />
                            <StatCard icon={<BookOpen className="w-5 h-5" />}
                                label="Repositories"
                                value={viewer.repositories.totalCount}
                                trend="Public projects"
                            />
                            <StatCard icon={<TrendingUp className="w-5 h-5" />}
                                label="Contributions"
                                value={viewer.contributionsCollection.contributionCalendar.totalContributions}
                                trend="This year"
                            />
                        </div>

                        {/* Additional Stats Row */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                            <div className="flex items-center justify-between flex-wrap gap-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 bg-white/5 rounded-lg">
                                        <Star className="w-5 h-5 text-yellow-400" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold">{viewer.starredRepositories.totalCount}
                                        </p>
                                        <p className="text-sm text-gray-400">Stars Given</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="p-3 bg-white/5 rounded-lg">
                                        <GitFork className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold">{repositories.reduce((acc, repo) => acc +
                                            repo.forkCount, 0)}</p>
                                        <p className="text-sm text-gray-400">Total Forks</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="p-3 bg-white/5 rounded-lg">
                                        <Star className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold">{repositories.reduce((acc, repo) => acc +
                                            repo.stargazerCount, 0)}</p>
                                        <p className="text-sm text-gray-400">Total Stars</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Top Repositories */}
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <BookOpen className="w-6 h-6" />
                        <h3 className="text-2xl font-bold">Top Repositories</h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {repositories.map((repo, index) => (
                            <RepositoryCard key={index} repo={repo} />
                        ))}
                    </div>
                </div>
                <div className="bg-white/5 border mt-5 border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-6">
                        <Calendar className="w-6 h-6" />
                        <h3 className="text-2xl font-bold">Calendar</h3>
                    </div>

                    <div className="w-full flex justify-center">
                        <GitHubCalendar theme={{
                            dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                        }} username={viewer.login} colorScheme="dark" fontSize={14} blockSize={15}
                            blockMargin={5} />
                    </div>
                </div>
            </div>

        </div>
    );
}

function StatCard({ icon, label, value, trend }: {
    icon: React.ReactNode; label: string; value: number;
    trend: string
}) {
    return (
        <div
            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
            <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                    {icon}
                </div>
            </div>
            <p className="text-3xl font-bold mb-1">{value.toLocaleString()}</p>
            <p className="text-sm text-gray-400 mb-1">{label}</p>
            <p className="text-xs text-gray-500">{trend}</p>
        </div>
    );
}

function RepositoryCard({ repo }: { repo: Repository }) {
    function handleClick(link: string) {
        window.open(link, "_blank")
    }
    return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
      {/* Header */}
      <div>
        <div className="flex items-start justify-between mb-3">
          <h4 className="font-semibold text-lg text-gray-200 group-hover:text-white transition-colors truncate">
            {repo.name}
          </h4>
          <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors flex-shrink-0" />
        </div>

        {/* Description */}
        <p className="text-sm text-gray-400 mb-4 line-clamp-2 min-h-[40px]">
          {repo.description || "No description provided."}
        </p>

        {/* Stats */}
        <div className="flex items-center flex-wrap gap-4 text-sm text-gray-500">
          {repo.primaryLanguage && (
            <div className="flex items-center gap-1.5">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: repo.primaryLanguage.color }}
              />
              <span>{repo.primaryLanguage.name}</span>
            </div>
          )}

          {repo.stargazerCount > 0 && (
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4" />
              <span>{repo.stargazerCount}</span>
            </div>
          )}

          {repo.forkCount > 0 && (
            <div className="flex items-center gap-1">
              <GitFork className="w-4 h-4" />
              <span>{repo.forkCount}</span>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-center">

        <Button
                    onClick={()=> handleClick(repo.url)}
          className="text-white cursor-pointer bg-black/50 border-2 border-gray-600 hover:bg-white transition-all"
          variant="outline"
        >
          <Hand className="mr-2 h-4 w-4" />
          Contribute
        </Button>
      </div>
    </div>
    );
}
