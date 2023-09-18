import React from 'react';
import mapboxgl from 'mapbox-gl';
import DeviceModel from '../models/DeviceModel';

mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.mapContainer = React.createRef();
  }

  static getAllDevices = async () => {
    // Replace with your actual API call to fetch devices
    const response = await fetch('https://connect.paj-gps.de/api/device');
    const data = await response.json();

    // Map the response data to DeviceModel instances
    const devices = data.map((device) => {
        return new DeviceModel(device.id, device.name);
    });

    return devices;
};

static getLastPosition = async (deviceId) => {
    // Replace with your actual API call to fetch the last position of a device
    const response = await fetch(
        `https://connect.paj-gps.de/api/trackerdata/${deviceId}/last_points?lastPoints=50`

    );
        return response;
};

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [0, 0],
      zoom: 12
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return <div className="w-full h-64" ref={this.mapContainer}></div>;
  }
}

export default Map;