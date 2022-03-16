import React from "react";
import StoryCard from "../StoryCard";
import * as Charts from './charts';
import './style.less';

const ReportPage: React.FC = () => {
    return (
        <div className="report-page">
            <div className="report-page-contents">
                <h2 className="report-page-title">Data Report</h2>
                <p className="report-page-paragraph">To better understand the impact of social biases on UCSD students, we created a Google Forms survey to hear about their experiences. The survey composed of three main sections. The first section asked students to rate how much they agreed or disagreed on statements regarding their UCSD experience, as well as how familiar they are with the terms ‘social bias’ and ‘microaggressions’. The second section gives information on how we defined those terms, and then proceeded to ask about their experiences with different types of microaggressions and where they witness or experience social biases on campus. The last section asked participants about their identity and whether or not they’d like to participate further with an interview. Due to time constraints, the survey was only open from February 26, 2022 to March 2, 2022 and can be found on this link. We had 60 survey participants, and 4 of them opted in for an additional brief interview. These interviews are meant to supplement and give perspective to the survey data collected,. we have visual aids throughout this page, as well as the survey questions itself</p>
                <h3 className="report-page-title">Survey Profile</h3>
                <p className="report-page-paragraph">When gathering information on how people view and experience social bias, it is necessary to consider demographics since people of certain groups may experience social bias to a different extent than people of other groups. We collected demographic information from survey respondents at the end of the survey by asking them what gender they identified as and what race(s) they belong to. Instead of asking these demographic questions towards the beginning of the survey, we intentionally asked them last in order to avoid stereotype threat, where people may change their answers because they are afraid that their answers may affirm stereotypes associated with their demographic. All survey questions regarding identity were either optional or declinable in some way, just in case someone was not comfortable sharing.</p>
                <h3 className="report-page-subtitle">How do you describe yourself?* (60 responses)</h3>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ width: "300px", height: "300px" }} >
                        <Charts.GenderBreakdown />
                    </div>
                    <p className="report-page-paragraph">Out of 60 survey participants, 27 identified as female, 32 as male, and 1 as non-binary. This question was required, though one option that isn’t represented in this chart was “Prefer not to disclose” as no one chose it. Because gender identity could potentially be a sensitive topic, we intentionally worded this question this way as opposed to something like “what are you?” which may come across as condescending.</p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        <h3 className="report-page-subtitle">Which of these races do you identify with? (56 responses)</h3>
                        <div style={{ width: "726px", height: "300px" }} >
                            <Charts.RaceBreakdown />
                        </div>
                    </div>
                    <div>
                        <h3 className="report-page-subtitle">Are you Hispanic or Latino?* (60 Responses)</h3>
                        <div style={{ width: "300px", height: "300px" }} >
                            <Charts.HispanicBreakdown />
                        </div>
                    </div>
                </div>
                <p className="report-page-paragraph">We believe that the gender identity ratio obtained from our survey is fairly balanced for men and women, though we do wish we could have heard from more non-binary individuals. However, racial demographics were a different story. 80% of survey respondents were Asian, for example, with few if any Hispanic or Black or Native American individuals. This is likely due to the demographics of engineering departments at UCSD, where a majority of students are Asian. Nevertheless, we recognize that the racial makeup of survey respondents may not match society as a whole, which may make some results from the survey not perfectly representative of the real world.</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        <h3 className="report-page-subtitle">What department do you take most of your classes in?*</h3>
                        <div style={{ width: "300px", height: "300px" }} >
                            <Charts.DepartmentBreakdown />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <img src="/placeholder-1.png" alt="Profile Placeholder 1" style={{ height: "100px", width: "100px" }}/>
                            <img src="/placeholder-2.png" alt="Profile Placeholder 2" style={{ height: "100px", width: "100px" }}/>
                            <img src="/placeholder-3.png" alt="Profile Placeholder 3" style={{ height: "100px", width: "100px" }}/>
                            <img src="/placeholder-4.png" alt="Profile Placeholder 4" style={{ height: "100px", width: "100px" }}/>
                        </div>
                        <h3 className="report-page-subtitle">Our interviewees</h3>
                        <p className="report-page-paragraph">Our interviewees’ real names will remain anonymous, and we will refer to them by alternative names (Joe, Jane, Candice, Connor) along with basic information on their identity, as per their requests. Joe is a 4th year mechanical engineering student whose pronouns are he/him/his. Jane is a 3rd year cognitive science student whose pronouns are she/her/hers. Candice is a 4th year computer science student whose pronouns are she/her/hers. Connor is a 2nd year computer engineering major whose pronouns are he/him/his.</p>
                    </div>
                </div>
                <p className="report-page-paragraph">Overall, we recognize that our pool of participants is not that diverse, however, as we opened this survey only to UCSD students, the participants pool is fairly representative of UCSD’s engineering scene (can hyperlink to https://diversity.ucsd.edu/accountability/undergrad.html ). One thing to note is that for this survey question, we used checkboxes so people could select more than one race, rather than just an option of “2 or more races” as we feel that it’s important to understand the groups they belong to as well. We also have several different STEM majors from different departments represented, though the majority of participants primarily take classes in the CSE department. We will use the demographic information from the survey to keep track of how different identities can affect views on and experiences with social bias. In particular, we will look at the disparities amongst gender identity, as we had significant data and representation.</p>
                <h3 className="report-page-title">Significant Statistics &amp; Context</h3>
                <p className="report-page-paragraph">In this section, we are going to highlight statistically significant metrics that we found in our data regarding the experiences between different groups at UCSD. We interpreted these metrics to be “statistically significant” via null hypothesis testing with a threshold p-value of 0.05. In other words, in each of the following scenarios, our null hypothesis is that there are no correlations between the different groups. We only consider a metric to be significant if we find that the p-value is under 0.05, in other words the probability that we would find this data if there was no correlation between different groups.</p>
                <p className="report-page-paragraph">Note: For metrics which we compare the experience of different genders, we did not consider nonbinary as we only had one response, which meant there is 0 variability in data. 0 variability in data means that we are unable to find a p-value, thus we cannot use statistics to compare this group. However, We still included it within our charts for full transparency.</p>
                <p className="report-page-paragraph">PLACES FOR LINKS AND STUFF</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        <div style={{ width: "300px", height: "300px" }} >
                            <img src="https://via.placeholder.com/300" alt="Placeholder" />
                        </div>
                    </div>
                    <div>
                        <h3 className="report-page-bolded">People often talk over or shrug off my ideas in group settings.</h3>
                        <p className="report-page-paragraph">One common theme we often hear is that in STEM, women are often taken less seriously than men. For example, one of our female interviewees talked about how at a hackathon, she felt that she was not listened to compared to other guys in the group that were her exact major.</p>
                    </div>
                </div>
                <p className="report-page-paragraph">We wanted to test whether this experience could be seen at a group level by comparing the male and female population via null hypothesis testing. We asked students to rate from 1-6, with 1 being how much people disagreed and 6 being how much they agreed with the statement above. The average between males is 2.5 while the average between females is 3.59. According to our calculations, the final p-value came out to be a shocking number of 0.00013, which is less than our threshold thus making this statistically significant. </p>
                <img src="/chart-1.png" alt="Chart 1" style={{ width: "1113px", height: "86px" }} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        <StoryCard readonly story={{id: "", text: "One participant noted “some group members speaking over me, male org member over-explaining video game, feeling quickly developing frustration from fellow male classmate”", title: "Free Response Survey Question: Feel free to elaborate on any of your answers above or even share a related experience.", likes: 0}} refresh={() => {}}/>
                    </div>
                    <div>
                        <p style={{ fontSize: "16px", fontWeight: "700" }}>Interview Question: “Can you share a moment where you experienced or witnessed social bias on campus?”</p>
                        <div style={{ backgroundColor: "#FFFEDD", width: "699px", height: "148px", borderRadius: "15px", position: "relative" }}>
                            <img src="/placeholder-1.png" alt="Profile Placeholder 1" style={{ height: "100px", width: "100px", position: "absolute", top: "25px", left: "-50px" }}/>
                            <p className="report-page-paragraph" style={{ margin: "8px 8px 8px 80px" }}>“When I’m in a group project like a hackathon or something, I get stuck on design or writing or just busy work. Maybe it’s because I’m cog sci, but there’s been other cog sci people that are guys, but they get to do more of the data collection or coding.” -Jane</p>
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        <div style={{ width: "300px", height: "300px" }} >
                            <img src="https://via.placeholder.com/300" alt="Placeholder" />
                        </div>
                    </div>
                    <div>
                        <h3 className="report-page-bolded">UCSD students are fully supportive of my identity. </h3>
                        <p className="report-page-paragraph">Our group found this result to be particularly shocking. Similar to the previous question, a 1 meant that the student disagrees with the statement while a 6 indicates that the student agrees completely Immediately, we can see that the nonbinary group has the lowest average out of all the groups, with an average of 2.</p>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        <p className="report-page-paragraph">The female group has an average of a 4.07, while the male group has an average of a 4.69. However, when diving deeper and performing null hypothesis testing between the male and female groups, we found that this difference was actually statistically significant with p-value being about 0.0033.</p>
                    </div>
                    <div>
                        <StoryCard readonly story={{id: "", text: "One participant noted “The most obvious example I can think of are using the wrong pronouns, intentionally or not.”", title: "Free Response Survey Question: Feel free to elaborate on any of your answers above or even share a related experience.", likes: 0}} refresh={() => {}}/>
                    </div>
                </div>
                <img src="/chart-2.png" alt="Chart 2" style={{ width: "1113px", height: "86px" }} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        <div style={{ width: "300px", height: "300px" }} >
                            <img src="https://via.placeholder.com/300" alt="Placeholder" />
                        </div>
                    </div>
                    <div>
                        <h3 className="report-page-bolded">If I go to office hours or tutoring by the university, I’d feel judged because of my identity. </h3>
                        <p className="report-page-paragraph">With a p-value of 0.007 when comparing the male vs female group, we found there is a disparity between the judgment which the male group goes through versus the female group in the education system. One possible reason could relate to the data we found earlier, which indicated that the female group had felt more like their ideas weren’t being listened to which could potentially make women feel less confident when engaging with a professor or a tutor. Though there could be a plethora of reasons, one discovery we made when interviewing a female interviewee on this topic was that a guy in office hours had actually conveyed his romantic feelings toward the interviewee despite how she was only there to engage in the academic material which is another vector to consider. </p>
                    </div>
                </div>
                <img src="/chart-3.png" alt="Chart 3" style={{ width: "1113px", height: "86px" }} />
                <div>
                        <p style={{ fontSize: "16px", fontWeight: "700" }}>Interview Question: “Can you share a moment where you experienced or witnessed social bias on campus?”</p>
                        <div style={{ backgroundColor: "#FFFEDD", width: "1028px", height: "148px", borderRadius: "15px", position: "relative" }}>
                            <img src="/placeholder-2.png" alt="Profile Placeholder 2" style={{ height: "100px", width: "100px", position: "absolute", top: "25px", left: "-50px" }}/>
                            <p className="report-page-paragraph" style={{ margin: "8px 8px 8px 80px" }}>“I’ve been hit on during office hours before. To be clear, it was by other students, not any tutors. The tutors are typically really nice to me. The other students are sometimes questionable. I really am open to making friends or study buddies but it’s just weird now because sometimes I just can’t really tell what some people want from me and I’m just at office hours to get help on the homework you know?” - Candice</p>
                        </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        <div style={{ width: "300px", height: "300px" }} >
                            <img src="https://via.placeholder.com/300" alt="Placeholder" />
                        </div>
                    </div>
                    <div>
                        <h3 className="report-page-bolded">When I attend class, I feel judged by other students because of who I am. </h3>
                        <p className="report-page-paragraph">Once again, we did null hypothesis testing the male vs female groups and found that there is statistical significance with a p-value of 0.003. This conclusion is not surprising considering the result of the previous analysis. However, one metric to point out here is the disparity between Hispanic and non-Hispanic.</p>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        <p className="report-page-paragraph" style={{ margin: "8px 8px 8px 80px" }}>Our data does not support the conclusion that a person’s race affects whether a student feels judged as unfortunately we do not have much diversity on this metric in our dataset. However, in some of the stories and responses we’ve seen, this problem is not limited to gender but also race and heritage, as a student described how he has been mistaken as a maintenance worker because he is Hispanic. Had we been able to get more diverse data on this front, we would not be surprised to see statistical significance based on race. </p>
                    </div>
                    <div>
                        <StoryCard readonly story={{id: "", text: "One participant noted “Being a Hispanic male, I've been mistaken as a maintenance worker twice. I was in shorts, sandals, and a t shirt - no where near a uniform.”", title: "Free Response Survey Question: Feel free to elaborate on any of your answers above or even share a related experience.", likes: 0}} refresh={() => {}}/>
                    </div>
                </div>
                <img src="/chart-4.png" alt="Chart 4" style={{ width: "1113px", height: "86px" }} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        <div style={{ width: "300px", height: "300px" }} >
                            <img src="https://via.placeholder.com/300" alt="Placeholder" />
                        </div>
                    </div>
                    <div>
                        <h3 className="report-page-bolded">On UCSD campus, my thoughts and opinions don’t matter because of my identity.</h3>
                        <p className="report-page-paragraph">Between the male and female groups, we found that these results are statistically significant with a p-value of 0.001. This idea ties into the first trend mentioned above, which is that women are more likely to feel that their ideas are not being listened to compared to their peers. As a result, we can understand why at UCSD women feel that their thoughts and opinions don’t matter since they’re often not getting listened to. </p>
                    </div>
                </div>
                <img src="/chart-5.png" alt="Chart 5" style={{ width: "1113px", height: "86px" }} />
                <p className="report-page-paragraph" style={{ fontSize: "36px" }}>“I've witnessed or experienced social biases in the following settings:”</p>
                <img src="/infographic.png" alt="Infographic" style={{ width: "998px", height: "657px" }} />
                <p className="report-page-paragraph">For those who have experienced social biases at UCSD, a vast majority of these experiences occurred in group or public settings where there are many opportunities to interact with new people, like student organizations or classrooms. On the other hand, places like labs and study spaces are not meant to facilitate a lot of human interaction, so relatively few instances of social biases occurred there. This makes sense because more chances for human interaction means more chances to make offensive jokes, commit microaggressions, etc, regardless of intention. We did find it interesting that so many students said they experienced social biases from friends or friend groups, since friends typically try not to hurt or offend each other by definition. Our suspicion is that these instances of social bias from friends are usually unintentional but still harmful to victims. Finally, it was interesting to see how someone experienced a social bias even in an online community since online communities are often anonymous, which just goes to show how pervasive social biases are in society no matter where you are.</p>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        <div style={{ width: "300px", height: "300px" }} >
                            <img src="https://via.placeholder.com/300" alt="Placeholder" />
                        </div>
                    </div>
                    <div>
                        <h3 style={{fontSize: "36px", fontWeight: "700"}}>Social Bias in Student Organizations</h3>
                        <p className="report-page-paragraph">Considering that students witnessed the most amount of social bias in student organizations,  we wanted to break down to see whether there were any sort of correlations between different groups. We did different variations such as by gender, race, and major and found that major had the most amount of interesting results. The graph above represents the percentage of students per group that stated they had seen social bias in student organizations. </p>
                        <p className="report-page-paragraph">When performing null hypothesis testing, we ignored the “COGS”, “DSC”, and “MAE” groups as there was a very low number of people in these groups. As such, when doing a null hypothesis test on the CSE group versus the ECE group (two groups with the most data in our dataset), we found statistical significance with a p-value of 0.025.</p>

                    </div>
                </div>
                <p className="report-page-paragraph">Though this data shows statistical significance, this does not necessarily mean to conclude that ECE student organizations have more social bias than CSE student organizations, as students may not necessarily join student organizations belonging to their major (for instance, students in CSE may join IEEE which is an ECE organization or a Math major might join ACM which is a CSE organization). However, if we assume that there is a trend where most CSE students join a CSE organization and ECE students join an ECE organization, then we can conclude that there is some correlation between social bias and the student organization department.</p>
                <h3 style={{fontSize: "36px", fontWeight: "700"}}>A Note on Microaggressions</h3>
                <h3 className="report-page-title">Conclusion</h3>
                <p className="report-page-paragraph">Based on the responses to our survey and interviews, we found a few interesting results. One such result was that students who identified as female were more likely to say and share that they experienced social biases in their lives, which confirms our hypothesis that females may experience more discrimination than males. It is important to note that some people who answered that they had experienced little to no social bias may actually have experienced it, and either forgot about it or did not think a microaggression counted as an instance of social bias. This may increase the error in our data, which we could mitigate by getting more survey responses and interviews if we had more time to do so. Overall, though, we found that at UCSD, a significant portion of engineering students do experience social biases, and the severity and frequency of these experiences does vary based on demographic.</p>
                <p className="report-page-paragraph">It's important to note that in the overall sense, most participants felt supported at UCSD. However, we cannot dismiss the fact there was a portion of participants in each question that did not feel the same way. For the statement "I often witness social biases affecting others on campus (classes, student orgs, study spaces, etc)," 31 people rated a number from 1-3, indicating that they overall disagreed, but 29 people agreed with ratings from 4-6. This is further supported by the chart in the previous section. Even if someone isn't personally affected, social biases remain present on campus, and it’s important to understand where some of us hold privileges where others do not.</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        <p className="report-page-paragraph">Taking a look at the comment to the right, the participant acknowledged that they would not be aware of how bias affects groups that they’re not part of, which is a valid point. It raises the questions: How do we account for biases that we aren’t aware of? If we don’t know it exists, how do we avoid contributing to it?</p>
                    </div>
                    <div>
                    <StoryCard readonly story={{id: "", text: "One participant noted “I've certainly noticed that the demographics of UCSD cse classes are heavily skewed towards Asian and white men, but I've never felt ignored, stereotyped, etc as a woman. I don't know if I would be aware of other sorts of marginalization since they wouldn't affect me personally.”", title: "Free Response Survey Question: Feel free to elaborate on any of your answers above or even share a related experience.", likes: 0}} refresh={() => {}}/>
                    </div>
                </div>
                <p className="report-page-paragraph">This is precisely what we aim to expose with Project Tulips. There is no single perfect answer, but we believe that the first step is always to be willing to learn. For this project, we collected these responses in order to get a better understanding of the overall impression of UCSD, with an emphasis in its STEM programs. From there, we recognize that an overall lense isn’t enough as people still have individual experiences that cannot be represented properly with just numbers, so we conducted brief interviews to supplement the data. In addition, we wanted to provide a space for those who didn’t get the chance to participate in our study, as well as those who just want to be heard, so we created the interative bulletin board. We acknowledge that there’s this feeling that it’s never quite enough, but it doesn’t mean that we shouldn’t keep trying. We strongly encourage all users to read through all the responses, and reflect on their experiences. We hope to gather the untold stories, and put them out there for people to learn. If we don’t know a certain bias exists, we seek to find it and understand it, so we know how to avoid contributing to it and stand up for others that are affected. By doing this project, even some of our own group members gained insight into biases that affect a group they weren’t a part of because these experiences tell their story. We hope that it has a similar effect for our users.</p>
            </div>
        </div>
    );
}

export default ReportPage;
