import React, { useEffect, useState } from "react";
import { getStories } from "../../api";
import Modal from 'react-modal';
import Pencil from '../../assets/pencil.png';
import CreateCard from "../CreateCard";
import StoryCard from '../StoryCard';
import './style.less';

interface Story {
    id: string;
    text: string;
    title: string;
    likes: number;
}

Modal.setAppElement('#root');

const HomePage: React.FC = () => {
    const [stories, setStories] = useState<Story[]>([]);
    const [creating, setCreating] = useState<boolean>();

    const refreshStories = () => {
        getStories().then((data) => {
            setStories(data);
        });
    }

    useEffect(() => {
        refreshStories();
    }, []);

    return (
        <>
            <div className="home-page" id="home-page">
                <h2 className="home-page-title">How have you experienced social bias at UCSD?</h2>
                <p className="home-page-subtitle">Plant your story and watch it grow to sprout change</p>
                <button className="home-page-create" type="button" onClick={() => {
                    setCreating(true);
                }}>
                    <img className="home-page-create-image" src={Pencil} alt="" />
                </button>
                <div className="home-page-stories">
                    {stories.map((story) => <StoryCard key={story.id} story={story} refresh={refreshStories}/>)}
                </div>
            </div>
            <Modal
                isOpen={creating}
                onRequestClose={() => {setCreating(false);}}
                className="Modal"
                overlayClassName="Overlay"
            >
                <CreateCard refresh={refreshStories} closeModal={() => {setCreating(false);}} />
            </Modal>
        </>
    );
}

export default HomePage;
