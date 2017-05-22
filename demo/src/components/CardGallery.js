import React from 'react'
import './CardGallery.css';
import { colors, imgTitles, imgDescriptions, madeWith } from '../data/text';
import { getRandomValue } from '../helpers';


import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

class CardGallery extends React.Component {

    constructor(props) {
      console.log('card galery');
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
        console.log('show imgs');
        return (
            <GridTile
              key={i}
              title={getRandomValue(imgTitles)}
              subtitle={<span>by <b>{getRandomValue(imgDescriptions)}</b></span>}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
            >
              <img src={imgLink} />
            </GridTile>
        )
    }

    render() {
        console.log('show imgs render');
        return (
          <div style={styles.root}>
            <GridList
              cellHeight={180}
              style={styles.gridList}>
              <Subheader>December</Subheader>
                {this.props.images.map(this.renderImage)}
            </GridList>
          </div>
        )
    }
}

export default CardGallery;

