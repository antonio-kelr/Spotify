import axios from "axios";

const URL = "https://spotify-0da5.onrender.com/api";

const responseArtists = await axios.get(`${URL}/artist`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;
