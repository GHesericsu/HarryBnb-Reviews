/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import Review from './Review.jsx';

const Wrapper = styled.div`
  height: 600px;
  display: flex;
  flex-flow: column wrap;
`;

const ReviewList = ({ reviews }) => {
  const frontReviews = reviews.slice(0, 6);
  console.log(frontReviews);
  return (
    <Wrapper>
      {frontReviews.map((el, index) => (
        <Review key={index} review={el} />
      ))}
    </Wrapper>
  );
};

export default ReviewList;