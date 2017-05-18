import React from 'react'
import { Card } from 'semantic-ui-react'
import './CardExample.css';

const colors = ['red','orange','yellow','olive','green','teal','blue','violet'];

class CardExample extends React.Component {
    renderImage(imgLink, i) {
        return (
            <Card color={colors[Math.floor(Math.random()*colors.length)]} image={imgLink} key={i}/>
        )
    }

    render() {
        return (
          <Card.Group itemsPerRow={4} doubling stackable>
            {this.props.images.map(this.renderImage)}
          </Card.Group>
        )
    }
}

export default CardExample;