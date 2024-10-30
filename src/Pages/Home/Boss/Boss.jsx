import bossimg from '../../../assets/home/chef-service.jpg'

const Boss = () => {
    return (
        <div className='mx-auto my-8' style={{ position: 'relative', textAlign: 'center', width: '80%' }}>
            <img src={bossimg} alt="" />
            <div style={{ position: 'absolute', top: '30%', right: '20%', left: '20%', color: 'black', backgroundColor: 'white', padding: '30px', borderRadius: '8px' }}>
                <h3 className='text-3xl'>Bistro Milanese</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi sapiente facilis mollitia repellendus magni est quos molestias tenetur similique maxime porro eveniet adipisci quae distinctio, quam nam, illo quis ipsam.</p>
            </div>
        </div>

    );
};

export default Boss;