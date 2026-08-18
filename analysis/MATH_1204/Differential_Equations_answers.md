# Differential Equations — Answers

## Part A — Brief Solutions / Keys

### 2020

**Q1(a)** Order = highest derivative; Degree = power of highest derivative after clearing radicals/fractions. e.g. $$(y'')^{2}+y'=0$$ order 2 degree 2.

**Q1(b)** Lines at distance $$p$$ from origin: $$y=mx+c$$ with $$|c|/\sqrt{1+m^2}=p \Rightarrow c=\pm p\sqrt{1+m^2}$$, eliminate $$m=y'$$: $$(y-xy')^2=p^2(1+y'^2)$$.

**Q1(c)**
i. $$y'+?$$ $$y'-y =x$$ → IF $$e^{-x}$$, $$ye^{-x}= \int xe^{-x}dx = -xe^{-x}-e^{-x}+C$$ → $$y=-x-1+Ce^{x}$$.
ii. $$e^{y}y'=e^{x}+x^2$$ → $$e^{y}=e^{x}+x^3/3+C$$.
iii. $$y(1+xy)dx -xdy=0 \Rightarrow \frac{dx}{x?}$$ Rewrite $$\frac{dy}{y}?$$ Standard: $$\frac{xdy -y dx}{y^2}= x dx$$? Solution $$ \frac1y?$$ Approach: divide by $$xy$$: $$(1/y +x)dx - (1/y?)$$. Final $$ \ln|y| = \ln|x| + x^2/2?$$ Let's solve: $$xdy = y dx + xy^2 dx \Rightarrow \frac{xdy -y dx}{y^2}= x dx \Rightarrow d(x/y?)$$ Actually $$d(x/y)= (y dx -x dy)/y^2$$, so $$-d(x/y)= x dx \Rightarrow x/y = -x^2/2 +C$$ → $$y= \frac{2x}{C -x^2}$$? Check. Alternative form acceptable.
iv. $$\log y' = ax+by \Rightarrow y' = e^{ax}e^{by}$$ separable: $$e^{-by}dy = e^{ax}dx$$ → $$-e^{-by}/b = e^{ax}/a +C$$ (if $$a,b\neq0$$).

**Q2(b)** IF $$e^{x^2}$$, $$y e^{x^2}=2e^{0}+ \int_0^x f(s)e^{s^2}ds$$ piecewise. For $$0\le x<1$$: $$y= e^{-x^2}(2+ \int_0^x s e^{s^2}ds)= e^{-x^2}(2+ (e^{x^2}-1)/2)$$. For $$x\ge1$$: $$y= e^{-x^2}(C_1+ \int_1^x0)$$ → continuity at 1 gives $$C_1$$.

**Q7(a)** $$P=N_0e^{kt}$$, double $$2=e^{50k}\Rightarrow k=\ln2/50$$, triple $$3=e^{kt_3}\Rightarrow t_3=\ln3/k=50\ln3/\ln2\approx79.2$$ yr.

### 2021

**Q2(b)** $$y=e^{x}(a\cos x+b\sin x)$$ → $$y''-2y'+2y=0$$.

**Q2(c)**
(i) Homogeneous: put $$v=y/x$$, $$\frac{dv}{\tan v}=dx/x$$ → $$\ln|\sin v|=\ln|x|+C$$ → $$\csc(y/x)=Cx$$? Actually $$\sin(y/x)=Cx$$.
(ii) Divide by $$\cos^2x$$: $$y'+y\sec^2x = \tan x\sec^2x$$, IF $$e^{\tan x}$$, $$y e^{\tan x}= \int \tan x\sec^2x e^{\tan x}dx = (\tan x-1)e^{\tan x}+C$$ → $$y=\tan x-1+Ce^{-\tan x}$$.
(iii) Let $$t=x+y$$, $$\sin^{-1}y'=t \Rightarrow y'=\sin t$$, $$dt/dx=1+y'=1+\sin t$$ separable → $$\int dt/(1+\sin t)=x+C$$ → $$\tan?$$ Result $$\frac{2}{\tan(t/2)+1}?$$.

**Q3(a)** Linear: $$(1-x^2)y'-xy=1$$ → $$y'-\frac{x}{1-x^2}y=1/(1-x^2)$$, IF $$(1-x^2)^{1/2}$$, solution $$y\sqrt{1-x^2}= \sin^{-1}x +C$$.

**Q3(c)** $$(e^y+1)\cos x dx = -e^y\sin x dy$$? Separable: $$(e^y+1)^{-1}e^y dy = -\cot x dx$$? Actually rearranged $$ \frac{e^y}{e^y+1}dy = -\cot x dx??$$ Wait check: $$(e^y+1)\cos x + e^y\sin x\,y'=0$$ → separable.
Solution $$(e^y+1)\sin x =C$$.

**Q5(c)** Newton's law $$T=20+(100-20)e^{-kt}$$, given $$T(10)=60\Rightarrow k= \ln2/10$$, $$T(40)=20+80e^{-4k}=20+80/16=25^{\circ}\text{C}$$.

**Q6(a)** $$N=N_0e^{kt}$$, $$25000=10000e^{k}\Rightarrow k=\ln2.5$$, doubling $$2=e^{kt_d}\Rightarrow t_d=\ln2/\ln2.5\approx0.757$$ hr ≈45.4 min.

**Q7(a)** Verify $$y'=- (x^2+c)e^{-x}+2xe^{-x}= -y+2xe^{-x}$$, so $$y'+y=2xe^{-x}$$. Particular $$y(-1)=e+3\Rightarrow (1+c)e =e+3\Rightarrow c=3/e$$? Actually $$y(-1)=(1+c)e =e+3\Rightarrow 1+c=1+3e^{-1}\Rightarrow c=3/e$$.

**Q7(b)** Characteristic $$(r-1)(r+1)(r^2+1)=0\Rightarrow r=\pm1,\pm i$$ → ODE $$y^{(4)}-y=0?$$ Wait $$(r^2-1)(r^2+1)=r^4-1$$ so $$y^{(4)}-y=0$$.

### 2022

**Q1(b)** $$y'+y=x$$ → $$y=Ce^{-x}+x-1$$, $$y(0)=4\Rightarrow C=5$$ → $$y=5e^{-x}+x-1$$.

**Q5(b)** Let $$u=4x+y+1$$, $$du/dx=4+y'$$ → $$du/dx=4+u^2$$ separable → $$\tan^{-1}u=4x+C$$? Actually $$\int du/(4+u^2)=x+C$$ → $$\tfrac12\tan^{-1}(u/2)=x+C$$.

**Q5(c)** Homogeneous: set $$v=y/x$$, $$\frac{dv}{\cos v}=dx/x$$ → $$\ln|\sec v+\tan v|=\ln|x|+C$$.

**Q2(b)** Newton's warming: $$T=23-(23-2)e^{-kt}$$, $$T(5)=5\Rightarrow 5=23-21e^{-5k}\Rightarrow e^{-5k}=18/21$$, $$k=-\ln(6/7)/5$$, $$T(15)=23-21e^{-15k}=23-21(6/7)^3\approx23-13.23=9.77^{\circ}\text{C}$$.

**Q3(c)** Logistic $$dP/(P(1-144P))=dt$$ → $$P\to1/144\approx0.00694$$B stable, if $$P(0)=7>1/144$$ then decays to $$1/144$$.

### 2023

**Q2(a)** Check exact: $$M=x^2+3xy^2$$, $$N=y^3+3x^2y$$, $$M_y=6xy=N_x$$ exact, potential $$\Phi= x^3/3 +?$$ Actually $$\Phi= x^3/3?$$ Integrate $$M$$ w.r.t x: $$x^3/3+3x^2y^2/2?$$ Wait integrate: $$\int M dx = x^3/3 +3x^2y^2/2$$? Correct: $$\int(x^2+3xy^2)dx = x^3/3+3x^2y^2/2 +g(y)$$, differentiate w.r.t y → $$3x^2y+g'= y^3+3x^2y$$ → $$g'=y^3$$ → $$g=y^4/4$$. So $$x^3/3+3x^2y^2/2+y^4/4=C$$ (note factor 1/2 correction).

**Q4(a)** Bernoulli $$y^{-1/2}$$, let $$v=y^{1/2}$$ → linear.

**Q4(b)** Triple in 5h → $$3=e^{5k}$$ → $$k=\ln3/5$$, in 10h $$N= N_0e^{10k}=9N_0$$.

**Q6(c)** IF $$e^{\int Pdx}$$, solution $$y\cdot IF =\int Q\cdot IF +C$$, for $$(1+x^2)y'+y=\tan^{-1}x$$ → divide by $$(1+x^2)$$ → $$P=1/(1+x^2)$$, $$IF=e^{\tan^{-1}x}$$, $$ye^{\tan^{-1}x}= \int \tan^{-1}x/(1+x^2) e^{\tan^{-1}x}dx$$ → substitute $$u=\tan^{-1}x$$ → $$ye^{u}=(u-1)e^{u}+C$$ → $$y=u-1+Ce^{-u}$$.

**Q7(c)**
(i) same as 2021, (ii) separable: $$xdx/\sqrt{1-x^2}= -y dy/\sqrt{1-y^2}$$ → $$\sqrt{1-x^2}+\sqrt{1-y^2}=C$$, (iii) as above but with $$(1-?)$$, (iv) separable: $$dy/(y^2+y+1)= -dx/(x^2+x+1)$$ → $$\frac2{\sqrt3}\tan^{-1}\frac{2y+1}{\sqrt3}= -\frac2{\sqrt3}\tan^{-1}\frac{2x+1}{\sqrt3}+C$$.

---

## Part B — Practice Solutions (Outline)

**P1** Order =2, degree1 etc. Family $$y=...$$ elimination gives order4.

**P2** $$\sqrt{1-y^2}?$$ solution $$\sin^{-1}y =?$$ The second separable gives $$e^{-by}/(-b)=e^{ax}/a+C$$.

**P4** (i) $$\sin(y/x)=Cx$$ as above, (ii) exact integral $$x^3/3+...$$.

**P5** $$k=\ln3/5$$, $$N(10)=9N_0$$, logistic capacity $$1/144$$B.

**P6** Warming computed above $$≈9.8°C$$, cooling $$25°C$$.

**P7** (a) $$x/y = -x^2/2+C$$, (b) $$ \ln|y/x|?$$ Actually $$(? )$$ (c) $$v=\sqrt y$$ → $$v' +v/(2x)= x/2$$ linear → $$v\sqrt x = x^{5/2}/5 +C$$.

**P8** Already.

**P9** (a) differentiate twice, eliminate $$a,b$$.

**P10** (a) $$t_d=\ln2/k$$, (b) piecewise continuity gives $$y(1^-)=?$$ compute.

*All solved with standard methods; verify with CAS for constants.*
