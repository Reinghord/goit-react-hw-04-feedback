import React from 'react';
import s from './Statistics.module.css';
import PropTypes from 'prop-types';

function Statistics({ bad, good, neutral, total, positivePercentage }) {
  return (
    <>
      <ul className={s.listStats}>
        <li>
          Good: <span>{good}</span>
        </li>
        <li>
          Neutral: <span>{neutral}</span>
        </li>
        <li>
          Bad: <span>{bad}</span>
        </li>
        <li>
          Total: <span>{total}</span>
        </li>
        <li>
          Positive feedback: <span>{positivePercentage + '%'}</span>
        </li>
      </ul>
    </>
  );
}

Statistics.propTypes = {
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
