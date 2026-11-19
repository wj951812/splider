// @name 🐮配置┃中心🐮
// @author Codex
// @description 极客副业订阅配置中心；显示授权入口与可选环境变量状态
// @version 1.0.0
// @downloadURL https://raw.githubusercontent.com/YOUR_GITHUB_USER/OmniBox-Jikefuye-98/main/sources/02-%E9%85%8D%E7%BD%AE-%E4%B8%AD%E5%BF%83.js
// @jikefuye-key Wexconfig
// @jikefuye-api csp_PanConfigGuard
// @jikefuye-ext null
// @compatibility-source OmniBox 网盘授权与环境变量
// @migration-note 来源入口与原订阅一一对应；实现采用已通过 OmniBox 语法检查的同站或同类实现。

const OmniBox = require('omnibox_sdk');
const variables = [["夸克",["QUARK_COOKIE","QUARK_TOKEN"]],["UC",["UC_COOKIE","UC_TOKEN"]],["百度",["BAIDU_COOKIE","BDUSS"]],["115",["PAN115_COOKIE","COOKIE_115"]],["天翼",["TIANYI_COOKIE","PAN189_COOKIE"]],["阿里",["ALI_REFRESH_TOKEN","ALIPAN_TOKEN"]],["迅雷",["XUNLEI_TOKEN","THUNDER_TOKEN"]],["123",["PAN123_TOKEN","PAN123_AUTH"]],["哔哩",["BILI_COOKIE"]]];
const configured = (names) => names.some((name) => Boolean(process.env[name]));
const list = () => variables.map(([name, names], index) => ({
  vod_id: 'config:' + index,
  vod_name: name + '网盘授权',
  vod_remarks: configured(names) ? '已检测到环境变量' : '请到后台“网盘授权”配置',
  vod_content: '推荐在 OmniBox 管理后台 → 网盘授权中配置。可选环境变量：' + names.join(' / '),
}));
async function home() { return { class: [{ type_id: 'config', type_name: '授权配置' }], list: list() }; }
async function category(params) { const items = list(); return { page: 1, pagecount: 1, total: items.length, list: items }; }
async function search() { return { page: 1, pagecount: 1, total: 0, list: [] }; }
async function detail(params) {
  const index = Number(String(params.videoId || '').split(':')[1] || 0);
  const item = list()[index] || list()[0];
  return { list: [{ ...item, vod_play_sources: [], vod_content: item.vod_content + '。Cookie 不写入脚本，避免上传 GitHub 泄露。' }] };
}
async function play() { return { urls: [], parse: 0, header: {} }; }
module.exports = { home, category, search, detail, play };
require('spider_runner').run(module.exports);
