import { ThemeConfig, theme } from "antd";

export const antdThemeConfig = (isDarkMode: boolean): ThemeConfig => ({
    token: {
        colorPrimary: '#5B78F6',
    },
    algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm

})