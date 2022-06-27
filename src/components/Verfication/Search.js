import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import logolocator from "../../assets/images/service3.png";
import "./Search.css";
const Search = () => {
  const [posts, setPosts] = useState("");
  var [sData, setSData] = useState([]);
  const [totalData, setTotalData] = useState('');
  const [url , setUrl] = useState(" ");
  const [isActive, setIsActive] = useState(false);
  var [upData, setUpData] = useState([]);
  // let dataInput = "";
  // const InputEvent = (event) => {
  //   // dataInput = event.target.value;
  //   console.log(event.target.value);
  //   setPosts(event.target.value);
  // }
    const getAnswer = async () => {
      if (posts !=='')
      {
        const response  = await axios.get("https://34.90.29.163:90/reterive_data/?query="+ posts);
        setUpData(response.data);
        setSData(response.data);
    }
    };
    useEffect(() => {
      getAnswer();
    }, [posts]);
  const handleLocat = (name , loc, id, latit, longit, scraped) =>{
    let dict = {'funda.nl':1}
    setPosts(name+', '+ loc);
    let placeData;
    placeData = (name.replace(" ", "+") + '-' + loc.replace(" ", "+") + '-' + id + '-' + latit + '-' + longit + '-' + dict[scraped]);
    placeData = placeData.replace(" ", "+");
    setTotalData(placeData);
    let urlData = placeData;
    setUrl(urlData);
    setSData([]);
    setIsActive(true);
  }
  const handleSubmitClick = () =>{
    var item = upData[0]['name']+"," + ' ' + upData[0]['location'];
    if (posts === item){
      // setIsActive(true);
    }
  }
  // const submitHandle = () => {
  //  if (url != " "){
  //   setBtn(true)
  //  }
  // }
  // const handleSendData = () => {
  //   console.log("hello")
  //   console.log(totalData)
  //   axios.get("http://127.0.0.1:8000/reterive_data/details/?query="+ totalData).then(resp=>{
  //     console.log(resp)
  //     console.log(resp.status)
  // }).catch(errp=>{
  //     console.log(errp)
  // })
  // }
  // const [loading, setLoading] = useState(false);
  // const [searchTitle, setSearchTitle] = useState("");
//   useEffect(() =>{
//     const loadPosts = async () =>{
//       setLoading(true);
//       const response = await axios.get("http://127.0.0.1:8000/reterive_data/?query="+ setPosts);
//       setPosts(response.data);
//       setLoading(true);
//     }
//     loadPosts();
// //     axios.get("http://127.0.0.1:8000/reterive_data/?query="+setDataGet).then(res=>{
// //       setDataGet(dataGet)
// //       console.log(dataGet)
// //     console.log(res)
// // }).catch(err=>{
// //     console.log(err)
// // })
//     // return() =>{
//     // }
// },[]);
  return (
    <div className="container">
      <div className='verifymain'>
        <div className="verifyflex">
          <h2>
            Search a Property
          </h2>
          <div className="inputverify">
            <input type="text" 
            placeholder="Search a Property"
            name="property"
            id = "property"
            autoComplete="off"
            required
            value={posts}
            onChange={(e) => setPosts(e.target.value)}
          />
            <div className="showinputvalue">
              {
              sData.map((valued, key)=>{
                const nameData = valued.name;
                const locData = valued.location;
                const locId = valued.id;
                const long = parseFloat(valued.longitude);
                const lat = parseFloat(valued.latitude);
                const scrap = valued.scraped_from;
                return(
                  <p key={valued.id} onClick={ () => handleLocat(nameData , locData, locId, long , lat, scrap)}><span><img src={logolocator} alt="locatorImage"/></span>{valued.name},{valued.location}</p>
              )})
                }
            </div>
            {
          <div className="inputverifyanc">
            <Link onClick={handleSubmitClick} to = {isActive ? "/detail/"+ url : "#" }>Submit</Link>
          </div>
          }
          </div>
        </div>
    </div>
    </div>
  );
}
export default Search;