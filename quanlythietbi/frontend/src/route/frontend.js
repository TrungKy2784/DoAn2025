import Dashboard from "../front_end/pages/Dash_board";
import SignIn from "../front_end/pages/Sign_In";
import SignUp from "../front_end/pages/Sign_Up";
import DeviceStatistics from "../front_end/pages/DeviceStatistics";

export const publicRoutes = [
    { path: 'signin', component: SignIn},
    { path: 'signup', component: SignUp},
];

export const FrontendRoute = [
    { path: '', component: Dashboard }, // Empty path for index route
    { path: 'dashboard', component: Dashboard },
    { path: 'devices', component: DeviceStatistics },


    // Thêm các route khác nếu cần
];
