import React from 'react';
import Card from './Card';

const cardData = [
  {
    name: 'Jessica Lane',
    position: 'Chief Executive Officer',
    image: 'https://i.pravatar.cc/300?img=1',
    title: 'Thank You!',
    message: "Your visionary leadership and unwavering dedication have profoundly shaped our journey. We're so grateful for your guidance and wish you boundless success!",
  },
  {
    name: 'Jessica Lane',
    position: 'Chief Executive Officer',
    image: 'https://i.pravatar.cc/300?img=1',
    title: 'Thank You!',
    message: "Your visionary leadership and unwavering dedication have profoundly shaped our journey. We're so grateful for your guidance and wish you boundless success!",
  },
  {
    name: 'Jessica Lane',
    position: 'Chief Executive Officer',
    image: 'https://i.pravatar.cc/300?img=1',
    title: 'Thank You!',
    message: "Your visionary leadership and unwavering dedication have profoundly shaped our journey. We're so grateful for your guidance and wish you boundless success!",
  },
  {
    name: 'Jessica Lane',
    position: 'Chief Executive Officer',
    image: 'https://i.pravatar.cc/300?img=1',
    title: 'Thank You!',
    message: "Your visionary leadership and unwavering dedication have profoundly shaped our journey. We're so grateful for your guidance and wish you boundless success!",
  },
  {
    name: 'Jessica Lane',
    position: 'Chief Executive Officer',
    image: 'https://i.pravatar.cc/300?img=1',
    title: 'Thank You!',
    message: "Your visionary leadership and unwavering dedication have profoundly shaped our journey. We're so grateful for your guidance and wish you boundless success!",
  },
  {
    name: 'Jessica Lane',
    position: 'Chief Executive Officer',
    image: 'https://i.pravatar.cc/300?img=1',
    title: 'Thank You!',
    message: "Your visionary leadership and unwavering dedication have profoundly shaped our journey. We're so grateful for your guidance and wish you boundless success!",
  },
  {
    name: 'Sarah Chen',
    position: 'Head of Product',
    image: 'https://i.pravatar.cc/300?img=3',
    title: 'Thank You!',
    message: "Your innovation and dedication to delivering exceptional products have truly set us apart. We're so thankful and wish you continued brilliance!",
  },
];

export default function CardLoader() {
  return (
    <div className="container mx-auto px-4 py-5 md:py-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6" id="cards-container">
        {cardData.map((person, index) => (
          <Card
            key={index}
            image={person.image}
            name={person.name}
            position={person.position}
            title={person.title}
            message={person.message}
          />
        ))}
      </div>
    </div>
  );
}