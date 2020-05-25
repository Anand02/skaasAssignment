import React from 'react'

const AddWalletAmount = props => {
  return (


<div style={{ marginTop: 10 , width: 721 }}>
            <form onSubmit={props.addWalletAmount}>
                <div className="form-group">
                    <label>Date : </label>
                    <input type="date" className="form-control" name="date" value={props.date} onChange={ props.handleInputChange}/>
                </div>
                <div className="form-group">
                    <label>Description: </label>
                    <input type="text" className="form-control" name="description" value={props.description} onChange={ props.handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Income/Expense: </label>
                    <input type="number" className="form-control" name="income" value={props.income} onChange={ props.handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Amount: </label>
                    <input type="number" className="form-control" name="amount" value={props.amount} onChange={ props.handleInputChange} />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Create Wallet" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
  )
}

export default AddWalletAmount;