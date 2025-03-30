import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: "en-US",
  title: "BitwigBuddy",
  description: "BitwigBuddy is a Bitwig Studio extension that allows you to quickly generate note steps and automate repetitive tasks.",
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
      message: 'Documentation built with <a href="https://vitepress.dev/">VitePress</a>',
      copyright: '© 2025 <a href="https://centomila.com">Centomila</a>',
    },
    socialLinks: [
      {
        icon: {
          svg: '<svg viewBox="0 0 512 512" id="_x30_1" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M418.275,146h-46.667 c-5.365-22.513-12.324-43.213-20.587-61.514c15.786,8.776,30.449,19.797,43.572,32.921C403.463,126.277,411.367,135.854,418.275,146 z M452,256c0,17.108-2.191,33.877-6.414,50h-64.034c1.601-16.172,2.448-32.887,2.448-50s-0.847-33.828-2.448-50h64.034 C449.809,222.123,452,238.892,452,256z M256,452c-5.2,0-21.048-10.221-36.844-41.813c-6.543-13.087-12.158-27.994-16.752-44.187 h107.191c-4.594,16.192-10.208,31.1-16.752,44.187C277.048,441.779,261.2,452,256,452z M190.813,306 c-1.847-16.247-2.813-33.029-2.813-50s0.966-33.753,2.813-50h130.374c1.847,16.247,2.813,33.029,2.813,50s-0.966,33.753-2.813,50 H190.813z M60,256c0-17.108,2.191-33.877,6.414-50h64.034c-1.601,16.172-2.448,32.887-2.448,50s0.847,33.828,2.448,50H66.414 C62.191,289.877,60,273.108,60,256z M256,60c5.2,0,21.048,10.221,36.844,41.813c6.543,13.087,12.158,27.994,16.752,44.187H202.404 c4.594-16.192,10.208-31.1,16.752-44.187C234.952,70.221,250.8,60,256,60z M160.979,84.486c-8.264,18.301-15.222,39-20.587,61.514 H93.725c6.909-10.146,14.812-19.723,23.682-28.593C130.531,104.283,145.193,93.262,160.979,84.486z M93.725,366h46.667 c5.365,22.513,12.324,43.213,20.587,61.514c-15.786-8.776-30.449-19.797-43.572-32.921C108.537,385.723,100.633,376.146,93.725,366z M351.021,427.514c8.264-18.301,15.222-39,20.587-61.514h46.667c-6.909,10.146-14.812,19.723-23.682,28.593 C381.469,407.717,366.807,418.738,351.021,427.514z"></path></g></svg>'
        },
        link: "https://centomila.com",
      },
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
      {
        icon: "beatport",
        link: "https://www.beatport.com/artist/centomila/1136112",
      },
      {
        icon: "soundcloud",
        link: "https://soundcloud.com/centomila",
      },
    ],
    search: {
      provider: 'local'
    },
    css: {
      variables: {
        '--vp-home-hero-name-color': 'transparent',
        '--vp-home-hero-name-background': '-webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff)',
        '--vp-home-hero-image-background-image': 'linear-gradient(-45deg, #bd34fe 50%, #47caff 50%)',
      },
    },
  }
});
