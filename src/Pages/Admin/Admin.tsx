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
                        <div>
                            <label>Name</label>
                            <input/>
                        </div>
                        <div>
                            <label>Video</label>
                            <input type="file"/>
                        </div>
                        <div>
                            <label>Category</label>
                            <select></select>
                        </div>
                        <div className='buttons'>
                            <button className='delete'>Delete Exercise</button>
                            <button className='save'>Save Exercise</button>
                        </div>
                    </form>
                    <h2>Of the Day</h2>
                    <form>
                        <div>
                            <label>Recipe of the Day</label>
                            <select></select>
                        </div>
                        <div>
                            <label>Exercise of the Day</label>
                            <select></select>
                        </div>
                        <div className='buttons'>
                            <button className='save'>Save Changes</button>
                        </div>
                    </form>
                </div>
                <hr/>
                <div className="form-div">
                    <form>
                        <div className='add-edit'>
                            <h2>Add Recipe</h2>
                            <div className='edit-select'>
                                <label>Edit Recipe</label>
                                <select></select>
                            </div>
                        </div>
                        <div>
                            <label>Name</label>
                            <input/>
                        </div>
                        <div>
                            <label>Thumbnail</label>
                            <input type="file"/>
                        </div>
                        <div>
                            <label>Category</label>
                            <select></select>
                        </div>
                        <div>
                            <label>Cook Time</label>
                            <input/>
                        </div>
                        <div>
                            <label>Ingredients</label>
                            <textarea/>
                        </div>
                        <div>
                            <label>Recipe Steps</label>
                            <textarea/>
                        </div>
                        <div className='buttons'>
                            <button className='delete'>Delete Exercise</button>
                            <button className='save'>Save Exercise</button>
                        </div>
                    </form>
                </div>
            </div>
            <Grass/>
        </div>
    )
}

export default Admin;