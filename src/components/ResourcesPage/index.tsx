import React from "react";

import './style.less';

const resources: { section_title: string, section_resources: { resource_number: number, resource_name: string, resource_description: React.ReactNode, resource_link: string, resource_image: string }[]}[] = [
    {
        section_title: "Food",
        section_resources: [
            {
                resource_number: 0,
                resource_name: "Triton Food Pantry",
                resource_description: "The Triton Food Pantry at UCSD is a great way to help meet your nutritional needs on a tight budget. Food items are assigned a point value, and UCSD students are provided 10 points a week, free of charge. Most of the food items here are dried or canned, but they do provide fruits or vegetables once a week. Make sure you bring your ID card.",
                resource_link: "https://basicneeds.ucsd.edu/food-security/pantry/index.html",
                resource_image: "https://tritonmag.com/wp-content/uploads/2016/12/30570487953_9c2f8ac451_z.jpg",
            },
            {
                resource_number: 1,
                resource_name: "San Diego Food Bank",
                resource_description: <>There are numerous food banks scattered across San Diego County. Using <a target="_blank" rel="noopener noreferrer" href="https://sandiegofoodbank.org/gethelp/"><span className="resources-page-link">this</span></a> tool, you can search for a food bank near you. This tool also lists the types of food items available at each location as well as the days and hours of food distribution so you can plan your route and meals in advance. Make sure you are eligible to use the food bank before arriving at a location.</>,
                resource_link: "https://sandiegofoodbank.org/gethelp/",
                resource_image: "https://www.dmtc.com/data/assets/Calendar%20Images/2017/Bing-Season/SD-Food-Bank.jpg",
            },
            {
                resource_number: 2,
                resource_name: "CalFresh",
                resource_description: <>CalFresh is a program that gives eligible students up to $250 a month individually in credit for food. Most supermarkets and grocery stores in San Diego accept CalFresh credit, so you may never have to spend cash on food while on CalFresh. Eligible students include students awarded Cal Grant A or B, working 20 or more hours a week, or who qualify for work-study, among other things.  We strongly encourage you to apply <a target="_blank" rel="noopener noreferrer" href="https://www.getcalfresh.org/?source=dssfood"><span className="resources-page-link">here</span></a> to CalFresh if you are on a tight food budget.</>,
                resource_link: "https://www.cdss.ca.gov/calfresh",
                resource_image: "https://media.abc10.com/assets/KXTV/images/55ab6878-4622-41a5-9d0e-be95e5d2f964/55ab6878-4622-41a5-9d0e-be95e5d2f964_1140x641.jpg",
            },
        ],
    },
    {
        section_title: "Housing",
        section_resources: [
            {
                resource_number: 3,
                resource_name: "UCSD Off-campus Housing Office",
                resource_description: <>Need a place to stay off-campus? The UCSD Off-campus Housing Office has numerous resources to help you search for affordable housing options. If you suddenly find yourself in a position with no place to stay, you can apply for emergency housing <a target="_blank" rel="noopener noreferrer" href="https://basicneeds.ucsd.edu/housing-resources/emergency-housing/index.html"><span className="resources-page-link">here</span></a> to have a place to stay for up to 30 days.</>,
                resource_link: "https://basicneeds.ucsd.edu/housing-resources/index.html",
                resource_image: "https://students.ucsd.edu/_images/campus-locations/the-village.jpg",
            },
        ],
    },
    {
        section_title: "Financial Well-being",
        section_resources: [
            {
                resource_number: 4,
                resource_name: "UCSD Financial Aid Office",
                resource_description: "Attending UCSD can be a financial burden, but the Financial Aid Office is here to help. If you have any questions navigating the FAFSA, paying tuition or loans, or applying for scholarships, you can have them answered promptly by visiting the UCSD Financial Aid Office near Price Center with an appointment or contacting them via phone or email. Financial literacy counseling for students is available here as well.",
                resource_link: "https://basicneeds.ucsd.edu/financial-wellness/index.html",
                resource_image: "https://basicneeds.ucsd.edu/_images/ucsd-photos/geisel.jpg",
            },
    
        ],
    },
    {
        section_title: "Academic/Career Assistance",
        section_resources: [
            {
                resource_number: 5,
                resource_name: "Jacobs Job Portal",
                resource_description: "CSE, BE, ECE, MAE, NE, and SE majors attending UCSD are members of the Jacobs School of Engineering at UCSD. If you are one of these majors, you have access to the Jacobs job portal where you can apply to engineering-related jobs at companies looking specifically for UCSD students. Companies like Qualcomm, Amazon, and Oracle have hired engineers via the Jacobs job portal in the past. Whether you are looking for an internship, coop, or a full-time engineering position, applying via the Jacobs job portal is a great way to be considered by employers.",
                resource_link: "https://jacobsschool.ucsd.edu/cap/job-internship",
                resource_image: "https://jacobsschool.ucsd.edu/sites/default/files/groups/idea/pei.jpg",
            },
            {
                resource_number: 6,
                resource_name: "OASIS Tutoring",
                resource_description: "Struggling to understand concepts in mathematics or science-related courses? UCSD's Office of Academic Support and Instructional Services offers tutoring programs meant for you as a UCSD student, free of charge. You can register for group tutoring on specific topics like Organic Chemistry and Math 18, or you can request individual tutoring for any math/science topic here.",
                resource_link: "https://oasis.ucsd.edu/academic-services/mstp-folder/index.html",
                resource_image: "https://oasis.ucsd.edu/_images/mstp-images/mstpbannner1.PNG",
            },
            {
                resource_number: 7,
                resource_name: "Teaching + Learning Commons",
                resource_description: <>The Teaching + Learning Commons is a great hub of resources for students to gain academic support. <a target="_blank" rel="noopener noreferrer" href="https://commons.ucsd.edu/_files/tlc_services_overview.pdf"><span className="resources-page-link">This</span></a> is a list of the full services they offer, which includes 1:1 content tutoring for a variety of subjects (ex: MATH 20C, PHYS 2B, etc), as well as a writing hub service for 1:1 appointments for just about any writing assignment. We recommend this resource for anyone seeking academic support without judgment, especially those who prefer to learn through peer tutoring!</>,
                resource_link: "https://commons.ucsd.edu/",
                resource_image: "https://commons.ucsd.edu/_images/commons-central-images/architectviewofcommons.jpeg",
            },
        ],
    },
    {
        section_title: "Transportation",
        section_resources: [
            {
                resource_number: 8,
                resource_name: "Transportation Services at UCSD",
                resource_description: <>Navigating around and outside UCSD's campus can be quite challenging without access to a car. Fortunately, UCSD offers a variety of transportation services. If you want to explore off-campus, you can use the free electronic bus pass UCSD provides for each student to ride either a bus or the trolley connecting UCSD and the surrounding area. If you need to get somewhere within campus safely and promptly, options like shared bikes/scooters, Triton Transit shuttles, and safety escorts are available, among other options. Learn more about the different transportation options available to you as a student <a target="_blank" rel="noopener noreferrer" href="https://transportation.ucsd.edu/"><span className="resources-page-link">here</span></a>.</>,
                resource_link: "https://transportation.ucsd.edu/",
                resource_image: "https://transportation.ucsd.edu/_images/cta/TritonTransit-cta.jpg",
            },
        ],
    },
    {
        section_title: "Health/Counseling Services",
        section_resources: [
            {
                resource_number: 9,
                resource_name: "Student Health Services at UCSD",
                resource_description: <>UCSD's Student Health Services (SHS) is a great resource for medical needs and health checkups. Whether you need a vaccine, treatment for a condition, or just a physical checkup, SHS provides excellent medical care. To make an appointment, visit this <a target="_blank" rel="noopener noreferrer" href="https://studenthealth.ucsd.edu/"><span className="resources-page-link">link</span></a> to either call or schedule an appointment online. We recommend visiting SHS especially if you have UC SHIP insurance which usually pays for most SHS appointments and procedures.</>,
                resource_link: "https://studenthealth.ucsd.edu/",
                resource_image: "https://s3-media0.fl.yelpcdn.com/bphoto/sRwnNXlaD3CXosZXkSmN3w/o.jpg",
            },
            {
                resource_number: 10,
                resource_name: "CAPS at UCSD",
                resource_description: <>UCSD's Counseling and Psychological Services (CAPS) is a wonderful all-around resource for mental health issues. Life can be hard and stressful sometimes, and you are not alone if you feel that way. If you want advice or just need someone to talk to, this is the resource for you. CAPS takes mental health seriously, and offers advice and counseling free of charge to enrolled UCSD students. You can make an appointment online <a target="_blank" rel="noopener noreferrer" href="https://caps.ucsd.edu/make-appointment/appointments.html"><span className="resources-page-link">here</span></a>.</>,
                resource_link: "https://caps.ucsd.edu/",
                resource_image: "https://grad.ucsd.edu/_images/grad-life-images/health-wellbeing-images/caps-brochure.jpg",
            },
            {
                resource_number: 11,
                resource_name: "San Diego Behavioral Health Services",
                resource_description: <>The Country of San Diego has funded programs focusing on drug and alcohol addiction treatment. Both prevention and treatment programs for substance addiction can be found on their website. If you or someone you know is seriously and negatively affected by alcohol or substance abuse, please let them know about the resources available to help them before it is too late. More information about such programs is available <a target="_blank" rel="noopener noreferrer" href="https://www.sandiegocounty.gov/hhsa/programs/bhs/alcohol_drug_services/"><span className="resources-page-link">here</span></a>.</>,
                resource_link: "https://www.sandiegocounty.gov/hhsa/programs/bhs/alcohol_drug_services/",
                resource_image: "https://i.ytimg.com/vi/l5H5yiFLlyU/maxresdefault.jpg",
            },
        ],
    },
    {
        section_title: "Sexual Assault",
        section_resources: [
            {
                resource_number: 12,
                resource_name: "CARE at SARC",
                resource_description: "Unfortunately, we live in a world where sexual and gender-based violence is a reality. If you or someone you know is a victim of a crime like rape, dating violence, domestic violence, or stalking, do not hesitate to ask CARE at the UCSD Sexual Assault Resource Center for advice as to how to report the crime and how to recover from it. In addition to counseling, SARC offers workshops, training, and different ways to heal and recover physically and mentally. The CARE hotline is on call 24 hours every day at (858) 534-5793.",
                resource_link: "https://care.ucsd.edu/",
                resource_image: "https://ucsdnews.ucsd.edu/news_uploads/sarc-hero.jpg",
            },
            {
                resource_number: 13,
                resource_name: "San Diego Center for Community Solutions",
                resource_description: "The San Diego Center for Community Solutions (CCS) is another resource for victims of sexual assault and violence. The CCS operates the only rape crisis center in the city of San Diego, and they provide legal representation specifically for sexual assault victims in addition to counseling. CCS staff and volunteers go through constant training in order to be able to provide the best care possible. They operate a 24-hour hotline at (888) 385-4657.",
                resource_link: "https://www.ccssd.org/learn/resources/sexual-assault.html",
                resource_image: "https://www.livewellsd.org/content/dam/livewell/Partners/PartnerLogos/ccs-logo-1x1.jpg",
            },
        ],
    },
    {
        section_title: "Legal Advice",
        section_resources: [
            {
                resource_number: 14,
                resource_name: "UCSD Student Legal Services",
                resource_description: "As a UCSD student, you have access to free legal advice. While they do not provide an attorney for ongoing representation, you can get a free consultation and even get a referral or learn how to talk to an attorney. This is especially helpful because there are all sorts of attorneys out there, and UCSD Student Legal Services can help you find the right one. We really recommend giving it a try if you have a situation that involves the law. For example, some of our friends had a housing situation where they weren't sure if certain procedures were allowed, and UCSD Student Legal Services was helpful in giving advice according to their lease and the housing laws in San Diego.",
                resource_link: "https://students.ucsd.edu/sponsor/student-legal/",
                resource_image: "https://students.ucsd.edu/_images/sponsor/student-legal/sls-window.jpg",
            },
        ],
    },
];

