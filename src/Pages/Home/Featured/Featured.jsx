import img from "../../../assets/home/featured.jpg"
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import "./Featured.css"

const Featured = () => {
    return (
        <div className="pt-8 ">
            <SectionTitle
                subHeading="Check it Out"
                heading="From Our Menu"
            ></SectionTitle>
            <div className="lg:flex featuredItems justify-center items-center py-20 px-36 text-justify">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="lg:pl-8">
                    <p>September 11, 2024</p>
                    <p className="uppercase">Where can I get Some?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel deserunt voluptas fugit alias laudantium, ad itaque obcaecati id repellendus quisquam. Veniam, accusantium totam, nesciunt, dolorem rerum cumque quibusdam exercitationem adipisci cupiditate asperiores quidem temporibus necessitatibus delectus ipsum. Expedita placeat, molestias, inventore culpa perferendis, odit quasi possimus nemo doloribus suscipit ad.</p>
                    <br />
                    <button className="btn  border-b-4 btn-outline text-white">View Full Menu</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;