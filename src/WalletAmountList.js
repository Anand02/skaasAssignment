import React from 'react';

  const WalletAmountList = (props) => {
    return (  
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Date</th>
            <th scope="col">Description</th>
            <th scope="col">Income/Expense</th>
            <th scope="col">Amount</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
            { 
              props.amountList.length > 0 ? (
                props.amountList.map((amt) => (
                    <tr key={amt.id}>
                      <td>{ amt.id }</td>
                      <td>{ amt.date }</td>
                      <td>{ amt.description }</td>
                      <td>{ amt.income}</td>
                      <td>{ amt.amount}</td>
                      <td>
                        <button className="btn btn-primary ml-2" onClick={() => props.editWalletAmount(amt) }>Edit</button>
                        <button className="btn btn-danger ml-2" onClick={() => props.deleteWalletAmount(amt.id) }>Delete</button>
                      </td>
                    </tr>
                  )
                )
              ) : (
                <tr>
                  <td colSpan={6}>No Data To Display...</td>
                </tr>
              )
            }
        </tbody>
      </table>
    );
  }


export default WalletAmountList;


