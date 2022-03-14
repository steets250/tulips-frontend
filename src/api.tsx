const API_URL = 'https://tulips-backend.herokuapp.com/';

//GET
export const getStories = async () => {
    const response = await fetch(`${API_URL}/api/story`);
    const data = response.json();
    return data;
}

//GET
export const getStory = async (uuid: string) => {
    const response = await fetch(`${API_URL}/api/story/${uuid}`);
    const data = response.json();
    return data;
}

//POST
export const createStory = async (story: object) => {
    const response = await fetch(`${API_URL}/api/story`);
    const data = response.json();
    return data;
}

//POST
export const reportStory = async (uuid: string) => {
    const response = await fetch(`${API_URL}/api/story/${uuid}/report`);
    const data = response.json();
    return data;
}

//POST
export const likeStory = async (uuid: string) => {
    const response = await fetch(`${API_URL}/api/story/${uuid}/like`);
    const data = response.json();
    return data;
}

//POST
export const unlikeStory = async (uuid: string) => {
    const response = await fetch(`${API_URL}/api/story/${uuid}/unlike`);
    const data = response.json();
    return data;
}
