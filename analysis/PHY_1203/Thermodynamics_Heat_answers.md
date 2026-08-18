# Thermodynamics & Heat — Answers (Previous-Year Questions Only)

> Concise physics answers with LaTeX. Marks correspond to depth expected.

---

### 2020 Q1(a) — Entropy [3] — entropy increase in irreversible

**Entropy:** State function $S$, $dS = dQ_{rev}/T$. Measure of disorder / unavailable energy. For reversible infinitesimal: $dS = \delta Q_{rev}/T$.

**Prove increases in irreversible:** Clausius inequality: $\oint \delta Q/T \le 0$, equality only for reversible. For isolated system ($\delta Q=0$), $dS \ge 0$. Alternatively: two reservoirs $T_H>T_C$, heat $Q$ flows irreversibly from $H$ to $C$: $\Delta S = -Q/T_H + Q/T_C = Q(1/T_C-1/T_H)>0$. In general $dS_{irr}=dS_{rev}+dS_{gen}$, $dS_{gen}>0$. Example: free expansion, heat conduction, friction all generate entropy. Hence irreversible → $S$ increases; reversible → $dS_{gen}=0$.

### 2020 Q1(b) — Adiabatic conditions + $TV^{\gamma-1}$ [7]

**Adiabatic:** $dQ=0$, thermally isolated, no heat exchange. Conditions: (i) perfectly insulated walls, (ii) process rapid (no time for heat flow) or very slow but insulated, (iii) $PV^{\gamma}=const$ holds for reversible quasi-static adiabatic of ideal gas.

**Prove $TV^{\gamma-1}=const$:** First law: $dU = dQ - dW = -PdV$ (adiabatic). For ideal gas $dU = C_v dT$, $PV=RT$ (per mole). So $C_v dT = -RT/V \,dV$. Divide by $T$: $C_v dT/T = -R dV/V$. Integrate: $C_v\ln T + R\ln V = const$. $R=C_p-C_v$, so $C_v\ln T + (C_p-C_v)\ln V = const$ → $\ln T + (\gamma-1)\ln V = const$ where $\gamma=C_p/C_v$. Hence $T V^{\gamma-1}=const$. Also $P V^{\gamma}=const$ via $T=PV/R$.

### 2020 Q1(c) — Adiabatic expansion double volume [4]

$T_1=0^{\circ}C=273$ K, $V_2=2V_1$, adiabatic: $T_1 V_1^{\gamma-1}=T_2 V_2^{\gamma-1}$ → $T_2 = T_1 (V_1/V_2)^{\gamma-1}=273\times (1/2)^{0.4}$. $2^{0.4}=e^{0.4\ln2}=e^{0.277}=1.319$. So $T_2=273/1.319≈207$ K = $-66^{\circ}C$. Large cooling on adiabatic expansion.

### 2020 Q2(a) — First law, $dw=PdV$ [3]

**First law:** $\Delta U = Q - W$ (physics sign: $W$ done by system) or $dQ=dU+dW$. Energy conservation including heat. $U$ is state function.

**Show $dW=PdV$:** Reversible quasi-static: force $F=PA$, displacement $dx$, work $dW = Fdx = PA\,dx = P\,dV$ (work done by gas). For finite: $W=\int_{V_1}^{V_2} P\,dV$ (area under $P-V$). For irreversible against constant external $P_{ext}$, $W=P_{ext}\Delta V$.

### 2020 Q2(b) — Carnot cycle + efficiency [7]

Cycle of two isotherms + two adiabats (reversible):
1. Isothermal expansion at $T_H$: $A\to B$, absorbs $Q_H=nRT_H\ln(V_B/V_A)$, $\Delta U=0$.
2. Adiabatic expansion $B\to C$: $T_H\to T_C$, $Q=0$, work done, $T_H V_B^{\gamma-1}=T_C V_C^{\gamma-1}$.
3. Isothermal compression at $T_C$: $C\to D$, rejects $Q_C=nRT_C\ln(V_C/V_D)$.
4. Adiabatic compression $D\to A$: returns to start, $T_C V_D^{\gamma-1}=T_H V_A^{\gamma-1}$.

