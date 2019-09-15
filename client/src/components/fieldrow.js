import React, {Component} from 'react';
import styled from 'styled-components'

class FieldRow extends Component {
  componentDidMount(){
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
  min-height: 4em;
  margin-bottom: 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`


const FbContainer = styled.div`
  width:4em;
  background-color: rgba(255, 255, 255, 0.3);
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
`

const ColorContainer = styled.div`
  width: calc(100% - 7em);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
`

const ColorPin = styled.div`
  width: 3em;
  height: 3em;
  border: 2px solid white;
  border-radius: 50%;
  background-color: ${props => props.color};
`

const FbPin = styled.div`
  width: 60%;
  height: 60%;
  border-radius: 50%;
  background-color: #000a12;
`

const FbPinRed = styled(FbPin)`
  background-color: #e53935;
`
