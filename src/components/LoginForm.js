import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common'; 
import { emailChanged, passwordChanged, loginUser } from '../Actions';

class LoginForm extends Component {

    static navigationOptions = {
        title: 'Please Login',
      };

    renderLoginButton() {
        if (this.props.loading) {
            return <Spinner size='large' />;
        }

        return (
        
        <Button 
            onPress={() => {
            const { email, password } = this.props; 
            this.props.loginUser({ email, password });
            }
            }
        >
         Login
        </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={email => this.props.emailChanged(email)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={password => this.props.passwordChanged(password)}
                        value={this.props.password}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>

                <CardSection>
                    {this.renderLoginButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20, 
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return { email, password, error, loading };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
