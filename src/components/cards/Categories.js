import React from 'react';
import PropTypes from 'prop-types';

import MuseumIcon from '@mui/icons-material/Museum';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import BathtubIcon from '@mui/icons-material/Bathtub';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import Church from '../icons/Church';
import Castle from '../icons/Church';

const CATEGORIES_ICONS = {
  'Castillo': <Castle/>,
  'Iglesia': <Church/>,
  'Basílica': <Church/>,
  'Museo': <MuseumIcon/>,
  'Templo': <AccountBalanceIcon/>,
  'Termas': <BathtubIcon/>,
  'Catacumbas': <GroupWorkIcon/>,
};

const DEFAULT_ICON = <CheckBoxOutlineBlankIcon/>;

const Categories = ({categoryId}) => CATEGORIES_ICONS[categoryId] || DEFAULT_ICON;

Categories.propTypes = {
  categoryId: PropTypes.string.isRequired
};

export default Categories;
