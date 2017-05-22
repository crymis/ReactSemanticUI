import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import logo from './logo.svg';
import './App.css';
import { getSomeImages } from './data/images';
import { languageOptions } from './data/text';

import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CardGallery from './components/CardGallery';
import FlatButton from 'material-ui/FlatButton';
import Slider from 'material-ui/Slider';



const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column'
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
    accent1Color: deepOrange500,
  },
});

class App extends React.Component {

  state = {
    clicked: false,
    rating: 1,
    notSupported: false
  };

  toggleClick(e) {
    this.setState((state) => {return {clicked: !state.clicked}});
    document.activeElement.blur();
  }

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

  changeLanguage(e, props) {
    this.setState(() => {
      return {notSupported: props.value !== 'English'}
    })
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
              </div>
              <div style={styles.controlRow}>
                1
                <Slider style={styles.slider} min={1} max={12} step={1} onChange={(e, val) => this.renderImageCards(e, val)} />
                12
              </div>
              {this.state.rating}
              <FlatButton style={styles.showImageButton} label='Show images' onClick={() => this.toggleClick()} />
              {this.state.clicked ? this.renderImageCards() : null}
            </div>
        </MuiThemeProvider>
      )  
    }

  // render() {
  //   return (
  //     <Grid padded="vertically">
  //       <Grid.Row>
  //         <Grid.Column>
  //           <div className="App">
  //             <div className="App-header">
  //               <Dropdown 
  //               id="language-selection"
  //               className="icon" 
  //               floating labeled button 
  //               defaultValue={languageOptions[0].value}
  //               options={languageOptions}
  //               onChange={(e, props) => this.changeLanguage(e,props)} />
  //               <img src={logo} className="App-logo" alt="logo" />
  //               <h2>Welcome to React</h2>
  //             </div>
  //           </div>
  //         </Grid.Column>
  //       </Grid.Row>
  //       <Grid.Row centered>
  //         <Grid.Column>
  //           <p className="App-intro">Try out Semantic UI React</p>
  //           <Popup content='How many images?' position='right center' trigger={
  //             <Rating 
  //               ref={(rating) => {this.numberOfImages = rating; }} 
  //               maxRating={8} 
  //               defaultRating={1} 
  //               icon='star'
  //               onRate={(e, props) => this.renderImageCards(e, props)}/>
  //             } />
  //           <br />
  //           <Button 
  //             animated='vertical'
  //             onClick={(e) => this.toggleClick(e)}
  //             ref={(btn) => {this.mainButton = btn; }}>
  //             <Button.Content visible>{!this.state.clicked ? 'Show Cards' : 'Hide Cards'}</Button.Content>
  //             <Button.Content hidden>
  //               <Icon name={`${!this.state.clicked ? 'down' : 'up'} arrow`}></Icon>
  //             </Button.Content>
  //           </Button>
  //         </Grid.Column>
  //       </Grid.Row>
  //       <Grid.Row centered>
  //         <Grid.Column width={15}>
  //           {this.state.clicked ? this.renderImageCards() : null}
  //         </Grid.Column>
  //       </Grid.Row>
  //       <Grid.Row>
  //         <Grid.Column>
  //             <CSSTransitionGroup
  //             transitionName='slideUp'
  //             transitionEnterTimeout={400}
  //             transitionLeaveTimeout={400}>
  //               {this.state.notSupported ? 
  //               <Message icon id="message">
  //                 <Icon name='translate' />
  //                 <Message.Content>
  //                   <Message.Header>Not Supported!</Message.Header>
  //                   This language is not supported yet.
  //                 </Message.Content>
  //               </Message>
  //               : null}
  //           </CSSTransitionGroup>
  //         </Grid.Column>
  //       </Grid.Row>
  //     </Grid>
  //   );
  // }
}

export default App;
