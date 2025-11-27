# Client (React)

Este diretório contém a versão front-end em React. Para desenvolvimento:

1. cd client
2. npm install
3. npm run dev

O front-end consome a API do Flask em /api/* (ex.: /api/get_volunteers).

Para produção, rode `npm run build` e copie os arquivos para `client/dist`. O Flask está configurado para servir `client/dist` quando disponível.
