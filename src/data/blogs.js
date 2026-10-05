export const blogs = [
  {
    slug: "5-dollar-vps-setup-for-vibe-coders",
    title: "$5 VPS Setup for Vibe Coders",
    date: "2026-09-25",
    series: "Ship It Safe",
    image: "/assets/blog/5-dollar-vps-setup.png",
    imageAlt: "Architecture diagram: visitors reach Cloudflare, which talks through an outbound tunnel to the server; Traefik routes subdomains to apps; databases sit on a private network; only SSH is open.",
    description:
      "Ship AI-built projects on one $5 server with only SSH open. How I run all my side projects on one box, explained without the jargon, plus a free AI skill that sets it up for you.",
    tags: ["Vibe Coding", "Self-hosting", "Cloudflare", "Docker", "Security"],
    url: "" /* TODO: paste the live Hashnode URL */,
    links: [
      {
        label: "Skill on GitHub",
        url: "https://github.com/anant-c/skills",
      },
    ],
  },
];

export default blogs;
