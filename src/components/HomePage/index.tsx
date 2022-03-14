import React from "react";

import StoryCard from '../StoryCard';

import './style.css';

interface Story {
    uuid: string;
    text: string;
    title: string;
    likes: number;
}

const stories: Story[] = [
    {
        uuid: "1",
        text: "Whenever I try to pitch an idea in a group setting, I feel unnecessarily interrogated about the details of the idea, as if people are purposely trying to pick out flaws so they don't have to use the idea. At first I thought people just wanted to be thorough and didn't think much, but then I've noticed that it's only with the women. Guys in the group don't face the same treatment because any idea they have is met with instant respect.",
        title: "Gary Copypasta",
        likes: 21
    },
    {
        uuid: "2",
        text: "I have seniority in a STEM program, yet most members still don't respect my advice.",
        title: "Gary Copypasta",
        likes: 11
    },
    {
        uuid: "3",
        text: "Most of the guys that I meet in my classes or orgs don't really see me as another student to be friends with. It feels that they see me only as a potential date.",
        title: "Gary Copypasta",
        likes: 19
    },
    {
        uuid: "4",
        text: "I'm tired of fighting for myself and having to prove that I'm just as competent in my field as other men.",
        title: "Gary Copypasta",
        likes: 16
    },
    {
        uuid: "5",
        text: "I feel like I don't fit in with a lot of student groups because I'm not White or Asian, and it often feels clique-y.",
        title: "Gary Copypasta",
        likes: 26
    },
];

const HomePage: React.FC = () => {
    return (
        <>
        <div className="home-page-stories">
            {stories.map((story) => <StoryCard key={story.uuid} story={story}/>)}
        </div>
        </>
    );
}

export default HomePage;
