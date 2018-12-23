const React = require("react-native");
const { Platform, Dimensions } = React;
import commonColor from './../../theme/variables/commonColor'

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  drawerCover: {
    justifyContent: "center",
    height: 150,
    width: null,
    backgroundColor: commonColor.brandPrimary,
    paddingTop: commonColor.statusBarHeight
  },
  drawerImage: {
    alignSelf: "center",
    width: 75,
    height: 75
  },
  text: {
    fontWeight: Platform.OS === "ios" ? "500" : "400",
    fontSize: 16,
    marginLeft: 20
  },
  badgeText: {
    fontSize: Platform.OS === "ios" ? 13 : 11,
    fontWeight: "400",
    textAlign: "center",
    marginTop: Platform.OS === "android" ? -3 : undefined
  },
  listIcon: {
    color: "#777", 
    fontSize: 26, 
    width: 30 
  }
};
