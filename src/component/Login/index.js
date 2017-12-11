import React, {PropTypes, Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Base64} from 'js-base64';
import {post} from '../../Api';


class Index extends Component {
    state = {
        account: '',
        password: '',
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    login = () => {
        let {account, password} = this.state;

        post({
            url: 'http://2811backend.fengchaoli.com/api/common/token/get',
            options: {headers: {}},
            success: (response)=>{
                console.log(response);
            },
            error: (error)=>{
                console.log(error);
            }
        })
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

/*function mapStateToProps(state) {
    const {} = state;
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);*/
export default Index;