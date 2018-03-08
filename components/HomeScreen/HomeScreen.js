import { StackNavigator, } from 'react-navigation';
import React from 'react';
import {View, TextInput, StyleSheet, Touchable} from 'react-native';
import { Container, Header, Content } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import HeaderScreen from '../Header/HeaderScreen';
import colors from '../../color.constant';
import NewsCard from '../NewsCard/NewsCard';

class HomeScreen extends React.Component {
    render() {
      return (  
        <Grid>
          <HeaderScreen title="PUBG Radar" navigation={this.props.navigation}/>
          <Row style={{ backgroundColor: '#ff9933'}}>
            <NewsCard/>
          </Row>
          <Row>
            <Col style={{ backgroundColor: '#635DB7',}}></Col>
            <Col style={{ backgroundColor: '#00CE9F',}}></Col>
          </Row>
        </Grid>
      );
    }
  }

  const styles = StyleSheet.create({
    AppContainer: {
      backgroundColor: colors.mainTheme,
    }
  });
export default HomeScreen