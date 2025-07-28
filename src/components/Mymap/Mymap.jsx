import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 40.7891, // Գյումրիի latitude
  lng: 43.8475  // Գյումրիի longitude
};

function MyMap() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAap0KZQJ4pIgZcwLcGtPMbknmctR-DLH8">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default MyMap;

