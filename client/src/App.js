import * as React from 'react';
import { useState } from 'react';
import { Room, Star } from "@material-ui/icons";
import "./app.css"

import ReactMapGL, { Marker, Popup } from "react-map-gl";



function App() {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 1.321,
    longitude: 103.8198,
    zoom: 8
  });
  return (
    <div className="App">
     <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapStyle="mapbox://styles/donaldwu/ckp4n3edm04px18n0wuz3ax5r"
    >
         <Marker latitude={1.321} longitude={103.8558} offsetLeft={-20} offsetTop={-10}>
        <Room style={{fontSize:viewport.zoom * 3, color:"blue"}}/>
      </Marker>
      {/* <Popup
          latitude={1.321}
          longitude={103.8558}
          closeButton={true}
          closeOnClick={false}
          // onClose={() => togglePopup(true)}
          anchor="left" >
          <div className="card">
            <label>Place</label>
            <h4 className="place">Esplanade</h4>
            <label>Review</label>
            <p className="desc">place to celebrate</p>
            <label>Rating</label>
            <div className="stars">
            <Star className="star" />
            <Star className="star" />
            <Star className="star" />
            <Star className="star" />
            <Star className="star" />
            </div>
            <label>Information</label>
            <span className="username"> Created by <b>DW</b></span>
            <span className="date"> 1 hour ago</span>



          </div>
        </Popup>     */}
    </ReactMapGL>
    </div>
  );
}

export default App;
