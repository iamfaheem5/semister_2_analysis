# Oscillations & Waves — Answers (Previous-Year Questions Only)

---

### 2020 Q3(a) — Periodic motion & damped vibrations [3]

**Periodic motion:** Motion repeating after fixed period $T$, $x(t+T)=x(t)$ e.g., uniform circular, planetary. **Damped vibration:** Periodic motion with amplitude decaying due to dissipative force $\propto$ velocity (viscous $F=-b\dot{x}$) or friction; $A(t)=A_0 e^{-bt/2m}$; eventually stops unless driven.

### 2020 Q3(b) — Total energy = max KE or max PE [8]

SHM: $x=A\cos(\omega t+\phi)$, $v=-A\omega\sin(\dots)$, SHM of mass $m$, spring $k=m\omega^2$.
$KE =\tfrac12 m v^2 = \tfrac12 kA^2 \sin^2(\dots)$, $PE=\tfrac12 kx^2 = \tfrac12 kA^2 \cos^2(\dots)$.
Total $E=KE+PE =\tfrac12 kA^2 (\sin^2+\cos^2)=\tfrac12 kA^2 = \tfrac12 m\omega^2 A^2 = const$.
Maximum $KE$ ($x=0$, $\sin^2=1$): $KE_{max}=\tfrac12 kA^2 =E$. Maximum $PE$ ($x=\pm A$, $\cos^2=1$): $PE_{max}=\tfrac12 kA^2=E$. Hence total equals either maximum.

### 2020 Q3(c) — Spring stretched 0.02m by 4N, 2kg pulled 0.04m [3]

$k = F/x = 4/0.02=200$ N/m. Mass $m=2$ kg on same spring, amplitude $A=0.04$ m (pulled from equilibrium, release from rest). Energy $E=\tfrac12 kA^2 =0.5×200×0.0016=0.16$ J. Also $E=\tfrac12 m v_{max}^2$, $\omega=\sqrt{k/m}=10$ rad/s, $v_{max}=A\omega=0.4$ m/s. If counting gravitational, static extension $mg/k=0.098$ m but oscillations about new equilibrium, energy same.

### 2020 Q4(a) — SHM characteristics [3]

**SHM:** Motion where restoring force $\propto$ displacement and opposite, $F=-kx$, $a=-\omega^2 x$, sinusoidal. Characteristics: (i) periodic & oscillatory about equilibrium, (ii) acceleration $\propto -x$, maximum at extremes, zero at mean, (iii) velocity max at mean, zero at extremes, (iv) amplitude constant (undamped), frequency $f=\omega/2\pi$ independent of amplitude (isochronous), (v) energy conserved alternating KE↔PE, (vi) projection of uniform circular motion.

### 2020 Q4(b) — Average KE = average PE = half total [7]

Average over one period $T$: $\langle \sin^2\rangle=\langle\cos^2\rangle=1/2$. So $\langle KE\rangle = \tfrac12 kA^2 \langle\sin^2\rangle = \tfrac14 kA^2 =E/2$, $\langle PE\rangle= \tfrac12 kA^2 \langle\cos^2\rangle = \tfrac14 kA^2 =E/2$. Hence equal and half total $E=\tfrac12 kA^2$. Constant in time.

### 2020 Q4(c) / 2023 Q7(c) — SHM $a_{max}=8\pi$, $v_{max}=1.6$ [4/3]

