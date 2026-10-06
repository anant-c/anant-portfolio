import React from 'react';
import TechTag from './TechTag';

// Whole card opens the article (stretched title link); secondary links sit above it and stay clickable.
const BlogCard = ({ blog, post, item, ...props }) => {
  const b = blog || post || item || props;
  const hasUrl = Boolean(b.url && b.url.trim());

  return (
    <article className="relative py-4 px-4 border border-zinc-800 rounded-md flex flex-col sm:flex-row gap-4 my-4 hover:scale-105 transition-all">
      {b.image && (
        <img
          src={b.image}
          alt={b.imageAlt || b.title}
          loading="lazy"
          className="w-full sm:w-56 sm:shrink-0 aspect-video object-cover self-start rounded-sm border border-zinc-800"
        />
      )}
      <div className="flex flex-col gap-2 min-w-0">
        <h2 className="font-bold text-lg">
          {hasUrl ? (
            <a
              href={b.url}
              target="_blank"
              rel="noreferrer"
              className="underline hover:no-underline after:absolute after:inset-0 after:content-['']"
            >
              {b.title}
            </a>
          ) : (
            b.title
          )}
        </h2>
        {(b.date || b.series) && (
          <div className="text-xs text-zinc-400 flex items-center gap-2">
            {b.date && <span>{b.date}</span>}
            {b.date && b.series && <span>•</span>}
            {b.series && <span>{b.series}</span>}
          </div>
        )}
        {b.description && <p className="text-sm">{b.description}</p>}
        {Array.isArray(b.tags) && b.tags.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {b.tags.map((tag) => (
              <TechTag key={tag} tag={tag} />
            ))}
          </div>
        )}
        {Array.isArray(b.links) && b.links.length > 0 && (
          <div className="relative z-10 flex gap-3 flex-wrap mt-1">
            {b.links.map((link, idx) => (
              <a
                key={link.url || idx}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-xs underline hover:no-underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export { BlogCard };
export default BlogCard;
