import React from 'react';

import { Meta } from '@storybook/react';

import Intro from './index';

export default {
  component: Intro,
  title: 'Components/Intro',
} as Meta;

export const IntroStory: React.VFC<{}> = () => <Intro />;
