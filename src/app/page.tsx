"use client";

import { useState } from "react";
import { LoaderWindow } from "../components/loaderWindow/index";
import { SectionHero } from "../components/Main/SectionHero";
export default function Home() {
  const [displayed, setDisplayed] = useState(0);
  const [loaderFinished, setLoaderFinished] = useState(false);

  return (
    <>
      <SectionHero />

      {/* <LoaderWindow
        setLoaderFinished={setLoaderFinished}
        displayed={displayed}
        setDisplayed={setDisplayed}
      /> */}
    </>
  );
}
