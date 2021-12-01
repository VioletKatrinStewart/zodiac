import React from "react";
import background from "../../background.png";
import { zodiac } from "../../data";
import Zodiac from "../zodiac/Zodiac";

export default function main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      <Zodiac />
      {zodiac.map((zodiacCard) => (
        <Zodiac
          key={zodiacCard.name}
          name={zodiacCard.name}
          dates={zodiacCard.dates}
        />
      ))}
    </main>
  );
}
