import React from 'react';

export default function ArticleHeader(props) {
  return (
    <>
      <header>
        <h4>{props.date}</h4>
        <h4>{props.cat}</h4>
        <h4>{props.client}</h4>
        <h4 className="last">{props.title}</h4>
      </header>
      <div className="txt">
        <p>{props.caption}</p>
      </div>
    </>
  );
}
