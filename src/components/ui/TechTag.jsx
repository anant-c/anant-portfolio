import React from 'react';

const TechTag = ({ tag, children }) => {
  return (
    <span className="text-xs rounded-md bg-zinc-200 px-1 text-zinc-900 border border-zinc-800 font-extrabold  flex">
      {tag || children}
    </span>
  );
};

export { TechTag };
export default TechTag;
