((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,K,I,L,M,N,F,B={
boL(){return new B.qG(null)},
qG:function qG(d){this.a=d},
No:function No(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=""
_.x=_.w="all"
_.y=10
_.c=_.a=null},
aRF:function aRF(d){this.a=d},
aRg:function aRg(d){this.a=d},
aRh:function aRh(d,e){this.a=d
this.b=e},
aRi:function aRi(d){this.a=d},
aRj:function aRj(){},
aRk:function aRk(d){this.a=d},
aRl:function aRl(){},
aRv:function aRv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aRu:function aRu(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aRo:function aRo(){},
aRp:function aRp(d,e){this.a=d
this.b=e},
aRn:function aRn(d,e){this.a=d
this.b=e},
aRq:function aRq(){},
aRr:function aRr(d,e){this.a=d
this.b=e},
aRm:function aRm(d,e){this.a=d
this.b=e},
aRs:function aRs(d){this.a=d},
aRt:function aRt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aRA:function aRA(d){this.a=d},
aRz:function aRz(d,e){this.a=d
this.b=e},
aRB:function aRB(d){this.a=d},
aRy:function aRy(d,e){this.a=d
this.b=e},
aRC:function aRC(d){this.a=d},
aRx:function aRx(d,e){this.a=d
this.b=e},
aRD:function aRD(d){this.a=d},
aRw:function aRw(d,e){this.a=d
this.b=e},
aRE:function aRE(d,e){this.a=d
this.b=e},
a9D:function a9D(d,e,f,g){var _=this
_.r=d
_.w=e
_.x=f
_.G$=0
_.M$=g
_.ai$=_.am$=0},
aRf:function aRf(d){this.a=d},
aRe:function aRe(d,e){this.a=d
this.b=e}},C,H,E,G
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
H=c[32]
E=c[13]
G=c[31]
B.qG.prototype={
ac(){return new B.No(A.hd(),[])}}
B.No.prototype={
aq(){var x,w,v=this
v.aN()
x=v.c
x.toString
x=A.cC(x,!1,y.y).c
w=x==null?null:x.h(0,"role")
x=J.jn(w)
if(!x.k(w,"admin")&&!x.k(w,"super-admin")){$.ac.k4$.push(new B.aRF(v))
return}v.vw()},
vw(){var x=0,w=A.x(y.H),v=1,u=[],t=[],s=this,r,q,p,o
var $async$vw=A.t(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:s.I(new B.aRg(s))
v=3
x=6
return A.q(s.d.iu("GET","/auth/users"),$async$vw)
case 6:r=e
if(y.j.b(r))s.I(new B.aRh(s,r))
t.push(5)
x=4
break
case 3:v=2
o=u.pop()
q=A.aa(o)
s.c.a7(y.q).f.eU(A.jX(null,null,null,null,null,D.q,null,A.a5("Failed to load users: "+A.n(q),null,null,null,null,null,null,null,null),null,D.bh,null,null,null,null,null,null,null,null,null,null))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
s.I(new B.aRi(s))
x=t.pop()
break
case 5:return A.v(null,w)
case 1:return A.u(u.at(-1),w)}})
return A.w($async$vw,w)},
G8(d,e){return this.aEa(d,e)},
aEa(d,e){var x=0,w=A.x(y.H),v=1,u=[],t=this,s,r,q
var $async$G8=A.t(function(f,g){if(f===1){u.push(g)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.q(t.d.xy("/auth/admin/role",A.U(["email",d,"role",e],y.N,y.z)),$async$G8)
case 6:t.vw()
t.c.a7(y.q).f.eU(C.aRv)
v=1
x=5
break
case 3:v=2
q=u.pop()
s=A.aa(q)
t.c.a7(y.q).f.eU(A.jX(null,null,null,null,null,D.q,null,A.a5("Failed to update role: "+A.n(s),null,null,null,null,null,null,null,null),null,D.bh,null,null,null,null,null,null,null,null,null,null))
x=5
break
case 2:x=1
break
case 5:return A.v(null,w)
case 1:return A.u(u.at(-1),w)}})
return A.w($async$G8,w)},
Gc(d,e){return this.aEs(d,e)},
aEs(d,e){var x=0,w=A.x(y.H),v=1,u=[],t=this,s,r,q
var $async$Gc=A.t(function(f,g){if(f===1){u.push(g)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.q(t.d.xy("/auth/admin/status",A.U(["email",d,"status",e],y.N,y.z)),$async$Gc)
case 6:t.vw()
t.c.a7(y.q).f.eU(C.aRt)
v=1
x=5
break
case 3:v=2
q=u.pop()
s=A.aa(q)
t.c.a7(y.q).f.eU(A.jX(null,null,null,null,null,D.q,null,A.a5("Failed to update status: "+A.n(s),null,null,null,null,null,null,null,null),null,D.bh,null,null,null,null,null,null,null,null,null,null))
x=5
break
case 2:x=1
break
case 5:return A.v(null,w)
case 1:return A.u(u.at(-1),w)}})
return A.w($async$Gc,w)},
aq3(){var x,w,v=J.b28(this.e,y.f)
v=A.qC(v,new B.aRj(),v.$ti.i("A.E"),y.P)
x=A.o(v).i("aU<A.E>")
w=A.a_(new A.aU(v,new B.aRk(this),x),x.i("A.E"))
D.b.ia(w,new B.aRl())
return w},
aCi(d){var x,w,v,u,t,s=null,r="role",q={},p=this.c
p.toString
x=A.cC(p,!1,y.y).c
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
A.fl(s,s,!0,s,new B.aRv(q,this,d,w,v),p,s,!0,y.z)},
J(d){var x,w,v,u,t,s,r,q,p=this,o=null,n="super-admin",m=A.cC(d,!0,y.y).c,l=m==null?o:m.h(0,"role")
m=J.jn(l)
if(!m.k(l,"admin")&&!m.k(l,n))return C.aOI
x=m.k(l,n)
w=m.k(l,"admin")
v=p.aq3()
m=M.tI(o,o,o,new B.aRA(p),!1,"members")
u=p.f
t=A.eC(16)
s=A.N(d).ch.f2(0.25)
r=y.N
q=y.p
return A.f_(m,L.qz(A.fh(A.nC(A.bI(A.c([new A.aH(D.ps,A.cm(A.c([A.cl(E.Vz(C.a1I,p.w,C.a9v,new B.aRB(p),r),1),D.nN,A.cl(E.Vz(C.a25,p.x,C.acJ,new B.aRC(p),r),1)],q),D.w,D.r,D.C,0,o,o),o),new A.oY(A.N(d).a6D(G.vs,A.N(d).ch.f2(0.15)),E.bas(C.a3H,A.a5("Members ("+v.length+")",o,o,o,o,o,o,o,o),new B.aRD(p),p.y,!0,new B.a9D(v,new B.aRE(x,w),p.gaCh(),$.af())),o)],q),D.w,D.r,D.C,0,D.H),o,0,o,!0,new A.d1(t,new A.aK(s,1,D.A,-1))),o,D.x,D.cj,o,o,o,!1,D.ab),u),D.dz)}}
B.a9D.prototype={
anp(d){switch(d){case"super-admin":return H.Mb.f2(0.12)
case"admin":return H.M8.f2(0.12)
case"student":return H.M9.f2(0.12)
default:return D.rL.f2(0.16)}},
anq(d){switch(d){case"active":return D.Mc.f2(0.14)
case"inactive":return D.ne.f2(0.14)
default:return N.Ma.f2(0.16)}},
mt(d){var x,w,v,u,t,s,r=this,q=null,p=r.r
if(d>=p.length)return q
x=p[d]
p=x.h(0,"role")
w=J.aV(p==null?"":p)
p=x.h(0,"status")
v=J.aV(p==null?"":p)
p=x.h(0,"alias")
if(p==null)p=x.h(0,"nameUser")
p=E.nK(A.a5(J.aV(p==null?"":p),q,q,q,q,q,q,q,q))
u=x.h(0,"email")
u=E.nK(A.a5(J.aV(u==null?"":u),q,q,q,q,q,q,q,q))
t=E.nK(new A.dg(D.hl,q,q,I.aj0(r.anp(w),A.a5(w,q,q,q,q,q,q,q,q),D.o1),q))
s=E.nK(new A.dg(D.hl,q,q,I.aj0(r.anq(v),A.a5(v,q,q,q,q,q,q,q,q),D.o1),q))
return E.ak0(A.c([p,u,t,s,E.nK(r.w.$1(x)?A.cc(q,q,C.a1b,q,q,new B.aRe(r,x),q,q,q):D.aS)],y.F),new A.b3(new B.aRf(d),y.b),d)},
ga9D(){return!1},
gabR(){return this.r.length},
gVi(){return 0}}
var z=a.updateTypes(["dx<l>(l)","~(i<l,@>)"])
B.aRF.prototype={
$1(d){var x,w=this.a.c
w.toString
x=y.X
return A.aM(w,!1).rn("/",x,x)},
$S:6}
B.aRg.prototype={
$0(){return this.a.f=!0},
$S:0}
B.aRh.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.aRi.prototype={
$0(){return this.a.f=!1},
$S:0}
B.aRj.prototype={
$1(d){return A.eH(d,y.N,y.z)},
$S:257}
B.aRk.prototype={
$1(d){var x,w,v,u,t,s,r,q=this.a,p=D.c.cO(q.r).toLowerCase(),o=d.h(0,"alias")
if(o==null)o=d.h(0,"nameUser")
o=J.aV(o==null?"":o)
x=d.h(0,"email")
x=J.aV(x==null?"":x)
w=d.h(0,"role")
v=J.aV(w==null?"":w)
w=d.h(0,"status")
u=J.aV(w==null?"":w)
t=p.length===0||D.c.m(o.toLowerCase(),p)||D.c.m(x.toLowerCase(),p)
o=q.w
s=o==="all"||v===o
q=q.x
r=q==="all"||u===q
return t&&s&&r},
$S:60}
B.aRl.prototype={
$2(d,e){var x,w,v,u,t=d.h(0,"role"),s=J.aV(t==null?"":t)
t=e.h(0,"role")
x=J.aV(t==null?"":t)
w=D.b.eb(C.Ax,s)
v=D.b.eb(C.Ax,x)
if(w!==v)return D.e.cm(v,w)
t=d.h(0,"email")
t=J.aV(t==null?"":t)
u=e.h(0,"email")
return D.c.cm(t,J.aV(u==null?"":u))},
$S:686}
B.aRv.prototype={
$1(d){var x=this
return new A.n1(new B.aRu(x.a,x.b,x.c,x.d,x.e,d),null)},
$S:99}
B.aRu.prototype={
$2(d,e){var x,w,v,u,t,s,r=this,q=null,p=r.c,o=p.h(0,"alias")
o=A.a5("Edit User: "+A.n(o==null?p.h(0,"nameUser"):o),q,q,q,q,q,q,q,q)
x=y.p
w=A.c([],x)
v=r.d
u=r.a
t=u.a
if(v){s=y.v
s=A.a_(new A.a8(A.c(["student","user","admin","super-admin"],y.s),new B.aRo(),s),s.i("ab.E"))
w.push(E.Vz(C.a20,t,s,new B.aRp(u,e),y.N))}else w.push(A.fb(!1,q,q,q,!1,q,q,!0,q,q,q,q,q,q,q,!1,q,q,q,q,q,A.a5(t,q,q,q,q,q,q,q,q),q,C.Sr,q,q,q))
w.push(D.cO)
if(!v)if(r.e)v=J.e(p.h(0,"role"),"student")||J.e(p.h(0,"role"),"user")
else v=!1
else v=!0
t=u.b
if(v){v=y.v
v=A.a_(new A.a8(A.c(["active","inactive","pending"],y.s),new B.aRq(),v),v.i("ab.E"))
w.push(E.Vz(C.a1V,t,v,new B.aRr(u,e),y.N))}else w.push(A.fb(!1,q,q,q,!1,q,q,!0,q,q,q,q,q,q,q,!1,q,q,q,q,q,A.a5(t,q,q,q,q,q,q,q,q),q,G.Sq,q,q,q))
w=A.bI(w,D.w,D.r,D.am,0,D.H)
v=r.f
return A.hy(A.c([A.cS(K.nS,new B.aRs(v),q),A.cS(D.Sm,new B.aRt(u,r.b,v,p),q)],x),w,o)},
$S:687}
B.aRo.prototype={
$1(d){var x=null
return F.pX(A.a5(d,x,x,x,x,x,x,x,x),d,y.N)},
$S:z+0}
B.aRp.prototype={
$1(d){this.b.$1(new B.aRn(this.a,d))},
$S:49}
B.aRn.prototype={
$0(){var x=this.a
x.a=this.b
x.d=!0},
$S:0}
B.aRq.prototype={
$1(d){var x=null
return F.pX(A.a5(d,x,x,x,x,x,x,x,x),d,y.N)},
$S:z+0}
B.aRr.prototype={
$1(d){this.b.$1(new B.aRm(this.a,d))},
$S:49}
B.aRm.prototype={
$0(){var x=this.a
x.b=this.b
x.c=!0},
$S:0}
B.aRs.prototype={
$0(){A.aM(this.a,!1).cN(null)
return null},
$S:0}
B.aRt.prototype={
$0(){var x=0,w=A.x(y.H),v=this,u
var $async$$0=A.t(function(d,e){if(d===1)return A.u(e,w)
for(;;)switch(x){case 0:A.aM(v.c,!1).cN(null)
u=v.a
x=u.d?2:3
break
case 2:x=4
return A.q(v.b.G8(v.d.h(0,"email"),u.a),$async$$0)
case 4:case 3:x=u.c?5:6
break
case 5:x=7
return A.q(v.b.Gc(v.d.h(0,"email"),u.b),$async$$0)
case 7:case 6:return A.v(null,w)}})
return A.w($async$$0,w)},
$S:7}
B.aRA.prototype={
$1(d){var x=this.a
return x.I(new B.aRz(x,d))},
$S:19}
B.aRz.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.aRB.prototype={
$1(d){var x=this.a
return x.I(new B.aRy(x,d))},
$S:49}
B.aRy.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.aRC.prototype={
$1(d){var x=this.a
return x.I(new B.aRx(x,d))},
$S:49}
B.aRx.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.aRD.prototype={
$1(d){var x=this.a
x.I(new B.aRw(x,d))},
$S:258}
B.aRw.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.aRE.prototype={
$1(d){var x
if(!this.a)if(this.b)x=J.e(d.h(0,"role"),"student")||J.e(d.h(0,"role"),"user")
else x=!1
else x=!0
return x},
$S:60}
B.aRf.prototype={
$1(d){return(this.a&1)===0?D.J:D.p.f2(0.02)},
$S:3}
B.aRe.prototype={
$0(){return this.a.x.$1(this.b)},
$S:0};(function installTearOffs(){var x=a._instance_1u
x(B.No.prototype,"gaCh","aCi",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.qG,A.S)
x(B.No,A.T)
w(A.ex,[B.aRF,B.aRj,B.aRk,B.aRv,B.aRo,B.aRp,B.aRq,B.aRr,B.aRA,B.aRB,B.aRC,B.aRD,B.aRE,B.aRf])
w(A.fp,[B.aRg,B.aRh,B.aRi,B.aRn,B.aRm,B.aRs,B.aRt,B.aRz,B.aRy,B.aRx,B.aRw,B.aRe])
w(A.it,[B.aRl,B.aRu])
x(B.a9D,E.EP)})()
A.h7(b.typeUniverse,JSON.parse('{"qG":{"S":[],"h":[]},"No":{"T":["qG"]},"a9D":{"aS":[],"ae":[]}}'))
var y=(function rtii(){var x=A.a0
return{y:x("hY"),r:x("dx<l>"),F:x("r<lh>"),I:x("r<dx<l>>"),s:x("r<l>"),p:x("r<h>"),j:x("V<@>"),P:x("i<l,@>"),f:x("i<@,@>"),v:x("a8<l,dx<l>>"),N:x("l"),q:x("nn"),b:x("b3<y?>"),z:x("@"),X:x("O?"),H:x("~")}})();(function constants(){var x=a.makeConstList
C.a0A=new A.bu(61868,"MaterialIcons",!1)
C.a1b=new A.c3(C.a0A,null,null,null,null)
C.a1I=new A.d4(null,null,null,"Filter Role",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
C.a1V=new A.d4(null,null,null,"Status",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
C.a20=new A.d4(null,null,null,"Role",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
C.a25=new A.d4(null,null,null,"Filter Status",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
C.aXb=new A.aC("Name",null,null,null,null,null,null,null,null,null,null)
C.Z5=new E.iZ(C.aXb)
C.aWU=new A.aC("Email",null,null,null,null,null,null,null,null,null,null)
C.Z4=new E.iZ(C.aWU)
C.Sr=new A.aC("Role",null,null,null,null,null,null,null,null,null,null)
C.Z8=new E.iZ(C.Sr)
C.a3H=x([C.Z5,C.Z4,C.Z8,G.wb,G.wa],A.a0("r<iZ>"))
C.Ax=x(["user","student","admin","super-admin"],y.s)
C.aWP=new A.aC("All Roles",null,null,null,null,null,null,null,null,null,null)
C.ZG=new F.dx("all",C.aWP,D.br,null,y.r)
C.aX4=new A.aC("student",null,null,null,null,null,null,null,null,null,null)
C.Zx=new F.dx("student",C.aX4,D.br,null,y.r)
C.aXL=new A.aC("user",null,null,null,null,null,null,null,null,null,null)
C.ZI=new F.dx("user",C.aXL,D.br,null,y.r)
C.aXP=new A.aC("admin",null,null,null,null,null,null,null,null,null,null)
C.Zy=new F.dx("admin",C.aXP,D.br,null,y.r)
C.aXd=new A.aC("super-admin",null,null,null,null,null,null,null,null,null,null)
C.ZH=new F.dx("super-admin",C.aXd,D.br,null,y.r)
C.a9v=x([C.ZG,C.Zx,C.ZI,C.Zy,C.ZH],y.I)
C.aXh=new A.aC("All Status",null,null,null,null,null,null,null,null,null,null)
C.ZB=new F.dx("all",C.aXh,D.br,null,y.r)
C.aX2=new A.aC("active",null,null,null,null,null,null,null,null,null,null)
C.ZD=new F.dx("active",C.aX2,D.br,null,y.r)
C.aX5=new A.aC("inactive",null,null,null,null,null,null,null,null,null,null)
C.ZC=new F.dx("inactive",C.aX5,D.br,null,y.r)
C.aXY=new A.aC("pending",null,null,null,null,null,null,null,null,null,null)
C.ZA=new F.dx("pending",C.aXY,D.br,null,y.r)
C.acJ=x([C.ZB,C.ZD,C.ZC,C.ZA],y.I)
C.aXv=new A.aC("Not authorized",null,null,null,null,null,null,null,null,null,null)
C.WC=new A.hB(D.a6,null,null,C.aXv,null)
C.aOI=new A.ra(null,C.WC,null,null)
C.aWZ=new A.aC("Status updated",null,null,null,null,null,null,null,null,null,null)
C.aRt=new A.hq(C.aWZ,null,null,null,null,null,null,null,null,null,null,null,null,D.bh,!1,null,null,null,D.q,null)
C.aXD=new A.aC("Role updated",null,null,null,null,null,null,null,null,null,null)
C.aRv=new A.hq(C.aXD,null,null,null,null,null,null,null,null,null,null,null,null,D.bh,!1,null,null,null,D.q,null)})()};
(a=>{a["fr5A9xn8UdxlbzzbSeqdV4LQPmI="]=a.current})($__dart_deferred_initializers__);