// ==UserScript==
// @name Monkey API Test
// @name:zh 油猴 API 测试
// @version 3.2.8
// @namespace https://lemon399.gitee.io/
// @author lemon399
// @description 仅用于 https://lemon399.rth1.me/ 测试油猴 API 兼容情况
// @include https://lemon399.rth1.me/gm.html
// @exclude https://lemon399.wodemo.net/gm
// @match https://*/gm*
// @exclude-match https://lemon399.gitee.io/gm.html
// @require http://yijuzhan.com/api/word.php?m=js
// @require https://greasyfork.org/scripts/429557-gmrequirechecker/code/GMRequireChecker.js?version=951692#sha256-IBmF+lBwBcqTal5P6HKxxKumz2TIn8hyO6ZrhAwAkA8=
// @resource ts http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp
// @resource tmi https://greasyfork.org/packs/media/images/blacklogo16-5421a97c75656cecbe2befcec0778a96.png#md5=f6a78521c62eb84df1ac9322fc460ead
// @resource gmi https://wiki.greasespot.net/favicon.ico#md5-f9a922dac4c817ffd3c05b786e02e643
// @connect sop-pae.baidu.com
// @connect api.m.taobao.com
// @connect yijuzhan.com
// @run-at document-end
// @grant GM_info
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_listValues
// @grant GM_deleteValue
// @grant GM_getResourceURL
// @grant GM_getResourceText
// @grant GM_registerMenuCommand
// @grant GM_unregisterMenuCommand
// @grant GM_addStyle
// @grant GM_addElement
// @grant GM_addValueChangeListener
// @grant GM_removeValueChangeListener
// @grant GM_openInTab
// @grant GM_getTab
// @grant GM_getTabs
// @grant GM_saveTab
// @grant GM_xmlhttpRequest
// @grant GM_download
// @grant GM_notification
// @grant GM_log
// @grant GM_setClipboard
// @grant GM_cookie
// @grant unsafeWindow
// @grant window.focus
// @grant window.close
// @grant window.onurlchange
// @grant GM.setValue
// @grant GM.getValue
// @grant GM.listValues
// @grant GM.deleteValue
// @grant GM.getResourceUrl
// @grant GM.registerMenuCommand
// @grant GM.notification
// @grant GM.setClipboard
// @grant GM.xmlHttpRequest
// @grant GM.openInTab
// @grant GM.addStyle
// @grant GM.addElement
// @grant GM.cookie
// ==/UserScript==
function getVer() {
	let ver = '3.2.8', patch = 0;
	return (typeof GM_info == 'object' && GM_info.script && GM_info.script.version)
		? (GM_info.script.version + '-' + patch)
		: (typeof GM == 'object' && GM.info && GM.info.script && GM.info.script.version)
			? (GM.info.script.version + '-' + patch)
			: ver + '-' + patch;
}
function $(id) {
	return document.querySelector('#' + id);
}
function $$(name) {
	return document.querySelector('[name=' + name + ']:checked').value;
}
function _(id, v, t) {
	if (t) {
		$(id).innerText = v;
	} else {
		$(id).innerHTML = (typeof v!='undefined') ? v : '';
	}
}
function __(id, v, t) {
	if (t) {
		$(id).innerText += v;
	} else {
		$(id).innerHTML += v;
	}
}
function _w(o) {
	return o ? (o == o.window) : false;
}
(() => { var e = function (e) { return e instanceof HTMLElement || e instanceof Document && !(e instanceof XMLDocument) || e instanceof HTMLDocument }, n = function (e) { var n = e.tagName ? e.tagName : e.toString(); if (e.id && (n += " #" + e.id), e.className) if (e.className.indexOf(" ") >= 0) { var t = e.className.split(" "); for (c = 0; c < t.length; c++)n += " ." + t[c] } else n += " ." + e.className; return n }, t = function (e) { return Object.getOwnPropertyNames(e).length ? Object.getOwnPropertyNames(e).length : Object.keys(e).length ? Object.keys(e).length : "" }, r = function (e) { return "object" == typeof e ? e instanceof Array ? e.length > 10 || JSON.stringify(e).length > 20 ? "Array [" + e.length + "] " : JSON.stringify(e) : null === e ? "null" : e.toString ? e.toString() + " {" + t(e) + "} " : "Object {" + t(e) + "} " : "function" == typeof e ? e.toString() : "string" == typeof e ? e : "number" == typeof e ? isNaN(e) ? "NaN" : isFinite(e) ? JSON.stringify(e) : e.toString() : void 0 === e ? "undefined" : "symbol" == typeof e ? e.toString() : "bigint" == typeof e ? e.toString() : JSON.stringify(e) }, o = function (e, n) { var t = a(r(n)), o = 0, c = function (o, c, a) { if (void 0 === c) try { c = n[o] } catch (e) { c = "[ 没有权限 ]" } var u = document.createElement("span"); a && (u.id = "p" + a), u.innerHTML = "<var>" + r(o), u.innerHTML += ": </var><code>" + i(c, e) + "</code><br/>", t.appendChild(u) }; if (function (e) { return 0 == Object.getOwnPropertyNames(e).length }(n)) if (n instanceof Map) n.forEach(function (e, n) { c(n, e) }); else if (n instanceof Set) o = 0, n.forEach(function (e) { c(o, e), o++ }); else if (n instanceof Promise) { var u = Math.random().toString().slice(2); c("state", "pending", "s_" + u), c("value", "pending", "v_" + u), n.then(function (n) { document.querySelector("#ps_" + u + " q").innerText = "fullfilled", document.querySelector("#pv_" + u + " code").innerHTML = i(n, e) }, function (n) { document.querySelector("#ps_" + u + " q").innerText = "rejected", document.querySelector("#pv_" + u + " code").innerHTML = i(n, e) }) } else for (f in n) c(f); else { var f = Object.getOwnPropertyNames(n); for (o = 0; o < f.length; o++)c(f[o]) } return t }, i = function (t, i) { return "number" != typeof i && (i = -1), t && "object" == typeof t && !e(t) && !function (e) { return !!e && e == e.window }(t) && i < 5 ? o(i + 1, t).outerHTML + " " : "function" == typeof t ? t.toString().indexOf("[native code]") < 0 ? u(r(t)) : "[native code]" : e(t) ? function (e) { return (e.parentNode ? n(e.parentNode) + " > " : "") + n(e) }(t) : u(r(t), "string" == typeof t) + " " }, a = function (e) { var n = document.createElement("details"), t = document.createElement("summary"); return t.innerText = e, n.appendChild(t), n }, u = function (e, n) { var t = document.createElement("span"); if (t.innerText = e, n) { var r = document.createElement("q"); r.innerHTML = t.outerHTML, t = r } if (e.length > 30) { var o = a(""); return o.innerHTML = t.outerHTML, o.outerHTML } return t.outerHTML }; out = i })();
function err(a, e) {
	console.error(e);
	if ($('err')) {
		__('err', `
错误类型: ${e.name}
错误信息: ${e.message}
错误详情: ${out(e)}
错误部分: ${a}
`)
	}
}
function typeAdd(v, p) {
	_(p, typeof v);
	if (v instanceof Set) __(p, ' Set');
	if (v instanceof Map) __(p, ' Map');
	if (v instanceof Date) __(p, ' Date');
	if (v instanceof Array) __(p, ' Array');
	if (v instanceof Uint8Array) __(p, ' Uint8Array');
}

