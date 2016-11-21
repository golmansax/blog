import React, { PropTypes } from 'react';

export default function TagsList({ className, tags }) {
  return (
    <span className={className}>
      Tags:
      {tags ? tags.map((tag) => (
        <span className='TagsList-tag' key={tag.fields.title}>{tag.fields.title}</span>
      )) : null}
    </span>
  );
}

TagsList.propTypes = {
  className: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
