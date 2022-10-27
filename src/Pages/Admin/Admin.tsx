import './Admin.scss'
import Weather from "../../Components/Weather";
import Grass from "../../Components/Grass";

const Admin = () => {
    return (
        <div className='admin'>
            <Weather/>
            <h1>Admin Panel</h1>
            <div className='content'>
                <div className="form-div">
                    <form>

                    </form>
                    <form>

                    </form>
                </div>
                <hr/>
                <div className="form-div">
                    <form>

                    </form>
                </div>
            </div>
            <Grass/>
        </div>
    )
}

export default Admin;