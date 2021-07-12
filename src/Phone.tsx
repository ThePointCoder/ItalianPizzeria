import React from 'react'

const Phone = () => {

    const htcV = 137.4*3;
    const htcH = 68.2*3;
    let posX = 80;
    let posY = 50;
    let camX = 68.2*3/2+posX;
    let camY = 137.4/2+posY;
        
    function grabber(event) {
        posX = event.clientX;
        posY = event.clientY;
    }

<svg width="600" height="500" >
  <rect x={posX} y={posY} rx="20" ry="20" width={htcH} height={htcV} fill="url(#phone)"
  style={stroke:rgb(180,180,180);strok-width:2;opaciy:1.0"}/>
	<circle cx={camX} cy={camY} r="18" stroke="white" stroke-width="2" fill="url(#camera)" />
	<line x1={posX} y1={posY+30} x2={htcH+100} y2={posY+30} style={stroke:white;stroke-width:3} />
	<line x1={htcH/2+posX} y1={posY+30} x2={htcH/2+posX} y2={posY+50} style="stroke:white;stroke-width:3" />
	<line x1={posX} y1={htcV+20} x2={htcH+posX} y2={htcV+20} style="stroke:white;stroke-width:3" />
	<defs>
		<linearGradient id="phone" x1="10%" y1="0%" x2="70%" y2="0%">
			<stop offset="0%" style={stop-color:lightgrey;stop-opacity:1} />
			<stop offset="100%" style="stop-color:grey;stop-opacity:1" />
		</linearGradient>
		<linearGradient id="camera" x1="0%" y1="0%" x2="70%" y2="50%">
			<stop offset="0%" style="stop-color:black;stop-opacity:0.1" />
			<stop offset="100%" style="stop-color:black;stop-opacity:1" />
		</linearGradient>
  </defs>
</svg>
}

export default Phone;