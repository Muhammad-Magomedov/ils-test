import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutineMachineLayer = ({currentCoordinate}) => {
  const { Ing_coordinates_do, Ing_coordinates_ot, lat_coordinates_do, lat_coordinates_ot } = currentCoordinate
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(lat_coordinates_do, lat_coordinates_ot),
      L.latLng(Ing_coordinates_do, Ing_coordinates_ot)
    ],
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }]
    },
    show: false,
    addWaypoints: false,
    draggableWaypoints: false,
    routeWhileDragging: true,
    fitSelectedRoutes: true,
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
