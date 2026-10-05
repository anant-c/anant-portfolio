import React from 'react';

const ExperienceCard = ({ item, experience, ...props }) => {
  const exp = item || experience || props;
  const roleText = exp.role;

  return (
    <a
      target="_blank"
      className="py-4 px-4 border border-zinc-800 rounded-md flex flex-col gap-2 my-4 hover:scale-105 transition-all"
      href={exp.url}
    >
      <div className="flex gap-3 items-center">
        <img
          alt={exp.logoAlt}
          loading="lazy"
          width="45"
          height="45"
          className="rounded-full"
          src={exp.logo}
        />
        <h2 className="font-bold underline hover:no-underline text-lg">
          {exp.org}
        </h2>
      </div>
      <h3>{roleText}</h3>
      {exp.highlights && exp.highlights.length > 0 && (
        <ul className="text-sm list-disc pl-5 text-zinc-300 space-y-1">
          {exp.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      )}
    </a>
  );
};

export { ExperienceCard };
export default ExperienceCard;
