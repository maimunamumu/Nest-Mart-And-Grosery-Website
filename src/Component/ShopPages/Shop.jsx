import React from 'react';
import Banner3 from '../SharedFolder/Banner3/Banner3';
import useData from '../../hooks/useData';
import ShopCards from './ShopCards/ShopCards';
import RightPart from './RightPart/RightPart';
import ShopDeals from './ShopDeals/ShopDeals';
import Banner2 from '../SharedFolder/Banner2/Banner2';
import banner9 from '../../assets/banner-9.png'
import banner10 from '../../assets/banner-10.png'
import TopFooter from '../Footer/TopFooter/TopFooter';


const Shop = () => {
    const{products,categories,sections}=useData()
    return (
        <div className=' my-8'>
            <Banner3></Banner3>
            <div className='lg:grid lg:grid-cols-12 gap-4 mx-auto container lg:px-8 mt-6 px-5'>

            <div className='lg:col-span-10'>
               <ShopCards products={products}></ShopCards>
            <ShopDeals products={products}></ShopDeals>
            </div>
            <div className='lg:col-span-2'>
                   <RightPart categories={categories} sections={sections}></RightPart>
            </div>
            </div>
          <div className='mx-auto container lg:px-8 px-5'>
         <Banner2 bgImage1={banner10} image={banner9} w="w-130 " mt="mt-17" ml="lg:ml-20 " title={"Stay home & get your daily needs from our shop"} highlight="Nest Mart" subtitle="Start You'r Daily Shopping with "></Banner2>
     </div>
            <TopFooter></TopFooter>
        </div>
    );
};

export default Shop;