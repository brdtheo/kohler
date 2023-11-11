import React from 'react';

import Network from '@icons/Network';

const ConnectionStatus: React.FC = () => {
  return (
    <div className="flex flex-1 mr-1 text-shamrock h-4">
      <div className="mr-1 w-4 h-4">
        <Network />
      </div>
      <span className="text-left flex-1 leading-none text-sm gg-semibold capitalize">
        voice connected
      </span>
    </div>
  );
};

export default ConnectionStatus;
