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
      accountBalance: 0,  // set the account balance to 0
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

  // Update creditList
  addCredit = (e) => {
    this.setState({creditList: this.state.creditList([{
      amount: e.amount,
      description: e.description,
      date: e.date,
    }])});

    // update the account balance and set the decimal in 2 place
    this.setState({accountBalance: (float(this.state.accountBalance) + float(e.amount)).toFixed(2)})
  }

  // Update debitList
  addDebit = (e) => {
    this.setState({debitList: this.state.debitList([{
      amount: e.amount,
      description: e.description,
      date: e.date,
    }])});

    // update the account balance and set the decimal in 2 place
    this.setState({accountBalance: (float(this.state.accountBalance) - float(e.amount)).toFixed(2)})
  }

  // get data from API
  async componentDidMount()
  {
    //let credits = await axios.get("https://johnnylaicode.github.io/api/credits.json");
    //let debits = await axios.get("https://johnnylaicode.github.io/api/debits.json");

    try {
      const creditsResponse = await fetch("https://johnnylaicode.github.io/api/credits.json");
      const credits = await creditsResponse.json();
      this.setState( { creditList: credits });

      const debitsResponse = await fetch("https://johnnylaicode.github.io/api/debits.json");
      const debits = await debitsResponse.json();
      this.setState( { debitList: debits });

      const credits = this.state.creditList;
      const debits = this.state.debitList;

      let total_credits = 0;
      let total_debits = 0;

      credits.forEach((credit) => {
        total_credits = total_credits + credit.amount;
      });

      debits.forEach((debits) => {
        total_debits = total_debits + debits.amount;
      });

      const Update_account_balance = (total_credits - total_debits).toFixed(2);

      this.setState( { accountBalance: Update_account_balance });

    }catch(error) {
      console.error(error);
    } 
    
    // credits = credits.data;
    // debits = debits.data;

    /* let total_credits = 0;
    let total_debits = 0;

    credits.forEach((credit) => {
      total_credits = total_credits + credit.amount;
    });

    debits.forEach((debits) => {
      total_debits = total_debits + debits.amount;
    });

    let Update_account_balance = (total_credits - total_debits).toFixed(2);

    this.setState({accountBalance: Update_account_balance});
    */
  }

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