import React from 'react';
import DeviceList from '../components/DeviceList';
import ApiService from '../services/ApiService';

class DeviceListController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      devices: [],
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

  render() {
    return <DeviceList devices={this.state.devices} />;
  }
}

export default DeviceListController;