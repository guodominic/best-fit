import Directory from '../../components/directory/directory.component'
import { Outlet } from 'react-router-dom';

const Home = () => {
    const categories = [
        {
            id: 1,
            title: 'toys',
            imageUrl: 'https://www.ikea.com/images/9e/19/9e1915e010a673f44b7d4bb97c0ece16.png?f=s',
        },
        {
            id: 2,
            title: 'hygiene',
            imageUrl: 'https://dev.rodpub.com/images/130/975_main.jpg',
        },
        {
            id: 3,
            title: 'furniture',
            imageUrl: 'https://shop.static.ingka.ikea.com/revamp/nursery-furniture_45780.jpg',
        },
        {
            id: 4,
            title: 'clothes',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2018/EDITORIAL/FALL1/BABY/Girls_Mobile.jpg',
        },
        {
            id: 5,
            title: 'other',
            imageUrl: 'https://mylittleeater.com/wp-content/uploads/2021/11/Podcast-art-Mom-baby-gift-guide-2021-pin-1080-x-1080-px.png',
        },
    ];

    return (
        <div>
            <Outlet />
            <Directory categories={categories} />
            <Outlet />
        </div>
    )

}

export default Home