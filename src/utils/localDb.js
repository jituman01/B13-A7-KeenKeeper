export const getStoredTimeline = () => {
    const storedData = localStorage.getItem('friend-timeline');
    return storedData ? JSON.parse(storedData) : [];
};

export const addToStoredTimeline = (entry) => {
    const timeline = getStoredTimeline();
    timeline.unshift(entry);
    localStorage.setItem('friend-timeline', JSON.stringify(timeline));
};