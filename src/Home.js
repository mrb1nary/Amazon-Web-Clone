import React from 'react'
import Product from './Product.js'
import "./css/Home.css"

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='banner-image' width='100%' />
        

        <div className='home__row1'>
          <Product 
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={11.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            rating={4}
          />


           <Product
            
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />


          <Product 
            title="Intel Core i9-12900KF Desktop Processor 16 (8P+8E) Cores up to 5.2 GHz Unlocked  LGA1700 600 Series Chipset 125W"
            price={579.5}
            rating={5}
            image="https://m.media-amazon.com/images/I/51q4V9fOZSL._AC_SL1037_.jpg" 
          />
          <Product
            title="AMD Ryzen 9 5900X 12-core, 24-Thread Unlocked Desktop Processor"
            price={449.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/616VM20+AzL._AC_SL1384_.jpg"

          
          />
          
          
        </div>

        <div className='home__row2'>
          <Product
            title="Apple iPhone 12 Pro Max, 256GB, Pacific Blue - Unlocked"
            price={1049}
            rating={5}
            image="https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_SL1500_.jpg"
          />
          <Product 
            title="2021 Apple MacBook Pro with Apple M1 Chip"
            price={1949}
            rating={5}
            image="https://m.media-amazon.com/images/I/61vFO3R5UNL._AC_SL1500_.jpg"
          />
          <Product
              title="2021 Apple iPad Mini (Wi-Fi, 256GB) - Pink"
              price={649}
              rating={4}
              image="https://m.media-amazon.com/images/I/71d9VedmTsL._AC_SL1500_.jpg"
          />
        </div>

        <div className='home__row3'>
          <Product 
            title="SAMSUNG 85-Inch Class Neo QLED QN85A Series - 4K UHD Quantum HDR 24x Smart TV with Alexa Built-in and 6 speaker Object Tracking Sound - 60W, 2.2.2CH (QN85QN85AAFXZA, 2021 Model)"
            price={2797}
            rating={5}
            image="https://m.media-amazon.com/images/I/816z9yHvl4L._AC_SL1500_.jpg"
          />
          <Product 
            title="Plаystаtion 5 Disc Version РS5 Consоle - 4K-TV Gаming, 16GB GDDR6 RАM, 8K Output, WiFi 6. Ultra-High Speed 1ТB SSD + TurbоTаx 2018 Hоme and Businеss"
            price={899}
            rating={4}
            image="https://m.media-amazon.com/images/I/51+WZVDZT0L._AC_SL1500_.jpg"
          />
          
        </div>
        </div>
    </div>
  )
}

export default Home