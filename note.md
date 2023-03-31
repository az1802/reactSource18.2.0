


Component
props
context
key
ref
children
updater //更新队列  (enqueueSetState:eetState更新队列  enqueueForceUpdate:forceUpdate 强制更新队列    )

setState
forceUpdate


PureComponent   基于 Component扩展
isPureReactComponent


createRef  {current:}



Children  (map,forEach,count,toArray,only 方法)


ReactElement
```js
ReactElement = function (type, key, ref, self, source, owner, props){
  const element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner,
  };


  return  element

}
function createElement(type, config, children) (){

}
```

fiberRoot 应用的基石

rootFiber  fiber树的根节点

(updateQueue: any).shared;  alternate
