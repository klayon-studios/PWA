# Klayon Demo

This is an app for collecting phygital items. It is built using [Privy](https://www.privy.io/), [Viem](https://viem.sh/), [NextPWA](https://www.npmjs.com/package/next-pwa), [TailwindCSS](https://tailwindcss.com/) and [Shadcn/ui](https://ui.shadcn.com). All transactions are sent on the [Base](https://base.org/) Goerli testnet.

## Setup

First, clone the repo and install dependencies:

```bash
bun i
```

Next, create your own env file by running

```bash
cp .env.example.local .env.local
```

Lastly, run

```bash
bun dev
```

Visit http://localhost:3000 in your browser to test the app.

For testing development on mobile, we recommend using `ngrok` ([guide](https://www.aleksandrhovhannisyan.com/blog/test-localhost-on-mobile/)), since privy makes use of [crypto.subtle](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/subtle) which requires a secure context (`https`)
