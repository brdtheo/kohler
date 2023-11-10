import React from 'react';

import Icon from '@components/Icon';

import { IconName } from '@/types/common';

const ConnectionStatus: React.FC = () => {
  return (
    <div className="flex flex-1 mr-1 text-shamrock h-4">
      <div className="mr-1">
        <Icon name={IconName.NETWORK} className="w-4 h-4" />
      </div>
      <span className="text-left flex-1 leading-none text-sm gg-semibold capitalize">
        voice connected
      </span>
    </div>
  );
};

export default ConnectionStatus;
