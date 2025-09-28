"use server";

import db from "@/lib/db";
import { FoodSchema } from "@/app/(dashboard)/admin/foods-management/foods/_types/foodSchema";
import { foodFiltersSchema, FoodFiltersSchema } from "@/app/(dashboard)/admin/foods-management/foods/_types/foodFilterSchema";
import { PaginatedResult } from "@/lib/types/paginatedResult";
import { Prisma } from "$/generated/prisma";
import { toStringSafe } from "@/lib/utils";
type FoodWithServingUnits = Prisma.FoodGetPayload<{
  include: { foodServingUnits: true };
}>;

const getFoods = async (filters: FoodFiltersSchema): Promise<PaginatedResult<FoodWithServingUnits>> => {
    const vaildatedFilters = foodFiltersSchema.parse(filters);
    const { searchTerm, caloriesRange, proteinRange, categoryId, sortBy = "name", sortOrder, page, pageSize } = vaildatedFilters;
    const where: Prisma.FoodWhereInput = {};

    if(searchTerm) {
        where.name = { contains: searchTerm };
    }

    const [minCalorieStr, maxCalorieStr] = caloriesRange;
    const numMinCalories = minCalorieStr === "" ? undefined : Number(minCalorieStr);
    const numMaxCalories = maxCalorieStr === "" ? undefined : Number(maxCalorieStr);
    if(numMinCalories !== undefined || numMaxCalories !== undefined) {
        where.calories = {};
        if(numMinCalories !== undefined) {
            where.calories.gte = numMinCalories;
        }
        if(numMaxCalories !== undefined) {
            where.calories.lte = numMaxCalories;
        }
    }

    const [minProteinStr, maxProteinStr] = proteinRange;
    const numMinProtein = minProteinStr === "" ? undefined : Number(minProteinStr);
    const numMaxProtein = maxProteinStr === "" ? undefined : Number(maxProteinStr);
    if(numMinProtein !== undefined || numMaxProtein !== undefined) {
        where.protein = {};
        if(numMinProtein !== undefined) {
            where.protein.gte = numMinProtein;
        }
        if(numMaxProtein !== undefined) {
            where.protein.lte = numMaxProtein;
        }
    }

    const numCategoryId = categoryId ? Number(categoryId) : undefined;
    if(numCategoryId !== undefined && numCategoryId !== 0) {
        where.category = { id: numCategoryId };
    }

    const skip = (page - 1) * pageSize;

    const [ total, data ] = await Promise.all([
        db.food.count({ where }),
        db.food.findMany({
            where,
            include: { foodServingUnits: true },
            orderBy: { [sortBy]: sortOrder},
            skip,
            take: pageSize,
        }),
    ]);

    return {
        data,
        total,
        page,
        pageSize,
        totalPages: Math.ceil(total / pageSize),
    }
}

const getFood = async (id: number): Promise<FoodSchema | null> => {
    const food = await db.food.findUnique({
        where: { id },
        include: { foodServingUnits: true },
    });
    if(food === null) {
        return null;
    }
    return {
        action: "update",
        id,
        name: food.name,
        calories: toStringSafe(food.calories),
        protein: toStringSafe(food.protein),
        fat: toStringSafe(food.fat),
        carbohydrates: toStringSafe(food.carbohydrates),
        fiber: toStringSafe(food.fiber),
        sugar: toStringSafe(food.sugar),
        categoryId: toStringSafe(food.categoryId),
        foodServingUnits: food.foodServingUnits.map(fsu => ({
            foodServingUnitId: toStringSafe(fsu.id),
            grams: toStringSafe(fsu.grams),
        })),
    };
}

export { getFoods, getFood };
