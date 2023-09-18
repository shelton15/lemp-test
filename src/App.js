import './App.css';
import DeviceList from './components/DeviceList';
// import Map from './components/Map';

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen sm:p-8 md:p-16 lg:p-24">
      <DeviceList/>
    </div>
  );
}

export default App;
