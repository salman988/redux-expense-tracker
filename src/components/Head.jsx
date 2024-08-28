import React from "react";
import { useSelector } from "react-redux";

const Head = () => {
  const income = useSelector((Store) => {
    return Store.transactionSlice.income;
  });

  return (
    <div>
      <p>your balance is {}</p>
      <p>your total income is {income}$</p>
      {/* <p>yout total expense is {expense}</p> */}
    </div>
  );
};

export default Head;
