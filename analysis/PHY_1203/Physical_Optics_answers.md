# Physical Optics — Answers (Previous-Year Questions Only)

---

### Common formula toolbox

- Fringe width (Young): $\beta = \lambda D / a$ where $a=d$ = slit separation, $D$ = screen distance.
- Newton's rings (reflected): dark $2t = m\lambda$, bright $2t = (m+\tfrac12)\lambda$, geometry $t = r^2/2R$ → $r_m^{dark}=\sqrt{m\lambda R}$, $r_m^{bright}=\sqrt{(m+1/2)\lambda R}$, diameter $D_m^2 =4m\lambda R$. With $m$ counting centre $m=0$ dark.
- Brewster: $\tan\theta_p = \mu = n_2/n_1$, at $\theta_p$, $r\perp t$, reflected polarized.
- Phase on reflection off denser: $\pi$ shift ($\lambda/2$).

---

### 2020 Q5(a) — Interferometer & resolving power [3]

- **Interferometer:** Device splitting light to interfere (e.g., Michelson, Fabry-Perot) to measure $\lambda$, tiny distances, refractive index via fringe shifts. Consists of beam-splitter, mirrors, recombine.
- **Resolving power:** Ability to distinguish close wavelengths/objects. For grating $R=\lambda/\Delta\lambda = mN$, for microscope $R = 0.61\lambda/NA$, for telescope $1.22\lambda/D$. Higher $R$ = finer detail.

### 2020 Q5(b) — Interference conserves energy [7]

Superpose two fields $E_1, E_2$ with intensities $I_1,I_2$, phase $\phi$: $I = I_1+I_2+2\sqrt{I_1I_2}\cos\phi$. Bright ($ \cos=+1$) $I_{max}=(\sqrt{I_1}+\sqrt{I_2})^2$, dark ($-1$) $I_{min}=(\sqrt{I_1}-\sqrt{I_2})^2$. Sum over space average $\langle\cos\phi\rangle=0$ over many fringes → $\langle I\rangle = I_1+I_2$ total energy same as sum without interference; energy redistributed from dark to bright, not destroyed/absorbed. Experimental proof: integrate over screen matches incident power.

### 2020 Q5(c) — Green's double-slit: 10 fringes 2cm over 200cm, λ=5100Å [4]

$\lambda=5100$Å $=5.1×10^{-7}$m, $D=2$ m, fringe width $\beta = \text{total}/n =2\text{cm}/10=0.2$cm $=2×10^{-3}$m. $\beta=\lambda D/a$ → $a=\lambda D/\beta =5.1×10^{-7}×2 /2×10^{-3}=5.1×10^{-4}$m $=0.51$mm. Slit separation ≈ 0.51 mm.

### 2020 Q7(a) — Newton's ring, coherent source, retardation plates [3]

- **Newton's rings:** Concentric circular interference due to air film between plano-convex lens and glass plate (equal thickness).
- **Coherent source:** Sources with constant phase difference, same frequency, produce sustained interference (laser, biprism virtual sources).
- **Retardation plates:** Birefringent crystal cut to introduce phase retardation between $o$ and $e$ rays: quarter-wave introduces $\pi/2$, half-wave $\pi$.

### 2020 Q7(b) — Brewster's law + 90° proof [7]

**Brewster's law:** At polarizing angle $\theta_p$, reflected ray is plane-polarized, $\tan\theta_p=\mu$, where $\mu$ is refractive index of second medium relative to first.

**Prove 90° apart:** Snell: $\mu=\sin\theta_p/\sin r$ ( $r$ = refraction angle). Also $\mu=\tan\theta_p=\sin\theta_p/\cos\theta_p$ → $\sin r =\cos\theta_p =\sin(90^{\circ}-\theta_p)$ → $r=90^{\circ}-\theta_p$ → $\theta_p + r =90^{\circ}$ i.e., reflected ($\theta_p$) and refracted ($r$) rays are $90^{\circ}$ apart ($180^{\circ}-\theta_p - r =90^{\circ}$ between them outside? Actually angle between reflected and refracted = $180^{\circ}-\theta_p - r =90^{\circ}$).

### 2020 Q7(c) — Na vapour 0.58μm, screen 1m, fringe 30mm [4]

$\lambda=0.58$μm $=5.8×10^{-7}$m, $D=1$m, $\beta=30$mm $=0.03$m. $a=\lambda D/\beta =5.8×10^{-7}×1/0.03=1.93×10^{-5}$m $=0.0193$mm. If $\beta=3.0$mm (likely misprint, as 30mm huge) then $a=0.193$mm. Keep formula; note that 30mm fringe width unusually large for small separation, but using given numbers separation is ~19 μm.

