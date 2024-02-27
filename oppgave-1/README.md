# Oppgave 1: FullStack utviklingsmiljø med HMR

## Akseptansekriterier

1. Når man kjører scriptet `bun dev` fra `package.json` skal det startes en server på http://localhost:3000
1. Når man gjør endringer i `src/App.tsx` skal disse umiddelbart vises i nettleseren
1. Når man gjør endringer i `server/index.ts` skal serveren restarte

<details>
<summary>Hint for server</summary>
Bruk [`nodemon --watch`](https://www.npmjs.com/package/nodemon).
</details>

<details>
<summary>Hint for app</summary>
Bruk [`createServer`](https://vitejs.dev/guide/api-javascript.html#createserver) og `vite.middlewares` i express-appen.
</details>
