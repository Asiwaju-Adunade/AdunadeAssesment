import { useState } from "react";

function Design() {
  const items = [
    {
      id: 1,
      title: "Chemistry",
      type: "live",
      cover_image_url:
        "https://lumilearn.s3.us-east-1.amazonaws.com/staging/course/cover/D3hktnfx6vdR6sbCQsQoBJrG4fYH42M5tu6qrT4d.jpg",
      price: 700000,
      rating: 4,
      tutor: {
        id: "9fada59e-cead-4d6a-90ad-f9a0a87979c9",
        avatar:
          "https://lumilearn.s3.us-east-1.amazonaws.com/staging/avatar/OtrXbtTOQSb5H3YB8ll40LUMGOrEznhshm8kn5cP.png",
        name: "Endurance Simeon",
      },
      duration: "4 weeks",
    },

    {
      id: 2,
      title: "Human relation",
      type: "recorded",
      cover_image_url:
        "https://lumilearn.s3.us-east-1.amazonaws.com/staging/course/cover/k0thZHIPg4GRHscVRuksugnvvWLfnro2Bz8M6KhL.jpg",
      price: 800000,
      rating: 0,
      tutor: {
        id: "9fada59e-cead-4d6a-90ad-f9a0a87979c9",
        avatar:
          "https://lumilearn.s3.us-east-1.amazonaws.com/staging/avatar/OtrXbtTOQSb5H3YB8ll40LUMGOrEznhshm8kn5cP.png",
        name: "Endurance Simeon",
      },
      duration: "4week",
    },

    {
      id: 3,
      title: "Social studies",
      type: "live",
      cover_image_url:
        "https://lumilearn.s3.us-east-1.amazonaws.com/staging/course/cover/KMYSgkFGEPW8zqqAd1cJwfRCzNXwf9TzkkacTboX.png",
      price: 500000,
      rating: 0,
      tutor: {
        id: "9fada59e-cead-4d6a-90ad-f9a0a87979c9",
        avatar:
          "https://lumilearn.s3.us-east-1.amazonaws.com/staging/avatar/OtrXbtTOQSb5H3YB8ll40LUMGOrEznhshm8kn5cP.png",
        name: "Endurance Simeon",
      },
      duration: "4week",
    },
  ];

  const [cartitems, setCartitems] = useState(items);
  const removeItems = (id) => {
    setCartitems((previousItems) =>
      previousItems.filter((item) => item.id !== id)
    );
  };

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  // console.log(items);
  const total = cartitems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      {/* WHITE BACKGROUND PART */}
      <div className="bg-white p-20 my-10 mx-10 ">
        <h1 className=" text-xl -mt-5 font-bold">Cart</h1>
        <small className=" text-gray-400 text-xs">
          Access courses and tutors you have liked
        </small>
        <br />
        <h1 className=" text-xl font-bold"> Courses in cart</h1>

        <div className=" md:flex gap-20 ">
          <div>
            {cartitems.length > 0 ? (
              <div>
                {cartitems.map((product) => (
                  <div key={product.id} className=" md:flex gap-20 mt-5">
                    {/* FIRST PICTURE AND TEXT PART */}

                    <div className="flex gap-5 my-5">
                      {/* IMAGE */}
                      <div>
                        <img
                          className=" w-40 h-24 rounded "
                          src={product.cover_image_url}
                          alt="image-1"
                        />
                      </div>
                      {/* TEXT PART */}
                      <div>
                        <div className="flex -mt-2 gap-30">
                          <h1 className="font-bold ">{product.title}</h1>
                          <img
                            onClick={() => removeItems(product.id)}
                            className="w-5 h-5"
                            src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" 
                            alt="deleteicon"
                            />
                        </div>
                        <div className="flex gap-2">
                          <img
                            src={product.tutor.avatar}
                            className=" h-8 w-8 rounded"
                            alt="tutorimage"
                          />
                          <p className=" text-gray-400 mt-2 text-xs">
                            {" "}
                            {product.tutor.name}
                          </p>
                        </div>

                        {/* RATING PART */}
                        <img
                          className=" h-10"
                          src="https://cdn-icons-png.flaticon.com/128/11906/11906637.png"
                          alt="ratingicon"
                        />

                        {/* ICONS PART */}
                        {/* LIVE & COMPUTER ICON PART */}
                        <div className=" flex gap-2  text-gray-400 text-xs">
                          <div className="flex gap-1">
                            <img
                              className="h-5 w-5"
                              src="https://cdn-icons-png.flaticon.com/128/494/494075.png"
                            />
                            <p> {product.type} </p>
                          </div>
                          {/* WEEKS & TIME PART */}
                          <div className="flex gap-1">
                            <img
                              className="h-4"
                              src="https://cdn-icons-png.flaticon.com/128/2088/2088617.png"
                            />
                            <p>{product.duration}</p>
                          </div>
                        </div>
                        <strong> N{product.price}</strong>
                      </div>
                    </div>

                    {/* HORIZONTAL LINE */}
                    <hr className=" border-gray-400 mt-5" />
                  </div>
                ))}{" "}
              </div>
            ) : (
              <div className="flex mt-10 gap-2 ">
                <h1 className="font-bold text-2xl ">No items in cart</h1>
                <img
                  className="w-20 h-20"
                  src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png"
                  alt="emptycartimage"
                />
              </div>
            )}
          </div>

          {/* ORDER SUMMARY PART */}
          <div className="ml-5 mt-10">
            <strong> Order Summary</strong>
            <div className="flex justify-between mt-5">
              <p className=" text-gray-400 text-xs"> {items.length} courses</p>
              <p className=" text-gray-400  text-xs">
                {" "}
                N{total.toLocaleString()}
              </p>
            </div>
            <div className="flex justify-between mt-2">
              <strong className=" text-xs"> Total </strong>
              <strong className=" text-xs"> N{total.toLocaleString()} </strong>
            </div>
            <button
              onClick={openModal}
              className="text-white bg-green-500 p-2 mt-3 h-10 w-70 rounded-3xl"
            >
              {" "}
              Mark as Paid{" "}
            </button>
          </div>
        </div>
      </div>
      {/* MODAL PART */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center">
          <div className="bg-white p-5 my-5 rounded m-auto h-70 w-70 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/7626/7626666.png"
              alt="congratulationsicon"
              className="mx-auto h-20 w-20"
            />
            <h1 className="font-bold mt-5">Payment Successful</h1>
            <p className="text-xs text-gray-400">
              {" "}
              Payment confirmation has been sent to your email. You can view
              payment receipt in transaction history.
            </p>
            <button
              onClick={closeModal}
              className="bg-green-500 rounded-3xl p-2 w-50 my-5 text-white h-10"
            >
              Close Modal{" "}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Design;
