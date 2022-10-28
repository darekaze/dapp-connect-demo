import { useAccount, useEnsName, useNetwork } from 'wagmi'
import { Header } from '../components/Header'

export const HomePage = () => {
  const { address, connector, isConnected } = useAccount()
  const { data: ensName } = useEnsName({ address })
  const { chain } = useNetwork()

  return (
    <>
      <Header />
      <div className="h-[calc(100vh-5rem)] flex flex-col items-center justify-center">
        <div className="text-lg font-sans text-center">
          {isConnected ? (
            <div className="flex flex-col gap-4">
              <div>
                <div className="font-bold">Address / ENS Name:</div>
                <div className="break-all">{ensName ? `${ensName} (${address})` : address}</div>
              </div>
              <div>
                Connected to <span className="text-primary font-bold">{chain?.name}</span> network
                using <span className="italic">{connector?.name}</span>
              </div>
            </div>
          ) : (
            <div>Welcome to Connect Wallet Demo, Press 'Connect' to connect your wallet</div>
          )}
        </div>
      </div>
    </>
  )
}
