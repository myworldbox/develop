((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,F,G,H,I,E,K,L,C={aBw:function aBw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bpB(){return new C.rp(null)},
rp:function rp(d){this.a=d},
OB:function OB(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=_.r=null},
aW4:function aW4(d){this.a=d},
aW0:function aW0(d){this.a=d},
aW1:function aW1(d,e){this.a=d
this.b=e},
aW2:function aW2(d,e){this.a=d
this.b=e},
aW3:function aW3(d){this.a=d},
aW_:function aW_(d,e){this.a=d
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
C.aBw.prototype={
CJ(d){var x=this,w=x.c,v=x.a,u=Math.max(0,d.w-w*(v-1))/v,t=u/x.d
return new A.Jo(v,t+x.b,u+w,t,u,A.tg(d.x))},
lx(d){var x=this,w=!0
if(d.a===x.a)if(d.b===x.b)if(d.c===x.c)w=d.d!==x.d
return w}}
C.rp.prototype={
af(){return new C.OB(A.ha())}}
C.OB.prototype={
aq(){var x,w,v=this
v.aR()
x=v.c
x.toString
x=A.cz(x,!1,y.y).c
w=x==null?null:x.h(0,"role")
x=J.iq(w)
if(!x.k(w,"admin")&&!x.k(w,"super-admin")){$.af.k4$.push(new C.aW4(v))
return}v.zx()},
zx(){var x=0,w=A.x(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l
var $async$zx=A.t(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:s.H(new C.aW0(s))
v=3
x=6
return A.q(s.d.a2("/auth/statistics"),$async$zx)
case 6:r=e
if(y.f.b(r)){q=A.z(y.N,y.S)
for(n=r.ghY(),n=n.gak(n);n.t();){p=n.gU()
if(A.iP(p.b))J.fL(q,J.aP(p.a),A.d4(p.b))
else if(typeof p.b=="number")J.fL(q,J.aP(p.a),B.d.cS(A.d0(p.b)))}if(s.c!=null)s.H(new C.aW1(s,q))}t.push(5)
x=4
break
case 3:v=2
l=u.pop()
o=A.am(l)
if(s.c!=null)s.H(new C.aW2(s,o))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.H(new C.aW3(s))
x=t.pop()
break
case 5:return A.v(null,w)
case 1:return A.u(u.at(-1),w)}})
return A.w($async$zx,w)},
I(d){var x,w,v,u=this,t=null,s=A.cz(d,!0,y.y).c,r=s==null?t:s.h(0,"role")
s=J.iq(r)
if(!s.k(r,"admin")&&!s.k(r,"super-admin"))return E.Qf
s=u.f
x=H.tH(t,t,t,t,!1,"statistics")
w=u.gaB7()
v=u.r
if(v!=null)v=A.c3(A.bD(A.c([A.a5(v,t,t,t,t,A.eK(t,t,A.K(d).ax.fy,t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.cM,new K.Fg(L.b0E,w,t,t,t,t,B.D,t,!1,t,!0,t,D.aWG,t)],y.p),B.w,B.q,B.ak,0,B.H),t,t)
else v=u.e==null?B.aT:u.alf(d)
return G.qz(A.eV(x,M.zv(A.fe(v,t,B.y,B.l7,B.iJ,t,t,!1,B.aa),w),B.dw),s)},
alf(d){var x,w,v,u=null,t=A.K(d),s=this.e
s.toString
x=A.c([["super-admin","Super Admins",D.a_N,E.LY],["admin","Admins",D.a0b,E.LV],["student","Students",B.wY,E.LW],["user","Users",B.q_,D.aJT]],y.t)
w=t.ok.f
w=A.a5("User counts by role",u,u,u,u,w==null?u:w.a5g(B.bP),u,u,u)
v=y.s
s=A.a_(new A.a7(x,new C.aW_(s,t),v),v.i("aa.E"))
v=A.aBv(s,!0,!0,!0)
s=s.length
return A.c3(new A.cJ(I.uL,A.bD(A.c([w,F.Ri,new A.yq(new C.aBw(2,16,16,1.4),v,u,B.aa,!1,u,u,B.M8,!0,u,s,B.y,u,u,B.r,B.b9,u)],y.p),B.c5,B.q,B.B,0,B.H),u),u,u)}}
var z=a.updateTypes(["ah<~>()"])
C.aW4.prototype={
$1(d){var x,w=this.a.c
w.toString
x=y.X
return A.aT(w,!1).pr("/",x,x)},
$S:6}
C.aW0.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
C.aW1.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.aW2.prototype={
$0(){return this.a.r=J.aP(this.b)},
$S:0}
C.aW3.prototype={
$0(){return this.a.f=!1},
$S:0}
C.aW_.prototype={
$1(d){var x,w,v,u,t,s=null,r=J.bo(d),q=A.b9(r.h(d,0)),p=A.b9(r.h(d,1)),o=y.Z.a(r.h(d,2)),n=y.G.a(r.h(d,3)),m=this.a.h(0,q)
if(m==null)m=0
r=A.ex(16)
x=A.fU(o,n,s,40)
w=this.b
v=w.ok
u=v.w
if(u==null)w=s
else{w=w.ax
t=w.rx
w=u.cz(t==null?w.k3:t)}w=A.a5(p,s,s,s,s,w,B.f3,s,s)
u=B.f.j(m)
v=v.e
return A.nG(new A.aE(B.aq,A.bD(A.c([x,B.b4,w,B.ad,A.a5(u,s,s,s,s,v==null?s:v.aGx(n,B.bP),s,s,s)],y.p),B.w,B.hO,B.B,0,B.H),s),s,1,s,!0,new A.cZ(r,B.u))},
$S:673};(function installTearOffs(){var x=a._instance_0u
x(C.OB.prototype,"gaB7","zx",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.aBw,A.a1p)
x(C.rp,A.S)
x(C.OB,A.W)
w(A.er,[C.aW4,C.aW_])
w(A.fB,[C.aW0,C.aW1,C.aW2,C.aW3])})()
A.h3(b.typeUniverse,JSON.parse('{"rp":{"S":[],"h":[]},"OB":{"W":["rp"]}}'))
var y=(function rtii(){var x=A.a1
return{y:x("hS"),G:x("y"),Z:x("bp"),t:x("r<T<@>>"),p:x("r<h>"),f:x("i<@,@>"),s:x("a7<T<@>,lf>"),N:x("m"),S:x("d"),X:x("O?"),H:x("~")}})();(function constants(){D.a_N=new A.bp(57442,"MaterialIcons",!1)
D.a0b=new A.bp(58310,"MaterialIcons",!1)
D.Xr=new A.y(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,B.h)
D.Xb=new A.y(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,B.h)
D.XB=new A.y(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,B.h)
D.Xv=new A.y(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,B.h)
D.WV=new A.y(1,0.47058823529411764,0.5647058823529412,0.611764705882353,B.h)
D.WU=new A.y(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,B.h)
D.XS=new A.y(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,B.h)
D.Xm=new A.y(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,B.h)
D.XU=new A.y(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,B.h)
D.XP=new A.y(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,B.h)
D.aCS=new A.a([50,D.Xr,100,D.Xb,200,D.XB,300,D.Xv,400,D.WV,500,D.WU,600,D.XS,700,D.Xm,800,D.XU,900,D.XP],A.a1("a<d,y>"))
D.aJT=new A.jM(D.aCS,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,B.h)
D.aWG=new A.aH("Retry",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["B2bAzpCVeY2kAQ8koUx48WDalIQ="]=a.current})($__dart_deferred_initializers__);