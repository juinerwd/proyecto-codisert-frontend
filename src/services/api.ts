const API_URL = import.meta.env.VITE_API_URL

export const get = async (url:string) => {
    try {
        const response = await fetch(`${API_URL}/${url}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', // Importante para enviar y recibir cookies
        });

        if (!response.ok) {
            throw new Error('Error en la petición GET');
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error al hacer GET:', error);
        throw error;
    }
};

export const getDataBeneficiary = async (url:string) => {
    try {
        const response = await fetch(`${API_URL}/${url}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Error en la petición GET');
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error al hacer GET:', error);
        throw error;
    }
};

export const post = async (url:string, data:object) => {
    try {        
        const response = await fetch(`${API_URL}/${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', // Importante para enviar y recibir cookies
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Error en la petición POST');
        }

        const responseData = await response.json()
        
        return responseData 
    }catch (error) {
        console.error('Error al hacer POST:', error);
        throw error;
    }
}