import React from 'react';
import AppBar from 'material-ui/AppBar';

/**
 * TopBar component is rendering Material UI's AppBar.
 * It accepts `onHamburgerClick` prop that will be called when Hamburger icon is clicked in the AppBar
 * TopBar knows NOTHING about how it is used and what parent components are doing when hamburger is clicked
 * The Application behaviour is handled by parent App component
 */

export default (props) => {
  const { onHamburgerClick } = props;

  return <AppBar
    title="Pawnshop"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    onLeftIconButtonClick={onHamburgerClick}
  />
};
