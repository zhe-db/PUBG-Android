import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import HeaderScreen from '../Header/HeaderScreen';
import colors from '../../color.constant';

class ProfileScreen extends React.Component {
  render() {
    return (  
      <Container style={styles.ProfileContainer}>
        <HeaderScreen title="Profile" navigation={this.props.navigation}/>
        <Text>Home Screen</Text>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  ProfileContainer: {
    backgroundColor: colors.mainTheme,
  }
});


  export default ProfileScreen