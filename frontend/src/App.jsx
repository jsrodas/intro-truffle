import { useEffect, useState } from 'react'
import './App.css'
import { ethers } from "ethers"
import abi from "./contracts/MyToken.json"

const provider = new ethers.BrowserProvider(window.ethereum)

function App() {
  const [account, setAccount] = useState(null)
  const [balance, setBalance] = useState(null)
  const [contract, setContract] = useState(null)
  const [tokens, setTokens] = useState(null)

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

  useEffect(() => {
    async function contract() {
      console.log(abi);
      const smartContractAddress = "0xec2dC41e0a5ff61D563b60aabe462C3c44de4B77"
      const signer = await provider.getSigner(account)
      const contract = new ethers.Contract(smartContractAddress, abi.abi, signer)
      setContract(contract)
    }
    contract()
  }, [account])

  useEffect(() => {
      if(!contract) return;
      contract.balanceOf(account).then((balance) => {
        setTokens(balance.toString())
      })
  }, [contract, account])


  return (
    <div>{account} - {balance} tokens: {tokens}</div>
  )
}

export default App
