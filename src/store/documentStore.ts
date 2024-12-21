import { create } from 'zustand'
// import { persist, PersistOptions } from 'zustand/middleware';
import { BeneficiaryDocument } from '../features/Dashboard/types'
import { getData, updateEndpoint, deleteEndpoint, uploadFiles } from '../services/api';
import { BeneficiaryDocumentSchema } from '../features/Dashboard/schemas/registerUser';

interface DocumentState {
    documents: BeneficiaryDocument[] | null;
    loading: boolean;
    error: string | null;
    getDocuments: (idBeneficiary: number | string) => Promise<void>;
    saveDocument: (idBeneficiary: number | string, data: FormData) => Promise<void>;
    updateDocument: (idBeneficiary: string | number, data: BeneficiaryDocumentSchema) => Promise<void>;
    deleteDocument: (idBeneficiary: string | number) => Promise<void>;
}

export const useDocumentStore = create<DocumentState>((set, get) => ({
    documents: [],
    loading: false,
    error: null,
    getDocuments: async (idBeneficiary: number | string) => {
        const urlEndpoint = `api/v1/document/search/beneficiary/${idBeneficiary}`;
        set({ loading: true, error: '' });
        try {
            const resp = await getData(urlEndpoint);
            set({ documents: resp.documents, loading: false });
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    },
    saveDocument: async (idBeneficiary: number | string, data: FormData) => {
        set({ loading: true, error: '' });
        try {
            await uploadFiles(`api/v1/document/upload/${idBeneficiary}`, data);
            set({ loading: false });

            await get().getDocuments(idBeneficiary);
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    },
    updateDocument: async (idBeneficiary: string | number, data: BeneficiaryDocumentSchema) => {
        set({ loading: true, error: '' });
        try {
            await updateEndpoint('api/v1/admin/update', idBeneficiary, data);
            set({ loading: false });

            await get().getDocuments(idBeneficiary);
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    },
    deleteDocument: async (idBeneficiary: string | number) => {
        set({ loading: true, error: '' });
        try {
            await deleteEndpoint('api/v1/admin/delete', idBeneficiary);
            set({ loading: false });

            await get().getDocuments(idBeneficiary);
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    }
}),
)

// {
//     name: 'document-storage', // Nombre clave en localStorage
//     storage: {
//         getItem: (key) => {
//             const storedValue = localStorage.getItem(key);
//             return storedValue ? JSON.parse(storedValue) : null; // Parsea el valor
//         },
//         setItem: (key, value) => {
//             localStorage.setItem(key, JSON.stringify(value)); // Guarda como string
//         },
//         removeItem: (key) => {
//             localStorage.removeItem(key);
//         },
//     }
// } as PersistOptions<DocumentState, DocumentState>