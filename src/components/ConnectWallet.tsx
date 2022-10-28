import { useState } from 'react'
import { useConnect, useDisconnect, useAccount } from 'wagmi'

import { Button, Modal } from 'react-daisyui'

export const ConnectWallet = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const { isConnected } = useAccount()
  const { connectAsync, connectors, error, isLoading, pendingConnector } = useConnect()
  const { disconnect } = useDisconnect()

  const toggleVisible = () => {
    setVisible(!visible)
  }

  if (isConnected) {
    return (
      <>
        <Button color="error" onClick={() => disconnect()}>
          Disconnect
        </Button>
      </>
    )
  }

  return (
    <>
      <Button color="primary" onClick={toggleVisible}>
        Connect Wallet
      </Button>

      <Modal open={visible} onClickBackdrop={toggleVisible}>
        <Modal.Header className="font-bold mb-6">Connect your wallet</Modal.Header>

        <Modal.Body className="flex flex-col gap-5">
          <div className="flex gap-4">
            {connectors.map((connector) => (
              <Button
                color="primary"
                key={connector.id}
                loading={isLoading && connector.id === pendingConnector?.id}
                disabled={!connector.ready}
                onClick={async () => {
                  await connectAsync({ connector })
                  setVisible(false)
                }}
              >
                {connector.name}
                {!connector.ready && ' (unsupported)'}
              </Button>
            ))}
          </div>

          {error && <div className="text-error">Error: {error.message}</div>}

          <div>
            If you don't have a wallet, you can select a provider and create one now.{' '}
            <span className="text-primary">Learn More</span>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
