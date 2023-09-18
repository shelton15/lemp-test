import React from 'react';
import DeviceListItem from './components/DeviceListItems';

const DeviceList = ({ devices, onDeviceClick }) => {
  const handleDeviceClick = (device) => {
    onDeviceClick(device);
  };

  return (
    <div className="w-1/4 bg-gray-200 overflow-y-auto">
      {devices.map((device) => (
        <DeviceListItem
          key={device.id}
          device={device}
          onClick={() => handleDeviceClick(device)}
        />
      ))}
    </div>
  );
};

export default DeviceList;