import React, {Component} from 'react';
import styled from 'styled-components'

class FieldRow extends Component {

  componentDidMount() {
   console.log(this.props);
  }
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
        <RowSpacing />
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
  grid-template-columns: repeat(6, 1fr);
`


const FbContainer = styled.div`
  grid-column: 6;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;

`

const RowSpacing = styled.div`
  grid-column: 5;
  padding-top: 100%;
`

const ColorContainer = styled.div`
  grid-column: 1 / 5;
  background-color: rgba(255, 255, 255, 0.3);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`

const ColorPin = styled.div`
  width: 60%;
  height: 60%;
  margin: auto;
  margin: calc(20% -2px);
  border: 2px solid white;
  border-radius: 50%;
  background-color: ${props => props.color};
`

const FbPin = styled.div`
  width: 80%;
  height: 80%;
  margin: 10%;
  border-radius: 50%;
  background-color: white;
`

const FbPinRed = styled(FbPin)`
  background-color: red;
`
