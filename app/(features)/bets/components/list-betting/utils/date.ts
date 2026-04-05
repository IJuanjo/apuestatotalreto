const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    })
    .replace(/\s*a\.?\s*m\.?/i, ' AM')
    .replace(/\s*p\.?\s*m\.?/i, ' PM');
}

export default formatDate;