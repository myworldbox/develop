((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,F,G,H,I,E,K,L,C={aCg:function aCg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bqH(){return new C.ro(null)},
ro:function ro(d){this.a=d},
P5:function P5(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=_.r=null},
aWZ:function aWZ(d){this.a=d},
aWV:function aWV(d){this.a=d},
aWW:function aWW(d,e){this.a=d
this.b=e},
aWX:function aWX(d,e){this.a=d
this.b=e},
aWY:function aWY(d){this.a=d},
aWU:function aWU(d,e){this.a=d
this.b=e}},D,M
J=c[1]
A=c[0]
B=c[2]
F=c[41]
G=c[21]
H=c[20]
I=c[36]
E=c[31]
K=c[14]
L=c[39]
C=a.updateHolder(c[11],C)
D=c[40]
M=c[18]
C.aCg.prototype={
D3(d){var x=this,w=x.c,v=x.a,u=Math.max(0,d.w-w*(v-1))/v,t=u/x.d
return new A.JP(v,t+x.b,u+w,t,u,A.tf(d.x))},
lE(d){var x=this,w=!0
if(d.a===x.a)if(d.b===x.b)if(d.c===x.c)w=d.d!==x.d
return w}}
C.ro.prototype={
ac(){return new C.P5(A.hd())}}
C.P5.prototype={
aq(){var x,w,v=this
v.aN()
x=v.c
x.toString
x=A.cv(x,!1,y.y).c
w=x==null?null:x.h(0,"role")
x=J.iq(w)
if(!x.k(w,"admin")&&!x.k(w,"super-admin")){$.ac.k4$.push(new C.aWZ(v))
return}v.zS()},
zS(){var x=0,w=A.x(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l
var $async$zS=A.t(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:s.I(new C.aWV(s))
v=3
x=6
return A.q(s.d.iu("GET","/auth/statistics"),$async$zS)
case 6:r=e
if(y.f.b(r)){q=A.z(y.N,y.S)
for(n=r.gi_(),n=n.gak(n);n.t();){p=n.gV()
if(A.iR(p.b))J.fC(q,J.aU(p.a),A.d7(p.b))
else if(typeof p.b=="number")J.fC(q,J.aU(p.a),B.d.cS(A.cZ(p.b)))}if(s.c!=null)s.I(new C.aWW(s,q))}t.push(5)
x=4
break
case 3:v=2
l=u.pop()
o=A.aa(l)
if(s.c!=null)s.I(new C.aWX(s,o))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.I(new C.aWY(s))
x=t.pop()
break
case 5:return A.v(null,w)
case 1:return A.u(u.at(-1),w)}})
return A.w($async$zS,w)},
J(d){var x,w,v,u=this,t=null,s=A.cv(d,!0,y.y).c,r=s==null?t:s.h(0,"role")
s=J.iq(r)
if(!s.k(r,"admin")&&!s.k(r,"super-admin"))return E.Qv
s=u.f
x=H.tI(t,t,t,t,!1,"statistics")
w=u.gaCD()
v=u.r
if(v!=null)v=A.c6(A.bI(A.c([A.a5(v,t,t,t,t,A.eq(t,t,A.N(d).ax.fy,t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.cN,new K.FF(L.b1o,w,t,t,t,t,B.B,t,!1,t,!0,t,D.aXj,t)],y.p),B.w,B.r,B.al,0,B.H),t,t)
else v=u.e==null?B.aS:u.amx(d)
return G.qy(A.eZ(x,M.zM(A.ff(v,t,B.x,B.li,B.iR,t,t,!1,B.ab),w),B.dy),s)},
amx(d){var x,w,v,u=null,t=A.N(d),s=this.e
s.toString
x=A.c([["super-admin","Super Admins",D.a0_,E.Md],["admin","Admins",D.a0o,E.Ma],["student","Students",B.xb,E.Mb],["user","Users",B.qg,D.aKo]],y.t)
w=t.ok.f
w=A.a5("User counts by role",u,u,u,u,w==null?u:w.a6t(B.bS),u,u,u)
v=y.s
s=A.a_(new A.a8(x,new C.aWU(s,t),v),v.i("ab.E"))
v=A.aCf(s,!0,!0,!0)
s=s.length
return A.c6(new A.cM(I.v3,A.bI(A.c([w,F.Rz,new A.yE(new C.aCg(2,16,16,1.4,u),v,u,B.ab,!1,u,u,B.Mo,!0,u,s,B.x,u,u,B.q,B.bh,u)],y.p),B.bR,B.r,B.C,0,B.H),u),u,u)}}
var z=a.updateTypes(["aj<~>()"])
C.aWZ.prototype={
$1(d){var x,w=this.a.c
w.toString
x=y.X
return A.aQ(w,!1).pz("/",x,x)},
$S:6}
C.aWV.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
C.aWW.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.aWX.prototype={
$0(){return this.a.r=J.aU(this.b)},
$S:0}
C.aWY.prototype={
$0(){return this.a.f=!1},
$S:0}
C.aWU.prototype={
$1(d){var x,w,v,u,t,s=null,r=J.bm(d),q=A.b9(r.h(d,0)),p=A.b9(r.h(d,1)),o=y.Z.a(r.h(d,2)),n=y.G.a(r.h(d,3)),m=this.a.h(0,q)
if(m==null)m=0
r=A.eC(16)
x=A.fV(o,n,s,40)
w=this.b
v=w.ok
u=v.w
if(u==null)w=s
else{w=w.ax
t=w.rx
w=u.cA(t==null?w.k3:t)}w=A.a5(p,s,s,s,s,w,B.f8,s,s)
u=B.e.j(m)
v=v.e
return A.nC(new A.aH(B.ap,A.bI(A.c([x,B.b4,w,B.a9,A.a5(u,s,s,s,s,v==null?s:v.aIt(n,B.bS),s,s,s)],y.p),B.w,B.hV,B.C,0,B.H),s),s,1,s,!0,new A.d0(r,B.u))},
$S:681};(function installTearOffs(){var x=a._instance_0u
x(C.P5.prototype,"gaCD","zS",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.aCg,A.a1X)
x(C.ro,A.S)
x(C.P5,A.T)
w(A.ex,[C.aWZ,C.aWU])
w(A.fD,[C.aWV,C.aWW,C.aWX,C.aWY])})()
A.h6(b.typeUniverse,JSON.parse('{"ro":{"S":[],"h":[]},"P5":{"T":["ro"]}}'))
var y=(function rtii(){var x=A.a1
return{y:x("hX"),G:x("y"),Z:x("bu"),t:x("r<V<@>>"),p:x("r<h>"),f:x("i<@,@>"),s:x("a8<V<@>,lg>"),N:x("l"),S:x("d"),X:x("O?"),H:x("~")}})();(function constants(){D.a0_=new A.bu(57442,"MaterialIcons",!1)
D.a0o=new A.bu(58310,"MaterialIcons",!1)
D.XE=new A.y(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,B.h)
D.Xo=new A.y(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,B.h)
D.XO=new A.y(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,B.h)
D.XI=new A.y(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,B.h)
D.X7=new A.y(1,0.47058823529411764,0.5647058823529412,0.611764705882353,B.h)
D.X6=new A.y(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,B.h)
D.Y4=new A.y(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,B.h)
D.Xz=new A.y(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,B.h)
D.Y6=new A.y(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,B.h)
D.Y1=new A.y(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,B.h)
D.aDn=new A.a([50,D.XE,100,D.Xo,200,D.XO,300,D.XI,400,D.X7,500,D.X6,600,D.Y4,700,D.Xz,800,D.Y6,900,D.Y1],A.a1("a<d,y>"))
D.aKo=new A.jO(D.aDn,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,B.h)
D.aXj=new A.aE("Retry",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["Yq2n7GmdzhjoCA8TStf2ZfIXWN0="]=a.current})($__dart_deferred_initializers__);