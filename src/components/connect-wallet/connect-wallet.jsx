import React, { useState, useEffect } from "react";
import { EthereumProvider } from "@walletconnect/ethereum-provider";
import Web3 from "web3";
import "./connect-wallet.css";

function ConnectWalletModule({ size }) {
  const [address, setAddress] = useState(localStorage.getItem("walletAddress") || "");
  const [provider, setProvider] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);

  // Инициализация провайдера
  const initializeProvider = async () => {
    try {
      const provider = await EthereumProvider.init({
        projectId: 'bbb6d833f06f9bf83eae9b77da490629',
        chains: [1],
        optionalChains: [56, 137],
        showQrModal: true,
        methods: ["eth_sendTransaction", "personal_sign"],
        events: ["chainChanged", "accountsChanged"],
        qrModalOptions: {
          themeVariables: {
            '--wcm-z-index': '9999'
          }
        }
      });

      provider.on("connect", () => {
        console.log("WalletConnect connected");
      });

      provider.on("disconnect", (error) => {
        console.log("WalletConnect disconnected", error);
        handleDisconnect();
      });

      provider.on("error", (error) => {
        console.error("WalletConnect error", error);
        handleDisconnect();
      });

      return provider;
    } catch (error) {
      console.error("Provider initialization error:", error);
      throw error;
    }
  };

  // Подключение через WalletConnect
  const connectWalletConnect = async () => {
    try {
      setIsConnecting(true);
      const provider = await initializeProvider();
      await provider.enable();
      
      const web3Instance = new Web3(provider);
      const accounts = await web3Instance.eth.getAccounts();
      
      setProvider(provider);
      setWeb3(web3Instance);
      setAddress(accounts[0]);
      localStorage.setItem("walletAddress", accounts[0]);

    } catch (error) {
      console.error("Connection error:", error);
      handleDisconnect();
    } finally {
      setIsConnecting(false);
    }
  };

  // Подключение через MetaMask
  const connectMetaMask = async () => {
    try {
      if (!window.ethereum) throw new Error("No Ethereum provider found");
      
      const accounts = await window.ethereum.request({ 
        method: "eth_requestAccounts" 
      });
      
      setAddress(accounts[0]);
      localStorage.setItem("walletAddress", accounts[0]);

      window.ethereum.on("accountsChanged", handleAccountsChanged);
      window.ethereum.on("chainChanged", handleChainChanged);

    } catch (error) {
      console.error("MetaMask error:", error);
    }
  };

  // Обработчики событий
  const handleAccountsChanged = (accounts) => {
    if (accounts.length > 0) {
      setAddress(accounts[0]);
    } else {
      handleDisconnect();
    }
  };

  const handleChainChanged = (chainId) => {
    console.log("Chain changed to:", chainId.toString());
    window.location.reload();
  };

  // Отключение кошелька
  const handleDisconnect = () => {
    if (provider) {
      provider.disconnect();
      provider.removeAllListeners();
    }
    if (web3) {
      web3.currentProvider?.removeAllListeners?.();
    }
    setProvider(null);
    setWeb3(null);
    setAddress("");
    localStorage.removeItem("walletAddress");
  };

  // Очистка при размонтировании
  useEffect(() => {
    return () => {
      if (provider) {
        provider.disconnect();
        provider.removeAllListeners();
      }
      if (window.ethereum) {
        window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
        window.ethereum.removeListener("chainChanged", handleChainChanged);
      }
    };
  }, [provider]);

  // Обработчик клика
  const handleConnectClick = () => {
    if (address) {
      handleDisconnect();
    } else if (window.ethereum) {
      connectMetaMask();
    } else {
      connectWalletConnect();
    }
  };

  return (
    <button 
      className={`main_btn blue_btn ${size} ${isConnecting ? "loading" : ""}`}
      onClick={handleConnectClick}
      disabled={isConnecting}
    >
      {isConnecting ? "Connecting..." : 
        address ? `${address.slice(0, 6)}...${address.slice(-4)}` : "Connect Wallet"}
    </button>
  );
}

export default ConnectWalletModule;