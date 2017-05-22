import React from 'react'
import './CardGallery.css';
import { colors, imgTitles, imgDescriptions, madeWith } from '../data/text';
import { getRandomValue } from '../helpers';


import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 750,
    height: 650
  },
};

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
        return (
            <GridTile
              key={i}
              title={getRandomValue(imgTitles)}
              subtitle={<span>by <b>{getRandomValue(imgDescriptions)}</b></span>}
            >
              <img src={imgLink} />
            </GridTile>
        )
    }

    render() {
        return (
          <div style={styles.root}>
            <GridList
              cellHeight={300}
              style={styles.gridList}>
              <Subheader>
                Instagram Card Gallery (Made with {getRandomValue(madeWith)})
              </Subheader>
                {this.props.images.map(this.renderImage)}
            </GridList>
          </div>
        )
    }
}

export default CardGallery;

