# View Trending Collections on Ethereum

This simple web application helps in viewing the trending collections. It provides a visual representation of the top collections in a graphical format.

WALLET DISCONNECTED
![Alt text](/screenshots/Disconnected.png?raw=true "Wallet Disconnected")

WALLET CONNECTED
![Alt text](/screenshots/Connected.png?raw=true "Wallet Connected")

# Use Case:

- If a user's ethereum wallet is connected, they should be able to view the Trending collections data.

# Instructions to run:

- Create a ".env" file at the root level of the project, and add your Icy Tools API Token in the following format,

```
NEXT_PUBLIC_ICY_TOKEN=<TOKEN>
```

- To install dependencies,

```
npm install
```

- To create a production build and run,

```
npm run build
```

```
npm run start
```

- To run in dev mode,

```
npm run dev
```

# Libraries used:

- typescript
- react for the UI
- nivo/bar for the chart
- appollo for graphql
- next for SSR
- tailwind
