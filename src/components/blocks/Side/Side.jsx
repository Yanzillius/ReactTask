import React from 'react';
import SideMenu from 'components/menues/SideMenu/SideMenu';
import styles from 'assets/css/styles.scss';
import homeIcon from 'assets/images/icons/home.svg';
import locationIcon from 'assets/images/icons/location.svg';
import worldIcon from 'assets/images/icons/world.svg';

const navigation = [
  {
    name: 'home',
    iconPath: homeIcon,
    path: '/'
  },
  {
    name: 'location',
    iconPath: locationIcon,
    path: '/location'
  },
  {
    name: 'world',
    iconPath: worldIcon,
    path: '/world'
  },
]

function Side(){
  return (
    <aside className={styles.appAside}>
      <SideMenu navigation={navigation} />
    </aside>
  );
}

export default Side;
