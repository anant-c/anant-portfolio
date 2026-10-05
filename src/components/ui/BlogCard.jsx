import React from 'react';
import TechTag from './TechTag';

const BlogCard = ({ blog, post, item, ...props }) => {
  const b = blog || post || item || props;
  const hasUrl = Boolean(b.url && b.url.trim());

  const content = (
    <>
      <h2
        className={`font-bold text-lg ${
          hasUrl ? 'underline hover:no-underline' : ''
        }`}
      >
        {b.title}
      </h2>
      {(b.date || b.series) && (
        <div className="text-xs text-zinc-400 flex items-center gap-2">
          {b.date && <span>{b.date}</span>}
          {b.date && b.series && <span>•</span>}
          {b.series && <span>{b.series}</span>}
        </div>
      )}
      {Array.isArray(b.tags) && b.tags.length > 0 && (
        <div className="flex gap-2 flex-wrap">
          {b.tags.map((tag) => (
            <TechTag key={tag} tag={tag} />
          ))}
        </div>
      )}
      {b.description && <p className="text-sm">{b.description}</p>}
      {!hasUrl && Array.isArray(b.links) && b.links.length > 0 && (
        <div className="flex gap-3 flex-wrap mt-1">
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
    </>
  );

  const cardClasses =
    'py-4 px-4 border border-zinc-800 rounded-md flex flex-col gap-2 my-4 hover:scale-105 transition-all';

  if (hasUrl) {
    return (
      <a
        href={b.url}
        target="_blank"
        rel="noreferrer"
        className={cardClasses}
      >
        {content}
      </a>
    );
  }

  return <div className={cardClasses}>{content}</div>;
};

export { BlogCard };
export default BlogCard;
