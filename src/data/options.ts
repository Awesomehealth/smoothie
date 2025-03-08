
import { ProteinType, DietType, ProteinAmount, CarbAmount, FatAmount, CalorieRange } from './types';

export const proteinOptions: ProteinType[] = ["whey", "plant", "egg", "collagen", "peanut"];
export const dietOptions: DietType[] = ["vegan", "vegetarian", "keto", "paleo", "gluten-free", "dairy-free"];
export const proteinAmounts: ProteinAmount[] = ["high", "medium", "low"];
export const carbAmounts: CarbAmount[] = ["high", "medium", "low"];
export const fatAmounts: FatAmount[] = ["high", "medium", "low"];
export const calorieRanges: CalorieRange[] = ["100-200", "200-300", "300-400", "400-500", "500+"];
