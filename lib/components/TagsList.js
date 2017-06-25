import classnames from 'classnames';
import React, { PropTypes } from 'react';

export default function TagsList({ className, tags }) {
  return (
    <div
      className={classnames({
        'TagsList clearfix': true,
        [className]: className,
      })}
      >
      {tags ? tags.map((tag) => (
        <small className='TagsList-tag' key={tag.fields.title}>{tag.fields.title}</small>
      )) : null}
    </div>
  );
}

TagsList.propTypes = {
  className: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
