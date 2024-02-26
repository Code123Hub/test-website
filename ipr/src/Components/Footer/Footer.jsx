
import React, { useEffect } from "react";
import "./Footer.css";
import { FormControl, InputLabel, Input, FormHelperText, Button  } from "@mui/material";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from 'mapbox-gl';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";




export const Footer = () => {

  // const MAPBOX_ACCESS_TOKEN = 'ADD YOUR ACCESS TOKEN';

  // useEffect(() => {
  //   mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
  //   const map = new mapboxgl.Map({
  //     container: 'map',
  //     style: 'mapbox://styles/mapbox/streets-v11',
  //     center: [28.5355, 77.3910], // Noida coordinates
  //     zoom: 14
  //   });

  //   const marker = new mapboxgl.Marker()
  //     .setLngLat([28.5355, 77.3910]) // Coordinates of the marker's position
  //     .addTo(map);
  //   marker.setLngLat([28.5355, 77.3910]);

  //   return () => {
  //     map.remove();
  //   };
  // }, []);

  return (
    <footer id="footer">

      <div className="leftFooter">
        <h4>IPR Gorilla</h4>
        
        <p>Stay informed with our latest news and exclusive content.</p>
      </div>

      <div className="midFooter">
        <h1>AnovIp</h1>
        <p>Where Quality Meets Innovation.</p>
        <p>© 2023 . All Rights Reserved.</p>
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>

        </div>
      </div>

      <div className="rightFooter">
      <FormControl>
        <InputLabel htmlFor="my-input">Email </InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <Button>Subscribe</Button>
        <FormHelperText id="my-helper-text">
          We'll never share your email.
        </FormHelperText>
      </FormControl>
      </div>

    </footer>
  );
};

