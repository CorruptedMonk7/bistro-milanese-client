import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Link } from 'react-router-dom';


const Recommends = () => {
    return (
        <div>
            <SectionTitle
                subHeading={"Should Try"}
                heading={"CHEF Recommends"}
            >
            </SectionTitle>
            <div className="grid grid-cols-3 gap-8 container mx-auto max-w-fit my-12">

                <div className="card card-compact bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Mix Salad" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Mix Salad</h2>
                        <p>Carrot, Corn, Broccoli,</p>
                        <div className="card-actions justify-end">
                            <Link to="/order/salad"><button className="btn btn-primary">Add to Cart</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src="https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Steak" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Steak</h2>
                        <p>Beef, Broccoli, Tomato, Capcicum</p>
                        <div className="card-actions justify-end">
                            <Link to="/order"><button className="btn btn-primary">Add to Cart</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src="https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Sheek" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">SubSandwich</h2>
                        <p>Beef, Lettuce, Tomato, Capcicum</p>
                        <div className="card-actions justify-end">
                            <Link to="/order"><button className="btn btn-primary">Add to Cart</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recommends;