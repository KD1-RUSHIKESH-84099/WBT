import Dashboarditem from "../components/Dashboarditem"
import Navbar from "../components/navbar"
function Home()

{
    return (
        <div>
             <Navbar/>
            <h2 className ='Page header'>Home</h2>
           <div className="row mt-5">
            <div className="col">
                <Dashboarditem  title='users' value='100'/>
               
            </div>
            <div className="col">
                <Dashboarditem  title='properties' value='100'/>
               
            </div>
            <div className="col">
                <Dashboarditem  title='Bookings' value='100'/>
               
            </div>
            <div className="col">
                <Dashboarditem  title='Revenue' value='$100'/>
               
            </div>
           </div>
        </div>
    )
    
}
export default Home