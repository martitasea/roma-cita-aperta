import React from 'react';
import HeaderCard from './HeaderCard';

export default {
  title: 'Card/HeaderCard',
  component: HeaderCard
};

const Template = args => <HeaderCard {...args}/>;

export const Default = Template.bind({});
Default.args = {
  poi: {
    id: '1',
    type: 'visit',
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
  }
};