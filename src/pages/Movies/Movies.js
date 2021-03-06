import "./Movies.css";
import React from "react";
import Section from "../../components/Section/Section";
import { actionMovies, newMovies } from "../../api/movies";

export default function Movies() {
  return (
    <div>
      <Section title="Action Movies" data={actionMovies} content="movie"/>
      <Section title="New Movies" data={newMovies} content="movie"/>
    </div>
  );
}
