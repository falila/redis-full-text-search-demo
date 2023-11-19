import MotoBikeForm from "@/lib/CreateMotoBikeForm";
import BikeForm from "@/lib/SearchForm";

export default function Home(props) {
  return (
    <div>
      <h1>Search Moto Bike</h1>
      <BikeForm />
      <p style={{marginBottom:50}}></p>
      <div style={{borderRadius:5, boxShadow:27, borderBlockColor:"blue"}}>
      <h1>Create a Moto Bike</h1>
      <MotoBikeForm />
      </div>
    </div>
  );
}
