import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Noticias = [
    {
      titulo: 'La violencia en Ecuador y el conflicto armado interno',
      descripcion: 'Las autoridades ofrecen una recompensa de US$ 100.000 por información que ayude a capturar a Adolfo Macías alias Fito, líder de la banda Los Choneros quien escapó de la cárcel.',
      imagen: 'https://cnnespanol.cnn.com/wp-content/uploads/2024/01/240111112523-fito-ecuador-full-169.jpg?resize=700,393',
    },
    {
      titulo: 'Ecuador exigirá certificado de antecedentes penales a los extranjeros que quieran entrar a su territorio por Colombia o Perú ',
      descripcion: 'El Gobierno de Ecuador exigirá a los extranjeros que quieran entrar a su territorio por sus fronteras con Colombia o Perú que presenten un certificado de antecedentes penales., con el argumento de que con esta medida busca “evitar y controlar el ingreso de individuos.',
      imagen: 'https://cnnespanol.cnn.com/wp-content/uploads/2024/01/GettyImages-1915743064-e1705034320857.jpg?quality=100&strip=info&w=300&h=169&crop=1',
    },
    {
      titulo: 'Ecuador promete atrapar al líder criminal fugitivo alias FIto',
      descripcion: 'En medio de la violencia en Ecuador, el secretario general de Comunicaciones del país le dijo a CNN que su gobierno está convencido de que atraparán al líder de Los Choneros, José Adolfo Macías Villamar, también conocido como alias "Fito".',
      imagen: 'https://cnnespanol.cnn.com/wp-content/uploads/2024/01/Copia-de-FOTO-PARA-WP-2024-01-10T120054.708.jpg?quality=100&strip=info',
    },
    {
      titulo: '¿En qué consiste el "conflicto armado interno" que Noboa decretó en Ecuador y qué implica?',
      descripcion: 'Noboa publicó el decreto en su cuenta de X, antes Twitter, momentos después de que este martes hombres armados y encapuchados irrumpieran en el canal TC Televisión, en Guayaquil. Por este hecho, además, se activó un fuerte operativo policial.',
      imagen: 'https://cnnespanol.cnn.com/wp-content/uploads/2024/01/GettyImages-1918189011.jpg?resize=768,512',
    },

  ];

  constructor() {}

}
