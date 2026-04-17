// ============ Shared site scripts ============

const BUILD_ID = '1776400815-28960d';
const TODAY = '2026-04-16';

// ---- Render shared header/footer/sprite ----
const SVG_SPRITE = `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
<symbol id="i-book" viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></symbol>
<symbol id="i-chart" viewBox="0 0 24 24"><path d="M3 3v18h18M7 15l4-4 4 4 6-6"/></symbol>
<symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></symbol>
<symbol id="i-calendar" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></symbol>
<symbol id="i-file" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></symbol>
<symbol id="i-alert" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4M12 17h.01"/></symbol>
<symbol id="i-siren" viewBox="0 0 24 24"><path d="M7 18v-6a5 5 0 1 1 10 0v6"/><path d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3H5z"/><path d="M21 12h1M18 5l1-1M3 12H2M6 5L5 4"/></symbol>
<symbol id="i-check" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></symbol>
<symbol id="i-x" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9l6 6"/></symbol>
<symbol id="i-flame" viewBox="0 0 24 24"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></symbol>
<symbol id="i-pin" viewBox="0 0 24 24"><path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z"/></symbol>
<symbol id="i-gift" viewBox="0 0 24 24"><path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></symbol>
<symbol id="i-lock" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></symbol>
<symbol id="i-download" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></symbol>
<symbol id="i-bulb" viewBox="0 0 24 24"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-7 7c0 3 2 5 3 6.5.5.75 1 1.5 1 2.5h6c0-1 .5-1.75 1-2.5 1-1.5 3-3.5 3-6.5a7 7 0 0 0-7-7z"/></symbol>
<symbol id="i-ban" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m5 5 14 14"/></symbol>
<symbol id="i-refresh" viewBox="0 0 24 24"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8M21 3v5h-5M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16M3 21v-5h5"/></symbol>
<symbol id="i-target" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></symbol>
<symbol id="i-edit" viewBox="0 0 24 24"><path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z"/></symbol>
<symbol id="i-users" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></symbol>
<symbol id="i-grad" viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></symbol>
<symbol id="i-mail" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></symbol>
<symbol id="i-phone" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></symbol>
<symbol id="i-hash" viewBox="0 0 24 24"><path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/></symbol>
<symbol id="i-play" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></symbol>
<symbol id="i-list" viewBox="0 0 24 24"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></symbol>
<symbol id="i-home" viewBox="0 0 24 24"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></symbol>
</defs></svg>`;

const NAV_ITEMS = [
  {href:'index.html', key:'home', label:'首页', icon:'i-home'},
  {href:'calendar.html', key:'calendar', label:'日历', icon:'i-calendar'},
  {href:'timeline.html', key:'timeline', label:'时间线', icon:'i-clock'},
  {href:'mba306.html', key:'mba306', label:'MBA306'},
  {href:'mba392.html', key:'mba392', label:'MBA392'},
  {href:'mba394.html', key:'mba394', label:'MBA394'},
  {href:'rules.html', key:'rules', label:'规则 & 下载', icon:'i-alert'},
];

function renderHeader(activeKey){
  const navHtml = NAV_ITEMS.map(n => {
    const iconHtml = n.icon ? `<svg class="icon"><use href="#${n.icon}"/></svg>` : '';
    const activeCls = n.key === activeKey ? ' class="active"' : '';
    return `<a href="${n.href}"${activeCls}>${iconHtml}${n.label}</a>`;
  }).join('');

  return `
    <div class="brand" onclick="location.href='index.html'" style="cursor:pointer">
      <svg class="icon xl"><use href="#i-grad"/></svg>
      <div>
        <h1>Humphreys MBA · Spring 2026</h1>
        <div class="meta">Qi Zhou · 11 周 (4/6 – 6/21) · <span id="buildTime">加载中</span> ·
          <a onclick="forceReload()"><svg class="icon"><use href="#i-refresh"/></svg>强制刷新</a>
        </div>
      </div>
    </div>
    <nav>${navHtml}</nav>
  `;
}

function renderFooter(){
  return `数据采集自 moodle.humphreys.edu · 2026-04-16 · Moodle iCal 33 事件 + 4 份 PDF · <a href="https://github.com/UKeming/hu-mba-sp26-a4106533" target="_blank">GitHub 源码</a>`;
}

