import React from "react";

import PinIcon from "../../assets/pin.svg";
import ReportIcon from "../../assets/report.svg";
import LikeIcon from "../../assets/like.svg";

import './style.css';

interface StoryCardProps {
    uuid: string;
    story: string;
    likes: number;
    handleLike: Function;
    handleReport: Function;
}

const StoryCard: React.FC<StoryCardProps> = (props) => {
    const { uuid, story, likes, handleLike, handleReport } = props;

    return (
        <div className="story-card">
            <img className="story-card-pin-icon" src={PinIcon} alt="Pushpin"></img>
            <p className="story-card-story">{story}</p>
            <div className="story-card-bottom">
                <button className="story-card-report-button" type="button" onClick={() => handleReport(uuid)}>
                    <img className="story-card-report-button-icon" src={ReportIcon} alt="Report" />
                </button>
                <div className="story-card-like-container">
                    <p className="story-card-likes">{likes}</p>
                    <button className="story-card-like-button" type="button" onClick={() => handleLike(uuid)}>
                        <img className="story-card-like-button-icon" src={LikeIcon} alt="Like" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default StoryCard;
