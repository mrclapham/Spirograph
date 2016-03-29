## Classes

<dl>
<dt><a href="#SpiroGraph">SpiroGraph</a></dt>
<dd></dd>
</dl>

## Members

<dl>
<dt><a href="#SpiroGraph">SpiroGraph</a></dt>
<dd><p>Created by grahamclapham on 13/01/16.</p>
</dd>
<dt><a href="#ColourUtils">ColourUtils</a> : <code>Object</code></dt>
<dd><p>A package of colour utilities.</p>
</dd>
</dl>

<a name="SpiroGraph"></a>
## SpiroGraph
**Kind**: global class  

* [SpiroGraph](#SpiroGraph)
    * [new SpiroGraph(targ, config)](#new_SpiroGraph_new)
    * _instance_
        * [.setWidth(value)](#SpiroGraph+setWidth)
        * [.getWidth()](#SpiroGraph+getWidth) ⇒ <code>number</code> &#124; <code>\*</code>
        * [.setHeight(value)](#SpiroGraph+setHeight)
        * [.getHeight()](#SpiroGraph+getHeight) ⇒ <code>number</code> &#124; <code>\*</code>
        * [.setRaduis(value)](#SpiroGraph+setRaduis)
        * [.getRaduis()](#SpiroGraph+getRaduis) ⇒ <code>number</code> &#124; <code>\*</code>
        * [.setRaduis2(value)](#SpiroGraph+setRaduis2)
        * [.getRaduis2()](#SpiroGraph+getRaduis2) ⇒ <code>number</code> &#124; <code>\*</code>
        * [.setRaduis3(value)](#SpiroGraph+setRaduis3)
        * [.setPlaying(value)](#SpiroGraph+setPlaying)
        * [.getPlaying()](#SpiroGraph+getPlaying) ⇒ <code>boolean</code> &#124; <code>\*</code>
        * [.setOuterColor(value)](#SpiroGraph+setOuterColor)
        * [.getOuterColour(value)](#SpiroGraph+getOuterColour) ⇒ <code>\*</code> &#124; <code>string</code>
        * [.setInnerColour(value)](#SpiroGraph+setInnerColour)
        * [.getInnerColour()](#SpiroGraph+getInnerColour) ⇒ <code>string</code> &#124; <code>\*</code>
        * [.setGuideColourOuter(value)](#SpiroGraph+setGuideColourOuter)
        * [.getGuideColourOuter(value)](#SpiroGraph+getGuideColourOuter) ⇒ <code>\*</code> &#124; <code>string</code>
        * [.setGuideColourInner(value)](#SpiroGraph+setGuideColourInner)
        * [.setGuideThickness(value)](#SpiroGraph+setGuideThickness)
        * [.getGuideThickness(value)](#SpiroGraph+getGuideThickness) ⇒ <code>number</code> &#124; <code>\*</code>
        * [.getCentre()](#SpiroGraph+getCentre) ⇒ <code>Object</code>
        * [.destroy()](#SpiroGraph+destroy)
    * _static_
        * [.toRadians(value)](#SpiroGraph.toRadians) ⇒ <code>number</code>
        * [.circleToXY(radius, angle)](#SpiroGraph.circleToXY)

<a name="new_SpiroGraph_new"></a>
### new SpiroGraph(targ, config)
Creates a new Spirograph


| Param |
| --- |
| targ | 
| config | 

<a name="SpiroGraph+setWidth"></a>
### spiroGraph.setWidth(value)
Sets the overall width of the canvas DOM elements.

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  

| Param |
| --- |
| value | 

<a name="SpiroGraph+getWidth"></a>
### spiroGraph.getWidth() ⇒ <code>number</code> &#124; <code>\*</code>
Gets the width of the canvas DOM elements

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  
<a name="SpiroGraph+setHeight"></a>
### spiroGraph.setHeight(value)
Sets the height of the canvas elements.

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  

| Param |
| --- |
| value | 

<a name="SpiroGraph+getHeight"></a>
### spiroGraph.getHeight() ⇒ <code>number</code> &#124; <code>\*</code>
Returns the height of the canvas elements

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  
<a name="SpiroGraph+setRaduis"></a>
### spiroGraph.setRaduis(value)
The overall radius of the whole image.

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  

| Param |
| --- |
| value | 

<a name="SpiroGraph+getRaduis"></a>
### spiroGraph.getRaduis() ⇒ <code>number</code> &#124; <code>\*</code>
The overall radius of the whole image.

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  
<a name="SpiroGraph+setRaduis2"></a>
### spiroGraph.setRaduis2(value)
The radius of the inner wheel of the Spirograph

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  

| Param |
| --- |
| value | 

<a name="SpiroGraph+getRaduis2"></a>
### spiroGraph.getRaduis2() ⇒ <code>number</code> &#124; <code>\*</code>
The radius of the 'drawing' wheel - the inner wheel of the Spirograph

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  
<a name="SpiroGraph+setRaduis3"></a>
### spiroGraph.setRaduis3(value)
The inset from the edge of the inner wheel - radus2 - this may be a negative value to give interesting results.

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  

| Param |
| --- |
| value | 

<a name="SpiroGraph+setPlaying"></a>
### spiroGraph.setPlaying(value)
Is the spirograph to animate

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  

| Param |
| --- |
| value | 

<a name="SpiroGraph+getPlaying"></a>
### spiroGraph.getPlaying() ⇒ <code>boolean</code> &#124; <code>\*</code>
Is the spirograph currently animating.

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  
<a name="SpiroGraph+setOuterColor"></a>
### spiroGraph.setOuterColor(value)
Sets the colour of the dotted line around the outside

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  

| Param |
| --- |
| value | 

<a name="SpiroGraph+getOuterColour"></a>
### spiroGraph.getOuterColour(value) ⇒ <code>\*</code> &#124; <code>string</code>
Returns the outer colour of the drawing

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  

| Param |
| --- |
| value | 

<a name="SpiroGraph+setInnerColour"></a>
### spiroGraph.setInnerColour(value)
Sets the line in-fill colour of the drawing

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  

| Param |
| --- |
| value | 

<a name="SpiroGraph+getInnerColour"></a>
### spiroGraph.getInnerColour() ⇒ <code>string</code> &#124; <code>\*</code>
Returns the line in-fill colour of the drawing

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  
<a name="SpiroGraph+setGuideColourOuter"></a>
### spiroGraph.setGuideColourOuter(value)
Sets the colour of the outer guide circles.

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  

| Param |
| --- |
| value | 

<a name="SpiroGraph+getGuideColourOuter"></a>
### spiroGraph.getGuideColourOuter(value) ⇒ <code>\*</code> &#124; <code>string</code>
Returns the colour of the outer guide circles.

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  

| Param |
| --- |
| value | 

<a name="SpiroGraph+setGuideColourInner"></a>
### spiroGraph.setGuideColourInner(value)
Sets the colour of the inner guide circles.

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  

| Param |
| --- |
| value | 

<a name="SpiroGraph+setGuideThickness"></a>
### spiroGraph.setGuideThickness(value)
Returns the colour of the inner guide circles.

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  

| Param |
| --- |
| value | 

<a name="SpiroGraph+getGuideThickness"></a>
### spiroGraph.getGuideThickness(value) ⇒ <code>number</code> &#124; <code>\*</code>
Sets the thickness of the guide circles

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  

| Param |
| --- |
| value | 

<a name="SpiroGraph+getCentre"></a>
### spiroGraph.getCentre() ⇒ <code>Object</code>
Returns the centre point of the drawing - based on the width and height of the image.

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  
<a name="SpiroGraph+destroy"></a>
### spiroGraph.destroy()
Destroys the spirograph - including removing the canvas elements.
It is recommended you set the instance to null after destroying so it is garbage collected.

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  
<a name="SpiroGraph.toRadians"></a>
### SpiroGraph.toRadians(value) ⇒ <code>number</code>
Convert degrees to radians

**Kind**: static method of <code>[SpiroGraph](#SpiroGraph)</code>  

| Param |
| --- |
| value | 

<a name="SpiroGraph.circleToXY"></a>
### SpiroGraph.circleToXY(radius, angle)
Converts a radius and angle into x and y positions, relative to the center of a circle.

**Kind**: static method of <code>[SpiroGraph](#SpiroGraph)</code>  

| Param |
| --- |
| radius | 
| angle | 

<a name="SpiroGraph"></a>
## SpiroGraph
Created by grahamclapham on 13/01/16.

**Kind**: global variable  

* [SpiroGraph](#SpiroGraph)
    * [new SpiroGraph(targ, config)](#new_SpiroGraph_new)
    * _instance_
        * [.setWidth(value)](#SpiroGraph+setWidth)
        * [.getWidth()](#SpiroGraph+getWidth) ⇒ <code>number</code> &#124; <code>\*</code>
        * [.setHeight(value)](#SpiroGraph+setHeight)
        * [.getHeight()](#SpiroGraph+getHeight) ⇒ <code>number</code> &#124; <code>\*</code>
        * [.setRaduis(value)](#SpiroGraph+setRaduis)
        * [.getRaduis()](#SpiroGraph+getRaduis) ⇒ <code>number</code> &#124; <code>\*</code>
        * [.setRaduis2(value)](#SpiroGraph+setRaduis2)
        * [.getRaduis2()](#SpiroGraph+getRaduis2) ⇒ <code>number</code> &#124; <code>\*</code>
        * [.setRaduis3(value)](#SpiroGraph+setRaduis3)
        * [.setPlaying(value)](#SpiroGraph+setPlaying)
        * [.getPlaying()](#SpiroGraph+getPlaying) ⇒ <code>boolean</code> &#124; <code>\*</code>
        * [.setOuterColor(value)](#SpiroGraph+setOuterColor)
        * [.getOuterColour(value)](#SpiroGraph+getOuterColour) ⇒ <code>\*</code> &#124; <code>string</code>
        * [.setInnerColour(value)](#SpiroGraph+setInnerColour)
        * [.getInnerColour()](#SpiroGraph+getInnerColour) ⇒ <code>string</code> &#124; <code>\*</code>
        * [.setGuideColourOuter(value)](#SpiroGraph+setGuideColourOuter)
        * [.getGuideColourOuter(value)](#SpiroGraph+getGuideColourOuter) ⇒ <code>\*</code> &#124; <code>string</code>
        * [.setGuideColourInner(value)](#SpiroGraph+setGuideColourInner)
        * [.setGuideThickness(value)](#SpiroGraph+setGuideThickness)
        * [.getGuideThickness(value)](#SpiroGraph+getGuideThickness) ⇒ <code>number</code> &#124; <code>\*</code>
        * [.getCentre()](#SpiroGraph+getCentre) ⇒ <code>Object</code>
        * [.destroy()](#SpiroGraph+destroy)
    * _static_
        * [.toRadians(value)](#SpiroGraph.toRadians) ⇒ <code>number</code>
        * [.circleToXY(radius, angle)](#SpiroGraph.circleToXY)

<a name="new_SpiroGraph_new"></a>
### new SpiroGraph(targ, config)
Creates a new Spirograph


| Param |
| --- |
| targ | 
| config | 

<a name="SpiroGraph+setWidth"></a>
### spiroGraph.setWidth(value)
Sets the overall width of the canvas DOM elements.

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  

| Param |
| --- |
| value | 

<a name="SpiroGraph+getWidth"></a>
### spiroGraph.getWidth() ⇒ <code>number</code> &#124; <code>\*</code>
Gets the width of the canvas DOM elements

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  
<a name="SpiroGraph+setHeight"></a>
### spiroGraph.setHeight(value)
Sets the height of the canvas elements.

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  

| Param |
| --- |
| value | 

<a name="SpiroGraph+getHeight"></a>
### spiroGraph.getHeight() ⇒ <code>number</code> &#124; <code>\*</code>
Returns the height of the canvas elements

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  
<a name="SpiroGraph+setRaduis"></a>
### spiroGraph.setRaduis(value)
The overall radius of the whole image.

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  

| Param |
| --- |
| value | 

<a name="SpiroGraph+getRaduis"></a>
### spiroGraph.getRaduis() ⇒ <code>number</code> &#124; <code>\*</code>
The overall radius of the whole image.

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  
<a name="SpiroGraph+setRaduis2"></a>
### spiroGraph.setRaduis2(value)
The radius of the inner wheel of the Spirograph

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  

| Param |
| --- |
| value | 

<a name="SpiroGraph+getRaduis2"></a>
### spiroGraph.getRaduis2() ⇒ <code>number</code> &#124; <code>\*</code>
The radius of the 'drawing' wheel - the inner wheel of the Spirograph

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  
<a name="SpiroGraph+setRaduis3"></a>
### spiroGraph.setRaduis3(value)
The inset from the edge of the inner wheel - radus2 - this may be a negative value to give interesting results.

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  

| Param |
| --- |
| value | 

<a name="SpiroGraph+setPlaying"></a>
### spiroGraph.setPlaying(value)
Is the spirograph to animate

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  

| Param |
| --- |
| value | 

<a name="SpiroGraph+getPlaying"></a>
### spiroGraph.getPlaying() ⇒ <code>boolean</code> &#124; <code>\*</code>
Is the spirograph currently animating.

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  
<a name="SpiroGraph+setOuterColor"></a>
### spiroGraph.setOuterColor(value)
Sets the colour of the dotted line around the outside

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  

| Param |
| --- |
| value | 

<a name="SpiroGraph+getOuterColour"></a>
### spiroGraph.getOuterColour(value) ⇒ <code>\*</code> &#124; <code>string</code>
Returns the outer colour of the drawing

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  

| Param |
| --- |
| value | 

<a name="SpiroGraph+setInnerColour"></a>
### spiroGraph.setInnerColour(value)
Sets the line in-fill colour of the drawing

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  

| Param |
| --- |
| value | 

<a name="SpiroGraph+getInnerColour"></a>
### spiroGraph.getInnerColour() ⇒ <code>string</code> &#124; <code>\*</code>
Returns the line in-fill colour of the drawing

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  
<a name="SpiroGraph+setGuideColourOuter"></a>
### spiroGraph.setGuideColourOuter(value)
Sets the colour of the outer guide circles.

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  

| Param |
| --- |
| value | 

<a name="SpiroGraph+getGuideColourOuter"></a>
### spiroGraph.getGuideColourOuter(value) ⇒ <code>\*</code> &#124; <code>string</code>
Returns the colour of the outer guide circles.

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  

| Param |
| --- |
| value | 

<a name="SpiroGraph+setGuideColourInner"></a>
### spiroGraph.setGuideColourInner(value)
Sets the colour of the inner guide circles.

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  

| Param |
| --- |
| value | 

<a name="SpiroGraph+setGuideThickness"></a>
### spiroGraph.setGuideThickness(value)
Returns the colour of the inner guide circles.

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  

| Param |
| --- |
| value | 

<a name="SpiroGraph+getGuideThickness"></a>
### spiroGraph.getGuideThickness(value) ⇒ <code>number</code> &#124; <code>\*</code>
Sets the thickness of the guide circles

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  

| Param |
| --- |
| value | 

<a name="SpiroGraph+getCentre"></a>
### spiroGraph.getCentre() ⇒ <code>Object</code>
Returns the centre point of the drawing - based on the width and height of the image.

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  
<a name="SpiroGraph+destroy"></a>
### spiroGraph.destroy()
Destroys the spirograph - including removing the canvas elements.
It is recommended you set the instance to null after destroying so it is garbage collected.

**Kind**: instance method of <code>[SpiroGraph](#SpiroGraph)</code>  
<a name="SpiroGraph.toRadians"></a>
### SpiroGraph.toRadians(value) ⇒ <code>number</code>
Convert degrees to radians

**Kind**: static method of <code>[SpiroGraph](#SpiroGraph)</code>  

| Param |
| --- |
| value | 

<a name="SpiroGraph.circleToXY"></a>
### SpiroGraph.circleToXY(radius, angle)
Converts a radius and angle into x and y positions, relative to the center of a circle.

**Kind**: static method of <code>[SpiroGraph](#SpiroGraph)</code>  

| Param |
| --- |
| radius | 
| angle | 

<a name="ColourUtils"></a>
## ColourUtils : <code>Object</code>
A package of colour utilities.

**Kind**: global variable  
<a name="ColourUtils.hexToRgb"></a>
### ColourUtils.hexToRgb(hex, opacity) ⇒ <code>string</code>
Converts a HEX value to a rgba String.

**Kind**: static method of <code>[ColourUtils](#ColourUtils)</code>  

| Param |
| --- |
| hex | 
| opacity | 

