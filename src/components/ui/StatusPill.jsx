import React from 'react';

const StatusPill = ({ status }) => {
  const isOnline = status === 'online';

  return (
    <p
      className={`${
        isOnline ? 'bg-green-200 text-green-800' : 'bg-gray-200 text-gray-800'
      } text-xs px-1 rounded-sm flex items-center gap-1 font-bold border border-gray-800`}
    >
      {status}
      <div
        className={`w-2 h-2 rounded-full ${
          isOnline ? 'bg-green-600' : 'bg-gray-600'
        } animate-pulse`}
      ></div>
    </p>
  );
};

export { StatusPill };
export default StatusPill;
