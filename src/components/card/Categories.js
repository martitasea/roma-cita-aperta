import React from 'react';
import PropTypes from 'prop-types';

import MuseumIcon from '@mui/icons-material/Museum';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import BathtubIcon from '@mui/icons-material/Bathtub';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import HouseIcon from '@mui/icons-material/House';
import HotelIcon from '@mui/icons-material/Hotel';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import DoorSlidingIcon from '@mui/icons-material/DoorSliding';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import Church from '../icons/Church';
import Castle from '../icons/Church';
import IcecreamIcon from '@mui/icons-material/Icecream';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import CakeIcon from '@mui/icons-material/Cake';

const CATEGORIES_ICONS = {
  'Castillo': <Castle/>,
  'Iglesia': <Church/>,
  'Basílica': <Church/>,
  'Museo': <MuseumIcon/>,
  'Templo': <AccountBalanceIcon/>,
  'Termas': <BathtubIcon/>,
  'Catacumbas': <GroupWorkIcon/>,
  'Cripta': <GroupWorkIcon/>,
  'Parque': <NaturePeopleIcon/>,
  'Teatro': <TheaterComedyIcon/>,
  'Paseo': <DirectionsWalkIcon/>,
  'Puerta': <DoorSlidingIcon/>,
  'Vistas': <VisibilityIcon/>,
  'Apartamento': <HouseIcon/>,
  'Hotel': <HotelIcon/>,
  'Plaza': <AspectRatioIcon/>,
  'Escultura': <AccountCircleIcon/>,
  'Mercado': <FilterVintageIcon/>,
  'Tienda': <LocalGroceryStoreIcon/>,
  'Heladería': <IcecreamIcon/>,
  'Restaurante': <RestaurantMenuIcon/>,
  'Beber': <SportsBarIcon/>,
  'Pastelería': <CakeIcon/>,
};

const DEFAULT_ICON = <CheckBoxOutlineBlankIcon/>;

const Categories = ({categoryId}) => CATEGORIES_ICONS[categoryId] || DEFAULT_ICON;

Categories.propTypes = {
  categoryId: PropTypes.string.isRequired
};

export default Categories;
