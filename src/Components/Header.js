import Items from "./Items";
import Footer from "./Footer";
const Home = () => {
    
    return (
        <>
            <div className="hero py-16">


                <div className="container mx-auto flex items-center justify-between">

                   
                    <div className="container">
                        <img  style={{ borderRadius: 50, width: 1400, height:700}} className="static" src="/images/img1.jpg" alt="image" />
                        <div className="absolute bottom-0 top:60 left-50 p-2">
                        <h6 className=" left-45 text-center text-3xl font-bold"><em>Cooking Gone Wrong?</em></h6>
                        <h1 className="text-3xl md:text-6xl font-bold text-center text-white">Discover the best food near you!!</h1>
                        <div className="text-center"><button className="px-6 py-2 rounded-full  font-bold mt-4 bg-yellow-500 hover:bg-yellow-600 text-center">Order Now</button></div>
                    </div>
                    </div>
                </div>
                <div className="pb-24">
                     <Items />
                     <Footer />
                </div>

            </div>
        </>
    )
}

export default Home
