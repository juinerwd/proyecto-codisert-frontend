import { create } from 'zustand'
import { persist, PersistOptions } from 'zustand/middleware';
import { BeneficiaryDocument } from '../features/Dashboard/types'
import { getData, post, updateEndpoint, deleteEndpoint } from '../services/api';
import { AdminSchema, BeneficiaryDocumentSchema } from '../features/Dashboard/schemas/registerUser';

interface DocumentState {
    document: BeneficiaryDocument[] | null;
    loading: boolean;
    error: string | null;
    getDocuments: ( idBeneficiary: number|string ) => Promise<void>;
    saveDocument: (data: BeneficiaryDocumentSchema) => Promise<void>;
    updateDocument: ( id: string | number, data: BeneficiaryDocumentSchema) => Promise<void>;
    deleteDocument: (id: string | number) => Promise<void>;
}

export const useDocumentStore = create<DocumentState>()(
    persist(
        (set, get) => ({
            document: [],
            loading: false,
            error: null,
            getDocuments: async (idBeneficiary: number|string) => {
                const urlEndpoint = `api/v1/document/search/beneficiary/${idBeneficiary}`;
                set({ loading: true, error: '' });
                try {
                    const resp = await getData(urlEndpoint);
                    set({ document: resp.admins, loading: false });
                } catch (err: any) {
                    set({ error: err.message, loading: false });
                }
            },
            saveDocument: async (data: BeneficiaryDocumentSchema) => {
                set({ loading: true, error: '' });
                try {
                    await post('api/v1/admin/register', data);
                    set({ loading: false });

                    await get().getDocuments();
                } catch (err: any) {
                    set({ error: err.message, loading: false });
                }
            },
            updateDocument: async (id: string|number, data: BeneficiaryDocumentSchema) => {
                set({ loading: true, error: '' });
                try {
                    await updateEndpoint('api/v1/admin/update', id, data);
                    set({ loading: false });

                    await get().getDocuments();
                }catch (err: any) {
                    set({ error: err.message, loading: false });
                }
            },
            deleteDocument: async (id: string|number) => {
                set({ loading: true, error: '' });
                try {
                    await deleteEndpoint('api/v1/admin/delete', id);
                    set({ loading: false });

                    await get().getDocuments();
                }catch (err: any) {
                    set({ error: err.message, loading: false });
                }
            }
        }),
        {
            name: 'document-storage', // Nombre clave en localStorage
            storage: {
                getItem: (key) => {
                    const storedValue = localStorage.getItem(key);
                    return storedValue ? JSON.parse(storedValue) : null; // Parsea el valor
                },
                setItem: (key, value) => {
                    localStorage.setItem(key, JSON.stringify(value)); // Guarda como string
                },
                removeItem: (key) => {
                    localStorage.removeItem(key);
                },
            }
        } as PersistOptions<DocumentState, DocumentState>
    )
)