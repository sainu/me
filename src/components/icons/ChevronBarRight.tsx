import { FC } from 'react';

type Props = {
  width?: number;
  height?: number;
};

export const ChevronBarRightIcon: FC<Props> = ({ width = 24, height = 24 }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill='currentColor'
      viewBox='0 0 16 16'
    >
      <path
        fillRule='evenodd'
        d='M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0zM11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z'
      />
    </svg>
  );
};
