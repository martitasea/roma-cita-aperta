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
  commerce: '#fff200',
  catering: '#08FFC8'
};
export const Colors = (layerId) => COLOR_PROFILE[layerId];
export const LAYERS = [
  {
    id: 'visit',
    source: 'visit',
    type: 'circle',
    paint: {
      'circle-radius': 6,
      'circle-color': COLOR_PROFILE.visit
    }
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
      'circle-radius': 6,
      'circle-color': COLOR_PROFILE.accomodation
    }
  },
  {
    id: 'commerce',
    source: 'commerce',
    type: 'circle',
    paint: {
      'circle-radius': 6,
      'circle-color': COLOR_PROFILE.commerce
    }
  },
  {
    id: 'catering',
    source: 'catering',
    type: 'circle',
    paint: {
      'circle-radius': 6,
      'circle-color': COLOR_PROFILE.catering
    }
  }
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



