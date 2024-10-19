import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import first from '/images/first1.jpg'; 
import second from '/images/second2.png';
import third from '/images/third3.jpeg';
import fourth from '/images/fourth4.jpg';
import fifth from '/images/fifth5.jpeg';
import './Slideshow.css'; 

const slides = [
    {
        id: 1,
        imageUrl: first,
        title: 'انضم كطبيب أو أخصائي',
        description: 'كن جزءاً من فريقنا وقدم الدعم للآخرين.',
        buttonLink: '/join-doctors',
        buttonText: 'انضم الآن'
    },
    {
        id: 2,
        imageUrl: second,
        title: 'احجز مع دكتور',
        description: 'احصل على استشارة مخصصة حسب احتياجاتك.',
        buttonLink: '/book-doctor',
        buttonText: 'احجز جلسة'
    },
    {
        id: 3,
        imageUrl: third,
        title: 'احجز مع أخصائي',
        description: 'تواصل مع أخصائي لتحسين صحتك النفسية.',
        buttonLink: '/book-specialist',
        buttonText: 'احجز الآن'
    },
    
    {
        id: 4,
        imageUrl: fourth,
        title: 'احجز دورات تدريبية',
        description: 'استفد من دورات تدريبية متخصصة لتطوير مهاراتك.',
        buttonLink: '/course-booking',
        buttonText: 'احجز دورة'
    },
    {
        id: 5,
        imageUrl: fifth,
        title: 'إرشاد أسري',
        description: 'نحن نقدم الدعم للعائلات لتحسين ديناميكياتهم.',
        buttonLink: '/family-counseling',
        buttonText: 'تعرف على المزيد'
    }
];

const Slideshow = () => {
    return (
        <div className="slideshow">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop={true}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="bdt-slideshow-item">
                            <div className="bdt-ps-dragon-bg">
                                <img 
                                    src={slide.imageUrl} 
                                    alt={slide.title} 
                                    className="bdt-ps-slide-img" 
                                    loading="lazy" 
                                    width="1920" 
                                    height="600"
                                />
                                <div className="bdt-overlay"></div>
                            </div>
                            <div className="bdt-prime-slider-wrapper">
                                <div className="bdt-prime-slider-content">
                                    <h1 className="bdt-title-tag">{slide.title}</h1>
                                    <p>{slide.description}</p>
                                    <NavLink 
                                        to={slide.buttonLink} 
                                        className="bdt-ps-dragon-button" 
                                        aria-label={slide.buttonText}
                                    >
                                        {slide.buttonText}
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slideshow; 
