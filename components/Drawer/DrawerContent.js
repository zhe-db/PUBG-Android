import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text, Content, Grid, Col } from 'native-base';
import colors from '../../color.constant';

export default class HeaderScreen extends Component {
  render() {
    return (
        <Container>
        <Header />
        <Content>
          <Grid>
            <Col style={{ backgroundColor: '#635DB7', height: 200 }}></Col>
            <Col style={{ backgroundColor: '#00CE9F', height: 200 }}></Col>
          </Grid>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  HeaderContainer: {
    backgroundColor: colors.mainTheme
  }
})
