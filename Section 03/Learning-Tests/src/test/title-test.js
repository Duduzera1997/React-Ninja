const Title = require('./title');
const React = require('react');
const $ = require('whacko');
const ReactDOMServer = require('react-dom/server');

const TitleComponent = ReactDOMServer.renderToStaticMarkup(
	React.createElement(Title)
);

console.log($(TitleComponent).get(0).tagName);
