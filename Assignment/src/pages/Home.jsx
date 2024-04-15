import { useEffect } from "react"
import WorkoutDetails from '../component/WorkoutDetails'
import WorkoutForm from "../component/WorkoutForm"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from "../hooks/useAuthContext"
const Home = ()=>{
    // const [workouts,setWorkouts] = useState(null)
    const {workouts, dispatch} = useWorkoutsContext()
    const {user} = useAuthContext()
    useEffect(()=>{
        const fetchWorkouts = async()=>{
            const response = await fetch('http://localhost:4000/api/workouts',{
                headers:{
                    "Authorization":`Bearer ${user.token}`
                }
            })
            const data = await response.json()

            if(response){
        
                dispatch({type:'SET_WORKOUTS',payload:data})
            }
        }
        if(user)
            fetchWorkouts();
    },[dispatch,user])
    return (

        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout)=>
                    <WorkoutDetails key={workout._id } workout={workout}/>
                )}
            </div>
            <WorkoutForm/>
        </div>

    )
}
export default Home