import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Claudia la Utrerana Flamenco dancer porfolio',
    short_name: "Claudia's porfolio",
    description:
      'Mi biografía, próximos espectáculos flamencos, mis formación y forma de contacto',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
