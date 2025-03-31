// Новый импорт для ethers.js v6+
import { BrowserProvider } from 'ethers';  // Заменяет Web3Provider
import { ethers } from 'ethers';          // Для общих утилит

// Проверка MetaMask
const isMetaMaskInstalled = () => {
  return !!window.ethereum;
};

// Подключение кошелька
export const connectWallet = async () => {
  if (!isMetaMaskInstalled()) {
    alert("Please install MetaMask!");
    return null;
  }

  try {
    const provider = new BrowserProvider(window.ethereum);  // Бывший Web3Provider
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();  // Теперь getSigner() — асинхронный
    const address = await signer.getAddress();
    return { provider, signer, address };
  } catch (error) {
    console.error("Connection error:", error);
    return null;
  }
};

// Конфиги сетей (подставьте актуальные chainId)
const NETWORKS = {
  ETHEREUM: {
    chainId: "0x1", // 1
    name: "Ethereum Mainnet",
  },
  BSC: {
    chainId: "0x38", // 56
    name: "BNB Smart Chain",
  },
  BSC_TESTNET: {
    chainId: "0x61", // 97
    name: "BSC Testnet",
  },
};

// Переключение сети
export const switchNetwork = async (networkKey) => {
  if (!isMetaMaskInstalled()) return false;

  const network = NETWORKS[networkKey];
  if (!network) throw new Error("Unknown network");

  try {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: network.chainId }],
    });
    return true;
  } catch (error) {
    console.error("Switch error:", error);
    return false;
  }
};
