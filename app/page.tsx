import Accordion from "@/components/ui/accordion";
import Carousel from "@/components/ui/carousel";
import Tabs from "@/components/ui/tabs";
import Link from 'next/link'

export default function Home() {
  const images = [
    { image: "/imgs/back/pulley1.jpg" },
    { image: "/imgs/back/pulley2.jpg" }
  ]

  /*
  <div className="relative h-72 w-72">
    <Image fill src={`/imgs/back/pulley1.jpg`} quality={100} alt="Imagem Pulley Frente 1" className="object-cover rounded-md" />
  </div>
  */

  const tabs = [
    {
      name: "PULLEY FRENTE", content: (
        <>
          <Carousel data={images} />
          <br />
          <p className="text-sm opacity-80"><strong>DICA:</strong> Retorne lentamente para a posição original, estendendo os braços para executar esse movimento.</p>
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
