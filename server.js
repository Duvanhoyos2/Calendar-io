import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
const assets={'/':'index.html','/index.html':'index.html','/app.js':'app.js','/style.css':'style.css','/model.js':'model.js'};
const types={html:'text/html',js:'text/javascript',css:'text/css'};
http.createServer(async(req,res)=>{const path=assets[new URL(req.url,'http://localhost').pathname];if(!path){res.writeHead(404);return res.end('No encontrado');}try{const body=await readFile(fileURLToPath(new URL(path,import.meta.url)));res.writeHead(200,{'Content-Type':`${types[path.split('.').pop()]}; charset=utf-8`,'X-Content-Type-Options':'nosniff'});res.end(body);}catch{res.writeHead(500);res.end('No se pudo cargar la aplicación');}}).listen(Number(process.env.PORT)||3000,'0.0.0.0',()=>console.log('Calendar-io iniciado en puerto '+(process.env.PORT||3000)));
