export const getBetMe = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bet/me`);
    if (!response.ok) {
        throw new Error('Error fetching bet me data');
    }
    const data = await response.json();
    return data;
}