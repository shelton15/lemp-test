import React from 'react';
import Map from '../components/Map';
import DeviceList from '../components/DeviceList';
import ApiService from '../services/ApiService';

class MapController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      devices: [],
      selectedDevice: null,
    };
  }

  componentDidMount() {
    this.fetchDevices();
  }

  fetchDevices = async () => {
    try {
      const devices = await ApiService.getAllDevices();
      this.setState({ devices });
    } catch (error) {
      console.error('Error fetching devices:', error);
    }
  };

  handleDeviceClick = async (device) => {
    try {
      const lastPosition = await ApiService.getLastPosition(device.id);
      this.setState({ selectedDevice: { ...device, lastPosition } });
      this.flyToLocation(lastPosition);
    } catch (error) {
      console.error('Error fetching last position:', error);
    }
  };

  flyToLocation = (location) => {
    if (this.map) {
      this.map.flyTo({ center: location });
    }
  };

  render() {
    return (
      <div className="flex">
        <Map ref={(map) => (this.map = map)} />
        <DeviceList
          devices={this.state.devices}
          onDeviceClick={this.handleDeviceClick}
        />
      </div>
    );
  }
}

export default MapController;