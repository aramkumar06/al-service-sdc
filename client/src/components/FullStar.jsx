import React from 'react';
import styled from 'styled-components';

const StyledFull = styled.div`
  height: 25px;
  width: 25px;
`;

const Svg = styled.svg`
`;

const FullStar = (props) => {

  return (
    <StyledFull>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="2 0 100 100"><path fill="#ffd200" d="M50 73l29.39 21.45-11.32-34.579L97.553 38.55l-36.385.08L50 4 38.832 38.629l-36.385-.08L31.93 59.871l-11.32 34.58z" fillRule="evenodd"/>
      </Svg>
    </StyledFull>
  )

}

export default FullStar;