export const svgXml = {
  calendar: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <title>Calendar Icon</title>
  <desc>Simple calendar with date grid</desc>
  <g fill="none" stroke="#000" stroke-linecap="square">
    <rect x="1" y="1" width="18" height="18" rx="2" ry="2"/>
    <line x1="3" y1="4" x2="17" y2="4"/>
    <line x1="3" y1="8" x2="17" y2="8"/>
    <line x1="3" y1="12" x2="17" y2="12"/>
    <line x1="6" y1="16" x2="14" y2="16"/>
  </g>
</svg>
`,
  search: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7">
  <title>Search Icon</title>
  <desc>Magnifying glass icon</desc>
  <g fill="none" stroke="#fff" stroke-width="3" stroke-linecap="square">
    <circle cx="8" cy="8" r="7"/>
    <path d="M18.5 18.3l-5.4-5.4"/>
  </g>
</svg>`,
  shift: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="2" fill="none" />
  <line 
    x1="20" 
    y1="50" 
    x2="80" 
    y2="50" 
    stroke="black" 
    stroke-width="2" 
    marker-end="url(#upArrow)" 
  />
  <line 
    x1="20" 
    y1="50" 
    x2="80" 
    y2="50" 
    stroke="black" 
    stroke-width="2" 
    marker-start="url(#downArrow)" 
  />
  <defs>
    <marker 
      id="upArrow" 
      markerWidth="10" 
      markerHeight="10" 
      refX="5" 
      refY="5" 
      orient="auto"
      markerUnits="userSpaceOnUse"
    >
      <path d="M 0 0 L 5 5 L 10 0 Z" fill="black" />
    </marker>
    <marker 
      id="downArrow" 
      markerWidth="10" 
      markerHeight="10" 
      refX="5" 
      refY="5" 
      orient="auto"
      markerUnits="userSpaceOnUse"
    >
      <path d="M 0 10 L 5 5 L 10 10 Z" fill="black" />
    </marker>
  </defs>
</svg>
`,
  profile: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Circle representing the outer boundary of the profile icon -->
  <circle cx="50" cy="50" r="50" fill="#ffc0cb" /> <!-- Pink background -->
  <!-- Head part of the profile (a smaller circle) -->
  <circle cx="50" cy="40" r="20" fill="#ffffff" />
  <!-- Shoulders part of the profile (a rounded rectangle or ellipse) -->
  <ellipse cx="50" cy="70" rx="30" ry="20" fill="#ffffff" />
</svg>
`,
  hamburger: `<svg width="40" height="30" viewBox="0 0 40 30" xmlns="http://www.w3.org/2000/svg">
  <!-- Top line -->
  <rect x="0" y="2" width="40" height="4" fill="black" />
  <!-- Middle line -->
  <rect x="0" y="13" width="40" height="4" fill="black" />
  <!-- Bottom line -->
  <rect x="0" y="24" width="40" height="4" fill="black" />
</svg>`,
  backIcon: `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <!-- Arrow pointing left -->
  <path d="M19 12H5M12 19l-7-7 7-7" stroke="black" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
  forward: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M8.90991 19.92L15.4299 13.4C16.1999 12.63 16.1999 11.37 15.4299 10.6L8.90991 4.08002" stroke="#18395E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  leftArrow: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
  <path d="M10,20A10,10,0,1,0,0,10,10,10,0,0,0,10,20ZM11.289,4.3,12.711,5.7l-4.3,4.344L12.7,14.289,11.3,15.711,5.586,10.063Z"/>
</svg>`,
  calendarIcon: `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 10H21M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  filter: `<svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" id="filter" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" class="icon line-color"><path id="primary" d="M5,4V6.64a1,1,0,0,0,.23.64l4.54,5.44a1,1,0,0,1,.23.64V21l4-2V13.36a1,1,0,0,1,.23-.64l4.54-5.44A1,1,0,0,0,19,6.64V4a1,1,0,0,0-1-1H6A1,1,0,0,0,5,4Z" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path></svg>`,
  sort: `<svg width="800px" height="800px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.2929 7.70711C9.90237 7.31658 9.90237 6.68342 10.2929 6.29289L13.2929 3.29289C13.6834 2.90237 14.3166 2.90237 14.7071 3.29289C15.0976 3.68342 15.0976 4.31658 14.7071 4.70711L11.7071 7.70711C11.3166 8.09763 10.6834 8.09763 10.2929 7.70711Z" fill="#000000"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 7.70711C17.3166 8.09763 16.6834 8.09763 16.2929 7.70711L13.2929 4.70711C12.9024 4.31658 12.9024 3.68342 13.2929 3.29289C13.6834 2.90237 14.3166 2.90237 14.7071 3.29289L17.7071 6.29289C18.0976 6.68342 18.0976 7.31658 17.7071 7.70711Z" fill="#000000"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 5C14.5523 5 15 5.44772 15 6V14C15 14.5523 14.5523 15 14 15C13.4477 15 13 14.5523 13 14V6C13 5.44772 13.4477 5 14 5Z" fill="#000000"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.70711 12.2929C10.0976 12.6834 10.0976 13.3166 9.70711 13.7071L6.70711 16.7071C6.31658 17.0976 5.68342 17.0976 5.29289 16.7071C4.90237 16.3166 4.90237 15.6834 5.29289 15.2929L8.29289 12.2929C8.68342 11.9024 9.31658 11.9024 9.70711 12.2929Z" fill="#000000"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.29289 12.2929C2.68342 11.9024 3.31658 11.9024 3.70711 12.2929L6.70711 15.2929C7.09763 15.6834 7.09763 16.3166 6.70711 16.7071C6.31658 17.0976 5.68342 17.0976 5.29289 16.7071L2.29289 13.7071C1.90237 13.3166 1.90237 12.6834 2.29289 12.2929Z" fill="#000000"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 15C5.44772 15 5 14.5523 5 14L5 6C5 5.44771 5.44772 5 6 5C6.55228 5 7 5.44771 7 6V14C7 14.5523 6.55228 15 6 15Z" fill="#000000"/>
</svg>`,
  cross: `<svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" id="cross" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" class="icon line-color"><line id="primary" x1="19" y1="19" x2="5" y2="5" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line><line id="primary-2" data-name="primary" x1="19" y1="5" x2="5" y2="19" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line></svg>`,

  rightArrow: `<svg width="800px" height="800px" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M49 200.913C99.7842 198.157 150.377 196.78 200.778 196.78C276.38 196.78 336.003 200.913 351.598 200.913" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M297.858 148C311.416 151.811 342.206 190.498 350.385 194.54C358.564 198.581 323.305 244.831 307.119 253" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
};
