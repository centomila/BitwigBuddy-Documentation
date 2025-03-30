import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: "en-US",
  title: "BitwigBuddy Documentation",
  description: "Comprehensive documentation for BitwigBuddy and Bitwig Studio",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "Installation", link: "/guide/bitwigbuddy/installation" },
      { text: "BitwigBuddy", link: "/guide/bitwigbuddy/" },
      { text: "Macro Actions", link: "/guide/bitwigbuddy-actions" },
      { text: "Bitwig Actions", link: "/guide/bitwig-actions" },
      { text: "Changelog", link: "/guide/changelog" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Introduction",
          items: [{ text: "Overview", link: "/guide/" }],
        },
        {
          text: "BitwigBuddy",
          items: [
            { text: "Introduction", link: "/guide/bitwigbuddy/" },
            { text: "Installation", link: "/guide/bitwigbuddy/installation" },
            { text: "Generate Mode", link: "/guide/bitwigbuddy/generate-mode" },
            {
              text: "Custom Presets",
              link: "/guide/bitwigbuddy/custom-presets",
            },
            { text: "Edit Mode", link: "/guide/bitwigbuddy/edit-mode" },
            { text: "Macro Mode", link: "/guide/bitwigbuddy/macro-mode" },
            { text: "Support", link: "/guide/bitwigbuddy/support" },
          ],
        },
        {
          text: "Actions Reference",
          items: [
            { text: "BitwigBuddy Actions", link: "/guide/bitwigbuddy-actions" },
            { text: "Bitwig Actions", link: "/guide/bitwig-actions" },
          ],
        },
        {
          text: "Reference",
          items: [{ text: "Changelog", link: "/guide/changelog" }],
        },
        {
          text: "Bitwig Actions",
          collapsed: true,
          items: [
            { text: "Overview", link: "/guide/bitwig-actions" },
            { text: "Editing", link: "/guide/bitwig-actions/editing" },
            { text: "Project", link: "/guide/bitwig-actions/project" },
            {
              text: "Panel Management",
              link: "/guide/bitwig-actions/panel-management",
            },
            { text: "Zooming", link: "/guide/bitwig-actions/zooming" },
            { text: "Note Editor", link: "/guide/bitwig-actions/note-editor" },
            { text: "Arranger", link: "/guide/bitwig-actions/arranger" },
            { text: "Multisample", link: "/guide/bitwig-actions/multisample" },
            { text: "General", link: "/guide/bitwig-actions/general" },
            { text: "Help", link: "/guide/bitwig-actions/help" },
            { text: "Dialogs", link: "/guide/bitwig-actions/dialogs" },
            { text: "Navigation", link: "/guide/bitwig-actions/navigation" },
            { text: "Search", link: "/guide/bitwig-actions/search" },
            { text: "File", link: "/guide/bitwig-actions/file" },
            { text: "Selection", link: "/guide/bitwig-actions/selection" },
            { text: "Comping", link: "/guide/bitwig-actions/comping" },
            {
              text: "Text Editing",
              link: "/guide/bitwig-actions/text-editing",
            },
            { text: "Browser", link: "/guide/bitwig-actions/browser" },
            { text: "Mixer", link: "/guide/bitwig-actions/mixer" },
            {
              text: "Window Management",
              link: "/guide/bitwig-actions/window-management",
            },
            {
              text: "Detail Editor",
              link: "/guide/bitwig-actions/detail-editor",
            },
            {
              text: "Clip Launcher",
              link: "/guide/bitwig-actions/clip-launcher",
            },
          ],
        },
      ],
    },
    footer: {
      message: "Documentation built with VitePress",
      copyright: "© 2025 Centomila",
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/centomila/BitwigBuddy-Bitwig-Extension",
      },
      {
        icon: "patreon",
        link: "https://www.patreon.com/centomila",
      },
      {
        icon: "youtube",
        link: "https://www.youtube.com/@centomila",
      },
      {
        icon: "spotify",
        link: "https://open.spotify.com/artist/6bdrEk5R3Ic7nZUufyUfsE",
      },
    ],
  },
});
