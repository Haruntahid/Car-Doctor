import PropTypes from "prop-types";

function OrderRow({ booking, handelDelete, handelConfirm }) {
  const { _id, img, service, price, date, name, email, status } = booking;

  return (
    <>
      <tr>
        <th>
          <label>
            <button
              onClick={() => handelDelete(_id)}
              className="btn btn-square btn-error"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-24 h-24">
                <img
                  src={
                    img
                      ? img
                      : "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
                  }
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{service}</div>
              <div className="text-sm opacity-50">{email}</div>
            </div>
          </div>
        </td>
        <td>${price}</td>
        <td>{date}</td>
        <th>
          {status === "confirm" ? (
            <span className="text-green-500">confirmed</span>
          ) : (
            <button
              onClick={() => handelConfirm(_id)}
              className="btn btn-ghost btn-xs"
            >
              Confirm
            </button>
          )}
        </th>
      </tr>
    </>
  );
}

OrderRow.propTypes = {
  booking: PropTypes.object,
  handelDelete: PropTypes.func,
  handelConfirm: PropTypes.func,
};

export default OrderRow;
