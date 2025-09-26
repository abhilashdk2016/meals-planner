import { createStore } from "@/lib/createStore";

type State = {
    selectedCategoryId: number | null;
    categoryDialogOpen: boolean;
}

type Actions = {
    updateSelectedCategoryId: (id: State["selectedCategoryId"]) => void;
    updateCategoryDialogOpen: (is: State["categoryDialogOpen"]) => void;
}

type Store = State & Actions;

const useCategoriesStore = createStore<Store>(
    (set) => ({
        selectedCategoryId: null,
        categoryDialogOpen: false,
        updateSelectedCategoryId: (id) => set((state) => { state.selectedCategoryId = id }),
        updateCategoryDialogOpen: (is) => set((state) => { state.categoryDialogOpen = is }),
    }),
    {
        name: "categories-store"
    }
);

export { useCategoriesStore };