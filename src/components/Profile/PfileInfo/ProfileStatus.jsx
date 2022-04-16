import React from "react";
import styles from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateAditMode = () =>{  //метод объявлен с помощью стрелочной ф-и
        this.setState({
            editMode: true
        });
    }
    deactivateAditMode= () =>{  //метод объявлен с помощью стрелочной ф-и
        this.setState({
            editMode: false
        });
        this.props.updateUserStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status : e.currentTarget.value
    });
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status){
            this.setState ({
                status: this.props.status
            })
        }
    }

  render() {
    return (
      <div>
        {!this.state.editMode &&
            <div>
            <span onDoubleClick={this.activateAditMode}>{this.props.status || "------"}</span>
            </div>
        }
        {this.state.editMode &&
            <div>
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateAditMode} value={this.state.status} />
            </div>
        }
      </div>
    );
  }
}

export default ProfileStatus;
