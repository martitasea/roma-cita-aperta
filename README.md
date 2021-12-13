# Roma cità aperta


## Mapbox version

Not needed with the included versions: react-map-gl v5 (which implies mapbox v1).

If mapbox v2 is needed, do:
* `npm install react-map-gl@6`
* Add the `MAPBOX_ACCESS_TOKEN=` empty key (without the token value!) to `.env.example`.
* Add the `MAPBOX_ACCESS_TOKEN=XXXXXXX` entry with a valid token to `.env`.
* Pass the `mapboxAccessToken={process.env.MAPBOX_ACCESS_TOKEN}` prop to the `<Map>` instance.

## i18n

We use **i18next** framework to localize our components:

- Web: [https://www.i18next.com/](https://www.i18next.com/)
- React integration: [https://react.i18next.com/](https://react.i18next.com/)

Usage example on functional component:

```js
import { useTranslation } from 'react-i18next';

const FunctionalComponent = () => {
  const { t } = useTranslation();
  return <h1>{t('welcome')}</h1>
}
```

The applied language will be determined by:

1. The `lang` query string. For instance, use [http://localhost:8080/?lang=es](http://localhost:8080/?lang=es).
2. The browser language preferences.
3. If detection fails, will default to `es`.

There are other detection strategies available, see
[https://github.com/i18next/i18next-browser-languageDetector](https://github.com/i18next/i18next-browser-languageDetector).
