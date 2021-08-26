import React from 'react'

import { Meta } from '@storybook/react';

import Services from './index';

export default {
  component: Services,
  title: 'Components/Services',
} as Meta;

export const ServicesStory: React.VFC<{}> = () => <Services />;