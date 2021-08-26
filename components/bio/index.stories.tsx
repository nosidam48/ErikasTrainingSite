import React from 'react';

import { Meta } from '@storybook/react';

import Bio from './index';

export default {
  component: Bio,
  title: 'Components/Bio',
} as Meta;

export const BioStory: React.VFC<{}> = () => <Bio />;
