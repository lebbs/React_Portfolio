import React from 'react';
import Content from '../components/Content';

import Hero from '../components/Hero';

function AboutPage(props){

    return(
        <div>
            <Hero  title = {props.title}/>
            <Content>
                <p> 
                    Hello, my name is Joonas Leppänen and i am 
                    currently studying my last year in
                    Savonia University of Applied
                    Sciences. I am going to graduate
                    by the end of december 2020.</p>

                    <p>My goal is to find a job with
                    interesting and new technologies
                    that will help me to develop my
                    skills even further. I am motivated
                    worker, because i want to advance
                    in my career and learn as much as
                    possible while doing so.</p>

                    <p>My dream is to be my own boss and start a company that uses new and innovative ideas to succeed.
                        (Currently working on some ideas including Amazon AWS and IoT devices.) </p>
            </Content>
        
        </div>

    );


}



export default AboutPage;