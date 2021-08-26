import React from 'react';

import { Meta, Story } from '@storybook/react';

import NavBar, { NavBarProps } from './index';

export default {
  component: NavBar,
  title: 'Components/NavBar',
} as Meta;

const Template: Story<NavBarProps> = (args) => <NavBar {...args} />;

export const Home = Template.bind({});
Home.args = { pathname: '/' };

export const About = Template.bind({});
About.args = { pathname: '/about' };

export const Services = Template.bind({});
Services.args = { pathname: '/services' };

export const Contact = Template.bind({});
Contact.args = { pathname: '/contact' };
