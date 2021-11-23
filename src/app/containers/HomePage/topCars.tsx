import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { ICar } from '../../../typings/car';
import { Car } from '../../components/car';
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { resolve } from 'dns';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../../components/responsive';

const TopCarsContainer = styled.div`
  ${tw`
        max-w-screen-lg
        w-full
        flex
        flex-col
        items-center
        justify-center
        pr-4
        pl-4
        md:pl-0
        md:pr-0
    `}
`;

const Title = styled.h2`
  ${tw`
        text-4xl
        lg:text-5xl
        text-black
        font-black
        text-center
    `}
`;

const CarsContainer = styled.div`
  ${tw`
        w-full
        flex
        flex-wrap
        justify-center
        mt-7
        md:mt-10
    `}
`;

export function TopCars() {
  const [current, setCurrent] = useState(0);

  const isMobile = useMediaQuery({maxWidth: SCREENS.sm})

  const testCar: ICar = {
    name: 'Audi S3 Car',
    mileage: '10k',
    thumbNailStr: 'https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg',
    dailyPrice: 70,
    monthlyPrice: 1600,
    gearType: 'Auto',
    gas: 'Petrol',
  };

  const testCar2: ICar = {
    name: 'HONDA CITY 5 Seater Car',
    mileage: '20k',
    thumbNailStr: 'https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg',
    dailyPrice: 50,
    monthlyPrice: 1500,
    gearType: 'Auto',
    gas: 'Petrol',
  };

  const cars = [
    <Car {...testCar} />,
    <Car {...testCar} />,
    <Car {...testCar} />,
    <Car {...testCar} />,
    <Car {...testCar2} />,
    <Car {...testCar2} />,
    <Car {...testCar2} />,
    <Car {...testCar2} />,
  ];

  const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length/4);

  return (
    <TopCarsContainer>
      <Title>The best deals!</Title>
      <CarsContainer>
        <Carousel
          plugins={['infinite',
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 4,
              },
            },
          ]}
          breakpoints={
              {
                  640: {
                      plugins: [
                          {
                              resolve:slidesToShowPlugin,
                              options: {
                                  numberOfSlides:1
                              }
                          }
                      ]
                  },
                  900: {
                    plugins: [
                        {
                            resolve:slidesToShowPlugin,
                            options: {
                                numberOfSlides:2
                            }
                        }
                    ]
                }
              }
          }
          value={current}
          onChange={setCurrent}
          slides={cars}
        />
        <Dots value={current} onChange={setCurrent} number={numberOfDots} />
      </CarsContainer>
    </TopCarsContainer>
  );
}
