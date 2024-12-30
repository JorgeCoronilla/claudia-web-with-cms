import React from 'react';
import IconBxlInstagramAlt from '../icons/instagramIcon';
import IconTiktok from '../icons/tiktokIcon';
import IconYoutube from '../icons/youtubeIcon';
import styles from './socialMedia.module.css';
const socialMediaList = [
  {
    url: 'https://www.instagram.com/claudiadeutrera/',
    icon: <IconBxlInstagramAlt />,
    name: 'Cludia instagram link',
  },
  {
    url: 'https://www.tiktok.com/@claudiadeutrera',
    icon: <IconTiktok />,
    name: 'Claudia tiktok link',
  },
  {
    url: 'https://www.youtube.com/@claudiadeutrera',
    icon: <IconYoutube />,
    name: 'Claudia youtube links',
  },
];

export default function SocialMedia() {
  return (
    <div className={styles.socialMedia}>
      {socialMediaList.map((socialMedia, index) => (
        <a
          key={`sm-${index}`}
          href={socialMedia.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Link to my ${socialMedia.name}`}
        >
          {socialMedia.icon}
        </a>
      ))}
    </div>
  );
}
