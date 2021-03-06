import React from 'react';
import ReactDom from 'react-dom';

import App from 'components/App.js';
const initialData = {
  articles: {},
  authors: {}
};
ReactDom.render(
  <App initialData={initialData} />,
  document.getElementById('root')
);
