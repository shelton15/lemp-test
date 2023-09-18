import DeviceModel from '../models/DeviceModel';

class ApiService {
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
            `https://connect.paj-gps.de/api/trackerdata/${deviceId}/last_points?lastPoints=`

        );
            return response;
    };

    
}

export default ApiService;