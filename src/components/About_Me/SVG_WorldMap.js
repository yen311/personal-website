import React from "react";
import { useState, useEffect } from "react";
import WorldMap from "react-svg-worldmap";

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

const SVG_WorldMap = (props) => {
  const data = [
    { country: "au", value: 1 },
    { country: "tw", value: 1 },
    { country: "cn", value: 1 },
    { country: "us", value: 1 },
    { country: "jp", value: 1 },
    { country: "kr", value: 1 },
    { country: "my", value: 1 },
    { country: "gb", value: 1 },
    { country: "id", value: 1 },
    { country: "fr", value: 1 },
    { country: "nl", value: 1 },
    { country: "th", value: 1 },
    { country: "sg", value: 1 },
  ];

  useEffect(() => {
    props.callback(data.length);
  }, []);

  const getLocalizedText = ({ countryCode, countryValue }) => {
    return countryCode;
  };

  return (
    <div className='text-center'>
      <WorldMap
        color='#e6be2e'
        title='My World Map'
        size='responsive'
        data={data}
        tooltipTextFunction={getLocalizedText}
      />
    </div>
  );
};
export default SVG_WorldMap;
