import React, { forwardRef } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const SinglePage = forwardRef(({ children, title = '', ...rest }, ref) => {
  return (
    <div ref={ref} {...rest}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  );
});

SinglePage.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};

export default SinglePage;
