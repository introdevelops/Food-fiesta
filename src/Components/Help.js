import helpImage from "../Images/helpImage.png"

const Help = () => {
    return (
        <div className="flex justify-start items-center gap-2 flex-col my-32 ">
            <div><span className="lg:text-5xl md:text-3xl text-2xl py-4 md:py-3 lg:py-4 text-red-500 font-bold">Help & Support</span></div>
        <div className="flex w-12/12 md:px-16 px-4 lg:px-20 justify-center md:gap-6 gap-4 lg:gap-8 items-center flex-col lg:flex-row">
            <div className="w-5/12 -mt-56 mr-10">
            <img className="lg:w-full md:w-full w-full" src={helpImage}></img>
            </div>
            <div className="flex justify-start items-start lg:py-8 md:py-6 py-4 lg:w-8/12 w-12/12 gap-4 flex-col">
                <div className="flex lg:py-4 md:py-3 py-2 lg:px-8 md:px-6 px-3 justify-start items-start flex-col bg-white shadow-lg">
                    <span className="lg:text-base md:text-base text-sm text-gray-900 font-semibold lg:tracking-normal tracking-wide">Can I cancel or modify my order after placing it?</span>
                    <span className="lg:pt-3 md:pt-2 pt-1 md:text-sm text-xs lg:text-sm text-gray-400 font-normal lg:tracking-wide tracking-wider">You can cancel or modify your order within a few minutes of placing it by contacting customer support through the app. Once the restaurant starts preparing your food, changes or cancellations may not be possible.</span>
                </div>
                <div className="flex lg:py-4 md:py-3 py-2 lg:px-8 md:px-6 px-3 justify-start items-start flex-col bg-white shadow-lg">
                    <span className="lg:text-base md:text-base text-sm text-gray-900 font-semibold lg:tracking-normal tracking-wide">What if my delivery is late?</span>
                    <span className="lg:pt-3 md:pt-2 pt-1 md:text-sm text-xs lg:text-sm text-gray-400 font-normal lg:tracking-wide tracking-wider">We strive to deliver on time, but delays can occur due to traffic or high order volumes. If your order is significantly late, please contact customer support for assistance.

</span>
                </div>
                <div className="flex lg:py-4 md:py-3 py-2 lg:px-8 md:px-6 px-3 justify-start items-start flex-col bg-white shadow-lg">
                    <span className="lg:text-base md:text-base text-sm text-gray-900 font-semibold lg:tracking-normal tracking-wide">What should I do if I receive the wrong order or if items are missing?</span>
                    <span className="lg:pt-3 md:pt-2 pt-1 md:text-sm text-xs lg:text-sm text-gray-400 font-normal lg:tracking-wide tracking-wider">If there’s an issue with your order, please contact customer support immediately through the app. We’ll work with the restaurant to resolve the issue and provide a refund or replacement if necessary.</span>
                </div>
                <div className="flex lg:py-4 md:py-3 py-2 lg:px-8 md:px-6 px-3 justify-start items-start flex-col bg-white shadow-lg">
                    <span className="lg:text-base md:text-base text-sm text-gray-900 font-semibold lg:tracking-normal tracking-wide">How do I find out about current promotions?</span>
                    <span className="lg:pt-3 md:pt-2 pt-1 md:text-sm text-xs lg:text-sm text-gray-400 font-normal lg:tracking-wide tracking-wider">Keep an eye on the app's homepage for banners and notifications about ongoing promotions. You can also subscribe to our newsletter to receive updates on special offers and discounts.</span>
                </div>
                <div className="flex lg:py-4 md:py-3 py-2 lg:px-8 md:px-6 px-3 justify-start items-start flex-col bg-white shadow-lg">
                    <span className="lg:text-base md:text-base text-sm text-gray-900 font-semibold lg:tracking-normal tracking-wide">What if my food is delivered cold or in poor condition?</span>
                    <span className="lg:pt-3 md:pt-2 pt-1 md:text-sm text-xs lg:text-sm text-gray-400 font-normal lg:tracking-wide tracking-wider">We take food quality seriously. If your food arrives cold or in poor condition, please report the issue to customer support. We’ll address the situation and offer a suitable resolution.</span>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Help;