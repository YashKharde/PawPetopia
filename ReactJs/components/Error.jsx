import { Link } from "react-router-dom";


function Error(){
return (
    <div>
        <h2>Error</h2>
        <p>Something Went Wrong</p>
        <Link to="/service" > Keep Browsing </Link>
    </div>

);
}
export default Error;