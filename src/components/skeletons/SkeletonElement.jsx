import React from 'react';
import './Skeleton.css';
import { string } from 'prop-types';

function SkeletonElement({ type }) {
  const classes = `skeleton ${type}`;

  return <div className={classes} />;
}

export default SkeletonElement;

SkeletonElement.propTypes = {
  type: string.isRequired,
};
