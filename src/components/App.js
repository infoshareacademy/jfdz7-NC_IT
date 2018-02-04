import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Footer from './Footer';
import Home from './Home';
import Product from './Product';
import Products from './Products';
import TopBar from './TopBar';
import Sidebar from './Sidebar';

import '../css/styles.css';

export default class extends React.Component {
  /**
   * The information about whether the sidebar is open is stored in component internal state.
   * State is a place for component internal data. It is different from props - props are used to control
   * the component from outside. State is something that component manages on it's own.
   */
  state = {
    isSidebarOpen: false,
  };

  onHamburgerClick() {
    /**
     * When user clicks the hamburger icon, the sidebar is toggled
     */
    this.setState({
      isSidebarOpen: !this.state.isSidebarOpen,
    })
  }

  onSidebarClose() {
    /**
     * When user closes sidebar from inside, this function is executed and only here it is marked as close
     */
    this.setState({
      isSidebarOpen: false
    });
  }

  render() {
    const { isSidebarOpen } = this.state;

    /**
     * BrowserRouter - by adding these, we enabled usage of Route and Link across the app
     * MuiThemeProvider - it's a material-ui requirement, without it it won't work
     *                    it allows manipulating styles of components: http://www.material-ui.com/#/customization/themes
     * TopBar, Sidebar and Footer are displayed on all pages
     * Home, Products & Product are displayed only on specific routes defined by Route component
     */

    return <BrowserRouter>
      <MuiThemeProvider>
        <React.Fragment>
          <TopBar onHamburgerClick={this.onHamburgerClick.bind(this)}/>
          <Sidebar isOpen={isSidebarOpen} onClose={this.onSidebarClose.bind(this)}/>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={() => 'About'}/>
          <Route path="/products" component={Products}/>
          <Route path="/product/:id" component={Product}/>
          <Footer author="Bożena"/>
        </React.Fragment>
      </MuiThemeProvider>
    </BrowserRouter>
  }
}