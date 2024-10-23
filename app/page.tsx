import SetsLog from "@/components/sets-log";
import Accordion from "@/components/ui/accordion";
import Carousel from "@/components/ui/carousel";
import Tabs from "@/components/ui/tabs";
import Link from 'next/link'

export default function Home() {
  const images = [
    { image: "/imgs/back/pulley1.jpg" },
    { image: "/imgs/back/pulley2.jpg" }
  ]

  const tabs = [
    {
      name: "PULLEY FRENTE", content: (
        <>
          <p className="text-center text-sm opacity-80">
            Trabalha especialmente os músculos latíssimos do dorso, principais responsáveis pela forma &apos;V&apos;.
          </p>
          <SetsLog />
          <Carousel data={images} />
          <p className="text-sm opacity-80 italic"><strong>DICA:</strong> Retorne lentamente para a posição original, estendendo os braços para executar esse movimento.</p>
        </>
      )
    },
    {
      name: "REMADA BAIXA", content: (
        <>
          Em desenvolvimento...
        </>
      )
    }
  ];

  return (
    <div>
      <Accordion title="BACK DAY">
        <Tabs tabs={tabs}></Tabs>
      </Accordion>

      <Accordion title="TRICEPS">
        <p>Em desenvolvimento...</p>
      </Accordion>

      <br />
      <Link className="ml-2 text-lg text-slate-200" href="https://open.spotify.com/playlist/1pIYO77msXjAuXrNeDZCYM?si=23f8896f292641a9">SPOTIFY</Link>

    </div>
  );
}
