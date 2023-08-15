import { makeStyles } from 'tss-react/mui';
import Button from '@mui/material/Button';
const useStyles = makeStyles()(() => {
    return {
      btn: {
        width:"100%", 
        mt: 1, 
        mb: 1,
        border: "1px solid #fff", 
        color: "#fff",
        '&:hover': {
            backgroundColor: "#000",
        }
      }
    };
  });
function Btn({type,text,style,click}) {
    const { classes } = useStyles();
    return (
        <Button
            type={type}
            onClick={click}
            className={classes.btn}
            sx={{...style }}
        >
            {text}
        </Button>
    )
}

export default Btn