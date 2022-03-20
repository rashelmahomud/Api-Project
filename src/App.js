import logo from './logo.svg';
import './App.css';
import Country from './componests/Country/Country';



function App() {
  return (
    <div className="App">
      <Country></Country>
     
      
    </div>
  );
}









// function Countries(){

//   const [countries, setCountries] = useState([])
//   useEffect( () =>{
//     fetch('https://restcountries.com/v2/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))
//   },[])
  
//   return(
//     <div>
//       <h1>Visiting Every Country of the World</h1>
//       <p>All Countrie : {countries.length}</p>
//       {
//         countries.map(countrie => <Country name={countrie.name} capital={countrie.capital} population={countrie.population}></Country>)
//       }
//     </div>
//   )
// }
// function Country(porps){
//   return(
//     <div className='countriesAll'>
//       <h2>Name: {porps.name}</h2>
//       <h3>Population: {porps.population}</h3>
//       <p>Capital: {porps.capital}</p>
//     </div>
//   )
// }


export default App;
