
import React, { useEffect, useState } from "react";

import PinIcon from "../../assets/pin.svg";
import ReportIcon from "../../assets/report.svg";
import LikedIcon from "../../assets/liked.svg";
import UnlikedIcon from "../../assets/unliked.svg";

import './style.less';
import { likeStory, reportStory, unlikeStory } from "../../api";

interface Story {
    id: string;
    text: string;
    title: string;
    likes: number;
}

interface StoryCardProps {
    story: Story;
    refresh: Function;
}

const StoryCard: React.FC<StoryCardProps> = (props) => {
    const { story, refresh } = props;

    const [mode, setMode] = useState<"NORMAL" | "REPORTED">("NORMAL");
    const [liked, setLiked] = useState<boolean>(false);

    const {
        id,
        text,
        title,
        likes,
    } = story;

    useEffect(() => {
        setLiked(localStorage.getItem(`${id}-liked`) === "true");
    }, [setLiked, id]);

    useEffect(() => {
        if (localStorage.getItem(`${id}-reported`) === "true") {
            setMode("REPORTED");
        }
    }, [id, setMode]);

    const handleLike = (id: string) => {
        if (localStorage.getItem(`${id}-liked`)) {
            unlikeStory(id).then(() => {
                localStorage.removeItem(`${id}-liked`);
                setLiked(false);
                refresh();
            });
        } else {
            likeStory(id).then(() => {
                localStorage.setItem(`${id}-liked`, "true");
                setLiked(true);
                refresh();
            });
        }
    };

    const handleReport = (id: string) => {
        if (localStorage.getItem(`${id}-reported`)) {
        } else {
            reportStory(id).then(() => {
                localStorage.setItem(`${id}-reported`, "true");
                setMode("REPORTED");
                refresh();
            });
        }
    }

    let content = <></>;

    switch (mode) {
        case "NORMAL":
            content = (
                <div className="story-card-content">
                    <img className="story-card-pin-icon" src={PinIcon} alt="Pushpin"></img>
                    <p className="story-card-story">{title ? <span className="story-card-story-title">{title}: </span> : ''}{text}</p>
                    <div className="story-card-bottom">
                        <div className="tooltip">
                            <p className="tooltiptext">Report Story</p>
                        <button className="story-card-report-button" type="button" onClick={() => handleReport(id)}>
                            <img className="story-card-report-button-icon" src={ReportIcon} alt="Report" />
                        </button>
                        </div>
                        <div className="story-card-like-container">
                            <p className="story-card-likes">{likes}</p>
                            <div className="tooltip">
                                <p className="tooltiptext">Like Story</p>
                                <button className="story-card-like-button" type="button" onClick={() => handleLike(id)}>
                                    <img className="story-card-like-button-icon" src={liked ? LikedIcon : UnlikedIcon} alt="Like" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            );
            break;

        case "REPORTED":
            content = (
                <>
                    <img className="story-card-pin-icon" src={PinIcon} alt="Pushpin"></img>
                    <div className="story-card-content reported">
                        <p className="story-card-story">{text}</p>
                        <div className="story-card-bottom">
                            <button className="story-card-report-button" type="button" onClick={() => handleReport(id)}>
                                <img className="story-card-report-button-icon" src={ReportIcon} alt="Report" />
                            </button>
                            <div className="story-card-like-container">
                                <p className="story-card-likes">{likes}</p>
                                <button className="story-card-like-button" type="button" onClick={() => handleLike(id)}>
                                    <img className="story-card-like-button-icon" src={UnlikedIcon} alt="Like" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="story-card-report">
                        <p className="story-card-report-text">You have reported this story.<br/>It will be reviewed by a site admin.</p>
                    </div>
                </>
            );
            break;
    
        default:
            break;
    }

    return <div className="story-card">{content}</div>;
}

export default StoryCard;
