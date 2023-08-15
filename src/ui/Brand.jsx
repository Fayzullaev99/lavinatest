import Box from '@mui/material/Box'
import React from 'react'

function Brand({fill}) {
    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "25px", textTransform: "uppercase", color:fill }}>
            <svg width="30" height="30" viewBox="0 0 56 49" fill="none" xmlns="http://www.w3.org/2000/svg" className="Logo_logo-img__wZiZW"><g clipPath="url(#clip0_1_2)"><path d="M28.3984 43.8374L38.9314 25.7172C40.0765 23.7472 42.9218 23.7472 44.0668 25.7172L54.5998 43.8374C55.7507 45.8174 54.3223 48.3 52.0321 48.3H30.9661C28.6759 48.3 27.2475 45.8174 28.3984 43.8374Z" fill={fill}></path><path d="M0.559819 43.7955L24.8449 1.49421C25.9887 -0.498143 28.8626 -0.498849 30.0074 1.49294L37.1917 13.9928C37.7209 14.9136 37.7195 16.0465 37.188 16.966L19.9595 46.7675C19.4275 47.6877 18.4453 48.2544 17.3824 48.2544H3.14141C0.853121 48.2544 -0.579482 45.7801 0.559819 43.7955Z" fill={fill}></path></g><defs><clipPath id="clip0_1_2"><rect width="56" height="49" fill="white"></rect></clipPath></defs></svg>
            <strong>Lavina</strong>
        </Box>
    )
}

export default Brand