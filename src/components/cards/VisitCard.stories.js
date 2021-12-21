import React from 'react';
import VisitCard from './VisitCard';

export default {
  title: 'Cards/VisitCard',
  component: VisitCard
};

const Template = args => <VisitCard {...args}/>;

export const Default = Template.bind({});
Default.args = {
  type: 'Visitar',
  name: 'Basílica de Santa María en Trastevere',
  style: 'Románico',
  author: 'Carlo Fontana',
  category: 'Iglesia',
  description: 'La Basílica más importante del barrio Trastevere. Fundada en el siglo III por el papa Calixto I, fue después renovada durante el papado de Inocencio II (1130-1143). La fachada, que conserva en la parte superior un mosaico del siglo XIII, está precedida por el pórtico proyectado por Carlo Fontana en 1702. En el interior, de tres naves sobre columnas (inspirada en la Basílica de Santa María la Mayor).',
  price: '10€',
  plan: 'https://media.istockphoto.com/illustrations/colosseum-in-rome-italy-crosssection-and-plan-view-illustration-id1007843616',
  image: 'https://viajararoma.com/wp-content/uploads/StaMariaInTrastevere.jpg',
  alert_timetable: 'Gratis último domingo de cada mes',
  alert_visit: 'No te pierdas la escultura de Miguel Angel',
  timetable: [
    {
      id: 1,
      label: 'L',
      opening :
        {
          open: '9.00',
          closed: '15.00'
        }
    },
    {
      id: 2,
      label: 'M',
      opening :
        {
          open: '9.00',
          closed: '15.00'
        }

    },
    {
      id: 3,
      label: 'X',
      opening :
        {
          open: '9.15',
          closed: '20.30'
        }

    },
    {
      id: 4,
      label: 'J',
      opening :
        {
          open: '',
          closed: ''
        }

    },
    {
      id: 5,
      label: 'V',
      opening :
        {
          open: '9.00',
          closed: '20.00'
        }

    },
    {
      id: 6,
      label: 'S',
      opening :
        {
          open: '9.00',
          closed: '21.20'
        }

    },
    {
      id: 0,
      label: 'D',
      opening :
        {
          open: '',
          closed: ''
        }

    }
  ],
  prueba: '[9.30,10.30]'
};

export const WithoutTimetable = Template.bind({});
WithoutTimetable.args = {
  type: 'Visitar',
  name: 'Basílica de Santa María en Trastevere',
  style: 'Románico',
  author: 'Carlo Fontana',
  category: 'Iglesia',
  description: 'La Basílica más importante del barrio Trastevere. Fundada en el siglo III por el papa Calixto I, fue después renovada durante el papado de Inocencio II (1130-1143). La fachada, que conserva en la parte superior un mosaico del siglo XIII, está precedida por el pórtico proyectado por Carlo Fontana en 1702. En el interior, de tres naves sobre columnas (inspirada en la Basílica de Santa María la Mayor).',
  price: '10€',
  plan: 'https://media.istockphoto.com/illustrations/colosseum-in-rome-italy-crosssection-and-plan-view-illustration-id1007843616',
  image: 'https://viajararoma.com/wp-content/uploads/StaMariaInTrastevere.jpg',
  alert_timetable: 'Gratis último domingo de cada mes',
  alert_visit: 'No te pierdas la escultura de Miguel Angel',
};

export const WithoutPlanTimetable = Template.bind({});
WithoutPlanTimetable.args = {
  type: 'Visitar',
  name: 'Basílica de Santa María en Trastevere',
  style: 'Románico',
  author: 'Carlo Fontana',
  category: 'Iglesia',
  description: 'La Basílica más importante del barrio Trastevere. Fundada en el siglo III por el papa Calixto I, fue después renovada durante el papado de Inocencio II (1130-1143). La fachada, que conserva en la parte superior un mosaico del siglo XIII, está precedida por el pórtico proyectado por Carlo Fontana en 1702. En el interior, de tres naves sobre columnas (inspirada en la Basílica de Santa María la Mayor).',
  price: '10€',
  image: 'https://viajararoma.com/wp-content/uploads/StaMariaInTrastevere.jpg',
  alert_timetable: 'Gratis último domingo de cada mes',
  alert_visit: 'Escultura de Miguel Angel',
};