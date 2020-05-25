import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import WalletAmountList from './WalletAmountList';
import './App.css';
import EditWalletAmount from './EditWalletAmount';
import AddWalletAmount from './AddWalletAmount';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      id: null,
      userId: 1,
      date: '',
      description: '',
      income: '',
      amount:'',
      status: false,
      walletAmount: {},
      amountList: [],
      editing: false
    };
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.deleteWalletAmount = this.deleteWalletAmount.bind(this);
    this.addWalletAmount = this.addWalletAmount.bind(this);
    this.editWalletAmount = this.editWalletAmount.bind(this);
    this.setEditing = this.setEditing.bind(this);
    this.updatedWalletAmount = this.updatedWalletAmount.bind(this);
  }

  handleInputChange(event) {
    
    const target = event.target;
    const value = target.value;
    const name = target.name;
 
    this.setState({
      [name]:value
    })
  }

  addWalletAmount(event){
    console.log("etttt--")
    console.log("event---",this.state.income)
    event.preventDefault()
    if (!this.state.date) return;
    const walletAmount = {
      id: this.state.amountList.length + 1,
      date: this.state.date,
      description: this.state.description,
      income: this.state.income,
      amount:this.state.amount,
      userId: this.state.userId,
      statu: this.state.status
    };

    console.log(walletAmount);
    this.setState({
      date: '',
      description: '',
      income:'',
      amount:'',
      walletAmount: walletAmount,
      amountList: [...this.state.amountList, walletAmount]
    })
    console.log(this.state.amountList);
  }

  deleteWalletAmount(id) {
    const amountList = this.state.amountList.filter( item => item.id !== id );
    this.setState({amountList: amountList});
    if(this.state.editing === true) {
      window.location.reload();
    }
  }

  editWalletAmount(amount) {
    this.setEditing(true);
    this.setState({
      date:amount.date,
      description:amount.description,
      income:amount.income,
      amount:amount.amount,
      walletAmount: amount
    });
    // console.log(walletAmount);
  }

  setEditing(value) {
    if(typeof value !== 'boolean') { throw " This value must either be true or false"}
    this.setState({
      editing: value
    })
  }

  updatedWalletAmount(event) {
    event.preventDefault();
    const updatedDate = this.state.date;
    const updatedDescription = this.state.description;
    const updatedIncome = this.state.income;
    const updatedAmount = this.state.amount;
    const updatedWalletAmount = Object.assign({}, this.state.walletAmount, { date: updatedDate, description: updatedDescription, income: updatedIncome , amount: updatedAmount})
    const amountList = this.state.amountList.map((walletAmount) => (walletAmount.id === this.state.walletAmount.id ? updatedWalletAmount : walletAmount));
    this.setState({ date:'', description: '',income:'',amount:'', amountList: amountList});
  }

  render() {
    const { description, date, amountList, editing } = this.state;
      return (
        <div className="App">
          <div className="row App-main">
            <WalletAmountList 
              amountList= {amountList} 
              deleteWalletAmount={this.deleteWalletAmount}
              editWalletAmount={this.editWalletAmount}
            />
          </div>
          <div className="row App-main">
          { 
            editing  ? (
            <EditWalletAmount 
             date={this.state.date}
             description={this.state.description} 
             income={this.state.income}
             amount={this.state.amount}
             handleInputChange={this.handleInputChange}
             setEditing={this.setEditing}
             updatedWalletAmount={this.updatedWalletAmount}
            />
            ) : (
            <AddWalletAmount 
              date={this.state.date}
              description={this.state.description} 
              income={this.state.income}
              amount={this.state.amount}
              handleInputChange={this.handleInputChange} 
              addWalletAmount={this.addWalletAmount}
            />
            )
          }
          </div>
        </div>
      );
    }
}

export default App;

