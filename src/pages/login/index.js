import React, { PureComponent } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { LoginWrapper, LoginBox, Input, Button } from "./style";
import { actionCreators } from "./store"

// import {actionCreators} from "./store";

class Login extends PureComponent {
  render() {
    const { loginState } = this.props;
    if (!loginState) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="账号" ref={(input) => {
              this.account = input
            }}/>
            <Input type="password" placeholder="密码" ref={(input) => {
              this.password = input
            }}/>
            <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      );
    } else {
      return <Redirect to="/"/>
    }

  }

  componentDidMount() {
  }
}

const mapStateToProps = (state) => ({
  loginState: state.getIn(["login", "login"]),
});

const mapDispatchToProps = (dispatch) => ({
  login(accountElement, passwordElement) {
    dispatch(actionCreators.login(accountElement, passwordElement));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);