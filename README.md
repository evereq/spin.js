# spin.js

Fork from https://github.com/fgnass/spin.js  
Extended with jQuery plugin and TypeScript declarations

An animated CSS3 loading spinner with VML fallback for IE.

 * No images, no external CSS
 * No dependencies
 * Highly configurable
 * Resolution independent
 * Uses VML as fallback in old IEs
 * Uses @keyframe animations, falling back to setTimeout()
 * Works in all major browsers, including IE6
 * Small footprint (~1.9K gzipped)
 * MIT License

## Usage

```javascript
new Spinner({color:'#fff', lines: 12}).spin(target);
```

For an interactive demo and a list of all supported options please refer to <http://evereq.github.com/spin.js>.
