import './App.css';
import { useState } from "react";
import { generateMnemonic } from "bip39";
import { SolanaWallet } from './SolanaWallet';
import { EthWallet } from './EthWallet';

function App() {
  const [mnemonic, setMnemonic] = useState("");

  return (
    <div>
      <h1>Wallet Generator</h1>
      <button onClick={() => setMnemonic(generateMnemonic())}>
        Generate Mnemonic
      </button>

      {mnemonic && (
        <div>
          <h3>Mnemonic:</h3>
          <p>{mnemonic}</p>

          <SolanaWallet mnemonic={mnemonic} />
          <EthWallet mnemonic={mnemonic} />
        </div>
      )}
    </div>
  );
}

export default App;
