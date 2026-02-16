((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,K,I,L,M,N,F,B={
bnp(){return new B.qG(null)},
qG:function qG(d){this.a=d},
MQ:function MQ(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=""
_.x=_.w="all"
_.y=10
_.c=_.a=null},
aQN:function aQN(d){this.a=d},
aQo:function aQo(d){this.a=d},
aQp:function aQp(d,e){this.a=d
this.b=e},
aQq:function aQq(d){this.a=d},
aQr:function aQr(){},
aQs:function aQs(d){this.a=d},
aQt:function aQt(){},
aQD:function aQD(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aQC:function aQC(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aQw:function aQw(){},
aQx:function aQx(d,e){this.a=d
this.b=e},
aQv:function aQv(d,e){this.a=d
this.b=e},
aQy:function aQy(){},
aQz:function aQz(d,e){this.a=d
this.b=e},
aQu:function aQu(d,e){this.a=d
this.b=e},
aQA:function aQA(d){this.a=d},
aQB:function aQB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aQI:function aQI(d){this.a=d},
aQH:function aQH(d,e){this.a=d
this.b=e},
aQJ:function aQJ(d){this.a=d},
aQG:function aQG(d,e){this.a=d
this.b=e},
aQK:function aQK(d){this.a=d},
aQF:function aQF(d,e){this.a=d
this.b=e},
aQL:function aQL(d){this.a=d},
aQE:function aQE(d,e){this.a=d
this.b=e},
aQM:function aQM(d,e){this.a=d
this.b=e},
a8Y:function a8Y(d,e,f,g){var _=this
_.r=d
_.w=e
_.x=f
_.K$=0
_.M$=g
_.aj$=_.an$=0},
aQn:function aQn(d){this.a=d},
aQm:function aQm(d,e){this.a=d
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
B.qG.prototype={
af(){return new B.MQ(A.h9(),[])}}
B.MQ.prototype={
aq(){var x,w,v=this
v.aR()
x=v.c
x.toString
x=A.cq(x,!1,y.y).c
w=x==null?null:x.h(0,"role")
x=J.is(w)
if(!x.k(w,"admin")&&!x.k(w,"super-admin")){$.af.k4$.push(new B.aQN(v))
return}v.vn()},
vn(){var x=0,w=A.x(y.H),v=1,u=[],t=[],s=this,r,q,p,o
var $async$vn=A.t(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:s.H(new B.aQo(s))
v=3
x=6
return A.q(s.d.a1("/auth/users"),$async$vn)
case 6:r=e
if(y.j.b(r))s.H(new B.aQp(s,r))
t.push(5)
x=4
break
case 3:v=2
o=u.pop()
q=A.am(o)
s.c.a9(y.q).f.eJ(A.ia(null,null,null,null,null,D.q,null,A.a5("Failed to load users: "+A.n(q),null,null,null,null,null,null,null,null),null,D.b4,null,null,null,null,null,null,null,null,null,null))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
s.H(new B.aQq(s))
x=t.pop()
break
case 5:return A.v(null,w)
case 1:return A.u(u.at(-1),w)}})
return A.w($async$vn,w)},
FP(d,e){return this.aCz(d,e)},
aCz(d,e){var x=0,w=A.x(y.H),v=1,u=[],t=this,s,r,q
var $async$FP=A.t(function(f,g){if(f===1){u.push(g)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.q(t.d.pn("/auth/admin/role",A.U(["email",d,"role",e],y.N,y.z)),$async$FP)
case 6:t.vn()
t.c.a9(y.q).f.eJ(C.aQP)
v=1
x=5
break
case 3:v=2
q=u.pop()
s=A.am(q)
t.c.a9(y.q).f.eJ(A.ia(null,null,null,null,null,D.q,null,A.a5("Failed to update role: "+A.n(s),null,null,null,null,null,null,null,null),null,D.b4,null,null,null,null,null,null,null,null,null,null))
x=5
break
case 2:x=1
break
case 5:return A.v(null,w)
case 1:return A.u(u.at(-1),w)}})
return A.w($async$FP,w)},
FT(d,e){return this.aCR(d,e)},
aCR(d,e){var x=0,w=A.x(y.H),v=1,u=[],t=this,s,r,q
var $async$FT=A.t(function(f,g){if(f===1){u.push(g)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.q(t.d.pn("/auth/admin/status",A.U(["email",d,"status",e],y.N,y.z)),$async$FT)
case 6:t.vn()
t.c.a9(y.q).f.eJ(C.aQN)
v=1
x=5
break
case 3:v=2
q=u.pop()
s=A.am(q)
t.c.a9(y.q).f.eJ(A.ia(null,null,null,null,null,D.q,null,A.a5("Failed to update status: "+A.n(s),null,null,null,null,null,null,null,null),null,D.b4,null,null,null,null,null,null,null,null,null,null))
x=5
break
case 2:x=1
break
case 5:return A.v(null,w)
case 1:return A.u(u.at(-1),w)}})
return A.w($async$FT,w)},
aoI(){var x,w,v=J.b14(this.e,y.f)
v=A.qC(v,new B.aQr(),v.$ti.i("A.E"),y.P)
x=A.o(v).i("aW<A.E>")
w=A.a_(new A.aW(v,new B.aQs(this),x),x.i("A.E"))
D.b.iq(w,new B.aQt())
return w},
aAP(d){var x,w,v,u,t,s=null,r="role",q={},p=this.c
p.toString
x=A.cq(p,!1,y.y).c
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
A.hO(s,s,!0,s,new B.aQD(q,this,d,w,v),p,s,!0,y.z)},
I(d){var x,w,v,u,t,s,r,q,p=this,o=null,n="super-admin",m=A.cq(d,!0,y.y).c,l=m==null?o:m.h(0,"role")
m=J.is(l)
if(!m.k(l,"admin")&&!m.k(l,n))return G.Qg
x=m.k(l,n)
w=m.k(l,"admin")
v=p.aoI()
m=M.tI(o,o,o,new B.aQI(p),!1,"members")
u=p.f
t=A.ex(16)
s=A.K(d).ch.eV(0.25)
r=y.N
q=y.p
return A.eV(m,L.qz(A.fe(A.nF(A.bD(A.c([new A.aH(D.pd,A.ci(A.c([A.cf(E.V3(C.a1N,p.w,C.a98,new B.aQJ(p),r),1),D.k6,A.cf(E.V3(C.a1G,p.x,C.ack,new B.aQK(p),r),1)],q),D.w,D.r,D.B,0,o,o),o),new A.oU(A.K(d).a5u(H.vb,A.K(d).ch.eV(0.15)),E.b9c(C.a3q,A.a5("Members ("+v.length+")",o,o,o,o,o,o,o,o),new B.aQL(p),p.y,!0,new B.a8Y(v,new B.aQM(x,w),p.gaAO(),$.ae())),o)],q),D.w,D.r,D.B,0,D.H),o,0,o,!0,new A.d0(t,new A.aG(s,1,D.A,-1))),o,D.y,D.ci,o,o,o,!1,D.aa),u),D.dw)}}
B.a8Y.prototype={
am6(d){switch(d){case"super-admin":return G.LZ.eV(0.12)
case"admin":return G.LW.eV(0.12)
case"student":return G.LX.eV(0.12)
default:return D.rv.eV(0.16)}},
am7(d){switch(d){case"active":return D.M_.eV(0.14)
case"inactive":return D.n2.eV(0.14)
default:return N.LY.eV(0.16)}},
ml(d){var x,w,v,u,t,s,r=this,q=null,p=r.r
if(d>=p.length)return q
x=p[d]
p=x.h(0,"role")
w=J.aE(p==null?"":p)
p=x.h(0,"status")
v=J.aE(p==null?"":p)
p=x.h(0,"nameUser")
p=E.nM(A.a5(J.aE(p==null?"":p),q,q,q,q,q,q,q,q))
u=x.h(0,"email")
u=E.nM(A.a5(J.aE(u==null?"":u),q,q,q,q,q,q,q,q))
t=E.nM(new A.df(D.hc,q,q,I.ai9(r.am6(w),A.a5(w,q,q,q,q,q,q,q,q),D.nP),q))
s=E.nM(new A.df(D.hc,q,q,I.ai9(r.am7(v),A.a5(v,q,q,q,q,q,q,q,q),D.nP),q))
return E.aja(A.c([p,u,t,s,E.nM(r.w.$1(x)?A.ca(q,q,C.a13,q,q,new B.aQm(r,x),q,q,q):D.aT)],y.F),new A.aN(new B.aQn(d),y.b),d)},
ga8q(){return!1},
gaaJ(){return this.r.length},
gUb(){return 0}}
var z=a.updateTypes(["dt<m>(m)","~(i<m,@>)"])
B.aQN.prototype={
$1(d){var x,w=this.a.c
w.toString
x=y.X
return A.aT(w,!1).pr("/",x,x)},
$S:6}
B.aQo.prototype={
$0(){return this.a.f=!0},
$S:0}
B.aQp.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.aQq.prototype={
$0(){return this.a.f=!1},
$S:0}
B.aQr.prototype={
$1(d){return A.eE(d,y.N,y.z)},
$S:185}
B.aQs.prototype={
$1(d){var x,w,v,u,t,s,r,q=this.a,p=D.c.cW(q.r).toLowerCase(),o=d.h(0,"nameUser")
o=J.aE(o==null?"":o)
x=d.h(0,"email")
x=J.aE(x==null?"":x)
w=d.h(0,"role")
v=J.aE(w==null?"":w)
w=d.h(0,"status")
u=J.aE(w==null?"":w)
t=p.length===0||D.c.m(o.toLowerCase(),p)||D.c.m(x.toLowerCase(),p)
o=q.w
s=o==="all"||v===o
q=q.x
r=q==="all"||u===q
return t&&s&&r},
$S:64}
B.aQt.prototype={
$2(d,e){var x,w,v,u,t=d.h(0,"role"),s=J.aE(t==null?"":t)
t=e.h(0,"role")
x=J.aE(t==null?"":t)
w=D.b.e9(C.Ak,s)
v=D.b.e9(C.Ak,x)
if(w!==v)return D.f.co(v,w)
t=d.h(0,"email")
t=J.aE(t==null?"":t)
u=e.h(0,"email")
return D.c.co(t,J.aE(u==null?"":u))},
$S:678}
B.aQD.prototype={
$1(d){var x=this
return new A.n0(new B.aQC(x.a,x.b,x.c,x.d,x.e,d),null)},
$S:109}
B.aQC.prototype={
$2(d,e){var x,w=this,v=null,u=w.c,t=A.a5("Edit User: "+A.n(u.h(0,"nameUser")),v,v,v,v,v,v,v,v),s=y.p,r=A.c([],s),q=w.d,p=w.a,o=p.a
if(q){x=y.v
x=A.a_(new A.a9(A.c(["student","user","admin","super-admin"],y.s),new B.aQw(),x),x.i("aa.E"))
r.push(E.V3(C.a1E,o,x,new B.aQx(p,e),y.N))}else r.push(A.fq(!1,v,v,v,!1,v,!0,v,v,v,v,v,!1,v,v,v,v,A.a5(o,v,v,v,v,v,v,v,v),v,C.Sf,v,v,v))
r.push(D.cM)
if(!q)if(w.e)q=J.e(u.h(0,"role"),"student")||J.e(u.h(0,"role"),"user")
else q=!1
else q=!0
o=p.b
if(q){q=y.v
q=A.a_(new A.a9(A.c(["active","inactive","pending"],y.s),new B.aQy(),q),q.i("aa.E"))
r.push(E.V3(C.a1I,o,q,new B.aQz(p,e),y.N))}else r.push(A.fq(!1,v,v,v,!1,v,!0,v,v,v,v,v,!1,v,v,v,v,A.a5(o,v,v,v,v,v,v,v,v),v,H.Se,v,v,v))
r=A.bD(r,D.w,D.r,D.ak,0,D.H)
q=w.f
return A.ka(A.c([A.db(K.nG,new B.aQA(q),v),A.db(D.Sa,new B.aQB(p,w.b,q,u),v)],s),r,t)},
$S:679}
B.aQw.prototype={
$1(d){var x=null
return F.pV(A.a5(d,x,x,x,x,x,x,x,x),d,y.N)},
$S:z+0}
B.aQx.prototype={
$1(d){this.b.$1(new B.aQv(this.a,d))},
$S:51}
B.aQv.prototype={
$0(){var x=this.a
x.a=this.b
x.d=!0},
$S:0}
B.aQy.prototype={
$1(d){var x=null
return F.pV(A.a5(d,x,x,x,x,x,x,x,x),d,y.N)},
$S:z+0}
B.aQz.prototype={
$1(d){this.b.$1(new B.aQu(this.a,d))},
$S:51}
B.aQu.prototype={
$0(){var x=this.a
x.b=this.b
x.c=!0},
$S:0}
B.aQA.prototype={
$0(){A.aT(this.a,!1).d7(null)
return null},
$S:0}
B.aQB.prototype={
$0(){var x=0,w=A.x(y.H),v=this,u
var $async$$0=A.t(function(d,e){if(d===1)return A.u(e,w)
for(;;)switch(x){case 0:A.aT(v.c,!1).d7(null)
u=v.a
x=u.d?2:3
break
case 2:x=4
return A.q(v.b.FP(v.d.h(0,"email"),u.a),$async$$0)
case 4:case 3:x=u.c?5:6
break
case 5:x=7
return A.q(v.b.FT(v.d.h(0,"email"),u.b),$async$$0)
case 7:case 6:return A.v(null,w)}})
return A.w($async$$0,w)},
$S:8}
B.aQI.prototype={
$1(d){var x=this.a
return x.H(new B.aQH(x,d))},
$S:21}
B.aQH.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.aQJ.prototype={
$1(d){var x=this.a
return x.H(new B.aQG(x,d))},
$S:51}
B.aQG.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.aQK.prototype={
$1(d){var x=this.a
return x.H(new B.aQF(x,d))},
$S:51}
B.aQF.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.aQL.prototype={
$1(d){var x=this.a
x.H(new B.aQE(x,d))},
$S:187}
B.aQE.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.aQM.prototype={
$1(d){var x
if(!this.a)if(this.b)x=J.e(d.h(0,"role"),"student")||J.e(d.h(0,"role"),"user")
else x=!1
else x=!0
return x},
$S:64}
B.aQn.prototype={
$1(d){return(this.a&1)===0?D.J:D.p.eV(0.02)},
$S:3}
B.aQm.prototype={
$0(){return this.a.x.$1(this.b)},
$S:0};(function installTearOffs(){var x=a._instance_1u
x(B.MQ.prototype,"gaAO","aAP",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.qG,A.S)
x(B.MQ,A.W)
w(A.er,[B.aQN,B.aQr,B.aQs,B.aQD,B.aQw,B.aQx,B.aQy,B.aQz,B.aQI,B.aQJ,B.aQK,B.aQL,B.aQM,B.aQn])
w(A.fA,[B.aQo,B.aQp,B.aQq,B.aQv,B.aQu,B.aQA,B.aQB,B.aQH,B.aQG,B.aQF,B.aQE,B.aQm])
w(A.iv,[B.aQt,B.aQC])
x(B.a8Y,E.En)})()
A.h2(b.typeUniverse,JSON.parse('{"qG":{"S":[],"h":[]},"MQ":{"W":["qG"]},"a8Y":{"aS":[],"ab":[]}}'))
var y=(function rtii(){var x=A.a1
return{y:x("hR"),r:x("dt<m>"),F:x("r<lh>"),I:x("r<dt<m>>"),s:x("r<m>"),p:x("r<h>"),j:x("T<@>"),P:x("i<m,@>"),f:x("i<@,@>"),v:x("a9<m,dt<m>>"),N:x("m"),q:x("np"),b:x("aN<y?>"),z:x("@"),X:x("O?"),H:x("~")}})();(function constants(){var x=a.makeConstList
C.a0r=new A.bp(61868,"MaterialIcons",!1)
C.a13=new A.bZ(C.a0r,null,null,null,null)
C.a1E=new A.dI(null,null,null,"Role",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
C.a1G=new A.dI(null,null,null,"Filter Status",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
C.a1I=new A.dI(null,null,null,"Status",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
C.a1N=new A.dI(null,null,null,"Filter Role",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
C.aWr=new A.aI("Name",null,null,null,null,null,null,null,null,null,null)
C.YX=new E.iX(C.aWr)
C.aWa=new A.aI("Email",null,null,null,null,null,null,null,null,null,null)
C.YW=new E.iX(C.aWa)
C.Sf=new A.aI("Role",null,null,null,null,null,null,null,null,null,null)
C.Z_=new E.iX(C.Sf)
C.a3q=x([C.YX,C.YW,C.Z_,H.vY,H.vX],A.a1("r<iX>"))
C.Ak=x(["user","student","admin","super-admin"],y.s)
C.aW5=new A.aI("All Roles",null,null,null,null,null,null,null,null,null,null)
C.Zx=new F.dt("all",C.aW5,D.bo,null,y.r)
C.aWl=new A.aI("student",null,null,null,null,null,null,null,null,null,null)
C.Zo=new F.dt("student",C.aWl,D.bo,null,y.r)
C.aWZ=new A.aI("user",null,null,null,null,null,null,null,null,null,null)
C.Zz=new F.dt("user",C.aWZ,D.bo,null,y.r)
C.aX2=new A.aI("admin",null,null,null,null,null,null,null,null,null,null)
C.Zp=new F.dt("admin",C.aX2,D.bo,null,y.r)
C.aWt=new A.aI("super-admin",null,null,null,null,null,null,null,null,null,null)
C.Zy=new F.dt("super-admin",C.aWt,D.bo,null,y.r)
C.a98=x([C.Zx,C.Zo,C.Zz,C.Zp,C.Zy],y.I)
C.aWx=new A.aI("All Status",null,null,null,null,null,null,null,null,null,null)
C.Zs=new F.dt("all",C.aWx,D.bo,null,y.r)
C.aWi=new A.aI("active",null,null,null,null,null,null,null,null,null,null)
C.Zu=new F.dt("active",C.aWi,D.bo,null,y.r)
C.aWm=new A.aI("inactive",null,null,null,null,null,null,null,null,null,null)
C.Zt=new F.dt("inactive",C.aWm,D.bo,null,y.r)
C.aX9=new A.aI("pending",null,null,null,null,null,null,null,null,null,null)
C.Zr=new F.dt("pending",C.aX9,D.bo,null,y.r)
C.ack=x([C.Zs,C.Zu,C.Zt,C.Zr],y.I)
C.aWd=new A.aI("Status updated",null,null,null,null,null,null,null,null,null,null)
C.aQN=new A.hI(C.aWd,null,null,null,null,null,null,null,null,null,null,null,null,D.b4,!1,null,null,null,D.q,null)
C.aWS=new A.aI("Role updated",null,null,null,null,null,null,null,null,null,null)
C.aQP=new A.hI(C.aWS,null,null,null,null,null,null,null,null,null,null,null,null,D.b4,!1,null,null,null,D.q,null)})()};
(a=>{a["pklBZrU7FPCFIqzJqLtcRp9RG6o="]=a.current})($__dart_deferred_initializers__);