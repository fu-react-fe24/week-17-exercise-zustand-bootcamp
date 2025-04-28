import { create } from 'zustand';

const useUserStore = create((set) => ({
    user : null,
    login : (user) => set({user : user}),
    logout : () => set({user : null})
}));

export default useUserStore;