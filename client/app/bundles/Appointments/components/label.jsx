import React from 'react';

export const Label = ({label}) =>
      <div>
        <div className='label'>{label}</div>
      </div>

Label.propTypes = {
  label: React.PropTypes.string
};
