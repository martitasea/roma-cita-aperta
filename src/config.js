import {FlyToInterpolator} from 'react-map-gl';

export const INITIAL_VIEWPORT = {
  latitude: 41.895,
  longitude: 12.475,
  zoom: 13,
  bearing: 0,
  pitch: 0,
  transitionDuration: 1000,
  transitionInterpolator: new FlyToInterpolator(),
};
export const MAPSTYLES = [
  {
    'label': 'Hibrid',
    'thumbnail': 'https://openicgc.github.io/img/orto.png',
    'url': 'https://geoserveis.icgc.cat/contextmaps/hibrid.json',
    'firstTopLayer': 'place-other'
  },
  {
    'label': 'OSM Bright',
    'thumbnail': 'https://openicgc.github.io/img/osm-bright.png',
    'url': 'https://geoserveis.icgc.cat/contextmaps/osm-bright.json',
    'firstTopLayer': 'place-other'
  },
  {
    'label': 'Positron',
    'thumbnail': 'https://openicgc.github.io/img/positron.png',
    'url': 'https://geoserveis.icgc.cat/contextmaps/positron.json',
    'firstTopLayer': 'place_other'
  },
  {
    'label': 'Full Dark',
    'thumbnail': 'https://openicgc.github.io/img/fulldark.png',
    'url': 'https://geoserveis.icgc.cat/contextmaps/fulldark.json',
    'firstTopLayer': 'place-other'
  }
];
export const INITIAL_MAPSTYLE_URL = MAPSTYLES[2].url;
export const WIDESCREEN_STEP = '770px';
export const DRAWER_WIDTH = '300px';
export const COLOR_PROFILE = {
  visit: '#028090',
  walk: '#E42C64',
  accomodation: '#0A2239',
  commerce: '#ceac23',
  catering: '#a974a3',
  seen: '#4b4b4b'
};
export const Colors = (layerId) => COLOR_PROFILE[layerId];
export const VISITED_FEATURES = localStorage.getItem('roma-cita-aperta.visitedFeatures');

export const LAYERS = [
  {
    id: 'quartieri-fill',
    source: 'quartieri',
    type: 'fill',
    paint: {
      'fill-color': '#519259',
      'fill-opacity': 0.1,
      'fill-outline-color': 'red'
    }
  },
  {
    id: 'quartieri-line',
    source: 'quartieri',
    type: 'line',
    paint: {
      'line-color': '#519259',
      'line-width': 2,
    }
  },
  {
    id: 'colinas',
    source: 'colinas',
    type: 'circle',
    paint: {
      'circle-radius': 10,
      'circle-color': 'transparent',
      'circle-stroke-color': 'black',
      'circle-stroke-width': 2,
    }
  },
  {
    id: 'muralla_severiana',
    source: 'muralla_severiana',
    type: 'line',
    paint: {
      'line-color': 'black',
      'line-width': 2,
      'line-dasharray': [2,2],
    }
  },
  {
    id: 'visit',
    source: 'visit',
    type: 'circle',
    paint: {
      'circle-radius': ['case', ['==', ['get', 'id'], VISITED_FEATURES], 4.5, 6],
      'circle-color': ['case', ['==', ['get', 'id'], VISITED_FEATURES], 'transparent', COLOR_PROFILE.visit],
      'circle-stroke-color': COLOR_PROFILE.visit,
      'circle-stroke-width': ['case', ['==', ['get', 'id'], VISITED_FEATURES], 1.5, 0],
    },
  },
  {
    id: 'walk',
    source: 'walk',
    type: 'circle',
    paint: {
      'circle-radius': 6,
      'circle-color': COLOR_PROFILE.walk
    }
  },
  {
    id: 'accomodation',
    source: 'accomodation',
    type: 'circle',
    paint: {
      'circle-radius': 4,
      'circle-color': COLOR_PROFILE.accomodation
    }
  },
  {
    id: 'commerce',
    source: 'commerce',
    type: 'circle',
    paint: {
      'circle-radius': 4,
      'circle-color': COLOR_PROFILE.commerce
    }
  },
  {
    id: 'catering',
    source: 'catering',
    type: 'circle',
    paint: {
      'circle-radius': 4,
      'circle-color': COLOR_PROFILE.catering
    }
  },

];
export const LEGEND = [
  {
    'id': 'visit',
    'name': 'Visitar',
    'type': 'symbol',
    'paint': {
      'color': Colors('visit'),
      'width': 12
    }
  },
  {
    'id': 'walk',
    'name': 'Pasear',
    'type': 'symbol',
    'paint': {
      'color': Colors('walk'),
      'width': 12
    }
  },
  {
    'id': 'catering',
    'name': 'Restauración',
    'type': 'symbol',
    'paint': {
      'color': Colors('catering'),
      'width': 12
    }
  },
  {
    'id': 'accomodation',
    'name': 'Dormir',
    'type': 'symbol',
    'paint': {
      'color': Colors('accomodation'),
      'width': 12
    }
  },
  {
    'id': 'commerce',
    'name': 'Comercio',
    'type': 'symbol',
    'paint': {
      'color': Colors('commerce'),
      'width': 12
    }
  }
];



