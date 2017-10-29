import React, { Component } from 'react'; 
import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware } from 'redux'; 
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyBlPD3uYvVbV4ep8cYb87zQVtCJXqQrPDw',
            authDomain: 'employee-1a698.firebaseapp.com',
            databaseURL: 'https://employee-1a698.firebaseio.com',
            projectId: 'employee-1a698',
            storageBucket: '',
            messagingSenderId: '393410720330'
          };
          firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store} >
                <Router />
            </Provider>
        );
    }
}

export default App; 
