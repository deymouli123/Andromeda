import { ImageList } from "@mui/material";
import React from "react";
// import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
// import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import programmingData from "./static data/programmingData.js";
import './../css/OurServices.css';

function OurServices() {
    return (
        <div>
            <div className="head">

            </div>
            <div className="top">
                <h3>Design & Graphics</h3>
                <button>Get quotation</button>
                <div className="logo-design">
                    <img src=""></img>

                </div>
                <div className="user-interface">
                    <img src=""></img>

                </div>
                <div className="visiting-cards">
                    <img src=""></img>

                </div>
            </div>
            <div className="programming">
                <button>Get quotation</button>
                <h5>programming</h5>
                <ImageList sx={{ width: "500px", height: "450px" }}>
                    {programmingData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.title}
                                subtitle={item.author}
                                actionIcon={
                                    <IconButton
                                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                        aria-label={`info about ${item.title}`}
                                    >
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />
                        </ImageListItem>
                    ))}

                </ImageList>

            </div>
            <div className="banner1">
                <button>Get quotation</button>
                <div>Photography</div>
                <div>Editing</div>
                <div>Cinematography</div>
            </div>
            <div className="banner2">

            </div>
        </div>
    )
}

export default OurServices;