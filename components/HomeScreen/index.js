import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import ProfileScreen from "../Profile/ProfileScreen";
import SideBar from "../SideBar/SideBar.js";
import { DrawerNavigator } from "react-navigation";
import MapScreen from "../Map/MapScreen";

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
    Map: { screen: MapScreen }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;