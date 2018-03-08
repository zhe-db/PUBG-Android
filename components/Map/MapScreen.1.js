import React from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Image, } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Fab, Content,  Footer, FooterTab, Text, Toast } from 'native-base';
import HeaderScreen from '../Header/HeaderScreen';
import MapView from 'react-native-maps';
import { UrlTile, Marker } from 'react-native-maps';
const { width, height } = Dimensions.get('window');
import markerImg from './assets/Marker.png';
import boatCoordinates from './assets/boat';
import constants from './assets/constant';

const ASPECT_RATIO = width / height;
const LATITUDE = 63.78825;
const LONGITUDE = -60.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;

let boatMarkers = [];
boatCoordinates.forEach(point => {
  boatMarkers.push({
    coordinate: point,
    key: `Position${id++}`,
  })
})
class MapScreen extends React.Component {
  constructor(props) {
    super(props);
    console.log(boatCoordinates)
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: boatMarkers,
      active: 'true',
    };

    this.onMapPress = this.onMapPress.bind(this);
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  animateToRandomBearing() {
    this.map.animateToBearing(this.getRandomFloat(-360, 360));
  }

  animateToRandomViewingAngle() {
    this.map.animateToViewingAngle(this.getRandomFloat(0, 90));
  }

  getRandomFloat(min, max) {
    return (Math.random() * (max - min)) + min;
  }

  onMapPress(e) {
    Toast.show({
      text: 'Wrong password!',
      position: 'bottom',
      buttonText: 'Okay'
    });
    this.setState({
      markers: [
        {
          coordinate: e.nativeEvent.coordinate,
          key: `Position${id++}`,
        }
      ],
    });
    console.log(this.state.markers[0].coordinate.latitude.toPrecision(7), this.state.markers[0].coordinate.longitude.toPrecision(7));
  }

  render() {
    return (  
      <Container style={styles.MapContainer}>
        <HeaderScreen title="Map" navigation={this.props.navigation}/>
        <Content>
        <MapView
          style={{width: "100%", height: "100%"}}
          mapType="none"
          showsCompass={true}
          maxZoomLevel={5}
          minZoomLevel={1}
          onPress={this.onMapPress}
          initialRegion={this.state.region}
          onRegionChange={region => this.onRegionChange(region)}
        >
        {this.state.markers.map(marker => (
            <MapView.Marker
              title={marker.key}
              key="Position"
              coordinate={marker.coordinate}>
            <Image source={require('./assets/Marker.png')} style={{ width: 40, height: 40 }} />
            </MapView.Marker>
          ))}
        <MapView.UrlTile
            urlTemplate={`${constants.miramar_url}/{z}/{x}/{y}.png`}
            maximumZ={5}
            zIndex={-1}
            tileSize={128}
          />
        </MapView>
        <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{ }}
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => this.setState({ active: !this.state.active })}>
          <Icon name="md-menu" />
          <Button disabled style={{ backgroundColor: '#ff0000' }}
           onPress={() => this.animateToRandomBearing()}>
            <Icon name="ios-eye" />
          </Button>
          <Button style={{ backgroundColor: '#34A34F' }}>
            <Icon name="ios-compass" />
          </Button>
          <Button style={{ backgroundColor: '#3B5998' }}>
            <Icon name="md-boat" />
          </Button>
          <Button disabled style={{ backgroundColor: '#9900cc' }}>
            <Icon name="md-car" />
          </Button>
          </Fab>
          <View style={styles.bubble}>
            <Text style={{ textAlign: 'center'}}>
                {this.state.markers[0].coordinate.latitude.toPrecision(7)},
                {this.state.markers[0].coordinate.longitude.toPrecision(7)}
            </Text>
          </View>
          </Content>
          <Footer>
            <FooterTab>
              <Button vertical>
                <Icon name="apps" />
                <Text>Apps</Text>
              </Button>
              <Button vertical>
                <Icon name="camera" />
                <Text>Camera</Text>
              </Button>
              <Button vertical active>
                <Icon active name="navigate" />
                <Text>Navigate</Text>
              </Button>
              <Button vertical>
                <Icon name="person" />
                <Text>Contact</Text>
              </Button>
            </FooterTab>
          </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  MapContainer: {
    backgroundColor: colors.mainTheme,
    width:"100%",
    height:"100%"
  },
  bubble: {
    position: "absolute",
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
    width: "100%",
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});


  export default MapScreen