import { artistArray } from "../sportfy/src/assets/database/artists.js";
import { songsArray } from "../sportfy/src/assets/database/songs.js";
import { db } from "./connection.js";


const artitas = artistArray.map((cureentObj) => {
  const collectio = { ...cureentObj };
  delete collectio.id;
  return collectio
});
const songs = songsArray.map((cureeSongntObj) => {
  const collectioSong = { ...cureeSongntObj };
  delete collectioSong.id;
  return collectioSong
});


const resposeArtis =  await db.collection("artists").insertMany(artitas)
const resposeArtisSong =  await db.collection("songs").insertMany(songs)

console.log(resposeArtis);
console.log(resposeArtisSong);
