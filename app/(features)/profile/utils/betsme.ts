export const getBetMe = async () => {
    const response = await fetch('/api/bet/me');
    if (!response.ok) {
        throw new Error('Error fetching bet me data');
    }
    const data = await response.json();
    return data;
}