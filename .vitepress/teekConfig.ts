import { defineTeekConfig } from "vitepress-theme-teek/config";

export const teekConfig = defineTeekConfig({
    teekHome: false,
    vpHome: true,
    anchorScroll: true,
    viewTransition: {
        enabled: true,
        mode: "out-in",
    },
    backTop: {
        enabled: true,
        content: "progress",
    },
    codeBlock: {
        enabled: true,
        collapseHeight: 700,
        langTextTransform: "uppercase",
    },
    themeSize: "default",
    vitePlugins: {
        sidebarOption: {
            ignoreList: [".github", ".git", "README.md", "docs"],
        },
    },
});
