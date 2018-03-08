import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import colors from '../../color.constant';


export default class HeaderScreen extends Component {
  render() {
    return (
        <Header style={styles.HeaderContainer}>
          <Left>
            <Button transparent
            onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name='menu'/>
            </Button>
          </Left>
          <Body>
            <Title>{this.props.title}</Title>
          </Body>
          <Right>
          <Button transparent
            onPress={() => this.props.navigation.navigate("Map")}>
            <Icon name='compass'/>
          </Button>
          </Right>
        </Header>
    );
  }
}

const styles = StyleSheet.create({
  HeaderContainer: {
    backgroundColor: colors.mainTheme
  }
})
