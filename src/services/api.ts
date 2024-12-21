// import { useAuthStore } from "../store/authStore";

const API_URL = import.meta.env.VITE_API_URL

export const getData = async (url:string) => {
    // const { logout } = useAuthStore.getState();
    try {
        const response = await fetch(`${API_URL}/${url}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', // Importante para enviar y recibir cookies
        });

        // if (response.status === 401) {
        //     logout();
        //     return;
        // }
        const data = await response.json()
        
        if (!response.ok) {
            throw new Error(data.message);
        }

        return data
    } catch (error) {
        console.error('Error en la petición');
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

        const responseData = await response.json()

        if (response.status === 400) {
            throw new Error(`${responseData.message}`);
        }

        if (!response.ok) {     
            throw new Error(`No se pudo realizar el registro, ${responseData.message}`);
        }
        
        return responseData 
    }catch (error) {
        console.error('Ha ocurrido un error, por favor, contacta con el administrador');
        throw error;
    }
}

export const updateEndpoint = async (url: string, id: string | number, data: object) => {
    try {
        const response = await fetch(`${API_URL}/${url}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', // Importante para enviar y recibir cookies
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('No se pudo realizar la actualización, revisa los datos y vuelva a intentarlo');
        }

        const responseData = await response.json()
        
        return responseData 
    } catch (error) {
        console.error('Error en la petición');
        throw error;
    }
}

export const deleteEndpoint = async (url:string, id:string|number) => {
    try {        
        const response = await fetch(`${API_URL}/${url}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', // Importante para enviar y recibir cookies
        });

        if (!response.ok) {
            throw new Error('No se pudo realizar la eliminación, revisa los datos y vuelva a intentarlo');
        }

        const responseData = await response.json()
        
        return responseData 
    }catch (error) {
        console.error('Error en la petición');
        throw error;
    }
}

// Función para peticiones externas
export const fetchApiExternal = async (url:string) => {
    try {
        const response = await fetch(url, {
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