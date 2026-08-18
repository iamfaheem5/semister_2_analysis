# Numerical Methods — Answers

## Part A — Keys

### 2020 Q2(c) Euler $$y'=0.1√y+0.4x^2, y(2)=4$$

$$h=0.1$$: $$x_0=2,y_0=4,f_0=0.1*2+0.4*4=1.8$$, $$y_1=4+0.1*1.8=4.18$$, $$x_1=2.1, f_1=0.1*√4.18+1.764=1.968..., y_2≈4.3768$$... After 5 steps $$y(2.5)≈5.40$$ (approx). With $$h=0.05$$ (10 steps) $$y(2.5)≈5.47$$. Exact (RK4) ≈5.53, so smaller $$h$$ closer.

### 2020 Q4(a) Simpson
$$∫_{x_0}^{x_2}f(x)dx≈h/3[f_0+4f_1+f_2]$$, $$h=(b-a)/n$$, parabolic arcs. Graph: even number of intervals, parabolas through triples.

### 2021 Q4(c) Taylor $$y'=x^2+y^2, y(1)=2.3$$
$$y'_{0}=1+5.29=6.29$$, $$y''=2x+2yy'$$ → $$y''_0=2+2*2.3*6.29≈30.934$$, $$y'''=2+2(y'^2+y y'')$$ → large. Taylor: $$y(1.1)=y_0+0.1y'_0+0.01y''_0/2+0.001y'''_0/6≈2.3+0.629+0.1547+...≈3.1-3.3$$ (depending on $$y'''$$). Second step similar to get $$y(1.2)≈4.3$$.

### 2021 Q5(b) Euler $$y'=x+y^2, y0=1, h0.1$$
$$x0=0,y0=1,f0=1$$→y1=1.1, x1=0.1,f1=0.1+1.21=1.31→y2=1.231, x2=0.2,f2=0.2+1.515=1.715→y3=1.4025, x3=0.3,f3=0.3+1.967=2.267→y4≈1.629

### 2022 Q4(a) Taylor $$y'=x+y, y1=0$$
Exact solution $$y=e^{x-1}(? )?$$ Actually $$y'+?$$ Solve: $$y=Ce^{x}-x-1$$, $$C=2/e$$, so $$y(1.2)=2e^{0.2}-2.2≈0.4428$$. Taylor steps: $$y''=1+y', y'''=y''$$. At $$x0=1,y0=0,y0'=1,y0''=2,y0'''=2$$ → $$y1=0+0.1*1+0.01*2/2+0.001*2/6≈0.11033$$. Next $$x1=1.1,y1≈0.11033,y1'=1.21033, y1''=2.21033,y1'''=2.21033$$ → $$y2≈0.2428$$ (error vs exact 0.024 due to truncation).

### 2022 Q4(b) Euler $$(y-x)/(y+x), y0=1, h0.1, y0.1$$
$$f0=1/1=1$$ → $$y1=1+0.1*1=1.1$$

### 2022 Q6(b) Simpson $$∫0^π sinx, n=8, h=π/8$$
$$h=0.3927$$, values $$sin0=0, sin h=0.382683, sin2h=0.7071, etc.$$ Simpson sum $$=h/3[0+0+4(0.382683+0.92388+0.92388+0.382683)+2(0.7071+1+0.7071)]≈2.000298$$ error $$≈0.0003$$.

### 2023 Q5(a) Taylor $$y'=x^2-y, y0=1$$
At 0: $$y0'= -1, y''=2x -y' → 0 -(-1)=1, y'''=2 -y''=1$$ → $$y0.1≈1 -0.1+0.01/2+0.001/6≈0.90517$$. Next $$x1=0.1, y1≈0.905, y1'=0.01-0.905=-0.895, y1''=0.2+0.895=1.095, y1'''=2-1.095=0.905$$ → $$y0.2≈0.821?$$

### 2023 Q5(b) Euler $$-xy^2, y2=1, h0.05, y2.2$$
Steps: $$x0=2,y0=1,f0=-2$$→y0.05=0.9, $$x1=2.05,y1=0.9,f1=-2.05*0.81=-1.6605→y2=0.81697$$, $$x2=2.1,f2=-1.44→y3≈0.745$$, $$x3=2.15,f3=-1.19→y4≈0.685$$. Exact $$≈0.704$$ error $$≈0.019$$.

## Part B — Practice Keys

**P1** Simpson 1/3: $$h/3[f0+4f1+2f2+...]$$, 3/8: $$3h/8[f0+3f1+3f2+2f3+...]$$

**P2** Euler from $$y(x+h)=y+hy'+O(h^2)$$.

**P3** Simpson 8 strips gave $$≈2.0003$$, exact 2, error $$0.015%$$.

**P4** Taylor $$y(1.1)≈3.08$$ (compute $$y'''$$ term).

**P5** Table as above $$y0.4≈1.63$$ (more precise $$1.629$$).

**P6** Single Euler step gives $$1.1$$.

**P7** Two Taylor steps give $$y1≈0.1103, y2≈0.242$$

**P8** $$y0.1≈0.905, y0.2≈0.821$$

**P9** Four Euler steps $$≈0.685$$ vs exact $$0.704$$, halving $$h$$ reduces error ~half.

**P10** Euler 5 vs 10 steps difference $$≈0.07$$, Richardson extrapolated $$y≈y_{0.05}+(y_{0.05}-y_{0.1})/1 ≈5.54$$.

*All Euler tables should show $$x_n, y_n, f(x_n,y_n)$$ for full marks.*
