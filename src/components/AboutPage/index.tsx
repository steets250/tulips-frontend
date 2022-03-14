import React from "react";

import './style.less';

const AboutPage: React.FC = () => {
    return (
        <div className="about-page">
            <h2 className="about-page-title">About the Team</h2>
            <div className="about-page-profiles">
                <div className="about-page-profile">
                    <img className="about-page-profile-photo" src="/Ivy.png" alt="Ivy Chan"/>
                    <p className="about-page-profile-name">Ivy</p>
                </div>
                <div className="about-page-profile">
                    <img className="about-page-profile-photo" src="/Daniel.png" alt="Daniel Truong"/>
                    <p className="about-page-profile-name">Daniel</p>
                </div>
                <div className="about-page-profile">
                    <img className="about-page-profile-photo" src="/Steven.png" alt="Steven Steiner"/>
                    <p className="about-page-profile-name">Steven</p>
                </div>
                <div className="about-page-profile">
                    <img className="about-page-profile-photo" src="/Joachim.png" alt="Joachim Do"/>
                    <p className="about-page-profile-name">Joachim</p>
                </div>
            </div>
            <p className="about-page-paragraph">Hello! We are a team of undergraduate engineering students enrolled in CSE 194: Race, Gender, and Computing at the University of California, San Diego. In this class, we learned how social biases can negatively affect different groups of people, especially when it comes to the computing field. We wanted to better understand how such discrimination affects students’ opinions and outlook on their future in computing.</p>
            <br />
            <p className="about-page-paragraph">Social biases occur when people are judged based on stereotypes or misconceptions based on a group they belong to. Such biases can happen consciously or unconsciously, so many people may not even know they are biased. Microaggressions are indirect or subtle forms of discrimination against members of a marginalized group that result from social biases. It is important to acknowledge and prevent microaggressions from occurring, since victims of microaggressions may be greatly harmed no matter how small the microaggression is. A main goal of this project is to inform people of the harmful effects of microaggressions in order to prevent them from happening. </p>
            <br />
            <p className="about-page-paragraph">For our final project, we wanted to give those affected by social biases a platform to anonymously share and inform others of their experiences. This website includes an interactive discussion board component where victims of social biases can do just that. Our moderators will initiate posts with relevant guiding questions to begin with, and our hope is that this will spark conversations among users who may respond to each other with their own experiences of social bias and microaggressions. The end result will be an informed and empathetic community whose members are able to correct their own social biases and better understand what others go through.</p>
            <br />
            <p className="about-page-paragraph">The other component of our project is a report based on an interview study conducted on fellow UCSD computing students. The goal of this was to better understand directly what obstacles and challenges students face in the computing field as a result of social biases, and to have students learn about and examine their own social bias. We obtained a clearer picture of just how extensive a problem social bias is in the UCSD computing community. To help combat this, we included links on this site to several resources and programs UCSD students may find helpful.</p>
        </div>
    );
}

export default AboutPage;
