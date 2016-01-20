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
        * [.setRaduis(value)](#SpiroGraph+setRaduis)
        * [.getRaduis()](#SpiroGraph+getRaduis) ⇒ <code>number</code> &#124; <code>\*</code>
        * [.setRaduis2(value)](#SpiroGraph+setRaduis2)
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
        * [.setRaduis(value)](#SpiroGraph+setRaduis)
        * [.getRaduis()](#SpiroGraph+getRaduis) ⇒ <code>number</code> &#124; <code>\*</code>
        * [.setRaduis2(value)](#SpiroGraph+setRaduis2)
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

