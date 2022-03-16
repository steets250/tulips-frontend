import React, { useState } from "react";
import PinIcon from "../../assets/pin.svg";
import { createStory } from "../../api";
import './style.less';

interface CreateCardProps {
    refresh: Function;
    closeModal: Function;
}

const CreateCard: React.FC<CreateCardProps> = (props) => {
    const { refresh, closeModal } = props;

    const [title, setTitle] = useState<string>("");
    const [text, setText] = useState<string>("");
    
    const handleCreate = (title: string, text: string) => {
        createStory(title, text).then(() => {
            console.log("hi");
            refresh();
        });
        // alert(`You created a story with title: "${title}" and the text: "${text}"`);
    }

    return (
        <div className="create-card">
            <div className="create-card-content">
                <img className="create-card-pin-icon" src={PinIcon} alt="Pushpin"></img>
                <input type="text" placeholder="Story Title..." className="create-card-title" onChange={(e) => setTitle(e.target.value)}/>
                <textarea className="create-card-text" placeholder="Story Text..." maxLength={500} onChange={(e) => setText(e.target.value)}/>
                <div className="create-card-bottom">
                    <p className="create-card-terms">By sharing, you agree to the <a target="_blank" rel="noopener noreferrer" href="/terms" className="underline">terms</a>.</p>
                    <button className="create-card-button" onClick={() => {
                        handleCreate(title, text);
                        closeModal();
                    }}>Share</button>
                </div>
            </div>
        </div>
    );
}

export default CreateCard;
