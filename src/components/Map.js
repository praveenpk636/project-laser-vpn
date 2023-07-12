import DottedMap from 'dotted-map/without-countries';
import React from 'react';
// So you do this first step only once, when developing your app
const getMapJSON = require('dotted-map').getMapJSON;

// This function accepts the same arguments as DottedMap in the example above.
const mapJsonString = getMapJSON({ height: 60, grid: 'diagonal' });
const Map = () => {
  // It’s safe to re-create the map at each render, because of the
  // pre-computation it’s super fast ⚡️
  const map = new DottedMap({ map: JSON.parse(mapJsonString) });

  map.addPin({
    lat: 40.73061,
    lng: -73.935242,
    
    svgOptions: { color: 'red', radius: 0.4 },
  });
  map.addPin({
    lat: 50.73061,
    lng: -63.935242,
    
    svgOptions: { color: 'red', radius: 0.4 },
  });
  map.addPin({
    lat: 21.73061,
    lng: -0.935242,
    
    svgOptions: { color: 'red', radius: 0.4 },
  });
  map.addPin({
    lat: 22.73061,
    lng: -73.935242,
    
    svgOptions: { color: 'red', radius: 0.4 },
  });
  map.addPin({
    lat: 33.73061,
    lng: -23.935242,
    
    svgOptions: { color: 'red', radius: 0.4 },
  });

  const svgMap = map.getSVG({
    
    radius: 0.6,
    color: '#edeff1',
    shape: 'circle',
    backgroundColor: 'whight',
  });

  return (
    <section>
    <div className='net d-flex justify-content-center'>
        <h2>Huge Global Network of Fast VPN</h2>
        <p>See LaslesVPN everywhere to make it easier for you when you move locations.</p>
    </div>
    

    <div className='dotedmap'>
      <img src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`} />
    </div>
    </section>
  );
};

export default Map;