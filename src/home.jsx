import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>


   <ul className="flex justify-center gap-10 mt-10 p-10">
    <Link to='/'><li className="bg-blue-600 p-2 rounded-md">Home</li></Link>
    <Link to='/section'><li className="bg-blue-600 p-2 rounded-md">Section</li></Link>
    <Link to='/footer'><li className="bg-blue-600 p-2 rounded-md">Footer</li></Link>
    <Link to='/pen'><li className="bg-blue-600 p-2 rounded-md">Pen</li></Link>
    <Link to='/hello'><li className="bg-blue-600 p-2 rounded-md">Hello</li></Link>
    <Link to='/Example'><li className="bg-blue-600 p-2 rounded-md">Example</li></Link>

  </ul>


</>

           

  )
}
export default Home;





 
        


   
  








    

