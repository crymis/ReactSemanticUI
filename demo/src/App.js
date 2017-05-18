import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Icon, Grid, Rating } from 'semantic-ui-react';
import CardExample from './components/CardExample';
import { getSomeImages } from './data/images';

class App extends React.Component {

  state = {
    clicked: false,
    rating: 1
  };

  toggleClick(e) {
    this.setState((state) => {return {clicked: !state.clicked}});
    document.activeElement.blur();
  }

  renderImageCards(e, props) {
    if (props && props.rating) {
      this.setState(() => { return {rating: props.rating} });
    }
    return (
      <CardExample images={getSomeImages(this.state.rating)}/>
    )
  }

  render() {
    return (
      <Grid padded="vertically">
        <Grid.Row>
          <Grid.Column>
            <div className="App">
              <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React</h2>
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column>
            <p className="App-intro">Try out Semantic UI React</p>
            <Rating 
              ref={(rating) => {this.numberOfImages = rating; }} 
              maxRating={8} 
              defaultRating={1} 
              icon='star'
              onRate={(e, props) => this.renderImageCards(e, props)}/><br />
            <Button 
              animated='vertical'
              onClick={(e) => this.toggleClick(e)}
              ref={(btn) => {this.mainButton = btn; }}>
              <Button.Content visible>{!this.state.clicked ? 'Show Cards' : 'Hide Cards'}</Button.Content>
              <Button.Content hidden>
                <Icon name={`${!this.state.clicked ? 'down' : 'up'} arrow`}></Icon>
              </Button.Content>
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column width={15}>
            {this.state.clicked ? this.renderImageCards() : null}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
