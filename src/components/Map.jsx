import React from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.mapContainer = React.createRef();
  }

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