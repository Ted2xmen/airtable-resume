import React from 'react';
import { Container } from '@mantine/core';
import { ResumeHero } from './ResumeHero/ResumeHero';

const links = [
  {
    label: 'Home',
    link: '/',
  },
];

type Props = {
  children: React.ReactNode;
};
const Layout = ({ children }: Props) => (
  <div>
    <ResumeHero mainLinks={links} />
    <Container>{children}</Container>
  </div>
);

export default Layout;
