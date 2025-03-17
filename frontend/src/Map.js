import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import React from "react";

const mapContainerStyle = { width: "100vw", height: "100vh" };
const center = { lat: 40.7128, lng: -74.0060 }; // NYC 중심

export default function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  // API 키 확인용 콘솔 로그 (개발 중에만 사용)
  console.log("API Key:", process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading...";

  return (
    <GoogleMap 
      zoom={12} 
      center={center} 
      mapContainerStyle={mapContainerStyle}
    />
  );
}
