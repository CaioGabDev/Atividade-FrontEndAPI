"use client";

import styles from "../home/Home.module.css"
import {useEffect, useState} from "react";
import CharacterCard from "../../components/CharacterCard";
import axios from "axios";

export default function Home () {
  const [characters, setCharacters] = useState ([]);

  useEffect(() => {
    axios.get('https:/rickandmortyapi.com/api/character/')
    .then((response) => {
      setCharacters(response.data.results)
    })
    .catch((error) => {
      console.error('Error ao buscar personagens: ', error);
      setLoading(false);
    })
  },[]);

  return (
    
    <div className={styles.container}>
    <div className={styles.cards}>
      {characters.map((char)=>(
        <CharacterCard key={char.id} character={char}></CharacterCard>
      ))}
    </div>
    </div>
  );
}