import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {getUsersProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile} from "../../redux/profile-reducer"
import {withRouter} from "react-router-dom"
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.match.params.userId; 
      
      if (!userId)
      {userId = this.props.auth.userId
        if(!userId){
          this.props.history.push("/login")
        }}
      this.props.getUsersProfile(userId) //санка в редьюсере (которая выполняет ф-и и диспатчит екшеныб который вернет АС)
      this.props.getUserStatus(userId)
  }
    componentDidMount(){
      this.refreshProfile()
    }
    componentDidUpdate(prevProps){
      if (this.props.match.params.userId != prevProps.match.params.userId){
        this.refreshProfile()
      }
    }
      render (){
        
  return (
    <Profile {...this.props} 
    isOwner = {!this.props.match.params.userId}
    savePhoto = {this.props.savePhoto}
    profileData={this.props.profileData} 
    status={this.props.status} 
    updateUserStatus={this.props.updateUserStatus}/>
          )    }
}
// profileData={this.props.profileData}

let mapStateToProps = (state) => ({
  profileData : state.profilePage.profileData,
  status: state.profilePage.status,
  auth : state.auth
})
// let adress = useParams().id;
// console.log(adress)
export default compose (
  connect(mapStateToProps, {getUsersProfile, getUserStatus , updateUserStatus, savePhoto, saveProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)


// let authRedirectComponent = withAuthRedirect (ProfileContainer);

// let WithUrlDataContainerComponent = withRouter (authRedirectComponent)
// export default connect(mapStateToProps, {getUsersProfile} )(WithUrlDataContainerComponent);