// ---- Init on load ----
window.addEventListener('DOMContentLoaded', () => {
  // Inject SVG sprite
  document.body.insertAdjacentHTML('afterbegin', SVG_SPRITE);

  // Inject update banner
  document.body.insertAdjacentHTML('afterbegin',
    `<div id="updateBanner" onclick="forceReload()"><svg class="icon lg"><use href="#i-refresh"/></svg>检测到新版本 · 点击刷新</div>`);

  // Render header
  const header = document.querySelector('header');
  if (header) {
    const active = header.dataset.page || '';
    header.innerHTML = renderHeader(active);
  }

  // Render footer
  const footer = document.querySelector('footer');
  if (footer && !footer.innerHTML.trim()) footer.innerHTML = renderFooter();

  // Set build time
  const bt = document.getElementById('buildTime');
  if (bt) bt.textContent = '版本 ' + BUILD_ID.substring(0,7);

  // Checkbox persistence
  document.querySelectorAll('input[type=checkbox]').forEach(cb => {
    const key = 'hu-chk-' + (cb.id || cb.name || '');
    if (cb.id) {
      cb.checked = localStorage.getItem(key) === '1';
      cb.addEventListener('change', () => localStorage.setItem(key, cb.checked ? '1' : '0'));
    }
  });

  // Version check
  setTimeout(checkForUpdate, 5000);
  setInterval(checkForUpdate, 120000);
});

function forceReload(){
  if ('caches' in window) caches.keys().then(n => n.forEach(c => caches.delete(c)));
  location.reload(true);
}

async function checkForUpdate(){
  try {
    const r = await fetch('version.txt?_=' + Date.now(), {cache:'no-store'});
    if (!r.ok) return;
    const latest = (await r.text()).trim();
    if (latest && latest !== BUILD_ID) {
      const banner = document.getElementById('updateBanner');
      if (banner) banner.style.display = 'block';
    }
  } catch(e){}
}

