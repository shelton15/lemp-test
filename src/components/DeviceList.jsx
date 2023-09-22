import React, { useEffect, useState } from 'react';
import DeviceListItem from './DeviceListItems';
import Map from './Map';
import axios from 'axios';

const DeviceList = () => {
  const [devices, setDevices] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    // Login and get OAuth token
    const login = async () => {
      try {
        const response = await axios.get(
          'https://connect.paj-gps.de/api/login?email=testkunde%40paj-gps.de&password=app123%23'
        );
        const { token } = response.data;
        setToken(token);
      } catch (error) {
        console.error('Error logging in:', error);
      }
    };

    login();
  }, []);

  useEffect(() => {
    // Fetch devices using the OAuth token
    const fetchDevices = async () => {
      try {
        const response = await axios.get('https://connect.paj-gps.de/api/device', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setDevices(response.data.devices);
      } catch (error) {
        console.error('Error fetching devices:', error);
      }
    };

    if (token) {
      fetchDevices();
    }
  }, [token]);

  const handleDeviceClick = (device) => {
    // Handle device click
    console.log('Device clicked:', device);
  };

  return (
    <div>
      <div className="map-container">
        {/* Render the live map component */}
        <Map devices={devices} />
      </div>
      <div className="card-container">
        {/* Render DeviceListItem for each device */}
        {devices.map((device) => (
          <DeviceListItem key={device.id} device={device} onClick={() => handleDeviceClick(device)} />
        ))}
      </div>
    </div>
  );
};

export default DeviceList;