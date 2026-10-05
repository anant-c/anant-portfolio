import React from 'react';
import TechTag from './TechTag';
import StatusPill from './StatusPill';
import { GithubIcon, LinkIcon } from './icons';

const ProjectCard = ({ project, ...rest }) => {
  const p = project || rest;

  return (
    <div className="pt-10 w-full transition-all hover:scale-105">
      <div className="flex flex-col mb-6">
        <img
          alt={p.imageAlt}
          loading="lazy"
          className="w-full aspect-video object-contain bg-[#09090b] rounded-sm hover:blur-xs transition-all"
          src={p.image}
        />
        <div className="flex justify-between items-center">
          <h1 className="font-bold mb-3 text-xl">{p.title}</h1>
          <StatusPill status={p.status} />
        </div>
        <div className="flex gap-2 flex-wrap">
          {p.tags.map((tag) => (
            <TechTag key={tag} tag={tag} />
          ))}
        </div>
        <p className="text-sm mt-2">{p.description}</p>
      </div>
      <div className="flex gap-4 justify-start">
        {p.github ? (
          <a target="_blank" href={p.github}>
            <GithubIcon />
          </a>
        ) : (
          <GithubIcon />
        )}
        {p.live ? (
          <a target="_blank" href={p.live}>
            <LinkIcon />
          </a>
        ) : (
          <LinkIcon />
        )}
      </div>
    </div>
  );
};

export { ProjectCard };
export default ProjectCard;
