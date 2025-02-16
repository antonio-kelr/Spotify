import express from 'express'
import { db } from './connection.js';
import cors from 'cors'
import path  from 'path';

const __dirname = path.resolve()



const app = express()
const PORT = 3001

app.use(cors())

app.get('/api/', (req,res)=> {
    res.send('fala oTariosssss')
} )
app.get('/api/artist', async(req,res)=> {
    res.send( await db.collection("artists").find({}).toArray())
} )
app.get('/api/songs', async(req,res)=> {
    res.send( await db.collection("songs").find({}).toArray())
} )

app.use(express.static(path.join(__dirname, '../sportfy/dist')));

app.get('*', async(req,res)=> {
    res.sendFile((path.join(__dirname, '../sportfy/dist/index.html')))
} )
app.listen(PORT ,()=> { 
  console.log(`servido rodando na porta ${PORT}`);
  
})

