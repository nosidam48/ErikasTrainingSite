import React from 'react'

import { Meta } from '@storybook/react';

import MobileNavBar from './index';

export default {
  component: MobileNavBar,
  title: 'Components/MobileNavBar',
} as Meta;

export const MobileNavBarStory: React.VFC<{}> = () => <MobileNavBar />;