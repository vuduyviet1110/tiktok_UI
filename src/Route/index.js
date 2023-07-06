import HomePage from '@/Pages/Home';
import FollowingPage from '@/Pages/Following';
import UpLoadPage from '@/Pages/UpLoad';
import Profile from '@/Pages/Profile';
import ExplorePage from '@/Pages/Explore/Explore';
import LivePage from '@/Pages/Live/Live';
import HeaderLayout from '@/Layout/HeaderLayout';
import FeedbackAndHelpPage from '@/Pages/FeedbackAndHelpPage';
import { Config } from '@/Config';
// Divide into 2 types of routes

const PublicRoutes = [
  { path: Config.Routes.Home, component: HomePage },
  { path: Config.Routes.FeedbackAndHelp, component: FeedbackAndHelpPage, layout: HeaderLayout },
  { path: Config.Routes.Profile, component: Profile },
  { path: Config.Routes.Following, component: FollowingPage },
  { path: Config.Routes.Upload, component: UpLoadPage, layout: HeaderLayout },
  { path: Config.Routes.Explore, component: ExplorePage },
  { path: Config.Routes.Live, component: LivePage },
];
const PrivateRoutes = [];

export { PublicRoutes, PrivateRoutes };