try {
	if (location.href.indexOf('https://lemon399.wodemo.net/gm') >= 0) alert('@exclude 失败');
	if (location.href.indexOf('https://lemon399.gitee.io/gm.html') >= 0) alert('@exclude-match 失败');

	let pv = {
		vtn: 10,
		vti: 12345678987654321n,
		vts: 'ok',
		vtr: [100, 200],
		vte: new Set([300, 400]),
		vto: { a: 100 },
		vtm: new Map([
			[1, true],
			[2, 'ok'],
			[{ a: 3 }, 0],
		]),
		vtf: a => 100,
		vtd: new Date(),
		vtb: false,
		vtu: undefined,
		vta: NaN,
		vtt: Infinity,
		vtl: null,
		vtp: new Uint8Array([116, 159, 97, 169, 3, 193, 3, 237, 201, 144, 175, 37, 196, 53, 32, 196, 88, 75, 202, 251, 85, 86, 95, 146, 46, 200, 108, 71, 107, 112, 165, 127]),
		vty: Symbol(123456789)
	}, ln = null, ow = null, tab = null, mi = 0, asel = null, aeel = null,
		css = 'button { background-color: royalblue; border: none; border-radius: 4px; padding: 2px 5px; }',
		csp = 'button { background-color: darkcyan; border: none; border-radius: 4px; padding: 2px 5px; }',
		fn = (t) => {
			pv.vts = t;
			__('err',`
pv.vts = ${t};
			`)
		};

	$('f1gv').onclick = e => {
		try {
			let k = $('vkey').value, val = null;
			_('votyp'); _('vostr');
			if ($('vodf').checked) {
				val = GM_getValue(k, 123);
			} else {
				val = GM_getValue(k);
			}
			typeAdd(val, 'votyp');
			_('vostr', out(val));
		} catch (e) { err('f1gv', e) };
	}

	$('f4gv').onclick = e => {
		try {
			let k = $('vkey').value;
			_('votyp'); _('vostr');
			if ($('vodf').checked) {
				GM.getValue(k, 123).then(v => {
					typeAdd(v, 'votyp');
					_('vostr', out(v));
				});
			} else {
				GM.getValue(k).then(v => {
					typeAdd(v, 'votyp');
					_('vostr', out(v));
				});
			}
		} catch (e) { err('f4gv', e) };
	}

	$('f1sv').onclick = e => {
		try {
			let k = $('vkey').value,
				val = pv[$$('vt')];
			typeAdd(val, 'vityp');
			_('vistr', out(val));
			GM_setValue(k, val);
		} catch (e) { err('f1sv', e) };
	}

	$('f4sv').onclick = e => {
		try {
			let k = $('vkey').value,
				val = pv[$$('vt')];
			typeAdd(val, 'vityp');
			_('vistr', out(val));
			GM.setValue(k, val);
		} catch (e) { err('f4sv', e) };
	}

	$('f1lv').onclick = e => {
		try {
			let k = $('vkey').value, val = null;
			_('votyp'); _('vostr');
			val = GM_listValues();
			typeAdd(val, 'votyp');
			_('vostr', out(val));
		} catch (e) { err('f1lv', e) };
	}

	$('f4lv').onclick = e => {
		try {
			_('votyp'); _('vostr');
			GM.listValues().then(val => {
				typeAdd(val, 'votyp');
				_('vostr', out(val));
			});
		} catch (e) { err('f4lv', e) };
	}

	$('f1dv').onclick = e => {
		try {
			let k = $('vkey').value;
			GM_deleteValue(k);
			_('vityp'); _('vistr');
			_('votyp'); _('vostr');
		} catch (e) { err('f1dv', e) };
	}

	$('f4dv').onclick = e => {
		try {
			let k = $('vkey').value;
			GM.deleteValue(k).then(o => {
				_('vityp'); _('vistr');
				_('votyp'); _('vostr');
			});
		} catch (e) { err('f4dv', e) };
	}

	$('favcl').onclick = e => {
		try {
			let k = $('vkey').value;
			_('tvcl'); _('vostr');
			ln = null;
			ln = GM_addValueChangeListener(k, function (v, o, n, r) {
				__('tvcl', v + ' 从 ' + o + ' 改为 ' + n + ', remote:' + r + '\n');
			});
			if (ln) _('vostr', ln + ' 监听器添加成功', true);
		} catch (e) { err('favcl', e) };
	}

	$('frvcl').onclick = e => {
		try {
			if (ln) {
				_('tvcl'); _('vostr');
				GM_removeValueChangeListener(ln);
				_('vostr', ln + ' 监听器移除成功', true);
			}
		} catch (e) { err('frvcl', e) };
	}

	$('f1ru').onclick = e => {
		try {
			_('rstr');
			_('rstr', GM_getResourceURL($$('rkey')));
		} catch (e) { err('f1ru', e) };
	}

	$('f1rt').onclick = e => {
		try {
			_('rstr');
			_('rstr', GM_getResourceText($$('rkey')), true);
		} catch (e) { err('f1rt', e) };
	}

	$('f4ru').onclick = e => {
		try {
			_('rstr');
			GM.getResourceUrl($$('rkey')).then(r => {
				_('rstr', r);
			});
		} catch (e) { err('f4ru', e) };
	}

	$('f1ot').onclick = e => {
		try {
			_('tsta'); _('tstr'); ow = null;
			ow = GM_openInTab($('turl').value, {
				active: !$('tlib').checked,
				insert: $('tflw').checked,
				setParent: $('trtn').checked
			});
			_('tstr', _w(ow) ? 'window' : out(ow));
			if (ow) _('tsta', ow.closed.toString());
		} catch (e) { err('f1ot', e) };
	}

	$('f1otb').onclick = e => {
		try {
			_('tsta'); _('tstr'); ow = null;
			ow = GM_openInTab($('turl').value, $('tlib').checked);
			if (ow) {
				if (ow instanceof Promise) {
					ow.then(op => {
						ow = op;
						_('tstr', 'Promise ')
						__('tstr', _w(ow) ? 'window' : out(ow));
						_('tsta', ow.closed.toString());
					});
				} else if (ow instanceof Object) {
					_('tsta', ow.closed.toString());
					_('tstr', _w(ow) ? 'window' : out(ow));
				}
			} else _('tstr', _w(ow) ? 'window' : out(ow));
		} catch (e) { err('f1otb', e) };
	}

	$('f4ot').onclick = e => {
		try {
			_('tsta'); _('tstr'); ow = null;
			ow = GM.openInTab($('turl').value, $('tlib').checked);
			if (ow) {
				if (ow instanceof Promise) {
					ow.then(op => {
						ow = op;
						_('tstr', 'Promise ')
						__('tstr', _w(ow) ? 'window' : out(ow));
						_('tsta', ow.closed.toString());
					});
				} else if (ow instanceof Object) {
					_('tsta', ow.closed.toString());
					_('tstr', _w(ow) ? 'window' : out(ow));
				}
			} else _('tstr', _w(ow) ? 'window' : out(ow));
		} catch (e) { err('f4ot', e) };
	}

	$('ftf').onclick = e => {
		try {
			_('tsta');
			if (ow) ow.focus();
		} catch (e) { err('ftf', e) };
	}

	$('ftc').onclick = e => {
		try {
			_('tsta');
			if (ow) ow.close();
		} catch (e) { err('ftc', e) };
	}

	$('ftd').onclick = e => {
		try {
			_('tsta');
			if (ow) _('tsta', ow.closed.toString());
		} catch (e) { err('ftd', e) };
	}

	$('etc').onclick = e => {
		try {
			if (ow && ow.hasOwnProperty('onclose')) {
				ow.onclose = function () {
					_('tstr', '检测到标签关闭了');
				};
				_('tstr', '标签关闭监听器添加成功');
			};
		} catch (e) { err('etc', e) };
	}

	$('ftwf').onclick = e => {
		alert('点击确定以后请快速切换标签，5 秒后应该自动返回此标签');
		setTimeout(function () {
			window.focus();
		}, 5000);
	}

	$('ftwc').onclick = e => {
		alert('点击确定以后请快速切换标签，5 秒后应该自动关闭此标签');
		setTimeout(function () {
			window.close();
		}, 5000);
	}

	$('ftuc').onclick = e => {
		try {
			alert('修改网址 (加 #) 试试');
			window.onurlchange = function () {
				alert('检测到修改网址了');
			};
		} catch (e) { err('ftuc', e) };
	}

	$('f1gt').onclick = e => {
		try {
			tab = null; _('tstr');
			GM_getTab(function (t) {
				_('tstr', out(t));
				tab = t;
			});
		} catch (e) { err('f1gt', e) };
	}

	$('f1st').onclick = e => {
		try {
			if (tab) {
				tab.id = Date.now();
				GM_saveTab(tab);
				_('tsta', '标签变量已存储');
			}
		} catch (e) { err('f1st', e) };
	}

	$('f1gts').onclick = e => {
		try {
			_('tgts');
			GM_getTabs(function (t) {
				_('tgts', out(t));
			});
		} catch (e) { err('f1gts', e) };
	}

	$('f1rm').onclick = e => {
		try {
			_('mstr');
			mi = GM_registerMenuCommand('测试', function () {
				GM_registerMenuCommand('测试 2', e => { alert(e) });
			});
			GM_registerMenuCommand('测试 4', fn.bind(this, 'hello!'));
			_('mstr', mi, true);
		} catch (e) { err('f1rm', e) };
	}

	$('f1um').onclick = e => {
		try {
			GM_unregisterMenuCommand(mi);
		} catch (e) { err('f1um', e) };
	}

	$('f4rm').onclick = e => {
		try {
			GM.registerMenuCommand('测试 3', e => { alert(e) });
		} catch (e) { err('f4rm', e) };
	}

	$('f1as').onclick = e => {
		try {
			_('oestr');
			if (asel) {
				asel.remove();
				asel = null;
			}
			asel = GM_addStyle($('oecsp').checked ? csp : css);
			_('oestr', out(asel));
		} catch (e) { err('f1as', e) };
	}

	$('f4as').onclick = e => {
		try {
			_('oestr');
			if (asel) {
				asel.remove();
				asel = null;
			}
			asel = GM.addStyle($('oecsp').checked ? csp : css);
			if (asel instanceof Promise) {
				asel.then(el => {
					asel = el;
					_('oestr', out(asel));
				});
			} else {
				_('oestr', out(asel));
			}
		} catch (e) { err('f4as', e) };
	}

	$('asd').onclick = e => {
		try {
			_('oestr');
			if (asel) {
				asel.remove();
				asel = null;
			}
		} catch (e) { err('asd', e) };
	}

	$('f1ae').onclick = e => {
		try {
			_('oestr');
			aeel = GM_addElement('span', {
				class: 'span1',
				textContent: 'OK'
			});
			_('oestr', out(aeel));
		} catch (e) { err('f1ae', e) };
	}

	$('f1ae3').onclick = e => {
		try {
			_('oestr'); _('oect');
			aeel = GM_addElement($('oect'), 'span', {
				class: 'span1',
				textContent: 'OK'
			});
			_('oestr', out(aeel));
		} catch (e) { err('f1ae3', e) };
	}

	$('f4ae').onclick = e => {
		try {
			_('oestr');
			aeel = GM.addElement('span', {
				class: 'span1',
				textContent: 'OK'
			});
			if (aeel instanceof Promise) {
				aeel.then(el => {
					aeel = el;
					_('oestr', out(aeel));
				});
			} else {
				_('oestr', out(aeel));
			}
			_('oestr', out(aeel));
		} catch (e) { err('f4ae', e) };
	}

	$('aed').onclick = e => {
		try {
			_('oestr');
			if (aeel) {
				aeel.remove();
				aeel = null;
			}
		} catch (e) { err('aed', e) };
	}

	$('f1xh').onclick = e => {
		try {
			_('oxstr', '开始请求');
			GM_xmlhttpRequest({
				method: 'GET',
				url: $('xurl').value,
				onload: r => {
					_('oxstr', out(r));
					_('xstr', r.responseText, true);
					console.log(r);
				}
			});
		} catch (e) { err('f1xh', e) };
	}

	$('f4xh').onclick = e => {
		try {
			_('oxstr', '开始请求');
			GM.xmlHttpRequest({
				method: 'GET',
				url: $('xurl').value,
				onload: r => {
					_('oxstr', out(r));
					_('xstr', r.responseText, true);
				}
			});
		} catch (e) { err('f4xh', e) };
	}

	$('f1dl').onclick = e => {
		try {
			_('odstr');
			GM_download({
				url: $('durl').value,
				name: $('dname').value,
				onload: function () { _('odstr', '下载完成'); },
				onprogress: function () { _('odstr', '下载中'); },
			});
		} catch (e) { err('f1dl', e) };
	}

	$('f1dl2').onclick = e => {
		try {
			_('odstr');
			GM_download($('durl').value, $('dname').value);
		} catch (e) { err('f1dl2', e) };
	}

	$('f1no').onclick = e => {
		try {
			_('onstr');
			GM_notification({
				text: $('ntext').value,
				title: $('ntitl').value,
				image: $('nicon').value,
				silent: $('nsil').checked,
				onclick: function () { __('onstr', '点击 '); },
				ondone: function () { __('onstr', '消失'); },
			});
		} catch (e) { err('f1no', e) };
	}

	$('f1no4').onclick = e => {
		try {
			_('onstr');
			GM_notification(
				$('ntext').value,
				$('ntitl').value,
				$('nicon').value,
				function () { __('onstr', '点击'); }
			);
		} catch (e) { err('f1no4', e) };
	}

	$('f4no').onclick = e => {
		try {
			_('onstr');
			GM.notification({
				text: $('ntext').value,
				title: $('ntitl').value,
				image: $('nicon').value,
				silent: $('nsil').checked,
				onclick: function () { __('onstr', '点击 '); },
				ondone: function () { __('onstr', '消失'); },
			});
		} catch (e) { err('f4no', e) };
	}

	$('f4no4').onclick = e => {
		try {
			_('onstr');
			GM.notification(
				$('ntext').value,
				$('ntitl').value,
				$('nicon').value,
				function () { __('onstr', '点击'); }
			);
		} catch (e) { err('f4no4', e) };
	}

	$('f1sc').onclick = e => {
		try {
			GM_setClipboard($('ctext').value);
		} catch (e) { err('f1sc', e) };
	}

	$('f4sc').onclick = e => {
		try {
			GM.setClipboard($('ctext').value);
		} catch (e) { err('f4sc', e) };
	}

	$('f1lg').onclick = e => {
		try {
			GM_log('测试', 123);
		} catch (e) { err('f1lg', e) };
	}

	$('f1cl').onclick = e => {
		try {
			_('ocstr');
			GM_cookie('list',
				{ url: $('ocdm').value },
				(c, e) => { _('ocstr', out(c ? c : e)) });
		} catch (e) { err('f1cl', e) };
	}

	$('f1cld').onclick = e => {
		try {
			_('ocstr');
			GM_cookie.list(
				{ url: $('ocdm').value },
				(c, e) => { _('ocstr', out(c ? c : e)) });
		} catch (e) { err('f1cld', e) };
	}

	$('f4cl').onclick = e => {
		try {
			_('ocstr');
			GM.cookie.list({ url: $('ocdm').value }).then(
				c => { _('ocstr', out(c)) }
			);
		} catch (e) { err('f4cl', e) };
	}

	$('f1cs').onclick = e => {
		try {
			_('ocstr');
			GM_cookie('set',
				{ url: $('ocdm').value, name: $('ocnm').value, value: $('ocvl').value },
				e => { _('ocstr', out(e ? e : 'OK')) });
		} catch (e) { err('f1cs', e) };
	}

	$('f1csd').onclick = e => {
		try {
			_('ocstr');
			GM_cookie.set(
				{ url: $('ocdm').value, name: $('ocnm').value, value: $('ocvl').value },
				e => { _('ocstr', out(e ? e : 'OK')) });
		} catch (e) { err('f1csd', e) };
	}

	$('f4cs').onclick = e => {
		try {
			_('ocstr');
			GM.cookie.set(
				{ url: $('ocdm').value, name: $('ocnm').value, value: $('ocvl').value }
			).then(e => { _('ocstr', out(e ? e : 'OK')) });
		} catch (e) { err('f4cs', e) };
	}

	$('f1cd').onclick = e => {
		try {
			_('ocstr');
			GM_cookie('delete',
				{ url: $('ocdm').value, name: $('ocnm').value },
				e => { _('ocstr', out(e ? e : 'OK')) });
		} catch (e) { err('f1cd', e) };
	}

	$('f1cdd').onclick = e => {
		try {
			_('ocstr');
			GM_cookie.delete(
				{ url: $('ocdm').value, name: $('ocnm').value },
				e => { _('ocstr', out(e ? e : 'OK')) });
		} catch (e) { err('f1cdd', e) };
	}

	$('f4cd').onclick = e => {
		try {
			_('ocstr');
			GM.cookie.delete({ url: $('ocdm').value, name: $('ocnm').value }).then(
				e => { _('ocstr', out(e ? e : 'OK')) });
		} catch (e) { err('f4cd', e) };
	}

	if ($('loadstat')) _('loadstat', 'OK ' + getVer());
	if (typeof GMRequiredJSLoaded=='boolean') __('req', '!SRI ');
	if (typeof yiju=='function') __('req', 'OK ' + str[0]);
	if (typeof GM_info=='object') _('i1str', out(GM_info));
	if (typeof GM == 'object' && GM.info) _('i4str', out(GM.info));
	if (unsafeWindow) {
		_('usw', 'OK ' + unsafeWindow.innerHeight);
		if (typeof GM === 'object' && !unsafeWindow.GM) unsafeWindow.GM = GM;
		if (typeof (GM_info) !== 'undefined' && !unsafeWindow.GM_info) unsafeWindow.GM_info = GM_info;
		if (typeof (GM_setValue) == 'function' && !unsafeWindow.GM_setValue) unsafeWindow.GM_setValue = GM_setValue;
		if (typeof (GM_getValue) == 'function' && !unsafeWindow.GM_getValue) unsafeWindow.GM_getValue = GM_getValue;
		if (typeof (GM_listValues) == 'function' && !unsafeWindow.GM_listValues) unsafeWindow.GM_listValues = GM_listValues;
		if (typeof (GM_deleteValue) == 'function' && !unsafeWindow.GM_deleteValue) unsafeWindow.GM_deleteValue = GM_deleteValue;
		if (typeof (GM_getResourceURL) == 'function' && !unsafeWindow.GM_getResourceURL) unsafeWindow.GM_getResourceURL = GM_getResourceURL;
		if (typeof (GM_getResourceText) == 'function' && !unsafeWindow.GM_getResourceText) unsafeWindow.GM_getResourceText = GM_getResourceText;
		if (typeof (GM_registerMenuCommand) == 'function' && !unsafeWindow.GM_registerMenuCommand) unsafeWindow.GM_registerMenuCommand = GM_registerMenuCommand;
		if (typeof (GM_unregisterMenuCommand) == 'function' && !unsafeWindow.GM_unregisterMenuCommand) unsafeWindow.GM_unregisterMenuCommand = GM_unregisterMenuCommand;
		if (typeof (GM_addStyle) == 'function' && !unsafeWindow.GM_addStyle) unsafeWindow.GM_addStyle = GM_addStyle;
		if (typeof (GM_addElement) == 'function' && !unsafeWindow.GM_addElement) unsafeWindow.GM_addElement = GM_addElement;
		if (typeof (GM_addValueChangeListener) == 'function' && !unsafeWindow.GM_addValueChangeListener) unsafeWindow.GM_addValueChangeListener = GM_addValueChangeListener;
		if (typeof (GM_removeValueChangeListener) == 'function' && !unsafeWindow.GM_removeValueChangeListener) unsafeWindow.GM_removeValueChangeListener = GM_removeValueChangeListener;
		if (typeof (GM_openInTab) == 'function' && !unsafeWindow.GM_openInTab) unsafeWindow.GM_openInTab = GM_openInTab;
		if (typeof (GM_getTab) == 'function' && !unsafeWindow.GM_getTab) unsafeWindow.GM_getTab = GM_getTab;
		if (typeof (GM_getTabs) == 'function' && !unsafeWindow.GM_getTabs) unsafeWindow.GM_getTabs = GM_getTabs;
		if (typeof (GM_saveTab) == 'function' && !unsafeWindow.GM_saveTab) unsafeWindow.GM_saveTab = GM_saveTab;
		if (typeof (GM_xmlhttpRequest) == 'function' && !unsafeWindow.GM_xmlhttpRequest) unsafeWindow.GM_xmlhttpRequest = GM_xmlhttpRequest;
		if (typeof (GM_download) == 'function' && !unsafeWindow.GM_download) unsafeWindow.GM_download = GM_download;
		if (typeof (GM_notification) == 'function' && !unsafeWindow.GM_notification) unsafeWindow.GM_notification = GM_notification;
		if (typeof (GM_log) == 'function' && !unsafeWindow.GM_log) unsafeWindow.GM_log = GM_log;
		if (typeof (GM_setClipboard) == 'function' && !unsafeWindow.GM_setClipboard) unsafeWindow.GM_setClipboard = GM_setClipboard;
		if (typeof (GM_cookie) == 'function' && !unsafeWindow.GM_cookie) unsafeWindow.GM_cookie = GM_cookie;
	}
} catch (e) { err('global', e) };
