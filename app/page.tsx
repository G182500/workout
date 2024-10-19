import Accordion from "@/components/ui/accordion";
import Carousel from "@/components/ui/carousel";

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

  return (
    <div>
      <Accordion title="COSTAS">
        <div>
          <p>PULLEY FRENTE</p>
          <Carousel data={images} />
        </div>
      </Accordion>

      <Accordion title="TRICEPS">
        <p>Em desenvolvimento...</p>
      </Accordion>


    </div>
  );
}
