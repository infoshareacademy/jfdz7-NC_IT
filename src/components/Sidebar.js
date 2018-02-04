import React from 'react';
import {Drawer, MenuItem} from "material-ui";

/**
 * Sidebar component renders the Drawer. It accepts two props:
 *  * isOpen - makes it render opened, or closed Drawer
 *  * onClose - will be called when Drawer is closed from inside (clicking overlay, or ESC key)
 *
 *  Sidebar knows NOTHING about when it is opened, or how it is closed.
 *  Notice that it doesn't actually close itself - it just notifies the close request from the user - it's up to
 *  parent component to do something with it.
 */

export default class extends React.Component {
  handleRequestChange(open) {
    if (open === false) {
      this.props.onClose();
    }
  }

  render() {
    const { isOpen } = this.props;

    return <Drawer
      open={isOpen}
      docked={false}
      onRequestChange={this.handleRequestChange.bind(this)}
    >
      <MenuItem>Menu Item</MenuItem>
      <MenuItem>Menu Item 2</MenuItem>
    </Drawer>
  }
}
