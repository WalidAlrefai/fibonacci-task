import { FormGroup, TextField, Button, Typography, CardContent, Card } from '@mui/material';
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import './main.scss'

function Main() {
    const [number, setNumber] = useState(0);

    const dispatch = useDispatch();
    const fibonacci = useSelector(state => state.fibReducer.nthFib);
    const handelChange = (e) => {
        e.preventDefault();
        setNumber(e.target.value);
        console.log(e.target.value);
        // console.log({number});

    }
    const handelSubmit = (e) => {
        e.preventDefault();
        // console.log({number});

        dispatch({ type: "git nth fibonacci", payload: number });
        // console.log({fibonacci});

    }

    return (
        <div className="main">
            <h1>Hello</h1>
            <FormGroup >
                <div className='groupInput'>

                <TextField
                    id="outlined-number"
                    label="Number"
                    type="number"
                    value={number}
                    onChange={handelChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Button variant="contained" type="submit" onClick={handelSubmit}>Submit</Button>
                </div>
            </FormGroup>
            <Card sx={{ width:250 ,height:200 }} className="card">
                <CardContent>
                    <Typography sx={{ fontSize: 14,marginBottom:3 }} color="text.secondary" gutterBottom>
                        The Fibonacci nth number is :
                    </Typography>
                    <Typography sx={{ fontSize:50  }} color="text.secondary">
                        {fibonacci}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default Main;