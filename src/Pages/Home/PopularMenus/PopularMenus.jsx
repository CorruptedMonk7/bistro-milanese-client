
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItems from '../../Shared/MenuItems/MenuItems';
import useMenu from '../../../hooks/useMenu';
import { Link } from 'react-router-dom';

const PopularMenus = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === "popular")
    return (
        <section>
            <SectionTitle
                heading={"From Our Menu"}
                subHeading={"Popular Menus"}
            > </SectionTitle>
            <div className='grid lg:grid-cols-2 mx-36 my-12 gap-12'>
                {
                    popular.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }

            </div>
            <Link to="/menu"><button className="btn border-b-4 btn-outline flex flex-col items-center mx-auto">View Full Menu</button></Link>
        </section >
    );
};

export default PopularMenus;