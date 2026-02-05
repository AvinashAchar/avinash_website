import React from 'react'
import './works.css';
import Portfolio1 from '../../assets/portfolio-1new.png';
import Portfolio2 from '../../assets/portfolio-2new.png';
import Portfolio3 from '../../assets/portfolio-3new.png';
import Portfolio4 from '../../assets/portfolio-4new.png';
import Portfolio5 from '../../assets/portfolio-5new.png';
import Portfolio6 from '../../assets/portfolio-6new.png';


const works = () => {
  return (
    <div>
      <section id='works'>
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="workDesc"> I take pride in paying attention to the smallest details and making sure that my works is pixel perfect.I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.  </span>
            <div className="worksImgs">
              <img src={Portfolio1} alt="" className="worksImg"/>
              <img src={Portfolio2} alt="" className="worksImg"/>
              <img src={Portfolio3} alt="" className="worksImg"/>
              <img src={Portfolio4} alt="" className="worksImg"/>
              <img src={Portfolio5} alt="" className="worksImg"/>
              <img src={Portfolio6} alt="" className="worksImg"/>

            </div>
            <button className="workBtn">See More</button>
      </section>
    </div>
  );
}

export default works
