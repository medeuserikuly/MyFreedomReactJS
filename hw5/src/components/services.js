
const getUsers = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Что то пошло не так');
    }
    return response.json();
}

export default getUsers