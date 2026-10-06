import { useState, useEffect } from 'react';
import TechTag from './ui/TechTag';
import {
  formatVideosAndDuration,
  formatAddedDate,
  isValidSlug,
} from '../data/learn';

const Learn = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    fetch('/learn/catalog.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to load: ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        if (isMounted) {
          if (Array.isArray(data)) {
            const visibleItems = data.filter(
              (item) => !item.unlisted && isValidSlug(item.slug)
            );
            setItems(visibleItems);
          } else {
            setItems([]);
          }
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message || 'Error loading notes');
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="pt-6 pb-16">
      <h1 className="font-bold text-2xl">Learn</h1>
      <p className="text-zinc-400 mt-2 mb-6">
        Deep, detailed notes on playlists and talks I find worth learning from.
      </p>

      {loading && <p className="text-zinc-400">Loading notes...</p>}

      {!loading && error && (
        <p className="text-zinc-400">Unable to load notes right now.</p>
      )}

      {!loading && !error && items.length === 0 && (
        <p className="text-zinc-400">First notes landing soon.</p>
      )}

      {!loading && !error && items.length > 0 && (
        <div className="flex flex-col gap-4">
          {items.map((item) => {
            if (!isValidSlug(item.slug)) return null;

            const kindLabel = item.kind === 'playlist' ? 'Playlist' : 'Video';
            const meta = formatVideosAndDuration(item.videos, item.duration_min);
            const addedDate = formatAddedDate(item.added);

            return (
              <a
                key={item.slug}
                href={`/learn/${item.slug}/`}
                className="py-4 px-4 border border-zinc-800 rounded-md flex flex-col gap-2 my-2 hover:scale-105 transition-all block"
                style={
                  item.accent
                    ? { borderLeft: `3px solid ${item.accent}` }
                    : undefined
                }
              >
                {item.cover && (
                  <img
                    src={item.cover}
                    alt={`${item.title} cover`}
                    loading="lazy"
                    className="w-full aspect-video object-cover rounded-sm border border-zinc-800"
                  />
                )}

                <div className="flex items-center gap-2">
                  <TechTag tag={kindLabel} />
                </div>

                <h2 className="font-bold underline hover:no-underline text-lg text-white">
                  {item.title}
                </h2>

                <div className="text-sm text-zinc-400 flex flex-wrap items-center gap-1.5">
                  <span className="font-medium text-zinc-300">
                    {item.channel}
                  </span>
                  {meta && (
                    <>
                      <span>·</span>
                      <span>{meta}</span>
                    </>
                  )}
                  {addedDate && (
                    <>
                      <span>·</span>
                      <span className="text-zinc-500">{addedDate}</span>
                    </>
                  )}
                </div>

                {item.summary && (
                  <p className="text-sm text-zinc-300">{item.summary}</p>
                )}

                {Array.isArray(item.tags) && item.tags.length > 0 && (
                  <div className="flex gap-2 flex-wrap mt-1">
                    {item.tags.map((tag) => (
                      <TechTag key={tag} tag={tag} />
                    ))}
                  </div>
                )}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Learn;
