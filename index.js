module.exports = function(options){
  const standardized = ['uuid','version', 'tags'];
  const make = function(list){
    const sources = {};
    const byId = list.reduce((lookup, item, currentIndex, array) => {
        lookup[item.uuid] = item;
        return lookup;
    }, {});
    const original = list.reduce((composite, listItem, currentIndex, array) => {
      Object.keys(listItem).filter(i=>standardized.indexOf(i)).forEach(function(name){
        composite[name] = listItem[name];
        sources[name] = listItem.uuid;
      });
        return composite;
    }, {});
    const response = new Proxy(original, {
      get: function(target, name) {
          if (target[name] ) {
            return target[name];
          } else if ( name == 'list' ) {
            return list;
          }else{
            return undefined;
          }
      },
      set: function(target, name, value) {
          if (target[name] ) {
            // console.log( 'Updating .%s from object .uuid=%s', name, sources[name] );
            target[name] = value;
            const source = byId[sources[name]];
            source[name] = value;
            // console.log('Updated source object', source)
            return true;
          }else{
            // setting non existen property
          }
      }
    }); // new proxy

    return response;
  }
  return {
    make
  }
}
