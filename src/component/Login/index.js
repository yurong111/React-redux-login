import React, {PropTypes, Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Base64} from 'js-base64';
import {post} from '../../Api';
import {loginAction} from '../../store/main/action.js'


class Index extends Component {
    state = {
        account: '13760651386',
        password: '',
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    login = () => {
        let {account, password} = this.state;
        console.log('props', this.props);
        this.props.loginAction(account, password);
        // this.props.dispatch(loginAction(account, password));
    }

    onChange = (key, e) => {
        this.setState({[key]: e.target.value})
    }

    render() {
        let {account, password} = this.state;
        let {loginResult} = this.props;

        console.log('loginResult', loginResult);

        return (
            <div>
                <div>
                    <input
                        placeholder="请输入账号"
                        onChange={this.onChange.bind(this, 'account')}
                        value={account}
                        style={{height: '30px', marginTop: '10px', fontSize: '14px', paddingLeft: '5px'}}
                    />
                </div>

                <div>
                    <input
                        placeholder="请输入密码"
                        onChange={this.onChange.bind(this, 'password')}
                        value={password}
                        type="password"
                        style={{height: '30px', marginTop: '10px', fontSize: '14px', paddingLeft: '5px'}}
                    />
                </div>

                <div>
                    <a
                        onClick={this.login}
                        style={{display: 'block', border: '1px solid #333', height: '30px', lineHeight: '30px', width: '80px', textAlign: 'center', borderRadius: '4px', margin: '10px auto', fontSize: '14px', cursor: 'point'}}
                    >登陆</a>
                </div>

                {
                    loginResult &&
                    <div>
                        {
                            loginResult.code == '200'
                                ?
                            <div style={{color:'red'}}>
                                登陆成功
                            </div>
                                :
                            <div style={{color:'red'}}>
                                {loginResult.data}
                            </div>
                        }
                    </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    console.log('mapStateToProps-ownProps', ownProps);
    const {login} = state;
    return {
        loginResult: login && login.loginResult
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    console.log('mapDispatchToProps-ownProps', ownProps);
    return {
        loginAction: bindActionCreators(loginAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);