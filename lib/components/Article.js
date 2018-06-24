import React from 'react';

const styles = {
  articleS: {
    paddingBottom: 10,
    borderBottomStyle: 'solid',
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    marginBottom: 10
  },
  titleS: {
    fontWeight: 'bold'
  },
  dateS: {
    fontSize: '0.85em',
    color: '#888'
  },
  authorS: {
    paddingTop: 10,
    paddingBottom: 10
  },
  bodyS: {
    paddingLeft: 20
  }
};
const dateDisplay = (dateString) => new Date(dateString).toDateString();

const Article = (props) => {
  const { article, actions } = props;
  const author = actions.lookupAuthor(article.authorId);
  const { articleS, titleS, dateS, authorS, bodyS } = styles;
  return (
    <div style={articleS}>
      <div style={titleS}>{article.title}</div>
      <div style={dateS}>{dateDisplay(article.date)}</div>
      <div style={authorS}>
        <a href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </div>
      <div style={bodyS}>{article.body}</div>
    </div>
  );
};

export default Article;
