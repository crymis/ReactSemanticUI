import React from 'react';
// import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import logo from './logo.svg';
import CardGallery from './components/CardGallery';
import { getSomeImages } from './data/images';
import { languageOptions } from './data/text';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Button from 'react-bootstrap/lib/Button';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Well from 'react-bootstrap/lib/Well';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

import './App.css';
  

const langOps = [];
languageOptions.forEach(lang => {
  langOps.push(<MenuItem eventKey={lang.value} key={lang.key}>{lang.text}</MenuItem>);
});

class App extends React.Component {

  state = {
    clicked: false,
    numberOfImages: 12,
    selectedLanguage: 'English',
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

  changeLanguage(e) {
    this.setState(() => {
      return {
        selectedLanguage: e,
        notSupported: e !== 'English'
      }
    })
  }

  renderImageCards(val) {
    if (val) {
      this.setState(() => {
        return {
          numberOfImages: val
        }
      });
    }
    return (
      <CardGallery images={getSomeImages(this.state.numberOfImages)}/>
    )
  }

  render() {
    return (
      <Grid fluid>
        <div className="App">
          <Row className="show-grid">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
              <div id="language-selection">
                <DropdownButton 
                  pullRight 
                  title={this.state.selectedLanguage} 
                  id="lang" 
                  onSelect={(e) => this.changeLanguage(e)}>
                  {langOps}
                </DropdownButton>
              </div>
            </div>
          </Row>

          <Row className="show-grid">
            <input className="numberOfImages"
              type="range" 
              min={1} 
              max={12} 
              step={1} 
              ref={(input) => this.range = input} 
              onChange={() => this.renderImageCards(this.range.value)}/>
              <div>{this.state.numberOfImages}</div>
            <Button bsStyle="info" className="showButton" onClick={() => this.toggleClick()}>Show Cards</Button>
          </Row>

          <Row className="show-grid">
            {this.state.clicked ? this.renderImageCards() : null}
          </Row>

          <Row className="show-grid">
          <CSSTransitionGroup
            transitionName='slideUp'
            transitionEnterTimeout={400}
            transitionLeaveTimeout={400}>
              {this.state.notSupported ? 
                <Well id="message" key={!this.state.notSupported}>
                  <Glyphicon glyph="globe" /> {' '}
                  This language is not supported yet.
                </Well>
              : null}
          </CSSTransitionGroup>
          </Row>

        </div>
      </Grid>
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
