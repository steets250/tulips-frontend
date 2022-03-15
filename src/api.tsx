const API_URL = 'https://tulips-backend.herokuapp.com';

//GET
export const getStories = async () => {
    try {
        const response = await fetch(`${API_URL}/api/story`);
        console.log(response);
        const data = response.json();
        console.log(data);
        return data;
    } catch (e) {
        console.log(e);
    }
}

//GET
export const getStory = async (id: string) => {
    try {
        const response = await fetch(`${API_URL}/api/story/${id}`);
        const data = response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
}

//POST
export const createStory = async (story: object) => {
    try {
        const response = await fetch(`${API_URL}/api/story`, { method: "POST" });
        const data = response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
}

//POST
export const reportStory = async (id: string) => {
    try {
        const response = await fetch(`${API_URL}/api/story/${id}/report`, { method: "POST" });
        const data = response.text();
        return data;
    } catch (e) {
        console.log(e);
    }
}

//POST
export const likeStory = async (id: string) => {
    try {
        const response = await fetch(`${API_URL}/api/story/${id}/like`, { method: "POST" });
        const data = response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
}

//POST
export const unlikeStory = async (id: string) => {
    try {
        const response = await fetch(`${API_URL}/api/story/${id}/unlike`, { method: "POST" });
        const data = response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
}
