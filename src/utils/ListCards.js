import React from "react";
import CardItem from "./CardItem";

export default function ListCards() {
  const people = [
    "Creola Katherine Johnson: mathematician",
    "Mario José Molina-Pasquel Henriquez: chemist",
    "Mohammad Abdus Salam: physicist",
    "Percy Lavon Julian: chemist",
    "Subrahmanyan Chandrasekhar: astrophysicis",
  ];

  return (
    <div className="card">
      <CardItem people={people} />
    </div>
  );
}
