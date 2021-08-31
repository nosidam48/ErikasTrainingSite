import React from 'react';

import { Meta, Story } from '@storybook/react';

import NavBar, { NavBarProps } from './index';
import { Paths } from '../../utils/paths';

export default {
  component: NavBar,
  title: 'Components/NavBar',
} as Meta;

const Template: Story<NavBarProps> = (args) => <NavBar {...args} />;

export const Home = Template.bind({});
Home.args = { pathname: Paths.Home };

export const About = Template.bind({});
About.args = { pathname: Paths.About };

export const Services = Template.bind({});
Services.args = { pathname: Paths.Services };

export const Contact = Template.bind({});
Contact.args = { pathname: Paths.Contact };
