import React, {useState,useEffect} from 'react';
import styled from 'styled-components';

function Solution() {
  const [solution, setSolution] = useState(['?','?','?','?']);

  useEffect(() => {
    
  });

  return(
    <SolutionWrapper>
      {solution.map((color, index) => {
        return <SolutionSpan key={index}>{color}</SolutionSpan>
      })}
    </SolutionWrapper>
  );
}

export default Solution

const SolutionWrapper = styled.div`
  grid-row: 2;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  border: solid white;
  border-width: 0px 5px 5px 5px;
  border-radius: 0 0 15px 15px;
  background-color: black;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`

const SolutionSpan = styled.span`
  line-height: 60px;
  color: white;
  font-size: 20px;
  text-align: center;
`
