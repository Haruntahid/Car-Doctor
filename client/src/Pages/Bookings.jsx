import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import OrderRow from "../components/OrderRow";

function Bookings() {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [user]);

  console.log(bookings);

  return (
    <>
      <h2 className="text-5xl text-center font-bold">
        Your Total Order : {bookings.length}
      </h2>
      {/* table */}
      <div className="overflow-x-auto mt-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <OrderRow key={booking._id} booking={booking} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Bookings;
