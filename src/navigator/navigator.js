import History from './history';

export default function(opt){
  const h = new History(opt);
  const obj = {
    _h: h
  };

  ['push', 'back', 'replace', 'relaunch', 'switchTab'].forEach(k => {
    _bindToOther(obj, k, h);
  })
  
  return obj;

}

function _bindToOther(obj, attr, h){
  obj[attr] = function(){
    h[attr].apply(h, arguments);
  }
}