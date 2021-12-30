import React from 'react';
import PoiCard from './PoiCard';

export default {
  title: 'Card/PoiCard',
  component: PoiCard
};

const Template = args => <PoiCard {...args}/>;

export const Visit = Template.bind({});
Visit.args = {
  poi: {
    id: 2,
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
    doc: 'https://www.google.com/',
    web: 'https://www.google.com/',
    book: 'https://www.google.com/',
  }
};

export const Walk = Template.bind({});
Walk.args = {
  poi: {
    id: 3,
    type: 'walk',
    name: 'Piazza del Campidoglio',
    style: 'Renacimiento',
    author: 'Miguel Ángel',
    category: 'Plaza',
    description: 'Se considera primera gran plaza monumental de la Roma moderna. Miguel Ángel proyectó todos los edificios que se encuentran hoy en la plaza: el palazzo Senatorio –actual ayuntamiento–, el palazzo Nuovo y el palazzo dei Conservatori –sedes de los magníficos museos Capitolinos, uno de los museos de Roma imprescindibles–. Así como su original suelo y la Cordonata capitolina, la gran rampa –aunque tiene escalones– que da acceso a la plaza. Pero también colocó con la armonía propia de un maestro del Renacimiento elementos de la época romana. El más importante es la estatua ecuestre en bronce de Marco Aurelio, del siglo II. El original está en los museos Capitolinos, donde también se visitan los restos arqueológicos que se han encontrado bajo la plaza.',
    plan: 'http://3.bp.blogspot.com/--e6gwHAiC4g/Tzj5_BvcD6I/AAAAAAAACgQ/UC5zYr4BHG0/s400/campidoglio%2Bplanta.jpg',
    image: 'https://i2.wp.com/www.hisour.com/wp-content/uploads/2020/06/Campidoglio-Square-Capitoline-Museums.jpg?fit=960%2C640&ssl=1',
    alert_timetable: 'Ver desde lo alto del mirardor',
  }
};

export const Commerce = Template.bind({});
Commerce.args = {
  poi: {
    id: 4,
    type: 'commerce',
    name: 'Mercado de Porta Portese',
    category: 'Mercado',
    description: 'Es el mayor y más importante mercado de calle de Roma. Es posible encontrar todo tipo de relojes antigüos, cerámicas, bicicletas, utensilios de cocina, viejas máquinas de escribir, ropa, libros, pinturas herramientas y mucho más.',
    image: 'https://italian-traditions.com/wp-content/uploads/2016/08/20_Cornici-Porta-Portese.jpg',
    alert_timetable: 'Los conciertos son sólo por la mañana.',
  }
};

export const Accomodation = Template.bind({});
Accomodation.args = {
  poi: {
    id: 5,
    type: 'accomodation',
    name: 'Apartamento Via Cicerone',
    category: 'Mercado',
    description: 'En el barrio de Prati, con dos habitaciones una con cama doble y otra individual, además de sofá cama.',
    image: 'https://a0.muscache.com/im/pictures/miso/Hosting-53789812/original/f97ee017-aeb8-4e62-8345-22db42c571bb.jpeg?im_w=1200',
    alert_visit: 'Cancelación gratis hasta 30 enero a las 12 de la mañana',
  }
};