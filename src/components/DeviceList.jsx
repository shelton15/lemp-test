import React from 'react';
import DeviceListItem from './DeviceListItem';

const DeviceList = ({ devices, onDeviceClick }) => {
  return (
    <div className="w-1/4 bg-gray-200 overflow-y-auto">
      {devices.map((device) => (
        <DeviceListItem
          key={device.id}
          device={device}
          onClick={() => onDeviceClick(device)}
        />
      ))}
    </div>
  );
};

export default DeviceList;