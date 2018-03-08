import React from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Image, } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Fab, Content,  Footer, FooterTab, Text, Item } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import HeaderScreen from '../Header/HeaderScreen';
import MapView from 'react-native-maps';
import { UrlTile, Marker } from 'react-native-maps';
const { width, height } = Dimensions.get('window');
import markerImg from './assets/Marker.png';
import boatCoordinates from './assets/boat';
import constants from './assets/constant';
import constant from './assets/constant';

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
      currentMap: constants.erangel_url,
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

  onChangeMap(map) {
      console.log("gg");
      this.setState({
          currentMap: map
      });
  }

  render() {
    return (  
    <Grid>
        <HeaderScreen title="Map" navigation={this.props.navigation}/>
        <Row size={10}>
            <MapView
                style={{width: "100%", height: "100%"}}
                mapType="none"
                showsCompass={true}
                maxZoomLevel={5}
                minZoomLevel={1}
                onPress={this.onMapPress}
                initialRegion={this.state.region}
                onRegionChange={region => this.onRegionChange(region)}
                zIndex={-10}
                >
            {this.state.markers.map(marker => (
                <MapView.Marker
                title={marker.key}
                key={marker.key}
                coordinate={marker.coordinate}>
                <Image source={require('./assets/Marker.png')} style={{ width: 40, height: 40 }} />
                </MapView.Marker>
            ))}
            <MapView.UrlTile
                urlTemplate={`${this.state.currentMap}/{z}/{x}/{y}.png`}
                maximumZ={5}
                zIndex={-5}
                tileSize={128}
            />
            </MapView>
        </Row>
          <Footer style={styles.footer}>
            <FooterTab style={styles.footer}>
              <Button vertical style={{borderRightColor: "white", borderRightWidth:1}}>
                <Icon name="ios-arrow-dropleft-circle" style={styles.footerText}/>
                <Text style={styles.footerText}>Erangle</Text>
              </Button>
              <Button vertical>
                <Icon name="ios-arrow-dropright-circle" style={styles.footerText}/>
                <Text style={styles.footerText}>Miramar</Text>
              </Button>
            </FooterTab>
          </Footer>
      </Grid>
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
    width: "100%",
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
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
  footer: {
      backgroundColor: colors.mainTheme,
  },
  footerText: {
      color: "white",
  }
});


  export default MapScreen