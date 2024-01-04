import HomeScreen from "../../screens/HomeScreens/HomeScreen";
import DealsScreen from "../../screens/DealsScreens/DealsScreen";
import SearchScreen from "../../screens/SearchScreens/SearchScreen";
import MyItemScreen from "../../screens/FavouriteScreens/MyItemScreen";
import SupportScreen from "../../screens/SupportScreens/SupportScreen";
import { icons } from "../../assets/icons";

const product = [
  {
    id: 1,
    name: 'Cosmetic & Beauty Academy',
    location: 'Anytown',
    km: '2',
    actRate: '300',
    currentRate: '200',
    bought: '200',
    rating: '4.5',
    overAllRating: '4.6K',
    sold: '140',
    timeEnds: '10:29',
    offer: '10',
    img: require("../../assets/images/salon.png"),
    isLike:false
  },
  {
    id: 2,
    name: 'Mystique & Beauty Academy',
    location: 'Illinosis',
    km: '2',
    actRate: '220',
    currentRate: '180',
    bought: '200',
    rating: '4.5',
    overAllRating: '4.6K',
    sold: '130',
    timeEnds: '10:29',
    offer: '10',
    img: require("../../assets/images/salon.png"),
    isLike:false
  },
]
const bottom_data = [
  {
    id: 1,
    name: "Home",
    component: HomeScreen,
    icon: icons.home,
    fill_icon: icons.home_fill,
  },
  {
    id: 2,
    name: "Deals",
    component: DealsScreen,
    icon: icons.deal,
    fill_icon: icons.deal_fill,
  },
  {
    id: 3,
    name: "Search",
    component: SearchScreen,
    icon: icons.search,
    fill_icon: icons.search_fill,
  },
  {
    id: 4,
    name: "My Items",
    component: MyItemScreen,
    icon: icons.heart,
    fill_icon: icons.heart_fill,
  },
  {
    id: 5,
    name: "Support",
    component: SupportScreen,
    icon: icons.support,
    fill_icon: icons.support_fill,
  },
];
const allCatergoriesList = [
  {
    name: 'Automotive',
    url: 'https://aptster-images.s3.us-east-2.amazonaws.com/18.png'
  },
  {
    name: 'Merchants',
    url: 'https://aptster-images.s3.us-east-2.amazonaws.com/11.png'
  }, {
    name: 'Real Estate',
    url: 'https://aptster-images.s3.us-east-2.amazonaws.com/12.png'
  }, {
    name: 'Constructions',
    url: 'https://aptster-images.s3.us-east-2.amazonaws.com/13.png'
  }, {
    name: 'Educations',
    url: 'https://aptster-images.s3.us-east-2.amazonaws.com/14.png'
  }, {
    name: 'Entertainment',
    url: 'https://aptster-images.s3.us-east-2.amazonaws.com/15.png'
  }, {
    name: 'Travel',
    url: 'https://aptster-images.s3.us-east-2.amazonaws.com/17.png'
  }, {
    name: 'Health',
    url: 'https://aptster-images.s3.us-east-2.amazonaws.com/9.png'
  }, {
    name: 'Home',
    url: 'https://aptster-images.s3.us-east-2.amazonaws.com/8.png'
  }, {
    name: 'sale',
    url: 'https://aptster-images.s3.us-east-2.amazonaws.com/9.png'
  }, {
    name: 'Automotive',
    url: 'https://aptster-images.s3.us-east-2.amazonaws.com/6.png'
  },

]
const bannerList =
  ['https://aptster-images.s3.us-east-2.amazonaws.com/restaurant.png', 'https://aptster-images.s3.us-east-2.amazonaws.com/restaurant.png']
export {
  product,
  bottom_data,
  allCatergoriesList,
  bannerList
}