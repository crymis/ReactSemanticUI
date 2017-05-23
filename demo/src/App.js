import React from 'react';

import logo from './logo.svg';
import './App.css';
import { getSomeImages } from './data/images';
import { languageOptions } from './data/text';

import CSSTransitionGroup from "react-addons-css-transition-group";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import CardGallery from './components/CardGallery';
import FlatButton from 'material-ui/FlatButton';
import Slider from 'material-ui/Slider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Snackbar from 'material-ui/Snackbar';


const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  dropdown: {
    position: 'absolute',
    top: '0',
    right: '0'
  },
  langHint: {
    position: 'fixed',
    bottom: '0',
    left: '0',
    backgroundColor: '#eeeeee',
    width: '100%',
    height: '45px',
    padding: '8px'
  },
  controlRow: {
    display: 'flex',
    justifyContent: 'center',
    'alignItems': 'center'
  },
  showImageButton: {
    display: 'block',
    margin: '0 auto',
    marginTop: '10px',
    backgroundColor: 'lightgray'
  },
  slider: {
    margin: '0 10px',
    width: '300px',
    height: '50px'
  }
}

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500
  }
});

const lOptions = [];
languageOptions.forEach((i) => {
  lOptions.push(<MenuItem value={i.value} key={i.key} primaryText={i.text} />);
});


class App extends React.Component {

  state = {
    clicked: false,
    rating: 1,
    notSupported: false,
    language: languageOptions[0].value
  };

  shouldComponentUpdate(nextProps, nextState) {
    // deep equal with state
    let shouldUpdate = false;
    Object.keys(this.state).forEach(key => {
      if(this.state[key] !== nextState[key]) {
        shouldUpdate = true;
      }
    });
    return shouldUpdate;
  }

  toggleClick(e) {
    this.setState((state) => {return {clicked: !state.clicked}});
    document.activeElement.blur();
  }

  changeLanguage(e, i, val) {
    this.setState((state) => {
      return {
        notSupported: val !== 'English',
        language: val
      }
    });
  }

  renderImageCards(e, val) {
    if(val) {
      this.setState(() => { return {rating: val} });
    }
    return (
      <CardGallery images={getSomeImages(this.state.rating)} />
    )
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
          <div style={styles.root} className="App">
            <div style={styles.controlRow} className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
                <DropDownMenu style={styles.dropdown} id="ddLanguage" value={this.state.language} onChange={(e,i,val) => this.changeLanguage(e,i,val)}>
                  {lOptions}
                </DropDownMenu>
            </div>
            <div style={styles.controlRow}>
              1
              <Slider style={styles.slider} min={1} max={12} step={1} onChange={(e, val) => this.renderImageCards(e, val)} />
              12
            </div>
            {this.state.rating}
            <FlatButton style={styles.showImageButton} label='Show images' onClick={() => this.toggleClick()} />
            {this.state.clicked ? this.renderImageCards() : null}
          {/*
            <Snackbar id="message"
              open={this.state.notSupported}
              message={`This language is not supported yet.`}
            />
          */}
            {this.state.notSupported ?
              <CSSTransitionGroup
                transitionName='slideUp'
                transitionEnterTimeout={40000}
                transitionLeaveTimeout={40000}>
                <span style={styles.langHint}>
                  <i className='material-icons' style={{marginRight: '5px'}}>translate </i> 
                   This language is not supported yet.
                </span>
              </CSSTransitionGroup>
            : null}
          </div>
      </MuiThemeProvider>
    )  
  }
}

export default App;
