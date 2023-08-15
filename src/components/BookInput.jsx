import * as React from 'react';
import { Box, Container } from '@mui/material';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Text from '../ui/Text';
import { ApiFunction } from '../helpers';
import { Context } from '../context/Context';

function BookInput() {
  const { showInput, setShowInput, setBooks } = React.useContext(Context)
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    showInput.edit
      ? await ApiFunction('PATCH', `/books/${showInput?.book?.book?.id}`, JSON.stringify({ "status": parseInt(data.get('status')) }))
      : await ApiFunction('POST', "/books", JSON.stringify({ "isbn": data.get('isbn') }))
    setBooks(await ApiFunction('GET', "/books"))
    setShowInput({ show: false, edit: false, status: null })
  };
  return (
    <Container component="main" maxWidth="xs" sx={{ textAlign: "center", marginTop: "20px" }}>
      <Text variant="h4" text={showInput.edit ? "Edit Article" : "Create Article"} />
      <Box component="form" onSubmit={handleSubmit}>
        <Input id={showInput.edit ? "status" : "isbn"} label={showInput.edit ? `Status: ${showInput?.book?.status}` : "Your Article"} name={showInput.edit ? "status" : "isbn"} />
        <Button type="submit" text={showInput.edit ? "Edit" : "Create"} style={{ background: "#1976d2" }} />
      </Box>
    </Container>
  )
}

export default BookInput