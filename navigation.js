import { Platform } from "react-native";
import { Navigation } from "react-native-navigation";
import colors from "./src/assets/colors";

export const defaultOptions = () => {
    Navigation.setDefaultOptions({
      statusBar: {
        ...Platform.select({
          ios: {
            visible: true,
            drawBehind: false,
            style: 'light',
          },
          android: {
            backgroundColor: colors.statusColor,
            visible: true,
            drawBehind: false,
            style: 'light',
          },
        }),
      },
      topBar: {
        visible: false,
        drawBehind: true,
        hideOnScroll: false,
        elevation: 0,
      },
      tabsStyle: {
        height: 200,
      },
      bottomTab: {
        iconHeight: Platform.OS == 'ios' ? 24 : 28,
        iconWidth: Platform.OS == 'ios' ? 24 : 28,
      },
    });
};

export const mainApp = () => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          options: {
            bottomTabs: {
              backgroundColor: colors.backgroundColor,
            },
          },
          children: [
            {
              stack: {
                options: {
                  bottomTab: {
                    text: 'Home',
                    fontSize: 20,
                    textColor: '#fff',
                  },
                },
                children: [
                  {
                    component: {
                      name: 'Home',
                    },
                  },
                ],
              },
            },
            {
              stack: {
                options: {
                  bottomTab: {
                    text: 'Explore',
                    fontSize: 20,
                    textColor: '#fff',
                  },
                },
                children: [
                  {
                    component: {
                      name: 'Explore',
                    },
                  },
                ],
              },
            },
            {
              stack: {
                options: {
                  bottomTab: {
                    text: 'Contact',
                    fontSize: 20,
                    textColor: '#fff',
                  },
                },
                children: [
                  {
                    component: {
                      name: 'Contact',
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    });
};