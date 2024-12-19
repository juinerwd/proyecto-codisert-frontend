import { create } from 'zustand'
import { persist, PersistOptions } from 'zustand/middleware';
import { BeneficiaryData } from '../features/Dashboard/types'
import { getData, post, updateEndpoint, deleteEndpoint } from '../services/api';
import { BeneficiarioSchema } from '../features/Dashboard/schemas/registerUser';

interface BeneficiaryState {
    userBeneficiary: BeneficiaryData[] | null;
    loading: boolean;
    error: string | null;
    getBeneficiaries: () => Promise<void>;
    createBeneficiary: (data: BeneficiarioSchema) => Promise<void>;
    updateBeneficiary: ( id: string | number, data: BeneficiarioSchema) => Promise<void>;
    deleteBeneficiary: (id: string | number) => Promise<void>;
}

export const useBeneficiaryStore = create<BeneficiaryState>()(
    persist(
        (set, get) => ({
            userBeneficiary: [],
            loading: false,
            error: null,
            getBeneficiaries: async () => {
                set({ loading: true, error: '' });
                try {
                    const resp = await getData('api/v1/beneficiary/search-alls');
                    set({ userBeneficiary: resp.data, loading: false });
                } catch (err: any) {
                    set({ error: err.message, loading: false });
                }
            },
            createBeneficiary: async (data: BeneficiarioSchema) => {
                set({ loading: true, error: '' });
                try {
                    await post('api/v1/beneficiary/register', data);
                    set({ loading: false });

                    await get().getBeneficiaries();
                } catch (err: any) {
                    set({ error: err.message, loading: false });
                }
            },
            updateBeneficiary: async (id: string|number, data: BeneficiarioSchema) => {
                set({ loading: true, error: '' });
                try {
                    await updateEndpoint('api/v1/beneficiary/update', id, data);
                    set({ loading: false });

                    await get().getBeneficiaries();
                }catch (err: any) {
                    set({ error: err.message, loading: false });
                }
            },
            deleteBeneficiary: async (id: string|number) => {
                set({ loading: true, error: '' });
                try {
                    await deleteEndpoint('api/v1/beneficiary/delete', id);
                    set({ loading: false });

                    await get().getBeneficiaries();
                }catch (err: any) {
                    set({ error: err.message, loading: false });
                }
            }
        }),
        {
            name: 'beneficiary-storage', // Nombre clave en localStorage
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
        } as PersistOptions<BeneficiaryState, BeneficiaryState>
    )
)