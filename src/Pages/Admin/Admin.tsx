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
                        <div className='add-edit'>
                            <h2>Add Exercise</h2>
                            <div className='edit-select'>
                                <label>Edit Exercise</label>
                                <select></select>
                            </div>
                        </div>
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