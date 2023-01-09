import Link from 'next/link';
import { FC } from 'react';

type Props = {
  href: string;
};

export const MoreLink: FC<Props> = ({ href, children }) => {
  const target = href.startsWith('http') ? '_blank' : '_self';

  return (
    <Link href={href}>
      <a className='text-sm underline mt-4 inline-block' target={target}>
        {children}
      </a>
    </Link>
  );
};
