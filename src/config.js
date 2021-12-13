import {FlyToInterpolator} from 'react-map-gl';

export const INITIAL_VIEWPORT = {
  latitude: 41.895,
  longitude: 12.50,
  zoom: 11,
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
    'name': 'Estrellas',
    'type': 'symbol',
    'paint': {
      'color': '#028090',
      'width': 12
    }
  },
  {
    'name': 'Fuentes',
    'type': 'symbol',
    'paint': {
      'color': '#00BFB2',
      'width': 12
    }
  },
  {
    'name': 'Montes',
    'type': 'symbol',
    'paint': {
      'color': '#252424',
      'width': 12
    }
  },
  {
    'name': 'Monumentos, Iglesias,...',
    'type': 'symbol',
    'paint': {
      'color': '#C64191',
      'width': 12
    }
  },
  {
    'name': 'Museos',
    'type': 'symbol',
    'paint': {
      'color': '#c44242',
      'width': 12
    }
  },
  {
    'name': 'Parques, miradores...',
    'type': 'symbol',
    'paint': {
      'color': '#1A5E63',
      'width': 12
    }
  },
  {
    'name': 'Plazas, calles, puertas, puentes',
    'type': 'symbol',
    'paint': {
      'color': '#FF7700',
      'width': 12
    }
  },
  {
    'name': 'Restaurantes, bares',
    'type': 'symbol',
    'paint': {
      'color': '#654f6f',
      'width': 12
    }
  },
  {
    'name': 'Tiendas, mercados',
    'type': 'symbol',
    'paint': {
      'color': '#cdd063',
      'width': 12
    }
  },
];
export const LAYERS = [
  {
    id: 'monuments',
    source: 'monuments',
    type: 'circle',
    paint: {
      'circle-radius': 6,
      'circle-color': '#028090',
    }
  }
];