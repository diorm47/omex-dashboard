// import React from "react";
// import "./connect-wallet.css";
// import { useState } from "react";
// import { connectWallet } from "../../providers/web3";

// function ConnectWalletModule({ size }) {
//   const [address, setAddress] = useState(localStorage.getItem("token"));

//   const handleConnect = async () => {
//     try {
//       // Проверяем наличие MetaMask перед вызовом connectWallet()
//       if (!window.ethereum) {
//         alert("Please install MetaMask!");
//         return;
//       }

//       const walletData = await connectWallet();

//       // Проверяем, что walletData не null/undefined
//       if (!walletData) {
//         console.log("Wallet connection failed");
//         return;
//       }

//       // Теперь безопасно деструктурируем
//       const { address } = walletData;
//       setAddress(address);
//       localStorage.setItem("token", address);
//       window.location.reload();
//     } catch (error) {
//       console.error("Connection error:", error);
//       alert(`Connection error: ${error.message}`);
//     }
//   };

//   return (
//     <button className={`main_btn blue_btn ${size}`} onClick={handleConnect}>
//       {address
//         ? `${address.slice(0, 6)}...${address.slice(-4)}`
//         : "Connect Wallet"}
//     </button>
//   );
// }

// export default ConnectWalletModule;
