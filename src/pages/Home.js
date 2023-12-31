import React , {useState} from 'react'
import {Box} from '@mui/material'
import Excersises from '../components/Excersises' ;
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
function Home() {
    const [bodyPart,setBodyPart] = useState('all');
    const [exercises,setExercises] = useState([]);
  return (
  <Box>

    <HeroBanner/>
    <SearchExercises 
    setExercises={setExercises}
    bodyPart={bodyPart} 
    setBodyPart={setBodyPart}/>
    <Excersises
    setExercises={setExercises}
    exercises={exercises}
    bodyPart={bodyPart}
   
    
   />
  </Box>
  );
};

export default Home