
// step-8__________________________________________________________________________________

import SectionTitle from "../Shared/SectionTitle";
import racImg from '../../../assets/icon/Group.png';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";



const Testomonial = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>

            <SectionTitle heading={'Testomonials'} subHeading={'What Our Customer Says'}></SectionTitle>

            <div className="mx-auto w-30 md:w-30 mb-10 ">
              
            </div>

            <img className="mx-auto " src={racImg} alt="" />

            <div>
              <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                 
                 
                 {
                     reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="m-15 md:m-24 flex flex-col items-center">
  
                              <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                              />
                          
                            <p>{review.details}</p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>
                        </div>
                     </SwiperSlide>)
                 }
             </Swiper>
            </div>
            
        </div>
    );
};

export default Testomonial;