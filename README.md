hasAttrLike
===========

Select elements by testing each value of each element's attribute `attr` for `pattern`.

Example
-------

```html
<div class="foobar foobaz"></div>
```

Find all elements that have a class that ends in "bar".

```js
$("[class$=bar]").length // 0 because "foobar" is not at the end of the `class` attribute.
$("*").hasAttrLike("class", /bar$/).length // 1
```
