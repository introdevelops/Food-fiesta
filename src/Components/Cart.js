import { useDispatch, useSelector } from "react-redux";
import ItemCategory from "./ItemCategory"
import { clearCart } from "../Redux Store/cartSlice";

import { Link } from "react-router-dom";

const Cart = () => {

    const cartItems = useSelector((store)=> store.cart.items)

    const dispatch = useDispatch()

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    if (cartItems.length === 0) {
        return (
        <div className="m-auto lg:w-6/12 md:w-6/12 w-11/12 h-fit flex flex-col justify-center items-center lg:py-10 md:py-10 py-8 my-12">
         
            <div className="flex flex-col justify-center items-center py-6">
                <span className="text-xl text-gray-600 font-extrabold tracking-wide">Your cart is empty</span>
                <span className="text-sm text-gray-400 tracking-wide">You can go to home page to view more restaurants</span>
            </div>
            <div className="pt-4">
                <Link to={"/"}><span className="bg-red-600 py-2 px-3 text-base font-bold text-white hover:bg-transparent hover:rounded-md   hover:border-2 hover:border-black hover:text-black">SEE RESTAURANTS NEAR YOU</span>
                </Link>
            </div>
        </div>
        )
    }
    return (
       <div className="m-auto lg:w-6/12 md:w-6/12 w-11/12 lg:py-10 md:py-10 py-8 my-12">
        
        <div className="m-auto text-center flex items-center flex-col text-2xl font-extrabold py-3"><span className="text-2xl font-extrabold">Cart</span>
        <button className="text-base py-2 my-3 bg-slate-900 m-auto text-center text-white rounded-md px-5" onClick={handleClearCart}>Clear Cart</button></div>
        <ItemCategory item={cartItems} inCart={true}/>
       </div>        
    )
}
export default Cart;