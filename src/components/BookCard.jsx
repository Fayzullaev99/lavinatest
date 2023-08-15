import * as React from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Container } from '@mui/material';
import { ApiFunction } from '../helpers';
import { Context } from '../context/Context';
import noimage from '../images/noimage.png';
import Text from '../ui/Text';
import Button from '../ui/Button';

function BookCard() {
  const { setShowInput, books, setBooks } = React.useContext(Context)
  const deleteBook = async (id) => {
    await ApiFunction('DELETE', `/books/${id}`)
    setBooks(await ApiFunction('GET', '/books'))
  }
  return (
    <Container component="main" maxWidth="lg">
      <Text variant='h5' text="Your Articles" style={{textAlign: "center", marginY:"20px"}} />
      <Grid container spacing={2}>
        {
          books?.isOk && books?.data?.map((book, i) => (
            <Grid key={i} item xs={12} sm={6} md={4}>
              <Card sx={{ width: "100%", height:"100%", padding:"0 16px 16px", display: "flex", flexDirection: "column", justifyContent: "space-between", marginY: "10px", position:"relative" }}>
                <Text text={book.status == 0 ? "New" : book.status == 1 ? "Reading" : "Finished"} style={{position: "absolute", right: 0, top:0, background:"green", color: "#fff", padding:"10px 20px"}}/>
                <CardMedia component="img" height="240" image={book.book.cover ? book.book.cover : noimage} alt={book.book.title} sx={{ objectFit: "cover" }} />
                <CardContent>
                  <Text text={`Id: ${book.book.id}`} />
                  <Text variant="h5" text={`Author: ${book.book.author}`} />
                  <Text text={`Title: ${book.book.title}`} />
                  <Text text={`Published: ${book.book.published} years`} />
                  <Text text={`Status: ${book.status}`} />
                </CardContent>
                <Box sx={{ width: "200px", display:"flex" }}>
                  <Button text="Edit" style={{ background: "#1976d2" }} click={() => setShowInput({show:true,edit:true,book:book})} />
                  <Button text="Delete" style={{ background: "red" }} click={() => deleteBook(book.book.id)} />
                </Box>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </Container>

  )
}

export default BookCard