import React from "react";

const Card = ({ image, place, price, duration }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white lg:w-1/3">
      <img
        src={image}
        alt={place}
        className="h-57 w-314 text-gray-900 item-center p-5 mx-4 mb-1"
      />
      <div className="flex flex-col justify-center gap-8 ">
        <div className="flex flex-row text-center">
          <h5 className="text-1xl font-semibold mx-15 mb-1">{place}</h5>
          <p className="text-gray-500 mb-3">{price}</p>
        </div>
        <div className="flex flex-row justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6"
          >
            <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
          </svg>

          <p className="text-gray-500 mx-5 mb-8">{duration}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
