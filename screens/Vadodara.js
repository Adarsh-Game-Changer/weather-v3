import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';


export default class Vadodara extends Component {
  constructor() {
    super();
    this.state = {
      weather: '',
    };
  }

  getWeather = async () => {
    //change latitude and longitude
    var url = 'https://fcc-weather-api.glitch.me/api/current?lat=22&lon=73';
    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          weather: responseJson,
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  componentDidMount = () => {
    this.getWeather();
  };

  render() {
    if (this.state.weather === '') {
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <Text style={styles.title}>
              Weather Forecast
            </Text>
            <View style={styles.textContainer}>
            <Text style={{ fontSize: 18}}>
              {this.state.weather.main.temp}&deg;C
            </Text>
            <Text style={{ fontSize: 20, margin:10}}>
              humidity : {this.state.weather.main.humidity}
            </Text>
            <Text style={{fontSize: 20}}>
              {this.state.weather.weather[0].description}
            </Text>
          </View>
        
      
          </View> 

           <View>
                            <MapView
                                style={styles.map}
                                region={{
                                    latitude: 22.29941,
                                    longitude: 73.20812,
                                    latitudeDelta: 0,
                                    longitudeDelta: 0,
                                }}
                            >
                                <Marker
                                    coordinate={{ latitude:  22.7545035 , longitude: 73.1497121}}
                                >
                                    <Image source={require('../assets/clouds.png')} style={{ height: 50, width: 50 }} />
                                </Marker>
                            </MapView>
                        </View>


        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
   flex:1
  },
  subContainer : { 
    flex: 1, 
    borderWidth: 1, 
    alignItems: 'center' 
    },
    title:{ 
      marginTop: 50, 
      fontSize: 30,
      fontWeight: "bold" 
    },
    cloudImage :{ 
      width: 200, 
      height: 200, 
      marginTop: 30 
    },
    textContainer : { 
      flex: 1,
      alignItems: 'center', 
      flexDirection:'row', 
      marginTop:-150
    },
    mapContainer: {
        flex: 0.7
    },
    map: {
      width: "100%",
      height: "100%"
  },
});
 