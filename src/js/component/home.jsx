import React,{useState} from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	
	const [light,setLight] = useState('red')



	return (
		<div className="text-center mt-4" style={{display: "flex",
			justifyContent:"space-around"}}>
			<div className="bg-dark d-flex flex-column gap-4 py-4 rounded" style={{width:"230px"}}>
			<button onClick={()=>{setLight('red')}} className="text-white bg-danger p-4 w-50 align-self-center rounded" style={{height:"100px",border:light === 'red' ? '12px solid #ffff00':''}}>
			</button>
			<button onClick={()=>{setLight('yellow')}} className="text-white bg-warning p-4 w-50 align-self-center rounded" style={{height:"100px",border:light === 'yellow' ? '12px solid #ffff00':''}}>
			</button>
			<button onClick={()=>{setLight('green')}} className="text-white bg-success p-4 w-50 align-self-center rounded" style={{height:"100px",border:light === 'green' ? '12px solid #ffff00':''}}>
			</button>
			</div>
		</div>
	);
};

export default Home;
