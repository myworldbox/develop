((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,F,G,H,I,E,K,L,C={ayP:function ayP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bkV(){return new C.r0(null)},
r0:function r0(d){this.a=d},
Np:function Np(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=_.r=null},
aSB:function aSB(d){this.a=d},
aSx:function aSx(d){this.a=d},
aSy:function aSy(d,e){this.a=d
this.b=e},
aSz:function aSz(d,e){this.a=d
this.b=e},
aSA:function aSA(d){this.a=d},
aSw:function aSw(d,e){this.a=d
this.b=e}},D,M,N
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
N=c[42]
C.ayP.prototype={
C0(d){var x=this,w=x.c,v=x.a,u=Math.max(0,d.w-w*(v-1))/v,t=u/x.d
return new A.If(v,t+x.b,u+w,t,u,A.rO(d.x))},
lo(d){var x=this,w=!0
if(d.a===x.a)if(d.b===x.b)if(d.c===x.c)w=d.d!==x.d
return w}}
C.r0.prototype={
ag(){return new C.Np(A.h1())}}
C.Np.prototype={
aq(){var x,w,v=this
v.b6()
x=v.c
x.toString
x=A.cp(x,!1,y.y).c
w=x==null?null:x.h(0,"role")
x=J.ik(w)
if(!x.j(w,"admin")&&!x.j(w,"super-admin")){$.af.k4$.push(new C.aSB(v))
return}v.yT()},
yT(){var x=0,w=A.C(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l
var $async$yT=A.D(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:s.H(new C.aSx(s))
v=3
x=6
return A.r(s.d.Z("/auth/statistics"),$async$yT)
case 6:r=e
if(y.f.b(r)){q=A.x(y.N,y.S)
for(n=r.ghS(),n=n.gak(n);n.t();){p=n.gU()
if(A.iI(p.b))J.fE(q,J.aG(p.a),A.d8(p.b))
else if(typeof p.b=="number")J.fE(q,J.aG(p.a),B.d.cK(A.cA(p.b)))}if(s.c!=null)s.H(new C.aSy(s,q))}t.push(5)
x=4
break
case 3:v=2
l=u.pop()
o=A.aw(l)
if(s.c!=null)s.H(new C.aSz(s,o))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.H(new C.aSA(s))
x=t.pop()
break
case 5:return A.A(null,w)
case 1:return A.z(u.at(-1),w)}})
return A.B($async$yT,w)},
I(d){var x,w,v,u=this,t=null,s=A.cp(d,!0,y.y).c,r=s==null?t:s.h(0,"role")
s=J.ik(r)
if(!s.j(r,"admin")&&!s.j(r,"super-admin"))return E.Q_
s=u.f
x=H.tg(t,t,t,t,!1,"statistics")
w=u.gayv()
v=u.r
if(v!=null)v=A.c0(A.bC(A.c([A.a4(v,t,t,t,t,A.eA(t,t,A.K(d).ax.fy,t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.cK,new K.Ej(L.b_Y,w,t,t,t,t,B.D,t,!1,t,!0,t,D.aW0,t)],y.p),B.w,B.r,B.aj,0,B.H),t,t)
else v=u.e==null?B.aX:u.ajr(d)
return G.qa(A.eM(x,M.yM(A.f5(v,t,B.y,B.l2,B.iC,t,t,!1,B.a8),w),B.dv),s)},
ajr(d){var x,w,v,u=null,t=A.K(d),s=this.e
s.toString
x=A.c([["super-admin","Super Admins",D.a_g,E.LI],["admin","Admins",D.a_E,E.LF],["student","Students",B.wK,E.LG],["user","Users",B.pU,D.aJh]],y.t)
w=t.ok.f
w=A.a4("User counts by role",u,u,u,u,w==null?u:w.a40(B.bO),u,u,u)
v=y.s
s=A.Z(new A.a9(x,new C.aSw(s,t),v),v.i("aa.E"))
v=A.ayO(s,!0,!0,!0)
s=s.length
return A.c0(new A.cF(I.uD,A.bC(A.c([w,F.R2,new A.xK(new C.ayP(2,16,16,1.4),v,u,B.a8,!1,u,u,N.LT,!0,u,s,B.y,u,u,B.q,B.ba,u)],y.p),B.c3,B.r,B.B,0,B.H),u),u,u)}}
var z=a.updateTypes(["am<~>()"])
C.aSB.prototype={
$1(d){var x,w=this.a.c
w.toString
x=y.X
return A.aS(w,!1).pb("/",x,x)},
$S:6}
C.aSx.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
C.aSy.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.aSz.prototype={
$0(){return this.a.r=J.aG(this.b)},
$S:0}
C.aSA.prototype={
$0(){return this.a.f=!1},
$S:0}
C.aSw.prototype={
$1(d){var x,w,v,u,t,s=null,r=J.bm(d),q=A.bo(r.h(d,0)),p=A.bo(r.h(d,1)),o=y.Z.a(r.h(d,2)),n=y.G.a(r.h(d,3)),m=this.a.h(0,q)
if(m==null)m=0
r=A.eD(16)
x=A.fM(o,n,s,40)
w=this.b
v=w.ok
u=v.w
if(u==null)w=s
else{w=w.ax
t=w.rx
w=u.cw(t==null?w.k3:t)}w=A.a4(p,s,s,s,s,w,B.f0,s,s)
u=B.f.k(m)
v=v.e
return A.nm(new A.aD(B.aq,A.bC(A.c([x,B.b5,w,B.ab,A.a4(u,s,s,s,s,v==null?s:v.aDK(n,B.bO),s,s,s)],y.p),B.w,B.hH,B.B,0,B.H),s),s,1,s,!0,new A.cY(r,B.u))},
$S:661};(function installTearOffs(){var x=a._instance_0u
x(C.Np.prototype,"gayv","yT",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.ayP,A.a_Z)
x(C.r0,A.S)
x(C.Np,A.V)
w(A.eb,[C.aSB,C.aSw])
w(A.fu,[C.aSx,C.aSy,C.aSz,C.aSA])})()
A.fV(b.typeUniverse,JSON.parse('{"r0":{"S":[],"h":[]},"Np":{"V":["r0"]}}'))
var y=(function rtii(){var x=A.a1
return{y:x("hI"),G:x("t"),Z:x("bq"),t:x("q<Y<@>>"),p:x("q<h>"),f:x("i<@,@>"),s:x("a9<Y<@>,l_>"),N:x("n"),S:x("d"),X:x("Q?"),H:x("~")}})();(function constants(){D.a_g=new A.bq(57442,"MaterialIcons",!1)
D.a_E=new A.bq(58310,"MaterialIcons",!1)
D.X1=new A.t(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,B.h)
D.WM=new A.t(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,B.h)
D.Xc=new A.t(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,B.h)
D.X5=new A.t(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,B.h)
D.Wv=new A.t(1,0.47058823529411764,0.5647058823529412,0.611764705882353,B.h)
D.Wu=new A.t(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,B.h)
D.Xt=new A.t(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,B.h)
D.WX=new A.t(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,B.h)
D.Xv=new A.t(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,B.h)
D.Xq=new A.t(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,B.h)
D.aCg=new A.a([50,D.X1,100,D.WM,200,D.Xc,300,D.X5,400,D.Wv,500,D.Wu,600,D.Xt,700,D.WX,800,D.Xv,900,D.Xq],A.a1("a<d,t>"))
D.aJh=new A.jC(D.aCg,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,B.h)
D.aW0=new A.aE("Retry",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["38nUyyGwgaF9wgZ4Mk7xTeZJwoQ="]=a.current})($__dart_deferred_initializers__);