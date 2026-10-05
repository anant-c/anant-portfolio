import React from 'react';

const Section = ({ title, children, className = '' }) => {
  return (
    <section className={className}>
      <h1 className="text-3xl font-bold pt-10 ">{title}</h1>
      {children}
    </section>
  );
};

export { Section };
export default Section;
