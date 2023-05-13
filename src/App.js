/*==================================================
src/App.js

This is the top-level component of the app.
It contains the top-level state.
==================================================*/
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Import other components
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Credits from './components/Credits';
import Debits from './components/Debits';

class App extends Component {
  constructor() {  // Create and initialize state
    super(); 
    this.state = {
      accountBalance: 0,
      creditList: [],
      debitList: [],
      currentUser: {
        userName: 'Joe Smith',
        memberSince: '11/22/99',
      }
    };
  }

  // Update state's currentUser (userName) after "Log In" button is clicked
  mockLogIn = (logInInfo) => {  
    const newUser = {...this.state.currentUser};
    newUser.userName = logInInfo.userName;
    this.setState({currentUser: newUser})
  }

  // adding function addCredit and addDebit that update the state based on user input of new credits and debits
  addCredit = (e) => {
    e.preventDefault();
    this.setState( { creditList: this.state.creditList.concat([{
      description: e.target.elements.description.value,
      amount: e.target.elements.amount.value,
      date: new Date().toISOString().slice(0, 10),
    }]) } );
    
    // Update the accountBalance
    this.setState( { accountBalance: (parseFloat(this.state.accountBalance) + parseFloat(e.target.elements.amount.value)).toFixed(2)});

    console.log(this.creditList);
    console.log(this.accountBalance);
  }

  addDebit = (e) => {
    e.preventDefault();
    this.setState( { debitList: this.state.debitList.concat([{
      description: e.target.elements.description.value,
      amount: e.target.elements.amount.value,
      date: new Date().toISOString().slice(0, 10),
    }]) } );
    
    // Update the accountBalance
    this.setState( { accountBalance: (parseFloat(this.state.accountBalance) - parseFloat(e.target.elements.amount.value)).toFixed(2)});
    
    console.log(this.debitList);
    console.log(this.accountBalance);
  }

  // need to load data from endpoint
  componentDidMount() {
    fetch('https://johnnylaicode.github.io/api/credits.json')
    .then((response) => response.json())
    .then(credits => {
      this.setState( { creditList: credits });
    });

    fetch('https://johnnylaicode.github.io/api/debits.json')
    .then((response) => response.json())
    .then(debits => {
      this.setState( { debitList: debits });
    });

    let credits = this.state.creditList;
    let debits = this.state.debitList;

    // initialize total_credit and total_debit to 0
    let total_credit = 0;
    let total_debit = 0;

    credits.forEach((credit) => {
      total_credit = total_credit + credit.amount;
    })

    debits.forEach((debit) => {
      total_debit = total_debit + debit.amount;
    })

    // update the total account balance by subtract total_credit and total_debit
    let total_account_balance = (total_credit - total_debit).toFixed(2);
    this.setState( { accountBalance: total_account_balance } );
  }
  /*
  compoentDidMount() {
    this.fetchCreditsData();
    this.fetchDebitsData();
  }

  fetchCreditsData = () => {
    fetch('https://johnnylaicode.github.io/api/credits.json')
      .then((response) => response.json())
      .then((data) => {
        this.setState((prevState) => ({
          creditList: [...prevState.creditList, ...data],
          accountBalance: prevState.accountBalance + this.getTotalAmount(data),
        }));
      })
      .catch((error) => console.log(error));
  };

  fetchDebitsData = () => {
    fetch('https://johnnylaicode.github.io/api/debits.json')
      .then((response) => response.json())
      .then((data) => {
        this.setState((prevState) => ({
          debitList: [...prevState.debitList, ...data],
          accountBalance: prevState.accountBalance - this.getTotalAmount(data),
        }));
      })
      .catch((error) => console.log(error));
  };

  getTotalAmount = (data) => {
    return data.reduce((total, item) => total + parseFloat(item.amount), 0);
  };

  }*/

  // Create Routes and React elements to be rendered using React components
  render() {  
    // Create React elements and pass input props to components
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} />)
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
    )
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)
    const CreditsComponent = () => (<Credits credits={this.state.creditList} addCredit={this.addCredit} accountBalance={this.state.accountBalance}/>) 
    const DebitsComponent = () => (<Debits debits={this.state.debitList} addDebit={this.addDebit} accountBalance={this.state.accountBalance}/>) 

    // Important: Include the "basename" in Router, which is needed for deploying the React app to GitHub Pages
    return (
      <Router basename="/bank-of-react-example-code-gh-pages">
        <div>
          <Route exact path="/" render={HomeComponent}/>
          <Route exact path="/userProfile" render={UserProfileComponent}/>
          <Route exact path="/login" render={LogInComponent}/>
          <Route exact path="/credits" render={CreditsComponent}/>
          <Route exact path="/debits" render={DebitsComponent}/>
        </div>
      </Router>
    );
  }
}

export default App;