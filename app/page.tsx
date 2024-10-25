import Accordion from "@/components/ui/accordion";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Accordion title="BACK DAY" />

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
        className="ml-2 text-xl text-slate-200"
        href="https://open.spotify.com/playlist/1pIYO77msXjAuXrNeDZCYM?si=23f8896f292641a9"
      >
        SPOTIFY
      </Link>
    </div>
  );
}
