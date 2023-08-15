import Typography from '@mui/material/Typography'
import React from 'react'

function Text({variant = 'body2',text,style}) {
    return (
        <Typography variant={variant} sx={style}>
            {text}
        </Typography>
    )
}

export default Text