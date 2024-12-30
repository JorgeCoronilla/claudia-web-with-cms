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
          I am a software engineer with a passion for learning and sharing my
          knowledge with others. I have experience working with JavaScript and
          Python, and I am currently learning about web development and cloud
          computing.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugit
          magnam hic earum at consequuntur possimus. Qui enim ab soluta magnam
          corporis sunt obcaecati maiores, fugit vitae, asperiores voluptatibus
          facere.
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
