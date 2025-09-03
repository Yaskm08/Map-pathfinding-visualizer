export const MAP_STYLES = {
    dark: "./map_style.json",
    satellite: "./satellite_style.json"
};

export const MAP_STYLE = MAP_STYLES.dark;

export const INITIAL_VIEW_STATE = {
    longitude: -0.127,
    latitude:  51.507   ,
    zoom: 13,
    pitch: 0,
    bearing: 0
};

export const INITIAL_GLOBE_VIEW_STATE = {
    longitude: 0,
    latitude: 0,
    zoom: 0
};

export const INITIAL_COLORS = {
    startNodeFill: [70, 183, 128],
    startNodeBorder: [255, 255, 255],
    endNodeFill: [152, 4, 12],
    endNodeBorder: [0, 0, 0],
    path: [70, 183, 128],
    route: [165, 13, 32],
};

export const INITIAL_SETTINGS = {
    algorithm: "astar",
    radius: 4,
    speed: 5,
    mapStyle: "dark",
    viewMode: "2d"
};

export const LOCATIONS = [
    { name: "New York", latitude: 40.712, longitude: -74.006 },
    { name: "Tokyo", latitude: 35.682, longitude: 139.759 },
    { name: "Paris", latitude: 48.856, longitude: 2.352 },
    { name: "Rome", latitude: 41.902, longitude: 12.496 },
    { name: "Tunis", latitude: 36.8065, longitude:10.1815 },
    { name: "London", latitude: 51.507, longitude: -0.127 },
    { name: "Dubai", latitude: 25.276, longitude: 55.296 },
    { name: "Singapore", latitude: 1.352, longitude: 103.820 },
    { name: "San Francisco", latitude: 37.774, longitude: -122.419 },
    { name: "Berlin", latitude: 52.520, longitude: 13.405 },
    { name: "Sydney", latitude: -33.868, longitude: 151.209 },
    { name: "Amsterdam", latitude: 52.367, longitude: 4.900 },
    { name: "Hong Kong", latitude: 22.319, longitude: 114.169 },
    { name: "Rio de Janeiro", latitude: -22.906, longitude: -43.172 },
    { name: "Shanghai", latitude: 31.230, longitude: 121.473 },
];
