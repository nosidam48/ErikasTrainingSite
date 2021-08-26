import React from 'react'

import { Meta } from '@storybook/react';

import Contact from './index';

export default {
  component: Contact,
  title: 'Components/Contact',
} as Meta;

export const ContactStory: React.VFC<{}> = () => <Contact />;