import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 450px;
  height: 36px;
  margin-right: 90px;
  padding: 0px 8px;
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

`;

export const StarContainer = styled.div`
  margin-bottom: 16px;
  display: flex;
  height: 20px;
  margin-bottom:  16px;
`;

export const NameWrapper = styled.div`
  width: 65%;
`;

export const BarWrapper = styled.div`
  width: 30%;
  margin-left: 12px;
  height: 16px;
  display: flex;
  align-items: center;
`;
export const NumberWrapper = styled.div`
  width: 5%;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  margin-left: 6px;
  height: 16px;
`;

export const Bar = styled.div`
  height: 4px;
  background: rgb(221, 221, 221);
  border-radius: 2px;
  width: 100%;
  position: relative;
`;

export const Filler = styled.div`
  width: ${props => props.number};
  background-color: rgb(21, 25, 27);
  height: 4px;
`;