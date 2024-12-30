'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import MasterClasses from './masterClasses';
export default function Page() {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  return (
    <>
      <section className={styles.bio}>
        <h1>Bio</h1>
        <p>
        Soy ingeniero de software y me apasiona aprender y compartir mis conocimientos con los demás. Tengo experiencia trabajando con JavaScript y Python, y actualmente estoy aprendiendo sobre desarrollo web y computación en la nube.
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugit magnam hic earum at consequuntur possimus. Qui enim ab soluta magnam corporis sunt obcaecati maiores, fugit vitae, asperiores voluptatibus facere.
        </p>
        <button onClick={showModal}>Master Classes</button>
      </section>
      {show && (
        <MasterClasses
          setter={setShow}
          show={show}
        />
      )}
    </>
  );
}
