import * as React from 'react';
import PropTypes from 'prop-types';
import Head from './Head';

export default function AppTheme(props) {
  const { children } = props;

  return (
    <React.Fragment>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      {children}
    </React.Fragment>
  );
}

AppTheme.propTypes = {
  children: PropTypes.node.isRequired,
};
