import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'
import { colors, imgTitles, imgDescriptions, madeWith } from '../data/text';
import { getRandomValue } from '../helpers';
import './CardGallery.css';

class CardGallery extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        images: props.images,
      }
    }

    componentWillReceiveProps() {
      this.setState(() => {
        return {
          images: this.props.images
        }
      })
    }

    renderImage(imgLink, i) {
        // <Card color={colors[Math.floor(Math.random()*colors.length)]} image={imgLink} key={i}/>
        return (
            <Card key={i} color={getRandomValue(colors)} id="my-card">
              <Image src={imgLink} />
              <Card.Content className="my-card-content">
                <Card.Header>
                  {getRandomValue(imgTitles)}
                </Card.Header>
                <Card.Meta>
                  Instagram Image
                </Card.Meta>
                <Card.Description>
                  {getRandomValue(imgDescriptions)}
                </Card.Description>
              </Card.Content>
              <Card.Content extra className="my-card-footer">
                <a href='https://instagram.com/danteman8' target='_blank'>
                  <Icon name='heart' />Made with {getRandomValue(madeWith)}
                </a>
              </Card.Content>
            </Card>
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

export default CardGallery;