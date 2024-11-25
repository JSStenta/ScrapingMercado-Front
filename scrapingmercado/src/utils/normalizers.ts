// Función para normalizar y quitar tildes y caracteres especiales
export const normalizeText = (text: string) =>
    text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export const normalizeKey = (key: string) => key.trim().toLowerCase();