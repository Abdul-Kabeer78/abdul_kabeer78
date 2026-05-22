import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Star, GitFork, Users, ExternalLink } from "lucide-react";

const USERNAME = "Abdul-Kabeer78";

type Profile = {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
};

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
};

export function GitHubSection() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (USERNAME === "Abdul-Kabeer78") {
      setError("Set your GitHub username in src/components/GitHubSection.tsx");
      return;
    }
    fetch(`https://api.github.com/users/${USERNAME}`)
      .then((r) => (r.ok ? r.json() : Promise.reject(r)))
      .then(setProfile)
      .catch(() => setError("Could not load GitHub profile."));
    fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=6`)
      .then((r) => (r.ok ? r.json() : Promise.reject(r)))
      .then(setRepos)
      .catch(() => {});
  }, []);

  return (
    <section id="github" className="py-24 px-6 bg-surface/40">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">GitHub</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Live from my <span className="text-gradient">repositories</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-card border border-border shadow-card p-6 md:p-10"
        >
          {error && (
            <div className="text-sm text-muted-foreground mb-6 p-4 rounded-xl border border-dashed border-border">
              {error} The section will populate automatically once configured.
            </div>
          )}

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img
              src={profile?.avatar_url || "https://github.com/identicons/app.png"}
              alt={profile?.name || "GitHub avatar"}
              loading="lazy"
              className="w-28 h-28 rounded-2xl border border-border"
            />
            <div className="flex-1">
              <h3 className="text-2xl font-bold">{profile?.name || "Abdul Kabeer Shahani"}</h3>
              <p className="text-muted-foreground">@{profile?.login || USERNAME}</p>
              {profile?.bio && <p className="mt-3 text-sm text-foreground/80">{profile.bio}</p>}
              <div className="flex flex-wrap gap-5 mt-5 text-sm">
                <span className="inline-flex items-center gap-1.5"><Github className="w-4 h-4 text-primary" />{profile?.public_repos ?? "—"} repos</span>
                <span className="inline-flex items-center gap-1.5"><Users className="w-4 h-4 text-primary" />{profile?.followers ?? "—"} followers</span>
                <span className="inline-flex items-center gap-1.5"><Users className="w-4 h-4 text-primary" />{profile?.following ?? "—"} following</span>
              </div>
              <a
                href={profile?.html_url || `https://github.com/${USERNAME}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-xl bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:scale-[1.02] transition-transform"
              >
                <Github className="w-4 h-4" /> Follow on GitHub
              </a>
            </div>
          </div>

          <div className="mt-10">
            <h4 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">Contribution graph</h4>
            <img
              src={`https://ghchart.rshah.org/4f8cff/${USERNAME}`}
              alt="GitHub contribution graph"
              loading="lazy"
              className="w-full rounded-xl border border-border bg-background p-3"
              onError={(e) => ((e.currentTarget.style.display = "none"))}
            />
          </div>

          {repos.length > 0 && (
            <div className="mt-10">
              <h4 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">Recent repositories</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {repos.map((r) => (
                  <a
                    key={r.id}
                    href={r.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-5 rounded-xl bg-background/60 border border-border hover:border-primary/40 transition-colors group"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-semibold group-hover:text-primary transition-colors">{r.name}</span>
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                    </div>
                    {r.description && <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{r.description}</p>}
                    <div className="flex gap-4 text-xs text-muted-foreground">
                      {r.language && <span className="text-primary">{r.language}</span>}
                      <span className="inline-flex items-center gap-1"><Star className="w-3 h-3" />{r.stargazers_count}</span>
                      <span className="inline-flex items-center gap-1"><GitFork className="w-3 h-3" />{r.forks_count}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
