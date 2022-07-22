# 📙 Custom webfont icons

A quick demo demonstrating how to create a custom icon font with SVGs, for use with SCSS.

Using [grunt](https://gruntjs.com/) for generating the icon font and compiling the SCSS.
See Gruntfile.js for configuration.


## Usage
1. Clone this repo and run `npm install`
2. Add SVG icons to `/svg/src/icons`
3. Run `grunt icon` task to generate the font files and `_icons.scss` file
4. Import the generated `_icons.scss` file to your main SCSS stylesheet.
5. Run `grunt` to compile the CSS


## About
The icon font is named based on the project name specified in package.json, and generated based on the icons template `/svg/icons-template.css`. This template creates the mixins, classnames and font imports for importing in the scss.

The icons are available for use either via mixin or classname.

### Examples:

**SCSS**
```scss
.element:before {
    @include project-name-icon(facebook)
}
```

**HTML**
```html
<div class="project-name-icon-twitter">Twitter</div>
```


## Why use this approach?
✅ Helps maintain consistent, semantic markup and styling

✅ Aheres to good separation of concern between markup and stylistic elements

✅ Can be easily styled in the CSS

✅ Easier organisation of custom icons

⛔️ Inline SVG can convolute markup and make tracking icons difficult


## Inspiration
https://fontawesome.com/docs/web/use-with/scss