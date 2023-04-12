import React from 'react';
import './App.css';

 export function SignUp(){
    return(
        <div class="conatiner-bg bg-image">
            <div class="mask">
             <div class="form-div">
             <form>
                <label for="fullname" class="form-label">Full Name : </label>
                <div class="input-group">
                    <span class="input-group-text"><i class="far fa-user"></i></span>
                    <input type="text" id="fullname" class="form-control" placeholder='Full Name'></input>
                </div>
                
                <label for="email" id="email" class="form-label">Email Address : </label>
                <div class="input-group">
                    <span class="input-group-text"><i class="far fa-envelope"></i></span>
                    <input type="email" class="form-control" placeholder='xxx@gmail.com'></input>
                </div>
                
                <label for="password" class="form-label">Email Address : </label>
                <div class="input-form">
                    <span class="input-form-group"><i class="fas fa-key"></i></span>
                    <input type="password" id="password" class="form-control" placeholder='xxxxxx'></input>
                </div>
                
                <label for="gender" class="form-label"> Select Your Gender!</label>
                <select class="form-select" id="gender">
                    <option value="" selected></option>
                    <option value="Female"> Female</option>
                    <option value="Male">Male</option>
                </select>
                <div class="submit-div">
                    <button type="submit">SignUp</button>
                </div>
             </form>
            </div>   
            </div>
         
        </div>
)
}