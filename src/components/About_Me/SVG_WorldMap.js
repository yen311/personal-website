import React from "react";
import { useState, useEffect, useRef } from "react";
import { VectorMap } from "react-jvectormap";

const mapData = [
  { latLng: [25.105497, 121.597366], name: "Taipei City", style: { fill: "red" } },
  { latLng: [-34.928497, 138.600739], name: "Adelaide" },
  { latLng: [-37.813629, 144.963058], name: "Melbourne" },
  { latLng: [-33.86882, 151.20929], name: "Sydney" },
  { latLng: [-35.280937, 149.130005], name: "Canberra" },
  { latLng: [-27.46977, 153.025131], name: "Brisbane" },
  { latLng: [-28.016666, 153.399994], name: "Gold Coast" },
  { latLng: [31.224361, 121.46917], name: "Shanghai" },
  { latLng: [30.25, 120.166664], name: "Hangzhou" },
  { latLng: [26.0753, 119.308197], name: "Fuzhou" },
  { latLng: [35.652832, 139.839478], name: "Tokyo" },
  { latLng: [33.583332, 130.399994], name: "Fukuoka" },
  { latLng: [34.672314, 135.484802], name: "Osaka" },
  { latLng: [43.066666, 141.350006], name: "Sapporo" },
  { latLng: [37.5326, 127.024612], name: "Seoul" },
  { latLng: [13.736717, 100.523186], name: "Bangkok" },
  { latLng: [1.29027, 103.851959], name: "Singapore" },
  { latLng: [3.140853, 101.693207], name: "Kuala Lumpur" },
  { latLng: [-8.409518, 115.188919], name: "Bali" },
  { latLng: [51.509865, -0.118092], name: "London" },
  { latLng: [55.953251, -3.188267], name: "Edinburgh" },
  { latLng: [48.864716, 2.349014], name: "Paris" },
  { latLng: [52.377956, 4.89707], name: "Amsterdam" },
  { latLng: [45.523064, -122.676483], name: "Portland" },
  { latLng: [47.608013, -122.335167], name: "Seattle" },
  { latLng: [34.052235, -118.243683], name: "Los Angeles" },
  { latLng: [37.773972, -122.431297], name: "San Francisco" },
  { latLng: [40.73061, -73.935242], name: "New York City," },
  { latLng: [36.114647, -115.172813], name: "Las Vegas" },
  { latLng: [41.881832, -87.623177], name: "Chicago" },
];

const selectedRegion = ["AU", "TW", "CN", "US", "JP", "KR", "MY", "GB", "ID", "FR", "NL", "TH"];

const SVG_WorldMap = (props) => {
  useEffect(() => {
    props.callback({ country: selectedRegion.length, city: mapData.length });
  }, []);

  const [current, setCurrent] = useState("Try to hover on the marker");
  const refMap = useRef(null);
  useEffect(() => {
    return () => {
      if (refMap.current) {
        refMap.current.tip.remove();
      }
    };
  }, [refMap]);
  return (
    <div>
      <h3 className='mx-auto w-100 text-center'>{current}</h3>
      <VectorMap
        map={"world_mill"}
        backgroundColor='transparent'
        containerStyle={{
          width: "100%",
          height: "50vh",
        }}
        containerClassName='map'
        zoomButtons={false}
        zoomOnScroll={false}
        onRegionTipShow={(e) => {
          e.preventDefault();
        }}
        ref={(map) => {
          if (refMap.current) {
            refMap.current.tip.remove();
          }
          if (map) {
            refMap.current = map.$mapObject;
          }
        }}
        regionStyle={{
          initial: {
            fill: "#cccccc",
            "fill-opacity": 1,
            stroke: "none",
            "stroke-width": 0,
            "stroke-opacity": 0,
          },
          hover: {},
          selected: {
            fill: "#fcba03",
          },
        }}
        selectedRegions={selectedRegion}
        markerStyle={{
          initial: {
            fill: "olive",
          },
          hover: {
            fill: "blue",
          },
        }}
        markers={mapData}
        onMarkerTipShow={(e, label, code) => {
          e.preventDefault();
          setCurrent(label[0].innerText);
        }}
      />
    </div>
  );
};
export default SVG_WorldMap;
