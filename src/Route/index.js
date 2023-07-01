import HomePage from '@/Pages/Home';
import FollowingPage from '@/Pages/Following';
import UpLoadPage from '@/Pages/UpLoad';
import Profile from '@/Pages/Profile';
import HeaderLayout from '@/components/Layout/HeaderLayout';
import FeedbackAndHelpPage from '@/Pages/FeedbackAndHelpPage';
// Divide into 2 types of routes

const PublicRoutes = [
  { path: '/', component: HomePage },
  { path: '/feedbackAndHelp', component: FeedbackAndHelpPage, layout: HeaderLayout },
  { path: '/:nickname', component: Profile },
  { path: '/followings', component: FollowingPage },
  { path: '/upLoad', component: UpLoadPage, layout: HeaderLayout },
];
const PrivateRoutes = [];

export { PublicRoutes, PrivateRoutes };
