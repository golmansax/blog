import React, { PropTypes } from 'react';

export default function RedirectPage({ redirectUrl }) {
  return (
    <html lang='en-US'>
      <head>
        <meta httpEquiv='content-type' content='text/html; charset=utf-8' />
        <meta httpEquiv='refresh' content={`0;url=${redirectUrl}`} />
        <link rel='canonical' href={redirectUrl} />
      </head>
    </html>
  );
}

RedirectPage.propTypes = {
  redirectUrl: PropTypes.string.isRequired,
};
