import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

function CheckOut() {
  const service = useLoaderData();
  console.log(service);
  const { title, price, img } = service;

  const { user } = useContext(AuthContext);

  const handelService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const ammount = form.ammount.value;

    const order = {
      service: title,
      name,
      email,
      img,
      date,
      ammount,
      price,
    };

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Order Confirm");
        }
        form.reset();
        console.log(data);
      });

    console.log(name, email, date, ammount);
  };
  console.log(service);
  return (
    <>
      <h2 className="text-4xl font-bold my-10 text-center">
        Checkout : {title}
      </h2>
      <section className=" p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white"></h2>

        <form onSubmit={handelService}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 dark:text-gray-200">Name</label>
              <input
                id="Name"
                type="text"
                name="name"
                placeholder="Name"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">Date</label>
              <input
                id="date"
                type="date"
                name="date"
                placeholder="Date"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                defaultValue={user?.email}
                readOnly
                placeholder="Email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Ammount
              </label>
              <input
                id="Ammount"
                type="text"
                defaultValue={"$" + price}
                name="ammount"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="flex mt-6">
            <button className="px-8 py-2.5 btn-block leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Order
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default CheckOut;
