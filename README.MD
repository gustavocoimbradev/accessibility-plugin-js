# accessibility.plugin.js


### option 1 - cloning the repo

run the following command in your terminal (the plugin files are located in the /plugin folder)

`
git clone https://github.com/gustavocoimbradev/accessibility-plugin-js.git
`

### option 2 - using the CDN

CSS

```html
<link href="https://gustavocoimbradev.github.io/accessibility-plugin-js/_plugin/css/accessibility.plugin.css" rel="stylesheet"> 
```
JS

```html
 <script src="https://gustavocoimbradev.github.io/accessibility-plugin-js/_plugin/js/accessibility.plugin.js"></script>  
```

### basic usage

```html
<div class="js-accessibility accessibility">
    <button class="js-increase increase">A+</button>
    <button class="js-decrease decrease">a-</button>
    <button class="js-contrast contrast">contrast</button>
</div>