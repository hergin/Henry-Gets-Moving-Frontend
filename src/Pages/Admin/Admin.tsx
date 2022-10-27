import './Admin.scss'
import Weather from "../../Components/Weather";
import Grass from "../../Components/Grass";
import swings from "../../Assets/Swings.png";
import React from "react";

const Admin = () => {
    return (
        <div className='admin'>
            <Weather/>
            <h1>Admin Panel</h1>
            <div className='content'>
                <div className="form-div">
                    <div>
                        <form className='exercise-form'>
                            <div className='add-edit'>
                                <h2>Add Exercise</h2>
                                <div className='edit-select'>
                                    <label>Edit Exercise</label>
                                    <select></select>
                                </div>
                            </div>
                            <div className='field'>
                                <label>Name</label>
                                <input/>
                            </div>
                            <div className='field'>
                                <label>Video</label>
                                <input/>
                            </div>
                            <div className='field'>
                                <label>Category</label>
                                <select></select>
                            </div>
                            <div className='buttons'>
                                <button className='delete'>Delete Exercise</button>
                                <button className='save'>Save Exercise</button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <h2 className='otd'>Of the Day</h2>
                        <form className='otd-form'>
                            <div className='field'>
                                <label>Recipe of the Day</label>
                                <select className='otd-select'></select>
                            </div>
                            <div className='field'>
                                <label>Exercise of the Day</label>
                                <select className='otd-select'></select>
                            </div>
                            <div className='buttons'>
                                <button className='save'>Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
                <hr/>
                <div className="form-div">
                    <form className='recipe-form'>
                        <div className='add-edit'>
                            <h2>Add Recipe</h2>
                            <div className='edit-select'>
                                <label>Edit Recipe</label>
                                <select></select>
                            </div>
                        </div>
                        <div className='field'>
                            <label>Name</label>
                            <input/>
                        </div>
                        <div className='field'>
                            <label>Thumbnail</label>
                            <input/>
                        </div>
                        <div className='field'>
                            <label>Category</label>
                            <select></select>
                        </div>
                        <div className='field'>
                            <label>Cook Time</label>
                            <input/>
                        </div>
                        <div className='field'>
                            <label>Ingredients</label>
                            <textarea placeholder="1. Ingredient&#10;2. Ingredient&#10;3. Ingredient"/>
                        </div>
                        <div className='field'>
                            <label>Recipe Steps</label>
                            <textarea placeholder="1. Step&#10;2. Step&#10;3. Step"/>
                        </div>
                        <div className='buttons'>
                            <button className='delete'>Delete Exercise</button>
                            <button className='save'>Save Exercise</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='swings'>
                <img src={swings} alt={"Henry and Jasmine on Swings"}/>
            </div>
            <Grass/>
        </div>
    )
}

export default Admin;