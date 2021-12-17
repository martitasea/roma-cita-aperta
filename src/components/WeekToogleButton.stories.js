import React from 'react';
import WeekToogleButton from './WeekToogleButton';

export default {
  title: 'Common/WeekToogleButton',
  component: WeekToogleButton
};

const Template = args => <WeekToogleButton {...args}/>;

export const Default = Template.bind({});
Default.args = {
  alert_timetable: 'Gratis último jueves de cada mes.',
  alert_visit: 'No te pierdas la escultura de Miguel Ángel',
  timetable: [
    {
      id: '1',
      label: 'L',
      opening :
        {
          open: '9.00',
          closed: '15.00'
        }
    },
    {
      id: '2',
      label: 'M',
      opening :
        {
          open: '9.00',
          closed: '15.00'
        }

    },
    {
      id: '3',
      label: 'X',
      opening :
        {
          open: '9.15',
          closed: '20.30'
        }

    },
    {
      id: '4',
      label: 'J',
      opening :
        {
          open: '',
          closed: ''
        }

    },
    {
      id: '5',
      label: 'V',
      opening :
        {
          open: '9.00',
          closed: '20.00'
        }

    },
    {
      id: '6',
      label: 'S',
      opening :
        {
          open: '9.00',
          closed: '21.20'
        }

    },
    {
      id: '0',
      label: 'D',
      opening :
        {
          open: '',
          closed: ''
        }
    }
  ]
};