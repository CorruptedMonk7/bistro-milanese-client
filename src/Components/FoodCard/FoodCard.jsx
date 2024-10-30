import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";



const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const { user } = useAuth()
    const navigate = useNavigate();
    const location = useLocation()
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart()


    const handleAddToCart = food => {
        if (user && user.email) {
            // send cart 
            // console.log(user.email, food);
            const cartItem = {
                menuID: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch();
                    }
                })

        }
        else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please login first",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="" />
            </figure>
            <p className="absolute bg-slate-700 text-white right-0 px-4 mr-4 mt-4">${price}</p>
            <div className="card-body flex flex-col items-center">

                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(item)}
                        className="btn bg-slate-100 border-0 border-b-4 border-orange-400 btn-outline flex flex-col items-center mx-auto">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;