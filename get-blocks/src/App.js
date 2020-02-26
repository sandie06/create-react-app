import React from 'react';
import logo from './Blockchain-art.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onclick="getBlocks()">Get the latest 10 blocks</button>
	<script>

	function getBlocks() {
		const { JsonRpc } = require('eosjs');
        	const fetch = require('node-fetch');
        	const rpc = new JsonRpc('https://api.eosnewyork.io/', { fetch });
    		let info = await rpc.get_info();
    		console.log(await rpc.get_info(info.last_irreversible_block_num));
	}
	</script>
      </header>
    </div>
  );
}

export default App;
