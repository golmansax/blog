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
  const { expandNavbar, description, title, noIndex, children, image } = props;
  const expandedTitle = getTitle(title);

  // eslint-disable-next-line no-process-env
  const { GOOGLE_ANALYTICS_ID } = process.env;

  return (
    <html lang='en-US'>
      <head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag("js", new Date());

              gtag("config", "${GOOGLE_ANALYTICS_ID}");
            `,
          }}
        />

        <meta charSet='utf8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge, chrome=1' />
        <meta name='author' content='Holman Gao' />
        <meta name='twitter:card' content={image ? 'summary_large_image' : 'summary'} />
        <meta name='twitter:creator' content='@golmansax' />

        <title>{expandedTitle}</title>
        <meta property='og:title' content={expandedTitle} />
        <meta name='twitter:title' content={expandedTitle} />

        <meta name='description' content={description} />
        <meta property='og:description' content={description} />
        <meta name='twitter:description' content={description} />

        {image ? [
          <meta key='fb' property='og:image' content={image} />,
          <meta key='twitter' name='twitter:image' content={image} />,
        ] : null}

        {noIndex ? <meta name='robots' content='noindex, nofollow' /> : null}
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
  description: PropTypes.string.isRequired,
  expandNavbar: PropTypes.bool.isRequired,
  image: PropTypes.string,
  noIndex: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

PageLayout.defaultProps = {
  expandNavbar: false,
  noIndex: false,
};
