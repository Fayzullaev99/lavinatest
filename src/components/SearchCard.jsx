import * as React from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Container } from '@mui/material';
import { ApiFunction } from '../helpers';
import { Context } from '../context/Context';
import noimage from '../images/noimage.png';
import Text from '../ui/Text';

function SearchCard() {
    const { searchResult } = React.useContext(Context)
    return (
        <Container component="main" maxWidth="lg">
            <Text variant='h5' text="Search Results" style={{textAlign: "center", marginY:"20px"}} />
            <Grid container spacing={2}>
                {
                    searchResult?.isOk && searchResult?.data?.map((book, i) => (
                        <Grid key={i} item xs={12} sm={6} md={4}>
                            <Card sx={{ width: "100%", height: "100%", padding: "0 16px 16px", display: "flex", flexDirection: "column", justifyContent: "space-between", marginY: "10px", position: "relative" }}>
                                <CardMedia component="img" height="240" image={book.cover ? book.cover : noimage} alt={book.title} sx={{ objectFit: "cover" }} />
                                <CardContent>
                                    <Text variant="h5" text={`Author: ${book.author}`} />
                                    <Text text={`Title: ${book.title}`} />
                                    <Text text={`Published: ${book.published} years`} />
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    )
}

export default SearchCard