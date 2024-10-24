import ExerciseInformation from "@/components/exercise-information";
import Accordion from "@/components/ui/accordion";
import Tabs from "@/components/ui/tabs";
import Link from "next/link";

export default function Home() {
  const images = [
    { image: "/imgs/back/pulley1.jpg" },
    { image: "/imgs/back/pulley2.jpg" },
  ];

  const images2 = [
    { image: "/imgs/back/pullover1.jpg" },
    { image: "/imgs/back/pullover2.jpg" },
  ];

  const images3 = [
    { image: "/imgs/back/highrow1.jpg" },
    { image: "/imgs/back/highrow2.jpg" },
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
    <div>
      <Accordion title="BACK DAY">
        <Tabs tabs={tabs}></Tabs>
      </Accordion>

      <Accordion title="CHEST & SHOULDER">
        <p>Em desenvolvimento...</p>
      </Accordion>

      <Accordion title="LEG DAY">
        <p>Em desenvolvimento...</p>
      </Accordion>

      <Accordion title="ARMS">
        <p>Em desenvolvimento...</p>
      </Accordion>

      <br />
      <Link
        className="ml-2 text-lg text-slate-200"
        href="https://open.spotify.com/playlist/1pIYO77msXjAuXrNeDZCYM?si=23f8896f292641a9"
      >
        SPOTIFY
      </Link>
    </div>
  );
}
