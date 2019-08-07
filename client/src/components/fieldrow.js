import React, {Component} from 'react';
import styled from 'styled-components'

class FieldRow extends Component {

  render() {
    var redPins = [];
    var whitePins = [];
    for(let i=0;i<this.props.feedback[0];i++) {
      redPins.push(<FbPinRed key={'red' + i} />)
    }
    for(let i=0;i<this.props.feedback[1];i++) {
      whitePins.push(<FbPin key={'white' + i} />)
    }

    return (
      <Row>
        <ColorContainer>
          {this.props.attempts.placement.map((color, i) => {
            return <ColorPin key={i} color={color} />
          })}
        </ColorContainer>
        <FbContainer>
          {redPins}
          {whitePins}
        </FbContainer>
      </Row>
    );
  }
}

export default FieldRow;


const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr) 0.5fr 1fr;
`


const FbContainer = styled.div`
  grid-column: 6;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  ::before {
    content: '';
    width: 0;
    padding-top: 100%;
  }
  @media (min-width: 400px) {
    width: 80%;
  }
  @media (min-width: 600px) {
    width: 70%;
  }
  @media (min-width: 1000px) {
    width: 50%;
  }
  @media (min-width: 1500px) {
    width: 30%;
  }
`

const ColorContainer = styled.div`
  grid-column: 1 / 5;
  background-color: rgba(255, 255, 255, 0.3);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
`

const ColorPin = styled.div`
  width: 36px;
  height: 36px;
  border: 2px solid white;
  border-radius: 50%;
  background-color: ${props => props.color};
  @media (min-width: 400px) {
  }
  @media (min-width: 600px) {
  }
  @media (min-width: 1000px) {
  }
`

const FbPin = styled.div`
  width: 50%;
  height: 50%;
  border-radius: 50%;
  background-color: white;
`

const FbPinRed = styled(FbPin)`
  background-color: red;
`
