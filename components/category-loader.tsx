"use client"
import { useEffect } from "react";
import { useGetExercisesByCategory } from "@/services/workout/use-get-by-category";
import ExerciseInformation from "./exercise-information";
import Tabs from "./ui/tabs";
import { Loader2 } from "lucide-react";

export default function CategoryLoader({ name, activated }: { name: string, activated: boolean }) {
  const getExercises = useGetExercisesByCategory(name, {
    enabled: false,
  });

  const exercises = getExercises.data?.exercises;

  useEffect(() => {
    if (!exercises && activated) getExercises.refetch();
  }, [activated]);

  /*const tabs = exercises.map(({ name, images, description }) => {
    return {
      name,
      content: <ExerciseInformation images={images} description={description} />
    }
  })*/

  const images = [
    { image: "/imgs/back/pulley1.jpg", alt: "Pulley 1" },
    { image: "/imgs/back/pulley2.jpg", alt: "Pulley 2" },
  ];

  const images2 = [
    { image: "/imgs/back/pullover1.jpg", alt: "Pullover 1" },
    { image: "/imgs/back/pullover2.jpg", alt: "Pullover 2" },
  ];

  const images3 = [
    { image: "/imgs/back/highrow1.jpg", alt: "Highrow 1" },
    { image: "/imgs/back/highrow2.jpg", alt: "Highrow 2" },
  ];

  const tabs = [
    {
      name: "REMADA ALTA",
      content: <ExerciseInformation images={images3} description="Trabalha a parte superior das costas, especificamente o trapézio, romboides e deltoides posteriores." />
    },
    {
      name: "PULLEY FRENTE",
      content: <ExerciseInformation images={images} description="Ênfase nos músculos latíssimos do dorso, principais responsáveis pela forma &apos;V&apos;." />
    },
    {
      name: "PULLOVER COM CABO",
      content: <ExerciseInformation images={images2} description="Desenvolve a parte superior das costas, especificamente o trapézio, romboides e deltoides posteriores." />
    },
  ];

  return (
    <>
      {
        exercises ? <Tabs tabs={tabs} /> : <div className="flex h-full items-center justify-center">{<Loader2 className="animate-spin" color={"#4ade80"} size={40} strokeWidth={3} />}</div>
      }
    </>
  )
}