import {FlyToInterpolator} from 'react-map-gl';
import {Colors} from './components/cards/TypeColors';

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
      'color': '#fff200',
      'width': 12
    }
  }
];

export const LAYERS = [
  {
    id: 'visit',
    source: 'visit',
    type: 'circle',
    paint: {
      'circle-radius': 6,
      'circle-color': Colors('visit')
    }
  },
  {
    id: 'walk',
    source: 'walk',
    type: 'circle',
    paint: {
      'circle-radius': 6,
      'circle-color': Colors('walk')
    }
  },
  {
    id: 'accomodation',
    source: 'accomodation',
    type: 'circle',
    paint: {
      'circle-radius': 6,
      'circle-color': Colors('accomodation')
    }
  },
  {
    id: 'commerce',
    source: 'commerce',
    type: 'circle',
    paint: {
      'circle-radius': 6,
      'circle-color': Colors('commerce')
    }
  },
  {
    id: 'catering',
    source: 'catering',
    type: 'circle',
    paint: {
      'circle-radius': 6,
      'circle-color': Colors('catering')
    }
  }
];