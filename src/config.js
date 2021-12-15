import {FlyToInterpolator} from 'react-map-gl';

export const INITIAL_VIEWPORT = {
  latitude: 41.895,
  longitude: 12.490,
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
export const LEGEND = [
  {
    'name': 'Visitar',
    'type': 'symbol',
    'paint': {
      'color': '#028090',
      'width': 12
    }
  },
  {
    'name': 'Pasear',
    'type': 'symbol',
    'paint': {
      'color': '#E42C64',
      'width': 12
    }
  },
  {
    'name': 'Restauración',
    'type': 'symbol',
    'paint': {
      'color': '#08FFC8',
      'width': 12
    }
  },
  {
    'name': 'Dormir',
    'type': 'symbol',
    'paint': {
      'color': '#0A2239',
      'width': 12
    }
  },
  {
    'name': 'Comercio',
    'type': 'symbol',
    'paint': {
      'color': '#FD5F00',
      'width': 12
    }
  }
];
export const LAYERS = [
  {
    id: 'quartieri',
    source: 'quartieri',
    type: 'line',
    paint: {
      'line-color': '#000',
      'line-width': 2
    }
  },
  {
    id: 'data',
    source: 'data',
    type: 'circle',
    paint: {
      'circle-radius': 6,
      'circle-color': [
        'match',
        ['get', 'type'],
        'Visitar', '#028090',
        'Pasear', '#E42C64',
        'Restauración', '#08FFC8',
        'Dormir', '#0A2239',
        'Comercio', '#FD5F00',
        '#A3A3A3'
      ]
    }
  },

];