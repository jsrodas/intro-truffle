import { useEffect, useState } from 'react'
import './App.css'
import { ethers } from "ethers"

const provider = new ethers.BrowserProvider(window.ethereum)

function App() {
  const [account, setAccount] = useState(null)
  const [balance, setBalance] = useState(null)

  useEffect(() => {
    window.ethereum.request({method: "eth_requestAccounts"}).then((accounts) => {
      window.ethereum.on("accountsChanged", (accounts) => {
        setAccount(accounts[0])
      })
      setAccount(accounts[0])
      console.log(accounts)
    })
  }, [])

  useEffect(() => {
    if(!account) return;
    provider.getBalance(account).then((balance) => {
      setBalance(balance.toString())
    })

  }, [account])


  return (
    <div>{account} - {balance}</div>
  )
}

export default App
