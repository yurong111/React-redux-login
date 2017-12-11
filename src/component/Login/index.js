import React, {PropTypes, Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Base64} from 'js-base64';
import {post} from '../../Api';
import {loginAction} from '../../store/main/action.js'


class Index extends Component {
    state = {
        account: '13760651386',
        password: 'test1234',
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    login = () => {
        let {account, password} = this.state;
        console.log('props', this.props);

        this.props.dispatch(loginAction(account, password));

        /*post({
            url: 'http://2811backend.fengchaoli.com/api/common/token/get',
            options: {headers: {}},
            success: (response)=>{
                console.log(response);
            },
            error: (error)=>{
                console.log(error);
            }
        })*/
    }

    onChange = (key, e) => {
        this.setState({[key]: e.target.value})
    }

    render() {
        let {account, password} = this.state;
        return (
            <div>
                <div>
                    <input placeholder="请输入账号" onChange={this.onChange.bind(this, 'account')} value={account}/>
                </div>

                <div>
                    <input placeholder="请输入密码" onChange={this.onChange.bind(this, 'password')} value={password}/>
                </div>

                <div>
                    <a onClick={this.login}>登陆</a>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {} = state;
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps)(Index);
// export default Index;