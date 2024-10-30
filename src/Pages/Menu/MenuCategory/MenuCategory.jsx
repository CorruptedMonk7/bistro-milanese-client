import { Link } from "react-router-dom";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import Cover from "../Cover/Cover";


const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div className="my-20">
            {title && <Cover img={coverImg} title={title}></Cover>}
            <div className='grid lg:grid-cols-2 mx-36 my-12 gap-12'>
                {
                    items.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }

            </div>
            <Link to={`/order/${title}`}>
                <button className="btn border-b-4 btn-outline flex flex-col items-center mx-auto">Order Now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;