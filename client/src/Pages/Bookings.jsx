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

  const handelDelete = (_id) => {
    const proceed = confirm("Are you sure want to delete?");

    if (proceed) {
      fetch(`http://localhost:5000/orders/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted Successfully");
            const remaining = bookings.filter((booking) => booking._id !== _id);
            setBookings(remaining);
          }
        });
    }
  };

  const handelConfirm = (_id) => {
    fetch(`http://localhost:5000/orders/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = bookings.filter((booking) => booking._id !== _id);
          const updated = bookings.find((booking) => booking._id === _id);
          updated.status = "confirm";
          const newBooking = [updated, ...remaining];
          setBookings(newBooking);
        }
      });
  };

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
              <OrderRow
                key={booking._id}
                booking={booking}
                handelDelete={handelDelete}
                handelConfirm={handelConfirm}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Bookings;
