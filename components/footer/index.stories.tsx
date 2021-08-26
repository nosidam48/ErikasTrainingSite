import React from 'react'

import { Meta } from '@storybook/react';

import Footer from './index';

export default {
  component: Footer,
  title: 'Components/Footer',
} as Meta;

export const FooterStory: React.VFC<{}> = () => <Footer />;