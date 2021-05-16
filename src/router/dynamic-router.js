/* 订单管理 */
const Order = () => import('../pages/order-manage')
const OrderList = () => import('../pages/order-manage/order-list')
const ProductManage = () => import('../pages/order-manage/product-manage')
const ProductionList = () => import('../pages/order-manage/product-manage/production-list')
const ReviewManage = () => import('../pages/order-manage/product-manage/review-manage')
const ReturnGoods = () => import('../pages/order-manage/return-goods')

/* 产品管理 */
const Goods = () => import('../pages/goods-manage')
const GoodsList = () => import('../pages/goods-manage/goods-list')
const GoodsClassify = () => import('../pages/goods-manage/goods-classify')

import Index from "../pages/views/Index";
import FileUpdate from "../pages/views/FileUpdate";
import ViewFiles from "../pages/views/ViewFiles";
import AddFile from "../pages/views/AddFile";
import Detailed from "../pages/views/Detailed";
import AddDetailed from "../pages/views/AddDetailed";

/* 需要权限判断的路由 */
const dynamicRoutes = [
    {
        path: '/',
        component: Index,
        name: 'Index',
        redirect:"/",
        meta: {
            name: '量表管理',
            icon: 'icon-order-manage'
        },
        children: [
            {
                path: '/ViewFiles',
                name: '/ViewFiles',
                component: ViewFiles,
                show:true,
                meta: {
                    name: '查询量表',
                    icon: 'icon-home'
                }
            },
            {
                path: '/AddFile',
                name: 'AddFile',
                component: AddFile,
                show:true,
                meta: {
                    name: '添加量表',
                    icon: 'icon-product-manage'
                }
            }
        ]
    }
    ,
    {
        path: '/update',
        name: '/update',
        component: FileUpdate,
        show:false
    },
    {
        path: '/detailed',
        name: '/detailed',
        component: Detailed,
        show:false
    },
    {
        path: '/addDetailed',
        name: '/addDetailed',
        component: AddDetailed,
        show:false
    }
]

export default dynamicRoutes
