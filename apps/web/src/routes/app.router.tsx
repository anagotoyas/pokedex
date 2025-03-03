import { Flex } from '@mantine/core';
import { RouteObject } from 'react-router-dom';

export const AppRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Flex c="red">Hello, world!</Flex>,
  },
];
