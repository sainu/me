import Image from 'next/image';
import { FC } from 'react';

type Props = {
  width: number;
  height: number;
  url: string;
};

export const ProfileImage: FC<Props> = ({ width, height, url }) => {
  return (
    <Image
      className='rounded-full'
      src={url}
      alt='プロフィール画像'
      width={width}
      height={height}
    />
  );
};
