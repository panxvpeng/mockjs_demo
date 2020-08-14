import Mock from 'mockjs';
import apiHome from './home';
// 设置延时
Mock.setup({
    timeout: '200-1000'
})

// 用户相关
Mock.mock(/\/home\/getData/,'get',apiHome.getHomeData);
Mock.mock(/\/home\/addData/,'post',apiHome.addHomeData);
Mock.mock(/\/home\/delData/,'post',apiHome.delHomeData);
Mock.mock(/\/home\/editData/,'post',apiHome.editHomeData);
Mock.mock(/\/home\/searchData/,'post',apiHome.searchHomeData);

