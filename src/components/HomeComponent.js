import React, { Component } from 'react';
import { Row, Media } from 'reactstrap'
import { baseUrl } from '../shared/baseUrl';
import { ThemedJumbotron, ThemedMedia, ImageMedia, TitleMedia } from '../shared/customComponents';

class Home extends Component {
  render() {
    return (
      <ThemedJumbotron>
        <Row>
          <Media>
            <Media left className="m-3">
              <ImageMedia object src={baseUrl + 'assets/chef-vick.png'} alt="Chef Vick" />
            </Media>
            <ThemedMedia body className="align-self-center m-3">
              <TitleMedia heading className="m-3">
                Jive Turkey ATL
              </TitleMedia>
              Chef Vick has years of experience perfecting his craft. From catering, to private events, to meal plans, Chef Vick will make sure you are eating good.
            </ThemedMedia>
          </Media>
        </Row>
      </ThemedJumbotron>
    );
  }
}

export default Home;