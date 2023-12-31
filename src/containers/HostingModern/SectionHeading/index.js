import React from 'react';
import Heading from 'common/components/Heading';
import HGroup from './sectionHeading.style';

const SectionHeading = ({ title, slogan, ...props }) => {
  return (
    <HGroup {...props}>
      <Heading as="h4">{slogan}</Heading>
      <Heading as="h2">{title}</Heading>
    </HGroup>
  );
};

export default SectionHeading;