Net work $W=Q_H-Q_C$. Efficiency $\eta = W/Q_H = 1 - Q_C/Q_H = 1 - T_C/T_H$ (Kelvin). Independent of substance. No engine can exceed this.

### 2020 Q2(c) — Isothermal compression work of H₂ [4]

$m=40$ g, $M=2$ g/mol → $n=20$ mol. $T=27^{\circ}C=300$ K. Isothermal work **on** gas: $W = nRT\ln(V_2/V_1)=nRT\ln(1/4)= -nRT\ln4$. Magnitude $ |W| =20×8.4×300×1.386=69,854$ J ≈ $6.99×10^4$ J. Sign: work done **on** system positive if defining $W_{on}$; work done **by** system $W_{by}=-6.99×10^4$ J (negative, compression). If using cgs $R$ must convert.

### 2021 Q1(a) — Entropy constant in reversible [3]

Reversible: $dS = dQ_{rev}/T$, for cycle $\oint dQ_{rev}/T=0$ → $S$ is state function. Over reversible cycle net $\Delta S=0$. For isolated reversible adiabatic $dQ_{rev}=0$ → $dS=0$.

### 2021 Q1(b) — $PV^{\gamma}=const$ [7]

Same derivation as 2020 Q1(b) but eliminating $T$: from $C_v dT = -PdV$ and $PdV+VdP=RdT$, solve to get $dP/P +\gamma dV/V=0$ → $\ln P +\gamma\ln V=const$ → $PV^{\gamma}=const$.

### 2021 Q1(c) — Tyre burst at 25°C, 2 atm [4]

Adiabatic: $T_1=298$ K, $P_1=2$ atm → $P_2=1$ atm. Relation $T_2/T_1 = (P_2/P_1)^{(\gamma-1)/\gamma}= (1/2)^{0.2857}$. $0.5^{0.2857}=e^{-0.2857\ln2}=e^{-0.198}=0.820$. $T_2=298×0.820=244$ K $= -29^{\circ}C$. Drop ≈ $54$ K. If question asks resulting temperature ≈ 244 K.

### 2021 Q2(a) — Degrees of freedom & 2nd law [3]

**Degrees of freedom:** Independent coordinates/modes to specify energy state; equipartition: each quadratic DOF contributes $\tfrac12 kT$. Monoatomic $f=3$, diatomic $f=5$ ( +2 rotational), etc. $C_v=fR/2$.

**2nd law:** Several forms: Kelvin: no cyclic engine converts heat fully to work without temp difference. Clausius: heat doesn't flow cold→hot spontaneously without work. Entropy form: $dS\ge0$ for isolated system.

### 2021 Q2(b) — Work adiabatic & isothermal [7]

Isothermal (reversible): $W_{by}=nRT\ln(V_2/V_1)=nRT\ln(P_1/P_2)$. Adiabatic: $W_{by}= (P_1V_1-P_2V_2)/(\gamma-1)= nR(T_1-T_2)/(\gamma-1)= nC_v(T_1-T_2)$. Derive as above: $W=-\Delta U = C_v(T_1-T_2)$ for adiabatic.

### 2021 Q2(c) — Carnot efficiency raise 50%→70% [4]

$T_1$ is **cold**? Text: "$T_1=7^{\circ}C$" likely $T_C=280$ K? Usually $T_1$ is sink (cold) or source ambiguous. Assume $T_C=7°C=280$ K, $\eta=1-T_C/T_H=0.5$ → $T_H=560$ K. Want $0.7=1-280/T_H'$ → $T_H'=933$ K. Increase $373$ K. If $T_1$ is hot ($T_H=280$ K unrealistically low) then $T_C=140$ K, to get 70% need $T_H'=467$ K increase $187$ K. Mark answer both interpretations: most plausible textbook expects $T_{sink}=280$K increase hot by ~ $373$ K ($\approx373^{\circ}C$).

### 2022 Q1(a) — First & second laws [3]

As above: 1st: energy conservation $dQ=dU+PdV$. 2nd: entropy/ directionality; impossible to have 100% efficient cycle.

### 2022 Q1(b) — Isothermal vs adiabatic + PV^γ proof [7]

