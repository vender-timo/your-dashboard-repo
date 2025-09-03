import React from "react";
import { Box } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const dummyLocations = [
  { name: "Property A", position: [40.7128, -74.006] },
  { name: "Property B", position: [34.0522, -118.2437] },
  { name: "Property C", position: [51.5074, -0.1278] },
];

export default function MapWidget() {
  return (
    <Box sx={{ height: 350, width: "100%" }}>
      <MapContainer center={[40.7128, -74.006]} zoom={2} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {dummyLocations.map((loc) => (
          <Marker position={loc.position} key={loc.name}>
            <Popup>
              {loc.name}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
  );
}
