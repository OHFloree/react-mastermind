import React, {Component} from 'react';
import styled from 'styled-components'

class FieldRow extends Component {

  componentDidMount() {
   console.log(this.props);
  }
  render() {
    return (
      <Row>
        <ColorContainer>
          {this.props.attempts.placement.map((pin, i) => {
            return <ColorPin key={i} color={pin} />
          })}
        </ColorContainer>
        <RowSpacing />
        <FbContainer>
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
  width: 32px;
  height: 32px;
  margin: auto;
  margin-top: calc(50% - 18px);
  border: 2px solid white;
  border-radius: 50%;
  background-color: ${props => props.color};
`
