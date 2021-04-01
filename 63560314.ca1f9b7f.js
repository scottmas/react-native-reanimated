(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var i=n(2),a=n(6),o=(n(0),n(242)),r={id:"transitions",title:"Transitions",sidebar_label:"Transitions"},s={id:"version-1.x.x/transitions",title:"Transitions",description:"Transitions is an experimental API distributed as a part of reanimated which serves the purpose of animating between two states of view hierarchy. It is conceptually similar to LayoutAnimation concept from react native but gives much better control of what and how is going to be animated.",source:"@site/versioned_docs/version-1.x.x/transitions.md",permalink:"/react-native-reanimated/docs/1.x.x/transitions",editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/master/docs/versioned_docs/version-1.x.x/transitions.md",version:"1.x.x",sidebar_label:"Transitions",sidebar:"version-1.x.x/docs",previous:{title:"Examples",permalink:"/react-native-reanimated/docs/1.x.x/examples"},next:{title:"Additional configuration",permalink:"/react-native-reanimated/docs/1.x.x/config"}},c=[{value:"Transition groups",id:"transition-groups",children:[{value:"<code>&lt;Transition.Together&gt;</code>",id:"transitiontogether",children:[]},{value:"<code>&lt;Transition.Sequence&gt;</code>",id:"transitionsequence",children:[]}]},{value:"Transitions",id:"transitions",children:[{value:"<code>&lt;Transition.In&gt;</code>",id:"transitionin",children:[]},{value:"<code>&lt;Transition.Out&gt;</code>",id:"transitionout",children:[]},{value:"<code>&lt;Transition.Change&gt;</code>",id:"transitionchange",children:[]}]},{value:"How to use it",id:"how-to-use-it",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Transitions is an experimental API distributed as a part of reanimated which serves the purpose of animating between two states of view hierarchy. It is conceptually similar to ",Object(o.b)("inlineCode",{parentName:"p"},"LayoutAnimation")," concept from react native but gives much better control of what and how is going to be animated."),Object(o.b)("p",null,"Transitions API consists of two main building blocks. First one being ",Object(o.b)("inlineCode",{parentName:"p"},"Transitioning.View")," which is an extension of regular react-native view, so you can use any ",Object(o.b)("inlineCode",{parentName:"p"},"View")," props you'd like. The ",Object(o.b)("inlineCode",{parentName:"p"},"Transitioning.View")," is a root of all the transition animations that will be happening and is used to scope the changes to its children. In order to have next transition animated you'd need to call ",Object(o.b)("inlineCode",{parentName:"p"},"animateNextTransition()")," on the ",Object(o.b)("inlineCode",{parentName:"p"},"Transitioning.View")," instance."),Object(o.b)("p",null,"The second main building block is transition definition. Transitioning API uses JSX syntax that allows you to define how the transition animation should perform. You can use all the components from ",Object(o.b)("inlineCode",{parentName:"p"},"Transition")," object to combine the animation you want. Please see the below list for the documentation of transition components."),Object(o.b)("h2",{id:"transition-groups"},"Transition groups"),Object(o.b)("p",null,"The below set of components can be used to group one or more transitions. You can also nest transition groups in order to achieve desirable effects."),Object(o.b)("h3",{id:"transitiontogether"},Object(o.b)("inlineCode",{parentName:"h3"},"<Transition.Together>")),Object(o.b)("p",null,"Transitions nested under this component will run in parallel when the animation starts."),Object(o.b)("h3",{id:"transitionsequence"},Object(o.b)("inlineCode",{parentName:"h3"},"<Transition.Sequence>")),Object(o.b)("p",null,"Transitions nested under this component will run in sequence in the order at which they are listed"),Object(o.b)("h2",{id:"transitions"},"Transitions"),Object(o.b)("p",null,"Transition components can be used separately or as a part of a group. Each transition component has the following common properties you can use to configure the animation:"),Object(o.b)("h4",{id:"durationms"},Object(o.b)("inlineCode",{parentName:"h4"},"durationMs")),Object(o.b)("p",null,"The time animation takes to execute in milliseconds"),Object(o.b)("h4",{id:"delayms"},Object(o.b)("inlineCode",{parentName:"h4"},"delayMs")),Object(o.b)("p",null,"Use this if you want the animation to start delayed (value in milliseconds)"),Object(o.b)("h4",{id:"interpolation"},Object(o.b)("inlineCode",{parentName:"h4"},"interpolation")),Object(o.b)("p",null,"Specify the transition timing curve. Possible values are: ",Object(o.b)("inlineCode",{parentName:"p"},"linear"),", ",Object(o.b)("inlineCode",{parentName:"p"},"easeIn"),", ",Object(o.b)("inlineCode",{parentName:"p"},"easeOut"),", ",Object(o.b)("inlineCode",{parentName:"p"},"easeInOut")),Object(o.b)("h4",{id:"propagation"},Object(o.b)("inlineCode",{parentName:"h4"},"propagation")),Object(o.b)("p",null,"Allows for the framework to automatically delay beginning of transitions across a set of different views depending on their position. The possible values are ",Object(o.b)("inlineCode",{parentName:"p"},"top"),", ",Object(o.b)("inlineCode",{parentName:"p"},"bottom"),", ",Object(o.b)("inlineCode",{parentName:"p"},"left")," and ",Object(o.b)("inlineCode",{parentName:"p"},"right"),". When ",Object(o.b)("inlineCode",{parentName:"p"},'propagation="top"')," it means that the first element that will start animating is the one that is closest to the top of ",Object(o.b)("inlineCode",{parentName:"p"},"Transitioning.View")," container, then the other views will be delayed by the amount which depends on their distance from the top edge."),Object(o.b)("h3",{id:"transitionin"},Object(o.b)("inlineCode",{parentName:"h3"},"<Transition.In>")),Object(o.b)("p",null,"Allows to specify how views that get mounted during animation transition get animated. In addition to the above parameters you can specify the type of animation using ",Object(o.b)("inlineCode",{parentName:"p"},"type")," prop. The possible values are: ",Object(o.b)("inlineCode",{parentName:"p"},"fade"),", ",Object(o.b)("inlineCode",{parentName:"p"},"scale"),", ",Object(o.b)("inlineCode",{parentName:"p"},"slide-top"),", ",Object(o.b)("inlineCode",{parentName:"p"},"slide-bottom"),", ",Object(o.b)("inlineCode",{parentName:"p"},"slide-left"),", ",Object(o.b)("inlineCode",{parentName:"p"},"slide-right"),"."),Object(o.b)("h3",{id:"transitionout"},Object(o.b)("inlineCode",{parentName:"h3"},"<Transition.Out>")),Object(o.b)("p",null,"Allows to specify how the framework should animate views that are being removed during transition. In addition to the above parameters you can specify the type of animation using ",Object(o.b)("inlineCode",{parentName:"p"},"type")," prop. The possible values are: ",Object(o.b)("inlineCode",{parentName:"p"},"fade"),", ",Object(o.b)("inlineCode",{parentName:"p"},"scale"),", ",Object(o.b)("inlineCode",{parentName:"p"},"slide-top"),", ",Object(o.b)("inlineCode",{parentName:"p"},"slide-bottom"),", ",Object(o.b)("inlineCode",{parentName:"p"},"slide-left"),", ",Object(o.b)("inlineCode",{parentName:"p"},"slide-right"),"."),Object(o.b)("h3",{id:"transitionchange"},Object(o.b)("inlineCode",{parentName:"h3"},"<Transition.Change>")),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"Transition.Change")," component to specify how components' which properties get changed during transition should be animated. The framework currently supports an animating position, bounds and transforms."),Object(o.b)("h2",{id:"how-to-use-it"},"How to use it"),Object(o.b)("p",null,"This API is still experimental and is a subject to change. Please refer to our ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-reanimated/tree/master/Example/reanimated1/transitions"}),"Example app")," to see how it can be used in practice in the current shape."))}p.isMDXComponent=!0},242:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),u=i,m=b["".concat(r,".").concat(u)]||b[u]||d[u]||o;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);