// ============ Calendar data ============
const TAGS = {m306:'MBA306', m392:'MBA392', m394:'MBA394', gen:'通用'};
const EVENTS = [
  ['2026-04-12','23:59','m306','W1 Forum','Week 1 Forum（自我介绍）',false,true],
  ['2026-04-12','23:59','m394','DF Wk1 Algorithms','第一周例外，无需回复',false,true],
  ['2026-04-15','23:59','m306','W2 Forum 原帖','你 4/16 开了 "Week 2 Forum" thread，比老师规定 Wed 晚 1 天，系统 Sat 4/18 前完成',false,true],
  ['2026-04-16','23:59','m394','DF Wk2 原帖','你今天发了 "Week 2: Ethics" thread',false,true],
  ['2026-04-17','17:00','gen','Upload Presentation Slide','MBA April Week 1 小组 PPT',false,true],
  ['2026-04-18','23:59','m306','W2 Forum 回复','已发 2 条（Muzammil 和 Ruijie 的 threads）',false,true],
  ['2026-04-19','23:59','m306','W2 HW Q&P','Ch.1 Q1 + Technical Q1 + Ch.7 Q1–5',false,false],
  ['2026-04-19','23:59','m306','On-ground PPT','上传 Stockton 周末 PPT',false,true],
  ['2026-04-19','23:59','m394','On-Ground Submission','on-ground 周末作业',false,true],
  ['2026-04-19','23:59','m394','Assignment #1 Case Study','2 页双倍行距 · 文件名含 first+last name',false,false],
  ['2026-04-19','23:59','m394','DF Wk2 回复','2 条 · 每条 ≥ 2 段',false,false],
  ['2026-04-22','23:59','m306','W3 Forum 原帖','预计（Ch.8 Inflation）',false,false],
  ['2026-04-23','17:15','gen','Workshop: EBSCO','Extra Credit · Dr. Donna Roberts',false,false],
  ['2026-04-23','23:59','m394','DF Wk3 原帖','Privacy · 50 分 · 绝不迟交',false,false],
  ['2026-04-25','23:59','m306','W3 Forum 回复','预计 Sat 2 条回复',false,false],
  ['2026-04-26','23:59','m392','Paper #1 截止','1 篇 · 4.5+ 页 · .docx · Moodle 不提醒',true,false],
  ['2026-04-26','23:59','m306','W3 HW Ch.8','Ch.8 Conceptual Q1–4',false,false],
  ['2026-04-26','23:59','m394','Assignment #2 Exec Summary','2–3 页政策 paper',false,false],
  ['2026-04-26','23:59','m394','DF Wk3 回复','Privacy 2 条',false,false],
  ['2026-04-29','23:59','m306','W4 Forum 原帖','预计（Ch.14 Consumption）',false,false],
  ['2026-04-30','23:59','m394','DF Wk4 原帖','Power',false,false],
  ['2026-05-02','05:00','m394','Exam #1 opens','Sat 5AM → Sun 23:59 · closed-book',false,false],
  ['2026-05-02','23:59','m306','W4 Forum 回复','预计',false,false],
  ['2026-05-03','23:59','m394','Exam #1 closes','必须此前完成提交',true,false],
  ['2026-05-03','23:59','m306','W4 HW Ch.14','Ch.14 Q1–12',false,false],
  ['2026-05-03','23:59','m394','Assignment #3 Infographic','',false,false],
  ['2026-05-03','23:59','m394','DF Wk4 回复','',false,false],
  ['2026-05-06','23:59','m306','W5 Forum 原帖','预计',false,false],
  ['2026-05-07','17:15','gen','Workshop: Math','Prof. Castello · Extra Credit',false,false],
  ['2026-05-07','23:59','m394','DF Wk5 原帖','Fairness',false,false],
  ['2026-05-09','23:59','m306','W5 Forum 回复','预计',false,false],
  ['2026-05-10','23:59','m392','Paper #2 截止','另一门课 · 最后机会 · 错过 = No Credit',true,false],
  ['2026-05-10','23:59','m306','W5 HW','Case Study (Big Short video)',false,false],
  ['2026-05-10','23:59','m394','Slides Ch.5/6','10–15 张 slides (Part 1)',false,false],
  ['2026-05-10','23:59','m394','DF Wk5 回复','',false,false],
  ['2026-05-13','23:59','m306','W6 MIDTERM 周','Ch.1, 7, 8, 14 · 开卷',true,false],
  ['2026-05-14','23:59','m394','DF Wk6 原帖','Biases',false,false],
  ['2026-05-16','23:59','m306','W6 回复','',false,false],
  ['2026-05-17','23:59','m306','W6 Midterm 最后提交','预计周日',true,false],
  ['2026-05-17','23:59','m394','Assignment #4 Article Review','',false,false],
  ['2026-05-17','23:59','m394','DF Wk6 回复','',false,false],
  ['2026-05-20','23:59','m306','W7 Forum 原帖','Ch.16 Demand for Money',false,false],
  ['2026-05-21','17:15','gen','Workshop: Textbook','Prof. Julie Walker',false,false],
  ['2026-05-21','23:59','m394','DF Wk7 原帖','Metrics',false,false],
  ['2026-05-23','23:59','m306','W7 回复','',false,false],
  ['2026-05-24','23:59','m306','W7 HW Paper','Ch.16',false,false],
  ['2026-05-24','23:59','m394','Assignment #5 Email','',false,false],
  ['2026-05-24','23:59','m394','DF Wk7 回复','',false,false],
  ['2026-05-27','23:59','m306','W8 Forum 原帖','Ch.17 Fed, Money, Credit',false,false],
  ['2026-05-30','05:00','m394','Exam #2 opens','Sat 5AM → Sun 23:59',false,false],
  ['2026-05-30','23:59','m306','W8 回复','',false,false],
  ['2026-05-31','23:59','m394','Exam #2 closes','',true,false],
  ['2026-05-31','23:59','m306','W8 HW Paper','Ch.17',false,false],
  ['2026-05-31','23:59','m394','10-min Video Presentation','Zoom 录制',false,false],
  ['2026-06-03','23:59','m306','W9 Forum 原帖','Ch.20 National Debt',false,false],
  ['2026-06-04','17:15','gen','Workshop: AI Ethics','Dr. Donna Roberts · Extra Credit',false,false],
  ['2026-06-04','23:59','m394','DF Wk9 原帖','Social Media',false,false],
  ['2026-06-06','23:59','m306','W9 回复','',false,false],
  ['2026-06-07','23:59','m306','W9 HW Paper','Ch.20',false,false],
  ['2026-06-07','23:59','m394','Assignment #6 Blog','',false,false],
  ['2026-06-07','23:59','m394','DF Wk9 回复','',false,false],
  ['2026-06-10','23:59','m306','W10 Forum 原帖','Ch.21 Recession',false,false],
  ['2026-06-11','23:59','m394','DF Wk10 原帖','Top 3 Lessons',false,false],
  ['2026-06-13','23:59','m306','W10 回复','',false,false],
  ['2026-06-14','23:59','m306','W10 HW Paper','Ch.21',false,false],
  ['2026-06-14','23:59','m394','Assignment #7 Safeguard Data','',false,false],
  ['2026-06-14','23:59','m394','DF Wk10 回复','',false,false],
  ['2026-06-18','05:00','m394','Exam #3 opens','Thu 5AM → Fri 17:00',true,false],
  ['2026-06-18','23:59','m394','DF Wk11 原帖','只要原帖，无需回复',true,false],
  ['2026-06-19','16:59','gen','学期硬死线','Business Dept 不再接受 17:00 后提交',true,false]
];

