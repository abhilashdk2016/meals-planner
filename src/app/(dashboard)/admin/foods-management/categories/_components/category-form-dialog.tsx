'use client';
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { categoryDefaultValues, categorySchema, CategorySchema } from "../_types/categorySchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCategoriesStore } from "../_libs/use-category-store";
import { useCategory } from "../_services/use-category-queries";
import { useCreateCategory, useUpdateCategory } from "../_services/use-category-mutations";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { DialogTitle } from "@radix-ui/react-dialog";
import { ControlledInput } from "@/components/ui/controlled/controlled-input";
import { useEffect } from "react";

type CategoryFormDialogProps = {
    smallTrigger?: boolean;
}

const CategoryFormDialog = ({ smallTrigger }: CategoryFormDialogProps) => {
    const form = useForm<CategorySchema>({
        defaultValues: categoryDefaultValues,
        resolver: zodResolver(categorySchema)
    });

    const { 
        selectedCategoryId,
        updateSelectedCategoryId,
        categoryDialogOpen,
        updateCategoryDialogOpen
    } = useCategoriesStore();

    const categoryQuery = useCategory();
    const createCategoryMutation = useCreateCategory();
    const updateCategoryMutation = useUpdateCategory();

    useEffect(() => {
        if (selectedCategoryId && categoryQuery.data) {
            form.reset(categoryQuery.data);
        }
    }, [selectedCategoryId, categoryQuery.data, form]);

    const isPending = createCategoryMutation.isPending || updateCategoryMutation.isPending;

    const handleDialogOpenChange = (isOpen: boolean) => {
        updateCategoryDialogOpen(isOpen);
        if(!isOpen) {
            updateSelectedCategoryId(null);
            form.reset(categoryDefaultValues);
        }
    }

    const handleSuccess = () => {
        handleDialogOpenChange(false);
    }

    const onSubmit: SubmitHandler<CategorySchema> = (data) => {
        if(data.action === 'create') {
            createCategoryMutation.mutate(data, { onSuccess: handleSuccess });
        } else {
            updateCategoryMutation.mutate(data, { onSuccess: handleSuccess });
        }
    }

    return <Dialog open={categoryDialogOpen} onOpenChange={handleDialogOpenChange}>
        <DialogTrigger asChild>
            {
                smallTrigger ? (
                    <Button size="icon" variant="ghost" type="button">
                        <Plus />
                    </Button>
                ) : (
                    <Button>
                        <Plus className="mr-2" /> New Category
                    </Button>
                )
            }
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle className="text-2xl">
                    { selectedCategoryId ? "Edit Category" : "Create a New Category" }
                </DialogTitle>
            </DialogHeader>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormProvider {...form}>
                    <ControlledInput<CategorySchema> 
                        name="name" 
                        label="Name" 
                        placeholder="Enter category name"
                    />
                </FormProvider>
                <DialogFooter>
                    <Button type="submit" isLoading={isPending}>
                        { !!selectedCategoryId ? "Edit" : "Create" } Category
                    </Button>
                </DialogFooter>
            </form>
        </DialogContent>
    </Dialog>
}

export default CategoryFormDialog;