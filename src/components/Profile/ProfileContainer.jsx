import React from "react";
import Profile from "./Profile";
import * as axios from "axios"
import { connect } from "react-redux";
import {setUsersProfile} from "../../redux/profile-reducer"
import { useParams } from "react-router"
import {withRouter} from "react-router-dom"

class ProfileContainer extends React.Component {
    componentDidMount(){
      let userId = this.props.match.params.userId; 
      if (!userId)
      {userId = 2}
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
        this.props.setUsersProfile(response.data);        ////серvер вышлет в респонс Пользователей (приходят из response.data.items) и мы засетим их в пропс
               
      });
    }
      render (){
        
  return (
    <Profile {...this.props} />
          )    }
}
// profileData={this.props.profileData}
let mapStateToProps = (state) => ({
  profileData : state.profilePage.profileData,
  
  
})
// let adress = useParams().id;
// console.log(adress)
let WithUrlDataContainerComponent = withRouter (ProfileContainer)
export default connect(mapStateToProps, {setUsersProfile} )(WithUrlDataContainerComponent);

  