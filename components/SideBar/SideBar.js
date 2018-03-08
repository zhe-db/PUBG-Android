import React from "react";
import { AppRegistry, Image, StatusBar, ImageBackground, StyleSheet } from "react-native";
import { Container, Content, Text, List, ListItem, Left, Icon, Body, Right, Grid, Separator  } from "native-base";
const routes = [{route: "Home", icon: "home"}, 
                {route: "Profile", icon: "person"}, 
                {route: "Items", icon: "ios-nuclear"},
                {route: "Map", icon: "ios-compass"},
                {route: "News", icon: "ios-cloudy"}];
const about = [{route: "Github", icon: "logo-github"}, 
                {route: "Portfolio", icon:"md-aperture"},
                {route: "Donate", icon: "ios-thumbs-up"}]
const icons = ["home", "user-circle-o"]
import colors from '../../color.constant';


export default class SideBar extends React.Component {
  render() {
    return (
      <Container style={styles.SideBarContainer}>
        <Content>
          <Content style={styles.ImageContent}>
            <ImageBackground
              source={{
                uri: "https://images-na.ssl-images-amazon.com/images/I/91shBPN04VL.png"
              }}
              style={styles.ImageBackground}>
              <Image
                square
                style={styles.Image}
                source={{
                  uri: "https://i.redd.it/wa12yr33k9qz.png"
                }}
              />
            </ImageBackground>
          </Content>
          <Separator bordered>
            <Text style={{fontSize: 12, fontWeight: 'bold'}}>PUBG</Text>
          </Separator>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem icon
                style={styles.List}
                onPress={() => this.props.navigation.navigate(data.route)}>
                  <Left>
                    <Icon name={data.icon} style={styles.ListItemText} />
                  </Left>
                  <Body>
                    <Text style={styles.ListItemText}>{data.route}</Text>
                  </Body>
                </ListItem>
              );
            }}
          >
          </List>
          <Separator bordered>
            <Text style={{fontSize: 12, fontWeight: 'bold'}}>ABOUT</Text>
          </Separator>
          <List
            dataArray={about}
            renderRow={data => {
              return (
                <ListItem icon
                style={styles.List}
                onPress={() => this.props.navigation.navigate(data.route)}>
                  <Left>
                    <Icon name={data.icon} style={styles.ListItemText} />
                  </Left>
                  <Body>
                    <Text style={styles.ListItemText}>{data.route}</Text>
                  </Body>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  SideBarContainer: {
    backgroundColor: colors.mainTheme
  },
  ImageContent: {
  },
  ImageBackground: {
    height: 200,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  Image: { height: 100, width: 105 },
  List: {
    justifyContent: "flex-start"
  },
  ListItem: {
    borderBottomColor: colors.mainTheme,
    borderBottomWidth: 1,
  },
  ListItemText: {
    color: 'white'
  }
})