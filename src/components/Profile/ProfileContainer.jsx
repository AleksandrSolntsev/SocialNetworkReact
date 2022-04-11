import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {getUsersProfile} from "../../redux/profile-reducer"
import {Redirect} from 'react-router-dom' 
import {withRouter} from "react-router-dom"
import { withAuthRedirect } from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {
    componentDidMount(){
      let userId = this.props.match.params.userId; 
      if (!userId)
      {userId = 2}
      this.props.getUsersProfile(userId) //санка в редьюсере (которая выполняет ф-и и диспатчит екшеныб который вернет АС)
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
let authRedirectComponent = withAuthRedirect (ProfileContainer);

let WithUrlDataContainerComponent = withRouter (authRedirectComponent)
export default connect(mapStateToProps, {getUsersProfile} )(WithUrlDataContainerComponent);

  