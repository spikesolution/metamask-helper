async function addTokenToMetamask(el) {
  const {
    address,
    symbol,
    decimals,
    image,
  } = el.target.dataset;

  const wasAdded = await ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20', // Initially only supports ERC20, but eventually more!
      options: {
        address: address, // The address that the token is at.
        symbol: symbol, // A ticker symbol or shorthand, up to 5 chars.
        decimals: decimals, // The number of decimals in the token
        image: image, // A string url of the token logo
      },
    },
  });
}

// Return HTML for a bootstrap card displaying the token data
function tokenCard(tokenData) {
  return `
        <div class="card">
          <div class="card-header">
            <img src="${tokenData.image}" width="32" />
            ${tokenData.symbol}
          </div>
          <div class="card-body">
            <p class="card-text">
              ${tokenData.address}
              <a href="${tokenData.contractLink}" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"/></svg>
              </a>
            </p>
            ${addTokenButton(tokenData)}
          </div>
        </div>
  `;
}

function addTokenButton(tokenData) {
  return `
    <a href="#"
       class="addTokenLink btn btn-primary"
       data-address="${tokenData.address}"
       data-symbol="${tokenData.symbol}"
       data-decimals="${tokenData.decimals}"
       data-image="${tokenData.image}"
       >
       Add to metamask
    </a>
  `;
}

window.addEventListener('load', async () => {
  const h1 = document.getElementById("networkName");

  if (window.ethereum === undefined) {
    h1.innerHTML = "Please enable and connect Metamask";
  } else {
    window.ethereum.autoRefreshOnNetworkChange = false; // Silence a warning from Metamask

    await window.ethereum.request({ method: 'eth_requestAccounts' }).catch(err => {
      // This doesn't matter - we only need to ensure ethereum has initialised
      console.log("User rejected metamask connection request");
    });

    // Force page refreshes on network changes
    window.ethereum.on('chainChanged', (chainId) => {
      window.location.reload();
    });

    const chainId = window.ethereum.networkVersion;
    const chain = data[chainId];

    h1.innerHTML = chain.network || "Unsupported Network";

    // Add each token as a bootstrap card
    const tokenCards = document.getElementById("tokenCards");
    for (const token of chain.tokens) {
      token.contractLink = `${chain.explorer}${token.address}`;
      tokenCards.insertAdjacentHTML("beforeend", tokenCard(token));
    }

    // Add click handler for token links
    const links = document.getElementsByClassName('addTokenLink');
    for (const el of links) {
      el.addEventListener("click", addTokenToMetamask);
    }
  }
});
