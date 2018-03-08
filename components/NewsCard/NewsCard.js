import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class CardImageExample extends Component {
  render() {
    return (
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: "https://content.invisioncic.com/r273030/monthly_2018_01/5a4df45974ecc_PUBGLogo.png.291841ed88af9cbccac657575e0c8754.png"}} />
                <Body>
                  <Text>BazinG_A</Text>
                  <Text note>Eat Chicken</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://www.pcgamesn.com/sites/default/files/PlayerUnknowns%20Battleground%20logo.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
    );
  }
}