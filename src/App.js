import React from "react";
import { Root, Drawer } from "native-base";
import SideBar from "./screens/sidebar";
import HomeScreen from "./screens/home";

export default () =>
  <Root>
    <Drawer type="displace" ref={(ref) => { this.drawer = ref; }} content={<SideBar />} panOpenMask={0.2}>
      <HomeScreen openDrawer={() => this.drawer._root.open()} />
    </Drawer>
  </Root>;
