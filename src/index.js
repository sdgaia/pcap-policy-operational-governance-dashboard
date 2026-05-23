import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

function gauge(title,value,status,color){
return `
<div class="card gauge-card">
<h3>${title}</h3>
<div class="gauge-wrap">
<div class="gauge">
<div class="gauge-inner"></div>
<div class="needle" style="transform: rotate(${(-90 + (value*1.8))}deg)"></div>
<div class="hub"></div>
<div class="value" style="color:${color}">${value}%</div>
<div class="status" style="color:${color}">${status}</div>
</div>
</div>
<div class="scale"><span>0%</span><span>100%</span></div>
</div>`;
}

app.get('/', async (req,res)=>{

const html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>PCAP Policy Operational Governance Dashboard</title>
<style>
*{box-sizing:border-box}
body{margin:0;padding:18px;font-family:Arial,sans-serif;background:#f4f6fb;color:#0f172a}
.wrapper{max-width:1550px;margin:auto}
.card{background:white;border-radius:14px;padding:18px;border:1px solid #e2e8f0;box-shadow:0 1px 6px rgba(0,0,0,0.05)}
.header{margin-bottom:16px}.title{font-size:36px;font-weight:900;margin-top:6px}.sub{color:#64748b;margin-top:8px}
.meta{display:flex;gap:18px;flex-wrap:wrap;margin-top:12px;font-size:14px;font-weight:700}
.grid-5{display:grid;grid-template-columns:repeat(5,1fr);gap:14px;margin-bottom:16px}
.grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:16px}
.grid-2{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:16px}
.gauge-card{min-height:210px}.gauge-wrap{height:120px;display:flex;justify-content:center;align-items:flex-end;overflow:hidden}
.gauge{position:relative;width:220px;height:110px;border-radius:220px 220px 0 0;background:conic-gradient(from 270deg,#dc2626 0 45deg,#f97316 45deg 72deg,#2563eb 72deg 144deg,#16a34a 144deg 180deg,#e5e7eb 180deg)}
.gauge-inner{position:absolute;left:34px;top:34px;width:152px;height:76px;background:white;border-radius:152px 152px 0 0}
.needle{position:absolute;left:108px;bottom:0;width:4px;height:82px;background:#111827;transform-origin:bottom center;z-index:5}
.hub{position:absolute;left:98px;bottom:-10px;width:24px;height:24px;border-radius:50%;background:#111827;border:5px solid white;z-index:6}
.value{position:absolute;left:0;right:0;bottom:26px;text-align:center;font-size:34px;font-weight:900;z-index:8}
.status{position:absolute;left:0;right:0;bottom:8px;text-align:center;font-size:12px;font-weight:900;z-index:8}
.scale{display:flex;justify-content:space-between;font-size:12px;color:#64748b;margin-top:4px}.assessment{background:linear-gradient(135deg,#f8fafc,#eff6ff)}
.metric{font-size:32px;font-weight:900;margin:8px 0}.mini{background:white;border:1px solid #dbeafe;border-radius:10px;padding:12px}
.tag{display:inline-block;padding:6px 10px;border-radius:999px;background:#f8fafc;border:1px solid #e2e8f0;font-size:12px;font-weight:800;margin-right:6px;margin-top:6px}
.bar-row{display:grid;grid-template-columns:230px 1fr 60px;gap:12px;align-items:center;margin:12px 0}.track{height:10px;background:#e5e7eb;border-radius:999px;overflow:hidden}.fill{height:100%;border-radius:999px}
.box{padding:12px;border:1px solid #e2e8f0;border-radius:10px;margin-bottom:10px;background:#fff}.weak{padding:12px;border-radius:10px;border:1px solid #fecaca;background:#fff1f2;color:#b91c1c;font-weight:900;margin-top:12px}
.exposure-card{background:#fff7ed;border:1px solid #fed7aa;margin-bottom:16px}.exposure-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.exposure-item{background:white;border:1px solid #fed7aa;border-radius:10px;padding:12px}.label{display:block;color:#64748b;font-size:12px;font-weight:800}.exposure-value{font-size:22px;font-weight:900;margin-top:6px}.strong{color:#16a34a}.moderate{color:#2563eb}.fragile{color:#f97316}.critical{color:#dc2626}
@media(max-width:1100px){.grid-5,.grid-3,.grid-2,.exposure-grid{grid-template-columns:1fr}}
</style>
</head>
<body>
<div class="wrapper">

<div class="card header">
<div><b>⚙️ Policy Operational Governance Dashboard</b></div>
<div class="title">National Agroecology Transition Policy</div>
<div class="sub">Operational Governance • Execution Architecture • Trigger & Monitoring Logic</div>
<div class="meta"><span>🏷️ Agriculture Policy</span><span>🇬🇭 Ghana</span><span>🏛️ MoFA</span><span>📄 POL-1</span></div>
</div>

<div class="grid-5">
${gauge('Policy Operational Governance Score',74,'Moderate','#2563eb')}
${gauge('Governance Drift',18,'Low Drift','#16a34a')}
${gauge('Monitoring Reliability',64,'Moderate','#2563eb')}
${gauge('Escalation Readiness',58,'Fragile','#f97316')}
${gauge('Traceability Integrity',82,'Strong','#16a34a')}
</div>

<div class="card assessment">
<h2>⚙️ Overall Policy-Level Governance Assessment</h2>
<div class="grid-3">
<div class="mini"><div>⚙️ Policy Operational Governance</div><div class="metric" style="color:#2563eb">74%</div>Moderate</div>
<div class="mini"><div>🧠 Governance Intelligence Alignment</div><div class="metric" style="color:#16a34a">79%</div>Strong</div>
<div class="mini"><div>⚖️ Strategic–Operational Gap</div><div class="metric">5%</div>🟢 Aligned</div>
</div>
<p><b>✅ Operationally Stable Policy System</b></p>
<p>The policy demonstrates operational coherence with stable traceability and moderate escalation readiness across implementation structures.</p>
<div><span class="tag">🟢 Stable execution</span><span class="tag">🔵 Monitoring continuity</span><span class="tag">🟠 Escalation exposure</span><span class="tag">📄 Traceable governance</span></div>
</div>

<div class="grid-2">
<div class="card">
<h2>Policy Operational Governance Components</h2>
<div class="bar-row"><div><b>C1 Policy Alignment</b></div><div class="track"><div class="fill" style="width:88%;background:#16a34a"></div></div><div><b>88%</b></div></div>
<div class="bar-row"><div><b>C2 Instrument Embedding</b></div><div class="track"><div class="fill" style="width:82%;background:#16a34a"></div></div><div><b>82%</b></div></div>
<div class="bar-row"><div><b>C3 Resource Governance</b></div><div class="track"><div class="fill" style="width:70%;background:#2563eb"></div></div><div><b>70%</b></div></div>
<div class="bar-row"><div><b>C4 Monitoring System</b></div><div class="track"><div class="fill" style="width:64%;background:#2563eb"></div></div><div><b>64%</b></div></div>
<div class="bar-row"><div><b>C5 Trigger & Escalation</b></div><div class="track"><div class="fill" style="width:58%;background:#f97316"></div></div><div><b>58%</b></div></div>
<div class="bar-row"><div><b>C6 Traceability</b></div><div class="track"><div class="fill" style="width:82%;background:#16a34a"></div></div><div><b>82%</b></div></div>
<div class="weak">Weakest Operational Layer — C5 Trigger & Escalation — 58%</div>
</div>

<div class="card">
<h2>Operational Governance Layer</h2>
<div class="box"><b>Execution Stability</b><br>Operational delivery remains stable across programme translation layers.</div>
<div class="box"><b>Monitoring Exposure</b><br>Monitoring continuity is partially dependent on programme reporting discipline.</div>
<div class="box"><b>Escalation Risk</b><br>Escalation closure protocols remain unevenly activated.</div>
<div class="box"><b>Traceability Integrity</b><br>Operational records and closure evidence remain broadly auditable.</div>
</div>
</div>

<div class="grid-3">
<div class="card"><h2>Operational Mapping Chain</h2><div class="box">🏛️ National Strategy</div><div class="box">📄 Policy Layer</div><div class="box">📦 Programme Layer</div><div class="box">⚙️ Action Layer</div></div>
<div class="card">${gauge('Governance Certification Readiness',76,'Moderate','#2563eb')}</div>
<div class="card"><h2>Escalation Signals</h2><div class="box"><b>Strongest escalation closure</b><br>PRG-2 Circular Food Systems — 74%</div><div class="box"><b>Weakest escalation closure</b><br>PRG-5 Rural Water Access — 49%</div><span class="tag">🟠 Escalation propagation risk</span></div>
</div>

<div class="card exposure-card">
<h2>⚠️ Operational Governance Exposure</h2>
<div class="exposure-grid">
<div class="exposure-item"><span class="label">Monitoring Dependency</span><div class="exposure-value moderate">Moderate</div></div>
<div class="exposure-item"><span class="label">Escalation Bottleneck</span><div class="exposure-value fragile">Medium Risk</div></div>
<div class="exposure-item"><span class="label">Operational Continuity</span><div class="exposure-value strong">Stable</div></div>
<div class="exposure-item"><span class="label">Reporting Stability</span><div class="exposure-value moderate">Moderate</div></div>
</div>
<div><span class="tag">⚙️ Execution layer only</span><span class="tag">📊 Monitoring dependency</span><span class="tag">🚨 Escalation bottleneck</span><span class="tag">🧾 Closure evidence</span></div>
</div>

<div class="grid-2">
<div class="card"><h2>Operational Propagation Benchmarking</h2><div class="box">PRG-1 Agroecology Pilot — 78% — Moderate</div><div class="box">PRG-2 Circular Food Systems — 81% — Strong</div><div class="box">PRG-3 Nutrition & Youth — 55% — Fragile</div></div>
<div class="card"><h2>Operational Governance Synthesis</h2><div class="box"><b>Executive Summary</b><br>The policy demonstrates operational coherence with moderate escalation discipline and strong operational traceability.</div><div class="box"><b>Certification Outlook</b><br>Governance certification remains feasible subject to stronger escalation closure protocols.</div><div class="box"><b>Reviewer Focus</b><br>Review escalation continuity, monitoring evidence sufficiency and operational closure mechanisms.</div><div class="box"><b>Top Operational Strengths</b><br>✅ Strong policy alignment<br>✅ Stable execution continuity<br>✅ Robust operational governance</div><div class="box"><b>Key Operational Gaps</b><br>⚠️ Weak escalation activation<br>⚠️ Monitoring propagation gaps<br>⚠️ Uneven closure traceability</div></div>
</div>

</div>
</body>
</html>`;

res.send(html);
});

app.listen(port,()=>{console.log(`POG dashboard running on ${port}`)});
