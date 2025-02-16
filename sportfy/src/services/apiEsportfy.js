import axios from "axios";

const URL = "http://localhost:3001/api";

const responseArtists = await axios.get(`${URL}/artist`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;
