import React from 'react';
import TechTag from './TechTag';

const EducationCard = ({ item, education, ...props }) => {
  const edu = item || education || props;

  return (
    <div className="py-4 px-4 border border-zinc-800 rounded-md flex flex-col gap-2 my-4 hover:scale-105 transition-all">
      <div className="flex justify-between items-start flex-wrap gap-1">
        <h2 className="font-bold text-lg">{edu.institution}</h2>
        <span className="text-sm text-zinc-400">{edu.period}</span>
      </div>
      <div className="flex justify-between items-center text-sm text-zinc-300 flex-wrap gap-1">
        <span>
          {edu.degree}
          {edu.location ? ` • ${edu.location}` : ''}
        </span>
        {edu.grade && (
          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-200">
            {edu.grade}
          </span>
        )}
      </div>
      {edu.coursework && edu.coursework.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-1 items-center">
          <span className="text-xs text-zinc-400 mr-1">Coursework:</span>
          {edu.coursework.map((course) => (
            <TechTag key={course} tag={course} />
          ))}
        </div>
      )}
    </div>
  );
};

export { EducationCard };
export default EducationCard;
