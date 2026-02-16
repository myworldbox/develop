((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,K,I,L,M,N,F,B={
bnq(){return new B.qG(null)},
qG:function qG(d){this.a=d},
MT:function MT(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=""
_.x=_.w="all"
_.y=10
_.c=_.a=null},
aQL:function aQL(d){this.a=d},
aQm:function aQm(d){this.a=d},
aQn:function aQn(d,e){this.a=d
this.b=e},
aQo:function aQo(d){this.a=d},
aQp:function aQp(){},
aQq:function aQq(d){this.a=d},
aQr:function aQr(){},
aQB:function aQB(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aQA:function aQA(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aQu:function aQu(){},
aQv:function aQv(d,e){this.a=d
this.b=e},
aQt:function aQt(d,e){this.a=d
this.b=e},
aQw:function aQw(){},
aQx:function aQx(d,e){this.a=d
this.b=e},
aQs:function aQs(d,e){this.a=d
this.b=e},
aQy:function aQy(d){this.a=d},
aQz:function aQz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aQG:function aQG(d){this.a=d},
aQF:function aQF(d,e){this.a=d
this.b=e},
aQH:function aQH(d){this.a=d},
aQE:function aQE(d,e){this.a=d
this.b=e},
aQI:function aQI(d){this.a=d},
aQD:function aQD(d,e){this.a=d
this.b=e},
aQJ:function aQJ(d){this.a=d},
aQC:function aQC(d,e){this.a=d
this.b=e},
aQK:function aQK(d,e){this.a=d
this.b=e},
a9_:function a9_(d,e,f,g){var _=this
_.r=d
_.w=e
_.x=f
_.K$=0
_.M$=g
_.aj$=_.an$=0},
aQl:function aQl(d){this.a=d},
aQk:function aQk(d,e){this.a=d
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
af(){return new B.MT(A.ha(),[])}}
B.MT.prototype={
aq(){var x,w,v=this
v.aR()
x=v.c
x.toString
x=A.cz(x,!1,y.y).c
w=x==null?null:x.h(0,"role")
x=J.iq(w)
if(!x.k(w,"admin")&&!x.k(w,"super-admin")){$.af.k4$.push(new B.aQL(v))
return}v.vm()},
vm(){var x=0,w=A.x(y.H),v=1,u=[],t=[],s=this,r,q,p,o
var $async$vm=A.t(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:s.H(new B.aQm(s))
v=3
x=6
return A.q(s.d.a2("/auth/users"),$async$vm)
case 6:r=e
if(y.j.b(r))s.H(new B.aQn(s,r))
t.push(5)
x=4
break
case 3:v=2
o=u.pop()
q=A.am(o)
s.c.aa(y.q).f.fd(A.jU(null,null,null,null,null,D.r,null,A.a5("Failed to load users: "+A.n(q),null,null,null,null,null,null,null,null),null,D.bp,null,null,null,null,null,null,null,null,null,null))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
s.H(new B.aQo(s))
x=t.pop()
break
case 5:return A.v(null,w)
case 1:return A.u(u.at(-1),w)}})
return A.w($async$vm,w)},
FP(d,e){return this.aCt(d,e)},
aCt(d,e){var x=0,w=A.x(y.H),v=1,u=[],t=this,s,r,q
var $async$FP=A.t(function(f,g){if(f===1){u.push(g)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.q(t.d.pn("/auth/admin/role",A.V(["email",d,"role",e],y.N,y.z)),$async$FP)
case 6:t.vm()
t.c.aa(y.q).f.fd(C.aQS)
v=1
x=5
break
case 3:v=2
q=u.pop()
s=A.am(q)
t.c.aa(y.q).f.fd(A.jU(null,null,null,null,null,D.r,null,A.a5("Failed to update role: "+A.n(s),null,null,null,null,null,null,null,null),null,D.bp,null,null,null,null,null,null,null,null,null,null))
x=5
break
case 2:x=1
break
case 5:return A.v(null,w)
case 1:return A.u(u.at(-1),w)}})
return A.w($async$FP,w)},
FT(d,e){return this.aCL(d,e)},
aCL(d,e){var x=0,w=A.x(y.H),v=1,u=[],t=this,s,r,q
var $async$FT=A.t(function(f,g){if(f===1){u.push(g)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.q(t.d.pn("/auth/admin/status",A.V(["email",d,"status",e],y.N,y.z)),$async$FT)
case 6:t.vm()
t.c.aa(y.q).f.fd(C.aQQ)
v=1
x=5
break
case 3:v=2
q=u.pop()
s=A.am(q)
t.c.aa(y.q).f.fd(A.jU(null,null,null,null,null,D.r,null,A.a5("Failed to update status: "+A.n(s),null,null,null,null,null,null,null,null),null,D.bp,null,null,null,null,null,null,null,null,null,null))
x=5
break
case 2:x=1
break
case 5:return A.v(null,w)
case 1:return A.u(u.at(-1),w)}})
return A.w($async$FT,w)},
aoD(){var x,w,v=J.b14(this.e,y.f)
v=A.qC(v,new B.aQp(),v.$ti.i("A.E"),y.P)
x=A.o(v).i("aW<A.E>")
w=A.a_(new A.aW(v,new B.aQq(this),x),x.i("A.E"))
D.b.ip(w,new B.aQr())
return w},
aAJ(d){var x,w,v,u,t,s=null,r="role",q={},p=this.c
p.toString
x=A.cz(p,!1,y.y).c
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
A.hP(s,s,!0,s,new B.aQB(q,this,d,w,v),p,s,!0,y.z)},
I(d){var x,w,v,u,t,s,r,q,p=this,o=null,n="super-admin",m=A.cz(d,!0,y.y).c,l=m==null?o:m.h(0,"role")
m=J.iq(l)
if(!m.k(l,"admin")&&!m.k(l,n))return G.Qf
x=m.k(l,n)
w=m.k(l,"admin")
v=p.aoD()
m=M.tH(o,o,o,new B.aQG(p),!1,"members")
u=p.f
t=A.ex(16)
s=A.K(d).ch.eV(0.25)
r=y.N
q=y.p
return A.eV(m,L.qz(A.fe(A.nG(A.bD(A.c([new A.aE(D.pd,A.ci(A.c([A.cf(E.V7(C.a1N,p.w,C.a98,new B.aQH(p),r),1),D.k6,A.cf(E.V7(C.a1G,p.x,C.ack,new B.aQI(p),r),1)],q),D.w,D.q,D.B,0,o,o),o),new A.oV(A.K(d).a5q(H.vb,A.K(d).ch.eV(0.15)),E.b9d(C.a3q,A.a5("Members ("+v.length+")",o,o,o,o,o,o,o,o),new B.aQJ(p),p.y,!0,new B.a9_(v,new B.aQK(x,w),p.gaAI(),$.ae())),o)],q),D.w,D.q,D.B,0,D.H),o,0,o,!0,new A.cZ(t,new A.aG(s,1,D.A,-1))),o,D.y,D.ci,o,o,o,!1,D.aa),u),D.dw)}}
B.a9_.prototype={
am1(d){switch(d){case"super-admin":return G.LY.eV(0.12)
case"admin":return G.LV.eV(0.12)
case"student":return G.LW.eV(0.12)
default:return D.rv.eV(0.16)}},
am2(d){switch(d){case"active":return D.LZ.eV(0.14)
case"inactive":return D.n2.eV(0.14)
default:return N.LX.eV(0.16)}},
ml(d){var x,w,v,u,t,s,r=this,q=null,p=r.r
if(d>=p.length)return q
x=p[d]
p=x.h(0,"role")
w=J.aP(p==null?"":p)
p=x.h(0,"status")
v=J.aP(p==null?"":p)
p=x.h(0,"nameUser")
p=E.nN(A.a5(J.aP(p==null?"":p),q,q,q,q,q,q,q,q))
u=x.h(0,"email")
u=E.nN(A.a5(J.aP(u==null?"":u),q,q,q,q,q,q,q,q))
t=E.nN(new A.df(D.hc,q,q,I.aib(r.am1(w),A.a5(w,q,q,q,q,q,q,q,q),D.nP),q))
s=E.nN(new A.df(D.hc,q,q,I.aib(r.am2(v),A.a5(v,q,q,q,q,q,q,q,q),D.nP),q))
return E.ajc(A.c([p,u,t,s,E.nN(r.w.$1(x)?A.ca(q,q,C.a13,q,q,new B.aQk(r,x),q,q,q):D.aT)],y.F),new A.aM(new B.aQl(d),y.b),d)},
ga8m(){return!1},
gaaF(){return this.r.length},
gUa(){return 0}}
var z=a.updateTypes(["dt<m>(m)","~(i<m,@>)"])
B.aQL.prototype={
$1(d){var x,w=this.a.c
w.toString
x=y.X
return A.aT(w,!1).pr("/",x,x)},
$S:6}
B.aQm.prototype={
$0(){return this.a.f=!0},
$S:0}
B.aQn.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.aQo.prototype={
$0(){return this.a.f=!1},
$S:0}
B.aQp.prototype={
$1(d){return A.eE(d,y.N,y.z)},
$S:246}
B.aQq.prototype={
$1(d){var x,w,v,u,t,s,r,q=this.a,p=D.c.cW(q.r).toLowerCase(),o=d.h(0,"nameUser")
o=J.aP(o==null?"":o)
x=d.h(0,"email")
x=J.aP(x==null?"":x)
w=d.h(0,"role")
v=J.aP(w==null?"":w)
w=d.h(0,"status")
u=J.aP(w==null?"":w)
t=p.length===0||D.c.m(o.toLowerCase(),p)||D.c.m(x.toLowerCase(),p)
o=q.w
s=o==="all"||v===o
q=q.x
r=q==="all"||u===q
return t&&s&&r},
$S:65}
B.aQr.prototype={
$2(d,e){var x,w,v,u,t=d.h(0,"role"),s=J.aP(t==null?"":t)
t=e.h(0,"role")
x=J.aP(t==null?"":t)
w=D.b.e9(C.Aj,s)
v=D.b.e9(C.Aj,x)
if(w!==v)return D.f.co(v,w)
t=d.h(0,"email")
t=J.aP(t==null?"":t)
u=e.h(0,"email")
return D.c.co(t,J.aP(u==null?"":u))},
$S:678}
B.aQB.prototype={
$1(d){var x=this
return new A.n1(new B.aQA(x.a,x.b,x.c,x.d,x.e,d),null)},
$S:109}
B.aQA.prototype={
$2(d,e){var x,w=this,v=null,u=w.c,t=A.a5("Edit User: "+A.n(u.h(0,"nameUser")),v,v,v,v,v,v,v,v),s=y.p,r=A.c([],s),q=w.d,p=w.a,o=p.a
if(q){x=y.v
x=A.a_(new A.a7(A.c(["student","user","admin","super-admin"],y.s),new B.aQu(),x),x.i("aa.E"))
r.push(E.V7(C.a1E,o,x,new B.aQv(p,e),y.N))}else r.push(A.fq(!1,v,v,v,!1,v,!0,v,v,v,v,v,!1,v,v,v,v,A.a5(o,v,v,v,v,v,v,v,v),v,C.Se,v,v,v))
r.push(D.cM)
if(!q)if(w.e)q=J.e(u.h(0,"role"),"student")||J.e(u.h(0,"role"),"user")
else q=!1
else q=!0
o=p.b
if(q){q=y.v
q=A.a_(new A.a7(A.c(["active","inactive","pending"],y.s),new B.aQw(),q),q.i("aa.E"))
r.push(E.V7(C.a1I,o,q,new B.aQx(p,e),y.N))}else r.push(A.fq(!1,v,v,v,!1,v,!0,v,v,v,v,v,!1,v,v,v,v,A.a5(o,v,v,v,v,v,v,v,v),v,H.Sd,v,v,v))
r=A.bD(r,D.w,D.q,D.ak,0,D.H)
q=w.f
return A.k9(A.c([A.da(K.nG,new B.aQy(q),v),A.da(D.S9,new B.aQz(p,w.b,q,u),v)],s),r,t)},
$S:679}
B.aQu.prototype={
$1(d){var x=null
return F.pV(A.a5(d,x,x,x,x,x,x,x,x),d,y.N)},
$S:z+0}
B.aQv.prototype={
$1(d){this.b.$1(new B.aQt(this.a,d))},
$S:51}
B.aQt.prototype={
$0(){var x=this.a
x.a=this.b
x.d=!0},
$S:0}
B.aQw.prototype={
$1(d){var x=null
return F.pV(A.a5(d,x,x,x,x,x,x,x,x),d,y.N)},
$S:z+0}
B.aQx.prototype={
$1(d){this.b.$1(new B.aQs(this.a,d))},
$S:51}
B.aQs.prototype={
$0(){var x=this.a
x.b=this.b
x.c=!0},
$S:0}
B.aQy.prototype={
$0(){A.aT(this.a,!1).d7(null)
return null},
$S:0}
B.aQz.prototype={
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
B.aQG.prototype={
$1(d){var x=this.a
return x.H(new B.aQF(x,d))},
$S:21}
B.aQF.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.aQH.prototype={
$1(d){var x=this.a
return x.H(new B.aQE(x,d))},
$S:51}
B.aQE.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.aQI.prototype={
$1(d){var x=this.a
return x.H(new B.aQD(x,d))},
$S:51}
B.aQD.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.aQJ.prototype={
$1(d){var x=this.a
x.H(new B.aQC(x,d))},
$S:242}
B.aQC.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.aQK.prototype={
$1(d){var x
if(!this.a)if(this.b)x=J.e(d.h(0,"role"),"student")||J.e(d.h(0,"role"),"user")
else x=!1
else x=!0
return x},
$S:65}
B.aQl.prototype={
$1(d){return(this.a&1)===0?D.J:D.p.eV(0.02)},
$S:3}
B.aQk.prototype={
$0(){return this.a.x.$1(this.b)},
$S:0};(function installTearOffs(){var x=a._instance_1u
x(B.MT.prototype,"gaAI","aAJ",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.qG,A.S)
x(B.MT,A.W)
w(A.er,[B.aQL,B.aQp,B.aQq,B.aQB,B.aQu,B.aQv,B.aQw,B.aQx,B.aQG,B.aQH,B.aQI,B.aQJ,B.aQK,B.aQl])
w(A.fB,[B.aQm,B.aQn,B.aQo,B.aQt,B.aQs,B.aQy,B.aQz,B.aQF,B.aQE,B.aQD,B.aQC,B.aQk])
w(A.it,[B.aQr,B.aQA])
x(B.a9_,E.Eq)})()
A.h3(b.typeUniverse,JSON.parse('{"qG":{"S":[],"h":[]},"MT":{"W":["qG"]},"a9_":{"aS":[],"ab":[]}}'))
var y=(function rtii(){var x=A.a1
return{y:x("hS"),r:x("dt<m>"),F:x("r<lh>"),I:x("r<dt<m>>"),s:x("r<m>"),p:x("r<h>"),j:x("T<@>"),P:x("i<m,@>"),f:x("i<@,@>"),v:x("a7<m,dt<m>>"),N:x("m"),q:x("nq"),b:x("aM<y?>"),z:x("@"),X:x("O?"),H:x("~")}})();(function constants(){var x=a.makeConstList
C.a0r=new A.bp(61868,"MaterialIcons",!1)
C.a13=new A.bZ(C.a0r,null,null,null,null)
C.a1E=new A.dI(null,null,null,"Role",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
C.a1G=new A.dI(null,null,null,"Filter Status",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
C.a1I=new A.dI(null,null,null,"Status",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
C.a1N=new A.dI(null,null,null,"Filter Role",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
C.aWu=new A.aH("Name",null,null,null,null,null,null,null,null,null,null)
C.YX=new E.iV(C.aWu)
C.aWd=new A.aH("Email",null,null,null,null,null,null,null,null,null,null)
C.YW=new E.iV(C.aWd)
C.Se=new A.aH("Role",null,null,null,null,null,null,null,null,null,null)
C.Z_=new E.iV(C.Se)
C.a3q=x([C.YX,C.YW,C.Z_,H.vX,H.vW],A.a1("r<iV>"))
C.Aj=x(["user","student","admin","super-admin"],y.s)
C.aW8=new A.aH("All Roles",null,null,null,null,null,null,null,null,null,null)
C.Zx=new F.dt("all",C.aW8,D.bn,null,y.r)
C.aWo=new A.aH("student",null,null,null,null,null,null,null,null,null,null)
C.Zo=new F.dt("student",C.aWo,D.bn,null,y.r)
C.aX1=new A.aH("user",null,null,null,null,null,null,null,null,null,null)
C.Zz=new F.dt("user",C.aX1,D.bn,null,y.r)
C.aX5=new A.aH("admin",null,null,null,null,null,null,null,null,null,null)
C.Zp=new F.dt("admin",C.aX5,D.bn,null,y.r)
C.aWw=new A.aH("super-admin",null,null,null,null,null,null,null,null,null,null)
C.Zy=new F.dt("super-admin",C.aWw,D.bn,null,y.r)
C.a98=x([C.Zx,C.Zo,C.Zz,C.Zp,C.Zy],y.I)
C.aWA=new A.aH("All Status",null,null,null,null,null,null,null,null,null,null)
C.Zs=new F.dt("all",C.aWA,D.bn,null,y.r)
C.aWl=new A.aH("active",null,null,null,null,null,null,null,null,null,null)
C.Zu=new F.dt("active",C.aWl,D.bn,null,y.r)
C.aWp=new A.aH("inactive",null,null,null,null,null,null,null,null,null,null)
C.Zt=new F.dt("inactive",C.aWp,D.bn,null,y.r)
C.aXc=new A.aH("pending",null,null,null,null,null,null,null,null,null,null)
C.Zr=new F.dt("pending",C.aXc,D.bn,null,y.r)
C.ack=x([C.Zs,C.Zu,C.Zt,C.Zr],y.I)
C.aWg=new A.aH("Status updated",null,null,null,null,null,null,null,null,null,null)
C.aQQ=new A.hJ(C.aWg,null,null,null,null,null,null,null,null,null,null,null,null,D.bp,!1,null,null,null,D.r,null)
C.aWV=new A.aH("Role updated",null,null,null,null,null,null,null,null,null,null)
C.aQS=new A.hJ(C.aWV,null,null,null,null,null,null,null,null,null,null,null,null,D.bp,!1,null,null,null,D.r,null)})()};
(a=>{a["PCpx9vTeXd0zkwLqJw3EJW48dys="]=a.current})($__dart_deferred_initializers__);