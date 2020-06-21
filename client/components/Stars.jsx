import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 450px;
  height: 36px;
  margin-right: 90px;
  padding: 0px 8px;
`

const Stars = ({ starName, rating}) => {
  return (
    <Wrapper>
      {starName + ' ' + rating}
    </Wrapper>
  );
};

export default Stars;
