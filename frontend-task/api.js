const apiEndPoint = 'http://10.0.2.2:3000';

export const getTasks = async () => {
    const res = await fetch(apiEndPoint + '/tasks');
    return await res.json();
    
};