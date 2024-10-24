//import { IProduct } from "@/interfaces/product";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";

interface GetExercisesByCategoryOutput {
  message: string;
  exercises: any; //IProduct[];
}

export const useGetExercisesByCategory = (
  category: string,
  options?: Omit<
    UseQueryOptions<GetExercisesByCategoryOutput>,
    "queryKey" | "queryFn"
  >
) => {
  return useQuery({
    ...options,
    queryKey: ["ExercisesByCategory"],
    queryFn: async () => {
      const resp = await fetch(`/api/product/get-by-category/${category}`, {
        method: "GET",
      });
      const { message, exercises }: GetExercisesByCategoryOutput =
        await resp.json();
      return { message, exercises };
    },
  });
};
