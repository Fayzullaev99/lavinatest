import TextField from '@mui/material/TextField';

function Input({name,label,type,id}) {
    return (
        <TextField
            required
            fullWidth
            name={name}
            label={label}
            type={type}
            id={id}
            autoComplete={name}
            sx={{ mt: 1, mb: 1 }}
        />
    )
}

export default Input