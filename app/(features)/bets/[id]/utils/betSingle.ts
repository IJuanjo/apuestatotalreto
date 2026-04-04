export const getBetSingle = async (id: string) => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bet/${id}`);
    if (!response.ok) {
        throw new Error('Error al obtener los detalles de la apuesta');
    }
    const betDetail = await response.json();
    return betDetail;
}