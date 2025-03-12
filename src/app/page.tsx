import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import Card from "@/components/Card";


export default function Home() {
  return (
    <main>
      <Banner img="/img/banner.jpg" alt="cover"/>
      <div className="banner-section">
        <Card img="/img/card1.jpg" header="The Bloom Paviliion" text="A stunning hall with beautiful view and a bunch of tree."/>
      </div>
    </main>
  );
}
