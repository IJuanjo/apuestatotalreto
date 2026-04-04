export const getBetSingle = async (id: string) => {

    const response = await fetch(`${process.env.BASE_URL}/api/bet/${id}`);
    if (!response.ok) {
        throw new Error('Error al obtener los detalles de la apuesta');
    }
    const betDetail = await response.json();
    return betDetail;
}