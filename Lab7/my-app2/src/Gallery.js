// Gallery.js
import React from 'react';
import GoodsCard from './GoodsCard';
import img1 from "./img/1.jpg"
import img2 from "./img/2.jpg"
import img3 from "./img/3.png"
import img4 from "./img/4.png"
import img5 from "./img/5.jpg"
import img6 from "./img/6.png"


const Gallery = () => {
  const goodsData = [
    { id: 1, name: 'Товар 1', price: 100, imageSrc: img1 },
    { id: 2, name: 'Товар 2', price: 150, imageSrc: img2 },
    { id: 3, name: 'Товар 3', price: 200, imageSrc: img3 },
    { id: 4, name: 'Товар 4', price: 120, imageSrc: img4 },
    { id: 5, name: 'Товар 5', price: 180, imageSrc: img5 },
    { id: 6, name: 'Товар 6', price: 250, imageSrc: img6 },
  ];

  return (
    <div className="gallery">
      {goodsData.map((goods) => (
        <GoodsCard
          key={goods.id}
          name={goods.name}
          price={goods.price}
          imageSrc={goods.imageSrc}
        />
      ))}
    </div>
  );
};

export default Gallery;
