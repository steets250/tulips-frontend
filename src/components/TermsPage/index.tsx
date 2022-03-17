import React from "react";

import './style.less';

const TermsPage: React.FC = () => {
    return (
        <div className="terms-page">
            <h2 className="terms-page-title">Terms</h2>
            <p className="terms-page-paragraph">By posting you are agreeing to share your story publicly. Anyone who visits the website will be able to read it. All posts are anonymous by default. This project aims to give an outlet for students to be heard. </p>
            <br />
            <p className="terms-page-paragraph">We will not tolerate any hate speech or any posts that are insulting a specific person or certain groups of people. Any form of victim blaming, gaslighting or invalidating people are also unacceptable.</p>
            <br />
            <p className="terms-page-paragraph">We understand the nature of these stories may be sensitive, though we will not allow for specific individuals to be named, positively or negatively. This policy is to prevent targeted witch hunts or giving potentially unwanted attention to certain people.</p>
            <br />
            <p className="terms-page-paragraph">Not every story needs to be positive, but we ask you to think about your post before you share. Any post that violates these terms will be taken down. If you happen to see posts that violate these and have not been taken down, please report it with the bottom left icon and an admin will review it as soon as possible.</p>
        </div>
    );
}

export default TermsPage;
