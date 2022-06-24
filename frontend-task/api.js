const apiEndPoint = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';

export const getTasks = async () => {
    const res = await fetch(apiEndPoint);
    return await res.json();
    
};