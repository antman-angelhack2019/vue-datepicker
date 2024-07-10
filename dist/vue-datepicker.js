import { openBlock as $, createElementBlock as G, createElementVNode as ye, unref as r, reactive as Qt, computed as X, ref as ae, toRef as Ut, watch as tt, defineComponent as Le, onMounted as We, onUnmounted as ua, renderSlot as ie, normalizeProps as Ne, mergeProps as Ee, Fragment as ke, normalizeStyle as et, createCommentVNode as x, createTextVNode as ct, toDisplayString as Ve, onBeforeUpdate as Un, nextTick as xe, normalizeClass as we, withModifiers as Wt, renderList as Pe, withDirectives as na, vShow as la, createBlock as Me, withCtx as he, withKeys as Wn, createVNode as at, Transition as Nt, createSlots as Ue, useSlots as Pt, guardReactiveProps as Qe, resolveDynamicComponent as ia, h as jn, render as Za, getCurrentScope as Kn, onScopeDispose as Gn, isRef as xa, Teleport as Qn } from "vue";
import { format as ut, isEqual as _t, set as Te, startOfMonth as qn, isAfter as Ot, getYear as ge, getMonth as be, setMonth as Xn, setYear as st, addMonths as At, subMonths as jt, isValid as ra, isBefore as Kt, eachDayOfInterval as vn, setHours as Jn, setMinutes as Zn, setSeconds as mn, setMilliseconds as gn, getHours as ft, getMinutes as ht, getSeconds as Bt, startOfWeek as Fa, endOfWeek as yn, parse as Ia, isDate as xn, addHours as el, addYears as pn, subYears as hn, endOfYear as bn, startOfYear as oa, differenceInYears as tl, add as kn, sub as al, getWeek as nl, getISOWeek as ll, addDays as $t, isSameQuarter as en, eachQuarterOfInterval as rl, startOfQuarter as ol, endOfQuarter as tn, getQuarter as an, getDay as sl, differenceInCalendarDays as ul } from "date-fns";
function Et() {
  return $(), G(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ye("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      ye("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      ye("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      ye("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
Et.compatConfig = {
  MODE: 3
};
function wn() {
  return $(), G(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ye("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      ye("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
wn.compatConfig = {
  MODE: 3
};
function La() {
  return $(), G(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ye("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
La.compatConfig = {
  MODE: 3
};
function za() {
  return $(), G(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ye("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
za.compatConfig = {
  MODE: 3
};
function Ha() {
  return $(), G(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ye("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      ye("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
Ha.compatConfig = {
  MODE: 3
};
function Va() {
  return $(), G(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ye("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
Va.compatConfig = {
  MODE: 3
};
function Ua() {
  return $(), G(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ye("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
Ua.compatConfig = {
  MODE: 3
};
const Xe = (e, t) => t ? new Date(e.toLocaleString("en-US", { timeZone: t })) : new Date(e), Wa = (e, t, l) => {
  const a = Na(e, t, l);
  return a || j();
}, il = (e, t, l) => {
  const a = t.dateInTz ? Xe(new Date(e), t.dateInTz) : j(e);
  return l ? Ke(a, !0) : a;
}, Na = (e, t, l) => {
  if (!e) return null;
  const a = l ? Ke(j(e), !0) : j(e);
  return t ? t.exactMatch ? il(e, t, l) : Xe(a, t.timezone) : a;
}, dl = (e) => {
  if (!e) return 0;
  const t = /* @__PURE__ */ new Date(), l = new Date(t.toLocaleString("en-US", { timeZone: "UTC" })), a = new Date(t.toLocaleString("en-US", { timeZone: e })), n = a.getTimezoneOffset() / 60;
  return (+l - +a) / (1e3 * 60 * 60) - n;
};
var nt = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e))(nt || {}), Mt = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e))(Mt || {}), Tt = /* @__PURE__ */ ((e) => (e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e))(Tt || {}), He = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e))(He || {});
const cl = ["timestamp", "date", "iso"];
var je = /* @__PURE__ */ ((e) => (e.up = "up", e.down = "down", e.left = "left", e.right = "right", e))(je || {}), Re = /* @__PURE__ */ ((e) => (e.arrowUp = "ArrowUp", e.arrowDown = "ArrowDown", e.arrowLeft = "ArrowLeft", e.arrowRight = "ArrowRight", e.enter = "Enter", e.space = " ", e.esc = "Escape", e.tab = "Tab", e.home = "Home", e.end = "End", e.pageUp = "PageUp", e.pageDown = "PageDown", e))(Re || {});
function nn(e) {
  return (t) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`)).slice(0, 2);
}
function fl(e) {
  return (t) => ut(Xe(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`), "UTC"), "EEEEEE", { locale: e });
}
const vl = (e, t, l) => {
  const a = [1, 2, 3, 4, 5, 6, 7];
  let n;
  if (e !== null)
    try {
      n = a.map(fl(e));
    } catch {
      n = a.map(nn(t));
    }
  else
    n = a.map(nn(t));
  const c = n.slice(0, l), v = n.slice(l + 1, n.length);
  return [n[l]].concat(...v).concat(...c);
}, ja = (e, t, l) => {
  const a = [];
  for (let n = +e[0]; n <= +e[1]; n++)
    a.push({ value: +n, text: An(n, t) });
  return l ? a.reverse() : a;
}, Dn = (e, t, l) => {
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((c) => {
    const v = c < 10 ? `0${c}` : c;
    return /* @__PURE__ */ new Date(`2017-${v}-01T00:00:00+00:00`);
  });
  if (e !== null)
    try {
      const c = l === "long" ? "LLLL" : "LLL";
      return a.map((v, b) => {
        const i = ut(Xe(v, "UTC"), c, { locale: e });
        return {
          text: i.charAt(0).toUpperCase() + i.substring(1),
          value: b
        };
      });
    } catch {
    }
  const n = new Intl.DateTimeFormat(t, { month: l, timeZone: "UTC" });
  return a.map((c, v) => {
    const b = n.format(c);
    return {
      text: b.charAt(0).toUpperCase() + b.substring(1),
      value: v
    };
  });
}, ml = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], Ie = (e) => {
  const t = r(e);
  return t != null && t.$el ? t == null ? void 0 : t.$el : t;
}, gl = (e) => ({ type: "dot", ...e ?? {} }), Mn = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, Ka = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, Ye = (e) => e, ln = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e, rn = (e) => e === null, $n = (e) => {
  if (e)
    return [...e.querySelectorAll("input, button, select, textarea, a[href]")][0];
}, yl = (e) => {
  const t = [], l = (a) => a.filter((n) => n);
  for (let a = 0; a < e.length; a += 3) {
    const n = [e[a], e[a + 1], e[a + 2]];
    t.push(l(n));
  }
  return t;
}, Gt = (e, t, l) => {
  const a = l != null, n = t != null;
  if (!a && !n) return !1;
  const c = +l, v = +t;
  return a && n ? +e > c || +e < v : a ? +e > c : n ? +e < v : !1;
}, Yt = (e, t) => yl(e).map((l) => l.map((a) => {
  const { active: n, disabled: c, isBetween: v, highlighted: b } = t(a);
  return {
    ...a,
    active: n,
    disabled: c,
    className: {
      dp__overlay_cell_active: n,
      dp__overlay_cell: !n,
      dp__overlay_cell_disabled: c,
      dp__overlay_cell_pad: !0,
      dp__overlay_cell_active_disabled: c && n,
      dp__cell_in_between: v,
      "dp--highlighted": b
    }
  };
})), yt = (e, t, l = !1) => {
  e && t.allowStopPropagation && (l && e.stopImmediatePropagation(), e.stopPropagation());
}, pl = () => [
  "a[href]",
  "area[href]",
  "input:not([disabled]):not([type='hidden'])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
  "[data-datepicker-instance]"
].join(", ");
function hl(e, t) {
  let l = [...document.querySelectorAll(pl())];
  l = l.filter((n) => !e.contains(n) || n.hasAttribute("data-datepicker-instance"));
  const a = l.indexOf(e);
  if (a >= 0 && (t ? a - 1 >= 0 : a + 1 <= l.length))
    return l[a + (t ? -1 : 1)];
}
const bl = (e, t) => e == null ? void 0 : e.querySelector(`[data-dp-element="${t}"]`), An = (e, t) => new Intl.NumberFormat(t, { useGrouping: !1, style: "decimal" }).format(e), Ga = (e) => ut(e, "dd-MM-yyyy"), $a = (e) => Array.isArray(e), sa = (e, t) => t.get(Ga(e)), kl = (e, t) => e ? t ? t instanceof Map ? !!sa(e, t) : t(j(e)) : !1 : !0, qe = (e, t, l = !1) => {
  if (e.key === Re.enter || e.key === Re.space)
    return l && e.preventDefault(), t();
}, on = (e, t, l, a, n, c) => {
  const v = Ia(e, t.slice(0, e.length), /* @__PURE__ */ new Date(), { locale: c });
  return ra(v) && xn(v) ? a || n ? v : Te(v, {
    hours: +l.hours,
    minutes: +(l == null ? void 0 : l.minutes),
    seconds: +(l == null ? void 0 : l.seconds),
    milliseconds: 0
  }) : null;
}, wl = (e, t, l, a, n, c) => {
  const v = Array.isArray(l) ? l[0] : l;
  if (typeof t == "string")
    return on(e, t, v, a, n, c);
  if (Array.isArray(t)) {
    let b = null;
    for (const i of t)
      if (b = on(e, i, v, a, n, c), b)
        break;
    return b;
  }
  return typeof t == "function" ? t(e) : null;
}, j = (e) => e ? new Date(e) : /* @__PURE__ */ new Date(), Dl = (e, t, l) => {
  if (t) {
    const n = (e.getMonth() + 1).toString().padStart(2, "0"), c = e.getDate().toString().padStart(2, "0"), v = e.getHours().toString().padStart(2, "0"), b = e.getMinutes().toString().padStart(2, "0"), i = l ? e.getSeconds().toString().padStart(2, "0") : "00";
    return `${e.getFullYear()}-${n}-${c}T${v}:${b}:${i}.000Z`;
  }
  const a = Date.UTC(
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes(),
    e.getUTCSeconds()
  );
  return new Date(a).toISOString();
}, Ke = (e, t) => {
  const l = j(JSON.parse(JSON.stringify(e))), a = Te(l, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
  return t ? qn(a) : a;
}, pt = (e, t, l, a) => {
  let n = e ? j(e) : j();
  return (t || t === 0) && (n = Jn(n, +t)), (l || l === 0) && (n = Zn(n, +l)), (a || a === 0) && (n = mn(n, +a)), gn(n, 0);
}, _e = (e, t) => !e || !t ? !1 : Kt(Ke(e), Ke(t)), De = (e, t) => !e || !t ? !1 : _t(Ke(e), Ke(t)), Be = (e, t) => !e || !t ? !1 : Ot(Ke(e), Ke(t)), da = (e, t, l) => e != null && e[0] && (e != null && e[1]) ? Be(l, e[0]) && _e(l, e[1]) : e != null && e[0] && t ? Be(l, e[0]) && _e(l, t) || _e(l, e[0]) && Be(l, t) : !1, lt = (e) => {
  const t = Te(new Date(e), { date: 1 });
  return Ke(t);
}, Aa = (e, t, l) => t && (l || l === 0) ? Object.fromEntries(
  ["hours", "minutes", "seconds"].map((a) => a === t ? [a, l] : [a, isNaN(+e[a]) ? void 0 : +e[a]])
) : {
  hours: isNaN(+e.hours) ? void 0 : +e.hours,
  minutes: isNaN(+e.minutes) ? void 0 : +e.minutes,
  seconds: isNaN(+e.seconds) ? void 0 : +e.seconds
}, St = (e) => ({
  hours: ft(e),
  minutes: ht(e),
  seconds: Bt(e)
}), Tn = (e, t) => {
  if (t) {
    const l = ge(j(t));
    if (l > e) return 12;
    if (l === e) return be(j(t));
  }
}, Sn = (e, t) => {
  if (t) {
    const l = ge(j(t));
    return l < e ? -1 : l === e ? be(j(t)) : void 0;
  }
}, It = (e) => {
  if (e) return ge(j(e));
}, Pn = (e, t) => {
  const l = Be(e, t) ? t : e, a = Be(t, e) ? t : e;
  return vn({ start: l, end: a });
}, Ml = (e) => {
  const t = At(e, 1);
  return { month: be(t), year: ge(t) };
}, it = (e, t) => {
  const l = Fa(e, { weekStartsOn: +t }), a = yn(e, { weekStartsOn: +t });
  return [l, a];
}, Rn = (e, t) => {
  const l = {
    hours: ft(j()),
    minutes: ht(j()),
    seconds: t ? Bt(j()) : 0
  };
  return Object.assign(l, e);
}, gt = (e, t, l) => [Te(j(e), { date: 1 }), Te(j(), { month: t, year: l, date: 1 })], dt = (e, t, l) => {
  let a = e ? j(e) : j();
  return (t || t === 0) && (a = Xn(a, t)), l && (a = st(a, l)), a;
}, Cn = (e, t, l, a, n) => {
  if (!a || n && !t || !n && !l) return !1;
  const c = n ? At(e, 1) : jt(e, 1), v = [be(c), ge(c)];
  return n ? !Al(...v, t) : !$l(...v, l);
}, $l = (e, t, l) => _e(...gt(l, e, t)) || De(...gt(l, e, t)), Al = (e, t, l) => Be(...gt(l, e, t)) || De(...gt(l, e, t)), _n = (e, t, l, a, n, c, v) => {
  if (typeof t == "function" && !v) return t(e);
  const b = l ? { locale: l } : void 0;
  return Array.isArray(e) ? `${ut(e[0], c, b)}${n && !e[1] ? "" : a}${e[1] ? ut(e[1], c, b) : ""}` : ut(e, c, b);
}, Rt = (e) => {
  if (e) return null;
  throw new Error(Ka.prop("partial-range"));
}, ta = (e, t) => {
  if (t) return e();
  throw new Error(Ka.prop("range"));
}, Ea = (e) => Array.isArray(e) ? ra(e[0]) && (e[1] ? ra(e[1]) : !0) : e ? ra(e) : !1, Tl = (e, t) => Te(t ?? j(), {
  hours: +e.hours || 0,
  minutes: +e.minutes || 0,
  seconds: +e.seconds || 0
}), Ta = (e, t, l, a) => {
  if (!e) return !0;
  if (a) {
    const n = l === "max" ? Kt(e, t) : Ot(e, t), c = { seconds: 0, milliseconds: 0 };
    return n || _t(Te(e, c), Te(t, c));
  }
  return l === "max" ? e.getTime() <= t.getTime() : e.getTime() >= t.getTime();
}, Sa = (e, t, l) => e ? Tl(e, t) : j(l ?? t), sn = (e, t, l, a, n) => {
  if (Array.isArray(a)) {
    const v = Sa(e, a[0], t), b = Sa(e, a[1], t);
    return Ta(a[0], v, l, !!t) && Ta(a[1], b, l, !!t) && n;
  }
  const c = Sa(e, a, t);
  return Ta(a, c, l, !!t) && n;
}, Pa = (e) => Te(j(), St(e)), Sl = (e, t) => e instanceof Map ? Array.from(e.values()).filter((l) => ge(j(l)) === t).map((l) => be(l)) : [], On = (e, t, l) => typeof e == "function" ? e({ month: t, year: l }) : !!e.months.find((a) => a.month === t && a.year === l), Qa = (e, t) => typeof e == "function" ? e(t) : e.years.includes(t), Bn = (e) => ut(e, "yyyy-MM-dd"), Ht = Qt({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), Yn = () => {
  const e = (a) => {
    Ht.menuFocused = a;
  }, t = (a) => {
    Ht.shiftKeyInMenu !== a && (Ht.shiftKeyInMenu = a);
  };
  return {
    control: X(() => ({ shiftKeyInMenu: Ht.shiftKeyInMenu, menuFocused: Ht.menuFocused })),
    setMenuFocused: e,
    setShiftKey: t
  };
}, Se = Qt({
  monthYear: [],
  calendar: [],
  time: [],
  actionRow: [],
  selectionGrid: [],
  timePicker: {
    0: [],
    1: []
  },
  monthPicker: []
}), Ra = ae(null), aa = ae(!1), Ca = ae(!1), _a = ae(!1), Oa = ae(!1), ze = ae(0), Oe = ae(0), bt = () => {
  const e = X(() => aa.value ? [...Se.selectionGrid, Se.actionRow].filter((y) => y.length) : Ca.value ? [
    ...Se.timePicker[0],
    ...Se.timePicker[1],
    Oa.value ? [] : [Ra.value],
    Se.actionRow
  ].filter((y) => y.length) : _a.value ? [...Se.monthPicker, Se.actionRow] : [Se.monthYear, ...Se.calendar, Se.time, Se.actionRow].filter((y) => y.length)), t = (y) => {
    ze.value = y ? ze.value + 1 : ze.value - 1;
    let F = null;
    e.value[Oe.value] && (F = e.value[Oe.value][ze.value]), !F && e.value[Oe.value + (y ? 1 : -1)] ? (Oe.value = Oe.value + (y ? 1 : -1), ze.value = y ? 0 : e.value[Oe.value].length - 1) : F || (ze.value = y ? ze.value - 1 : ze.value + 1);
  }, l = (y) => {
    if (Oe.value === 0 && !y || Oe.value === e.value.length && y) return;
    Oe.value = y ? Oe.value + 1 : Oe.value - 1, e.value[Oe.value] ? e.value[Oe.value] && !e.value[Oe.value][ze.value] && ze.value !== 0 && (ze.value = e.value[Oe.value].length - 1) : Oe.value = y ? Oe.value - 1 : Oe.value + 1;
  }, a = (y) => {
    let F = null;
    e.value[Oe.value] && (F = e.value[Oe.value][ze.value]), F ? F.focus({ preventScroll: !aa.value }) : ze.value = y ? ze.value - 1 : ze.value + 1;
  }, n = () => {
    t(!0), a(!0);
  }, c = () => {
    t(!1), a(!1);
  }, v = () => {
    l(!1), a(!0);
  }, b = () => {
    l(!0), a(!0);
  }, i = (y, F) => {
    Se[F] = y;
  }, L = (y, F) => {
    Se[F] = y;
  }, m = () => {
    ze.value = 0, Oe.value = 0;
  };
  return {
    buildMatrix: i,
    buildMultiLevelMatrix: L,
    setTimePickerBackRef: (y) => {
      Ra.value = y;
    },
    setSelectionGrid: (y) => {
      aa.value = y, m(), y || (Se.selectionGrid = []);
    },
    setTimePicker: (y, F = !1) => {
      Ca.value = y, Oa.value = F, m(), y || (Se.timePicker[0] = [], Se.timePicker[1] = []);
    },
    setTimePickerElements: (y, F = 0) => {
      Se.timePicker[F] = y;
    },
    arrowRight: n,
    arrowLeft: c,
    arrowUp: v,
    arrowDown: b,
    clearArrowNav: () => {
      Se.monthYear = [], Se.calendar = [], Se.time = [], Se.actionRow = [], Se.selectionGrid = [], Se.timePicker[0] = [], Se.timePicker[1] = [], aa.value = !1, Ca.value = !1, Oa.value = !1, _a.value = !1, m(), Ra.value = null;
    },
    setMonthPicker: (y) => {
      _a.value = y, m();
    },
    refSets: Se
    // exposed for testing
  };
}, un = (e) => ({
  menuAppearTop: "dp-menu-appear-top",
  menuAppearBottom: "dp-menu-appear-bottom",
  open: "dp-slide-down",
  close: "dp-slide-up",
  next: "calendar-next",
  previous: "calendar-prev",
  vNext: "dp-slide-up",
  vPrevious: "dp-slide-down",
  ...e ?? {}
}), Pl = (e) => ({
  toggleOverlay: "Toggle overlay",
  menu: "Datepicker menu",
  input: "Datepicker input",
  calendarWrap: "Calendar wrapper",
  calendarDays: "Calendar days",
  openTimePicker: "Open time picker",
  closeTimePicker: "Close time Picker",
  incrementValue: (t) => `Increment ${t}`,
  decrementValue: (t) => `Decrement ${t}`,
  openTpOverlay: (t) => `Open ${t} overlay`,
  amPmButton: "Switch AM/PM mode",
  openYearsOverlay: "Open years overlay",
  openMonthsOverlay: "Open months overlay",
  nextMonth: "Next month",
  prevMonth: "Previous month",
  nextYear: "Next year",
  prevYear: "Previous year",
  day: void 0,
  weekDay: void 0,
  ...e ?? {}
}), dn = (e) => e ? typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2 : 0, Rl = (e) => {
  const t = typeof e == "object" && e, l = {
    static: !0,
    solo: !1
  };
  if (!e) return { ...l, count: dn(!1) };
  const a = t ? e : {}, n = t ? a.count ?? !0 : e, c = dn(n);
  return Object.assign(l, a, { count: c });
}, Cl = (e, t, l) => e || (typeof l == "string" ? l : t), _l = (e) => typeof e == "boolean" ? e ? un({}) : !1 : un(e), Ol = (e) => {
  const t = {
    enterSubmit: !0,
    tabSubmit: !0,
    openMenu: !0,
    selectOnFocus: !1,
    rangeSeparator: " - "
  };
  return typeof e == "object" ? { ...t, ...e ?? {}, enabled: !0 } : { ...t, enabled: e };
}, Bl = (e) => ({
  months: [],
  years: [],
  times: { hours: [], minutes: [], seconds: [] },
  ...e ?? {}
}), Yl = (e) => ({
  showSelect: !0,
  showCancel: !0,
  showNow: !1,
  showPreview: !0,
  ...e ?? {}
}), Il = (e) => {
  const t = { input: !1 };
  return typeof e == "object" ? { ...t, ...e ?? {}, enabled: !0 } : {
    enabled: e,
    ...t
  };
}, Nl = (e) => ({ ...{
  allowStopPropagation: !0,
  closeOnScroll: !1,
  modeHeight: 255,
  allowPreventDefault: !1,
  closeOnClearValue: !0,
  closeOnAutoApply: !0,
  noSwipe: !1,
  keepActionRow: !1,
  onClickOutside: void 0,
  tabOutClosesMenu: !0,
  arrowLeft: void 0,
  keepViewOnOffsetClick: !1,
  timeArrowHoldThreshold: 0
}, ...e ?? {} }), El = (e) => {
  const t = {
    dates: Array.isArray(e) ? e.map((l) => j(l)) : [],
    years: [],
    months: [],
    quarters: [],
    weeks: [],
    weekdays: [],
    options: { highlightDisabled: !1 }
  };
  return typeof e == "function" ? e : { ...t, ...e ?? {} };
}, Fl = (e) => typeof e == "object" ? {
  type: (e == null ? void 0 : e.type) ?? "local",
  hideOnOffsetDates: (e == null ? void 0 : e.hideOnOffsetDates) ?? !1
} : {
  type: e,
  hideOnOffsetDates: !1
}, Ll = (e, t) => {
  const l = {
    noDisabledRange: !1,
    showLastInRange: !0,
    minMaxRawRange: !1,
    partialRange: !0,
    disableTimeRangeValidation: !1,
    maxRange: void 0,
    minRange: void 0,
    autoRange: void 0,
    fixedStart: !1,
    fixedEnd: !1
  };
  return typeof e == "object" ? { enabled: !0, ...l, ...e } : {
    enabled: e,
    noDisabledRange: t.noDisabledRange,
    showLastInRange: t.showLastInRange,
    minMaxRawRange: t.minMaxRawRange,
    partialRange: t.partialRange,
    disableTimeRangeValidation: t.disableTimeRangeValidation,
    maxRange: t.maxRange,
    minRange: t.minRange,
    autoRange: t.autoRange,
    fixedStart: t.fixedStart,
    fixedEnd: t.fixedEnd
  };
}, zl = (e, t) => e ? typeof e == "string" ? { timezone: e, exactMatch: !1, dateInTz: void 0, emitTimezone: t, convertModel: !0 } : {
  timezone: e.timezone,
  exactMatch: e.exactMatch ?? !1,
  dateInTz: e.dateInTz ?? void 0,
  emitTimezone: t ?? e.emitTimezone,
  convertModel: e.convertModel ?? !0
} : { timezone: void 0, exactMatch: !1, emitTimezone: t }, Ba = (e, t, l) => new Map(
  e.map((a) => {
    const n = Wa(a, t, l);
    return [Ga(n), n];
  })
), Hl = (e, t) => e.length ? new Map(
  e.map((l) => {
    const a = Wa(l.date, t);
    return [Ga(a), l];
  })
) : null, Vl = (e) => {
  var t;
  return {
    minDate: Na(e.minDate, e.timezone, e.isSpecific),
    maxDate: Na(e.maxDate, e.timezone, e.isSpecific),
    disabledDates: $a(e.disabledDates) ? Ba(e.disabledDates, e.timezone, e.isSpecific) : e.disabledDates,
    allowedDates: $a(e.allowedDates) ? Ba(e.allowedDates, e.timezone, e.isSpecific) : null,
    highlight: typeof e.highlight == "object" && $a((t = e.highlight) == null ? void 0 : t.dates) ? Ba(e.highlight.dates, e.timezone) : e.highlight,
    markers: Hl(e.markers, e.timezone)
  };
}, Ul = (e, t) => typeof e == "boolean" ? { enabled: e, dragSelect: !0, limit: +t } : {
  enabled: !!e,
  limit: e.limit ? +e.limit : null,
  dragSelect: e.dragSelect ?? !0
}, Wl = (e) => ({
  ...Object.fromEntries(
    Object.keys(e).map((l) => {
      const a = l, n = e[a], c = typeof e[a] == "string" ? { [n]: !0 } : Object.fromEntries(n.map((v) => [v, !0]));
      return [l, c];
    })
  )
}), Ce = (e) => {
  const t = () => {
    const le = e.enableSeconds ? ":ss" : "", q = e.enableMinutes ? ":mm" : "";
    return e.is24 ? `HH${q}${le}` : `hh${q}${le} aa`;
  }, l = () => {
    var le;
    return e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? t() : e.weekPicker ? `${((le = S.value) == null ? void 0 : le.type) === "iso" ? "RR" : "ww"}-yyyy` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${t()}` : "MM/dd/yyyy";
  }, a = (le) => Rn(le, e.enableSeconds), n = () => J.value.enabled ? e.startTime && Array.isArray(e.startTime) ? [a(e.startTime[0]), a(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? a(e.startTime) : null, c = X(() => Rl(e.multiCalendars)), v = X(() => n()), b = X(() => Pl(e.ariaLabels)), i = X(() => Bl(e.filters)), L = X(() => _l(e.transitions)), m = X(() => Yl(e.actionRow)), E = X(
    () => Cl(e.previewFormat, e.format, l())
  ), k = X(() => Ol(e.textInput)), _ = X(() => Il(e.inline)), H = X(() => Nl(e.config)), N = X(() => El(e.highlight)), S = X(() => Fl(e.weekNumbers)), y = X(() => zl(e.timezone, e.emitTimezone)), F = X(() => Ul(e.multiDates, e.multiDatesLimit)), P = X(
    () => Vl({
      minDate: e.minDate,
      maxDate: e.maxDate,
      disabledDates: e.disabledDates,
      allowedDates: e.allowedDates,
      highlight: N.value,
      markers: e.markers,
      timezone: y.value,
      isSpecific: e.monthPicker || e.yearPicker || e.quarterPicker
    })
  ), J = X(
    () => Ll(e.range, {
      minMaxRawRange: !1,
      maxRange: e.maxRange,
      minRange: e.minRange,
      noDisabledRange: e.noDisabledRange,
      showLastInRange: e.showLastInRange,
      partialRange: e.partialRange,
      disableTimeRangeValidation: e.disableTimeRangeValidation,
      autoRange: e.autoRange,
      fixedStart: e.fixedStart,
      fixedEnd: e.fixedEnd
    })
  ), Z = X(() => Wl(e.ui));
  return {
    defaultedTransitions: L,
    defaultedMultiCalendars: c,
    defaultedStartTime: v,
    defaultedAriaLabels: b,
    defaultedFilters: i,
    defaultedActionRow: m,
    defaultedPreviewFormat: E,
    defaultedTextInput: k,
    defaultedInline: _,
    defaultedConfig: H,
    defaultedHighlight: N,
    defaultedWeekNumbers: S,
    defaultedRange: J,
    propDates: P,
    defaultedTz: y,
    defaultedMultiDates: F,
    defaultedUI: Z,
    getDefaultPattern: l,
    getDefaultStartTime: n
  };
}, jl = (e, t, l) => {
  const a = ae(), { defaultedTextInput: n, defaultedRange: c, defaultedTz: v, defaultedMultiDates: b, getDefaultPattern: i } = Ce(t), L = ae(""), m = Ut(t, "format"), E = Ut(t, "formatLocale");
  tt(
    a,
    () => {
      typeof t.onInternalModelChange == "function" && e("internal-model-change", a.value, T(!0));
    },
    { deep: !0 }
  ), tt(c, (s, oe) => {
    s.enabled !== oe.enabled && (a.value = null);
  }), tt(m, () => {
    z();
  });
  const k = (s) => v.value.timezone && v.value.convertModel ? Xe(s, v.value.timezone) : s, _ = (s) => {
    if (v.value.timezone && v.value.convertModel) {
      const oe = dl(v.value.timezone);
      return el(s, oe);
    }
    return s;
  }, H = (s, oe, M = !1) => _n(
    s,
    t.format,
    t.formatLocale,
    n.value.rangeSeparator,
    t.modelAuto,
    oe ?? i(),
    M
  ), N = (s) => s ? t.modelType ? ee(s) : {
    hours: ft(s),
    minutes: ht(s),
    seconds: t.enableSeconds ? Bt(s) : 0
  } : null, S = (s) => t.modelType ? ee(s) : { month: be(s), year: ge(s) }, y = (s) => Array.isArray(s) ? b.value.enabled ? s.map((oe) => F(oe, st(j(), oe))) : ta(
    () => [
      st(j(), s[0]),
      s[1] ? st(j(), s[1]) : Rt(c.value.partialRange)
    ],
    c.value.enabled
  ) : st(j(), +s), F = (s, oe) => (typeof s == "string" || typeof s == "number") && t.modelType ? D(s) : oe, P = (s) => Array.isArray(s) ? [
    F(
      s[0],
      pt(null, +s[0].hours, +s[0].minutes, s[0].seconds)
    ),
    F(
      s[1],
      pt(null, +s[1].hours, +s[1].minutes, s[1].seconds)
    )
  ] : F(s, pt(null, s.hours, s.minutes, s.seconds)), J = (s) => {
    const oe = Te(j(), { date: 1 });
    return Array.isArray(s) ? b.value.enabled ? s.map((M) => F(M, dt(oe, +M.month, +M.year))) : ta(
      () => [
        F(s[0], dt(oe, +s[0].month, +s[0].year)),
        F(
          s[1],
          s[1] ? dt(oe, +s[1].month, +s[1].year) : Rt(c.value.partialRange)
        )
      ],
      c.value.enabled
    ) : F(s, dt(oe, +s.month, +s.year));
  }, Z = (s) => {
    if (Array.isArray(s))
      return s.map((oe) => D(oe));
    throw new Error(Ka.dateArr("multi-dates"));
  }, le = (s) => {
    if (Array.isArray(s) && c.value.enabled) {
      const oe = s[0], M = s[1];
      return [
        j(Array.isArray(oe) ? oe[0] : null),
        j(Array.isArray(M) ? M[0] : null)
      ];
    }
    return j(s[0]);
  }, q = (s) => t.modelAuto ? Array.isArray(s) ? [D(s[0]), D(s[1])] : t.autoApply ? [D(s)] : [D(s), null] : Array.isArray(s) ? ta(
    () => s[1] ? [
      D(s[0]),
      s[1] ? D(s[1]) : Rt(c.value.partialRange)
    ] : [D(s[0])],
    c.value.enabled
  ) : D(s), R = () => {
    Array.isArray(a.value) && c.value.enabled && a.value.length === 1 && a.value.push(Rt(c.value.partialRange));
  }, re = () => {
    const s = a.value;
    return [
      ee(s[0]),
      s[1] ? ee(s[1]) : Rt(c.value.partialRange)
    ];
  }, B = () => a.value[1] ? re() : ee(Ye(a.value[0])), K = () => (a.value || []).map((s) => ee(s)), fe = (s = !1) => (s || R(), t.modelAuto ? B() : b.value.enabled ? K() : Array.isArray(a.value) ? ta(() => re(), c.value.enabled) : ee(Ye(a.value))), ce = (s) => !s || Array.isArray(s) && !s.length ? null : t.timePicker ? P(Ye(s)) : t.monthPicker ? J(Ye(s)) : t.yearPicker ? y(Ye(s)) : b.value.enabled ? Z(Ye(s)) : t.weekPicker ? le(Ye(s)) : q(Ye(s)), O = (s) => {
    const oe = ce(s);
    Ea(Ye(oe)) ? (a.value = Ye(oe), z()) : (a.value = null, L.value = "");
  }, A = () => {
    const s = (oe) => ut(oe, n.value.format);
    return `${s(a.value[0])} ${n.value.rangeSeparator} ${a.value[1] ? s(a.value[1]) : ""}`;
  }, w = () => l.value && a.value ? Array.isArray(a.value) ? A() : ut(a.value, n.value.format) : H(a.value), o = () => a.value ? b.value.enabled ? a.value.map((s) => H(s)).join("; ") : n.value.enabled && typeof n.value.format == "string" ? w() : H(a.value) : "", z = () => {
    !t.format || typeof t.format == "string" || n.value.enabled && typeof n.value.format == "string" ? L.value = o() : L.value = t.format(a.value);
  }, D = (s) => {
    if (t.utc) {
      const oe = new Date(s);
      return t.utc === "preserve" ? new Date(oe.getTime() + oe.getTimezoneOffset() * 6e4) : oe;
    }
    return t.modelType ? cl.includes(t.modelType) ? k(new Date(s)) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? k(
      Ia(s, i(), /* @__PURE__ */ new Date(), { locale: E.value })
    ) : k(
      Ia(s, t.modelType, /* @__PURE__ */ new Date(), { locale: E.value })
    ) : k(new Date(s));
  }, ee = (s) => s ? t.utc ? Dl(s, t.utc === "preserve", t.enableSeconds) : t.modelType ? t.modelType === "timestamp" ? +_(s) : t.modelType === "iso" ? _(s).toISOString() : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? H(_(s)) : H(_(s), t.modelType, !0) : _(s) : "", de = (s, oe = !1, M = !1) => {
    if (M) return s;
    if (e("update:model-value", s), v.value.emitTimezone && oe) {
      const me = Array.isArray(s) ? s.map((d) => Xe(Ye(d), v.value.emitTimezone)) : Xe(Ye(s), v.value.emitTimezone);
      e("update:model-timezone-value", me);
    }
  }, u = (s) => Array.isArray(a.value) ? b.value.enabled ? a.value.map((oe) => s(oe)) : [
    s(a.value[0]),
    a.value[1] ? s(a.value[1]) : Rt(c.value.partialRange)
  ] : s(Ye(a.value)), I = () => {
    if (Array.isArray(a.value)) {
      const s = it(a.value[0], t.weekStart), oe = a.value[1] ? it(a.value[1], t.weekStart) : [];
      return [s.map((M) => j(M)), oe.map((M) => j(M))];
    }
    return it(a.value, t.weekStart).map((s) => j(s));
  }, se = (s, oe) => de(Ye(u(s)), !1, oe), f = (s) => {
    const oe = I();
    return s ? oe : e("update:model-value", I());
  }, T = (s = !1) => (s || z(), t.monthPicker ? se(S, s) : t.timePicker ? se(N, s) : t.yearPicker ? se(ge, s) : t.weekPicker ? f(s) : de(fe(s), !0, s));
  return {
    inputValue: L,
    internalModelValue: a,
    checkBeforeEmit: () => a.value ? c.value.enabled ? c.value.partialRange ? a.value.length >= 1 : a.value.length === 2 : !!a.value : !1,
    parseExternalModelValue: O,
    formatInputValue: z,
    emitModelValue: T
  };
}, Kl = (e, t) => {
  const { defaultedFilters: l, propDates: a } = Ce(e), { validateMonthYearInRange: n } = kt(e), c = (m, E) => {
    let k = m;
    return l.value.months.includes(be(k)) ? (k = E ? At(m, 1) : jt(m, 1), c(k, E)) : k;
  }, v = (m, E) => {
    let k = m;
    return l.value.years.includes(ge(k)) ? (k = E ? pn(m, 1) : hn(m, 1), v(k, E)) : k;
  }, b = (m, E = !1) => {
    const k = Te(j(), { month: e.month, year: e.year });
    let _ = m ? At(k, 1) : jt(k, 1);
    e.disableYearSelect && (_ = st(_, e.year));
    let H = be(_), N = ge(_);
    l.value.months.includes(H) && (_ = c(_, m), H = be(_), N = ge(_)), l.value.years.includes(N) && (_ = v(_, m), N = ge(_)), n(H, N, m, e.preventMinMaxNavigation) && i(H, N, E);
  }, i = (m, E, k) => {
    t("update-month-year", { month: m, year: E, fromNav: k });
  }, L = X(() => (m) => Cn(
    Te(j(), { month: e.month, year: e.year }),
    a.value.maxDate,
    a.value.minDate,
    e.preventMinMaxNavigation,
    m
  ));
  return { handleMonthYearChange: b, isDisabled: L, updateMonthYear: i };
}, ca = {
  multiCalendars: { type: [Boolean, Number, String, Object], default: void 0 },
  modelValue: { type: [String, Date, Array, Object, Number], default: null },
  modelType: { type: String, default: null },
  position: { type: String, default: "center" },
  dark: { type: Boolean, default: !1 },
  format: {
    type: [String, Function],
    default: () => null
  },
  autoPosition: { type: Boolean, default: !0 },
  altPosition: { type: Function, default: null },
  transitions: { type: [Boolean, Object], default: !0 },
  formatLocale: { type: Object, default: null },
  utc: { type: [Boolean, String], default: !1 },
  ariaLabels: { type: Object, default: () => ({}) },
  offset: { type: [Number, String], default: 10 },
  hideNavigation: { type: Array, default: () => [] },
  timezone: { type: [String, Object], default: null },
  emitTimezone: { type: String, default: null },
  vertical: { type: Boolean, default: !1 },
  disableMonthYearSelect: { type: Boolean, default: !1 },
  disableYearSelect: { type: Boolean, default: !1 },
  menuClassName: { type: String, default: null },
  dayClass: {
    type: Function,
    default: null
  },
  yearRange: { type: Array, default: () => [1900, 2100] },
  calendarCellClassName: { type: String, default: null },
  enableTimePicker: { type: Boolean, default: !0 },
  autoApply: { type: Boolean, default: !1 },
  disabledDates: { type: [Array, Function], default: () => [] },
  monthNameFormat: { type: String, default: "short" },
  startDate: { type: [Date, String], default: null },
  startTime: { type: [Object, Array], default: null },
  hideOffsetDates: { type: Boolean, default: !1 },
  autoRange: { type: [Number, String], default: null },
  noToday: { type: Boolean, default: !1 },
  disabledWeekDays: { type: Array, default: () => [] },
  allowedDates: { type: Array, default: null },
  nowButtonLabel: { type: String, default: "Now" },
  markers: { type: Array, default: () => [] },
  escClose: { type: Boolean, default: !0 },
  spaceConfirm: { type: Boolean, default: !0 },
  monthChangeOnArrows: { type: Boolean, default: !0 },
  presetDates: { type: Array, default: () => [] },
  flow: { type: Array, default: () => [] },
  partialFlow: { type: Boolean, default: !1 },
  preventMinMaxNavigation: { type: Boolean, default: !1 },
  minRange: { type: [Number, String], default: null },
  maxRange: { type: [Number, String], default: null },
  multiDatesLimit: { type: [Number, String], default: null },
  reverseYears: { type: Boolean, default: !1 },
  weekPicker: { type: Boolean, default: !1 },
  filters: { type: Object, default: () => ({}) },
  arrowNavigation: { type: Boolean, default: !1 },
  disableTimeRangeValidation: { type: Boolean, default: !1 },
  highlight: {
    type: [Function, Object],
    default: null
  },
  teleport: { type: [Boolean, String, Object], default: null },
  teleportCenter: { type: Boolean, default: !1 },
  locale: { type: String, default: "en-Us" },
  weekNumName: { type: String, default: "W" },
  weekStart: { type: [Number, String], default: 1 },
  weekNumbers: {
    type: [String, Function, Object],
    default: null
  },
  calendarClassName: { type: String, default: null },
  monthChangeOnScroll: { type: [Boolean, String], default: !0 },
  dayNames: {
    type: [Function, Array],
    default: null
  },
  monthPicker: { type: Boolean, default: !1 },
  customProps: { type: Object, default: null },
  yearPicker: { type: Boolean, default: !1 },
  modelAuto: { type: Boolean, default: !1 },
  selectText: { type: String, default: "Select" },
  cancelText: { type: String, default: "Cancel" },
  previewFormat: {
    type: [String, Function],
    default: () => ""
  },
  multiDates: { type: [Object, Boolean], default: !1 },
  partialRange: { type: Boolean, default: !0 },
  ignoreTimeValidation: { type: Boolean, default: !1 },
  minDate: { type: [Date, String], default: null },
  maxDate: { type: [Date, String], default: null },
  minTime: { type: Object, default: null },
  maxTime: { type: Object, default: null },
  name: { type: String, default: null },
  placeholder: { type: String, default: "" },
  hideInputIcon: { type: Boolean, default: !1 },
  clearable: { type: Boolean, default: !0 },
  state: { type: Boolean, default: null },
  required: { type: Boolean, default: !1 },
  autocomplete: { type: String, default: "off" },
  inputClassName: { type: String, default: null },
  fixedStart: { type: Boolean, default: !1 },
  fixedEnd: { type: Boolean, default: !1 },
  timePicker: { type: Boolean, default: !1 },
  enableSeconds: { type: Boolean, default: !1 },
  is24: { type: Boolean, default: !0 },
  noHoursOverlay: { type: Boolean, default: !1 },
  noMinutesOverlay: { type: Boolean, default: !1 },
  noSecondsOverlay: { type: Boolean, default: !1 },
  hoursGridIncrement: { type: [String, Number], default: 1 },
  minutesGridIncrement: { type: [String, Number], default: 5 },
  secondsGridIncrement: { type: [String, Number], default: 5 },
  hoursIncrement: { type: [Number, String], default: 1 },
  minutesIncrement: { type: [Number, String], default: 1 },
  secondsIncrement: { type: [Number, String], default: 1 },
  range: { type: [Boolean, Object], default: !1 },
  uid: { type: String, default: null },
  disabled: { type: Boolean, default: !1 },
  readonly: { type: Boolean, default: !1 },
  inline: { type: [Boolean, Object], default: !1 },
  textInput: { type: [Boolean, Object], default: !1 },
  noDisabledRange: { type: Boolean, default: !1 },
  sixWeeks: { type: [Boolean, String], default: !1 },
  actionRow: { type: Object, default: () => ({}) },
  focusStartDate: { type: Boolean, default: !1 },
  disabledTimes: { type: [Function, Array], default: void 0 },
  showLastInRange: { type: Boolean, default: !0 },
  timePickerInline: { type: Boolean, default: !1 },
  calendar: { type: Function, default: null },
  config: { type: Object, default: void 0 },
  quarterPicker: { type: Boolean, default: !1 },
  yearFirst: { type: Boolean, default: !1 },
  loading: { type: Boolean, default: !1 },
  onInternalModelChange: { type: [Function, Object], default: null },
  enableMinutes: { type: Boolean, default: !0 },
  ui: { type: Object, default: () => ({}) }
}, rt = {
  ...ca,
  shadow: { type: Boolean, default: !1 },
  flowStep: { type: Number, default: 0 },
  internalModelValue: { type: [Date, Array], default: null },
  noOverlayFocus: { type: Boolean, default: !1 },
  collapse: { type: Boolean, default: !1 },
  menuWrapRef: { type: Object, default: null },
  getInputRect: { type: Function, default: () => ({}) },
  isTextInputDate: { type: Boolean, default: !1 }
}, Gl = ["title"], Ql = ["disabled"], ql = /* @__PURE__ */ Le({
  compatConfig: {
    MODE: 3
  },
  __name: "ActionRow",
  props: {
    menuMount: { type: Boolean, default: !1 },
    calendarWidth: { type: Number, default: 0 },
    ...rt
  },
  emits: ["close-picker", "select-date", "select-now", "invalid-select"],
  setup(e, { emit: t }) {
    const l = t, a = e, {
      defaultedActionRow: n,
      defaultedPreviewFormat: c,
      defaultedMultiCalendars: v,
      defaultedTextInput: b,
      defaultedInline: i,
      defaultedRange: L,
      defaultedMultiDates: m,
      getDefaultPattern: E
    } = Ce(a), { isTimeValid: k, isMonthValid: _ } = kt(a), { buildMatrix: H } = bt(), N = ae(null), S = ae(null), y = ae(!1), F = ae({}), P = ae(null), J = ae(null);
    We(() => {
      a.arrowNavigation && H([Ie(N), Ie(S)], "actionRow"), Z(), window.addEventListener("resize", Z);
    }), ua(() => {
      window.removeEventListener("resize", Z);
    });
    const Z = () => {
      y.value = !1, setTimeout(() => {
        var o, z;
        const A = (o = P.value) == null ? void 0 : o.getBoundingClientRect(), w = (z = J.value) == null ? void 0 : z.getBoundingClientRect();
        A && w && (F.value.maxWidth = `${w.width - A.width - 20}px`), y.value = !0;
      }, 0);
    }, le = X(() => L.value.enabled && !L.value.partialRange && a.internalModelValue ? a.internalModelValue.length === 2 : !0), q = X(
      () => !k.value(a.internalModelValue) || !_.value(a.internalModelValue) || !le.value
    ), R = () => {
      const A = c.value;
      return a.timePicker || a.monthPicker, A(Ye(a.internalModelValue));
    }, re = () => {
      const A = a.internalModelValue;
      return v.value.count > 0 ? `${B(A[0])} - ${B(A[1])}` : [B(A[0]), B(A[1])];
    }, B = (A) => _n(
      A,
      c.value,
      a.formatLocale,
      b.value.rangeSeparator,
      a.modelAuto,
      E()
    ), K = X(() => !a.internalModelValue || !a.menuMount ? "" : typeof c.value == "string" ? Array.isArray(a.internalModelValue) ? a.internalModelValue.length === 2 && a.internalModelValue[1] ? re() : m.value.enabled ? a.internalModelValue.map((A) => `${B(A)}`) : a.modelAuto ? `${B(a.internalModelValue[0])}` : `${B(a.internalModelValue[0])} -` : B(a.internalModelValue) : R()), fe = () => m.value.enabled ? "; " : " - ", ce = X(
      () => Array.isArray(K.value) ? K.value.join(fe()) : K.value
    ), O = () => {
      k.value(a.internalModelValue) && _.value(a.internalModelValue) && le.value ? l("select-date") : l("invalid-select");
    };
    return (A, w) => ($(), G("div", {
      ref_key: "actionRowRef",
      ref: J,
      class: "dp__action_row"
    }, [
      A.$slots["action-row"] ? ie(A.$slots, "action-row", Ne(Ee({ key: 0 }, {
        internalModelValue: A.internalModelValue,
        disabled: q.value,
        selectDate: () => A.$emit("select-date"),
        closePicker: () => A.$emit("close-picker")
      }))) : ($(), G(ke, { key: 1 }, [
        r(n).showPreview ? ($(), G("div", {
          key: 0,
          class: "dp__selection_preview",
          title: ce.value,
          style: et(F.value)
        }, [
          A.$slots["action-preview"] && y.value ? ie(A.$slots, "action-preview", {
            key: 0,
            value: A.internalModelValue
          }) : x("", !0),
          !A.$slots["action-preview"] && y.value ? ($(), G(ke, { key: 1 }, [
            ct(Ve(ce.value), 1)
          ], 64)) : x("", !0)
        ], 12, Gl)) : x("", !0),
        ye("div", {
          ref_key: "actionBtnContainer",
          ref: P,
          class: "dp__action_buttons",
          "data-dp-element": "action-row"
        }, [
          A.$slots["action-buttons"] ? ie(A.$slots, "action-buttons", {
            key: 0,
            value: A.internalModelValue
          }) : x("", !0),
          A.$slots["action-buttons"] ? x("", !0) : ($(), G(ke, { key: 1 }, [
            !r(i).enabled && r(n).showCancel ? ($(), G("button", {
              key: 0,
              ref_key: "cancelButtonRef",
              ref: N,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: w[0] || (w[0] = (o) => A.$emit("close-picker")),
              onKeydown: w[1] || (w[1] = (o) => r(qe)(o, () => A.$emit("close-picker")))
            }, Ve(A.cancelText), 545)) : x("", !0),
            r(n).showNow ? ($(), G("button", {
              key: 1,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: w[2] || (w[2] = (o) => A.$emit("select-now")),
              onKeydown: w[3] || (w[3] = (o) => r(qe)(o, () => A.$emit("select-now")))
            }, Ve(A.nowButtonLabel), 33)) : x("", !0),
            r(n).showSelect ? ($(), G("button", {
              key: 2,
              ref_key: "selectButtonRef",
              ref: S,
              type: "button",
              class: "dp__action_button dp__action_select",
              disabled: q.value,
              "data-test": "select-button",
              onKeydown: w[4] || (w[4] = (o) => r(qe)(o, () => O())),
              onClick: O
            }, Ve(A.selectText), 41, Ql)) : x("", !0)
          ], 64))
        ], 512)
      ], 64))
    ], 512));
  }
}), Xl = { class: "dp__selection_grid_header" }, Jl = ["aria-selected", "aria-disabled", "data-test", "onClick", "onKeydown", "onMouseover"], Zl = ["aria-label"], qt = /* @__PURE__ */ Le({
  __name: "SelectionOverlay",
  props: {
    items: {},
    type: {},
    isLast: { type: Boolean },
    arrowNavigation: { type: Boolean },
    skipButtonRef: { type: Boolean },
    headerRefs: {},
    hideNavigation: {},
    escClose: { type: Boolean },
    useRelative: { type: Boolean },
    height: {},
    textInput: { type: [Boolean, Object] },
    config: {},
    noOverlayFocus: { type: Boolean },
    focusValue: {},
    menuWrapRef: {},
    ariaLabels: {}
  },
  emits: ["selected", "toggle", "reset-flow", "hover-value"],
  setup(e, { expose: t, emit: l }) {
    const { setSelectionGrid: a, buildMultiLevelMatrix: n, setMonthPicker: c } = bt(), v = l, b = e, { defaultedAriaLabels: i, defaultedTextInput: L, defaultedConfig: m } = Ce(
      b
    ), { hideNavigationButtons: E } = ma(), k = ae(!1), _ = ae(null), H = ae(null), N = ae([]), S = ae(), y = ae(null), F = ae(0), P = ae(null);
    Un(() => {
      _.value = null;
    }), We(() => {
      xe().then(() => K()), b.noOverlayFocus || Z(), J(!0);
    }), ua(() => J(!1));
    const J = (u) => {
      var I;
      b.arrowNavigation && ((I = b.headerRefs) != null && I.length ? c(u) : a(u));
    }, Z = () => {
      var I;
      const u = Ie(H);
      u && (L.value.enabled || (_.value ? (I = _.value) == null || I.focus({ preventScroll: !0 }) : u.focus({ preventScroll: !0 })), k.value = u.clientHeight < u.scrollHeight);
    }, le = X(
      () => ({
        dp__overlay: !0,
        "dp--overlay-absolute": !b.useRelative,
        "dp--overlay-relative": b.useRelative
      })
    ), q = X(
      () => b.useRelative ? { height: `${b.height}px`, width: "260px" } : void 0
    ), R = X(() => ({
      dp__overlay_col: !0
    })), re = X(
      () => ({
        dp__btn: !0,
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: k.value,
        dp__button_bottom: b.isLast
      })
    ), B = X(() => {
      var u, I;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((u = b.items) == null ? void 0 : u.length) <= 6,
        dp__container_block: ((I = b.items) == null ? void 0 : I.length) > 6
      };
    });
    tt(
      () => b.items,
      () => K(!1),
      { deep: !0 }
    );
    const K = (u = !0) => {
      xe().then(() => {
        const I = Ie(_), se = Ie(H), f = Ie(y), T = Ie(P), Q = f ? f.getBoundingClientRect().height : 0;
        se && (se.getBoundingClientRect().height ? F.value = se.getBoundingClientRect().height - Q : F.value = m.value.modeHeight - Q), I && T && u && (T.scrollTop = I.offsetTop - T.offsetTop - (F.value / 2 - I.getBoundingClientRect().height) - Q);
      });
    }, fe = (u) => {
      u.disabled || v("selected", u.value);
    }, ce = () => {
      v("toggle"), v("reset-flow");
    }, O = () => {
      b.escClose && ce();
    }, A = (u, I, se, f) => {
      u && ((I.active || I.value === b.focusValue) && (_.value = u), b.arrowNavigation && (Array.isArray(N.value[se]) ? N.value[se][f] = u : N.value[se] = [u], w()));
    }, w = () => {
      var I, se;
      const u = (I = b.headerRefs) != null && I.length ? [b.headerRefs].concat(N.value) : N.value.concat([b.skipButtonRef ? [] : [y.value]]);
      n(Ye(u), (se = b.headerRefs) != null && se.length ? "monthPicker" : "selectionGrid");
    }, o = (u) => {
      b.arrowNavigation || yt(u, m.value, !0);
    }, z = (u) => {
      S.value = u, v("hover-value", u);
    }, D = () => {
      if (ce(), !b.isLast) {
        const u = bl(b.menuWrapRef ?? null, "action-row");
        if (u) {
          const I = $n(u);
          I == null || I.focus();
        }
      }
    }, ee = (u) => {
      switch (u.key) {
        case Re.esc:
          return O();
        case Re.arrowLeft:
          return o(u);
        case Re.arrowRight:
          return o(u);
        case Re.arrowUp:
          return o(u);
        case Re.arrowDown:
          return o(u);
        default:
          return;
      }
    }, de = (u) => {
      if (u.key === Re.enter) return ce();
      if (u.key === Re.tab) return D();
    };
    return t({ focusGrid: Z }), (u, I) => {
      var se;
      return $(), G("div", {
        ref_key: "gridWrapRef",
        ref: H,
        class: we(le.value),
        style: et(q.value),
        role: "dialog",
        tabindex: "0",
        onKeydown: ee,
        onClick: I[0] || (I[0] = Wt(() => {
        }, ["prevent"]))
      }, [
        ye("div", {
          ref_key: "containerRef",
          ref: P,
          class: we(B.value),
          role: "grid",
          style: et({ "--dp-overlay-height": `${F.value}px` })
        }, [
          ye("div", Xl, [
            ie(u.$slots, "header")
          ]),
          u.$slots.overlay ? ie(u.$slots, "overlay", { key: 0 }) : ($(!0), G(ke, { key: 1 }, Pe(u.items, (f, T) => ($(), G("div", {
            key: T,
            class: we(["dp__overlay_row", { dp__flex_row: u.items.length >= 3 }]),
            role: "row"
          }, [
            ($(!0), G(ke, null, Pe(f, (Q, s) => ($(), G("div", {
              key: Q.value,
              ref_for: !0,
              ref: (oe) => A(oe, Q, T, s),
              role: "gridcell",
              class: we(R.value),
              "aria-selected": Q.active || void 0,
              "aria-disabled": Q.disabled || void 0,
              tabindex: "0",
              "data-test": Q.text,
              onClick: Wt((oe) => fe(Q), ["prevent"]),
              onKeydown: (oe) => r(qe)(oe, () => fe(Q), !0),
              onMouseover: (oe) => z(Q.value)
            }, [
              ye("div", {
                class: we(Q.className)
              }, [
                u.$slots.item ? ie(u.$slots, "item", {
                  key: 0,
                  item: Q
                }) : x("", !0),
                u.$slots.item ? x("", !0) : ($(), G(ke, { key: 1 }, [
                  ct(Ve(Q.text), 1)
                ], 64))
              ], 2)
            ], 42, Jl))), 128))
          ], 2))), 128))
        ], 6),
        u.$slots["button-icon"] ? na(($(), G("button", {
          key: 0,
          ref_key: "toggleButton",
          ref: y,
          type: "button",
          "aria-label": (se = r(i)) == null ? void 0 : se.toggleOverlay,
          class: we(re.value),
          tabindex: "0",
          onClick: ce,
          onKeydown: de
        }, [
          ie(u.$slots, "button-icon")
        ], 42, Zl)), [
          [la, !r(E)(u.hideNavigation, u.type)]
        ]) : x("", !0)
      ], 38);
    };
  }
}), fa = /* @__PURE__ */ Le({
  __name: "InstanceWrap",
  props: {
    multiCalendars: {},
    stretch: { type: Boolean },
    collapse: { type: Boolean }
  },
  setup(e) {
    const t = e, l = X(
      () => t.multiCalendars > 0 ? [...Array(t.multiCalendars).keys()] : [0]
    ), a = X(() => ({
      dp__instance_calendar: t.multiCalendars > 0
    }));
    return (n, c) => ($(), G("div", {
      class: we({
        dp__menu_inner: !n.stretch,
        "dp--menu--inner-stretched": n.stretch,
        dp__flex_display: n.multiCalendars > 0,
        "dp--flex-display-collapsed": n.collapse
      })
    }, [
      ($(!0), G(ke, null, Pe(l.value, (v, b) => ($(), G("div", {
        key: v,
        class: we(a.value)
      }, [
        ie(n.$slots, "default", {
          instance: v,
          index: b
        })
      ], 2))), 128))
    ], 2));
  }
}), xl = ["aria-label", "aria-disabled"], Vt = /* @__PURE__ */ Le({
  compatConfig: {
    MODE: 3
  },
  __name: "ArrowBtn",
  props: {
    ariaLabel: {},
    disabled: { type: Boolean }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: t }) {
    const l = t, a = ae(null);
    return We(() => l("set-ref", a)), (n, c) => ($(), G("button", {
      ref_key: "elRef",
      ref: a,
      type: "button",
      class: "dp__btn dp--arrow-btn-nav",
      tabindex: "0",
      "aria-label": n.ariaLabel,
      "aria-disabled": n.disabled || void 0,
      onClick: c[0] || (c[0] = (v) => n.$emit("activate")),
      onKeydown: c[1] || (c[1] = (v) => r(qe)(v, () => n.$emit("activate"), !0))
    }, [
      ye("span", {
        class: we(["dp__inner_nav", { dp__inner_nav_disabled: n.disabled }])
      }, [
        ie(n.$slots, "default")
      ], 2)
    ], 40, xl));
  }
}), er = { class: "dp--year-mode-picker" }, tr = ["aria-label", "data-test"], In = /* @__PURE__ */ Le({
  __name: "YearModePicker",
  props: {
    ...rt,
    showYearPicker: { type: Boolean, default: !1 },
    items: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    isDisabled: { type: Function, default: () => !1 }
  },
  emits: ["toggle-year-picker", "year-select", "handle-year"],
  setup(e, { emit: t }) {
    const l = t, a = e, { showRightIcon: n, showLeftIcon: c } = ma(), { defaultedConfig: v, defaultedMultiCalendars: b, defaultedAriaLabels: i, defaultedTransitions: L, defaultedUI: m } = Ce(a), { showTransition: E, transitionName: k } = Xt(L), _ = (S = !1, y) => {
      l("toggle-year-picker", { flow: S, show: y });
    }, H = (S) => {
      l("year-select", S);
    }, N = (S = !1) => {
      l("handle-year", S);
    };
    return (S, y) => {
      var F, P, J, Z, le;
      return $(), G("div", er, [
        r(c)(r(b), e.instance) ? ($(), Me(Vt, {
          key: 0,
          ref: "mpPrevIconRef",
          "aria-label": (F = r(i)) == null ? void 0 : F.prevYear,
          disabled: e.isDisabled(!1),
          class: we((P = r(m)) == null ? void 0 : P.navBtnPrev),
          onActivate: y[0] || (y[0] = (q) => N(!1))
        }, {
          default: he(() => [
            S.$slots["arrow-left"] ? ie(S.$slots, "arrow-left", { key: 0 }) : x("", !0),
            S.$slots["arrow-left"] ? x("", !0) : ($(), Me(r(La), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled", "class"])) : x("", !0),
        ye("button", {
          ref: "mpYearButtonRef",
          class: "dp__btn dp--year-select",
          type: "button",
          "aria-label": (J = r(i)) == null ? void 0 : J.openYearsOverlay,
          "data-test": `year-mode-btn-${e.instance}`,
          onClick: y[1] || (y[1] = () => _(!1)),
          onKeydown: y[2] || (y[2] = Wn(() => _(!1), ["enter"]))
        }, [
          S.$slots.year ? ie(S.$slots, "year", {
            key: 0,
            year: e.year
          }) : x("", !0),
          S.$slots.year ? x("", !0) : ($(), G(ke, { key: 1 }, [
            ct(Ve(e.year), 1)
          ], 64))
        ], 40, tr),
        r(n)(r(b), e.instance) ? ($(), Me(Vt, {
          key: 1,
          ref: "mpNextIconRef",
          "aria-label": (Z = r(i)) == null ? void 0 : Z.nextYear,
          disabled: e.isDisabled(!0),
          class: we((le = r(m)) == null ? void 0 : le.navBtnNext),
          onActivate: y[3] || (y[3] = (q) => N(!0))
        }, {
          default: he(() => [
            S.$slots["arrow-right"] ? ie(S.$slots, "arrow-right", { key: 0 }) : x("", !0),
            S.$slots["arrow-right"] ? x("", !0) : ($(), Me(r(za), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled", "class"])) : x("", !0),
        at(Nt, {
          name: r(k)(e.showYearPicker),
          css: r(E)
        }, {
          default: he(() => [
            e.showYearPicker ? ($(), Me(qt, {
              key: 0,
              items: e.items,
              "text-input": S.textInput,
              "esc-close": S.escClose,
              config: S.config,
              "is-last": S.autoApply && !r(v).keepActionRow,
              "hide-navigation": S.hideNavigation,
              "aria-labels": S.ariaLabels,
              type: "year",
              onToggle: _,
              onSelected: y[4] || (y[4] = (q) => H(q))
            }, Ue({
              "button-icon": he(() => [
                S.$slots["calendar-icon"] ? ie(S.$slots, "calendar-icon", { key: 0 }) : x("", !0),
                S.$slots["calendar-icon"] ? x("", !0) : ($(), Me(r(Et), { key: 1 }))
              ]),
              _: 2
            }, [
              S.$slots["year-overlay-value"] ? {
                name: "item",
                fn: he(({ item: q }) => [
                  ie(S.$slots, "year-overlay-value", {
                    text: q.text,
                    value: q.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "text-input", "esc-close", "config", "is-last", "hide-navigation", "aria-labels"])) : x("", !0)
          ]),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), qa = (e, t, l) => {
  if (t.value && Array.isArray(t.value))
    if (t.value.some((a) => De(e, a))) {
      const a = t.value.filter((n) => !De(n, e));
      t.value = a.length ? a : null;
    } else (l && +l > t.value.length || !l) && t.value.push(e);
  else
    t.value = [e];
}, Xa = (e, t, l) => {
  let a = e.value ? e.value.slice() : [];
  return a.length === 2 && a[1] !== null && (a = []), a.length ? _e(t, a[0]) ? (a.unshift(t), l("range-start", a[0]), l("range-start", a[1])) : (a[1] = t, l("range-end", t)) : (a = [t], l("range-start", t)), a;
}, va = (e, t, l, a) => {
  e && (e[0] && e[1] && l && t("auto-apply"), e[0] && !e[1] && a && l && t("auto-apply"));
}, Nn = (e) => {
  Array.isArray(e.value) && e.value.length <= 2 && e.range ? e.modelValue.value = e.value.map((t) => Xe(j(t), e.timezone)) : Array.isArray(e.value) || (e.modelValue.value = Xe(j(e.value), e.timezone));
}, En = (e, t, l, a) => Array.isArray(t.value) && (t.value.length === 2 || t.value.length === 1 && a.value.partialRange) ? a.value.fixedStart && (Be(e, t.value[0]) || De(e, t.value[0])) ? [t.value[0], e] : a.value.fixedEnd && (_e(e, t.value[1]) || De(e, t.value[1])) ? [e, t.value[1]] : (l("invalid-fixed-range", e), t.value) : [], Fn = ({
  multiCalendars: e,
  range: t,
  highlight: l,
  propDates: a,
  calendars: n,
  modelValue: c,
  props: v,
  filters: b,
  year: i,
  month: L,
  emit: m
}) => {
  const E = X(() => ja(v.yearRange, v.locale, v.reverseYears)), k = ae([!1]), _ = X(() => (B, K) => {
    const fe = Te(lt(/* @__PURE__ */ new Date()), {
      month: L.value(B),
      year: i.value(B)
    }), ce = K ? bn(fe) : oa(fe);
    return Cn(
      ce,
      a.value.maxDate,
      a.value.minDate,
      v.preventMinMaxNavigation,
      K
    );
  }), H = () => Array.isArray(c.value) && e.value.solo && c.value[1], N = () => {
    for (let B = 0; B < e.value.count; B++)
      if (B === 0)
        n.value[B] = n.value[0];
      else if (B === e.value.count - 1 && H())
        n.value[B] = {
          month: be(c.value[1]),
          year: ge(c.value[1])
        };
      else {
        const K = Te(j(), n.value[B - 1]);
        n.value[B] = { month: be(K), year: ge(pn(K, 1)) };
      }
  }, S = (B) => {
    if (!B) return N();
    const K = Te(j(), n.value[B]);
    return n.value[0].year = ge(hn(K, e.value.count - 1)), N();
  }, y = (B, K) => {
    const fe = tl(K, B);
    return t.value.showLastInRange && fe > 1 ? K : B;
  }, F = (B) => v.focusStartDate || e.value.solo ? B[0] : B[1] ? y(B[0], B[1]) : B[0], P = () => {
    if (c.value) {
      const B = Array.isArray(c.value) ? F(c.value) : c.value;
      n.value[0] = { month: be(B), year: ge(B) };
    }
  }, J = () => {
    P(), e.value.count && N();
  };
  tt(c, (B, K) => {
    v.isTextInputDate && JSON.stringify(B ?? {}) !== JSON.stringify(K ?? {}) && J();
  }), We(() => {
    J();
  });
  const Z = (B, K) => {
    n.value[K].year = B, m("update-month-year", { instance: K, year: B, month: n.value[K].month }), e.value.count && !e.value.solo && S(K);
  }, le = X(() => (B) => Yt(E.value, (K) => {
    var A;
    const fe = i.value(B) === K.value, ce = Gt(
      K.value,
      It(a.value.minDate),
      It(a.value.maxDate)
    ) || ((A = b.value.years) == null ? void 0 : A.includes(i.value(B))), O = Qa(l.value, K.value);
    return { active: fe, disabled: ce, highlighted: O };
  })), q = (B, K) => {
    Z(B, K), re(K);
  }, R = (B, K = !1) => {
    if (!_.value(B, K)) {
      const fe = K ? i.value(B) + 1 : i.value(B) - 1;
      Z(fe, B);
    }
  }, re = (B, K = !1, fe) => {
    K || m("reset-flow"), fe !== void 0 ? k.value[B] = fe : k.value[B] = !k.value[B], k.value[B] ? m("overlay-toggle", { open: !0, overlay: He.year }) : (m("overlay-closed"), m("overlay-toggle", { open: !1, overlay: He.year }));
  };
  return {
    isDisabled: _,
    groupedYears: le,
    showYearPicker: k,
    selectYear: Z,
    toggleYearPicker: re,
    handleYearSelect: q,
    handleYear: R
  };
}, ar = (e, t) => {
  const {
    defaultedMultiCalendars: l,
    defaultedAriaLabels: a,
    defaultedTransitions: n,
    defaultedConfig: c,
    defaultedRange: v,
    defaultedHighlight: b,
    propDates: i,
    defaultedTz: L,
    defaultedFilters: m,
    defaultedMultiDates: E
  } = Ce(e), k = () => {
    e.isTextInputDate && J(ge(j(e.startDate)), 0);
  }, { modelValue: _, year: H, month: N, calendars: S } = Jt(e, t, k), y = X(() => Dn(e.formatLocale, e.locale, e.monthNameFormat)), F = ae(null), { checkMinMaxRange: P } = kt(e), {
    selectYear: J,
    groupedYears: Z,
    showYearPicker: le,
    toggleYearPicker: q,
    handleYearSelect: R,
    handleYear: re,
    isDisabled: B
  } = Fn({
    modelValue: _,
    multiCalendars: l,
    range: v,
    highlight: b,
    calendars: S,
    year: H,
    propDates: i,
    month: N,
    filters: m,
    props: e,
    emit: t
  });
  We(() => {
    e.startDate && (_.value && e.focusStartDate || !_.value) && J(ge(j(e.startDate)), 0);
  });
  const K = (T) => T ? { month: be(T), year: ge(T) } : { month: null, year: null }, fe = () => _.value ? Array.isArray(_.value) ? _.value.map((T) => K(T)) : K(_.value) : K(), ce = (T, Q) => {
    const s = S.value[T], oe = fe();
    return Array.isArray(oe) ? oe.some((M) => M.year === (s == null ? void 0 : s.year) && M.month === Q) : (s == null ? void 0 : s.year) === oe.year && Q === oe.month;
  }, O = (T, Q, s) => {
    var M, me;
    const oe = fe();
    return Array.isArray(oe) ? H.value(Q) === ((M = oe[s]) == null ? void 0 : M.year) && T === ((me = oe[s]) == null ? void 0 : me.month) : !1;
  }, A = (T, Q) => {
    if (v.value.enabled) {
      const s = fe();
      if (Array.isArray(_.value) && Array.isArray(s)) {
        const oe = O(T, Q, 0) || O(T, Q, 1), M = dt(lt(j()), T, H.value(Q));
        return da(_.value, F.value, M) && !oe;
      }
      return !1;
    }
    return !1;
  }, w = X(() => (T) => Yt(y.value, (Q) => {
    var d;
    const s = ce(T, Q.value), oe = Gt(
      Q.value,
      Tn(H.value(T), i.value.minDate),
      Sn(H.value(T), i.value.maxDate)
    ) || Sl(i.value.disabledDates, H.value(T)).includes(Q.value) || ((d = m.value.months) == null ? void 0 : d.includes(Q.value)), M = A(Q.value, T), me = On(b.value, Q.value, H.value(T));
    return { active: s, disabled: oe, isBetween: M, highlighted: me };
  })), o = (T, Q) => dt(lt(j()), T, H.value(Q)), z = (T, Q) => {
    const s = _.value ? _.value : lt(/* @__PURE__ */ new Date());
    _.value = dt(s, T, H.value(Q)), t("auto-apply"), t("update-flow-step");
  }, D = (T, Q) => {
    const s = o(T, Q);
    v.value.fixedEnd || v.value.fixedStart ? _.value = En(s, _, t, v) : _.value ? P(s, _.value) && (_.value = Xa(_, o(T, Q), t)) : _.value = [o(T, Q)], xe().then(() => {
      va(_.value, t, e.autoApply, e.modelAuto);
    });
  }, ee = (T, Q) => {
    qa(o(T, Q), _, E.value.limit), t("auto-apply", !0);
  }, de = (T, Q) => (S.value[Q].month = T, I(Q, S.value[Q].year, T), E.value.enabled ? ee(T, Q) : v.value.enabled ? D(T, Q) : z(T, Q)), u = (T, Q) => {
    J(T, Q), I(Q, T, null);
  }, I = (T, Q, s) => {
    let oe = s;
    if (!oe && oe !== 0) {
      const M = fe();
      oe = Array.isArray(M) ? M[T].month : M.month;
    }
    t("update-month-year", { instance: T, year: Q, month: oe });
  };
  return {
    groupedMonths: w,
    groupedYears: Z,
    year: H,
    isDisabled: B,
    defaultedMultiCalendars: l,
    defaultedAriaLabels: a,
    defaultedTransitions: n,
    defaultedConfig: c,
    showYearPicker: le,
    modelValue: _,
    presetDate: (T, Q) => {
      Nn({
        value: T,
        modelValue: _,
        range: v.value.enabled,
        timezone: Q ? void 0 : L.value.timezone
      }), t("auto-apply");
    },
    setHoverDate: (T, Q) => {
      F.value = o(T, Q);
    },
    selectMonth: de,
    selectYear: u,
    toggleYearPicker: q,
    handleYearSelect: R,
    handleYear: re,
    getModelMonthYear: fe
  };
}, nr = /* @__PURE__ */ Le({
  compatConfig: {
    MODE: 3
  },
  __name: "MonthPicker",
  props: {
    ...rt
  },
  emits: [
    "update:internal-model-value",
    "overlay-closed",
    "reset-flow",
    "range-start",
    "range-end",
    "auto-apply",
    "update-month-year",
    "update-flow-step",
    "mount",
    "invalid-fixed-range",
    "overlay-toggle"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = Pt(), c = Ze(n, "yearMode"), v = e;
    We(() => {
      v.shadow || a("mount", null);
    });
    const {
      groupedMonths: b,
      groupedYears: i,
      year: L,
      isDisabled: m,
      defaultedMultiCalendars: E,
      defaultedConfig: k,
      showYearPicker: _,
      modelValue: H,
      presetDate: N,
      setHoverDate: S,
      selectMonth: y,
      selectYear: F,
      toggleYearPicker: P,
      handleYearSelect: J,
      handleYear: Z,
      getModelMonthYear: le
    } = ar(v, a);
    return t({ getSidebarProps: () => ({
      modelValue: H,
      year: L,
      getModelMonthYear: le,
      selectMonth: y,
      selectYear: F,
      handleYear: Z
    }), presetDate: N, toggleYearPicker: (R) => P(0, R) }), (R, re) => ($(), Me(fa, {
      "multi-calendars": r(E).count,
      collapse: R.collapse,
      stretch: ""
    }, {
      default: he(({ instance: B }) => [
        R.$slots["top-extra"] ? ie(R.$slots, "top-extra", {
          key: 0,
          value: R.internalModelValue
        }) : x("", !0),
        R.$slots["month-year"] ? ie(R.$slots, "month-year", Ne(Ee({ key: 1 }, {
          year: r(L),
          months: r(b)(B),
          years: r(i)(B),
          selectMonth: r(y),
          selectYear: r(F),
          instance: B
        }))) : ($(), Me(qt, {
          key: 2,
          items: r(b)(B),
          "arrow-navigation": R.arrowNavigation,
          "is-last": R.autoApply && !r(k).keepActionRow,
          "esc-close": R.escClose,
          height: r(k).modeHeight,
          config: R.config,
          "no-overlay-focus": !!(R.noOverlayFocus || R.textInput),
          "use-relative": "",
          type: "month",
          onSelected: (K) => r(y)(K, B),
          onHoverValue: (K) => r(S)(K, B)
        }, Ue({
          header: he(() => [
            at(In, Ee(R.$props, {
              items: r(i)(B),
              instance: B,
              "show-year-picker": r(_)[B],
              year: r(L)(B),
              "is-disabled": (K) => r(m)(B, K),
              onHandleYear: (K) => r(Z)(B, K),
              onYearSelect: (K) => r(J)(K, B),
              onToggleYearPicker: (K) => r(P)(B, K == null ? void 0 : K.flow, K == null ? void 0 : K.show)
            }), Ue({ _: 2 }, [
              Pe(r(c), (K, fe) => ({
                name: K,
                fn: he((ce) => [
                  ie(R.$slots, K, Ne(Qe(ce)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          _: 2
        }, [
          R.$slots["month-overlay-value"] ? {
            name: "item",
            fn: he(({ item: K }) => [
              ie(R.$slots, "month-overlay-value", {
                text: K.text,
                value: K.value
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["items", "arrow-navigation", "is-last", "esc-close", "height", "config", "no-overlay-focus", "onSelected", "onHoverValue"]))
      ]),
      _: 3
    }, 8, ["multi-calendars", "collapse"]));
  }
}), lr = (e, t) => {
  const l = () => {
    e.isTextInputDate && (m.value = ge(j(e.startDate)));
  }, { modelValue: a } = Jt(e, t, l), n = ae(null), { defaultedHighlight: c, defaultedMultiDates: v, defaultedFilters: b, defaultedRange: i, propDates: L } = Ce(e), m = ae();
  We(() => {
    e.startDate && (a.value && e.focusStartDate || !a.value) && (m.value = ge(j(e.startDate)));
  });
  const E = (y) => Array.isArray(a.value) ? a.value.some((F) => ge(F) === y) : a.value ? ge(a.value) === y : !1, k = (y) => i.value.enabled && Array.isArray(a.value) ? da(a.value, n.value, H(y)) : !1, _ = X(() => Yt(ja(e.yearRange, e.locale, e.reverseYears), (y) => {
    const F = E(y.value), P = Gt(
      y.value,
      It(L.value.minDate),
      It(L.value.maxDate)
    ) || b.value.years.includes(y.value), J = k(y.value) && !F, Z = Qa(c.value, y.value);
    return { active: F, disabled: P, isBetween: J, highlighted: Z };
  })), H = (y) => st(lt(oa(/* @__PURE__ */ new Date())), y);
  return {
    groupedYears: _,
    modelValue: a,
    focusYear: m,
    setHoverValue: (y) => {
      n.value = st(lt(/* @__PURE__ */ new Date()), y);
    },
    selectYear: (y) => {
      var F;
      if (t("update-month-year", { instance: 0, year: y }), v.value.enabled)
        return a.value ? Array.isArray(a.value) && (((F = a.value) == null ? void 0 : F.map((J) => ge(J))).includes(y) ? a.value = a.value.filter((J) => ge(J) !== y) : a.value.push(st(Ke(j()), y))) : a.value = [st(Ke(oa(j())), y)], t("auto-apply", !0);
      i.value.enabled ? (a.value = Xa(a, H(y), t), xe().then(() => {
        va(a.value, t, e.autoApply, e.modelAuto);
      })) : (a.value = H(y), t("auto-apply"));
    }
  };
}, rr = /* @__PURE__ */ Le({
  compatConfig: {
    MODE: 3
  },
  __name: "YearPicker",
  props: {
    ...rt
  },
  emits: [
    "update:internal-model-value",
    "reset-flow",
    "range-start",
    "range-end",
    "auto-apply",
    "update-month-year"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, { groupedYears: c, modelValue: v, focusYear: b, selectYear: i, setHoverValue: L } = lr(n, a), { defaultedConfig: m } = Ce(n);
    return t({ getSidebarProps: () => ({
      modelValue: v,
      selectYear: i
    }) }), (k, _) => ($(), G("div", null, [
      k.$slots["top-extra"] ? ie(k.$slots, "top-extra", {
        key: 0,
        value: k.internalModelValue
      }) : x("", !0),
      k.$slots["month-year"] ? ie(k.$slots, "month-year", Ne(Ee({ key: 1 }, {
        years: r(c),
        selectYear: r(i)
      }))) : ($(), Me(qt, {
        key: 2,
        items: r(c),
        "is-last": k.autoApply && !r(m).keepActionRow,
        height: r(m).modeHeight,
        config: k.config,
        "no-overlay-focus": !!(k.noOverlayFocus || k.textInput),
        "focus-value": r(b),
        type: "year",
        "use-relative": "",
        onSelected: r(i),
        onHoverValue: r(L)
      }, Ue({ _: 2 }, [
        k.$slots["year-overlay-value"] ? {
          name: "item",
          fn: he(({ item: H }) => [
            ie(k.$slots, "year-overlay-value", {
              text: H.text,
              value: H.value
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["items", "is-last", "height", "config", "no-overlay-focus", "focus-value", "onSelected", "onHoverValue"]))
    ]));
  }
}), or = {
  key: 0,
  class: "dp__time_input"
}, sr = ["data-test", "aria-label", "onKeydown", "onClick", "onMousedown"], ur = /* @__PURE__ */ ye("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), ir = /* @__PURE__ */ ye("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1), dr = ["aria-label", "disabled", "data-test", "onKeydown", "onClick"], cr = ["data-test", "aria-label", "onKeydown", "onClick", "onMousedown"], fr = /* @__PURE__ */ ye("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), vr = /* @__PURE__ */ ye("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1), mr = { key: 0 }, gr = ["aria-label"], yr = /* @__PURE__ */ Le({
  compatConfig: {
    MODE: 3
  },
  __name: "TimeInput",
  props: {
    hours: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
    seconds: { type: Number, default: 0 },
    closeTimePickerBtn: { type: Object, default: null },
    order: { type: Number, default: 0 },
    disabledTimesConfig: { type: Function, default: null },
    validateTime: { type: Function, default: () => !1 },
    ...rt
  },
  emits: [
    "set-hours",
    "set-minutes",
    "update:hours",
    "update:minutes",
    "update:seconds",
    "reset-flow",
    "mounted",
    "overlay-closed",
    "overlay-opened",
    "am-pm-change"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, { setTimePickerElements: c, setTimePickerBackRef: v } = bt(), { defaultedAriaLabels: b, defaultedTransitions: i, defaultedFilters: L, defaultedConfig: m, defaultedRange: E } = Ce(n), { transitionName: k, showTransition: _ } = Xt(i), H = Qt({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), N = ae("AM"), S = ae(null), y = ae([]), F = ae();
    We(() => {
      a("mounted");
    });
    const P = (d) => Te(/* @__PURE__ */ new Date(), {
      hours: d.hours,
      minutes: d.minutes,
      seconds: n.enableSeconds ? d.seconds : 0,
      milliseconds: 0
    }), J = X(
      () => (d) => w(d, n[d]) || le(d, n[d])
    ), Z = X(() => ({ hours: n.hours, minutes: n.minutes, seconds: n.seconds })), le = (d, Y) => E.value.enabled && !E.value.disableTimeRangeValidation ? !n.validateTime(d, Y) : !1, q = (d, Y) => {
      if (E.value.enabled && !E.value.disableTimeRangeValidation) {
        const W = Y ? +n[`${d}Increment`] : -+n[`${d}Increment`], C = n[d] + W;
        return !n.validateTime(d, C);
      }
      return !1;
    }, R = X(() => (d) => !de(+n[d] + +n[`${d}Increment`], d) || q(d, !0)), re = X(() => (d) => !de(+n[d] - +n[`${d}Increment`], d) || q(d, !1)), B = (d, Y) => kn(Te(j(), d), Y), K = (d, Y) => al(Te(j(), d), Y), fe = X(
      () => ({
        dp__time_col: !0,
        dp__time_col_block: !n.timePickerInline,
        dp__time_col_reg_block: !n.enableSeconds && n.is24 && !n.timePickerInline,
        dp__time_col_reg_inline: !n.enableSeconds && n.is24 && n.timePickerInline,
        dp__time_col_reg_with_button: !n.enableSeconds && !n.is24,
        dp__time_col_sec: n.enableSeconds && n.is24,
        dp__time_col_sec_with_button: n.enableSeconds && !n.is24
      })
    ), ce = X(() => {
      const d = [{ type: "hours" }];
      return n.enableMinutes && d.push({ type: "", separator: !0 }, {
        type: "minutes"
      }), n.enableSeconds && d.push({ type: "", separator: !0 }, {
        type: "seconds"
      }), d;
    }), O = X(() => ce.value.filter((d) => !d.separator)), A = X(() => (d) => {
      if (d === "hours") {
        const Y = Q(+n.hours);
        return { text: Y < 10 ? `0${Y}` : `${Y}`, value: Y };
      }
      return { text: n[d] < 10 ? `0${n[d]}` : `${n[d]}`, value: n[d] };
    }), w = (d, Y) => {
      var C;
      if (!n.disabledTimesConfig) return !1;
      const W = n.disabledTimesConfig(n.order, d === "hours" ? Y : void 0);
      return W[d] ? !!((C = W[d]) != null && C.includes(Y)) : !0;
    }, o = (d, Y) => Y !== "hours" || N.value === "AM" ? d : d + 12, z = (d) => {
      const Y = n.is24 ? 24 : 12, W = d === "hours" ? Y : 60, C = +n[`${d}GridIncrement`], te = d === "hours" && !n.is24 ? C : 0, ue = [];
      for (let p = te; p < W; p += C)
        ue.push({ value: n.is24 ? p : o(p, d), text: p < 10 ? `0${p}` : `${p}` });
      return d === "hours" && !n.is24 && ue.unshift({ value: N.value === "PM" ? 12 : 0, text: "12" }), Yt(ue, (p) => ({ active: !1, disabled: L.value.times[d].includes(p.value) || !de(p.value, d) || w(d, p.value) || le(d, p.value) }));
    }, D = (d) => d >= 0 ? d : 59, ee = (d) => d >= 0 ? d : 23, de = (d, Y) => {
      const W = n.minTime ? P(Aa(n.minTime)) : null, C = n.maxTime ? P(Aa(n.maxTime)) : null, te = P(
        Aa(
          Z.value,
          Y,
          Y === "minutes" || Y === "seconds" ? D(d) : ee(d)
        )
      );
      return W && C ? (Kt(te, C) || _t(te, C)) && (Ot(te, W) || _t(te, W)) : W ? Ot(te, W) || _t(te, W) : C ? Kt(te, C) || _t(te, C) : !0;
    }, u = (d) => n[`no${d[0].toUpperCase() + d.slice(1)}Overlay`], I = (d) => {
      u(d) || (H[d] = !H[d], H[d] ? a("overlay-opened", d) : a("overlay-closed", d));
    }, se = (d) => d === "hours" ? ft : d === "minutes" ? ht : Bt, f = () => {
      F.value && clearTimeout(F.value);
    }, T = (d, Y = !0, W) => {
      const C = Y ? B : K, te = Y ? +n[`${d}Increment`] : -+n[`${d}Increment`];
      de(+n[d] + te, d) && a(
        `update:${d}`,
        se(d)(C({ [d]: +n[d] }, { [d]: +n[`${d}Increment`] }))
      ), !(W != null && W.keyboard) && m.value.timeArrowHoldThreshold && (F.value = setTimeout(() => {
        T(d, Y);
      }, m.value.timeArrowHoldThreshold));
    }, Q = (d) => n.is24 ? d : (d >= 12 ? N.value = "PM" : N.value = "AM", ml(d)), s = () => {
      N.value === "PM" ? (N.value = "AM", a("update:hours", n.hours - 12)) : (N.value = "PM", a("update:hours", n.hours + 12)), a("am-pm-change", N.value);
    }, oe = (d) => {
      H[d] = !0;
    }, M = (d, Y, W) => {
      if (d && n.arrowNavigation) {
        Array.isArray(y.value[Y]) ? y.value[Y][W] = d : y.value[Y] = [d];
        const C = y.value.reduce(
          (te, ue) => ue.map((p, V) => [...te[V] || [], ue[V]]),
          []
        );
        v(n.closeTimePickerBtn), S.value && (C[1] = C[1].concat(S.value)), c(C, n.order);
      }
    }, me = (d, Y) => (I(d), a(`update:${d}`, Y));
    return t({ openChildCmp: oe }), (d, Y) => {
      var W;
      return d.disabled ? x("", !0) : ($(), G("div", or, [
        ($(!0), G(ke, null, Pe(ce.value, (C, te) => {
          var ue, p, V;
          return $(), G("div", {
            key: te,
            class: we(fe.value)
          }, [
            C.separator ? ($(), G(ke, { key: 0 }, [
              ct(" : ")
            ], 64)) : ($(), G(ke, { key: 1 }, [
              ye("button", {
                ref_for: !0,
                ref: (pe) => M(pe, te, 0),
                type: "button",
                class: we({
                  dp__btn: !0,
                  dp__inc_dec_button: !d.timePickerInline,
                  dp__inc_dec_button_inline: d.timePickerInline,
                  dp__tp_inline_btn_top: d.timePickerInline,
                  dp__inc_dec_button_disabled: R.value(C.type)
                }),
                "data-test": `${C.type}-time-inc-btn-${n.order}`,
                "aria-label": (ue = r(b)) == null ? void 0 : ue.incrementValue(C.type),
                tabindex: "0",
                onKeydown: (pe) => r(qe)(pe, () => T(C.type, !0, { keyboard: !0 }), !0),
                onClick: (pe) => r(m).timeArrowHoldThreshold ? void 0 : T(C.type, !0),
                onMousedown: (pe) => r(m).timeArrowHoldThreshold ? T(C.type, !0) : void 0,
                onMouseup: f
              }, [
                n.timePickerInline ? ($(), G(ke, { key: 1 }, [
                  d.$slots["tp-inline-arrow-up"] ? ie(d.$slots, "tp-inline-arrow-up", { key: 0 }) : ($(), G(ke, { key: 1 }, [
                    ur,
                    ir
                  ], 64))
                ], 64)) : ($(), G(ke, { key: 0 }, [
                  d.$slots["arrow-up"] ? ie(d.$slots, "arrow-up", { key: 0 }) : x("", !0),
                  d.$slots["arrow-up"] ? x("", !0) : ($(), Me(r(Va), { key: 1 }))
                ], 64))
              ], 42, sr),
              ye("button", {
                ref_for: !0,
                ref: (pe) => M(pe, te, 1),
                type: "button",
                "aria-label": (p = r(b)) == null ? void 0 : p.openTpOverlay(C.type),
                class: we({
                  dp__time_display: !0,
                  dp__time_display_block: !d.timePickerInline,
                  dp__time_display_inline: d.timePickerInline,
                  "dp--time-invalid": J.value(C.type),
                  "dp--time-overlay-btn": !J.value(C.type)
                }),
                disabled: u(C.type),
                tabindex: "0",
                "data-test": `${C.type}-toggle-overlay-btn-${n.order}`,
                onKeydown: (pe) => r(qe)(pe, () => I(C.type), !0),
                onClick: (pe) => I(C.type)
              }, [
                d.$slots[C.type] ? ie(d.$slots, C.type, {
                  key: 0,
                  text: A.value(C.type).text,
                  value: A.value(C.type).value
                }) : x("", !0),
                d.$slots[C.type] ? x("", !0) : ($(), G(ke, { key: 1 }, [
                  ct(Ve(A.value(C.type).text), 1)
                ], 64))
              ], 42, dr),
              ye("button", {
                ref_for: !0,
                ref: (pe) => M(pe, te, 2),
                type: "button",
                class: we({
                  dp__btn: !0,
                  dp__inc_dec_button: !d.timePickerInline,
                  dp__inc_dec_button_inline: d.timePickerInline,
                  dp__tp_inline_btn_bottom: d.timePickerInline,
                  dp__inc_dec_button_disabled: re.value(C.type)
                }),
                "data-test": `${C.type}-time-dec-btn-${n.order}`,
                "aria-label": (V = r(b)) == null ? void 0 : V.decrementValue(C.type),
                tabindex: "0",
                onKeydown: (pe) => r(qe)(pe, () => T(C.type, !1, { keyboard: !0 }), !0),
                onClick: (pe) => r(m).timeArrowHoldThreshold ? void 0 : T(C.type, !1),
                onMousedown: (pe) => r(m).timeArrowHoldThreshold ? T(C.type, !1) : void 0,
                onMouseup: f
              }, [
                n.timePickerInline ? ($(), G(ke, { key: 1 }, [
                  d.$slots["tp-inline-arrow-down"] ? ie(d.$slots, "tp-inline-arrow-down", { key: 0 }) : ($(), G(ke, { key: 1 }, [
                    fr,
                    vr
                  ], 64))
                ], 64)) : ($(), G(ke, { key: 0 }, [
                  d.$slots["arrow-down"] ? ie(d.$slots, "arrow-down", { key: 0 }) : x("", !0),
                  d.$slots["arrow-down"] ? x("", !0) : ($(), Me(r(Ua), { key: 1 }))
                ], 64))
              ], 42, cr)
            ], 64))
          ], 2);
        }), 128)),
        d.is24 ? x("", !0) : ($(), G("div", mr, [
          d.$slots["am-pm-button"] ? ie(d.$slots, "am-pm-button", {
            key: 0,
            toggle: s,
            value: N.value
          }) : x("", !0),
          d.$slots["am-pm-button"] ? x("", !0) : ($(), G("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: S,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (W = r(b)) == null ? void 0 : W.amPmButton,
            tabindex: "0",
            onClick: s,
            onKeydown: Y[0] || (Y[0] = (C) => r(qe)(C, () => s(), !0))
          }, Ve(N.value), 41, gr))
        ])),
        ($(!0), G(ke, null, Pe(O.value, (C, te) => ($(), Me(Nt, {
          key: te,
          name: r(k)(H[C.type]),
          css: r(_)
        }, {
          default: he(() => [
            H[C.type] ? ($(), Me(qt, {
              key: 0,
              items: z(C.type),
              "is-last": d.autoApply && !r(m).keepActionRow,
              "esc-close": d.escClose,
              type: C.type,
              "text-input": d.textInput,
              config: d.config,
              "arrow-navigation": d.arrowNavigation,
              "aria-labels": d.ariaLabels,
              onSelected: (ue) => me(C.type, ue),
              onToggle: (ue) => I(C.type),
              onResetFlow: Y[1] || (Y[1] = (ue) => d.$emit("reset-flow"))
            }, Ue({
              "button-icon": he(() => [
                d.$slots["clock-icon"] ? ie(d.$slots, "clock-icon", { key: 0 }) : x("", !0),
                d.$slots["clock-icon"] ? x("", !0) : ($(), Me(ia(d.timePickerInline ? r(Et) : r(Ha)), { key: 1 }))
              ]),
              _: 2
            }, [
              d.$slots[`${C.type}-overlay-value`] ? {
                name: "item",
                fn: he(({ item: ue }) => [
                  ie(d.$slots, `${C.type}-overlay-value`, {
                    text: ue.text,
                    value: ue.value
                  })
                ]),
                key: "0"
              } : void 0,
              d.$slots[`${C.type}-overlay-header`] ? {
                name: "header",
                fn: he(() => [
                  ie(d.$slots, `${C.type}-overlay-header`, {
                    toggle: () => I(C.type)
                  })
                ]),
                key: "1"
              } : void 0
            ]), 1032, ["items", "is-last", "esc-close", "type", "text-input", "config", "arrow-navigation", "aria-labels", "onSelected", "onToggle"])) : x("", !0)
          ]),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
}), pr = { class: "dp--tp-wrap" }, hr = ["aria-label", "tabindex"], br = ["tabindex"], kr = ["aria-label"], Ln = /* @__PURE__ */ Le({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePicker",
  props: {
    hours: { type: [Number, Array], default: 0 },
    minutes: { type: [Number, Array], default: 0 },
    seconds: { type: [Number, Array], default: 0 },
    disabledTimesConfig: { type: Function, default: null },
    validateTime: {
      type: Function,
      default: () => !1
    },
    ...rt
  },
  emits: [
    "update:hours",
    "update:minutes",
    "update:seconds",
    "mount",
    "reset-flow",
    "overlay-opened",
    "overlay-closed",
    "am-pm-change"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, { buildMatrix: c, setTimePicker: v } = bt(), b = Pt(), { defaultedTransitions: i, defaultedAriaLabels: L, defaultedTextInput: m, defaultedConfig: E, defaultedRange: k } = Ce(n), { transitionName: _, showTransition: H } = Xt(i), { hideNavigationButtons: N } = ma(), S = ae(null), y = ae(null), F = ae([]), P = ae(null);
    We(() => {
      a("mount"), !n.timePicker && n.arrowNavigation ? c([Ie(S.value)], "time") : v(!0, n.timePicker);
    });
    const J = X(() => k.value.enabled && n.modelAuto ? Mn(n.internalModelValue) : !0), Z = ae(!1), le = (o) => ({
      hours: Array.isArray(n.hours) ? n.hours[o] : n.hours,
      minutes: Array.isArray(n.minutes) ? n.minutes[o] : n.minutes,
      seconds: Array.isArray(n.seconds) ? n.seconds[o] : n.seconds
    }), q = X(() => {
      const o = [];
      if (k.value.enabled)
        for (let z = 0; z < 2; z++)
          o.push(le(z));
      else
        o.push(le(0));
      return o;
    }), R = (o, z = !1, D = "") => {
      z || a("reset-flow"), Z.value = o, a(o ? "overlay-opened" : "overlay-closed", He.time), n.arrowNavigation && v(o), xe(() => {
        D !== "" && F.value[0] && F.value[0].openChildCmp(D);
      });
    }, re = X(() => ({
      dp__btn: !0,
      dp__button: !0,
      dp__button_bottom: n.autoApply && !E.value.keepActionRow
    })), B = Ze(b, "timePicker"), K = (o, z, D) => k.value.enabled ? z === 0 ? [o, q.value[1][D]] : [q.value[0][D], o] : o, fe = (o) => {
      a("update:hours", o);
    }, ce = (o) => {
      a("update:minutes", o);
    }, O = (o) => {
      a("update:seconds", o);
    }, A = () => {
      if (P.value && !m.value.enabled && !n.noOverlayFocus) {
        const o = $n(P.value);
        o && o.focus({ preventScroll: !0 });
      }
    }, w = (o) => {
      a("overlay-closed", o);
    };
    return t({ toggleTimePicker: R }), (o, z) => {
      var D;
      return $(), G("div", pr, [
        !o.timePicker && !o.timePickerInline ? na(($(), G("button", {
          key: 0,
          ref_key: "openTimePickerBtn",
          ref: S,
          type: "button",
          class: we(re.value),
          "aria-label": (D = r(L)) == null ? void 0 : D.openTimePicker,
          tabindex: o.noOverlayFocus ? void 0 : 0,
          "data-test": "open-time-picker-btn",
          onKeydown: z[0] || (z[0] = (ee) => r(qe)(ee, () => R(!0))),
          onClick: z[1] || (z[1] = (ee) => R(!0))
        }, [
          o.$slots["clock-icon"] ? ie(o.$slots, "clock-icon", { key: 0 }) : x("", !0),
          o.$slots["clock-icon"] ? x("", !0) : ($(), Me(r(Ha), { key: 1 }))
        ], 42, hr)), [
          [la, !r(N)(o.hideNavigation, "time")]
        ]) : x("", !0),
        at(Nt, {
          name: r(_)(Z.value),
          css: r(H) && !o.timePickerInline
        }, {
          default: he(() => {
            var ee;
            return [
              Z.value || o.timePicker || o.timePickerInline ? ($(), G("div", {
                key: 0,
                ref_key: "overlayRef",
                ref: P,
                class: we({
                  dp__overlay: !o.timePickerInline,
                  "dp--overlay-absolute": !n.timePicker && !o.timePickerInline,
                  "dp--overlay-relative": n.timePicker
                }),
                style: et(o.timePicker ? { height: `${r(E).modeHeight}px` } : void 0),
                tabindex: o.timePickerInline ? void 0 : 0
              }, [
                ye("div", {
                  class: we(
                    o.timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"
                  ),
                  style: { display: "flex" }
                }, [
                  o.$slots["time-picker-overlay"] ? ie(o.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: fe,
                    setMinutes: ce,
                    setSeconds: O
                  }) : x("", !0),
                  o.$slots["time-picker-overlay"] ? x("", !0) : ($(), G("div", {
                    key: 1,
                    class: we(o.timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
                  }, [
                    ($(!0), G(ke, null, Pe(q.value, (de, u) => na(($(), Me(yr, Ee({
                      key: u,
                      ref_for: !0
                    }, {
                      ...o.$props,
                      order: u,
                      hours: de.hours,
                      minutes: de.minutes,
                      seconds: de.seconds,
                      closeTimePickerBtn: y.value,
                      disabledTimesConfig: e.disabledTimesConfig,
                      disabled: u === 0 ? o.fixedStart : o.fixedEnd
                    }, {
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: F,
                      "validate-time": (I, se) => e.validateTime(I, K(se, u, I)),
                      "onUpdate:hours": (I) => fe(K(I, u, "hours")),
                      "onUpdate:minutes": (I) => ce(K(I, u, "minutes")),
                      "onUpdate:seconds": (I) => O(K(I, u, "seconds")),
                      onMounted: A,
                      onOverlayClosed: w,
                      onOverlayOpened: z[2] || (z[2] = (I) => o.$emit("overlay-opened", I)),
                      onAmPmChange: z[3] || (z[3] = (I) => o.$emit("am-pm-change", I))
                    }), Ue({ _: 2 }, [
                      Pe(r(B), (I, se) => ({
                        name: I,
                        fn: he((f) => [
                          ie(o.$slots, I, Ee({ ref_for: !0 }, f))
                        ])
                      }))
                    ]), 1040, ["validate-time", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [la, u === 0 ? !0 : J.value]
                    ])), 128))
                  ], 2)),
                  !o.timePicker && !o.timePickerInline ? na(($(), G("button", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: y,
                    type: "button",
                    class: we(re.value),
                    "aria-label": (ee = r(L)) == null ? void 0 : ee.closeTimePicker,
                    tabindex: "0",
                    onKeydown: z[4] || (z[4] = (de) => r(qe)(de, () => R(!1))),
                    onClick: z[5] || (z[5] = (de) => R(!1))
                  }, [
                    o.$slots["calendar-icon"] ? ie(o.$slots, "calendar-icon", { key: 0 }) : x("", !0),
                    o.$slots["calendar-icon"] ? x("", !0) : ($(), Me(r(Et), { key: 1 }))
                  ], 42, kr)), [
                    [la, !r(N)(o.hideNavigation, "time")]
                  ]) : x("", !0)
                ], 2)
              ], 14, br)) : x("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), zn = (e, t, l, a) => {
  const { defaultedRange: n } = Ce(e), c = (P, J) => Array.isArray(t[P]) ? t[P][J] : t[P], v = (P) => e.enableSeconds ? Array.isArray(t.seconds) ? t.seconds[P] : t.seconds : 0, b = (P, J) => P ? J !== void 0 ? pt(P, c("hours", J), c("minutes", J), v(J)) : pt(P, t.hours, t.minutes, v()) : mn(j(), v(J)), i = (P, J) => {
    t[P] = J;
  }, L = X(() => e.modelAuto && n.value.enabled ? Array.isArray(l.value) ? l.value.length > 1 : !1 : n.value.enabled), m = (P, J) => {
    const Z = Object.fromEntries(
      Object.keys(t).map((le) => le === P ? [le, J] : [le, t[le]].slice())
    );
    if (L.value && !n.value.disableTimeRangeValidation) {
      const le = (R) => l.value ? pt(
        l.value[R],
        Z.hours[R],
        Z.minutes[R],
        Z.seconds[R]
      ) : null, q = (R) => gn(l.value[R], 0);
      return !(De(le(0), le(1)) && (Ot(le(0), q(1)) || Kt(le(1), q(0))));
    }
    return !0;
  }, E = (P, J) => {
    m(P, J) && (i(P, J), a && a());
  }, k = (P) => {
    E("hours", P);
  }, _ = (P) => {
    E("minutes", P);
  }, H = (P) => {
    E("seconds", P);
  }, N = (P, J, Z, le) => {
    J && k(P), !J && !Z && _(P), Z && H(P), l.value && le(l.value);
  }, S = (P) => {
    if (P) {
      const J = Array.isArray(P), Z = J ? [+P[0].hours, +P[1].hours] : +P.hours, le = J ? [+P[0].minutes, +P[1].minutes] : +P.minutes, q = J ? [+P[0].seconds, +P[1].seconds] : +P.seconds;
      i("hours", Z), i("minutes", le), e.enableSeconds && i("seconds", q);
    }
  }, y = (P, J) => {
    const Z = {
      hours: Array.isArray(t.hours) ? t.hours[P] : t.hours,
      disabledArr: []
    };
    return (J || J === 0) && (Z.hours = J), Array.isArray(e.disabledTimes) && (Z.disabledArr = n.value.enabled && Array.isArray(e.disabledTimes[P]) ? e.disabledTimes[P] : e.disabledTimes), Z;
  }, F = X(() => (P, J) => {
    var Z;
    if (Array.isArray(e.disabledTimes)) {
      const { disabledArr: le, hours: q } = y(P, J), R = le.filter((re) => +re.hours === q);
      return ((Z = R[0]) == null ? void 0 : Z.minutes) === "*" ? { hours: [q], minutes: void 0, seconds: void 0 } : {
        hours: [],
        minutes: (R == null ? void 0 : R.map((re) => +re.minutes)) ?? [],
        seconds: (R == null ? void 0 : R.map((re) => re.seconds ? +re.seconds : void 0)) ?? []
      };
    }
    return { hours: [], minutes: [], seconds: [] };
  });
  return {
    setTime: i,
    updateHours: k,
    updateMinutes: _,
    updateSeconds: H,
    getSetDateTime: b,
    updateTimeValues: N,
    getSecondsValue: v,
    assignStartTime: S,
    validateTime: m,
    disabledTimesConfig: F
  };
}, wr = (e, t) => {
  const l = () => {
    e.isTextInputDate && J();
  }, { modelValue: a, time: n } = Jt(e, t, l), { defaultedStartTime: c, defaultedRange: v, defaultedTz: b } = Ce(e), { updateTimeValues: i, getSetDateTime: L, setTime: m, assignStartTime: E, disabledTimesConfig: k, validateTime: _ } = zn(e, n, a, H);
  function H() {
    t("update-flow-step");
  }
  const N = (q) => {
    const { hours: R, minutes: re, seconds: B } = q;
    return { hours: +R, minutes: +re, seconds: B ? +B : 0 };
  }, S = () => {
    if (e.startTime) {
      if (Array.isArray(e.startTime)) {
        const R = N(e.startTime[0]), re = N(e.startTime[1]);
        return [Te(j(), R), Te(j(), re)];
      }
      const q = N(e.startTime);
      return Te(j(), q);
    }
    return v.value.enabled ? [null, null] : null;
  }, y = () => {
    if (v.value.enabled) {
      const [q, R] = S();
      a.value = [
        Xe(L(q, 0), b.value.timezone),
        Xe(L(R, 1), b.value.timezone)
      ];
    } else
      a.value = Xe(L(S()), b.value.timezone);
  }, F = (q) => Array.isArray(q) ? [St(j(q[0])), St(j(q[1]))] : [St(q ?? j())], P = (q, R, re) => {
    m("hours", q), m("minutes", R), m("seconds", e.enableSeconds ? re : 0);
  }, J = () => {
    const [q, R] = F(a.value);
    return v.value.enabled ? P(
      [q.hours, R.hours],
      [q.minutes, R.minutes],
      [q.seconds, R.seconds]
    ) : P(q.hours, q.minutes, q.seconds);
  };
  We(() => {
    if (!e.shadow)
      return E(c.value), a.value ? J() : y();
  });
  const Z = () => {
    Array.isArray(a.value) ? a.value = a.value.map((q, R) => q && L(q, R)) : a.value = L(a.value), t("time-update");
  };
  return {
    modelValue: a,
    time: n,
    disabledTimesConfig: k,
    updateTime: (q, R = !0, re = !1) => {
      i(q, R, re, Z);
    },
    validateTime: _
  };
}, Dr = /* @__PURE__ */ Le({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePickerSolo",
  props: {
    ...rt
  },
  emits: [
    "update:internal-model-value",
    "time-update",
    "am-pm-change",
    "mount",
    "reset-flow",
    "update-flow-step",
    "overlay-toggle"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, c = Pt(), v = Ze(c, "timePicker"), b = ae(null), { time: i, modelValue: L, disabledTimesConfig: m, updateTime: E, validateTime: k } = wr(n, a);
    return We(() => {
      n.shadow || a("mount", null);
    }), t({ getSidebarProps: () => ({
      modelValue: L,
      time: i,
      updateTime: E
    }), toggleTimePicker: (N, S = !1, y = "") => {
      var F;
      (F = b.value) == null || F.toggleTimePicker(N, S, y);
    } }), (N, S) => ($(), Me(fa, {
      "multi-calendars": 0,
      stretch: ""
    }, {
      default: he(() => [
        at(Ln, Ee({
          ref_key: "tpRef",
          ref: b
        }, N.$props, {
          hours: r(i).hours,
          minutes: r(i).minutes,
          seconds: r(i).seconds,
          "internal-model-value": N.internalModelValue,
          "disabled-times-config": r(m),
          "validate-time": r(k),
          "onUpdate:hours": S[0] || (S[0] = (y) => r(E)(y)),
          "onUpdate:minutes": S[1] || (S[1] = (y) => r(E)(y, !1)),
          "onUpdate:seconds": S[2] || (S[2] = (y) => r(E)(y, !1, !0)),
          onAmPmChange: S[3] || (S[3] = (y) => N.$emit("am-pm-change", y)),
          onResetFlow: S[4] || (S[4] = (y) => N.$emit("reset-flow")),
          onOverlayClosed: S[5] || (S[5] = (y) => N.$emit("overlay-toggle", { open: !1, overlay: y })),
          onOverlayOpened: S[6] || (S[6] = (y) => N.$emit("overlay-toggle", { open: !0, overlay: y }))
        }), Ue({ _: 2 }, [
          Pe(r(v), (y, F) => ({
            name: y,
            fn: he((P) => [
              ie(N.$slots, y, Ne(Qe(P)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"])
      ]),
      _: 3
    }));
  }
}), Mr = { class: "dp--header-wrap" }, $r = {
  key: 0,
  class: "dp__month_year_wrap"
}, Ar = { key: 0 }, Tr = { class: "dp__month_year_wrap" }, Sr = ["aria-label", "data-test", "onClick", "onKeydown"], Pr = /* @__PURE__ */ Le({
  compatConfig: {
    MODE: 3
  },
  __name: "DpHeader",
  props: {
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    instance: { type: Number, default: 0 },
    years: { type: Array, default: () => [] },
    months: { type: Array, default: () => [] },
    ...rt
  },
  emits: ["update-month-year", "mount", "reset-flow", "overlay-closed", "overlay-opened"],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, {
      defaultedTransitions: c,
      defaultedAriaLabels: v,
      defaultedMultiCalendars: b,
      defaultedFilters: i,
      defaultedConfig: L,
      defaultedHighlight: m,
      propDates: E,
      defaultedUI: k
    } = Ce(n), { transitionName: _, showTransition: H } = Xt(c), { buildMatrix: N } = bt(), { handleMonthYearChange: S, isDisabled: y, updateMonthYear: F } = Kl(n, a), { showLeftIcon: P, showRightIcon: J } = ma(), Z = ae(!1), le = ae(!1), q = ae([null, null, null, null]);
    We(() => {
      a("mount");
    });
    const R = (u) => ({
      get: () => n[u],
      set: (I) => {
        const se = u === nt.month ? nt.year : nt.month;
        a("update-month-year", { [u]: I, [se]: n[se] }), u === nt.month ? w(!0) : o(!0);
      }
    }), re = X(R(nt.month)), B = X(R(nt.year)), K = X(() => (u) => ({
      month: n.month,
      year: n.year,
      items: u === nt.month ? n.months : n.years,
      instance: n.instance,
      updateMonthYear: F,
      toggle: u === nt.month ? w : o
    })), fe = X(() => {
      const u = n.months.find((I) => I.value === n.month);
      return u || { text: "", value: 0 };
    }), ce = X(() => Yt(n.months, (u) => {
      const I = n.month === u.value, se = Gt(
        u.value,
        Tn(n.year, E.value.minDate),
        Sn(n.year, E.value.maxDate)
      ) || i.value.months.includes(u.value), f = On(m.value, u.value, n.year);
      return { active: I, disabled: se, highlighted: f };
    })), O = X(() => Yt(n.years, (u) => {
      const I = n.year === u.value, se = Gt(
        u.value,
        It(E.value.minDate),
        It(E.value.maxDate)
      ) || i.value.years.includes(u.value), f = Qa(m.value, u.value);
      return { active: I, disabled: se, highlighted: f };
    })), A = (u, I, se) => {
      se !== void 0 ? u.value = se : u.value = !u.value, u.value ? a("overlay-opened", I) : a("overlay-closed", I);
    }, w = (u = !1, I) => {
      z(u), A(Z, He.month, I);
    }, o = (u = !1, I) => {
      z(u), A(le, He.year, I);
    }, z = (u) => {
      u || a("reset-flow");
    }, D = (u, I) => {
      n.arrowNavigation && (q.value[I] = Ie(u), N(q.value, "monthYear"));
    }, ee = X(() => {
      var u, I;
      return [
        {
          type: nt.month,
          index: 1,
          toggle: w,
          modelValue: re.value,
          updateModelValue: (se) => re.value = se,
          text: fe.value.text,
          showSelectionGrid: Z.value,
          items: ce.value,
          ariaLabel: (u = v.value) == null ? void 0 : u.openMonthsOverlay
        },
        {
          type: nt.year,
          index: 2,
          toggle: o,
          modelValue: B.value,
          updateModelValue: (se) => B.value = se,
          text: An(n.year, n.locale),
          showSelectionGrid: le.value,
          items: O.value,
          ariaLabel: (I = v.value) == null ? void 0 : I.openYearsOverlay
        }
      ];
    }), de = X(() => n.disableYearSelect ? [ee.value[0]] : n.yearFirst ? [...ee.value].reverse() : ee.value);
    return t({
      toggleMonthPicker: w,
      toggleYearPicker: o,
      handleMonthYearChange: S
    }), (u, I) => {
      var se, f, T, Q, s, oe;
      return $(), G("div", Mr, [
        u.$slots["month-year"] ? ($(), G("div", $r, [
          ie(u.$slots, "month-year", Ne(Qe({ month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: r(F), handleMonthYearChange: r(S), instance: e.instance })))
        ])) : ($(), G(ke, { key: 1 }, [
          u.$slots["top-extra"] ? ($(), G("div", Ar, [
            ie(u.$slots, "top-extra", { value: u.internalModelValue })
          ])) : x("", !0),
          ye("div", Tr, [
            r(P)(r(b), e.instance) && !u.vertical ? ($(), Me(Vt, {
              key: 0,
              "aria-label": (se = r(v)) == null ? void 0 : se.prevMonth,
              disabled: r(y)(!1),
              class: we((f = r(k)) == null ? void 0 : f.navBtnPrev),
              onActivate: I[0] || (I[0] = (M) => r(S)(!1, !0)),
              onSetRef: I[1] || (I[1] = (M) => D(M, 0))
            }, {
              default: he(() => [
                u.$slots["arrow-left"] ? ie(u.$slots, "arrow-left", { key: 0 }) : x("", !0),
                u.$slots["arrow-left"] ? x("", !0) : ($(), Me(r(La), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled", "class"])) : x("", !0),
            ye("div", {
              class: we(["dp__month_year_wrap", {
                dp__year_disable_select: u.disableYearSelect
              }])
            }, [
              ($(!0), G(ke, null, Pe(de.value, (M, me) => ($(), G(ke, {
                key: M.type
              }, [
                ye("button", {
                  ref_for: !0,
                  ref: (d) => D(d, me + 1),
                  type: "button",
                  class: "dp__btn dp__month_year_select",
                  tabindex: "0",
                  "aria-label": M.ariaLabel,
                  "data-test": `${M.type}-toggle-overlay-${e.instance}`,
                  onClick: M.toggle,
                  onKeydown: (d) => r(qe)(d, () => M.toggle(), !0)
                }, [
                  u.$slots[M.type] ? ie(u.$slots, M.type, {
                    key: 0,
                    text: M.text,
                    value: n[M.type]
                  }) : x("", !0),
                  u.$slots[M.type] ? x("", !0) : ($(), G(ke, { key: 1 }, [
                    ct(Ve(M.text), 1)
                  ], 64))
                ], 40, Sr),
                at(Nt, {
                  name: r(_)(M.showSelectionGrid),
                  css: r(H)
                }, {
                  default: he(() => [
                    M.showSelectionGrid ? ($(), Me(qt, {
                      key: 0,
                      items: M.items,
                      "arrow-navigation": u.arrowNavigation,
                      "hide-navigation": u.hideNavigation,
                      "is-last": u.autoApply && !r(L).keepActionRow,
                      "skip-button-ref": !1,
                      config: u.config,
                      type: M.type,
                      "header-refs": [],
                      "esc-close": u.escClose,
                      "menu-wrap-ref": u.menuWrapRef,
                      "text-input": u.textInput,
                      "aria-labels": u.ariaLabels,
                      onSelected: M.updateModelValue,
                      onToggle: M.toggle
                    }, Ue({
                      "button-icon": he(() => [
                        u.$slots["calendar-icon"] ? ie(u.$slots, "calendar-icon", { key: 0 }) : x("", !0),
                        u.$slots["calendar-icon"] ? x("", !0) : ($(), Me(r(Et), { key: 1 }))
                      ]),
                      _: 2
                    }, [
                      u.$slots[`${M.type}-overlay-value`] ? {
                        name: "item",
                        fn: he(({ item: d }) => [
                          ie(u.$slots, `${M.type}-overlay-value`, {
                            text: d.text,
                            value: d.value
                          })
                        ]),
                        key: "0"
                      } : void 0,
                      u.$slots[`${M.type}-overlay`] ? {
                        name: "overlay",
                        fn: he(() => [
                          ie(u.$slots, `${M.type}-overlay`, Ee({ ref_for: !0 }, K.value(M.type)))
                        ]),
                        key: "1"
                      } : void 0,
                      u.$slots[`${M.type}-overlay-header`] ? {
                        name: "header",
                        fn: he(() => [
                          ie(u.$slots, `${M.type}-overlay-header`, {
                            toggle: M.toggle
                          })
                        ]),
                        key: "2"
                      } : void 0
                    ]), 1032, ["items", "arrow-navigation", "hide-navigation", "is-last", "config", "type", "esc-close", "menu-wrap-ref", "text-input", "aria-labels", "onSelected", "onToggle"])) : x("", !0)
                  ]),
                  _: 2
                }, 1032, ["name", "css"])
              ], 64))), 128))
            ], 2),
            r(P)(r(b), e.instance) && u.vertical ? ($(), Me(Vt, {
              key: 1,
              "aria-label": (T = r(v)) == null ? void 0 : T.prevMonth,
              disabled: r(y)(!1),
              class: we((Q = r(k)) == null ? void 0 : Q.navBtnPrev),
              onActivate: I[2] || (I[2] = (M) => r(S)(!1, !0))
            }, {
              default: he(() => [
                u.$slots["arrow-up"] ? ie(u.$slots, "arrow-up", { key: 0 }) : x("", !0),
                u.$slots["arrow-up"] ? x("", !0) : ($(), Me(r(Va), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled", "class"])) : x("", !0),
            r(J)(r(b), e.instance) ? ($(), Me(Vt, {
              key: 2,
              ref: "rightIcon",
              disabled: r(y)(!0),
              "aria-label": (s = r(v)) == null ? void 0 : s.nextMonth,
              class: we((oe = r(k)) == null ? void 0 : oe.navBtnNext),
              onActivate: I[3] || (I[3] = (M) => r(S)(!0, !0)),
              onSetRef: I[4] || (I[4] = (M) => D(M, u.disableYearSelect ? 2 : 3))
            }, {
              default: he(() => [
                u.$slots[u.vertical ? "arrow-down" : "arrow-right"] ? ie(u.$slots, u.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : x("", !0),
                u.$slots[u.vertical ? "arrow-down" : "arrow-right"] ? x("", !0) : ($(), Me(ia(u.vertical ? r(Ua) : r(za)), { key: 1 }))
              ]),
              _: 3
            }, 8, ["disabled", "aria-label", "class"])) : x("", !0)
          ])
        ], 64))
      ]);
    };
  }
}), Rr = ["aria-label"], Cr = {
  class: "dp__calendar_header",
  role: "row"
}, _r = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, Or = ["aria-label"], Br = /* @__PURE__ */ ye("div", { class: "dp__calendar_header_separator" }, null, -1), Yr = ["aria-label"], Ir = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
}, Nr = { class: "dp__cell_inner" }, Er = ["id", "aria-selected", "aria-disabled", "aria-label", "data-test", "onClick", "onKeydown", "onMouseenter", "onMouseleave", "onMousedown"], Fr = /* @__PURE__ */ Le({
  compatConfig: {
    MODE: 3
  },
  __name: "DpCalendar",
  props: {
    mappedDates: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    ...rt
  },
  emits: [
    "select-date",
    "set-hover-date",
    "handle-scroll",
    "mount",
    "handle-swipe",
    "handle-space",
    "tooltip-open",
    "tooltip-close"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, { buildMultiLevelMatrix: c } = bt(), {
      defaultedTransitions: v,
      defaultedConfig: b,
      defaultedAriaLabels: i,
      defaultedMultiCalendars: L,
      defaultedWeekNumbers: m,
      defaultedMultiDates: E,
      defaultedUI: k
    } = Ce(n), _ = ae(null), H = ae({
      bottom: "",
      left: "",
      transform: ""
    }), N = ae([]), S = ae(null), y = ae(!0), F = ae(""), P = ae({ startX: 0, endX: 0, startY: 0, endY: 0 }), J = ae([]), Z = ae({ left: "50%" }), le = ae(!1), q = X(() => n.calendar ? n.calendar(n.mappedDates) : n.mappedDates), R = X(() => n.dayNames ? Array.isArray(n.dayNames) ? n.dayNames : n.dayNames(n.locale, +n.weekStart) : vl(n.formatLocale, n.locale, +n.weekStart));
    We(() => {
      a("mount", { cmp: "calendar", refs: N }), b.value.noSwipe || S.value && (S.value.addEventListener("touchstart", D, { passive: !1 }), S.value.addEventListener("touchend", ee, { passive: !1 }), S.value.addEventListener("touchmove", de, { passive: !1 })), n.monthChangeOnScroll && S.value && S.value.addEventListener("wheel", se, { passive: !1 });
    });
    const re = (M) => M ? n.vertical ? "vNext" : "next" : n.vertical ? "vPrevious" : "previous", B = (M, me) => {
      if (n.transitions) {
        const d = Ke(dt(j(), n.month, n.year));
        F.value = Be(Ke(dt(j(), M, me)), d) ? v.value[re(!0)] : v.value[re(!1)], y.value = !1, xe(() => {
          y.value = !0;
        });
      }
    }, K = X(
      () => ({
        [n.calendarClassName]: !!n.calendarClassName,
        ...k.value.calendar ?? {}
      })
    ), fe = X(() => (M) => {
      const me = gl(M);
      return {
        dp__marker_dot: me.type === "dot",
        dp__marker_line: me.type === "line"
      };
    }), ce = X(() => (M) => De(M, _.value)), O = X(() => ({
      dp__calendar: !0,
      dp__calendar_next: L.value.count > 0 && n.instance !== 0
    })), A = X(() => (M) => n.hideOffsetDates ? M.current : !0), w = async (M, me, d) => {
      const Y = Ie(N.value[me][d]);
      if (Y) {
        const { width: W, height: C } = Y.getBoundingClientRect();
        _.value = M.value;
        let te = { left: `${W / 2}px` }, ue = -50;
        if (await xe(), J.value[0]) {
          const { left: p, width: V } = J.value[0].getBoundingClientRect();
          p < 0 && (te = { left: "0" }, ue = 0, Z.value.left = `${W / 2}px`), window.innerWidth < p + V && (te = { right: "0" }, ue = 0, Z.value.left = `${V - W / 2}px`);
        }
        H.value = {
          bottom: `${C}px`,
          ...te,
          transform: `translateX(${ue}%)`
        }, a("tooltip-open", M.marker);
      }
    }, o = async (M, me, d) => {
      var Y, W;
      if (le.value && E.value.enabled && E.value.dragSelect)
        return a("select-date", M);
      a("set-hover-date", M), (W = (Y = M.marker) == null ? void 0 : Y.tooltip) != null && W.length && await w(M, me, d);
    }, z = (M) => {
      _.value && (_.value = null, H.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), a("tooltip-close", M.marker));
    }, D = (M) => {
      P.value.startX = M.changedTouches[0].screenX, P.value.startY = M.changedTouches[0].screenY;
    }, ee = (M) => {
      P.value.endX = M.changedTouches[0].screenX, P.value.endY = M.changedTouches[0].screenY, u();
    }, de = (M) => {
      n.vertical && !n.inline && M.preventDefault();
    }, u = () => {
      const M = n.vertical ? "Y" : "X";
      Math.abs(P.value[`start${M}`] - P.value[`end${M}`]) > 10 && a("handle-swipe", P.value[`start${M}`] > P.value[`end${M}`] ? "right" : "left");
    }, I = (M, me, d) => {
      M && (Array.isArray(N.value[me]) ? N.value[me][d] = M : N.value[me] = [M]), n.arrowNavigation && c(N.value, "calendar");
    }, se = (M) => {
      n.monthChangeOnScroll && (M.preventDefault(), a("handle-scroll", M));
    }, f = (M) => m.value.type === "local" ? nl(M.value, { weekStartsOn: +n.weekStart }) : m.value.type === "iso" ? ll(M.value) : typeof m.value.type == "function" ? m.value.type(M.value) : "", T = (M) => {
      const me = M[0];
      return m.value.hideOnOffsetDates ? M.some((d) => d.current) ? f(me) : "" : f(me);
    }, Q = (M, me) => {
      E.value.enabled || (yt(M, b.value), a("select-date", me));
    }, s = (M) => {
      yt(M, b.value);
    }, oe = (M) => {
      E.value.enabled && E.value.dragSelect ? (le.value = !0, a("select-date", M)) : E.value.enabled && a("select-date", M);
    };
    return t({ triggerTransition: B }), (M, me) => {
      var d;
      return $(), G("div", {
        class: we(O.value)
      }, [
        ye("div", {
          ref_key: "calendarWrapRef",
          ref: S,
          role: "grid",
          class: we(K.value),
          "aria-label": (d = r(i)) == null ? void 0 : d.calendarWrap
        }, [
          ye("div", Cr, [
            M.weekNumbers ? ($(), G("div", _r, Ve(M.weekNumName), 1)) : x("", !0),
            ($(!0), G(ke, null, Pe(R.value, (Y, W) => {
              var C, te;
              return $(), G("div", {
                key: W,
                class: "dp__calendar_header_item",
                role: "gridcell",
                "data-test": "calendar-header",
                "aria-label": (te = (C = r(i)) == null ? void 0 : C.weekDay) == null ? void 0 : te.call(C, W)
              }, [
                M.$slots["calendar-header"] ? ie(M.$slots, "calendar-header", {
                  key: 0,
                  day: Y,
                  index: W
                }) : x("", !0),
                M.$slots["calendar-header"] ? x("", !0) : ($(), G(ke, { key: 1 }, [
                  ct(Ve(Y), 1)
                ], 64))
              ], 8, Or);
            }), 128))
          ]),
          Br,
          at(Nt, {
            name: F.value,
            css: !!M.transitions
          }, {
            default: he(() => {
              var Y;
              return [
                y.value ? ($(), G("div", {
                  key: 0,
                  class: "dp__calendar",
                  role: "rowgroup",
                  "aria-label": ((Y = r(i)) == null ? void 0 : Y.calendarDays) || void 0,
                  onMouseleave: me[1] || (me[1] = (W) => le.value = !1)
                }, [
                  ($(!0), G(ke, null, Pe(q.value, (W, C) => ($(), G("div", {
                    key: C,
                    class: "dp__calendar_row",
                    role: "row"
                  }, [
                    M.weekNumbers ? ($(), G("div", Ir, [
                      ye("div", Nr, Ve(T(W.days)), 1)
                    ])) : x("", !0),
                    ($(!0), G(ke, null, Pe(W.days, (te, ue) => {
                      var p, V, pe;
                      return $(), G("div", {
                        id: r(Bn)(te.value),
                        ref_for: !0,
                        ref: ($e) => I($e, C, ue),
                        key: ue + C,
                        role: "gridcell",
                        class: "dp__calendar_item",
                        "aria-selected": (te.classData.dp__active_date || te.classData.dp__range_start || te.classData.dp__range_start) ?? void 0,
                        "aria-disabled": te.classData.dp__cell_disabled || void 0,
                        "aria-label": (V = (p = r(i)) == null ? void 0 : p.day) == null ? void 0 : V.call(p, te),
                        tabindex: "0",
                        "data-test": te.value,
                        onClick: Wt(($e) => Q($e, te), ["prevent"]),
                        onKeydown: ($e) => r(qe)($e, () => M.$emit("select-date", te)),
                        onMouseenter: ($e) => o(te, C, ue),
                        onMouseleave: ($e) => z(te),
                        onMousedown: ($e) => oe(te),
                        onMouseup: me[0] || (me[0] = ($e) => le.value = !1)
                      }, [
                        ye("div", {
                          class: we(["dp__cell_inner", te.classData])
                        }, [
                          M.$slots.day && A.value(te) ? ie(M.$slots, "day", {
                            key: 0,
                            day: +te.text,
                            date: te.value
                          }) : x("", !0),
                          M.$slots.day ? x("", !0) : ($(), G(ke, { key: 1 }, [
                            ct(Ve(te.text), 1)
                          ], 64)),
                          te.marker && A.value(te) ? ($(), G(ke, { key: 2 }, [
                            M.$slots.marker ? ie(M.$slots, "marker", {
                              key: 0,
                              marker: te.marker,
                              day: +te.text,
                              date: te.value
                            }) : ($(), G("div", {
                              key: 1,
                              class: we(fe.value(te.marker)),
                              style: et(te.marker.color ? { backgroundColor: te.marker.color } : {})
                            }, null, 6))
                          ], 64)) : x("", !0),
                          ce.value(te.value) ? ($(), G("div", {
                            key: 3,
                            ref_for: !0,
                            ref_key: "activeTooltip",
                            ref: J,
                            class: "dp__marker_tooltip",
                            style: et(H.value)
                          }, [
                            (pe = te.marker) != null && pe.tooltip ? ($(), G("div", {
                              key: 0,
                              class: "dp__tooltip_content",
                              onClick: s
                            }, [
                              ($(!0), G(ke, null, Pe(te.marker.tooltip, ($e, Ge) => ($(), G("div", {
                                key: Ge,
                                class: "dp__tooltip_text"
                              }, [
                                M.$slots["marker-tooltip"] ? ie(M.$slots, "marker-tooltip", {
                                  key: 0,
                                  tooltip: $e,
                                  day: te.value
                                }) : x("", !0),
                                M.$slots["marker-tooltip"] ? x("", !0) : ($(), G(ke, { key: 1 }, [
                                  ye("div", {
                                    class: "dp__tooltip_mark",
                                    style: et($e.color ? { backgroundColor: $e.color } : {})
                                  }, null, 4),
                                  ye("div", null, Ve($e.text), 1)
                                ], 64))
                              ]))), 128)),
                              ye("div", {
                                class: "dp__arrow_bottom_tp",
                                style: et(Z.value)
                              }, null, 4)
                            ])) : x("", !0)
                          ], 4)) : x("", !0)
                        ], 2)
                      ], 40, Er);
                    }), 128))
                  ]))), 128))
                ], 40, Yr)) : x("", !0)
              ];
            }),
            _: 3
          }, 8, ["name", "css"])
        ], 10, Rr)
      ], 2);
    };
  }
}), cn = (e) => Array.isArray(e), Lr = (e, t, l, a) => {
  const n = ae([]), c = ae(/* @__PURE__ */ new Date()), v = ae(), b = () => ee(e.isTextInputDate), { modelValue: i, calendars: L, time: m, today: E } = Jt(e, t, b), {
    defaultedMultiCalendars: k,
    defaultedStartTime: _,
    defaultedRange: H,
    defaultedConfig: N,
    defaultedTz: S,
    propDates: y,
    defaultedMultiDates: F
  } = Ce(e), { validateMonthYearInRange: P, isDisabled: J, isDateRangeAllowed: Z, checkMinMaxRange: le } = kt(e), { updateTimeValues: q, getSetDateTime: R, setTime: re, assignStartTime: B, validateTime: K, disabledTimesConfig: fe } = zn(e, m, i, a), ce = X(
    () => (h) => L.value[h] ? L.value[h].month : 0
  ), O = X(
    () => (h) => L.value[h] ? L.value[h].year : 0
  ), A = (h) => !N.value.keepViewOnOffsetClick || h ? !0 : !v.value, w = (h, g, U, ne = !1) => {
    var Ae, Fe;
    A(ne) && (L.value[h] || (L.value[h] = { month: 0, year: 0 }), L.value[h].month = rn(g) ? (Ae = L.value[h]) == null ? void 0 : Ae.month : g, L.value[h].year = rn(U) ? (Fe = L.value[h]) == null ? void 0 : Fe.year : U);
  }, o = () => {
    e.autoApply && t("select-date");
  };
  We(() => {
    e.shadow || (i.value || (me(), _.value && B(_.value)), ee(!0), e.focusStartDate && e.startDate && me());
  });
  const z = X(() => {
    var h;
    return (h = e.flow) != null && h.length && !e.partialFlow ? e.flowStep === e.flow.length : !0;
  }), D = () => {
    e.autoApply && z.value && t("auto-apply");
  }, ee = (h = !1) => {
    if (i.value)
      return Array.isArray(i.value) ? (n.value = i.value, Q(h)) : I(i.value, h);
    if (k.value.count && h && !e.startDate)
      return u(j(), h);
  }, de = () => Array.isArray(i.value) && H.value.enabled ? be(i.value[0]) === be(i.value[1] ?? i.value[0]) : !1, u = (h = /* @__PURE__ */ new Date(), g = !1) => {
    if ((!k.value.count || !k.value.static || g) && w(0, be(h), ge(h)), k.value.count && (!k.value.solo || !i.value || de()))
      for (let U = 1; U < k.value.count; U++) {
        const ne = Te(j(), { month: ce.value(U - 1), year: O.value(U - 1) }), Ae = kn(ne, { months: 1 });
        L.value[U] = { month: be(Ae), year: ge(Ae) };
      }
  }, I = (h, g) => {
    u(h), re("hours", ft(h)), re("minutes", ht(h)), re("seconds", Bt(h)), k.value.count && g && M();
  }, se = (h) => {
    if (k.value.count) {
      if (k.value.solo) return 0;
      const g = be(h[0]), U = be(h[1]);
      return Math.abs(U - g) < k.value.count ? 0 : 1;
    }
    return 1;
  }, f = (h, g) => {
    h[1] && H.value.showLastInRange ? u(h[se(h)], g) : u(h[0], g);
    const U = (ne, Ae) => [
      ne(h[0]),
      h[1] ? ne(h[1]) : m[Ae][1]
    ];
    re("hours", U(ft, "hours")), re("minutes", U(ht, "minutes")), re("seconds", U(Bt, "seconds"));
  }, T = (h, g) => {
    if ((H.value.enabled || e.weekPicker) && !F.value.enabled)
      return f(h, g);
    if (F.value.enabled && g) {
      const U = h[h.length - 1];
      return I(U, g);
    }
  }, Q = (h) => {
    const g = i.value;
    T(g, h), k.value.count && k.value.solo && M();
  }, s = (h, g) => {
    const U = Te(j(), { month: ce.value(g), year: O.value(g) }), ne = h < 0 ? At(U, 1) : jt(U, 1);
    P(be(ne), ge(ne), h < 0, e.preventMinMaxNavigation) && (w(g, be(ne), ge(ne)), t("update-month-year", { instance: g, month: be(ne), year: ge(ne) }), k.value.count && !k.value.solo && oe(g), l());
  }, oe = (h) => {
    for (let g = h - 1; g >= 0; g--) {
      const U = jt(Te(j(), { month: ce.value(g + 1), year: O.value(g + 1) }), 1);
      w(g, be(U), ge(U));
    }
    for (let g = h + 1; g <= k.value.count - 1; g++) {
      const U = At(Te(j(), { month: ce.value(g - 1), year: O.value(g - 1) }), 1);
      w(g, be(U), ge(U));
    }
  }, M = () => {
    if (Array.isArray(i.value) && i.value.length === 2) {
      const h = j(
        j(i.value[1] ? i.value[1] : At(i.value[0], 1))
      ), [g, U] = [be(i.value[0]), ge(i.value[0])], [ne, Ae] = [be(i.value[1]), ge(i.value[1])];
      (g !== ne || g === ne && U !== Ae) && k.value.solo && w(1, be(h), ge(h));
    } else i.value && !Array.isArray(i.value) && (w(0, be(i.value), ge(i.value)), u(j()));
  }, me = () => {
    e.startDate && (w(0, be(j(e.startDate)), ge(j(e.startDate))), k.value.count && oe(0));
  }, d = (h, g) => {
    if (e.monthChangeOnScroll) {
      const U = (/* @__PURE__ */ new Date()).getTime() - c.value.getTime(), ne = Math.abs(h.deltaY);
      let Ae = 500;
      ne > 1 && (Ae = 100), ne > 100 && (Ae = 0), U > Ae && (c.value = /* @__PURE__ */ new Date(), s(e.monthChangeOnScroll !== "inverse" ? -h.deltaY : h.deltaY, g));
    }
  }, Y = (h, g, U = !1) => {
    e.monthChangeOnArrows && e.vertical === U && W(h, g);
  }, W = (h, g) => {
    s(h === "right" ? -1 : 1, g);
  }, C = (h) => {
    if (y.value.markers)
      return sa(h.value, y.value.markers);
  }, te = (h, g) => {
    switch (e.sixWeeks === !0 ? "append" : e.sixWeeks) {
      case "prepend":
        return [!0, !1];
      case "center":
        return [h == 0, !0];
      case "fair":
        return [h == 0 || g > h, !0];
      case "append":
        return [!1, !1];
      default:
        return [!1, !1];
    }
  }, ue = (h, g, U, ne) => {
    if (e.sixWeeks && h.length < 6) {
      const Ae = 6 - h.length, Fe = (g.getDay() + 7 - ne) % 7, xt = 6 - (U.getDay() + 7 - ne) % 7, [zt, Da] = te(Fe, xt);
      for (let Dt = 1; Dt <= Ae; Dt++)
        if (Da ? !!(Dt % 2) == zt : zt) {
          const ea = h[0].days[0], Ma = p($t(ea.value, -7), be(g));
          h.unshift({ days: Ma });
        } else {
          const ea = h[h.length - 1], Ma = ea.days[ea.days.length - 1], Vn = p($t(Ma.value, 1), be(g));
          h.push({ days: Vn });
        }
    }
    return h;
  }, p = (h, g) => {
    const U = j(h), ne = [];
    for (let Ae = 0; Ae < 7; Ae++) {
      const Fe = $t(U, Ae), wt = be(Fe) !== g;
      ne.push({
        text: e.hideOffsetDates && wt ? "" : Fe.getDate(),
        value: Fe,
        current: !wt,
        classData: {}
      });
    }
    return ne;
  }, V = (h, g) => {
    const U = [], ne = new Date(g, h), Ae = new Date(g, h + 1, 0), Fe = e.weekStart, wt = Fa(ne, { weekStartsOn: Fe }), xt = (zt) => {
      const Da = p(zt, h);
      if (U.push({ days: Da }), !U[U.length - 1].days.some(
        (Dt) => De(Ke(Dt.value), Ke(Ae))
      )) {
        const Dt = $t(zt, 7);
        xt(Dt);
      }
    };
    return xt(wt), ue(U, ne, Ae, Fe);
  }, pe = (h) => {
    const g = pt(j(h.value), m.hours, m.minutes, Je());
    t("date-update", g), F.value.enabled ? qa(g, i, F.value.limit) : i.value = g, a(), xe().then(() => {
      D();
    });
  }, $e = (h) => H.value.noDisabledRange ? Pn(n.value[0], h).some((U) => J(U)) : !1, Ge = () => {
    n.value = i.value ? i.value.slice() : [], n.value.length === 2 && !(H.value.fixedStart || H.value.fixedEnd) && (n.value = []);
  }, ve = (h, g) => {
    const U = [
      j(h.value),
      $t(j(h.value), +H.value.autoRange)
    ];
    Z(U) ? (g && vt(h.value), n.value = U) : t("invalid-date", h.value);
  }, vt = (h) => {
    const g = be(j(h)), U = ge(j(h));
    if (w(0, g, U), k.value.count > 0)
      for (let ne = 1; ne < k.value.count; ne++) {
        const Ae = Ml(
          Te(j(h), { year: O.value(ne - 1), month: ce.value(ne - 1) })
        );
        w(ne, Ae.month, Ae.year);
      }
  }, ot = (h) => {
    if ($e(h.value) || !le(h.value, i.value, H.value.fixedStart ? 0 : 1))
      return t("invalid-date", h.value);
    n.value = En(j(h.value), i, t, H);
  }, Ft = (h, g) => {
    if (Ge(), H.value.autoRange) return ve(h, g);
    if (H.value.fixedStart || H.value.fixedEnd) return ot(h);
    n.value[0] ? le(j(h.value), i.value) && !$e(h.value) ? _e(j(h.value), j(n.value[0])) ? (n.value.unshift(j(h.value)), t("range-end", n.value[0])) : (n.value[1] = j(h.value), t("range-end", n.value[1])) : (e.autoApply && t("auto-apply-invalid", h.value), t("invalid-date", h.value)) : (n.value[0] = j(h.value), t("range-start", n.value[0]));
  }, Je = (h = !0) => e.enableSeconds ? Array.isArray(m.seconds) ? h ? m.seconds[0] : m.seconds[1] : m.seconds : 0, Lt = (h) => {
    n.value[h] = pt(
      n.value[h],
      m.hours[h],
      m.minutes[h],
      Je(h !== 1)
    );
  }, ga = () => {
    var h, g;
    n.value[0] && n.value[1] && +((h = n.value) == null ? void 0 : h[0]) > +((g = n.value) == null ? void 0 : g[1]) && (n.value.reverse(), t("range-start", n.value[0]), t("range-end", n.value[1]));
  }, Zt = () => {
    n.value.length && (n.value[0] && !n.value[1] ? Lt(0) : (Lt(0), Lt(1), a()), ga(), i.value = n.value.slice(), va(n.value, t, e.autoApply, e.modelAuto));
  }, ya = (h, g = !1) => {
    if (J(h.value) || !h.current && e.hideOffsetDates) return t("invalid-date", h.value);
    if (v.value = JSON.parse(JSON.stringify(h)), !H.value.enabled) return pe(h);
    cn(m.hours) && cn(m.minutes) && !F.value.enabled && (Ft(h, g), Zt());
  }, pa = (h, g) => {
    var ne;
    w(h, g.month, g.year, !0), k.value.count && !k.value.solo && oe(h), t("update-month-year", { instance: h, month: g.month, year: g.year }), l(k.value.solo ? h : void 0);
    const U = (ne = e.flow) != null && ne.length ? e.flow[e.flowStep] : void 0;
    !g.fromNav && (U === He.month || U === He.year) && a();
  }, ha = (h, g) => {
    Nn({
      value: h,
      modelValue: i,
      range: H.value.enabled,
      timezone: g ? void 0 : S.value.timezone
    }), o(), e.multiCalendars && xe().then(() => ee(!0));
  }, ba = () => {
    const h = Wa(j(), S.value);
    H.value.enabled ? i.value && Array.isArray(i.value) && i.value[0] ? i.value = _e(h, i.value[0]) ? [h, i.value[0]] : [i.value[0], h] : i.value = [h] : i.value = h, o();
  }, ka = () => {
    if (Array.isArray(i.value))
      if (F.value.enabled) {
        const h = wa();
        i.value[i.value.length - 1] = R(h);
      } else
        i.value = i.value.map((h, g) => h && R(h, g));
    else
      i.value = R(i.value);
    t("time-update");
  }, wa = () => Array.isArray(i.value) && i.value.length ? i.value[i.value.length - 1] : null;
  return {
    calendars: L,
    modelValue: i,
    month: ce,
    year: O,
    time: m,
    disabledTimesConfig: fe,
    today: E,
    validateTime: K,
    getCalendarDays: V,
    getMarker: C,
    handleScroll: d,
    handleSwipe: W,
    handleArrow: Y,
    selectDate: ya,
    updateMonthYear: pa,
    presetDate: ha,
    selectCurrentDate: ba,
    updateTime: (h, g = !0, U = !1) => {
      q(h, g, U, ka);
    },
    assignMonthAndYear: u
  };
}, zr = { key: 0 }, Hr = /* @__PURE__ */ Le({
  __name: "DatePicker",
  props: {
    ...rt
  },
  emits: [
    "tooltip-open",
    "tooltip-close",
    "mount",
    "update:internal-model-value",
    "update-flow-step",
    "reset-flow",
    "auto-apply",
    "focus-menu",
    "select-date",
    "range-start",
    "range-end",
    "invalid-fixed-range",
    "time-update",
    "am-pm-change",
    "time-picker-open",
    "time-picker-close",
    "recalculate-position",
    "update-month-year",
    "auto-apply-invalid",
    "date-update",
    "invalid-date",
    "overlay-toggle"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, {
      calendars: c,
      month: v,
      year: b,
      modelValue: i,
      time: L,
      disabledTimesConfig: m,
      today: E,
      validateTime: k,
      getCalendarDays: _,
      getMarker: H,
      handleArrow: N,
      handleScroll: S,
      handleSwipe: y,
      selectDate: F,
      updateMonthYear: P,
      presetDate: J,
      selectCurrentDate: Z,
      updateTime: le,
      assignMonthAndYear: q
    } = Lr(n, a, de, u), R = Pt(), { setHoverDate: re, getDayClassData: B, clearHoverDate: K } = no(i, n), { defaultedMultiCalendars: fe } = Ce(n), ce = ae([]), O = ae([]), A = ae(null), w = Ze(R, "calendar"), o = Ze(R, "monthYear"), z = Ze(R, "timePicker"), D = (Y) => {
      n.shadow || a("mount", Y);
    };
    tt(
      c,
      () => {
        n.shadow || setTimeout(() => {
          a("recalculate-position");
        }, 0);
      },
      { deep: !0 }
    ), tt(
      fe,
      (Y, W) => {
        Y.count - W.count > 0 && q();
      },
      { deep: !0 }
    );
    const ee = X(() => (Y) => _(v.value(Y), b.value(Y)).map((W) => ({
      ...W,
      days: W.days.map((C) => (C.marker = H(C), C.classData = B(C), C))
    })));
    function de(Y) {
      var W;
      Y || Y === 0 ? (W = O.value[Y]) == null || W.triggerTransition(v.value(Y), b.value(Y)) : O.value.forEach((C, te) => C.triggerTransition(v.value(te), b.value(te)));
    }
    function u() {
      a("update-flow-step");
    }
    const I = (Y, W = !1) => {
      F(Y, W), n.spaceConfirm && a("select-date");
    }, se = (Y, W, C = 0) => {
      var te;
      (te = ce.value[C]) == null || te.toggleMonthPicker(Y, W);
    }, f = (Y, W, C = 0) => {
      var te;
      (te = ce.value[C]) == null || te.toggleYearPicker(Y, W);
    }, T = (Y, W, C) => {
      var te;
      (te = A.value) == null || te.toggleTimePicker(Y, W, C);
    }, Q = (Y, W) => {
      var C;
      if (!n.range) {
        const te = i.value ? i.value : E, ue = W ? new Date(W) : te, p = Y ? Fa(ue, { weekStartsOn: 1 }) : yn(ue, { weekStartsOn: 1 });
        F({
          value: p,
          current: be(ue) === v.value(0),
          text: "",
          classData: {}
        }), (C = document.getElementById(Bn(p))) == null || C.focus();
      }
    }, s = (Y) => {
      var W;
      (W = ce.value[0]) == null || W.handleMonthYearChange(Y, !0);
    }, oe = (Y) => {
      P(0, { month: v.value(0), year: b.value(0) + (Y ? 1 : -1), fromNav: !0 });
    }, M = (Y, W) => {
      Y === He.time && a(`time-picker-${W ? "open" : "close"}`), a("overlay-toggle", { open: W, overlay: Y });
    }, me = (Y) => {
      a("overlay-toggle", { open: !1, overlay: Y }), a("focus-menu");
    };
    return t({
      clearHoverDate: K,
      presetDate: J,
      selectCurrentDate: Z,
      toggleMonthPicker: se,
      toggleYearPicker: f,
      toggleTimePicker: T,
      handleArrow: N,
      updateMonthYear: P,
      getSidebarProps: () => ({
        modelValue: i,
        month: v,
        year: b,
        time: L,
        updateTime: le,
        updateMonthYear: P,
        selectDate: F,
        presetDate: J
      }),
      changeMonth: s,
      changeYear: oe,
      selectWeekDate: Q
    }), (Y, W) => ($(), G(ke, null, [
      at(fa, {
        "multi-calendars": r(fe).count,
        collapse: Y.collapse
      }, {
        default: he(({ instance: C, index: te }) => [
          Y.disableMonthYearSelect ? x("", !0) : ($(), Me(Pr, Ee({
            key: 0,
            ref: (ue) => {
              ue && (ce.value[te] = ue);
            },
            months: r(Dn)(Y.formatLocale, Y.locale, Y.monthNameFormat),
            years: r(ja)(Y.yearRange, Y.locale, Y.reverseYears),
            month: r(v)(C),
            year: r(b)(C),
            instance: C
          }, Y.$props, {
            onMount: W[0] || (W[0] = (ue) => D(r(Tt).header)),
            onResetFlow: W[1] || (W[1] = (ue) => Y.$emit("reset-flow")),
            onUpdateMonthYear: (ue) => r(P)(C, ue),
            onOverlayClosed: me,
            onOverlayOpened: W[2] || (W[2] = (ue) => Y.$emit("overlay-toggle", { open: !0, overlay: ue }))
          }), Ue({ _: 2 }, [
            Pe(r(o), (ue, p) => ({
              name: ue,
              fn: he((V) => [
                ie(Y.$slots, ue, Ne(Qe(V)))
              ])
            }))
          ]), 1040, ["months", "years", "month", "year", "instance", "onUpdateMonthYear"])),
          at(Fr, Ee({
            ref: (ue) => {
              ue && (O.value[te] = ue);
            },
            "mapped-dates": ee.value(C),
            month: r(v)(C),
            year: r(b)(C),
            instance: C
          }, Y.$props, {
            onSelectDate: (ue) => r(F)(ue, C !== 1),
            onHandleSpace: (ue) => I(ue, C !== 1),
            onSetHoverDate: W[3] || (W[3] = (ue) => r(re)(ue)),
            onHandleScroll: (ue) => r(S)(ue, C),
            onHandleSwipe: (ue) => r(y)(ue, C),
            onMount: W[4] || (W[4] = (ue) => D(r(Tt).calendar)),
            onResetFlow: W[5] || (W[5] = (ue) => Y.$emit("reset-flow")),
            onTooltipOpen: W[6] || (W[6] = (ue) => Y.$emit("tooltip-open", ue)),
            onTooltipClose: W[7] || (W[7] = (ue) => Y.$emit("tooltip-close", ue))
          }), Ue({ _: 2 }, [
            Pe(r(w), (ue, p) => ({
              name: ue,
              fn: he((V) => [
                ie(Y.$slots, ue, Ne(Qe({ ...V })))
              ])
            }))
          ]), 1040, ["mapped-dates", "month", "year", "instance", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
        ]),
        _: 3
      }, 8, ["multi-calendars", "collapse"]),
      Y.enableTimePicker ? ($(), G("div", zr, [
        Y.$slots["time-picker"] ? ie(Y.$slots, "time-picker", Ne(Ee({ key: 0 }, { time: r(L), updateTime: r(le) }))) : ($(), Me(Ln, Ee({
          key: 1,
          ref_key: "timePickerRef",
          ref: A
        }, Y.$props, {
          hours: r(L).hours,
          minutes: r(L).minutes,
          seconds: r(L).seconds,
          "internal-model-value": Y.internalModelValue,
          "disabled-times-config": r(m),
          "validate-time": r(k),
          onMount: W[8] || (W[8] = (C) => D(r(Tt).timePicker)),
          "onUpdate:hours": W[9] || (W[9] = (C) => r(le)(C)),
          "onUpdate:minutes": W[10] || (W[10] = (C) => r(le)(C, !1)),
          "onUpdate:seconds": W[11] || (W[11] = (C) => r(le)(C, !1, !0)),
          onResetFlow: W[12] || (W[12] = (C) => Y.$emit("reset-flow")),
          onOverlayClosed: W[13] || (W[13] = (C) => M(C, !1)),
          onOverlayOpened: W[14] || (W[14] = (C) => M(C, !0)),
          onAmPmChange: W[15] || (W[15] = (C) => Y.$emit("am-pm-change", C))
        }), Ue({ _: 2 }, [
          Pe(r(z), (C, te) => ({
            name: C,
            fn: he((ue) => [
              ie(Y.$slots, C, Ne(Qe(ue)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"]))
      ])) : x("", !0)
    ], 64));
  }
}), Vr = (e, t) => {
  const l = ae(), {
    defaultedMultiCalendars: a,
    defaultedConfig: n,
    defaultedHighlight: c,
    defaultedRange: v,
    propDates: b,
    defaultedFilters: i,
    defaultedMultiDates: L
  } = Ce(e), { modelValue: m, year: E, month: k, calendars: _ } = Jt(e, t), { isDisabled: H } = kt(e), { selectYear: N, groupedYears: S, showYearPicker: y, isDisabled: F, toggleYearPicker: P, handleYearSelect: J, handleYear: Z } = Fn({
    modelValue: m,
    multiCalendars: a,
    range: v,
    highlight: c,
    calendars: _,
    propDates: b,
    month: k,
    year: E,
    filters: i,
    props: e,
    emit: t
  }), le = (o, z) => [o, z].map((D) => ut(D, "MMMM", { locale: e.formatLocale })).join("-"), q = X(() => (o) => m.value ? Array.isArray(m.value) ? m.value.some((z) => en(o, z)) : en(m.value, o) : !1), R = (o) => {
    if (v.value.enabled) {
      if (Array.isArray(m.value)) {
        const z = De(o, m.value[0]) || De(o, m.value[1]);
        return da(m.value, l.value, o) && !z;
      }
      return !1;
    }
    return !1;
  }, re = (o, z) => o.quarter === an(z) && o.year === ge(z), B = (o) => typeof c.value == "function" ? c.value({ quarter: an(o), year: ge(o) }) : !!c.value.quarters.find((z) => re(z, o)), K = X(() => (o) => {
    const z = Te(/* @__PURE__ */ new Date(), { year: E.value(o) });
    return rl({
      start: oa(z),
      end: bn(z)
    }).map((D) => {
      const ee = ol(D), de = tn(D), u = H(D), I = R(ee), se = B(ee);
      return {
        text: le(ee, de),
        value: ee,
        active: q.value(ee),
        highlighted: se,
        disabled: u,
        isBetween: I
      };
    });
  }), fe = (o) => {
    qa(o, m, L.value.limit), t("auto-apply", !0);
  }, ce = (o) => {
    m.value = Xa(m, o, t), va(m.value, t, e.autoApply, e.modelAuto);
  }, O = (o) => {
    m.value = o, t("auto-apply");
  };
  return {
    defaultedConfig: n,
    defaultedMultiCalendars: a,
    groupedYears: S,
    year: E,
    isDisabled: F,
    quarters: K,
    showYearPicker: y,
    modelValue: m,
    setHoverDate: (o) => {
      l.value = o;
    },
    selectYear: N,
    selectQuarter: (o, z, D) => {
      if (!D)
        return _.value[z].month = be(tn(o)), L.value.enabled ? fe(o) : v.value.enabled ? ce(o) : O(o);
    },
    toggleYearPicker: P,
    handleYearSelect: J,
    handleYear: Z
  };
}, Ur = { class: "dp--quarter-items" }, Wr = ["data-test", "disabled", "onClick", "onMouseover"], jr = /* @__PURE__ */ Le({
  compatConfig: {
    MODE: 3
  },
  __name: "QuarterPicker",
  props: {
    ...rt
  },
  emits: [
    "update:internal-model-value",
    "reset-flow",
    "overlay-closed",
    "auto-apply",
    "range-start",
    "range-end",
    "overlay-toggle",
    "update-month-year"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, c = Pt(), v = Ze(c, "yearMode"), {
      defaultedMultiCalendars: b,
      defaultedConfig: i,
      groupedYears: L,
      year: m,
      isDisabled: E,
      quarters: k,
      modelValue: _,
      showYearPicker: H,
      setHoverDate: N,
      selectQuarter: S,
      toggleYearPicker: y,
      handleYearSelect: F,
      handleYear: P
    } = Vr(n, a);
    return t({ getSidebarProps: () => ({
      modelValue: _,
      year: m,
      selectQuarter: S,
      handleYearSelect: F,
      handleYear: P
    }) }), (Z, le) => ($(), Me(fa, {
      "multi-calendars": r(b).count,
      collapse: Z.collapse,
      stretch: ""
    }, {
      default: he(({ instance: q }) => [
        ye("div", {
          class: "dp-quarter-picker-wrap",
          style: et({ minHeight: `${r(i).modeHeight}px` })
        }, [
          Z.$slots["top-extra"] ? ie(Z.$slots, "top-extra", {
            key: 0,
            value: Z.internalModelValue
          }) : x("", !0),
          ye("div", null, [
            at(In, Ee(Z.$props, {
              items: r(L)(q),
              instance: q,
              "show-year-picker": r(H)[q],
              year: r(m)(q),
              "is-disabled": (R) => r(E)(q, R),
              onHandleYear: (R) => r(P)(q, R),
              onYearSelect: (R) => r(F)(R, q),
              onToggleYearPicker: (R) => r(y)(q, R == null ? void 0 : R.flow, R == null ? void 0 : R.show)
            }), Ue({ _: 2 }, [
              Pe(r(v), (R, re) => ({
                name: R,
                fn: he((B) => [
                  ie(Z.$slots, R, Ne(Qe(B)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          ye("div", Ur, [
            ($(!0), G(ke, null, Pe(r(k)(q), (R, re) => ($(), G("div", { key: re }, [
              ye("button", {
                type: "button",
                class: we(["dp--qr-btn", {
                  "dp--qr-btn-active": R.active,
                  "dp--qr-btn-between": R.isBetween,
                  "dp--qr-btn-disabled": R.disabled,
                  "dp--highlighted": R.highlighted
                }]),
                "data-test": R.value,
                disabled: R.disabled,
                onClick: (B) => r(S)(R.value, q, R.disabled),
                onMouseover: (B) => r(N)(R.value)
              }, [
                Z.$slots.quarter ? ie(Z.$slots, "quarter", {
                  key: 0,
                  value: R.value,
                  text: R.text
                }) : ($(), G(ke, { key: 1 }, [
                  ct(Ve(R.text), 1)
                ], 64))
              ], 42, Wr)
            ]))), 128))
          ])
        ], 4)
      ]),
      _: 3
    }, 8, ["multi-calendars", "collapse"]));
  }
}), Kr = ["id", "aria-label"], Gr = {
  key: 0,
  class: "dp--menu-load-container"
}, Qr = /* @__PURE__ */ ye("span", { class: "dp--menu-loader" }, null, -1), qr = [
  Qr
], Xr = {
  key: 0,
  class: "dp__sidebar_left"
}, Jr = ["data-test", "onClick", "onKeydown"], Zr = {
  key: 2,
  class: "dp__sidebar_right"
}, xr = {
  key: 3,
  class: "dp__action_extra"
}, fn = /* @__PURE__ */ Le({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerMenu",
  props: {
    ...ca,
    shadow: { type: Boolean, default: !1 },
    openOnTop: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    noOverlayFocus: { type: Boolean, default: !1 },
    collapse: { type: Boolean, default: !1 },
    getInputRect: { type: Function, default: () => ({}) },
    isTextInputDate: { type: Boolean, default: !1 }
  },
  emits: [
    "close-picker",
    "select-date",
    "auto-apply",
    "time-update",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "update:internal-model-value",
    "recalculate-position",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end",
    "auto-apply-invalid",
    "date-update",
    "invalid-date",
    "overlay-toggle"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, c = ae(null), v = X(() => {
      const { openOnTop: p, ...V } = n;
      return {
        ...V,
        flowStep: re.value,
        collapse: n.collapse,
        noOverlayFocus: n.noOverlayFocus,
        menuWrapRef: c.value
      };
    }), { setMenuFocused: b, setShiftKey: i, control: L } = Yn(), m = Pt(), { defaultedTextInput: E, defaultedInline: k, defaultedConfig: _, defaultedUI: H } = Ce(n), N = ae(null), S = ae(0), y = ae(null), F = ae(!1), P = ae(null);
    We(() => {
      if (!n.shadow) {
        F.value = !0, J(), window.addEventListener("resize", J);
        const p = Ie(c);
        if (p && !E.value.enabled && !k.value.enabled && (b(!0), w()), p) {
          const V = (pe) => {
            _.value.allowPreventDefault && pe.preventDefault(), yt(pe, _.value, !0);
          };
          p.addEventListener("pointerdown", V), p.addEventListener("mousedown", V);
        }
      }
    }), ua(() => {
      window.removeEventListener("resize", J);
    });
    const J = () => {
      const p = Ie(y);
      p && (S.value = p.getBoundingClientRect().width);
    }, { arrowRight: Z, arrowLeft: le, arrowDown: q, arrowUp: R } = bt(), { flowStep: re, updateFlowStep: B, childMount: K, resetFlow: fe, handleFlow: ce } = lo(n, a, P), O = X(() => n.monthPicker ? nr : n.yearPicker ? rr : n.timePicker ? Dr : n.quarterPicker ? jr : Hr), A = X(() => {
      var pe;
      if (_.value.arrowLeft) return _.value.arrowLeft;
      const p = (pe = c.value) == null ? void 0 : pe.getBoundingClientRect(), V = n.getInputRect();
      return (V == null ? void 0 : V.width) < (S == null ? void 0 : S.value) && (V == null ? void 0 : V.left) <= ((p == null ? void 0 : p.left) ?? 0) ? `${(V == null ? void 0 : V.width) / 2}px` : (V == null ? void 0 : V.right) >= ((p == null ? void 0 : p.right) ?? 0) && (V == null ? void 0 : V.width) < (S == null ? void 0 : S.value) ? `${(S == null ? void 0 : S.value) - (V == null ? void 0 : V.width) / 2}px` : "50%";
    }), w = () => {
      const p = Ie(c);
      p && p.focus({ preventScroll: !0 });
    }, o = X(() => {
      var p;
      return ((p = P.value) == null ? void 0 : p.getSidebarProps()) || {};
    }), z = () => {
      n.openOnTop && a("recalculate-position");
    }, D = Ze(m, "action"), ee = X(() => n.monthPicker || n.yearPicker ? Ze(m, "monthYear") : n.timePicker ? Ze(m, "timePicker") : Ze(m, "shared")), de = X(() => n.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), u = X(() => ({
      dp__menu_disabled: n.disabled,
      dp__menu_readonly: n.readonly,
      "dp-menu-loading": n.loading
    })), I = X(
      () => ({
        dp__menu: !0,
        dp__menu_index: !k.value.enabled,
        dp__relative: k.value.enabled,
        [n.menuClassName]: !!n.menuClassName,
        ...H.value.menu ?? {}
      })
    ), se = (p) => {
      yt(p, _.value, !0);
    }, f = () => {
      n.escClose && a("close-picker");
    }, T = (p) => {
      if (n.arrowNavigation) {
        if (p === je.up) return R();
        if (p === je.down) return q();
        if (p === je.left) return le();
        if (p === je.right) return Z();
      } else p === je.left || p === je.up ? me("handleArrow", je.left, 0, p === je.up) : me("handleArrow", je.right, 0, p === je.down);
    }, Q = (p) => {
      i(p.shiftKey), !n.disableMonthYearSelect && p.code === Re.tab && p.target.classList.contains("dp__menu") && L.value.shiftKeyInMenu && (p.preventDefault(), yt(p, _.value, !0), a("close-picker"));
    }, s = () => {
      w(), a("time-picker-close");
    }, oe = (p) => {
      var V, pe, $e;
      (V = P.value) == null || V.toggleTimePicker(!1, !1), (pe = P.value) == null || pe.toggleMonthPicker(!1, !1, p), ($e = P.value) == null || $e.toggleYearPicker(!1, !1, p);
    }, M = (p, V = 0) => {
      var pe, $e, Ge;
      return p === "month" ? (pe = P.value) == null ? void 0 : pe.toggleMonthPicker(!1, !0, V) : p === "year" ? ($e = P.value) == null ? void 0 : $e.toggleYearPicker(!1, !0, V) : p === "time" ? (Ge = P.value) == null ? void 0 : Ge.toggleTimePicker(!0, !1) : oe(V);
    }, me = (p, ...V) => {
      var pe, $e;
      (pe = P.value) != null && pe[p] && (($e = P.value) == null || $e[p](...V));
    }, d = () => {
      me("selectCurrentDate");
    }, Y = (p, V) => {
      me("presetDate", p, V);
    }, W = () => {
      me("clearHoverDate");
    }, C = (p, V) => {
      me("updateMonthYear", p, V);
    }, te = (p, V) => {
      p.preventDefault(), T(V);
    }, ue = (p) => {
      var V;
      if (Q(p), p.key === Re.home || p.key === Re.end)
        return me(
          "selectWeekDate",
          p.key === Re.home,
          p.target.getAttribute("id")
        );
      switch ((p.key === Re.pageUp || p.key === Re.pageDown) && (p.shiftKey ? me("changeYear", p.key === Re.pageUp) : me("changeMonth", p.key === Re.pageUp), p.target.getAttribute("id") && ((V = c.value) == null || V.focus({ preventScroll: !0 }))), p.key) {
        case Re.esc:
          return f();
        case Re.arrowLeft:
          return te(p, je.left);
        case Re.arrowRight:
          return te(p, je.right);
        case Re.arrowUp:
          return te(p, je.up);
        case Re.arrowDown:
          return te(p, je.down);
        default:
          return;
      }
    };
    return t({
      updateMonthYear: C,
      switchView: M,
      handleFlow: ce
    }), (p, V) => {
      var pe, $e, Ge;
      return $(), G("div", {
        id: p.uid ? `dp-menu-${p.uid}` : void 0,
        ref_key: "dpMenuRef",
        ref: c,
        tabindex: "0",
        role: "dialog",
        "aria-label": (pe = p.ariaLabels) == null ? void 0 : pe.menu,
        class: we(I.value),
        style: et({ "--dp-arrow-left": A.value }),
        onMouseleave: W,
        onClick: se,
        onKeydown: ue
      }, [
        (p.disabled || p.readonly) && r(k).enabled || p.loading ? ($(), G("div", {
          key: 0,
          class: we(u.value)
        }, [
          p.loading ? ($(), G("div", Gr, qr)) : x("", !0)
        ], 2)) : x("", !0),
        !r(k).enabled && !p.teleportCenter ? ($(), G("div", {
          key: 1,
          class: we(de.value)
        }, null, 2)) : x("", !0),
        ye("div", {
          ref_key: "innerMenuRef",
          ref: y,
          class: we({
            dp__menu_content_wrapper: (($e = p.presetDates) == null ? void 0 : $e.length) || !!p.$slots["left-sidebar"] || !!p.$slots["right-sidebar"],
            "dp--menu-content-wrapper-collapsed": e.collapse && (((Ge = p.presetDates) == null ? void 0 : Ge.length) || !!p.$slots["left-sidebar"] || !!p.$slots["right-sidebar"])
          }),
          style: et({ "--dp-menu-width": `${S.value}px` })
        }, [
          p.$slots["left-sidebar"] ? ($(), G("div", Xr, [
            ie(p.$slots, "left-sidebar", Ne(Qe(o.value)))
          ])) : x("", !0),
          p.presetDates.length ? ($(), G("div", {
            key: 1,
            class: we({ "dp--preset-dates-collapsed": e.collapse, "dp--preset-dates": !0 })
          }, [
            ($(!0), G(ke, null, Pe(p.presetDates, (ve, vt) => ($(), G(ke, { key: vt }, [
              ve.slot ? ie(p.$slots, ve.slot, {
                key: 0,
                presetDate: Y,
                label: ve.label,
                value: ve.value
              }) : ($(), G("button", {
                key: 1,
                type: "button",
                style: et(ve.style || {}),
                class: we(["dp__btn dp--preset-range", { "dp--preset-range-collapsed": e.collapse }]),
                "data-test": ve.testId ?? void 0,
                onClick: Wt((ot) => Y(ve.value, ve.noTz), ["prevent"]),
                onKeydown: (ot) => r(qe)(ot, () => Y(ve.value, ve.noTz), !0)
              }, Ve(ve.label), 47, Jr))
            ], 64))), 128))
          ], 2)) : x("", !0),
          ye("div", {
            ref_key: "calendarWrapperRef",
            ref: N,
            class: "dp__instance_calendar",
            role: "document"
          }, [
            ($(), Me(ia(O.value), Ee({
              ref_key: "dynCmpRef",
              ref: P
            }, v.value, {
              "flow-step": r(re),
              onMount: r(K),
              onUpdateFlowStep: r(B),
              onResetFlow: r(fe),
              onFocusMenu: w,
              onSelectDate: V[0] || (V[0] = (ve) => p.$emit("select-date")),
              onDateUpdate: V[1] || (V[1] = (ve) => p.$emit("date-update", ve)),
              onTooltipOpen: V[2] || (V[2] = (ve) => p.$emit("tooltip-open", ve)),
              onTooltipClose: V[3] || (V[3] = (ve) => p.$emit("tooltip-close", ve)),
              onAutoApply: V[4] || (V[4] = (ve) => p.$emit("auto-apply", ve)),
              onRangeStart: V[5] || (V[5] = (ve) => p.$emit("range-start", ve)),
              onRangeEnd: V[6] || (V[6] = (ve) => p.$emit("range-end", ve)),
              onInvalidFixedRange: V[7] || (V[7] = (ve) => p.$emit("invalid-fixed-range", ve)),
              onTimeUpdate: V[8] || (V[8] = (ve) => p.$emit("time-update")),
              onAmPmChange: V[9] || (V[9] = (ve) => p.$emit("am-pm-change", ve)),
              onTimePickerOpen: V[10] || (V[10] = (ve) => p.$emit("time-picker-open", ve)),
              onTimePickerClose: s,
              onRecalculatePosition: z,
              onUpdateMonthYear: V[11] || (V[11] = (ve) => p.$emit("update-month-year", ve)),
              onAutoApplyInvalid: V[12] || (V[12] = (ve) => p.$emit("auto-apply-invalid", ve)),
              onInvalidDate: V[13] || (V[13] = (ve) => p.$emit("invalid-date", ve)),
              onOverlayToggle: V[14] || (V[14] = (ve) => p.$emit("overlay-toggle", ve)),
              "onUpdate:internalModelValue": V[15] || (V[15] = (ve) => p.$emit("update:internal-model-value", ve))
            }), Ue({ _: 2 }, [
              Pe(ee.value, (ve, vt) => ({
                name: ve,
                fn: he((ot) => [
                  ie(p.$slots, ve, Ne(Qe({ ...ot })))
                ])
              }))
            ]), 1040, ["flow-step", "onMount", "onUpdateFlowStep", "onResetFlow"]))
          ], 512),
          p.$slots["right-sidebar"] ? ($(), G("div", Zr, [
            ie(p.$slots, "right-sidebar", Ne(Qe(o.value)))
          ])) : x("", !0),
          p.$slots["action-extra"] ? ($(), G("div", xr, [
            p.$slots["action-extra"] ? ie(p.$slots, "action-extra", {
              key: 0,
              selectCurrentDate: d
            }) : x("", !0)
          ])) : x("", !0)
        ], 6),
        !p.autoApply || r(_).keepActionRow ? ($(), Me(ql, Ee({
          key: 2,
          "menu-mount": F.value
        }, v.value, {
          "calendar-width": S.value,
          onClosePicker: V[16] || (V[16] = (ve) => p.$emit("close-picker")),
          onSelectDate: V[17] || (V[17] = (ve) => p.$emit("select-date")),
          onInvalidSelect: V[18] || (V[18] = (ve) => p.$emit("invalid-select")),
          onSelectNow: d
        }), Ue({ _: 2 }, [
          Pe(r(D), (ve, vt) => ({
            name: ve,
            fn: he((ot) => [
              ie(p.$slots, ve, Ne(Qe({ ...ot })))
            ])
          }))
        ]), 1040, ["menu-mount", "calendar-width"])) : x("", !0)
      ], 46, Kr);
    };
  }
});
var Ct = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(Ct || {});
const eo = ({
  menuRef: e,
  menuRefInner: t,
  inputRef: l,
  pickerWrapperRef: a,
  inline: n,
  emit: c,
  props: v,
  slots: b
}) => {
  const i = ae({}), L = ae(!1), m = ae({
    top: "0",
    left: "0"
  }), E = ae(!1), k = Ut(v, "teleportCenter");
  tt(k, () => {
    m.value = JSON.parse(JSON.stringify({})), J();
  });
  const _ = (w) => {
    if (v.teleport) {
      const o = w.getBoundingClientRect();
      return {
        left: o.left + window.scrollX,
        top: o.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, H = (w, o) => {
    m.value.left = `${w + o - i.value.width}px`;
  }, N = (w) => {
    m.value.left = `${w}px`;
  }, S = (w, o) => {
    v.position === Ct.left && N(w), v.position === Ct.right && H(w, o), v.position === Ct.center && (m.value.left = `${w + o / 2 - i.value.width / 2}px`);
  }, y = (w) => {
    const { width: o, height: z } = w.getBoundingClientRect(), { top: D, left: ee } = v.altPosition ? v.altPosition(w) : _(w);
    return { top: +D, left: +ee, width: o, height: z };
  }, F = () => {
    m.value.left = "50%", m.value.top = "50%", m.value.transform = "translate(-50%, -50%)", m.value.position = "fixed", delete m.value.opacity;
  }, P = () => {
    const w = Ie(l), { top: o, left: z, transform: D } = v.altPosition(w);
    m.value = { top: `${o}px`, left: `${z}px`, transform: D ?? "" };
  }, J = (w = !0) => {
    var o;
    if (!n.value.enabled) {
      if (k.value) return F();
      if (v.altPosition !== null) return P();
      if (w) {
        const z = v.teleport ? (o = t.value) == null ? void 0 : o.$el : e.value;
        z && (i.value = z.getBoundingClientRect()), c("recalculate-position");
      }
      return K();
    }
  }, Z = ({ inputEl: w, left: o, width: z }) => {
    window.screen.width > 768 && !L.value && S(o, z), R(w);
  }, le = (w) => {
    const { top: o, left: z, height: D, width: ee } = y(w);
    m.value.top = `${D + o + +v.offset}px`, E.value = !1, L.value || (m.value.left = `${z + ee / 2 - i.value.width / 2}px`), Z({ inputEl: w, left: z, width: ee });
  }, q = (w) => {
    const { top: o, left: z, width: D } = y(w);
    m.value.top = `${o - +v.offset - i.value.height}px`, E.value = !0, Z({ inputEl: w, left: z, width: D });
  }, R = (w) => {
    if (v.autoPosition) {
      const { left: o, width: z } = y(w), { left: D, right: ee } = i.value;
      if (!L.value) {
        if (Math.abs(D) !== Math.abs(ee)) {
          if (D <= 0)
            return L.value = !0, N(o);
          if (ee >= document.documentElement.clientWidth)
            return L.value = !0, H(o, z);
        }
        return S(o, z);
      }
    }
  }, re = () => {
    const w = Ie(l);
    if (w) {
      const { height: o } = i.value, { top: z, height: D } = w.getBoundingClientRect(), de = window.innerHeight - z - D, u = z;
      return o <= de ? Mt.bottom : o > de && o <= u ? Mt.top : de >= u ? Mt.bottom : Mt.top;
    }
    return Mt.bottom;
  }, B = (w) => re() === Mt.bottom ? le(w) : q(w), K = () => {
    const w = Ie(l);
    if (w)
      return v.autoPosition ? B(w) : le(w);
  }, fe = function(w) {
    if (w) {
      const o = w.scrollHeight > w.clientHeight, D = window.getComputedStyle(w).overflowY.indexOf("hidden") !== -1;
      return o && !D;
    }
    return !0;
  }, ce = function(w) {
    return !w || w === document.body || w.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? window : fe(w) ? w : ce(w.assignedSlot ? w.assignedSlot.parentNode : w.parentNode);
  }, O = (w) => {
    if (w)
      switch (v.position) {
        case Ct.left:
          return { left: 0, transform: "translateX(0)" };
        case Ct.right:
          return { left: `${w.width}px`, transform: "translateX(-100%)" };
        default:
          return { left: `${w.width / 2}px`, transform: "translateX(-50%)" };
      }
    return {};
  };
  return {
    openOnTop: E,
    menuStyle: m,
    xCorrect: L,
    setMenuPosition: J,
    getScrollableParent: ce,
    shadowRender: (w, o) => {
      var I, se, f;
      const z = document.createElement("div"), D = (I = Ie(l)) == null ? void 0 : I.getBoundingClientRect();
      z.setAttribute("id", "dp--temp-container");
      const ee = (se = a.value) != null && se.clientWidth ? a.value : document.body;
      ee.append(z);
      const de = O(D), u = jn(
        w,
        {
          ...o,
          shadow: !0,
          style: { opacity: 0, position: "absolute", ...de }
        },
        Object.fromEntries(
          Object.keys(b).filter((T) => ["right-sidebar", "left-sidebar", "top-extra", "action-extra"].includes(T)).map((T) => [T, b[T]])
        )
      );
      Za(u, z), i.value = (f = u.el) == null ? void 0 : f.getBoundingClientRect(), Za(null, z), ee.removeChild(z);
    }
  };
}, mt = [
  { name: "clock-icon", use: ["time", "calendar", "shared"] },
  { name: "arrow-left", use: ["month-year", "calendar", "shared", "year-mode"] },
  { name: "arrow-right", use: ["month-year", "calendar", "shared", "year-mode"] },
  { name: "arrow-up", use: ["time", "calendar", "month-year", "shared"] },
  { name: "arrow-down", use: ["time", "calendar", "month-year", "shared"] },
  { name: "calendar-icon", use: ["month-year", "time", "calendar", "shared", "year-mode"] },
  { name: "day", use: ["calendar", "shared"] },
  { name: "month-overlay-value", use: ["calendar", "month-year", "shared"] },
  { name: "year-overlay-value", use: ["calendar", "month-year", "shared", "year-mode"] },
  { name: "year-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay-header", use: ["month-year", "shared"] },
  { name: "year-overlay-header", use: ["month-year", "shared"] },
  { name: "hours-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "hours-overlay-header", use: ["calendar", "time", "shared"] },
  { name: "minutes-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "minutes-overlay-header", use: ["calendar", "time", "shared"] },
  { name: "seconds-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "seconds-overlay-header", use: ["calendar", "time", "shared"] },
  { name: "hours", use: ["calendar", "time", "shared"] },
  { name: "minutes", use: ["calendar", "time", "shared"] },
  { name: "month", use: ["calendar", "month-year", "shared"] },
  { name: "year", use: ["calendar", "month-year", "shared", "year-mode"] },
  { name: "action-buttons", use: ["action"] },
  { name: "action-preview", use: ["action"] },
  { name: "calendar-header", use: ["calendar", "shared"] },
  { name: "marker-tooltip", use: ["calendar", "shared"] },
  { name: "action-extra", use: ["menu"] },
  { name: "time-picker-overlay", use: ["calendar", "time", "shared"] },
  { name: "am-pm-button", use: ["calendar", "time", "shared"] },
  { name: "left-sidebar", use: ["menu"] },
  { name: "right-sidebar", use: ["menu"] },
  { name: "month-year", use: ["month-year", "shared"] },
  { name: "time-picker", use: ["menu", "shared"] },
  { name: "action-row", use: ["action"] },
  { name: "marker", use: ["calendar", "shared"] },
  { name: "quarter", use: ["shared"] },
  { name: "top-extra", use: ["shared", "month-year"] },
  { name: "tp-inline-arrow-up", use: ["shared", "time"] },
  { name: "tp-inline-arrow-down", use: ["shared", "time"] }
], to = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], ao = {
  all: () => mt,
  monthYear: () => mt.filter((e) => e.use.includes("month-year")),
  input: () => to,
  timePicker: () => mt.filter((e) => e.use.includes("time")),
  action: () => mt.filter((e) => e.use.includes("action")),
  calendar: () => mt.filter((e) => e.use.includes("calendar")),
  menu: () => mt.filter((e) => e.use.includes("menu")),
  shared: () => mt.filter((e) => e.use.includes("shared")),
  yearMode: () => mt.filter((e) => e.use.includes("year-mode"))
}, Ze = (e, t, l) => {
  const a = [];
  return ao[t]().forEach((n) => {
    e[n.name] && a.push(n.name);
  }), l != null && l.length && l.forEach((n) => {
    n.slot && a.push(n.slot);
  }), a;
}, Xt = (e) => {
  const t = X(() => (a) => e.value ? a ? e.value.open : e.value.close : ""), l = X(() => (a) => e.value ? a ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
  return { transitionName: t, showTransition: !!e.value, menuTransition: l };
}, Jt = (e, t, l) => {
  const { defaultedRange: a, defaultedTz: n } = Ce(e), c = j(Xe(j(), n.value.timezone)), v = ae([{ month: be(c), year: ge(c) }]), b = (k) => {
    const _ = {
      hours: ft(c),
      minutes: ht(c),
      seconds: 0
    };
    return a.value.enabled ? [_[k], _[k]] : _[k];
  }, i = Qt({
    hours: b("hours"),
    minutes: b("minutes"),
    seconds: b("seconds")
  });
  tt(
    a,
    (k, _) => {
      k.enabled !== _.enabled && (i.hours = b("hours"), i.minutes = b("minutes"), i.seconds = b("seconds"));
    },
    { deep: !0 }
  );
  const L = X({
    get: () => e.internalModelValue,
    set: (k) => {
      !e.readonly && !e.disabled && t("update:internal-model-value", k);
    }
  }), m = X(
    () => (k) => v.value[k] ? v.value[k].month : 0
  ), E = X(
    () => (k) => v.value[k] ? v.value[k].year : 0
  );
  return tt(
    L,
    (k, _) => {
      l && JSON.stringify(k ?? {}) !== JSON.stringify(_ ?? {}) && l();
    },
    { deep: !0 }
  ), {
    calendars: v,
    time: i,
    modelValue: L,
    month: m,
    year: E,
    today: c
  };
}, no = (e, t) => {
  const {
    defaultedMultiCalendars: l,
    defaultedMultiDates: a,
    defaultedUI: n,
    defaultedHighlight: c,
    defaultedTz: v,
    propDates: b,
    defaultedRange: i
  } = Ce(t), { isDisabled: L } = kt(t), m = ae(null), E = ae(Xe(/* @__PURE__ */ new Date(), v.value.timezone)), k = (f) => {
    !f.current && t.hideOffsetDates || (m.value = f.value);
  }, _ = () => {
    m.value = null;
  }, H = (f) => Array.isArray(e.value) && i.value.enabled && e.value[0] && m.value ? f ? Be(m.value, e.value[0]) : _e(m.value, e.value[0]) : !0, N = (f, T) => {
    const Q = () => e.value ? T ? e.value[0] || null : e.value[1] : null, s = e.value && Array.isArray(e.value) ? Q() : null;
    return De(j(f.value), s);
  }, S = (f) => {
    const T = Array.isArray(e.value) ? e.value[0] : null;
    return f ? !_e(m.value ?? null, T) : !0;
  }, y = (f, T = !0) => (i.value.enabled || t.weekPicker) && Array.isArray(e.value) && e.value.length === 2 ? t.hideOffsetDates && !f.current ? !1 : De(j(f.value), e.value[T ? 0 : 1]) : i.value.enabled ? N(f, T) && S(T) || De(f.value, Array.isArray(e.value) ? e.value[0] : null) && H(T) : !1, F = (f, T) => {
    if (Array.isArray(e.value) && e.value[0] && e.value.length === 1) {
      const Q = De(f.value, m.value);
      return T ? Be(e.value[0], f.value) && Q : _e(e.value[0], f.value) && Q;
    }
    return !1;
  }, P = (f) => !e.value || t.hideOffsetDates && !f.current ? !1 : i.value.enabled ? t.modelAuto && Array.isArray(e.value) ? De(f.value, e.value[0] ? e.value[0] : E.value) : !1 : a.value.enabled && Array.isArray(e.value) ? e.value.some((T) => De(T, f.value)) : De(f.value, e.value ? e.value : E.value), J = (f) => {
    if (i.value.autoRange || t.weekPicker) {
      if (m.value) {
        if (t.hideOffsetDates && !f.current) return !1;
        const T = $t(m.value, +i.value.autoRange), Q = it(j(m.value), t.weekStart);
        return t.weekPicker ? De(Q[1], j(f.value)) : De(T, j(f.value));
      }
      return !1;
    }
    return !1;
  }, Z = (f) => {
    if (i.value.autoRange || t.weekPicker) {
      if (m.value) {
        const T = $t(m.value, +i.value.autoRange);
        if (t.hideOffsetDates && !f.current) return !1;
        const Q = it(j(m.value), t.weekStart);
        return t.weekPicker ? Be(f.value, Q[0]) && _e(f.value, Q[1]) : Be(f.value, m.value) && _e(f.value, T);
      }
      return !1;
    }
    return !1;
  }, le = (f) => {
    if (i.value.autoRange || t.weekPicker) {
      if (m.value) {
        if (t.hideOffsetDates && !f.current) return !1;
        const T = it(j(m.value), t.weekStart);
        return t.weekPicker ? De(T[0], f.value) : De(m.value, f.value);
      }
      return !1;
    }
    return !1;
  }, q = (f) => da(e.value, m.value, f.value), R = () => t.modelAuto && Array.isArray(t.internalModelValue) ? !!t.internalModelValue[0] : !1, re = () => t.modelAuto ? Mn(t.internalModelValue) : !0, B = (f) => {
    if (t.weekPicker) return !1;
    const T = i.value.enabled ? !y(f) && !y(f, !1) : !0;
    return !L(f.value) && !P(f) && !(!f.current && t.hideOffsetDates) && T;
  }, K = (f) => i.value.enabled ? t.modelAuto ? R() && P(f) : !1 : P(f), fe = (f) => c.value ? kl(f.value, b.value.highlight) : !1, ce = (f) => {
    const T = L(f.value);
    return T && (typeof c.value == "function" ? !c.value(f.value, T) : !c.value.options.highlightDisabled);
  }, O = (f) => {
    var T;
    return typeof c.value == "function" ? c.value(f.value) : (T = c.value.weekdays) == null ? void 0 : T.includes(f.value.getDay());
  }, A = (f) => (i.value.enabled || t.weekPicker) && (!(l.value.count > 0) || f.current) && re() && !(!f.current && t.hideOffsetDates) && !P(f) ? q(f) : !1, w = (f) => {
    const { isRangeStart: T, isRangeEnd: Q } = ee(f), s = i.value.enabled ? T || Q : !1;
    return {
      dp__cell_offset: !f.current,
      dp__pointer: !t.disabled && !(!f.current && t.hideOffsetDates) && !L(f.value),
      dp__cell_disabled: L(f.value),
      dp__cell_highlight: !ce(f) && (fe(f) || O(f)) && !K(f) && !s && !le(f) && !(A(f) && t.weekPicker) && !Q,
      dp__cell_highlight_active: !ce(f) && (fe(f) || O(f)) && K(f),
      dp__today: !t.noToday && De(f.value, E.value) && f.current,
      "dp--past": _e(f.value, E.value),
      "dp--future": Be(f.value, E.value)
    };
  }, o = (f) => ({
    dp__active_date: K(f),
    dp__date_hover: B(f)
  }), z = (f) => {
    if (e.value && !Array.isArray(e.value)) {
      const T = it(e.value, t.weekStart);
      return {
        ...u(f),
        dp__range_start: De(T[0], f.value),
        dp__range_end: De(T[1], f.value),
        dp__range_between_week: Be(f.value, T[0]) && _e(f.value, T[1])
      };
    }
    return {
      ...u(f)
    };
  }, D = (f) => {
    if (e.value && Array.isArray(e.value)) {
      const T = it(e.value[0], t.weekStart), Q = e.value[1] ? it(e.value[1], t.weekStart) : [];
      return {
        ...u(f),
        dp__range_start: De(T[0], f.value) || De(Q[0], f.value),
        dp__range_end: De(T[1], f.value) || De(Q[1], f.value),
        dp__range_between_week: Be(f.value, T[0]) && _e(f.value, T[1]) || Be(f.value, Q[0]) && _e(f.value, Q[1]),
        dp__range_between: Be(f.value, T[1]) && _e(f.value, Q[0])
      };
    }
    return {
      ...u(f)
    };
  }, ee = (f) => {
    const T = l.value.count > 0 ? f.current && y(f) && re() : y(f) && re(), Q = l.value.count > 0 ? f.current && y(f, !1) && re() : y(f, !1) && re();
    return { isRangeStart: T, isRangeEnd: Q };
  }, de = (f) => {
    const { isRangeStart: T, isRangeEnd: Q } = ee(f);
    return {
      dp__range_start: T,
      dp__range_end: Q,
      dp__range_between: A(f),
      dp__date_hover: De(f.value, m.value) && !T && !Q && !t.weekPicker,
      dp__date_hover_start: F(f, !0),
      dp__date_hover_end: F(f, !1)
    };
  }, u = (f) => ({
    ...de(f),
    dp__cell_auto_range: Z(f),
    dp__cell_auto_range_start: le(f),
    dp__cell_auto_range_end: J(f)
  }), I = (f) => i.value.enabled ? i.value.autoRange ? u(f) : t.modelAuto ? { ...o(f), ...de(f) } : t.weekPicker ? D(f) : de(f) : t.weekPicker ? z(f) : o(f);
  return {
    setHoverDate: k,
    clearHoverDate: _,
    getDayClassData: (f) => t.hideOffsetDates && !f.current ? {} : {
      ...w(f),
      ...I(f),
      [t.dayClass ? t.dayClass(f.value, t.internalModelValue) : ""]: !0,
      [t.calendarCellClassName]: !!t.calendarCellClassName,
      ...n.value.calendarCell ?? {}
    }
  };
}, kt = (e) => {
  const { defaultedFilters: t, defaultedRange: l, propDates: a, defaultedMultiDates: n } = Ce(e), c = (O) => a.value.disabledDates ? typeof a.value.disabledDates == "function" ? a.value.disabledDates(j(O)) : !!sa(O, a.value.disabledDates) : !1, v = (O) => a.value.maxDate ? e.yearPicker ? ge(O) > ge(a.value.maxDate) : Be(O, a.value.maxDate) : !1, b = (O) => a.value.minDate ? e.yearPicker ? ge(O) < ge(a.value.minDate) : _e(O, a.value.minDate) : !1, i = (O) => {
    const A = v(O), w = b(O), o = c(O), D = t.value.months.map((se) => +se).includes(be(O)), ee = e.disabledWeekDays.length ? e.disabledWeekDays.some((se) => +se === sl(O)) : !1, de = _(O), u = ge(O), I = u < +e.yearRange[0] || u > +e.yearRange[1];
    return !(A || w || o || D || I || ee || de);
  }, L = (O, A) => _e(...gt(a.value.minDate, O, A)) || De(...gt(a.value.minDate, O, A)), m = (O, A) => Be(...gt(a.value.maxDate, O, A)) || De(...gt(a.value.maxDate, O, A)), E = (O, A, w) => {
    let o = !1;
    return a.value.maxDate && w && m(O, A) && (o = !0), a.value.minDate && !w && L(O, A) && (o = !0), o;
  }, k = (O, A, w, o) => {
    let z = !1;
    return o ? a.value.minDate && a.value.maxDate ? z = E(O, A, w) : (a.value.minDate && L(O, A) || a.value.maxDate && m(O, A)) && (z = !0) : z = !0, z;
  }, _ = (O) => Array.isArray(a.value.allowedDates) && !a.value.allowedDates.length ? !0 : a.value.allowedDates ? !sa(O, a.value.allowedDates) : !1, H = (O) => !i(O), N = (O) => l.value.noDisabledRange ? !vn({ start: O[0], end: O[1] }).some((w) => H(w)) : !0, S = (O) => {
    if (O) {
      const A = ge(O);
      return A >= +e.yearRange[0] && A <= e.yearRange[1];
    }
    return !0;
  }, y = (O, A) => !!(Array.isArray(O) && O[A] && (l.value.maxRange || l.value.minRange) && S(O[A])), F = (O, A, w = 0) => {
    if (y(A, w) && S(O)) {
      const o = ul(O, A[w]), z = Pn(A[w], O), D = z.length === 1 ? 0 : z.filter((de) => H(de)).length, ee = Math.abs(o) - (l.value.minMaxRawRange ? 0 : D);
      if (l.value.minRange && l.value.maxRange)
        return ee >= +l.value.minRange && ee <= +l.value.maxRange;
      if (l.value.minRange) return ee >= +l.value.minRange;
      if (l.value.maxRange) return ee <= +l.value.maxRange;
    }
    return !0;
  }, P = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, J = (O) => Array.isArray(O) ? [O[0] ? Pa(O[0]) : null, O[1] ? Pa(O[1]) : null] : Pa(O), Z = (O, A, w) => O.find(
    (o) => +o.hours === ft(A) && o.minutes === "*" ? !0 : +o.minutes === ht(A) && +o.hours === ft(A)
  ) && w, le = (O, A, w) => {
    const [o, z] = O, [D, ee] = A;
    return !Z(o, D, w) && !Z(z, ee, w) && w;
  }, q = (O, A) => {
    const w = Array.isArray(A) ? A : [A];
    return Array.isArray(e.disabledTimes) ? Array.isArray(e.disabledTimes[0]) ? le(e.disabledTimes, w, O) : !w.some((o) => Z(e.disabledTimes, o, O)) : O;
  }, R = (O, A) => {
    const w = Array.isArray(A) ? [St(A[0]), A[1] ? St(A[1]) : void 0] : St(A), o = !e.disabledTimes(w);
    return O && o;
  }, re = (O, A) => e.disabledTimes ? Array.isArray(e.disabledTimes) ? q(A, O) : R(A, O) : A, B = (O) => {
    let A = !0;
    if (!O || P()) return !0;
    const w = !a.value.minDate && !a.value.maxDate ? J(O) : O;
    return (e.maxTime || a.value.maxDate) && (A = sn(
      e.maxTime,
      a.value.maxDate,
      "max",
      Ye(w),
      A
    )), (e.minTime || a.value.minDate) && (A = sn(
      e.minTime,
      a.value.minDate,
      "min",
      Ye(w),
      A
    )), re(O, A);
  }, K = (O) => {
    if (!e.monthPicker) return !0;
    let A = !0;
    const w = j(lt(O));
    if (a.value.minDate && a.value.maxDate) {
      const o = j(lt(a.value.minDate)), z = j(lt(a.value.maxDate));
      return Be(w, o) && _e(w, z) || De(w, o) || De(w, z);
    }
    if (a.value.minDate) {
      const o = j(lt(a.value.minDate));
      A = Be(w, o) || De(w, o);
    }
    if (a.value.maxDate) {
      const o = j(lt(a.value.maxDate));
      A = _e(w, o) || De(w, o);
    }
    return A;
  }, fe = X(() => (O) => !e.enableTimePicker || e.ignoreTimeValidation ? !0 : B(O)), ce = X(() => (O) => e.monthPicker ? Array.isArray(O) && (l.value.enabled || n.value.enabled) ? !O.filter((w) => !K(w)).length : K(O) : !0);
  return {
    isDisabled: H,
    validateDate: i,
    validateMonthYearInRange: k,
    isDateRangeAllowed: N,
    checkMinMaxRange: F,
    isValidTime: B,
    isTimeValid: fe,
    isMonthValid: ce
  };
}, ma = () => {
  const e = X(() => (a, n) => a == null ? void 0 : a.includes(n)), t = X(() => (a, n) => a.count ? a.solo ? !0 : n === 0 : !0), l = X(() => (a, n) => a.count ? a.solo ? !0 : n === a.count - 1 : !0);
  return { hideNavigationButtons: e, showLeftIcon: t, showRightIcon: l };
}, lo = (e, t, l) => {
  const a = ae(0), n = Qt({
    [Tt.timePicker]: !e.enableTimePicker || e.timePicker || e.monthPicker,
    [Tt.calendar]: !1,
    [Tt.header]: !1
  }), c = X(() => e.monthPicker || e.timePicker), v = (E) => {
    var k;
    if ((k = e.flow) != null && k.length) {
      if (!E && c.value) return m();
      n[E] = !0, Object.keys(n).filter((_) => !n[_]).length || m();
    }
  }, b = () => {
    var E, k;
    (E = e.flow) != null && E.length && a.value !== -1 && (a.value += 1, t("flow-step", a.value), m()), ((k = e.flow) == null ? void 0 : k.length) === a.value && xe().then(() => i());
  }, i = () => {
    a.value = -1;
  }, L = (E, k, ..._) => {
    var H, N;
    e.flow[a.value] === E && l.value && ((N = (H = l.value)[k]) == null || N.call(H, ..._));
  }, m = (E = 0) => {
    E && (a.value += E), L(He.month, "toggleMonthPicker", !0), L(He.year, "toggleYearPicker", !0), L(He.calendar, "toggleTimePicker", !1, !0), L(He.time, "toggleTimePicker", !0, !0);
    const k = e.flow[a.value];
    (k === He.hours || k === He.minutes || k === He.seconds) && L(k, "toggleTimePicker", !0, !0, k);
  };
  return { childMount: v, updateFlowStep: b, resetFlow: i, handleFlow: m, flowStep: a };
}, ro = {
  key: 1,
  class: "dp__input_wrap"
}, oo = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-label", "aria-disabled", "aria-invalid"], so = {
  key: 2,
  class: "dp__clear_icon testing"
}, uo = /* @__PURE__ */ Le({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 },
    inputValue: { type: String, default: "" },
    ...ca
  },
  emits: [
    "clear",
    "open",
    "update:input-value",
    "set-input-date",
    "close",
    "select-date",
    "set-empty-date",
    "toggle",
    "focus-prev",
    "focus",
    "blur",
    "real-blur"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, {
      defaultedTextInput: c,
      defaultedAriaLabels: v,
      defaultedInline: b,
      defaultedConfig: i,
      defaultedRange: L,
      defaultedMultiDates: m,
      defaultedUI: E,
      getDefaultPattern: k,
      getDefaultStartTime: _
    } = Ce(n), { checkMinMaxRange: H } = kt(n), N = ae(), S = ae(null), y = ae(!1), F = ae(!1), P = X(
      () => ({
        dp__pointer: !n.disabled && !n.readonly && !c.value.enabled,
        dp__disabled: n.disabled,
        dp__input_readonly: !c.value.enabled,
        dp__input: !0,
        dp__input_icon_pad: !n.hideInputIcon,
        dp__input_valid: !!n.state,
        dp__input_invalid: n.state === !1,
        dp__input_focus: y.value || n.isMenuOpen,
        dp__input_reg: !c.value.enabled,
        [n.inputClassName]: !!n.inputClassName,
        ...E.value.input ?? {}
      })
    ), J = () => {
      a("set-input-date", null), n.clearable && n.autoApply && (a("set-empty-date"), N.value = null);
    }, Z = (D) => {
      const ee = _();
      return wl(
        D,
        c.value.format ?? k(),
        ee ?? Rn({}, n.enableSeconds),
        n.inputValue,
        F.value,
        n.formatLocale
      );
    }, le = (D) => {
      const { rangeSeparator: ee } = c.value, [de, u] = D.split(`${ee}`);
      if (de) {
        const I = Z(de.trim()), se = u ? Z(u.trim()) : null;
        if (Ot(I, se)) return;
        const f = I && se ? [I, se] : [I];
        H(se, f, 0) && (N.value = I ? f : null);
      }
    }, q = () => {
      F.value = !0;
    }, R = (D) => {
      if (L.value.enabled)
        le(D);
      else if (m.value.enabled) {
        const ee = D.split(";");
        N.value = ee.map((de) => Z(de.trim())).filter((de) => de);
      } else
        N.value = Z(D);
    }, re = (D) => {
      var de;
      const ee = typeof D == "string" ? D : (de = D.target) == null ? void 0 : de.value;
      ee !== "" ? (c.value.openMenu && !n.isMenuOpen && a("open"), R(ee), a("set-input-date", N.value)) : J(), F.value = !1, a("update:input-value", ee);
    }, B = (D) => {
      c.value.enabled ? (R(D.target.value), c.value.enterSubmit && Ea(N.value) && n.inputValue !== "" ? (a("set-input-date", N.value, !0), N.value = null) : c.value.enterSubmit && n.inputValue === "" && (N.value = null, a("clear"))) : ce(D);
    }, K = (D) => {
      c.value.enabled && c.value.tabSubmit && R(D.target.value), c.value.tabSubmit && Ea(N.value) && n.inputValue !== "" ? (a("set-input-date", N.value, !0, !0), N.value = null) : c.value.tabSubmit && n.inputValue === "" && (N.value = null, a("clear", !0));
    }, fe = () => {
      y.value = !0, a("focus"), xe().then(() => {
        var D;
        c.value.enabled && c.value.selectOnFocus && ((D = S.value) == null || D.select());
      });
    }, ce = (D) => {
      D.preventDefault(), yt(D, i.value, !0), c.value.enabled && c.value.openMenu && !b.value.input && !n.isMenuOpen ? a("open") : c.value.enabled || a("toggle");
    }, O = () => {
      a("real-blur"), y.value = !1, (!n.isMenuOpen || b.value.enabled && b.value.input) && a("blur"), n.autoApply && c.value.enabled && N.value && !n.isMenuOpen && (a("set-input-date", N.value), a("select-date"), N.value = null);
    }, A = (D) => {
      yt(D, i.value, !0), a("clear");
    }, w = (D) => {
      if (D.key === "Tab" && K(D), D.key === "Enter" && B(D), !c.value.enabled) {
        if (D.code === "Tab") return;
        D.preventDefault();
      }
    };
    return t({
      focusInput: () => {
        var D;
        (D = S.value) == null || D.focus({ preventScroll: !0 });
      },
      setParsedDate: (D) => {
        N.value = D;
      }
    }), (D, ee) => {
      var de;
      return $(), G("div", { onClick: ce }, [
        D.$slots.trigger && !D.$slots["dp-input"] && !r(b).enabled ? ie(D.$slots, "trigger", { key: 0 }) : x("", !0),
        !D.$slots.trigger && (!r(b).enabled || r(b).input) ? ($(), G("div", ro, [
          D.$slots["dp-input"] && !D.$slots.trigger && (!r(b).enabled || r(b).enabled && r(b).input) ? ie(D.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            isMenuOpen: e.isMenuOpen,
            onInput: re,
            onEnter: B,
            onTab: K,
            onClear: A,
            onBlur: O,
            onKeypress: w,
            onPaste: q,
            onFocus: fe,
            openMenu: () => D.$emit("open"),
            closeMenu: () => D.$emit("close"),
            toggleMenu: () => D.$emit("toggle")
          }) : x("", !0),
          D.$slots["dp-input"] ? x("", !0) : ($(), G("input", {
            key: 1,
            id: D.uid ? `dp-input-${D.uid}` : void 0,
            ref_key: "inputRef",
            ref: S,
            "data-test": "dp-input",
            name: D.name,
            class: we(P.value),
            inputmode: r(c).enabled ? "text" : "none",
            placeholder: D.placeholder,
            disabled: D.disabled,
            readonly: D.readonly,
            required: D.required,
            value: e.inputValue,
            autocomplete: D.autocomplete,
            "aria-label": (de = r(v)) == null ? void 0 : de.input,
            "aria-disabled": D.disabled || void 0,
            "aria-invalid": D.state === !1 ? !0 : void 0,
            onInput: re,
            onBlur: O,
            onFocus: fe,
            onKeypress: w,
            onKeydown: w,
            onPaste: q
          }, null, 42, oo)),
          ye("div", {
            onClick: ee[2] || (ee[2] = (u) => a("toggle"))
          }, [
            D.$slots["input-icon"] && !D.hideInputIcon ? ($(), G("span", {
              key: 0,
              class: "dp__input_icon",
              onClick: ee[0] || (ee[0] = (u) => a("toggle"))
            }, [
              ie(D.$slots, "input-icon")
            ])) : x("", !0),
            !D.$slots["input-icon"] && !D.hideInputIcon && !D.$slots["dp-input"] ? ($(), Me(r(Et), {
              key: 1,
              class: "dp__input_icon dp__input_icons",
              onClick: ee[1] || (ee[1] = (u) => a("toggle"))
            })) : x("", !0)
          ]),
          D.$slots["clear-icon"] && e.inputValue && D.clearable && !D.disabled && !D.readonly ? ($(), G("span", so, [
            ie(D.$slots, "clear-icon", { clear: A })
          ])) : x("", !0),
          D.clearable && !D.$slots["clear-icon"] && e.inputValue && !D.disabled && !D.readonly ? ($(), Me(r(wn), {
            key: 3,
            class: "dp__clear_icon dp__input_icons",
            "data-test": "clear-icon",
            onClick: ee[3] || (ee[3] = Wt((u) => A(u), ["prevent"]))
          })) : x("", !0),
          ie(D.$slots, "error-icon")
        ])) : x("", !0)
      ]);
    };
  }
}), io = typeof window < "u" ? window : void 0, Ya = () => {
}, co = (e) => Kn() ? (Gn(e), !0) : !1, fo = (e, t, l, a) => {
  if (!e) return Ya;
  let n = Ya;
  const c = tt(
    () => r(e),
    (b) => {
      n(), b && (b.addEventListener(t, l, a), n = () => {
        b.removeEventListener(t, l, a), n = Ya;
      });
    },
    { immediate: !0, flush: "post" }
  ), v = () => {
    c(), n();
  };
  return co(v), v;
}, vo = (e, t, l, a = {}) => {
  const { window: n = io, event: c = "pointerdown" } = a;
  return n ? fo(n, c, (b) => {
    const i = Ie(e), L = Ie(t);
    !i || !L || i === b.target || b.composedPath().includes(i) || b.composedPath().includes(L) || l(b);
  }, { passive: !0 }) : void 0;
}, mo = /* @__PURE__ */ Le({
  compatConfig: {
    MODE: 3
  },
  __name: "VueDatePicker",
  props: {
    ...ca
  },
  emits: [
    "update:model-value",
    "update:model-timezone-value",
    "text-submit",
    "closed",
    "cleared",
    "open",
    "focus",
    "blur",
    "internal-model-change",
    "recalculate-position",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end",
    "date-update",
    "invalid-date",
    "overlay-toggle"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, c = Pt(), v = ae(!1), b = Ut(n, "modelValue"), i = Ut(n, "timezone"), L = ae(null), m = ae(null), E = ae(null), k = ae(!1), _ = ae(null), H = ae(!1), N = ae(!1), S = ae(!1), y = ae(!1), { setMenuFocused: F, setShiftKey: P } = Yn(), { clearArrowNav: J } = bt(), { validateDate: Z, isValidTime: le } = kt(n), {
      defaultedTransitions: q,
      defaultedTextInput: R,
      defaultedInline: re,
      defaultedConfig: B,
      defaultedRange: K,
      defaultedMultiDates: fe
    } = Ce(n), { menuTransition: ce, showTransition: O } = Xt(q);
    We(() => {
      f(n.modelValue), xe().then(() => {
        if (!re.value.enabled) {
          const g = de(_.value);
          g == null || g.addEventListener("scroll", C), window == null || window.addEventListener("resize", te);
        }
      }), re.value.enabled && (v.value = !0), window == null || window.addEventListener("keyup", ue), window == null || window.addEventListener("keydown", p);
    }), ua(() => {
      if (!re.value.enabled) {
        const g = de(_.value);
        g == null || g.removeEventListener("scroll", C), window == null || window.removeEventListener("resize", te);
      }
      window == null || window.removeEventListener("keyup", ue), window == null || window.removeEventListener("keydown", p);
    });
    const A = Ze(c, "all", n.presetDates), w = Ze(c, "input");
    tt(
      [b, i],
      () => {
        f(b.value);
      },
      { deep: !0 }
    );
    const { openOnTop: o, menuStyle: z, xCorrect: D, setMenuPosition: ee, getScrollableParent: de, shadowRender: u } = eo({
      menuRef: L,
      menuRefInner: m,
      inputRef: E,
      pickerWrapperRef: _,
      inline: re,
      emit: a,
      props: n,
      slots: c
    }), {
      inputValue: I,
      internalModelValue: se,
      parseExternalModelValue: f,
      emitModelValue: T,
      formatInputValue: Q,
      checkBeforeEmit: s
    } = jl(a, n, k), oe = X(
      () => ({
        dp__main: !0,
        dp__theme_dark: n.dark,
        dp__theme_light: !n.dark,
        dp__flex_display: re.value.enabled,
        "dp--flex-display-collapsed": S.value,
        dp__flex_display_with_input: re.value.input
      })
    ), M = X(() => n.dark ? "dp__theme_dark" : "dp__theme_light"), me = X(() => n.teleport ? {
      to: typeof n.teleport == "boolean" ? "body" : n.teleport,
      disabled: !n.teleport || re.value.enabled
    } : {}), d = X(() => ({ class: "dp__outer_menu_wrap" })), Y = X(() => re.value.enabled && (n.timePicker || n.monthPicker || n.yearPicker || n.quarterPicker)), W = () => {
      var g, U;
      return (U = (g = E.value) == null ? void 0 : g.$el) == null ? void 0 : U.getBoundingClientRect();
    }, C = () => {
      v.value && (B.value.closeOnScroll ? Je() : ee());
    }, te = () => {
      var U;
      v.value && ee();
      const g = (U = m.value) == null ? void 0 : U.$el.getBoundingClientRect().width;
      S.value = document.body.offsetWidth <= g;
    }, ue = (g) => {
      g.key === "Tab" && !re.value.enabled && !n.teleport && B.value.tabOutClosesMenu && (_.value.contains(document.activeElement) || Je()), N.value = g.shiftKey;
    }, p = (g) => {
      N.value = g.shiftKey;
    }, V = () => {
      !n.disabled && !n.readonly && (u(fn, n), ee(!1), v.value = !0, v.value && a("open"), v.value || Ft(), f(n.modelValue));
    }, pe = () => {
      var g;
      I.value = "", Ft(), (g = E.value) == null || g.setParsedDate(null), a("update:model-value", null), a("update:model-timezone-value", null), a("cleared"), B.value.closeOnClearValue && Je();
    }, $e = () => {
      const g = se.value;
      return !g || !Array.isArray(g) && Z(g) ? !0 : Array.isArray(g) ? fe.value.enabled || g.length === 2 && Z(g[0]) && Z(g[1]) ? !0 : K.value.partialRange && !n.timePicker ? Z(g[0]) : !1 : !1;
    }, Ge = () => {
      s() && $e() ? (T(), Je()) : a("invalid-select", se.value);
    }, ve = (g) => {
      vt(), T(), B.value.closeOnAutoApply && !g && Je();
    }, vt = () => {
      E.value && R.value.enabled && E.value.setParsedDate(se.value);
    }, ot = (g = !1) => {
      n.autoApply && le(se.value) && $e() && (K.value.enabled && Array.isArray(se.value) ? (K.value.partialRange || se.value.length === 2) && ve(g) : ve(g));
    }, Ft = () => {
      R.value.enabled || (se.value = null);
    }, Je = () => {
      re.value.enabled || (v.value && (v.value = !1, D.value = !1, F(!1), P(!1), J(), a("closed"), I.value && f(b.value)), Ft(), a("blur"));
    }, Lt = (g, U, ne = !1) => {
      if (!g) {
        se.value = null;
        return;
      }
      const Ae = Array.isArray(g) ? !g.some((wt) => !Z(wt)) : Z(g), Fe = le(g);
      Ae && Fe && (y.value = !0, se.value = g, U && (H.value = ne, Ge(), a("text-submit")), xe().then(() => {
        y.value = !1;
      }));
    }, ga = () => {
      n.autoApply && le(se.value) && T(), vt();
    }, Zt = () => v.value ? Je() : V(), ya = (g) => {
      se.value = g;
    }, pa = () => {
      R.value.enabled && (k.value = !0, Q()), a("focus");
    }, ha = () => {
      if (R.value.enabled && (k.value = !1, f(n.modelValue), H.value)) {
        const g = hl(_.value, N.value);
        g == null || g.focus();
      }
      a("blur");
    }, ba = (g) => {
      m.value && m.value.updateMonthYear(0, {
        month: ln(g.month),
        year: ln(g.year)
      });
    }, ka = (g) => {
      f(g ?? n.modelValue);
    }, wa = (g, U) => {
      var ne;
      (ne = m.value) == null || ne.switchView(g, U);
    }, Ja = (g) => B.value.onClickOutside ? B.value.onClickOutside(g) : Je(), h = (g = 0) => {
      var U;
      (U = m.value) == null || U.handleFlow(g);
    };
    return vo(L, E, () => Ja($e)), t({
      closeMenu: Je,
      selectDate: Ge,
      clearValue: pe,
      openMenu: V,
      onScroll: C,
      formatInputValue: Q,
      // exposed for testing purposes
      updateInternalModelValue: ya,
      // modify internal modelValue
      setMonthYear: ba,
      parseModel: ka,
      switchView: wa,
      toggleMenu: Zt,
      handleFlow: h
    }), (g, U) => ($(), G("div", {
      ref_key: "pickerWrapperRef",
      ref: _,
      class: we(oe.value),
      "data-datepicker-instance": ""
    }, [
      at(uo, Ee({
        ref_key: "inputRef",
        ref: E,
        "input-value": r(I),
        "onUpdate:inputValue": U[0] || (U[0] = (ne) => xa(I) ? I.value = ne : null),
        "is-menu-open": v.value
      }, g.$props, {
        onClear: pe,
        onOpen: V,
        onSetInputDate: Lt,
        onSetEmptyDate: r(T),
        onSelectDate: Ge,
        onToggle: Zt,
        onClose: Je,
        onFocus: pa,
        onBlur: ha,
        onRealBlur: U[1] || (U[1] = (ne) => k.value = !1)
      }), Ue({ _: 2 }, [
        Pe(r(w), (ne, Ae) => ({
          name: ne,
          fn: he((Fe) => [
            ie(g.$slots, ne, Ne(Qe(Fe)))
          ])
        }))
      ]), 1040, ["input-value", "is-menu-open", "onSetEmptyDate"]),
      ($(), Me(ia(g.teleport ? Qn : "div"), Ne(Qe(me.value)), {
        default: he(() => [
          at(Nt, {
            name: r(ce)(r(o)),
            css: r(O) && !r(re).enabled
          }, {
            default: he(() => [
              v.value ? ($(), G("div", Ee({
                key: 0,
                ref_key: "dpWrapMenuRef",
                ref: L
              }, d.value, {
                class: { "dp--menu-wrapper": !r(re).enabled },
                style: r(re).enabled ? void 0 : r(z)
              }), [
                at(fn, Ee({
                  ref_key: "dpMenuRef",
                  ref: m
                }, g.$props, {
                  "internal-model-value": r(se),
                  "onUpdate:internalModelValue": U[2] || (U[2] = (ne) => xa(se) ? se.value = ne : null),
                  class: { [M.value]: !0, "dp--menu-wrapper": g.teleport },
                  "open-on-top": r(o),
                  "no-overlay-focus": Y.value,
                  collapse: S.value,
                  "get-input-rect": W,
                  "is-text-input-date": y.value,
                  onClosePicker: Je,
                  onSelectDate: Ge,
                  onAutoApply: ot,
                  onTimeUpdate: ga,
                  onFlowStep: U[3] || (U[3] = (ne) => g.$emit("flow-step", ne)),
                  onUpdateMonthYear: U[4] || (U[4] = (ne) => g.$emit("update-month-year", ne)),
                  onInvalidSelect: U[5] || (U[5] = (ne) => g.$emit("invalid-select", r(se))),
                  onAutoApplyInvalid: U[6] || (U[6] = (ne) => g.$emit("invalid-select", ne)),
                  onInvalidFixedRange: U[7] || (U[7] = (ne) => g.$emit("invalid-fixed-range", ne)),
                  onRecalculatePosition: r(ee),
                  onTooltipOpen: U[8] || (U[8] = (ne) => g.$emit("tooltip-open", ne)),
                  onTooltipClose: U[9] || (U[9] = (ne) => g.$emit("tooltip-close", ne)),
                  onTimePickerOpen: U[10] || (U[10] = (ne) => g.$emit("time-picker-open", ne)),
                  onTimePickerClose: U[11] || (U[11] = (ne) => g.$emit("time-picker-close", ne)),
                  onAmPmChange: U[12] || (U[12] = (ne) => g.$emit("am-pm-change", ne)),
                  onRangeStart: U[13] || (U[13] = (ne) => g.$emit("range-start", ne)),
                  onRangeEnd: U[14] || (U[14] = (ne) => g.$emit("range-end", ne)),
                  onDateUpdate: U[15] || (U[15] = (ne) => g.$emit("date-update", ne)),
                  onInvalidDate: U[16] || (U[16] = (ne) => g.$emit("invalid-date", ne)),
                  onOverlayToggle: U[17] || (U[17] = (ne) => g.$emit("overlay-toggle", ne))
                }), Ue({ _: 2 }, [
                  Pe(r(A), (ne, Ae) => ({
                    name: ne,
                    fn: he((Fe) => [
                      ie(g.$slots, ne, Ne(Qe({ ...Fe })))
                    ])
                  }))
                ]), 1040, ["internal-model-value", "class", "open-on-top", "no-overlay-focus", "collapse", "is-text-input-date", "onRecalculatePosition"])
              ], 16)) : x("", !0)
            ]),
            _: 3
          }, 8, ["name", "css"])
        ]),
        _: 3
      }, 16))
    ], 2));
  }
}), Hn = /* @__PURE__ */ (() => {
  const e = mo;
  return e.install = (t) => {
    t.component("Vue3DatePicker", e);
  }, e;
})(), go = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hn
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(go).forEach(([e, t]) => {
  e !== "default" && (Hn[e] = t);
});
export {
  Hn as default
};
