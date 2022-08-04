import PropTypes from 'prop-types';
import React from 'react';
import './Title.css';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2 className="planets-title">{headline}</h2>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
