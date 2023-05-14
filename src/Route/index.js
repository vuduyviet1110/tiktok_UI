import HomePage from '@/Pages/Home';
import FollowingPage from '@/Pages/Following';
import UpLoadPage from '@/Pages/UpLoad';
import HeaderLayout from '@/components/Layout/HeaderLayout';
// Divide into 2 types of routes

const PublicRoutes = [
  { path: '/', component: HomePage },
  { path: '/followings', component: FollowingPage },
  { path: '/upLoad', component: UpLoadPage, layout: HeaderLayout },
];
const PrivateRoutes = [];

export { PublicRoutes, PrivateRoutes };