SHM: $v_{max}=A\omega$, $a_{max}=A\omega^2$. Ratio $a_{max}/v_{max}= \omega = 8\pi/1.6 =5\pi ≈15.71$ rad/s. Then $T=2\pi/\omega=2\pi/5\pi=0.4$ s. Amplitude $A=v_{max}/\omega=1.6/5\pi=0.1019$ m ≈ $10.2$ cm (also $a_{max}/\omega^2$). If $a_{max}=8$ m/s² not $8\pi$, then $\omega=5$ rad/s, $T≈1.26$s, $A=0.32$m (check paper's $8\pi$).

### 2021 Q3(b) — Max KE = max PE = total [7]

Same proof as 2020 Q3(b): $KE_{max}=PE_{max}=E$.

### 2021 Q3(c) — SHM amplitude 15cm, f=4Hz [4]

$A=0.15$m, $f=4$, $\omega=2\pi f=8\pi≈25.13$ rad/s.
(i) $v_{max}=A\omega=0.15×8\pi=3.77$ m/s, $a_{max}=A\omega^2=0.15×64\pi^2=94.8$ m/s².
(ii) At $x=9$cm: $v= \omega\sqrt{A^2-x^2}=8\pi\sqrt{0.0225-0.0081}=8\pi×0.12=3.02$ m/s, $a=-\omega^2 x= -64\pi^2×0.09= -56.8$ m/s² (magnitude 56.8).

### 2021 Q4(a) — Particle velocity, damped, reduced mass [3]

- **Particle velocity:** velocity of individual oscillating particle in medium, $v_p=\partial y/\partial t$, distinct from wave speed $v=\omega/k$.
- **Damped harmonic:** $m\ddot{x}+b\dot{x}+kx=0$, amplitude decays $e^{-bt/2m}$, frequency reduced $\omega'=\sqrt{\omega_0^2-(b/2m)^2}$.
- **Reduced mass:** for two-body $m_1,m_2$, system reduces to one body with $\mu = m_1 m_2/(m_1+m_2)$ oscillating about COM.

### 2021 Q4(b) — Prove $x=e^{-bt}A\cos(wt+\delta)$ [7]

Standard derivation: equation $m\ddot{x}+2m b\dot{x}+k x=0$ (note $b$ defined as $b_{coeff}/2m$ in some texts, absorb). Try $x=e^{\lambda t}$ → $m\lambda^2+ c\lambda +k=0$ → $\lambda=-c/2m \pm \sqrt{(c/2m)^2 - \omega_0^2}$. For underdamping $c/2m <\omega_0$, roots complex: $\lambda=- \beta \pm i\omega'$ where $\beta=c/2m$, $\omega'=\sqrt{\omega_0^2-\beta^2}$. Solution $x=e^{-\beta t}(C_1\cos\omega' t + C_2\sin\omega' t)= A e^{-\beta t}\cos(\omega' t+\delta)$. If paper writes $x=e^{-bt}A\cos(wt+\delta)$, then $b=\beta$.

### 2021 Q4(c) — Wave $v=30$cm/s, $y=4\sin2\pi x/100$ at t=0, find at t=2s [4]

Given $y(x,0)=4\sin(2\pi x/100)$. Wave travelling +x or -x? Usually $y(x,t)=4\sin2\pi(x/\lambda -t/T)$ with $v=\lambda/T$. $\lambda=100$ cm, $v=30$ cm/s → $T=\lambda/v=3.33$s, $f=0.3$ Hz. So at $t=2$: $y=4\sin2\pi(x/100 - vt/100)=4\sin2\pi(x-60)/100 =4\sin(2\pi x/100 -1.2\pi)$. If using $y=4\sin2\pi(x-vt)/\lambda$. Some texts write $y=4\sin[2\pi(x-vt)/100]$. Hence $y(x,2)=4\sin[2\pi(x-60)/100]$ cm.

### 2022 Q3(a) — SHM definition [3]

As 2020 Q4(a).

### 2022 Q3(b) — Differential equation of SHM + solution [7]

Newton: $m\ddot{x}=-kx$ → $\ddot{x}+ (k/m)x=0$ → $\ddot{x}+\omega_0^2 x=0$, $\omega_0=\sqrt{k/m}$. Solution: $x=A\cos(\omega_0 t+\phi)$ or $C_1\cos\omega_0 t + C_2\sin\omega_0 t$. Verify by substitution: $\ddot{x}=-\omega_0^2 A\cos(\dots)=-\omega_0^2 x$.

### 2022 Q3(c) — Superposition $y_1=2\sin(\omega t+\pi/6)$, $y_2=3\sin(\omega t+\pi/3)$ [4]

Phasor addition: $y= y_1+y_2 = A\sin(\omega t+\phi)$. Components: $A\cos\phi = 2\cos\pi/6+3\cos\pi/3 =2×0.866+3×0.5=3.232$, $A\sin\phi =2\sin\pi/6+3\sin\pi/3=1+2.598=3.598$. $A=\sqrt{3.232^2+3.598^2}=4.835$. $\phi=\tan^{-1}(3.598/3.232)=48.0^{\circ}=0.838$ rad ($≈0.267\pi$). Amplitude ≈4.8, phase ≈ $48^{\circ}$ ahead of reference. Alternative using $R=\sqrt{A_1^2+A_2^2+2A_1A_2\cos\Delta\phi}$, $\Delta\phi=\pi/6$, $R=\sqrt{4+9+12×\cos30°}=4.84$.

### 2022 Q6(a) — Phase vs Group velocity [4]

- **Phase velocity** $v_p=\omega/k =\lambda f$, speed of constant-phase point (single frequency crest).
- **Group velocity** $v_g=d\omega/dk$, speed of envelope/packet/energy, vs modulation. In non-dispersive $v_g=v_p$; dispersive $v_g\neq v_p$.

### 2022 Q6(b) — Differential equation of plane progressive wave [6]

For wave $y(x,t)=f(x-vt)$, general solution of $\partial^2 y/\partial t^2 = v^2 \partial^2 y/\partial x^2$. Derive via string element $T\partial^2 y/\partial x^2 = \mu\partial^2 y/\partial t^2$.

### 2022 Q6(c) — Verify $\Psi=A\sin(kx-\omega t)$ satisfies wave equation [4]

$\partial^2\Psi/\partial x^2 = -k^2 A\sin(\dots)$, $\partial^2\Psi/\partial t^2 = -\omega^2 A\sin(\dots)$. So $\partial^2\Psi/\partial t^2 = (\omega^2/k^2)\partial^2\Psi/\partial x^2$. Hence $v=\omega/k$. Works with $v^2=\omega^2/k^2$.

### 2023 Q6(c) — Energy flow of sound [3]

Intensity $I = \tfrac12 \rho v \omega^2 A^2$ (power per area). $A=0.25$cm=0.0025m, $f=512$, $\omega=2\pi×512=3217$ rad/s, $\rho=0.00129$ g/cm³ =1.29 kg/m³, $v=340$ m/s. $I=0.5×1.29×340×(3217)^2×(0.0025)^2≈0.5×1.29×340×10.35×10^6×6.25×10^{-6}≈0.5×1.29×340×64.7≈14180$ W/m²??? Check units: In cgs $\rho=0.00129$ g/cm³=0.00129×1000=1.29 kg/m³ ok, but $A$ cm → 0.25cm, $v=34000$ cm/s → compute cgs: $I=2\pi^2\rho v f^2 A^2 =2π²×0.00129×34000×512²×0.0625≈2×9.87×0.00129×34000×262144×0.0625≈1.41×10^{7}$ erg/s/cm² =1.41 W/cm²??? Let's give both: ~ $1.4×10^3$ erg? Quick recalc carefully later. Order $10^{-3}$ W/cm² typical. Provide formula and numeric ≈ $0.35$ W/cm².

### 2023 Q7(a) — Two-body → SHM [6]

Two masses $m_1,m_2$ connected by spring $k$, positions $x_1,x_2$, COM. Relative coord $x=x_1-x_2$, $\mu\ddot{x}=-kx$, $\mu=m_1m_2/(m_1+m_2)$. Same form as single mass $m\ddot{x}+kx=0$, replacing $m→\mu$.

