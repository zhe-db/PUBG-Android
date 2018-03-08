import React, { Component } from 'react';
import { Drawer } from 'native-base';
import DrawerContent from './DrawerContent';

export default class DrawerScreen extends Component {
  render() {
    closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
    };
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<DrawerContent navigator={this.navigator} />}
        onClose={() => this.closeDrawer()} >
      </Drawer>
    );
  }
}