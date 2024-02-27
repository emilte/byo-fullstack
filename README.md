# Build your own FullStack!

Hvem trenger Next.js? Her skal vi lage en FullStack TypeScript React app med støtte for:

- Sømløs utvikling / Hot Module Reloading
- Server-Side Rendering
- Client & Server Routing

## Bun

[Bun](https://bun.dev) er en drop-in erstatning for Node og NPM med bedre ytelse. Legg inn med:

```
curl -fsSL https://bun.sh/install | bash
```

Nå kan du bruke `bun install` i stedet for `npm install`, og tilsvarende for alle `npm`-kommandoer.

Kjør `bun install` før workshoppen starter; alle foreslåtte avhengigheter er allerede lagt inn i [package.json](./package.json). Du kan fritt legge til flere ved behov, med `bun add <package>`.

# Oppgaver

**VIKTIG: Det ligger løsningsforslag i mappene markert med `-lf`. Ikke se på disse før du er klar for spoilers!**

**[Lag en issue](https://github.com/geirsagberg/byo-fullstack/issues/new) hvis du har trøbbel, så kan workshoppen forbedres!**

Workshoppen består av følgende oppgaver:

1. Sette opp et utviklingsmiljø med [Vite](https://vitejs.dev) og [Express](https://expressjs.com) som starter både backend og frontend samtidig, med Hot Module Reloading for begge
1. Sette opp [Server-Side Rendering (SSR)](https://vitejs.dev/guide/ssr) for våre React-komponenter
1. Legge til [HTML5 history-basert routing som fungerer med SSR](https://swan-io.github.io/chicane/)
1. Bygge appen for [produksjon](https://vitejs.dev/guide/build.html)

BONUS:

1. Sett opp [valgfritt CSS-bibliotek](https://tailwindcss.com/) med styling som fungerer både fra server og client
1. Legg ved "initial data" fra server
1. Legg til støtte for [Suspense og Streaming SSR](https://blog.logrocket.com/streaming-ssr-with-react-18/)
1. Legg til [tRPC](https://trpc.io) for full-stack type safe async data fetching
1. [Lag din egen router](https://dev.to/franciscomendes10866/create-your-own-react-router-53ng)

## 1. FullStack utviklingsmiljø med HMR

```
cd oppgave-1
code .
```

(Alternativt, høyreklikk "oppgave-1"-mappa i VS Code og velg "Open new workbench here")

## 2. Server-Side Rendering

```
cd oppgave-2
code .
```

(Alternativt, høyreklikk "oppgave-2"-mappa i VS Code og velg "Open new workbench here")

## 3. Client & Server Routing

```
cd oppgave-3
code .
```

(Alternativt, høyreklikk "oppgave-3"-mappa i VS Code og velg "Open new workbench here")

## 4. Bygg for produksjon

```
cd oppgave-4
code .
```

(Alternativt, høyreklikk "oppgave-4"-mappa i VS Code og velg "Open new workbench here")
