import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import AllPayments from "../components/AllPayments";

export default ({ users }) => {
  const [allPayments, setAllPayments] = useState([]);
  const [filteredPayments, setFilteredPayments] = useState(allPayments);

  const onChange = (e) => {
    setFilteredPayments(
      allPayments.filter((payment) => {
        return payment.projectName
          .toLowerCase()
          .match(e.target.value.toLowerCase());
      })
    );
  };

  useEffect(() => {
    const unsubscribe = db.collection("payments").onSnapshot((data) => {
      let payments = [];
      data.forEach((doc) => {
        payments.push(doc.data());
      });
      payments = payments.map((payment) => {
        const usuario = users.filter((user) => user.id == payment.userId)[0];
        const newPayment = { ...payment, user: usuario };
        return newPayment;
      });
      setAllPayments(payments);
      setFilteredPayments(payments);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AllPayments filteredPayments={filteredPayments} onChange={onChange} />
    // <ul>
    //   {allPayments.map((payment) => {
    //     return <li>{payment.projectName}</li>;
    //   })}
    // </ul>
  );
};
