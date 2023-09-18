import React from 'react';

const DeviceListItem = ({ device, onClick }) => {
  return (
    <div className="p-4 cursor-pointer hover:bg-gray-300" onClick={onClick}>
      <h3>{device.name}</h3>
      <p>{device.lastPosition}</p>
    </div>
  );
};

export default DeviceListItem;