### 2021 Q6(a) — Newton's rings why centre dark [5]

Setup lens $R$ on flat glass, air film thickness $t=r^2/2R$, interference in reflected light: path $2\mu t\cos r + \lambda/2$ (phase change at top of air film reflection from glass? Actually air→glass reflection gets $\lambda/2$). At centre $t=0$, path $=\lambda/2$ → destructive → dark. In transmitted centre bright.

### 2021 Q6(b) — Bright/dark fringe widths equal [5]

From $y_m = m\lambda D/a$ for bright ($m$), dark at $(m+½)\lambda D/a$. Separation between successive bright centres: $\Delta y = \lambda D/a$ = $\beta$. Successive dark also $\beta$. Distance between bright and adjacent dark $=\beta/2$. So equal.

### 2021 Q6(c) — Newton's rings D15=0.59cm D5=0.336cm R=100cm [4]

Formula $D_m^2 =4m\lambda R$ (if centre dark $m$). But difference method eliminates zero error: $\lambda = (D_m^2-D_n^2)/4(m-n)R$. $D_{15}^2-D_5^2 =0.3481-0.1129=0.2352$ cm² $=2.352×10^{-5}$ m². $4(m-n)R=4×10×1=40$ m. Wait convert cm to m: $R=1$m. $D$ in m: $0.0059$ & $0.00336$ → $D^2$ diff $=2.352×10^{-5}$. Divide by $40$ → $\lambda=5.88×10^{-7}$m $=5880$Å $≈588$nm. Matches sodium.

### 2021 Q7(a) — Polarization, double refraction, Nicol [3]

- **Polarization:** Restricting vibrations to one plane perpendicular to propagation.
- **Double refraction (birefringence):** Uniaxial crystal splits into $o$ (ordinary, $\mu_o$ constant) and $e$ (extraordinary, $\mu_e$ varies).
- **Nicol prism:** Calcite prism cut and cemented with Canada balsam to transmit only $e$-ray (polarized), $o$-ray total-internally reflected.

### 2021 Q7(c) — Refraction angle at Brewster, μ=1.25 [4]

$\tan\theta_p =\mu=1.25$ → $\theta_p=51.34^{\circ}$. At Brewster, $r=90^{\circ}-\theta_p=38.66^{\circ}$. So refraction angle $≈38.7^{\circ}$.

### 2023 Q2(a) — Polarized vs unpolarized [4]

**Unpolarized:** Vibrations random in all planes ⊥ propagation (ordinary light). **Polarized:** Vibrations confined to single plane (plane-polarized), or circular/elliptical. Polarized has directional intensity variation through analyzer (Malus), unpolarized uniform.

### 2023 Q2(b) — Prove $r_m∝\sqrt{\lambda}$ [6]

Dark $r_m=\sqrt{m\lambda R}$ → for fixed $m,R$, $r_m∝\sqrt{\lambda}$. Derive as in 2021 Q6(a): $2t=m\lambda$, $t=r_m^2/2R$.

### 2023 Q2(c) — Newton's rings D8=0.4cm D3=0.2cm R=101cm [4]

$D_8^2-D_3^2=0.16-0.04=0.12$ cm² $=1.2×10^{-5}$ m². $(m-n)=5$, $R=1.01$m. $\lambda=(1.2×10^{-5})/(4×5×1.01)=5.94×10^{-7}$m $≈594$nm. Similar.

### 2023 Q4(a) — Prove fringe width λD/a [5]

Derivation: Slits $S_1,S_2$ separation $a$, screen $D$, point $P$ at $y$. Path diff $\Delta = S_2P - S_1P ≈ a y /D$ (if $D≫a$). Bright $Δ=mλ$ → $y_m=mλD/a$, fringe width $\beta=y_{m+1}-y_m=λD/a$.

### 2023 Q4(b) — Fresnel Biprism + Fresnel vs Fraunhofer [6]

- **Fresnel biprism:** Obtuse prism ($≈179^{\circ}$) refracts single slit into two virtual coherent sources $S_1,S_2$, interference observed, used to find $λ$ via $λ=βa/D$.
- **Fresnel diffraction:** Near-field, spherical wavefront, no lens, pattern changes with distance.
- **Fraunhofer:** Far-field, plane wavefront, lens focuses, angular pattern (grating). Tabular difference.

### 2023 Q4(c) — Sodium 589nm 0.8m fringes 0.35cm apart [3]

$\lambda=589$nm $=5.89×10^{-7}$m, $D=0.8$m, $\beta=0.35$cm $=3.5×10^{-3}$m. $a=λD/β=5.89×10^{-7}×0.8/3.5×10^{-3}=1.346×10^{-4}$m $=0.135$mm.

