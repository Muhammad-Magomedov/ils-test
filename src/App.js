import './App.css';
import { Table, Divider } from "antd"
import { MapContainer, TileLayer } from 'react-leaflet'

import { createControlComponent } from "@react-leaflet/core";

import { useDispatch, useSelector } from 'react-redux';
import { saveCoordinate } from './redux/actions';
import { useEffect } from 'react';
import L from 'leaflet';

function App() {
  const dispatch = useDispatch()
  const { coordinates, currentCoordinate } = useSelector(state => state.saveCoordinates);
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      dispatch(saveCoordinate(selectedRows[0]))
    },
    getCheckboxProps: (record) => ({
      name: record,
    }),
  };

  const columns = [
    {
      title: 'Номер заявки',
      dataIndex: 'req_number',
      key: 'req_number',
    },
    {
      title: 'Координаты ОТ lat',
      dataIndex: 'lat_coordinates_ot',
      key: 'lat_coordinates_ot',
    },
    {
      title: 'Координаты ОТ Ing',
      dataIndex: 'Ing_coordinates_ot',
      key: 'Ing_coordinates_ot',
    },
    {
      title: 'Координаты ДО lat',
      dataIndex: 'lat_coordinates_do',
      key: 'lat_coordinates_do',
    },
    {
      title: 'Координаты ОТ Ing',
      dataIndex: 'Ing_coordinates_do',
      key: 'Ing_coordinates_do',
    },
  ];

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

  return (
    <div className="App">
      <Divider />

      <Table
        rowSelection={{
          type: "radio",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={coordinates}
      />
      <MapContainer className='leaflet_map' center={[59.84660399, 59.82934196]} zoom={14} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <RoutingMachine currentCoordinate={currentCoordinate} />
      </MapContainer>
    </div>
  );
}

export default App;
