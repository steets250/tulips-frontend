import React, { useEffect, useState } from "react";

import PinIcon from "../../assets/pin.svg";
import ReportIcon from "../../assets/report.svg";
import LikedIcon from "../../assets/liked.svg";
import UnlikedIcon from "../../assets/unliked.svg";

import './style.less';

interface Story {
    uuid: string;
    text: string;
    title: string;
    likes: number;
}

interface StoryCardProps {
    story: Story;
}

const StoryCard: React.FC<StoryCardProps> = (props) => {
    const {
        story: {
            uuid,
            text,
            title,
            likes,
        }
    } = props;

    const [mode, setMode] = useState<"NORMAL" | "REPORTED" | "CREATING">("NORMAL");
    const [liked, setLiked] = useState<boolean>(false);

    useEffect(() => {
        setLiked(localStorage.getItem(`${uuid}-liked`) === "true")
    }, [setLiked, uuid]);

    useEffect(() => {
        if (localStorage.getItem(`${uuid}-reported`) === "true") {
            setMode("REPORTED");
        }
    }, [uuid, setMode]);

    const handleLike = (uuid: string) => {
        if (localStorage.getItem(`${uuid}-liked`)) {
            // API CALL HERE
            localStorage.removeItem(`${uuid}-liked`);
            setLiked(false);
            alert("You unliked " + uuid + "!");
        } else {
            // API CALL HERE
            localStorage.setItem(`${uuid}-liked`, "true");
            setLiked(true);
            alert("You liked " + uuid + "!");
        }
    };

    const handleReport = (uuid: string) => {
        if (localStorage.getItem(`${uuid}-reported`)) {
            alert("You already reported " + uuid + "!");
        } else {
            // API CALL HERE
            localStorage.setItem(`${uuid}-reported`, "true");
            setMode("REPORTED");
            alert("You reported " + uuid + "!");
        }
    }

    const handleCreate = (title: string, text: string) => {
        // API CALL HERE
        alert(`You created a story with title: "${title}" and the text: "${text}"`);
    }

    let content = <></>;

    switch (mode) {
        case "NORMAL":
            content = (
                <div className="story-card-content">
                    <img className="story-card-pin-icon" src={PinIcon} alt="Pushpin"></img>
                    <p className="story-card-story">{text}</p>
                    <div className="story-card-bottom">
                        <button className="story-card-report-button" type="button" onClick={() => handleReport(uuid)}>
                            <img className="story-card-report-button-icon" src={ReportIcon} alt="Report" />
                        </button>
                        <div className="story-card-like-container">
                            <p className="story-card-likes">{likes}</p>
                            <button className="story-card-like-button" type="button" onClick={() => handleLike(uuid)}>
                                <img className="story-card-like-button-icon" src={liked ? LikedIcon : UnlikedIcon} alt="Like" />
                            </button>
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
                            <button className="story-card-report-button" type="button" onClick={() => handleReport(uuid)}>
                                <img className="story-card-report-button-icon" src={ReportIcon} alt="Report" />
                            </button>
                            <div className="story-card-like-container">
                                <p className="story-card-likes">{likes}</p>
                                <button className="story-card-like-button" type="button" onClick={() => handleLike(uuid)}>
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

        case "CREATING":
            content = (
                <div className="story-card-content">
                    <img className="story-card-pin-icon" src={PinIcon} alt="Pushpin"></img>
                    <textarea className="story-card-input" />
                    <div className="story-card-bottom">
                        <p className="story-card-terms">By sharing, you agree to the <a href="" className="underline">terms</a>.</p>
                        <button className="story-card-button" onClick={() => handleCreate("one", "two")}>Share</button>
                    </div>
                </div>
            );
            break;
    
        default:
            break;
    }

    return <div className="story-card">{content}</div>;
}

export default StoryCard;
