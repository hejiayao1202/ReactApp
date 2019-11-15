import { TabBar } from 'antd-mobile';
import React from 'react'
import Home from './Home';
import Linggan from './Linggan';
import Buy from './Buy';
import Mine from './Mine';

export default class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home'
    };
  }


  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        {/* style样式是全屏 */}
        {/* 一个tabbar四个item 几个item有几个tab页 */}
        <TabBar
          unselectedTintColor="#919191"
          tintColor="#3fcccb"// 选中以后的颜色
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="Life"
            // 实心和线条的图标 得写两个
            icon={<i style={{fontSize:22}} className="iconfont iconshouye"></i>
            }
            selectedIcon={<i style={{fontSize:22}} className="iconfont iconshouye"></i>
            }
            selected={this.state.selectedTab === 'home'}
            // 点到blueTab 才会出来blueTab  onPress设置状态
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
            }}
          >
            <Home/>
            {/* 首页这里出来的应该是一个 组件 */}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <i style={{fontSize:22}} className="iconfont iconlinggan"></i>
            }
            selectedIcon={
              <i style={{fontSize:22}} className="iconfont iconlinggan"></i>
            }
            title="灵感"
            key="Koubei"
            selected={this.state.selectedTab === 'linggan'}
            onPress={() => {
              this.setState({
                selectedTab: 'linggan',
              });
            }}
          >
            <Linggan/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <i style={{fontSize:"22px"}} className="iconfont iconstore_icon"></i>
            }
            selectedIcon={
              <i style={{fontSize:"22px"}} className="iconfont iconstore_icon"></i>
            }
            title="商城"
            key="Friend"
            // dot//小红点
            selected={this.state.selectedTab === 'buy'}
            onPress={() => {
              this.setState({
                selectedTab: 'buy',
              });
            }}
          >
            <Buy/>
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{fontSize:"22px"}} className="iconfont iconwode"></i>}
            selectedIcon={<i style={{fontSize:"22px"}} className="iconfont iconwode"></i>}
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'mine'}
            onPress={() => {
              this.setState({
                selectedTab: 'mine',
              });
            }}
          >
            <Mine/>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}