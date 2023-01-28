import Link from 'next/link';
import { FC, useEffect } from 'react';

export const TwitterTimelineIframe: FC = () => {
  useEffect(() => {
    const s = document.createElement('script');
    s.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    s.setAttribute('async', 'true');
    s.setAttribute('charset', 'utf-8');
    document.head.appendChild(s);
  }, []);

  return (
    <Link
      href='https://twitter.com/sainuio?ref_src=twsrc%5Etfw'
      className='twitter-timeline'
      data-height='400'
      data-lang='ja'
      data-theme='light'
      data-chrome='noheader nofooter'
    >
      Tweets by sainuio
    </Link>
  );
};
