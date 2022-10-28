import { createClient, configureChains, defaultChains } from "wagmi"
import { publicProvider } from "wagmi/providers/public"

// Connectors
import { InjectedConnector } from "wagmi/connectors/injected"
import { MetaMaskConnector } from "wagmi/connectors/metaMask"

// NOTE: defaultChains includes all ethereum net (mainnet + testnets)
// For production, disable use of testnets

export const { chains, provider, webSocketProvider } = configureChains(
  [...defaultChains],
  [publicProvider()]
)

export const web3Client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new InjectedConnector({
      chains,
      options: {
        name: "Injected",
        shimDisconnect: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
})
