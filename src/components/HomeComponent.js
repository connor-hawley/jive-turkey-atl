import React, { Component } from 'react';
import { Jumbotron, Media, Row, Col } from 'reactstrap'
import { baseUrl } from '../shared/baseUrl';

class Home extends Component {
  render() {
    console.log(baseUrl + 'assets/chef-vick.png');

    return (
      <Jumbotron>
        <Media>
          <Media left>
            <Media object src={baseUrl + 'assets/chef-vick.png'} alt="Chef Vick" />
          </Media>
          <Media body>
            <Media heading>
              Jive Turkey ATL
            </Media>
            Chef Vick has years of experience perfecting his craft. From catering, to private events, to meal plans, Chef Vick will make sure you are eating good.
          </Media>
        </Media>
      </Jumbotron>
    );
  }
}

export default Home;