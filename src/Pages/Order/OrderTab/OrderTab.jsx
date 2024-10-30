
import FoodCard from '../../../Components/FoodCard/FoodCard';

const OrderTab = ({ items }) => {
    return (
        <div className="grid lg:grid-cols-3 lg:ml-12 gap-10 ">
            {
                items.map(item => <FoodCard
                    key={item.id}
                    item={item}
                >

                </FoodCard>)
            }
        </div>
    );
};

export default OrderTab;