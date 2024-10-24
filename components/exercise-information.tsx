import SetsTable from "./sets-table";
import Carousel from "./ui/carousel";

interface ExerciseInfoProps {
  images: { image: string, alt: string }[],
  description: string
}

export default function ExerciseInformation({ images, description }: ExerciseInfoProps) {
  return (
    <>
      <p className="text-center text-sm opacity-90">
        {description}
      </p>
      <SetsTable />
      <Carousel data={images} />
    </>
  )
}