
import { Button, MenuItem, TextField } from "@material-ui/core";
import React, { useState } from 'react'
import "./Home.css"
import Categories from '../../Data/Categories'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
const Home = ({ name, setName, fetchQuestions }) => {
    const [category, setCategory] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [error, setError] = useState(false)
    const history = useHistory()

    const handleSubmit = () => {
        if (!category || !difficulty || !name) {
            setError(true);
            return;
        }
        else {
            setError(false)
            
            fetchQuestions(category, difficulty)
            history.push("/quiz")
            
        }
    }

    return (
        <div className='content'>
            <div className='settings'>
                <span style={{ fontSize: 30 }}>Enter All Fields</span>
                <div className='settings__select'>
                    {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
                    <TextField className="textfield" style={{ marginBottom: 25 }} label="Enter Your Name" variant='outlined' onChange={(e) => setName(e.target.value)} />
                    <TextField className="textfield" select label="Select subject" variant='outlined' style={{ marginBottom: 25 }} value={category}
                        onChange={(e) => setCategory(e.target.value)}>
                        {Categories.map((cat) => (
                            <MenuItem key={cat.category} value={cat.value}>
                                {cat.category}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                    className="textfield"
                        select
                        label="Select Difficulty"


                        variant="outlined"
                        style={{ marginBottom: 30 }}
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                    >
                        <MenuItem key="Easy" value="easy">
                            Easy
                        </MenuItem>
                        <MenuItem key="Medium" value="medium">
                            Medium
                        </MenuItem>
                        <MenuItem key="Hard" value="hard">
                            Hard
                        </MenuItem>
                    </TextField>
                    <Button variant="contained" color="secondary" size="large" onClick={handleSubmit}>
                        LET'S GO
                    </Button>

                </div>
            </div>
            <img src='/poster.webp' className='banner' alt='qui' />
        </div>
    )
}

export default Home