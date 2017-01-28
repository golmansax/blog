import React, { PropTypes } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeapAnalytics from '../components/HeapAnalytics';
import { getAsset, blogPath } from '../utils';

function getTitle(title) {
  if (title.includes('Holman Gao')) {
    return title;
  }

  return `${title} | Holman Gao`;
}

export default function PageLayout(props) {
  const { expandNavbar, title, children } = props;

  return (
    <html lang='en-US'>
      <head>
        <meta charSet='utf8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge, chrome=1' />
        <meta name='description' content='description of your site' />
        <meta name='author' content='author of the site' />
        <meta name='robots' content='noindex, nofollow' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700'
        />
        <link href={blogPath(getAsset('main.css'))} rel='stylesheet' />
        <link
          rel='icon'
          href='https://www.gravatar.com/avatar/f14bfcfb11c5a367dc8c88bc3dd43189?s=16'
        />
        <title>{getTitle(title)}</title>
        <HeapAnalytics />
      </head>
      <body>
        {expandNavbar ? null : <Navbar />}
        <div className='PageLayout-content'>
          {children}
        </div>
        <Footer />
        <div id='image-modal' />
        <script async src={blogPath(getAsset('main.js'))} />
      </body>
    </html>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  expandNavbar: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

PageLayout.defaultProps = {
  expandNavbar: false,
};
