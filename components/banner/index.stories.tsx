import React from 'react'

import { Meta } from '@storybook/react';

import Banner from './index';

export default {
  component: Banner,
  title: 'Components/Banner',
} as Meta;

export const BannerStory: React.VFC<{}> = () => <Banner />;