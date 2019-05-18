var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20181116_syb_scopedata*/window.__wcc_version__='v0.5vv_20181116_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
var value = $gdc( raw, "", 2 );
return value;
}
else
{
var value = $gdc( raw, "", 2 );
return value;
}
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
var cs
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'first'])
Z([[2,'+'],[[2,'+'],[1,'background-image:'],[[2,'+'],[[2,'+'],[1,'url('],[[6],[[7],[3,'$root']],[3,'m0']]],[1,')']]],[1,';']])
Z([3,'top'])
Z([[7],[3,'autoplay']])
Z([3,'swiper'])
Z([[7],[3,'duration']])
Z([[7],[3,'indicatorDots']])
Z([[7],[3,'interval']])
Z([3,'swiper-item'])
Z([3,'swiper-img'])
Z([3,'http://p1.music.126.net/-emRzrwbJdqMmkRxYvUkEg\x3d\x3d/109951164030387776.jpg'])
Z(z[9])
Z(z[10])
Z([3,'http://p1.music.126.net/dAYi5nXMYDL6csJWEdPO5g\x3d\x3d/109951164030375896.jpg'])
Z(z[9])
Z(z[10])
Z([3,'http://p1.music.126.net/BUj9IOnSkUDlcK_TFRnO9A\x3d\x3d/109951164027533394.jpg'])
Z([3,'btn_box'])
Z([3,'__e'])
Z([3,'btn_item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changeType']],[[4],[[5],[1,'mv']]]]]]]]]]])
Z([3,'btn_img'])
Z([[7],[3,'favorite']])
Z([3,'btn_text'])
Z([3,'每日推荐'])
Z(z[19])
Z(z[20])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changeType']],[[4],[[5],[1,'favorite']]]]]]]]]]])
Z(z[22])
Z([[7],[3,'everyday']])
Z(z[24])
Z([3,'我的收藏'])
Z(z[19])
Z(z[20])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changeType']],[[4],[[5],[1,'history']]]]]]]]]]])
Z(z[22])
Z([[7],[3,'history']])
Z(z[24])
Z([3,'播放历史'])
Z([3,'height:1px;width:100%;background-color:#E0E0E0;margin-top:30px;'])
Z([3,'kind_title'])
Z([a,[[7],[3,'title']]])
Z([[2,'||'],[[2,'=='],[[7],[3,'type']],[1,'favorite']],[[2,'=='],[[7],[3,'type']],[1,'history']]])
Z([3,'commonlist'])
Z([3,'common_titlebox'])
Z([3,'title_head'])
Z([3,'title_head_img'])
Z([[7],[3,'play']])
Z([3,'title_text'])
Z([3,'播放全部'])
Z([3,'title_num'])
Z([3,'（共100首）'])
Z([3,'title_download'])
Z([3,'title_download_img'])
Z([3,'title_delete'])
Z([3,'title_delete_img'])
Z([3,'common_itembox'])
Z([3,'__i0__'])
Z([3,'item'])
Z([[7],[3,'songlist']])
Z([3,'name'])
Z([3,'common_item'])
Z([3,'item_title'])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z([3,'item_info'])
Z([a,[[6],[[7],[3,'item']],[3,'songer']]])
Z([3,'item_delete'])
Z([[2,'=='],[[7],[3,'type']],[1,'mv']])
Z([3,'list_box'])
Z([3,'__i1__'])
Z(z[59])
Z([[7],[3,'listdata']])
Z([3,'mv_id'])
Z([3,'list_item'])
Z([3,'list_img'])
Z([[6],[[7],[3,'item']],[3,'picurl']])
Z([3,'list_text'])
Z([a,[[6],[[7],[3,'item']],[3,'mvtitle']]])
Z([3,'down_tool'])
Z(z[19])
Z([3,'head_img'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'gotoPlay']]]]]]]]])
Z([3,'real_head_box'])
Z([[6],[[6],[[7],[3,'songlist']],[[7],[3,'index']]],[3,'avatrul']])
Z([3,'song_info'])
Z(z[19])
Z([3,'song_title'])
Z(z[82])
Z([a,[[6],[[6],[[7],[3,'songlist']],[[7],[3,'index']]],[3,'name']]])
Z([3,'song_info_text'])
Z([3,'横滑切换上下曲'])
Z([3,'song_menu'])
Z([3,'song_menu_btn'])
Z([[7],[3,'menu']])
Z([3,'song_act'])
Z(z[19])
Z([3,'song_play_btn'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'ctrlMusic']],[[4],[[5],[1,'1']]]]]]]]]]])
Z(z[48])
Z(z[19])
Z(z[19])
Z(z[19])
Z(z[19])
Z([[4],[[5],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^changeShow']],[[4],[[5],[[4],[[5],[1,'changeShow']]]]]]]],[[4],[[5],[[5],[1,'^ctrlMusic']],[[4],[[5],[[4],[[5],[1,'ctrlMusic']]]]]]]],[[4],[[5],[[5],[1,'^slipercent']],[[4],[[5],[[4],[[5],[1,'slipercent']]]]]]]],[[4],[[5],[[5],[1,'^changeIndex']],[[4],[[5],[[4],[[5],[1,'changeIndex']]]]]]]]])
Z([[7],[3,'musicplay']])
Z([[6],[[6],[[7],[3,'songlist']],[[7],[3,'index']]],[3,'name']])
Z([[6],[[6],[[7],[3,'songlist']],[[7],[3,'index']]],[3,'size']])
Z([[6],[[6],[[7],[3,'songlist']],[[7],[3,'index']]],[3,'songer']])
Z([[7],[3,'specheight']])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'first_page'])
Z([3,'title'])
Z([3,'音乐，音悦'])
Z([3,'spec_title'])
Z([3,'开启手环模式'])
Z([3,'__e'])
Z([3,'btn_left'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'gotoFirst']],[[4],[[5],[1,1]]]]]]]]]]])
Z([3,'同意'])
Z(z[6])
Z([3,'btn_right'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'gotoFirst']]]]]]]]])
Z([3,'不同意'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'music_page'])
Z([3,'music_circle'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'audio'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'background-image:'],[[2,'+'],[[2,'+'],[1,'url('],[[6],[[7],[3,'$root']],[3,'m0']]],[1,')']]],[1,';']],[[2,'+'],[[2,'+'],[1,'height:'],[[7],[3,'specheight']]],[1,';']]])
Z([3,'top_bar'])
Z([3,'__e'])
Z([3,'back_btn'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'gotoback']]]]]]]]])
Z([3,'../../static/icon/refresh_arrow@2x.png'])
Z([3,'song_title'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[7],[3,'name']]],[1,'']]])
Z([3,'songer'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[7],[3,'songer']]],[1,'']]])
Z([3,'share'])
Z([3,'../../static/icon/share@2x.png'])
Z([[4],[[5],[[5],[[5],[1,'spec_img']],[[2,'?:'],[[7],[3,'isActive']],[1,'spec_img1'],[1,'']]],[[2,'?:'],[[2,'!'],[[7],[3,'isActive']]],[1,'spec_img2'],[1,'']]]])
Z([3,'../../static/audio/spec.png'])
Z([3,'circle_box'])
Z([3,'spec_backimg'])
Z([3,'../../static/audio/spec_back.png'])
Z([3,'firstbtn_box'])
Z([3,'firstbtn_item'])
Z([3,'../../static/icon/like@2x.png'])
Z(z[20])
Z([3,'../../static/icon/pull_down@2x.png'])
Z(z[20])
Z([3,'../../static/icon/comment@2x.png'])
Z([3,'program'])
Z([3,'start'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[7],[3,'starttime']]],[1,'']]])
Z([3,'#FFFFFF'])
Z([3,'#9E9E9E'])
Z(z[4])
Z(z[29])
Z([3,'12'])
Z([3,'slider'])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'changepercent']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'1'])
Z([3,'percent'])
Z([3,'end'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[7],[3,'alltime']]],[1,'']]])
Z([3,'actbtn_box'])
Z([3,'norbtn'])
Z([3,'../../static/icon/dantype.png'])
Z(z[4])
Z(z[41])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changeSong']],[[4],[[5],[1,2]]]]]]]]]]])
Z([3,'../../static/icon/last@2x.png'])
Z(z[4])
Z([3,'playbtn'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'changeStyle']]]]]]]]])
Z([3,'../../static/icon/play@2x.png'])
Z(z[4])
Z(z[41])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changeSong']],[[4],[[5],[1,1]]]]]]]]]]])
Z([3,'../../static/icon/next@2x.png'])
Z(z[4])
Z(z[41])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changeShow']],[[4],[[5],[1,1]]]]]]]]]]])
Z([3,'../../static/icon/sort@2x.png'])
Z([[7],[3,'showflag']])
Z([3,'unshow'])
Z(z[4])
Z([3,'opaview'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changeShow']],[[4],[[5],[1,2]]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'opacity:'],[[7],[3,'opacity']]],[1,';']])
Z([3,'unshow_list'])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[7],[3,'height']],[1,'px']]],[1,';']])
Z([3,'list_title'])
Z([3,'list_title_message'])
Z([3,'message_img'])
Z([3,'../../static/icon/dantype1@2x.png'])
Z([3,'message_text'])
Z([3,'单曲循环 （50）'])
Z([3,'list_title_clear'])
Z(z[69])
Z([3,'../../static/icon/delete@2x.png'])
Z([3,'scroll-Y'])
Z([3,'true'])
Z([3,'scroll_item'])
Z([3,'scroll_message'])
Z([3,'scro_song_title'])
Z([3,'讲不出再见'])
Z([3,'scro_songer'])
Z([3,'-谭咏麟'])
Z([3,'scroll_clear'])
Z([3,'srcoll_close'])
Z([3,'../../static/icon/close@2x.png'])
Z(z[78])
Z(z[79])
Z(z[80])
Z(z[81])
Z(z[82])
Z(z[83])
Z(z[84])
Z(z[85])
Z([[7],[3,'close']])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./pages/first/index.wxml','./pages/index/index.wxml','./pages/music/index.wxml','./pages/play/PlayIndex.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
cs.push("./pages/first/index.wxml:view:1:1")
var oB=_mz(z,'view',['bind:__l',0,'class',1,'style',1],[],e,s,gg)
cs.push("./pages/first/index.wxml:view:1:94")
var fE=_n('view')
_rz(z,fE,'class',3,e,s,gg)
cs.pop()
_(oB,fE)
cs.push("./pages/first/index.wxml:swiper:1:119")
var cF=_mz(z,'swiper',['autoplay',4,'class',1,'duration',2,'indicatorDots',3,'interval',4],[],e,s,gg)
cs.push("./pages/first/index.wxml:swiper-item:1:249")
var hG=_n('swiper-item')
cs.push("./pages/first/index.wxml:view:1:262")
var oH=_n('view')
_rz(z,oH,'class',9,e,s,gg)
cs.push("./pages/first/index.wxml:image:1:288")
var cI=_mz(z,'image',['mode',-1,'class',10,'src',1],[],e,s,gg)
cs.pop()
_(oH,cI)
cs.pop()
_(hG,oH)
cs.pop()
_(cF,hG)
cs.push("./pages/first/index.wxml:swiper-item:1:426")
var oJ=_n('swiper-item')
cs.push("./pages/first/index.wxml:view:1:439")
var lK=_n('view')
_rz(z,lK,'class',12,e,s,gg)
cs.push("./pages/first/index.wxml:image:1:465")
var aL=_mz(z,'image',['mode',-1,'class',13,'src',1],[],e,s,gg)
cs.pop()
_(lK,aL)
cs.pop()
_(oJ,lK)
cs.pop()
_(cF,oJ)
cs.push("./pages/first/index.wxml:swiper-item:1:603")
var tM=_n('swiper-item')
cs.push("./pages/first/index.wxml:view:1:616")
var eN=_n('view')
_rz(z,eN,'class',15,e,s,gg)
cs.push("./pages/first/index.wxml:image:1:642")
var bO=_mz(z,'image',['mode',-1,'class',16,'src',1],[],e,s,gg)
cs.pop()
_(eN,bO)
cs.pop()
_(tM,eN)
cs.pop()
_(cF,tM)
cs.pop()
_(oB,cF)
cs.push("./pages/first/index.wxml:view:1:789")
var oP=_n('view')
_rz(z,oP,'class',18,e,s,gg)
cs.push("./pages/first/index.wxml:view:1:811")
var xQ=_mz(z,'view',['bindtap',19,'class',1,'data-event-opts',2],[],e,s,gg)
cs.push("./pages/first/index.wxml:image:1:904")
var oR=_mz(z,'image',['mode',-1,'class',22,'src',1],[],e,s,gg)
cs.pop()
_(xQ,oR)
cs.push("./pages/first/index.wxml:view:1:959")
var fS=_n('view')
_rz(z,fS,'class',24,e,s,gg)
var cT=_oz(z,25,e,s,gg)
_(fS,cT)
cs.pop()
_(xQ,fS)
cs.pop()
_(oP,xQ)
cs.push("./pages/first/index.wxml:view:1:1008")
var hU=_mz(z,'view',['bindtap',26,'class',1,'data-event-opts',2],[],e,s,gg)
cs.push("./pages/first/index.wxml:image:1:1107")
var oV=_mz(z,'image',['mode',-1,'class',29,'src',1],[],e,s,gg)
cs.pop()
_(hU,oV)
cs.push("./pages/first/index.wxml:view:1:1162")
var cW=_n('view')
_rz(z,cW,'class',31,e,s,gg)
var oX=_oz(z,32,e,s,gg)
_(cW,oX)
cs.pop()
_(hU,cW)
cs.pop()
_(oP,hU)
cs.push("./pages/first/index.wxml:view:1:1211")
var lY=_mz(z,'view',['bindtap',33,'class',1,'data-event-opts',2],[],e,s,gg)
cs.push("./pages/first/index.wxml:image:1:1309")
var aZ=_mz(z,'image',['mode',-1,'class',36,'src',1],[],e,s,gg)
cs.pop()
_(lY,aZ)
cs.push("./pages/first/index.wxml:view:1:1363")
var t1=_n('view')
_rz(z,t1,'class',38,e,s,gg)
var e2=_oz(z,39,e,s,gg)
_(t1,e2)
cs.pop()
_(lY,t1)
cs.pop()
_(oP,lY)
cs.pop()
_(oB,oP)
cs.push("./pages/first/index.wxml:view:1:1419")
var b3=_n('view')
_rz(z,b3,'style',40,e,s,gg)
cs.pop()
_(oB,b3)
cs.push("./pages/first/index.wxml:view:1:1504")
var o4=_n('view')
_rz(z,o4,'class',41,e,s,gg)
var x5=_oz(z,42,e,s,gg)
_(o4,x5)
cs.pop()
_(oB,o4)
var xC=_v()
_(oB,xC)
if(_oz(z,43,e,s,gg)){xC.wxVkey=1
cs.push("./pages/first/index.wxml:block:1:1545")
cs.push("./pages/first/index.wxml:view:1:1598")
var o6=_n('view')
_rz(z,o6,'class',44,e,s,gg)
cs.push("./pages/first/index.wxml:view:1:1623")
var f7=_n('view')
_rz(z,f7,'class',45,e,s,gg)
cs.push("./pages/first/index.wxml:view:1:1653")
var c8=_n('view')
_rz(z,c8,'class',46,e,s,gg)
cs.push("./pages/first/index.wxml:image:1:1678")
var h9=_mz(z,'image',['class',47,'src',1],[],e,s,gg)
cs.pop()
_(c8,h9)
cs.pop()
_(f7,c8)
cs.push("./pages/first/index.wxml:view:1:1738")
var o0=_n('view')
_rz(z,o0,'class',49,e,s,gg)
var cAB=_oz(z,50,e,s,gg)
_(o0,cAB)
cs.pop()
_(f7,o0)
cs.push("./pages/first/index.wxml:view:1:1782")
var oBB=_n('view')
_rz(z,oBB,'class',51,e,s,gg)
var lCB=_oz(z,52,e,s,gg)
_(oBB,lCB)
cs.pop()
_(f7,oBB)
cs.push("./pages/first/index.wxml:view:1:1828")
var aDB=_n('view')
_rz(z,aDB,'class',53,e,s,gg)
cs.push("./pages/first/index.wxml:image:1:1857")
var tEB=_n('image')
_rz(z,tEB,'class',54,e,s,gg)
cs.pop()
_(aDB,tEB)
cs.pop()
_(f7,aDB)
cs.push("./pages/first/index.wxml:view:1:1906")
var eFB=_n('view')
_rz(z,eFB,'class',55,e,s,gg)
cs.push("./pages/first/index.wxml:image:1:1933")
var bGB=_n('image')
_rz(z,bGB,'class',56,e,s,gg)
cs.pop()
_(eFB,bGB)
cs.pop()
_(f7,eFB)
cs.pop()
_(o6,f7)
cs.push("./pages/first/index.wxml:view:1:1987")
var oHB=_n('view')
_rz(z,oHB,'class',57,e,s,gg)
var xIB=_v()
_(oHB,xIB)
cs.push("./pages/first/index.wxml:block:1:2016")
var oJB=function(cLB,fKB,hMB,gg){
cs.push("./pages/first/index.wxml:block:1:2016")
cs.push("./pages/first/index.wxml:view:1:2100")
var cOB=_n('view')
_rz(z,cOB,'class',62,cLB,fKB,gg)
cs.push("./pages/first/index.wxml:view:1:2126")
var oPB=_n('view')
_rz(z,oPB,'class',63,cLB,fKB,gg)
var lQB=_oz(z,64,cLB,fKB,gg)
_(oPB,lQB)
cs.pop()
_(cOB,oPB)
cs.push("./pages/first/index.wxml:view:1:2171")
var aRB=_n('view')
_rz(z,aRB,'class',65,cLB,fKB,gg)
var tSB=_oz(z,66,cLB,fKB,gg)
_(aRB,tSB)
cs.pop()
_(cOB,aRB)
cs.push("./pages/first/index.wxml:view:1:2217")
var eTB=_n('view')
_rz(z,eTB,'class',67,cLB,fKB,gg)
cs.pop()
_(cOB,eTB)
cs.pop()
_(hMB,cOB)
cs.pop()
return hMB
}
xIB.wxXCkey=2
_2z(z,60,oJB,e,s,gg,xIB,'item','__i0__','name')
cs.pop()
cs.pop()
_(o6,oHB)
cs.pop()
_(xC,o6)
cs.pop()
}
var oD=_v()
_(oB,oD)
if(_oz(z,68,e,s,gg)){oD.wxVkey=1
cs.push("./pages/first/index.wxml:block:1:2287")
cs.push("./pages/first/index.wxml:view:1:2317")
var bUB=_n('view')
_rz(z,bUB,'class',69,e,s,gg)
var oVB=_v()
_(bUB,oVB)
cs.push("./pages/first/index.wxml:block:1:2340")
var xWB=function(fYB,oXB,cZB,gg){
cs.push("./pages/first/index.wxml:block:1:2340")
cs.push("./pages/first/index.wxml:view:1:2425")
var o2B=_n('view')
_rz(z,o2B,'class',74,fYB,oXB,gg)
cs.push("./pages/first/index.wxml:image:1:2449")
var c3B=_mz(z,'image',['class',75,'src',1],[],fYB,oXB,gg)
cs.pop()
_(o2B,c3B)
cs.push("./pages/first/index.wxml:view:1:2503")
var o4B=_n('view')
_rz(z,o4B,'class',77,fYB,oXB,gg)
var l5B=_oz(z,78,fYB,oXB,gg)
_(o4B,l5B)
cs.pop()
_(o2B,o4B)
cs.pop()
_(cZB,o2B)
cs.pop()
return cZB
}
oVB.wxXCkey=2
_2z(z,72,xWB,e,s,gg,oVB,'item','__i1__','mv_id')
cs.pop()
cs.pop()
_(oD,bUB)
cs.pop()
}
cs.push("./pages/first/index.wxml:view:1:2580")
var a6B=_n('view')
_rz(z,a6B,'class',79,e,s,gg)
cs.push("./pages/first/index.wxml:view:1:2604")
var t7B=_mz(z,'view',['bindtap',80,'class',1,'data-event-opts',2],[],e,s,gg)
cs.push("./pages/first/index.wxml:image:1:2688")
var e8B=_mz(z,'image',['class',83,'src',1],[],e,s,gg)
cs.pop()
_(t7B,e8B)
cs.pop()
_(a6B,t7B)
cs.push("./pages/first/index.wxml:view:1:2766")
var b9B=_n('view')
_rz(z,b9B,'class',85,e,s,gg)
cs.push("./pages/first/index.wxml:view:1:2790")
var o0B=_mz(z,'view',['bindtap',86,'class',1,'data-event-opts',2],[],e,s,gg)
var xAC=_oz(z,89,e,s,gg)
_(o0B,xAC)
cs.pop()
_(b9B,o0B)
cs.push("./pages/first/index.wxml:view:1:2907")
var oBC=_n('view')
_rz(z,oBC,'class',90,e,s,gg)
var fCC=_oz(z,91,e,s,gg)
_(oBC,fCC)
cs.pop()
_(b9B,oBC)
cs.pop()
_(a6B,b9B)
cs.push("./pages/first/index.wxml:view:1:2971")
var cDC=_n('view')
_rz(z,cDC,'class',92,e,s,gg)
cs.push("./pages/first/index.wxml:image:1:2995")
var hEC=_mz(z,'image',['class',93,'src',1],[],e,s,gg)
cs.pop()
_(cDC,hEC)
cs.pop()
_(a6B,cDC)
cs.push("./pages/first/index.wxml:view:1:3054")
var oFC=_n('view')
_rz(z,oFC,'class',95,e,s,gg)
cs.push("./pages/first/index.wxml:image:1:3077")
var cGC=_mz(z,'image',['bindtap',96,'class',1,'data-event-opts',2,'src',3],[],e,s,gg)
cs.pop()
_(oFC,cGC)
cs.pop()
_(a6B,oFC)
cs.pop()
_(oB,a6B)
cs.push("./pages/first/index.wxml:play-index:1:3211")
var oHC=_mz(z,'play-index',['bind:changeIndex',100,'bind:changeShow',1,'bind:ctrlMusic',2,'bind:slipercent',3,'data-event-opts',4,'musicplay',5,'name',6,'size',7,'songer',8,'specheight',9],[],e,s,gg)
cs.pop()
_(oB,oHC)
xC.wxXCkey=1
oD.wxXCkey=1
cs.pop()
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
cs.push("./pages/index/index.wxml:view:1:1")
var aJC=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./pages/index/index.wxml:view:1:41")
var tKC=_n('view')
_rz(z,tKC,'class',2,e,s,gg)
var eLC=_oz(z,3,e,s,gg)
_(tKC,eLC)
cs.pop()
_(aJC,tKC)
cs.push("./pages/index/index.wxml:view:1:83")
var bMC=_n('view')
_rz(z,bMC,'class',4,e,s,gg)
var oNC=_oz(z,5,e,s,gg)
_(bMC,oNC)
cs.pop()
_(aJC,bMC)
cs.push("./pages/index/index.wxml:view:1:133")
var xOC=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2],[],e,s,gg)
var oPC=_oz(z,9,e,s,gg)
_(xOC,oPC)
cs.pop()
_(aJC,xOC)
cs.push("./pages/index/index.wxml:view:1:235")
var fQC=_mz(z,'view',['bindtap',10,'class',1,'data-event-opts',2],[],e,s,gg)
var cRC=_oz(z,13,e,s,gg)
_(fQC,cRC)
cs.pop()
_(aJC,fQC)
cs.pop()
_(r,aJC)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
cs.push("./pages/music/index.wxml:view:1:1")
var oTC=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./pages/music/index.wxml:view:1:41")
var cUC=_n('view')
_rz(z,cUC,'class',2,e,s,gg)
cs.pop()
_(oTC,cUC)
cs.pop()
_(r,oTC)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
cs.push("./pages/play/PlayIndex.wxml:view:1:1")
var lWC=_mz(z,'view',['bind:__l',0,'class',1,'style',1],[],e,s,gg)
cs.push("./pages/play/PlayIndex.wxml:view:1:123")
var tYC=_n('view')
_rz(z,tYC,'class',3,e,s,gg)
cs.push("./pages/play/PlayIndex.wxml:image:1:145")
var eZC=_mz(z,'image',['mode',-1,'bindtap',4,'class',1,'data-event-opts',2,'src',3],[],e,s,gg)
cs.pop()
_(tYC,eZC)
cs.push("./pages/play/PlayIndex.wxml:view:1:288")
var b1C=_n('view')
_rz(z,b1C,'class',8,e,s,gg)
var o2C=_oz(z,9,e,s,gg)
_(b1C,o2C)
cs.pop()
_(tYC,b1C)
cs.push("./pages/play/PlayIndex.wxml:view:1:334")
var x3C=_n('view')
_rz(z,x3C,'class',10,e,s,gg)
var o4C=_oz(z,11,e,s,gg)
_(x3C,o4C)
cs.pop()
_(tYC,x3C)
cs.push("./pages/play/PlayIndex.wxml:image:1:378")
var f5C=_mz(z,'image',['mode',-1,'class',12,'src',1],[],e,s,gg)
cs.pop()
_(tYC,f5C)
cs.pop()
_(lWC,tYC)
cs.push("./pages/play/PlayIndex.wxml:image:1:456")
var c6C=_mz(z,'image',['mode',-1,'class',14,'src',1],[],e,s,gg)
cs.pop()
_(lWC,c6C)
cs.push("./pages/play/PlayIndex.wxml:view:1:588")
var h7C=_n('view')
_rz(z,h7C,'class',16,e,s,gg)
cs.push("./pages/play/PlayIndex.wxml:image:1:613")
var o8C=_mz(z,'image',['mode',-1,'class',17,'src',1],[],e,s,gg)
cs.pop()
_(h7C,o8C)
cs.pop()
_(lWC,h7C)
cs.push("./pages/play/PlayIndex.wxml:view:1:700")
var c9C=_n('view')
_rz(z,c9C,'class',19,e,s,gg)
cs.push("./pages/play/PlayIndex.wxml:image:1:727")
var o0C=_mz(z,'image',['mode',-1,'class',20,'src',1],[],e,s,gg)
cs.pop()
_(c9C,o0C)
cs.push("./pages/play/PlayIndex.wxml:image:1:805")
var lAD=_mz(z,'image',['mode',-1,'class',22,'src',1],[],e,s,gg)
cs.pop()
_(c9C,lAD)
cs.push("./pages/play/PlayIndex.wxml:image:1:888")
var aBD=_mz(z,'image',['mode',-1,'class',24,'src',1],[],e,s,gg)
cs.pop()
_(c9C,aBD)
cs.pop()
_(lWC,c9C)
cs.push("./pages/play/PlayIndex.wxml:view:1:976")
var tCD=_n('view')
_rz(z,tCD,'class',26,e,s,gg)
cs.push("./pages/play/PlayIndex.wxml:view:1:998")
var eDD=_n('view')
_rz(z,eDD,'class',27,e,s,gg)
var bED=_oz(z,28,e,s,gg)
_(eDD,bED)
cs.pop()
_(tCD,eDD)
cs.push("./pages/play/PlayIndex.wxml:slider:1:1044")
var oFD=_mz(z,'slider',['activeColor',29,'backgroundColor',1,'bindchange',2,'blockColor',3,'blockSize',4,'class',5,'data-event-opts',6,'step',7,'value',8],[],e,s,gg)
cs.pop()
_(tCD,oFD)
cs.push("./pages/play/PlayIndex.wxml:view:1:1270")
var xGD=_n('view')
_rz(z,xGD,'class',38,e,s,gg)
var oHD=_oz(z,39,e,s,gg)
_(xGD,oHD)
cs.pop()
_(tCD,xGD)
cs.pop()
_(lWC,tCD)
cs.push("./pages/play/PlayIndex.wxml:view:1:1319")
var fID=_n('view')
_rz(z,fID,'class',40,e,s,gg)
cs.push("./pages/play/PlayIndex.wxml:image:1:1344")
var cJD=_mz(z,'image',['mode',-1,'class',41,'src',1],[],e,s,gg)
cs.pop()
_(fID,cJD)
cs.push("./pages/play/PlayIndex.wxml:image:1:1415")
var hKD=_mz(z,'image',['mode',-1,'bindtap',43,'class',1,'data-event-opts',2,'src',3],[],e,s,gg)
cs.pop()
_(fID,hKD)
cs.push("./pages/play/PlayIndex.wxml:image:1:1553")
var oLD=_mz(z,'image',['mode',-1,'bindtap',47,'class',1,'data-event-opts',2,'src',3],[],e,s,gg)
cs.pop()
_(fID,oLD)
cs.push("./pages/play/PlayIndex.wxml:image:1:1689")
var cMD=_mz(z,'image',['mode',-1,'bindtap',51,'class',1,'data-event-opts',2,'src',3],[],e,s,gg)
cs.pop()
_(fID,cMD)
cs.push("./pages/play/PlayIndex.wxml:image:1:1827")
var oND=_mz(z,'image',['mode',-1,'bindtap',55,'class',1,'data-event-opts',2,'src',3],[],e,s,gg)
cs.pop()
_(fID,oND)
cs.pop()
_(lWC,fID)
var aXC=_v()
_(lWC,aXC)
if(_oz(z,59,e,s,gg)){aXC.wxVkey=1
cs.push("./pages/play/PlayIndex.wxml:block:1:1972")
cs.push("./pages/play/PlayIndex.wxml:view:1:2000")
var lOD=_n('view')
_rz(z,lOD,'class',60,e,s,gg)
cs.push("./pages/play/PlayIndex.wxml:view:1:2021")
var aPD=_mz(z,'view',['bindtap',61,'class',1,'data-event-opts',2,'style',3],[],e,s,gg)
cs.pop()
_(lOD,aPD)
cs.push("./pages/play/PlayIndex.wxml:view:1:2154")
var tQD=_mz(z,'view',['class',65,'style',1],[],e,s,gg)
cs.push("./pages/play/PlayIndex.wxml:view:1:2220")
var eRD=_n('view')
_rz(z,eRD,'class',67,e,s,gg)
cs.push("./pages/play/PlayIndex.wxml:view:1:2245")
var bSD=_n('view')
_rz(z,bSD,'class',68,e,s,gg)
cs.push("./pages/play/PlayIndex.wxml:image:1:2278")
var oTD=_mz(z,'image',['mode',-1,'class',69,'src',1],[],e,s,gg)
cs.pop()
_(bSD,oTD)
cs.push("./pages/play/PlayIndex.wxml:view:1:2358")
var xUD=_n('view')
_rz(z,xUD,'class',71,e,s,gg)
var oVD=_oz(z,72,e,s,gg)
_(xUD,oVD)
cs.pop()
_(bSD,xUD)
cs.pop()
_(eRD,bSD)
cs.push("./pages/play/PlayIndex.wxml:view:1:2420")
var fWD=_n('view')
_rz(z,fWD,'class',73,e,s,gg)
cs.push("./pages/play/PlayIndex.wxml:image:1:2451")
var cXD=_mz(z,'image',['mode',-1,'class',74,'src',1],[],e,s,gg)
cs.pop()
_(fWD,cXD)
cs.pop()
_(eRD,fWD)
cs.pop()
_(tQD,eRD)
cs.push("./pages/play/PlayIndex.wxml:scroll-view:1:2543")
var hYD=_mz(z,'scroll-view',['class',76,'scrollY',1],[],e,s,gg)
cs.push("./pages/play/PlayIndex.wxml:view:1:2589")
var oZD=_n('view')
_rz(z,oZD,'class',78,e,s,gg)
cs.push("./pages/play/PlayIndex.wxml:view:1:2615")
var c1D=_n('view')
_rz(z,c1D,'class',79,e,s,gg)
cs.push("./pages/play/PlayIndex.wxml:view:1:2644")
var o2D=_n('view')
_rz(z,o2D,'class',80,e,s,gg)
var l3D=_oz(z,81,e,s,gg)
_(o2D,l3D)
cs.pop()
_(c1D,o2D)
cs.push("./pages/play/PlayIndex.wxml:view:1:2696")
var a4D=_n('view')
_rz(z,a4D,'class',82,e,s,gg)
var t5D=_oz(z,83,e,s,gg)
_(a4D,t5D)
cs.pop()
_(c1D,a4D)
cs.pop()
_(oZD,c1D)
cs.push("./pages/play/PlayIndex.wxml:view:1:2746")
var e6D=_n('view')
_rz(z,e6D,'class',84,e,s,gg)
cs.push("./pages/play/PlayIndex.wxml:image:1:2773")
var b7D=_mz(z,'image',['mode',-1,'class',85,'src',1],[],e,s,gg)
cs.pop()
_(e6D,b7D)
cs.pop()
_(oZD,e6D)
cs.pop()
_(hYD,oZD)
cs.push("./pages/play/PlayIndex.wxml:view:1:2865")
var o8D=_n('view')
_rz(z,o8D,'class',87,e,s,gg)
cs.push("./pages/play/PlayIndex.wxml:view:1:2891")
var x9D=_n('view')
_rz(z,x9D,'class',88,e,s,gg)
cs.push("./pages/play/PlayIndex.wxml:view:1:2920")
var o0D=_n('view')
_rz(z,o0D,'class',89,e,s,gg)
var fAE=_oz(z,90,e,s,gg)
_(o0D,fAE)
cs.pop()
_(x9D,o0D)
cs.push("./pages/play/PlayIndex.wxml:view:1:2972")
var cBE=_n('view')
_rz(z,cBE,'class',91,e,s,gg)
var hCE=_oz(z,92,e,s,gg)
_(cBE,hCE)
cs.pop()
_(x9D,cBE)
cs.pop()
_(o8D,x9D)
cs.push("./pages/play/PlayIndex.wxml:view:1:3022")
var oDE=_n('view')
_rz(z,oDE,'class',93,e,s,gg)
cs.push("./pages/play/PlayIndex.wxml:image:1:3049")
var cEE=_mz(z,'image',['mode',-1,'class',94,'src',1],[],e,s,gg)
cs.pop()
_(oDE,cEE)
cs.pop()
_(o8D,oDE)
cs.pop()
_(hYD,o8D)
cs.pop()
_(tQD,hYD)
cs.pop()
_(lOD,tQD)
cs.pop()
_(aXC,lOD)
cs.pop()
}
aXC.wxXCkey=1
cs.pop()
_(r,lWC)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
cs=[]
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(cs, env);
console.log(err)
throw err
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],[],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['pages/first/index.wxss']=setCssToHead(["body { height : 100%; }\n.",[1],"first { padding: 0 ",[0,16],"; background-image: url(../../static/img/newb.fee68b46.png-do-not-use-local-path-./pages/first/index.wxss\x267\x2620); background-size:cover ; background-position: left top; height: 100%; }\n.",[1],"top { height : ",[0,40],"; }\n.",[1],"swiper-item { width : 100%; height : 382px; border-radius: ",[0,16],"; overflow: hidden; margin-top : ",[0,48],"; }\n.",[1],"swiper-img { width : 100%; height : ",[0,191],"; border-radius: ",[0,16],"; }\n.",[1],"btn_box { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: space-evenly; -webkit-justify-content: space-evenly; -ms-flex-pack: space-evenly; justify-content: space-evenly; margin-top : ",[0,30],"; }\n.",[1],"btn_item { }\n.",[1],"btn_img { width : ",[0,75],"; height : ",[0,75],"; display: block; margin: 0 auto; }\n.",[1],"btn_text { font-size: ",[0,32],"; color : #4D4D4D; text-align: center; margin-top : ",[0,16],"; }\n.",[1],"kind_title { margin-top : 23px; color : #4D4D4D; font-size: 22px; text-align: center; font-weight: 600; }\n.",[1],"list_box { display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; display: -webkit-flex; padding-bottom : 90px; }\n.",[1],"list_item { width : 183px; margin-top: 24px; }\n.",[1],"list_img { width : 183px; height : 83px; border-radius: 8px; }\n.",[1],"list_text { max-width: 183px; font-size: 16px; color: #4D4D4D; line-height: 20px; -o-text-overflow: ellipsis; text-overflow: ellipsis; display: -webkit-box; -webkit-box-orient : verticel; -webkit-box-clamp : 2; word-break: break-all; margin-top : 9px; overflow: hidden; }\n.",[1],"down_tool { width: 100%; height: 44px; padding: 11px 16px 11px 16px; border-top:",[0,1]," solid #E0E0E0; position: fixed; bottom: 0; left : 0; z-index: 100; }\n.",[1],"head_img { width : 44px ; height : 44px; border-radius: 50%; background: #D8D8D8; float :left; }\n.",[1],"real_head_box { width: 44px; height: 44px; border-radius: 50%; }\n.",[1],"song_info { margin-left : 8px; float : left; }\n.",[1],"song_title { color : #4D4D4D; font-size: 18px; }\n.",[1],"song_info_text { font-size: 14px; color : #999999; }\n.",[1],"song_act { widht : 40px; height : 40px; float :right ; margin-right: 16px; }\n.",[1],"song_play_btn { width : 30px; height : 30px; margin-top : 5px; }\n.",[1],"song_menu { float : right ; width : 30px; height : 30px; margin-right: 32px; margin-top: 5px; }\n.",[1],"song_menu_btn { width : 23px; height : 23px; margin-top : 4px; }\n.",[1],"commonlist { padding-top: 26px; height: auto; }\n.",[1],"common_titlebox { position: relative; }\n.",[1],"title_head { position: absolute; top: 0; left : 0; width : 24px; height : 24px; }\n.",[1],"title_head_img { width : 24px; height : 24px; }\n.",[1],"title_text { position: absolute; font-size: 20px; color : #4D4D4D; top: 0; left: 32px; }\n.",[1],"title_num { font-size: 20px; color : #3F3F3F; position: absolute; top: 0; left: 115px; }\n.",[1],"title_download { width : 24px; height :24px; position: absolute; top: 0; right: 40px; }\n.",[1],"title_download_img{ width : 24px; height : 24px; }\n.",[1],"title_delete { width : 24px; height : 24px; position: absolute; top: 0; right: 0; }\n.",[1],"title_delete_img { width : 24px; height : 24px; }\n.",[1],"common_itembox { margin-top : 60px; position: relative; }\n.",[1],"common_item { margin-top : 15px; height: 50px; position: relative; }\n.",[1],"item_title { font-size: 20px; color: #4D4D4D; position: absolute; top: 0; left : 0; }\n.",[1],"item_info { position: absolute; bottom:0 ; left : 0; font-size: 12px; color: #818181; }\n.",[1],"item_delete { position: absolute; right: 0; top: 0; }\n",],undefined,{path:"./pages/first/index.wxss"});    
__wxAppCode__['pages/first/index.wxml']=$gwx('./pages/first/index.wxml');

