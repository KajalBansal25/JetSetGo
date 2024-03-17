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
shift:`<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
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
profile:`<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Circle representing the outer boundary of the profile icon -->
  <circle cx="50" cy="50" r="50" fill="#ffc0cb" /> <!-- Pink background -->
  <!-- Head part of the profile (a smaller circle) -->
  <circle cx="50" cy="40" r="20" fill="#ffffff" />
  <!-- Shoulders part of the profile (a rounded rectangle or ellipse) -->
  <ellipse cx="50" cy="70" rx="30" ry="20" fill="#ffffff" />
</svg>
`,
hamburger:`<svg width="40" height="30" viewBox="0 0 40 30" xmlns="http://www.w3.org/2000/svg">
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
  rightArrow: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
  <path d="M10,20A10,10,0,1,0,0,10,10,10,0,0,0,10,20ZM8.711,4.3l5.7,5.766L8.7,15.711,7.3,14.289l4.289-4.242L7.289,5.7Z"/>
</svg>`,
  calendarIcon: `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 10H21M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
};
