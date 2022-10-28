import { Navbar } from 'react-daisyui'
import { ConnectWallet } from './ConnectWallet'

export const Header = () => {
  return (
    <Navbar className="bg-base-100">
      <Navbar.Start>
        <a className="btn btn-ghost normal-case text-xl">walletConnect</a>
      </Navbar.Start>

      <Navbar.End>
        <ConnectWallet />
      </Navbar.End>
    </Navbar>
  )
}
