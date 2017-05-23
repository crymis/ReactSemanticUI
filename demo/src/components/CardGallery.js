import React from 'react'
import './CardGallery.css';
import { colors, imgTitles, imgDescriptions, madeWith } from '../data/text';
import { getRandomValue } from '../helpers';

import Image from 'react-bootstrap/lib/Image';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

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
          <Col xs={6} md={4} lg={2} className="imgCard" key={i}>
            <Image src={imgLink} key={i} responsive />
            <b>{getRandomValue(imgTitles)}</b> <br />
            <i>{getRandomValue(imgDescriptions)}</i>
          </Col>
        )
    }

    render() {
        return (
          <Grid>
            {this.props.images.map(this.renderImage)}      
          </Grid>
        )
    }
}

export default CardGallery;