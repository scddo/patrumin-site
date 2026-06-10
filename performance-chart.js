// ── Patrumin interactive composite performance chart ───────────────────────
// Requires Chart.js 4 and performance-chart-data.js (PERF_STRATEGIES / PERF_BENCHMARKS)

(function () {
  const canvas = document.getElementById("perf-canvas");
  if (!canvas || typeof Chart === "undefined") return;

  const COLORS = {
    patrumin: "#5da522",
    sp500: "#2b3137",
    r2000: "#9aa1a6"
  };
  const END_YEAR = 2024;

  let state = {
    strategy: "smallcap",
    view: "growth", // "growth" | "annual"
    bench: { sp500: false, r2000: true }
  };

  const fmtMoney = (v) => "$" + Math.round(v).toLocaleString("en-US");
  const fmtPct = (v) => (v >= 0 ? "+" : "") + v.toFixed(1) + "%";

  // Growth of $10,000 from Jan of the first full calendar year
  function buildGrowth(s) {
    const labels = ["Dec " + (s.firstFullYear - 1)];
    const comp = [10000];
    let v = 10000;
    const MON = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    for (const [d, r] of s.monthly) {
      const yr = +d.slice(0, 4);
      if (yr < s.firstFullYear) continue;
      v *= 1 + r;
      labels.push(MON[+d.slice(5) - 1] + " " + yr);
      comp.push(v);
    }
    return { labels, comp };
  }

  function buildBenchGrowth(s, benchKey, labels) {
    const b = PERF_BENCHMARKS[benchKey].annual;
    const out = new Array(labels.length).fill(null);
    out[0] = 10000;
    let v = 10000;
    for (let yr = s.firstFullYear; yr <= END_YEAR; yr++) {
      if (b[yr] == null) continue;
      v *= 1 + b[yr] / 100;
      const i = labels.indexOf("Dec " + yr);
      if (i !== -1) out[i] = v;
    }
    return out;
  }

  function render() {
    const s = PERF_STRATEGIES[state.strategy];
    const datasets = [];
    let labels;

    if (state.view === "growth") {
      const g = buildGrowth(s);
      labels = g.labels;
      datasets.push({
        label: "Patrumin " + s.label + " Composite",
        data: g.comp,
        borderColor: COLORS.patrumin,
        backgroundColor: "rgba(93,165,34,0.08)",
        borderWidth: 2.5,
        pointRadius: 0,
        pointHitRadius: 8,
        fill: true,
        tension: 0.15
      });
      for (const key of ["sp500", "r2000"]) {
        if (!state.bench[key]) continue;
        datasets.push({
          label: PERF_BENCHMARKS[key].label + " — plotted annually",
          data: buildBenchGrowth(s, key, labels),
          borderColor: COLORS[key],
          borderWidth: 1.8,
          borderDash: [6, 5],
          pointRadius: 3,
          pointBackgroundColor: COLORS[key],
          spanGaps: true,
          fill: false,
          tension: 0
        });
      }
    } else {
      // Annual returns
      const years = [];
      for (let yr = s.inceptionYear; yr <= END_YEAR; yr++) years.push(yr);
      labels = years.map((yr) => (yr === s.inceptionYear && s.inception.indexOf("Jan") !== 0 ? yr + "*" : "" + yr));
      datasets.push({
        label: "Patrumin " + s.label + " Composite",
        data: years.map((yr) => s.annual[yr] != null ? s.annual[yr] * 100 : null),
        backgroundColor: COLORS.patrumin,
        borderRadius: 3
      });
      for (const key of ["sp500", "r2000"]) {
        if (!state.bench[key]) continue;
        datasets.push({
          label: PERF_BENCHMARKS[key].label,
          // no benchmark bar for the composite's partial inception year
          data: years.map((yr) => (yr < s.firstFullYear ? null : PERF_BENCHMARKS[key].annual[yr] ?? null)),
          backgroundColor: COLORS[key],
          borderRadius: 3
        });
      }
    }

    if (window.perfChart) window.perfChart.destroy();
    const isGrowth = state.view === "growth";
    window.perfChart = new Chart(canvas, {
      type: isGrowth ? "line" : "bar",
      data: { labels, datasets },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? false : { duration: 500 },
        interaction: { mode: "index", intersect: false },
        plugins: {
          legend: { labels: { font: { family: "Georgia, serif", size: 12 }, boxWidth: 18 } },
          tooltip: {
            callbacks: {
              label: (ctx) => ctx.dataset.label.replace(" — plotted annually", "") + ": " +
                (isGrowth ? fmtMoney(ctx.parsed.y) : fmtPct(ctx.parsed.y))
            }
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: isGrowth
              ? {
                  autoSkip: false,
                  maxRotation: 0,
                  callback: function (val) {
                    const l = this.getLabelForValue(val);
                    return l.indexOf("Jan ") === 0 ? l.slice(4) : null;
                  }
                }
              : { maxRotation: 0 }
          },
          y: {
            grid: { color: "rgba(0,0,0,0.06)" },
            ticks: { callback: (v) => (isGrowth ? fmtMoney(v) : v + "%") }
          }
        }
      }
    });

    updateSummary(s);
  }

  function updateSummary(s) {
    const el = document.getElementById("perf-summary");
    if (!el) return;
    const g = buildGrowth(s);
    const end = g.comp[g.comp.length - 1];
    let txt = "Growth of $10,000 invested in the " + s.label + " Composite from Jan " +
      s.firstFullYear + " through Dec " + END_YEAR + ": " + fmtMoney(end);
    for (const key of ["sp500", "r2000"]) {
      if (!state.bench[key]) continue;
      const bg = buildBenchGrowth(s, key, g.labels);
      let last = null;
      for (const v of bg) if (v != null) last = v;
      if (last != null) txt += " · " + PERF_BENCHMARKS[key].label.replace(" (Total Return)", "") + ": " + fmtMoney(last);
    }
    el.textContent = txt + ".";
  }

  // ── Controls ──
  document.querySelectorAll(".perf-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.strategy = btn.dataset.strategy;
      state.bench = { sp500: false, r2000: false };
      state.bench[PERF_STRATEGIES[state.strategy].defaultBench] = true;
      document.querySelectorAll(".perf-tab").forEach((b) => b.classList.toggle("is-active", b === btn));
      syncBenchBoxes();
      render();
    });
  });

  document.querySelectorAll(".perf-view").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.view = btn.dataset.view;
      document.querySelectorAll(".perf-view").forEach((b) => b.classList.toggle("is-active", b === btn));
      render();
    });
  });

  document.querySelectorAll(".perf-bench input").forEach((box) => {
    box.addEventListener("change", () => {
      state.bench[box.value] = box.checked;
      render();
    });
  });

  function syncBenchBoxes() {
    document.querySelectorAll(".perf-bench input").forEach((box) => {
      box.checked = !!state.bench[box.value];
    });
  }

  syncBenchBoxes();
  render();
})();
