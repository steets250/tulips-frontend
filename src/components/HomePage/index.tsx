import React from "react";

import StoryCard from '../StoryCard';

import './style.css';

const HomePage: React.FC = () => {
    return (
        <>
        <div className="home-page-stories">
            <StoryCard
                uuid="deez"
                story='When you accept an offer, the company and its people begin to rely on you, and they become invested in the positive outcome resulting from that relationship. Your future actions, whether positive or negative, rub off on those who stood beside you and this is with UCSD’s reputation with Microsoft, the CSE Department’s reputation with Microsoft, the CS Tutors’ reputations with Microsoft, and as a result Rick’s and my reputation with Microsoft does not shine as brightly due to your selfish actions.'
                likes={420}
                handleLike={(uuid: string) => {
                alert("You liked " + uuid + "!")
                }}
                handleReport={(uuid: string) => {
                alert("You reported " + uuid + "!")
                }}
            />
            <StoryCard
                uuid="deez"
                story='When you accept an offer, the company and its people begin to rely on you, and they become invested in the positive outcome resulting from that relationship. Your future actions, whether positive or negative, rub off on those who stood beside you and this is with UCSD’s reputation with Microsoft, the CSE Department’s reputation with Microsoft, the CS Tutors’ reputations with Microsoft, and as a result Rick’s and my reputation with Microsoft does not shine as brightly due to your selfish actions.'
                likes={420}
                handleLike={(uuid: string) => {
                alert("You liked " + uuid + "!")
                }}
                handleReport={(uuid: string) => {
                alert("You reported " + uuid + "!")
                }}
            />
            <StoryCard
                uuid="deez"
                story='When you accept an offer, the company and its people begin to rely on you, and they become invested in the positive outcome resulting from that relationship. Your future actions, whether positive or negative, rub off on those who stood beside you and this is with UCSD’s reputation with Microsoft, the CSE Department’s reputation with Microsoft, the CS Tutors’ reputations with Microsoft, and as a result Rick’s and my reputation with Microsoft does not shine as brightly due to your selfish actions.'
                likes={420}
                handleLike={(uuid: string) => {
                alert("You liked " + uuid + "!")
                }}
                handleReport={(uuid: string) => {
                alert("You reported " + uuid + "!")
                }}
            />
            <StoryCard
                uuid="deez"
                story='When you accept an offer, the company and its people begin to rely on you, and they become invested in the positive outcome resulting from that relationship. Your future actions, whether positive or negative, rub off on those who stood beside you and this is with UCSD’s reputation with Microsoft, the CSE Department’s reputation with Microsoft, the CS Tutors’ reputations with Microsoft, and as a result Rick’s and my reputation with Microsoft does not shine as brightly due to your selfish actions.'
                likes={420}
                handleLike={(uuid: string) => {
                alert("You liked " + uuid + "!")
                }}
                handleReport={(uuid: string) => {
                alert("You reported " + uuid + "!")
                }}
            />
        </div>
        </>
    );
}

export default HomePage;