__wxAppCode__['pages/index/index.wxss']=setCssToHead([".",[1],"first_page { height : 100%; background-color: #D23226; }\n.",[1],"title { padding-top:",[0,290],"; text-align: center; color : white; font-size: ",[0,70],"; }\n.",[1],"spec_title { position: absolute; bottom: ",[0,250],"; color : white; font-size: ",[0,36],"; text-align: center; width: 100%; }\n.",[1],"btn_left { width : ",[0,150],"; height : ",[0,60],"; border : 1px solid white; border-radius: ",[0,28],"; font-size: ",[0,36],"; line-height: ",[0,61],"; color : white; text-align: center; position: absolute; bottom: ",[0,130],"; left: ",[0,145],"; }\n.",[1],"btn_right { width : ",[0,150],"; height : ",[0,60],"; border : 1px solid white; border-radius: ",[0,28],"; font-size: ",[0,36],"; line-height: ",[0,61],"; color : white; text-align: center; position: absolute; bottom: ",[0,130],"; right: ",[0,145],"; }\nbody { height : 100%; }\n",],undefined,{path:"./pages/index/index.wxss"});    
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/music/index.wxss']=setCssToHead([".",[1],"music_page { height : 100%; width : 100%; padding-top : ",[0,160],"; }\n.",[1],"open_blueteeth { width : ",[0,200],"; color : black; font-size: ",[0,28],"; border: ",[0,2]," solid #CA0C16; border-radius : ",[0,32],"; margin : 0 auto; text-align: center; }\n.",[1],"music_circle { height : ",[0,684],"; width : ",[0,684],"; border-radius: 50%; background-color: black; margin : 0 auto; }\n",],undefined,{path:"./pages/music/index.wxss"});    
__wxAppCode__['pages/music/index.wxml']=$gwx('./pages/music/index.wxml');