const ResourcesPage: React.FC = () => {
    return (
        <div className="resources-page">
            <h2 className="resources-page-title">Resources</h2>
            {/* <div> */}
                {resources.map((section, r_idx) => (
                    <div className="resources-page-section" key={r_idx}>
                        <h3 className="resources-page-section-title">{section.section_title}</h3>
                        {section.section_resources.map((resource, s_idx) => (
                            <div className="resources-page-resource" key={s_idx}>
                                {resource.resource_number % 2 === 0 && <img className="resources-page-resource-image left" src={resource.resource_image} alt={resource.resource_name}></img>}
                                <p className="resources-page-resource-text">
                                    <a target="_blank" rel="noopener noreferrer" href={resource.resource_link}>
                                        <span className="resources-page-resource-title">{resource.resource_name}</span>
                                    </a>
                                    {': '}
                                    {resource.resource_description}
                                </p>
                                {resource.resource_number % 2 === 1 && <img className="resources-page-resource-image right" src={resource.resource_image} alt={resource.resource_name}></img>}
                            </div>
                        ))}
                    </div>
                ))}
            {/* </div> */}
            <p className="resources-page-message">Have a suggestion for a resource? Email the team at: <a href="mailto:the.project.tulips@gmail.com"><span className="resources-page-email">the.project.tulips@gmail.com</span></a></p>
        </div>
    );
}

export default ResourcesPage;
