import React, { useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom';
import { Link, Route, Switch, useHistory } from 'react-router-dom'
import ViewProfile from '../component/ViewProfile';
import EditProfile from '../component/EditProfile';

const Profile = ({login}) => {
    const history =useHistory(); 

    useEffect(()=>{
        if(!login){
            history.push('/');
        }
    },[login,history])

const {path,url}=useRouteMatch();  


  return (
    <div>
        <h1>
            profile pages
        </h1>
        <ul>
            <li>
                <Link to={`${url}/viewprofile`}>View Profile</Link>
            </li>
            <li>
                <Link to={`${url}/editprofile`}>Edit Profile</Link>
            </li>
        </ul>
        <Switch>
            <Route path={`${path}/viewprofile`} component={ViewProfile} />
            <Route path={`${path}/editprofile`} component={EditProfile} />
        </Switch>

    </div>
  )
}

export default Profile