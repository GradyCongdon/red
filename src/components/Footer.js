import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters as v } from '../actions';

const Footer = () => (
  <p>
    Show: 
    <FilterLink filter={v.SHOW_ALL}>All</FilterLink>
    {','}
    <FilterLink filter={v.SHOW_ACTIVE}>Active</FilterLink>
    {','}
    <FilterLink filter={v.SHOW_COMPLETED}>Completed</FilterLink>
  </p>
);

export default Footer;