function buildMonth(year, month){
  const firstDay = new Date(year, month-1, 1);
  const daysInMonth = new Date(year, month, 0).getDate();
  const startWeekday = firstDay.getDay();
  const monthNames = ['1 月','2 月','3 月','4 月','5 月','6 月','7 月','8 月','9 月','10 月','11 月','12 月'];

  let html = `<div class="cal-month"><div class="cal-title"><h4>${year} ${monthNames[month-1]}</h4></div><div class="cal-grid">`;
  ['日','一','二','三','四','五','六'].forEach(d => html += `<div class="cal-head">${d}</div>`);

  for (let i = 0; i < startWeekday; i++) {
    const prev = new Date(year, month-1, -startWeekday+1+i);
    html += `<div class="cal-day outside"><div class="dnum">${prev.getDate()}</div></div>`;
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const dstr = `${year}-${String(month).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const date = new Date(year, month-1, d);
    const isWeekend = date.getDay()===0 || date.getDay()===6;
    const isToday = dstr === TODAY;
    const dayEvents = EVENTS.filter(e => e[0] === dstr);
    let cls = 'cal-day';
    if (isWeekend) cls += ' weekend';
    if (isToday) cls += ' today';
    const todayIcon = isToday ? `<svg class="icon"><use href="#i-pin"/></svg>` : '';
    html += `<div class="${cls}"><div class="dnum">${d}${todayIcon}</div>`;
    dayEvents.forEach((e, idx) => {
      const evtId = `${dstr}-${idx}`;
      const dataDone = e[6] === true;
      const userDone = localStorage.getItem('hu-done-' + evtId) === '1';
      const isDone = dataDone || userDone;
      const urgentCls = e[5] && !isDone ? ' urgent' : '';
      const doneCls = isDone ? ' done' : '';
      html += `<span class="cal-evt ${e[2]}${urgentCls}${doneCls}" onclick="showEvent('${evtId}')" title="${e[1]} ${e[3]}">${e[3]}</span>`;
    });
    html += `</div>`;
  }

  const total = startWeekday + daysInMonth;
  const trailing = (7 - (total % 7)) % 7;
  for (let i = 1; i <= trailing; i++) {
    html += `<div class="cal-day outside"><div class="dnum">${i}</div></div>`;
  }
  html += `</div></div>`;
  return html;
}

function showEvent(id){
  const date = id.substring(0,10), idx = parseInt(id.substring(11));
  const dayEvents = EVENTS.filter(e => e[0] === date);
  const e = dayEvents[idx];
  const [d, time, tag, title, desc, urgent, dataDone] = e;
  const userDone = localStorage.getItem('hu-done-' + id) === '1';
  const isDone = dataDone || userDone;
  const weekDay = ['周日','周一','周二','周三','周四','周五','周六'][new Date(d).getUTCDay()];
  const doneLabel = isDone ? ' · <span style="color:var(--ok)">已完成</span>' : '';

  document.getElementById('calModalContent').innerHTML = `
    <div style="color:var(--muted);font-size:12px">${d} (${weekDay}) ${time} PDT · ${TAGS[tag]}${doneLabel}</div>
    <h3 style="margin:10px 0 6px;${isDone?'text-decoration:line-through;opacity:.6;':''}color:${urgent && !isDone?'var(--danger)':'var(--text)'}">${title}</h3>
    <div style="font-size:14px;line-height:1.6;color:var(--text2)">${desc || '（无详情）'}</div>
    ${dataDone ? '<div style="margin-top:18px;padding:10px 14px;background:rgba(110,227,165,.08);border-radius:6px;font-size:12px;color:var(--ok);display:flex;align-items:center;gap:8px"><svg class="icon"><use href="#i-check"/></svg> 已从 Moodle 验证完成（2026-04-16 21:05 PDT）</div>' : `
      <div style="margin-top:18px">
        <button onclick="toggleDone('${id}')" style="background:var(--panel3);border:1px solid var(--line2);color:var(--text);padding:9px 18px;border-radius:8px;cursor:pointer;font-size:13px;font-weight:500">
          ${userDone ? '标记为未完成' : '标记为已完成'}
        </button>
      </div>`}
  `;
  document.getElementById('calModal').classList.add('show');
}

function toggleDone(id){
  const cur = localStorage.getItem('hu-done-' + id) === '1';
  if (cur) localStorage.removeItem('hu-done-' + id);
  else localStorage.setItem('hu-done-' + id, '1');
  document.getElementById('calModal').classList.remove('show');
  if (typeof renderCalendar === 'function') renderCalendar();
}

function renderCalendar(){
  const el = document.getElementById('month-grid');
  if (el) el.innerHTML = buildMonth(2026,4) + buildMonth(2026,5) + buildMonth(2026,6);
}
