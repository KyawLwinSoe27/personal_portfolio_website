import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import './projects.css';
import projects from '../../assets/data/projects';
import ProjectItem from './ProjectItem';

SwiperCore.use([Navigation]);

const Projects_Section = () => {
    return (
        <div className='project_section'>
            <div className='heading-text'>
                <p>Some of my recent works</p>
                <h2 className='service_text'>Projects</h2>
            </div>
            <div className='project_allItems'>
                <Swiper spaceBetween={30}
                slidesPerView={1}
                navigation
                breakpoints={{
                  // when window width is >= 640px
                  640: {
                    slidesPerView: 1,
                  },
                  // when window width is >= 768px
                  768: {
                    slidesPerView: 2,
                  },
                  // when window width is >= 1200px
                  1200: {
                    slidesPerView: 3,
                  },
                }}>
                    {projects.map((project, index) => {
                        if(index >= 5) return;
                        return(
                            <SwiperSlide key={project.id}>
                                <ProjectItem 
                                title={project.name}
                                img={project.img}
                                desc={project.desc}/>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>


        </div>
    )
}

export default Projects_Section