import { Helmet } from 'react-helmet-async';
import Cover from './Cover/Cover';
import menuImg from '../../../src/assets/menu/banner3.jpg';
import dessertImg from '../../../src/assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../src/assets/menu/pizza-bg.jpg';
import soupImg from '../../../src/assets/menu/soup-bg.jpg';
import saladImg from '../../../src/assets/menu/salad-bg.jpg';
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import MenuItems from '../Shared/MenuItems/MenuItems';
import MenuCategory from './MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu()

    const pizza = menu.filter(item => item.category === "pizza")
    const dessert = menu.filter(item => item.category === "dessert")
    const soup = menu.filter(item => item.category === "soup")
    const offered = menu.filter(item => item.category === "offered")
    const salad = menu.filter(item => item.category === "salad")
    return (
        <div>
            <Helmet>
                <title>Bistro Milanese | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>
            <SectionTitle
                subHeading="Don't Miss"
                heading="Today's Offer"
            ></SectionTitle>

            <MenuCategory items={offered}></MenuCategory>

            <MenuCategory
                items={dessert}
                title="desserts"
                coverImg={dessertImg}
            ></MenuCategory>

            <MenuCategory
                items={pizza}
                title="pizza"
                coverImg={pizzaImg}
            ></MenuCategory>

            <MenuCategory
                items={soup}
                title="soup"
                coverImg={soupImg}
            ></MenuCategory>

            <MenuCategory
                items={salad}
                title="salad"
                coverImg={saladImg}
            ></MenuCategory>


        </div>
    );
};

export default Menu;