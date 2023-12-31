import HomeScreen from "../../screens/HomeScreens/HomeScreen";
import DealsScreen from "../../screens/DealsScreens/DealsScreen";
import SearchScreen from "../../screens/SearchScreens/SearchScreen";
import MyItemScreen from "../../screens/FavouriteScreens/MyItemScreen";
import SupportScreen from "../../screens/SupportScreens/SupportScreen";
import { icons } from "../../assets/icons";

const prodect =[
    {
        id:1,
        name:'Cosmetic & Beauty Academy',
        location:'Anytown',
        km:'2',
        actRate:'300',
        currentRate:'200',
        bought:'200',
        rating:'4.5',
        overAllRating:'4.6K',
        sold:'140',
        timeEnds:'10:29',
        offer:'10',
        img:require("../../assets/images/salon.png")
    },
    {
        id:2,
        name:'Mystique & Beauty Academy',
        location:'Illinosis',
        km:'2',
        actRate:'220',
        currentRate:'180',
        bought:'200',
        rating:'4.5',
        overAllRating:'4.6K',
        sold:'130',
        timeEnds:'10:29',
        offer:'10',
        img:require("../../assets/images/salon.png")
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

export {
    prodect,
    bottom_data
}