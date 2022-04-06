import { v4 as uuid } from 'uuid';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: 'Disney',
    categoryImg:
      'https://res.cloudinary.com/supertramp69420/image/upload/v1649247527/mediaHive/viewers-disney_gbivhz.png',
    categoryVideo:
      'https://res.cloudinary.com/supertramp69420/video/upload/v1649247530/mediaHive/1564674844-disney_vw1f6t.mp4'
  },
  {
    _id: uuid(),
    categoryName: 'Pixar',
    categoryImg:
      'https://res.cloudinary.com/supertramp69420/image/upload/v1649247523/mediaHive/viewers-pixar_bggwew.png',
    categoryVideo:
      'https://res.cloudinary.com/supertramp69420/video/upload/v1649247529/mediaHive/1564676714-pixar_ucz4zp.mp4'
  },
  {
    _id: uuid(),
    categoryName: 'Marvel',
    categoryImg:
      'https://res.cloudinary.com/supertramp69420/image/upload/v1649247525/mediaHive/viewers-marvel_whhqex.png',
    categoryVideo:
      'https://res.cloudinary.com/supertramp69420/video/upload/v1649247530/mediaHive/1564676115-marvel_ujhqmb.mp4'
  },
  {
    _id: uuid(),
    categoryName: 'Star Wars',
    categoryImg:
      'https://res.cloudinary.com/supertramp69420/image/upload/v1649247522/mediaHive/viewers-starwars_w3ngvz.png',
    categoryVideo:
      'https://res.cloudinary.com/supertramp69420/video/upload/v1649247529/mediaHive/1608229455-star-wars_whyu6s.mp4'
  },
  {
    _id: uuid(),
    categoryName: 'Nat Geo',
    categoryImg:
      'https://res.cloudinary.com/supertramp69420/image/upload/v1649247524/mediaHive/viewers-national_v3hltj.png',
    categoryVideo:
      'https://res.cloudinary.com/supertramp69420/video/upload/v1649247530/mediaHive/1564676296-national-geographic_heh0za.mp4'
  }
];
