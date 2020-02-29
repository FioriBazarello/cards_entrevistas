import React from 'react';
import { useParams } from "react-router-dom";

export default function Deck() {
  const { name } = useParams();

  return (
  <div>DECK: {name}</div>
  );
}