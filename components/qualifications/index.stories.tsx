import React from 'react'

import { Meta } from '@storybook/react';

import Qualifications from './index';

export default {
  component: Qualifications,
  title: 'Components/Qualifications',
} as Meta;

export const QualificationsStory: React.VFC<{}> = () => <Qualifications />;