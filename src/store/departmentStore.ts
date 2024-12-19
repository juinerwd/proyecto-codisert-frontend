import { create } from 'zustand'
import { fetchApiExternal } from '../services/api';
import { LocationData } from '../types/apiResponses';



interface DepartmentsMunicipalitiesState {
    department: LocationData[];
    loading: boolean;
    error: string | null;
    getDepartmentsAndMunicipalities: () => Promise<void>;
}

export const useDepartmentStore = create<DepartmentsMunicipalitiesState>((set) => ({
    department: [],
    loading: false,
    error: null,
    getDepartmentsAndMunicipalities: async () => {
        set({ loading: true, error: '' });
        try {
            const resp = await fetchApiExternal('https://www.datos.gov.co/resource/xdk5-pm3f.json');
            set({ department: resp, loading: false });
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    },
}))