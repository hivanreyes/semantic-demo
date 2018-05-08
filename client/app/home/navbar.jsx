import React from 'react';
import GlobalNavBar from '@natgeo/modules-global-nav';

const PROPS = {
  activeCountry: {
    name: 'United States',
    iso_code: 'USA',
    title: 'titulo conuntry',
  },
  showCountryDropdown: true,
  endpoint: '../../../config/development.json',
  loadRegistration: true,
  showCardsOnExplore: true,
  showContextualNav: true,
  showSearch: true,
  showShop: true,
  showSubscribe: true,
  stickyContextualNavigation: false,
  searchURL: 'https://www-s.nationalgeographic.com/search',
};

const NavBarWrapper = () => (
  <GlobalNavBar {...PROPS} />
);

const NavBar = () => (
  <div>Nav Here</div>
);

export default NavBar;
