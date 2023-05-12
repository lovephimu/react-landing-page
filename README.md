# Cloning an Existing Layout

For this CSS exercise I picked [this](https://rpcfast.com/?ref=landingfolio) existing
landing page from [Landingfolio](https://www.landingfolio.com/).
The website seems simple at first glance but has a lot going on behind the scenes
and css-wise.

## Challanges

### Variations of Classes

Even though most elements are rounded boxes with a flat box-shadow, border and
background they are all very individually styled which makes writing general css
classes difficult.
I solved it by defining base classes and additional classes that would then change
color or other properties. However, this results in very cluttered code looking a lot
like tailwind syntax.

### Number of Classes

Maintaining control of the sheer number of classes proved difficult. Some styled
elements only occur once and in order to keep the css to a minimum I referred to
inline styling (even though that’s considered bad practice)

## New Experiences

- handeling large css files
- position: sticky
- working on more than 2 splitscreens
- thinking about how to structures large website styles
