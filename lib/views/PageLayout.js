import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Navbar from '../components/Navbar';

function PageHead({ title }) {
  return (
    <head>
      <meta charSet='utf8' />
      <meta http-equiv='X-UA-Compatible' content='IE=edge, chrome=1' />
      <meta name='description' content='description of your site' />
      <meta name='author' content='author of the site' />
      <meta name='robots' content='noindex, nofollow' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link href='https://fonts.googleapis.com/css?family=Noto+Sans' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Noto+Serif' rel='stylesheet' />
      <title>{title}</title>
    </head>
  );
}

export default function PageLayout(props) {
  const { cssHTML, children } = props;

  // Hack to render cssHTML within head...
  const headHTML = renderToStaticMarkup(<PageHead {...props} />)
    .replace(/<\/?head>/g, '') + cssHTML;

  return (
    <html>
      <head dangerouslySetInnerHTML={{ __html: headHTML }} />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
