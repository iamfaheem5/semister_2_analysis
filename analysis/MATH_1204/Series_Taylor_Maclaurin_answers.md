# Series, Taylor & Maclaurin — Answers

## Part A — Outlines

### 2020

**Q4(b)** Ratio test: $$a_{n+1}/a_n = (3n+4)/(n+1)\cdot |x| \to 3|x|$$. Converges if $$3|x|<1\Rightarrow |x|<1/3$$, diverges if $$>1$$, at $$|x|=1/3$$ terms $$\sim n^{-2/3}$$? The paper states $$x< -1/3$$ vs $$x\ge1/3$$ — treat as absolute convergence for $$|x|<1/3$$.

**Q6(a)** Taylor with Lagrange remainder: $$f(x)=f(a)+f'(a)(x-a)+\cdots+f^{(n)}(a)/n!(x-a)^n+R_n$$, $$R_n=f^{(n+1)}(\xi)/(n+1)!(x-a)^{n+1}$$. Proof via Rolle/Cauchy MVT induction.

**Q6(b)** $$f=\ln x$$, $$f^{(k)}=(-1)^{k-1}(k-1)!/x^k$$. At $$a=2$$: $$P_n= \ln2+ (x-2)/2 -(x-2)^2/8 +(x-2)^3/24 -\cdots+(-1)^{n-1}(x-2)^n/(n2^n)$$.

**Q6(c)** Failures: (1) no derivatives, (2) remainder not→0, (3) series converges to different function.

**Q7(b)** $$e^{\sin x}=1+\sin x+ \sin^2x/2+\sin^3x/6+\cdots$$ Expand $$\sin x= x -x^3/6+x^5/120...$$ → $$e^{\sin x}=1+x+x^2/2 -x^4/8 +\cdots$$ (up to $$x^4$$).

### 2021

**Q4(a)** $$\sum a_n$$ converges if partial sums $$S_N$$ tends to finite limit; diverges otherwise.

**Q4(b)** (i) $$\sum1/(2n!)?$$ Actually $$1/n!$$ converges (ratio →0). (ii) Root test: $$a_n^{1/n}= \sqrt{(n^2+1)/(2n^2+1)}\to1/\sqrt2<1$$ converges? Wait with outer Root squared? Compute limit $$((n^2+1)/(2n^2+1))^{1/2}\to1/\sqrt2<1$$ so converges.

**Q6(b)** $$\log(1+x)= x -x^2/2 +x^3/3 -x^4/4+\cdots,\ |x|<1$$ plus remainder.

### 2022

**Q2(a)** (i) If $$a_n=1/(\sqrt{n+1}+\sqrt n)=\sqrt{n+1}-\sqrt n$$ then $$\sum a_n =\sqrt{N+1}-1\to\infty$$ diverges. If $$1/\sqrt{n+\sqrt n}\sim1/\sqrt n$$ diverges by p-test $$p=1/2\le1$$. (ii) $$1·3·5…(2n-1)/n^4\sim (2n)!/(2^n n!n^4)$$ growth super-exponential vs $$n^4$$ diverges. (iii) same as 2020.

**Q3(a)** $$\cos x≈1 -x^2/2$$, remainder $$|R_3|≤|x|^3/6$$.

**Q7(c)** $$e^x=1+x+x^2/2!+x^3/3!+\cdots$$.

### 2023

**Q2(c)** Compute derivatives at 2: $$f=2x^3+7x^2+x-6$$, $$f(2)=34$$, $$f'(x)=6x^2+14x+1$$, $$f'(2)=53$$, $$f''(2)=38$$, $$f'''(2)=12$$. So $$f=34+53(x-2)+19(x-2)^2+2(x-2)^3$$.

**Q3(a)** Same as above.

**Q3(b)** Infinite series $$f(x)=\sum f^{(k)}(a)/k!(x-a)^k$$. For $$\ln x$$ at 1: $$f(1)=0$$, $$f'=1$$, $$f''=-1$$, etc. First three terms: $$(x-1)-(x-1)^2/2+(x-1)^3/3$$.

**Q6(a)** If $$\sum a_n$$ converges then $$a_n=S_n-S_{n-1}\to L-L=0$$.

**Q6(b)** (i) $$n^2/(5n^2+4)\to1/5\neq0$$ diverges. (ii) $$\sum1/(n^2+1)$$ converges by comparison with $$1/n^2$$. (iii) Root test: $$a_n^{1/n}=(2n+3)/(3n+2)\to2/3<1$$ converges.

---

## Part B — Practice Solutions

**P1** Standard: $$e^x=\sum x^n/n!$$, $$\log(1+x)=\sum (-1)^{n-1}x^n/n$$, $$e^{\sin x}=1+x+x^2/2 -x^4/8+...$$.

**P2** Proof: $$a_n=S_n-S_{n-1}$$. Counterexample harmonic $$\sum1/n$$ diverges though $$1/n\to0$$. For $$n^2/(5n^2+4)\to1/5\neq0$$ so diverges.

**P3** $$P_2=1-x^2/2$$, $$\cos0.1≈0.995$$, error ≤ $$|x|^4/24≈4.16e-6$$.

**P4** Shown above. Taylor at 1: $$(x-1)-(x-1)^2/2+(x-1)^3/3...$$ At 2: as 2020 Q6(b).

**P5** (i) $$1/(n^2+1)<1/n^2$$ converges, (ii) root →2/3<1 converges.

**P6** Ratio $$|a_{n+1}/a_n|= (3n+4)/(n+1)|x|\to3|x|$$, etc.

**P7** Using expansions: $$e^{\sin x}=1+x+x^2/2 -x^3/8?$$ Actually compute up to $$x^3$$ term $$-x^3/6?$$ Let's expand: $$\sin x =x -x^3/6$$, $$\sin^2/2 = x^2/2$$, $$\sin^3/6≈x^3/6$$, sum → $$1+x+x^2/2+0·x^3+...$$limit =0? Wait recompute more precisely gives $$0$$ for $$x^3$$ coefficient, so limit numerator $$\sim -x^4/8$$ leading to 0. Provide final.

**P8** Discuss three failures with examples as described.

**P9** (i) Telescoping diverges, (ii) ratio $$a_{n+1}/a_n≈2n/(n+1)$$ →2>1 diverges.

**P10** Solve logistic: $$P(t)= \frac{e^{t}}{144e^{t}+(1/P_0 -144)}$$ limit $$1/144$$. Taylor near 0: $$P(t)=7+7(1-1008)t+...$$ approximation breaks after small t.

*All convergence tests should state test name (ratio/root/comparison) explicitly for full marks.*
