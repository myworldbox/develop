((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,K,I,L,M,N,F,B={
biK(){return new B.qh(null)},
qh:function qh(d){this.a=d},
LH:function LH(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=""
_.x=_.w="all"
_.y=10
_.c=_.a=null},
aNn:function aNn(d){this.a=d},
aMZ:function aMZ(d){this.a=d},
aN_:function aN_(d,e){this.a=d
this.b=e},
aN0:function aN0(d){this.a=d},
aN1:function aN1(){},
aN2:function aN2(d){this.a=d},
aN3:function aN3(){},
aNd:function aNd(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aNc:function aNc(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aN6:function aN6(){},
aN7:function aN7(d,e){this.a=d
this.b=e},
aN5:function aN5(d,e){this.a=d
this.b=e},
aN8:function aN8(){},
aN9:function aN9(d,e){this.a=d
this.b=e},
aN4:function aN4(d,e){this.a=d
this.b=e},
aNa:function aNa(d){this.a=d},
aNb:function aNb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aNi:function aNi(d){this.a=d},
aNh:function aNh(d,e){this.a=d
this.b=e},
aNj:function aNj(d){this.a=d},
aNg:function aNg(d,e){this.a=d
this.b=e},
aNk:function aNk(d){this.a=d},
aNf:function aNf(d,e){this.a=d
this.b=e},
aNl:function aNl(d){this.a=d},
aNe:function aNe(d,e){this.a=d
this.b=e},
aNm:function aNm(d,e){this.a=d
this.b=e},
a7r:function a7r(d,e,f,g){var _=this
_.r=d
_.w=e
_.x=f
_.J$=0
_.M$=g
_.aj$=_.an$=0},
aMY:function aMY(d){this.a=d},
aMX:function aMX(d,e){this.a=d
this.b=e}},C,G,E,H
J=c[1]
A=c[0]
D=c[2]
K=c[34]
I=c[19]
L=c[21]
M=c[20]
N=c[33]
F=c[16]
B=a.updateHolder(c[9],B)
C=c[30]
G=c[31]
E=c[13]
H=c[32]
B.qh.prototype={
ag(){return new B.LH(A.h1(),[])}}
B.LH.prototype={
aq(){var x,w,v=this
v.b6()
x=v.c
x.toString
x=A.cp(x,!1,y.y).c
w=x==null?null:x.h(0,"role")
x=J.ik(w)
if(!x.j(w,"admin")&&!x.j(w,"super-admin")){$.af.k4$.push(new B.aNn(v))
return}v.uS()},
uS(){var x=0,w=A.C(y.H),v=1,u=[],t=[],s=this,r,q,p,o
var $async$uS=A.D(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:s.H(new B.aMZ(s))
v=3
x=6
return A.r(s.d.Z("/auth/users"),$async$uS)
case 6:r=e
if(y.j.b(r))s.H(new B.aN_(s,r))
t.push(5)
x=4
break
case 3:v=2
o=u.pop()
q=A.aw(o)
s.c.a8(y.q).f.eI(A.i3(null,null,null,null,null,D.q,null,A.a4("Failed to load users: "+A.m(q),null,null,null,null,null,null,null,null),null,D.b4,null,null,null,null,null,null,null,null,null,null))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
s.H(new B.aN0(s))
x=t.pop()
break
case 5:return A.A(null,w)
case 1:return A.z(u.at(-1),w)}})
return A.B($async$uS,w)},
F2(d,e){return this.azN(d,e)},
azN(d,e){var x=0,w=A.C(y.H),v=1,u=[],t=this,s,r,q
var $async$F2=A.D(function(f,g){if(f===1){u.push(g)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.r(t.d.p7("/auth/admin/role",A.T(["email",d,"role",e],y.N,y.z)),$async$F2)
case 6:t.uS()
t.c.a8(y.q).f.eI(C.aQb)
v=1
x=5
break
case 3:v=2
q=u.pop()
s=A.aw(q)
t.c.a8(y.q).f.eI(A.i3(null,null,null,null,null,D.q,null,A.a4("Failed to update role: "+A.m(s),null,null,null,null,null,null,null,null),null,D.b4,null,null,null,null,null,null,null,null,null,null))
x=5
break
case 2:x=1
break
case 5:return A.A(null,w)
case 1:return A.z(u.at(-1),w)}})
return A.B($async$F2,w)},
F6(d,e){return this.aA4(d,e)},
aA4(d,e){var x=0,w=A.C(y.H),v=1,u=[],t=this,s,r,q
var $async$F6=A.D(function(f,g){if(f===1){u.push(g)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.r(t.d.p7("/auth/admin/status",A.T(["email",d,"status",e],y.N,y.z)),$async$F6)
case 6:t.uS()
t.c.a8(y.q).f.eI(C.aQ9)
v=1
x=5
break
case 3:v=2
q=u.pop()
s=A.aw(q)
t.c.a8(y.q).f.eI(A.i3(null,null,null,null,null,D.q,null,A.a4("Failed to update status: "+A.m(s),null,null,null,null,null,null,null,null),null,D.b4,null,null,null,null,null,null,null,null,null,null))
x=5
break
case 2:x=1
break
case 5:return A.A(null,w)
case 1:return A.z(u.at(-1),w)}})
return A.B($async$F6,w)},
amI(){var x,w,v=J.aYm(this.e,y.f)
v=A.qd(v,new B.aN1(),v.$ti.i("u.E"),y.P)
x=A.o(v).i("aV<u.E>")
w=A.Z(new A.aV(v,new B.aN2(this),x),x.i("u.E"))
D.b.ik(w,new B.aN3())
return w},
ay6(d){var x,w,v,u,t,s=null,r="role",q={},p=this.c
p.toString
x=A.cp(p,!1,y.y).c
p=x==null
w=J.e(p?s:x.h(0,r),"super-admin")
v=J.e(p?s:x.h(0,r),"admin")
u=d.h(0,r)
q.a=u==null?"student":u
t=d.h(0,"status")
q.b=t==null?"active":t
q.c=q.d=!1
p=this.c
p.toString
A.hG(s,s,!0,s,new B.aNd(q,this,d,w,v),p,s,!0,y.z)},
I(d){var x,w,v,u,t,s,r,q,p=this,o=null,n="super-admin",m=A.cp(d,!0,y.y).c,l=m==null?o:m.h(0,"role")
m=J.ik(l)
if(!m.j(l,"admin")&&!m.j(l,n))return G.Q_
x=m.j(l,n)
w=m.j(l,"admin")
v=p.amI()
m=M.tg(o,o,o,new B.aNi(p),!1,"members")
u=p.f
t=A.eD(16)
s=A.K(d).ch.eT(0.25)
r=y.N
q=y.p
return A.eM(m,L.qa(A.f5(A.nm(A.bC(A.c([new A.aD(D.p7,A.cf(A.c([A.cc(E.TO(C.a1d,p.w,C.a8y,new B.aNj(p),r),1),D.k2,A.cc(E.TO(C.a16,p.x,C.abK,new B.aNk(p),r),1)],q),D.w,D.r,D.B,0,o,o),o),new A.oC(A.K(d).a4a(H.v0,A.K(d).ch.eT(0.15)),E.b56(C.a2R,A.a4("Members ("+v.length+")",o,o,o,o,o,o,o,o),new B.aNl(p),p.y,!0,new B.a7r(v,new B.aNm(x,w),p.gay5(),$.ae())),o)],q),D.w,D.r,D.B,0,D.H),o,0,o,!0,new A.cY(t,new A.aC(s,1,D.A,-1))),o,D.y,D.ch,o,o,o,!1,D.a8),u),D.dv)}}
B.a7r.prototype={
aka(d){switch(d){case"super-admin":return G.LI.eT(0.12)
case"admin":return G.LF.eT(0.12)
case"student":return G.LG.eT(0.12)
default:return D.rp.eT(0.16)}},
akb(d){switch(d){case"active":return D.LJ.eT(0.14)
case"inactive":return D.mX.eT(0.14)
default:return N.LH.eT(0.16)}},
md(d){var x,w,v,u,t,s,r=this,q=null,p=r.r
if(d>=p.length)return q
x=p[d]
p=x.h(0,"role")
w=J.aG(p==null?"":p)
p=x.h(0,"status")
v=J.aG(p==null?"":p)
p=x.h(0,"nameUser")
p=E.nu(A.a4(J.aG(p==null?"":p),q,q,q,q,q,q,q,q))
u=x.h(0,"email")
u=E.nu(A.a4(J.aG(u==null?"":u),q,q,q,q,q,q,q,q))
t=E.nu(new A.dc(D.h8,q,q,I.agg(r.aka(w),A.a4(w,q,q,q,q,q,q,q,q),D.nJ),q))
s=E.nu(new A.dc(D.h8,q,q,I.agg(r.akb(v),A.a4(v,q,q,q,q,q,q,q,q),D.nJ),q))
return E.ahf(A.c([p,u,t,s,E.nu(r.w.$1(x)?A.c9(q,q,C.a0v,q,q,new B.aMX(r,x),q,q,q):D.aX)],y.F),new A.aM(new B.aMY(d),y.b),d)},
ga6Y(){return!1},
ga94(){return this.r.length},
gT0(){return 0}}
var z=a.updateTypes(["dp<n>(n)","~(i<n,@>)"])
B.aNn.prototype={
$1(d){var x,w=this.a.c
w.toString
x=y.X
return A.aS(w,!1).pb("/",x,x)},
$S:6}
B.aMZ.prototype={
$0(){return this.a.f=!0},
$S:0}
B.aN_.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.aN0.prototype={
$0(){return this.a.f=!1},
$S:0}
B.aN1.prototype={
$1(d){return A.ev(d,y.N,y.z)},
$S:218}
B.aN2.prototype={
$1(d){var x,w,v,u,t,s,r,q=this.a,p=D.c.dc(q.r).toLowerCase(),o=d.h(0,"nameUser")
o=J.aG(o==null?"":o)
x=d.h(0,"email")
x=J.aG(x==null?"":x)
w=d.h(0,"role")
v=J.aG(w==null?"":w)
w=d.h(0,"status")
u=J.aG(w==null?"":w)
t=p.length===0||D.c.m(o.toLowerCase(),p)||D.c.m(x.toLowerCase(),p)
o=q.w
s=o==="all"||v===o
q=q.x
r=q==="all"||u===q
return t&&s&&r},
$S:61}
B.aN3.prototype={
$2(d,e){var x,w,v,u,t=d.h(0,"role"),s=J.aG(t==null?"":t)
t=e.h(0,"role")
x=J.aG(t==null?"":t)
w=D.b.ea(C.A3,s)
v=D.b.ea(C.A3,x)
if(w!==v)return D.f.cl(v,w)
t=d.h(0,"email")
t=J.aG(t==null?"":t)
u=e.h(0,"email")
return D.c.cl(t,J.aG(u==null?"":u))},
$S:666}
B.aNd.prototype={
$1(d){var x=this
return new A.mG(new B.aNc(x.a,x.b,x.c,x.d,x.e,d),null)},
$S:92}
B.aNc.prototype={
$2(d,e){var x,w=this,v=null,u=w.c,t=A.a4("Edit User: "+A.m(u.h(0,"nameUser")),v,v,v,v,v,v,v,v),s=y.p,r=A.c([],s),q=w.d,p=w.a,o=p.a
if(q){x=y.v
x=A.Z(new A.a9(A.c(["student","user","admin","super-admin"],y.s),new B.aN6(),x),x.i("aa.E"))
r.push(E.TO(C.a14,o,x,new B.aN7(p,e),y.N))}else r.push(A.fi(!1,v,v,v,!1,v,!0,v,v,v,v,v,!1,v,v,v,v,A.a4(o,v,v,v,v,v,v,v,v),v,C.RY,v,v,v))
r.push(D.cK)
if(!q)if(w.e)q=J.e(u.h(0,"role"),"student")||J.e(u.h(0,"role"),"user")
else q=!1
else q=!0
o=p.b
if(q){q=y.v
q=A.Z(new A.a9(A.c(["active","inactive","pending"],y.s),new B.aN8(),q),q.i("aa.E"))
r.push(E.TO(C.a18,o,q,new B.aN9(p,e),y.N))}else r.push(A.fi(!1,v,v,v,!1,v,!0,v,v,v,v,v,!1,v,v,v,v,A.a4(o,v,v,v,v,v,v,v,v),v,H.RX,v,v,v))
r=A.bC(r,D.w,D.r,D.aj,0,D.H)
q=w.f
return A.jZ(A.c([A.d6(K.nA,new B.aNa(q),v),A.d6(D.RT,new B.aNb(p,w.b,q,u),v)],s),r,t)},
$S:667}
B.aN6.prototype={
$1(d){var x=null
return F.py(A.a4(d,x,x,x,x,x,x,x,x),d,y.N)},
$S:z+0}
B.aN7.prototype={
$1(d){this.b.$1(new B.aN5(this.a,d))},
$S:46}
B.aN5.prototype={
$0(){var x=this.a
x.a=this.b
x.d=!0},
$S:0}
B.aN8.prototype={
$1(d){var x=null
return F.py(A.a4(d,x,x,x,x,x,x,x,x),d,y.N)},
$S:z+0}
B.aN9.prototype={
$1(d){this.b.$1(new B.aN4(this.a,d))},
$S:46}
B.aN4.prototype={
$0(){var x=this.a
x.b=this.b
x.c=!0},
$S:0}
B.aNa.prototype={
$0(){A.aS(this.a,!1).d5(null)
return null},
$S:0}
B.aNb.prototype={
$0(){var x=0,w=A.C(y.H),v=this,u
var $async$$0=A.D(function(d,e){if(d===1)return A.z(e,w)
for(;;)switch(x){case 0:A.aS(v.c,!1).d5(null)
u=v.a
x=u.d?2:3
break
case 2:x=4
return A.r(v.b.F2(v.d.h(0,"email"),u.a),$async$$0)
case 4:case 3:x=u.c?5:6
break
case 5:x=7
return A.r(v.b.F6(v.d.h(0,"email"),u.b),$async$$0)
case 7:case 6:return A.A(null,w)}})
return A.B($async$$0,w)},
$S:9}
B.aNi.prototype={
$1(d){var x=this.a
return x.H(new B.aNh(x,d))},
$S:18}
B.aNh.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.aNj.prototype={
$1(d){var x=this.a
return x.H(new B.aNg(x,d))},
$S:46}
B.aNg.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.aNk.prototype={
$1(d){var x=this.a
return x.H(new B.aNf(x,d))},
$S:46}
B.aNf.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.aNl.prototype={
$1(d){var x=this.a
x.H(new B.aNe(x,d))},
$S:217}
B.aNe.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.aNm.prototype={
$1(d){var x
if(!this.a)if(this.b)x=J.e(d.h(0,"role"),"student")||J.e(d.h(0,"role"),"user")
else x=!1
else x=!0
return x},
$S:61}
B.aMY.prototype={
$1(d){return(this.a&1)===0?D.J:D.p.eT(0.02)},
$S:3}
B.aMX.prototype={
$0(){return this.a.x.$1(this.b)},
$S:0};(function installTearOffs(){var x=a._instance_1u
x(B.LH.prototype,"gay5","ay6",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.qh,A.S)
x(B.LH,A.V)
w(A.eb,[B.aNn,B.aN1,B.aN2,B.aNd,B.aN6,B.aN7,B.aN8,B.aN9,B.aNi,B.aNj,B.aNk,B.aNl,B.aNm,B.aMY])
w(A.fu,[B.aMZ,B.aN_,B.aN0,B.aN5,B.aN4,B.aNa,B.aNb,B.aNh,B.aNg,B.aNf,B.aNe,B.aMX])
w(A.io,[B.aN3,B.aNc])
x(B.a7r,E.Dx)})()
A.fV(b.typeUniverse,JSON.parse('{"qh":{"S":[],"h":[]},"LH":{"V":["qh"]},"a7r":{"aR":[],"ab":[]}}'))
var y=(function rtii(){var x=A.a1
return{y:x("hI"),r:x("dp<n>"),F:x("q<l1>"),I:x("q<dp<n>>"),s:x("q<n>"),p:x("q<h>"),j:x("Y<@>"),P:x("i<n,@>"),f:x("i<@,@>"),v:x("a9<n,dp<n>>"),N:x("n"),q:x("n6"),b:x("aM<t?>"),z:x("@"),X:x("Q?"),H:x("~")}})();(function constants(){var x=a.makeConstList
C.a_U=new A.bq(61868,"MaterialIcons",!1)
C.a0v=new A.c1(C.a_U,null,null,null,null)
C.a14=new A.dD(null,null,null,"Role",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
C.a16=new A.dD(null,null,null,"Filter Status",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
C.a18=new A.dD(null,null,null,"Status",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
C.a1d=new A.dD(null,null,null,"Filter Role",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
C.aVP=new A.aE("Name",null,null,null,null,null,null,null,null,null,null)
C.Yx=new E.iP(C.aVP)
C.aVy=new A.aE("Email",null,null,null,null,null,null,null,null,null,null)
C.Yw=new E.iP(C.aVy)
C.RY=new A.aE("Role",null,null,null,null,null,null,null,null,null,null)
C.YA=new E.iP(C.RY)
C.a2R=x([C.Yx,C.Yw,C.YA,H.vM,H.vL],A.a1("q<iP>"))
C.A3=x(["user","student","admin","super-admin"],y.s)
C.aVt=new A.aE("All Roles",null,null,null,null,null,null,null,null,null,null)
C.Z7=new F.dp("all",C.aVt,D.bo,null,y.r)
C.aVJ=new A.aE("student",null,null,null,null,null,null,null,null,null,null)
C.YZ=new F.dp("student",C.aVJ,D.bo,null,y.r)
C.aWm=new A.aE("user",null,null,null,null,null,null,null,null,null,null)
C.Z9=new F.dp("user",C.aWm,D.bo,null,y.r)
C.aWq=new A.aE("admin",null,null,null,null,null,null,null,null,null,null)
C.Z_=new F.dp("admin",C.aWq,D.bo,null,y.r)
C.aVR=new A.aE("super-admin",null,null,null,null,null,null,null,null,null,null)
C.Z8=new F.dp("super-admin",C.aVR,D.bo,null,y.r)
C.a8y=x([C.Z7,C.YZ,C.Z9,C.Z_,C.Z8],y.I)
C.aVV=new A.aE("All Status",null,null,null,null,null,null,null,null,null,null)
C.Z2=new F.dp("all",C.aVV,D.bo,null,y.r)
C.aVG=new A.aE("active",null,null,null,null,null,null,null,null,null,null)
C.Z4=new F.dp("active",C.aVG,D.bo,null,y.r)
C.aVK=new A.aE("inactive",null,null,null,null,null,null,null,null,null,null)
C.Z3=new F.dp("inactive",C.aVK,D.bo,null,y.r)
C.aWx=new A.aE("pending",null,null,null,null,null,null,null,null,null,null)
C.Z1=new F.dp("pending",C.aWx,D.bo,null,y.r)
C.abK=x([C.Z2,C.Z4,C.Z3,C.Z1],y.I)
C.aVB=new A.aE("Status updated",null,null,null,null,null,null,null,null,null,null)
C.aQ9=new A.hA(C.aVB,null,null,null,null,null,null,null,null,null,null,null,null,D.b4,!1,null,null,null,D.q,null)
C.aWf=new A.aE("Role updated",null,null,null,null,null,null,null,null,null,null)
C.aQb=new A.hA(C.aWf,null,null,null,null,null,null,null,null,null,null,null,null,D.b4,!1,null,null,null,D.q,null)})()};
(a=>{a["W8NIk6Z/9UgCqJaWD64FqKzT1uU="]=a.current})($__dart_deferred_initializers__);