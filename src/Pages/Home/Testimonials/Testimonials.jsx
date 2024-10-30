import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://bistro-milanese-server.onrender.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="my-20">
            <SectionTitle
                subHeading="What our client says"
                heading="Testimonials"
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper my-20 lg:w-3/4">

                {
                    reviews.map(review =>
                        <SwiperSlide
                            key="_id"
                        >

                            <div className=" flex flex-col items-center px-20">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <h3 className="text-orange-500 text-xl">{review.name}</h3>
                                <p>{review.details}</p>
                            </div>
                        </SwiperSlide>)
                }
            </Swiper>

        </div>
    );
};

export default Testimonials;