/** @jsx jsx */
import React from 'react';
import { Box, BoxProps, jsx } from 'theme-ui';

export interface LogoProps extends BoxProps {
  dotColor?: string;
}

export const Logo: React.FC<LogoProps> = ({
  children: _,
  dotColor,
  ...props
}) => (
  <Box
    as="svg"
    // @ts-expect-error
    viewBox="0 0 100 40"
    {...props}
  >
    <path
      sx={{ fill: dotColor ? dotColor : (theme) => theme.colors.primary }}
      d="M93.1 24.8a4 4 0 0 1 2.9-1.1 4 4 0 0 1 2.9 1.1 4 4 0 0 1 1.1 2.9 4 4 0 0 1-1.1 2.9 4 4 0 0 1-2.9 1.1 4 4 0 0 1-2.9-1.1 4 4 0 0 1-1.1-2.9c0-1.2.3-2.2 1.1-2.9z"
    />
    <g sx={{ fill: 'currentColor' }}>
      <path d="M18.5 14.8a9.1 9.1 0 0 1 3.9 4.2 8 8 0 0 1 .7 3.6c0 1.2-.3 2.4-.8 3.5a9.8 9.8 0 0 1-9.3 5.6H0V0h12.7c1.3 0 2.4.2 3.6.7 1.1.5 2.1 1.1 2.9 1.9.8.8 1.5 1.7 1.9 2.8a8 8 0 0 1 .2 6l-1.1 1.9c-.5.6-1 1.1-1.7 1.5zM4.8 13.1h7.9c1.3 0 2.4-.4 3.3-1.3a4.1 4.1 0 0 0 0-6c-.9-.9-2-1.3-3.2-1.3h-8v8.6zM13 27.2c.7 0 1.4-.1 2.1-.4a5 5 0 0 0 2.8-2.7c.3-.6.4-1.3.4-2s-.1-1.4-.4-2a5 5 0 0 0-2.8-2.7c-.7-.3-1.4-.4-2.1-.4H4.8v10.1H13z" />
      <path d="M25.4 9H30v23.1c0 1.2-.2 2.3-.5 3.3a7 7 0 0 1-6.6 4.6 9 9 0 0 1-1.8-.2l-.7-.3v-4l.5.1.5.1h.6c1 0 1.9-.3 2.5-1 .7-.7 1-1.5 1-2.5V9zm2.3-3.5a3 3 0 0 1-2-.8c-.5-.5-.8-1.2-.8-2s.3-1.4.8-2c.5-.5 1.2-.8 2-.8a3 3 0 0 1 2 .8c.5.5.8 1.2.8 2a3 3 0 0 1-.8 2c-.6.6-1.2.8-2 .8zM53.4 25.2L52 27.8c-.6.8-1.3 1.5-2.1 2.2-.8.6-1.8 1.1-2.8 1.5a12.6 12.6 0 0 1-7.9-.3c-1.3-.6-2.5-1.4-3.5-2.4s-1.8-2.2-2.3-3.6a14 14 0 0 1 0-9.4 9.7 9.7 0 0 1 2.3-3.6c1-1 2.1-1.8 3.4-2.4a9.8 9.8 0 0 1 8.2 0 11.1 11.1 0 0 1 6.5 10.7v.8l-.1.7-.1.6H37.4c.1.7.3 1.4.6 2s.8 1.2 1.3 1.7 1.1.9 1.9 1.2c.7.3 1.5.4 2.3.4 1.4 0 2.5-.3 3.3-.9a10 10 0 0 0 1.8-1.6h4.8zM43.2 13.1c-1.5 0-2.8.5-3.9 1.5a7 7 0 0 0-2 4h12.2a7 7 0 0 0-2-4 6 6 0 0 0-4.3-1.5zM66.3 8.8h.7l.5.1.4.1v4.5l-.5-.1-.5-.1-.5-.1c-.8 0-1.5.2-2.2.5a5.7 5.7 0 0 0-3 3c-.3.7-.4 1.4-.4 2.1v12.8h-4.6V9h3.3l1 2.3a6.4 6.4 0 0 1 3.3-2.1c.7-.3 1.5-.4 2.5-.4zM75.2 0h-4.5v31.7h4.5l4-6.7 4.1 6.7h5.3l-6.8-11.3 6.4-10.7h-4.9l-8.1 13.6z" />
    </g>
  </Box>
);
