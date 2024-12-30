import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";

import { ContactForm } from './ui/components/contact';
import styles from './page.module.css';


const HOME_QUERY = `*[
  _type == "section1"
]{_id, title, subtitle}`;

const options = { next: { revalidate: 30 } };


export default async function Home() {
  const posts = await client.fetch<SanityDocument[]>(HOME_QUERY, {}, options);
console.log("Print somthing", posts);
  return (
    <main className={styles.main}>
      <section
        className={styles.cover}
        id="cover"
      >
        <h1>
          <span className={styles.claudia}>Claudia</span>
          <span className={styles.de}>
            de<strong className={styles.utrera}>Utrera</strong>
          </span>
        </h1>
          <video

          autoPlay 
          muted
          loop
          className={styles.video}
          playsInline
        ><source src='https://pub-9ab46d589d8e491b8c9ca836b36772a2.r2.dev/cover-video2.mp4' type="video/mp4" /></video> 
      </section>
      <section className={styles.aboutMe}></section>
      <section className={styles.verticalPic}></section>
      <section
        className={styles.contact}
        id="contact"
      >
        <ContactForm />
      </section>
    </main>
  );
}
