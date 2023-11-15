function globalHeader() {
  return htl.html`
    <div style="display: grid; grid-gap: .875rem; grid-template-columns: repeat(auto-fill, minmax(160px, 5fr));">HIER IST OBEN</div>
  `;
}

function globalFooter() {
  return htl.html`
    <div style="display: grid; grid-gap: .875rem; grid-template-columns: repeat(auto-fill, minmax(160px, 5fr));">UND DAS GANZ UNTEN</div>
  `;
}
