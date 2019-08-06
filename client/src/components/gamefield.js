import React from 'react';
import styled from 'styled-components';

function GameField() {
  return(
    <FieldWrapper>
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
    </FieldWrapper>
  );
}

export default GameField

const FieldWrapper = styled.div`
  grid-row: 3;
  margin: 2%;
  overflow-y: scroll;
  display: grid;
  grid-template-rows: repeat(12, 1fr);
  grid-row-gap: 2%;
`

const Row = styled.div`
  height: 60px;
  background-color: rgba(255, 255, 255, 0.3);
`
