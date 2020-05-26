import React from 'react'

const EditWalletAmount = props => {
  console.log("editttttt",props)
  return (
    <form>
       <div className="form-group">
        <label>Date:</label>
        <input type="date" className="form-control" name="date" value={props.date} onChange={ props.handleInputChange}/>
      </div>
      <div className="form-group">
        <label>Description:</label>
        <input type="text" className="form-control" name="description" value={props.description} onChange={ props.handleInputChange} />
      </div>
      <div className="form-group">
        <label>Income/Expense:</label>
        <input type="number" className="form-control" name="income" value={props.income} onChange={ props.handleInputChange} />
      </div>
      <div className="form-group">
        <label>Amount:</label>
        <input type="number" className="form-control" name="amount" value={props.amount} onChange={ props.handleInputChange} />
      </div>
      <button onClick={ props.updatedWalletAmount } className="btn btn-success mt-2"> Update </button>
      <button onClick={() => props.setEditing(false)} className="btn btn-info mt-2">Cancel</button>
    </form>
  )
}

export default EditWalletAmount;