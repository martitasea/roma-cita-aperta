import React from 'react';
import PopupInfo from './PopupInfo';

export default {
  title: 'Common/PopupInfo',
  component: PopupInfo
};

const Template = args => <PopupInfo {...args}/>;

export const Default = Template.bind({});
Default.args = {
  name: 'Basílica de Santa María en Trastevere',
  style: 'Románico',
  author: 'Carlo Fontana',
  description: 'La Basílica de Santa María en Trastevere (Basilica di Santa Maria in Trastevere en italiano) es una iglesia de Roma, la más importante del barrio Trastevere. Fundada en el siglo III por el papa Calixto I, la iglesia fue después renovada durante el papado de Inocencio II (1130-1143). La fachada, que conserva en la parte superior un mosaico del siglo XIII, está precedida por el pórtico proyectado por Carlo Fontana en 1702. En el interior, de tres naves sobre columnas (inspirada en la Basílica de Santa María la Mayor), destacan el bello techo de madera, diseñado por Domenichino (también autor de la "Asunción" en el centro) y algunas pinturas que se encontraron en la restauración del siglo XIX, durante el papado de Pío IX. En la primera capilla de la nave derecha encontramos Santa Francisca Romana de Giacomo Zoboli, y en la segunda capilla la Natividad de Étienne Parrocel. En la cúpula del ábside puede admirarse un mosaico con la Coronación de la Virgen, del siglo XII, adornado en su parte inferior con Historias de la Virgen, también en mosaico, obra de Pietro Cavallini (1291). La primera capilla de la nave izquierda es la capilla Ávila, con estuco en estilo barroco de Antonio Gherardi (1680). Entre la cuarta y tercera capillas se encuentra la tumba de Inocencio II, obra del arquitecto Vespignani que entre 1866 y 1877 llevó a cabo una restauración estilística de la iglesia. En la tercera capilla, con claraboya, hay un retablo de Ferrau Tenzone. Entre las otras obras de arte cabe señalar el icono de la Virgen de la Clemencia o Virgen Theotokos, preciosísimo ejemplar ejecutado tal vez en el siglo VI (aunque algunos historiadores lo datan en el VIII), de rígida frontalidad y colores radiantes, relacionados con el primer estrato de frescos de la Iglesia de Santa María Antigua (Santa Maria Antiqua). La capilla Altemps se construyó a finales del siglo XVI.',
  price: 'Gratis',
  other: '',
  image: 'https://viajararoma.com/wp-content/uploads/StaMariaInTrastevere.jpg',
  alert_timetable: 'Gratis último domingo de cada mes',
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
  ]
};