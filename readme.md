# hyperterm-dibdabs

<img width="600" src="https://raw.githubusercontent.com/acemtp/hyper-decoratetabs/master/media/screen-shot.jpg"/>

A little colored dot, an emoji or an image on the left of the tab is added for quick identification
of commonly used tabs.

## Config

To configure, add the file path and desired color (hex or rgb) to the `overrides` attribute of the plugin's configuration, located in the `.hyper.js` file.

**For example:** Update the color of the `Downloads` directory to a flashy red, Add a emoji for Movies directory and an image for Documents

``` javascript
module.exports = {
  config: {
    'hyper-decoratetabs': {
      overrides: {
        'Downloads': '#FF0000',
        'Movies': '🍿',
        'Documents': 'https://avatars.githubusercontent.com/u/103561?v=4',
      },
    },
  }
}
```
