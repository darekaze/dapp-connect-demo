import { WagmiConfig } from "wagmi"

import { web3Client } from "./services/wagmi"
import { HomePage } from "./pages/HomePage"

const App = () => {
  return (
    <WagmiConfig client={web3Client}>
      <HomePage />
    </WagmiConfig>
  )
}

export default App
