import React, { PureComponent } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Write extends PureComponent {
  render() {
    const { loginState } = this.props;
    if (loginState) {
      return (
        <div>
          xxwfvh
        </div>
      );
    } else {
      return <Redirect to="/login"/>
    }

  }

  componentDidMount() {
  }
}

const mapStateToProps = (state) => ({
  loginState: state.getIn(["login", "login"]),
});

// const mapDispatchToProps = (dispatch) => ({
//     login(accountElement, passwordElement) {
//         dispatch(actionCreators.login(accountElement, passwordElement));
//     }
// });

export default connect(mapStateToProps, null)(Write);