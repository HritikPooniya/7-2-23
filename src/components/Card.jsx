
import axios from 'axios';
import React , {useState , useEffect} from 'react';

const Card = () => {
    const [users, setUsers] = useState([]);

  const fetchUserData = () => {
    axios.get('https://gym-api-3r8c.onrender.com/v1.0/gymcenter/get-verify-all-data')
    .then((res)=>{
      setUsers(res.data.data)
    })
  }
  useEffect(() => { 
    fetchUserData();
  }, [])
console.log(users);


  return (
 
<div className='card'>
    {users.map((data)=>(
    <div className='items'>

<a href='/'><div className='img'>
  <div className="rating "> 
        <img src="https://img.icons8.com/?size=1x&id=104&format=png" alt="..." />
        <span className="text-white">0</span>
        </div>
  <img src='https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=' className="card-img-top" alt="Not found" />
</div>

<div className="card-body">
<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-pin-map m-1" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"></path><path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"></path></svg>
<i>0</i>
  <h5 className="card-title">{data.center_name}</h5>
  <p className="card-text">{data.address}</p>
  <div className='items-button'>
  <button type="button" className='first'>Day Pass <br /> $12.00</button><button type="button" >Weekly Pass  $12.00</button><button type="button" >Monthly Pass  $25.00</button>
  </div>
  </div>
</a>
</div>

    ))}
    
 
    
</div>
    
  )
}

export default Card;