__wxAppCode__['pages/play/PlayIndex.wxss']=setCssToHead(["body { height : 100%; }\n.",[1],"audio { height: 0; width: 100%; overflow: hidden; background-size: contain; position: fixed; bottom: 0; left: 0; z-index: 101; -webkit-transition: height 0.5s; -o-transition: height 0.5s; transition: height 0.5s; -webkit-transitin : height 0.5s; }\n.",[1],"top_bar { padding: 30px 16px 0 16px; height : 53px; position : relative; }\n.",[1],"back_btn { width : 20px; height : 20px; position: absolute; top: 47px; left:16px; }\n.",[1],"song_title { position: absolute; left : 46px; top: 30px; color : white; font-size: 21px; }\n.",[1],"songer { position: absolute; top: 60px; left: 46px; color :#E0E0E0; font-size: 15px; }\n.",[1],"share { width : 20px; height : 20px; position: absolute; top: 47px; right : 16px; }\n.",[1],"spec_img { width : 162px; height : 135px; position: absolute; top : 93px; right : 51px; }\n.",[1],"spec_img1 { -webkit-transform: rotate(20deg); -ms-transform: rotate(20deg); transform: rotate(20deg); -webkit-transform-origin:11% 12%; -ms-transform-origin:11% 12%; transform-origin:11% 12%; -webkit-transition: -webkit-transform 0.5s; transition: -webkit-transform 0.5s; -o-transition: transform 0.5s; transition: transform 0.5s; transition: transform 0.5s, -webkit-transform 0.5s; -webkit-transitin : transform 0.5s; }\n.",[1],"spec_img2 { -webkit-transform: rotate(0); -ms-transform: rotate(0); transform: rotate(0); -webkit-transform-origin:11% 12%; -ms-transform-origin:11% 12%; transform-origin:11% 12%; -webkit-transition: -webkit-transform 0.5s; transition: -webkit-transform 0.5s; -o-transition: transform 0.5s; transition: transform 0.5s; transition: transform 0.5s, -webkit-transform 0.5s; -webkit-transitin : transform 0.5s; }\n.",[1],"circle_box { width: 297px; height: 297px; margin : 114px auto 0; background: #303034; border: 6px solid #7F7B7B; -webkit-box-shadow: 0 2px 4px 0 rgba(153,153,153,0.50); box-shadow: 0 2px 4px 0 rgba(153,153,153,0.50); border-radius: 50%; }\n.",[1],"spec_backimg { display: block; width: 201px; height: 201px; margin: 48px; }\n.",[1],"firstbtn_box { height: 26px; margin-top: 115px; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; padding: 0 60px; }\n.",[1],"firstbtn_item { width : 26px; height : 26px; display: block; }\n.",[1],"program { margin-top : 25px; height: 15px; padding: 0 16px; }\n.",[1],"slider { width: 280px; float: left; margin: 0 auto; }\n.",[1],"start { float: left; font-size: 11px; color: #E0E0E0; margin-top: 3px; margin-right: 8px; }\n.",[1],"end { float: left; font-size: 11px; color: #E0E0E0; margin-top: 3px; margin-left: 4px; }\n.",[1],"actbtn_box { margin-top: 28px; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; padding: 0 40px; }\n.",[1],"norbtn { width: 20px; height: 20px; }\n.",[1],"playbtn { width: 45px; height: 45px; }\n.",[1],"unshow { position: fixed; top: 0; left: 0; height: 100%; width: 100%; z-index: 100; }\n.",[1],"opaview { height: 100%; background: #000000; opacity: 0; -webkit-transition: opacity 0.5s; -o-transition: opacity 0.5s; transition: opacity 0.5s; -webkit-transitin : opacity 0.5s; }\n.",[1],"unshow_list { position: absolute; left: 0; bottom: 0; background: #FFFFFF; width: 368px; height: 0; border-radius: 23px 23px 3px 3px; padding: 0 12px; -webkit-transition: height 0.5s; -o-transition: height 0.5s; transition: height 0.5s; -webkit-transitin : height 0.5s; }\n.",[1],"list_title { height: 53px; border-bottom: 1px solid #E0E0E0; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"list_title_message { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"message_img { width:18px ; height: 18px; }\n.",[1],"message_text { margin-left: 6px; font-size: 17px; color: #4D4D4D; }\n.",[1],"scroll-Y { height: 360px; overflow: hidden; padding-top: 28px; }\n.",[1],"scroll_item { margin-bottom : 29px; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"scroll_message { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"scro_song_title { font-size: 15px; color: #4D4D4D; }\n.",[1],"scro_songer { margin-left: 6px; font-size: 10px; color: #818181; }\n.",[1],"srcoll_close { width: 16px; height: 16px; }\n",],undefined,{path:"./pages/play/PlayIndex.wxss"});    
__wxAppCode__['pages/play/PlayIndex.wxml']=$gwx('./pages/play/PlayIndex.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        plus.webview.postMessageToUniNView({
            type: 'UniWebviewReady-' + plus.webview.currentWebview().id
        }, '__uniapp__service');
})();
