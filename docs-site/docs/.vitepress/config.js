import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Bitwig Documentation',
  description: 'Comprehensive documentation for Bitwig Studio and BitwigBuddy',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'BitwigBuddy Actions', link: '/guide/bitwigbuddy-actions' },
      { text: 'Bitwig Actions', link: '/guide/bitwig-actions' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Overview', link: '/guide/' }
          ]
        },
        {
          text: 'BitwigBuddy',
          items: [
            { text: 'BitwigBuddy Actions', link: '/guide/bitwigbuddy-actions' }
          ]
        },
        {
          text: 'Bitwig Actions',
          items: [
            { text: 'Overview', link: '/guide/bitwig-actions' },
            { text: 'Editing', link: '/guide/bitwig-actions/editing' },
            { text: 'Project', link: '/guide/bitwig-actions/project' },
            { text: 'Panel Management', link: '/guide/bitwig-actions/panel-management' },
            { text: 'Zooming', link: '/guide/bitwig-actions/zooming' },
            { text: 'Note Editor', link: '/guide/bitwig-actions/note-editor' },
            { text: 'Arranger', link: '/guide/bitwig-actions/arranger' },
            { text: 'Multisample', link: '/guide/bitwig-actions/multisample' },
            { text: 'General', link: '/guide/bitwig-actions/general' },
            { text: 'Help', link: '/guide/bitwig-actions/help' },
            { text: 'Dialogs', link: '/guide/bitwig-actions/dialogs' },
            { text: 'Navigation', link: '/guide/bitwig-actions/navigation' },
            { text: 'Search', link: '/guide/bitwig-actions/search' },
            { text: 'File', link: '/guide/bitwig-actions/file' },
            { text: 'Selection', link: '/guide/bitwig-actions/selection' },
            { text: 'Comping', link: '/guide/bitwig-actions/comping' },
            { text: 'Text Editing', link: '/guide/bitwig-actions/text-editing' },
            { text: 'Browser', link: '/guide/bitwig-actions/browser' },
            { text: 'Mixer', link: '/guide/bitwig-actions/mixer' },
            { text: 'Window Management', link: '/guide/bitwig-actions/window-management' },
            { text: 'Detail Editor', link: '/guide/bitwig-actions/detail-editor' },
            { text: 'Clip Launcher', link: '/guide/bitwig-actions/clip-launcher' }
          ]
        }
      ]
    },
    footer: {
      message: 'Documentation built with VitePress',
      copyright: '© 2023 Bitwig Documentation'
    }
  }
})