**Isothermal:** $dT=0$, $PV=const$, slow conduction, hyperbolic $P-V$. **Adiabatic:** $dQ=0$, $PV^{\gamma}=const$, steeper, temp changes. Proof as in 2021 Q1(b).

### 2022 Q1(c) — Sudden compression to half volume [4]

$T_1=300$K, $V_2=V_1/2$, $\gamma=1.4$. $T_2=T_1 2^{\gamma-1}=300×2^{0.4}=300×1.319=396$K ($123^{\circ}C$). Pressure: $P_2=P_1 2^{\gamma}=1×2^{1.4}=2.638$ atm. If adiabatic reversible; sudden ≈ adiabatic.

### 2022 Q2(a) — Γ times steeper [3]

Isothermal: $P= C/V$ → slope $dP/dV = -P/V$. Adiabatic: $P= K/V^{\gamma}$ → $dP/dV= -\gamma P/V = \gamma$ × isothermal slope. Hence steeper.

### 2022 Q2(b) — Carnot cycle [7]

Same as 2020 Q2(b).

### 2022 Q2(c) — Molecular KE of 1 gm H₂ at 50°C [4]

KE per mole = translational $\tfrac32 RT$. $T=323$K, $R=8.3×10^7$ ergs/mol·K = 8.3 J/mol·K. For 1 gm: $n=0.5$ mol. Energy $=n×\tfrac32 RT =0.5×1.5×8.3×10^7×323 ≈2.01×10^{10}$ ergs = $2.01×10^3$ J. If they want per molecule: $\tfrac32 kT$. Per gm: as above.

### 2022 Q7(c) / 2023 Q1(c) — Gas 80°C 50 atm expanded 10× adiabatically [3-4]

$T_1=353$K, $V_2=10V_1$, $T_2=T_1 10^{1-\gamma}=353×10^{-0.4}=353/2.512=141$K = $-132^{\circ}C$. Pressure $P_2=P_1 10^{-\gamma}=50×10^{-1.4}=50/25.12=1.99$ atm ≈ 2 atm. Same for 2023 Q1(c) identical numbers.

### 2023 Q1(a) — Irreversible + isothermal work [5]

**Irreversible:** No sequence of equilibrium states; hysteresis, finite gradients, entropy generation (e.g., free expansion). Isothermal work: $W= \int PdV = nRT\int dV/V = nRT\ln(V_2/V_1)$.

### 2023 Q1(b) — Entropy constant in reversible [6]

As 2020 Q1(a) reverse statement: For reversible cycle $\oint dQ/T=0$ → entropy state function. In reversible adiabatic $dQ=0$ → $dS=0$.

### 2023 Q3(a) — Joule's equivalent, thermodynamic functions, system, internal energy [4]

- **Joule's equivalent** $J= W/Q ≈4.18$ J/cal: mechanical work equivalent to heat.
- **Thermodynamic function:** state function (e.g., $U,S,H,G,F$), value depends only on state, exact differential.
- **Thermodynamic system:** part of universe under study (open/closed/isolated) + surroundings + boundary.
- **Internal energy $U$:** sum of molecular kinetic+potential energies; state function; $dU=C_v dT$ for ideal gas.

### 2023 Q3(b) — Entropy increase irreversible, constant reversible [6]

Same as combined: $dS = dQ_{rev}/T$, Clausius inequality gives $dS > dQ/T$ for irreversible, so over cycle entropy produced. Isolated irreversible $\Delta S>0$.

### 2023 Q3(c) — Tyre at 15°C burst [4]

$T_1=288$K, $P_1=2$→$P_2=1$, $T_2=288×0.820=236$K ($-37^{\circ}C$). Drop $\Delta T=52$K.

### 2023 Q7(b) — Degrees of freedom + $C_p-C_v=R$ [5]

**DOF:** $f$ = independent quadratic energy terms. For ideal gas $U= f/2 RT$ per mole → $C_v= (\partial U/\partial T)_V = fR/2$.

**Prove $C_p-C_v=R$:** Enthalpy $H=U+PV$, for ideal gas $PV=RT$. At constant $P$, $dQ_p = dU+PdV = C_v dT + R dT$ → $C_p dT = (C_v+R)dT$ → $C_p - C_v = R$ (per mole; for mass $m$, $c_p-c_v = R/M$).

