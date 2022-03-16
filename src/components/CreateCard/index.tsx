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
    }

    return (
        <div className="create-card">
            <div className="create-card-content">
                <button type="button" className="create-card-close-button" onClick={() => closeModal()}>X</button>
                <img className="create-card-pin-icon" src={PinIcon} alt="Pushpin"></img>
                <input type="text" placeholder="Story Title (Optional)" className="create-card-title" onChange={(e) => setTitle(e.target.value)}/>
                <textarea className="create-card-text" placeholder="Story Text (Max 500 chars)" maxLength={500} onChange={(e) => setText(e.target.value)}/>
                <p className="create-card-limit">{text.length}/500 chars</p>
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
