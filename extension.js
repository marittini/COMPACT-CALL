(() => {
  "use strict";
  const KEY = "__marinaraCompactTranslatedCalls";
  window[KEY]?.dispose?.();
  const host = typeof marinara !== "undefined" ? marinara : null,
    downstream = window.fetch;
  const embeddedStyle = document.createElement("style");
  embeddedStyle.dataset.mccStyle = "3.5.0";
  embeddedStyle.textContent = "marinara-capability-conversation-calls.mcc-active > div:first-child {\n  position: fixed !important;\n  inset: auto !important;\n  top: calc(var(--mcc-top, 0px) + 18px) !important;\n  right: 18px !important;\n  width: min(390px, calc(100vw - 28px)) !important;\n  height: min(650px, calc(var(--mcc-vh, 100dvh) - 36px)) !important;\n  min-height: 0 !important;\n  z-index: 80 !important;\n  display: flex !important;\n  overflow: hidden !important;\n  border: 5px solid #0a0e17 !important;\n  outline: 1px solid #8796b955 !important;\n  border-radius: 38px !important;\n  background: var(--mcc-background, #202738) !important;\n  box-shadow:\n    0 18px 60px #0008,\n    inset 0 0 0 1px #ffffff18 !important;\n  color: var(--mcc-text, #f5f7ff) !important;\n}\n.mcc-active > div:first-child > .mari-chrome-token-scope,\n.mcc-active > div:first-child > .mari-chrome-token-scope > div:first-child {\n  display: flex !important;\n  flex-direction: column !important;\n  flex: 1 !important;\n  min-height: 0 !important;\n  background: transparent !important;\n}\n.mcc-active [data-marinara-call-stage] {\n  display: flex !important;\n  flex: 1 1 0 !important;\n  min-height: 0 !important;\n  flex-basis: 0 !important;\n  background: transparent !important;\n  overflow: hidden !important;\n  border: 0 !important;\n}\n.mcc-active [data-marinara-call-stage] > :not(.mcc-panel) {\n  display: none !important;\n}\n.mcc-active [data-marinara-call-chat] {\n  display: flex !important;\n  flex: 0 0 auto !important;\n  flex-basis: auto !important;\n  min-height: 0 !important;\n  width: 100% !important;\n  background: transparent !important;\n}\n.mcc-active [data-marinara-call-chat] > :not(form) {\n  display: none !important;\n}\n.mcc-active [data-marinara-call-chat] form {\n  width: 100% !important;\n  border: 0 !important;\n  padding: 8px 16px 16px !important;\n  background: transparent !important;\n  position: relative !important;\n}\n.mcc-active [data-marinara-call-chat] form > div:last-child {\n  width: 100% !important;\n  display: flex !important;\n  align-items: center !important;\n  gap: 8px !important;\n  padding: 7px 8px 7px 12px !important;\n  background: #111827 !important;\n  border: 1px solid #ffffff24 !important;\n  border-radius: 18px !important;\n}\n.mcc-active\n  [data-marinara-call-chat]\n  form\n  > div:last-child\n  > :not(textarea):not(button[type=\"submit\"]) {\n  display: none !important;\n}\n.mcc-active [data-marinara-call-chat] textarea {\n  color: #fff !important;\n  font-size: 16px !important;\n  width: 100% !important;\n  flex: 1 !important;\n  min-width: 0 !important;\n  min-height: 40px !important;\n  max-height: 100px !important;\n  background: transparent !important;\n  border: 0 !important;\n  resize: none !important;\n  outline: none !important;\n}\n.mcc-active [data-marinara-call-chat] button[type=\"submit\"] {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  width: 42px !important;\n  height: 42px !important;\n  color: white !important;\n  background: #596ef3 !important;\n  border: 0 !important;\n  border-radius: 14px !important;\n}\n.mcc-active [data-marinara-call-chat] button[type=\"submit\"]:disabled {\n  opacity: 0.35 !important;\n}\n.mcc-panel {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-height: 0;\n  padding: 20px 18px 4px;\n  font-family: system-ui, sans-serif;\n}\n.mcc-panel[hidden] {\n  display: none;\n}\n.mcc-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 10px;\n}\n.mcc-tag {\n  display: block;\n  color: #85ddbd;\n  font-size: 9px;\n  letter-spacing: 1.6px;\n  margin-bottom: 8px;\n}\n.mcc-name {\n  display: block;\n  font-size: 22px;\n  line-height: 1.15;\n  max-width: 220px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.mcc-time {\n  display: block;\n  color: #b5bfd8;\n  font-size: 13px;\n  margin-top: 7px;\n  font-variant-numeric: tabular-nums;\n}\n.mcc-tools {\n  display: flex;\n  gap: 3px;\n}\n.mcc-panel button {\n  cursor: pointer;\n  font: inherit;\n  border: 0;\n  color: #e8edff;\n}\n.mcc-tools button {\n  width: 38px;\n  height: 40px;\n  border-radius: 12px;\n  background: #ffffff0a;\n  font-size: 17px;\n}\n.mcc-tools button[aria-pressed=\"true\"] {\n  color: #a9bbff;\n  background: #596ef329;\n}\n.mcc-panel button:focus-visible {\n  outline: 2px solid #a9bbff;\n  outline-offset: 3px;\n}\n.mcc-avatar {\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  align-self: center;\n  margin: 12px 0;\n  display: grid;\n  place-items: center;\n  flex-shrink: 0;\n  font-size: 32px;\n  background: #111827;\n  border: 3px solid #7f94db55;\n  box-shadow: 0 0 25px #596ef330;\n  overflow: hidden;\n}\n.mcc-avatar img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.mcc-transcript {\n  flex: 1;\n  min-height: 70px;\n  overflow: auto;\n  overscroll-behavior: contain;\n  scrollbar-width: thin;\n  padding: 4px 2px;\n}\n.mcc-bubble {\n  background: #0b1223c9;\n  border: 1px solid #ffffff0c;\n  border-radius: 17px 17px 17px 4px;\n  margin: 0 0 10px;\n  padding: 12px 14px;\n}\n.mcc-bubble small {\n  color: #a7b8e7;\n  font-size: 11px;\n}\n.mcc-bubble p {\n  white-space: pre-wrap;\n  overflow-wrap: anywhere;\n  margin: 6px 0 0;\n  font-size: 15px;\n  line-height: 1.6;\n}\n.mcc-bubble .mcc-original {\n  color: #acb4c9;\n  font-size: 12px;\n  border-top: 1px solid #ffffff13;\n  margin-top: 9px;\n  padding-top: 8px;\n}\n.mcc-user {\n  margin-left: 32px;\n  background: #3b4875;\n  border-radius: 17px 17px 4px 17px;\n}\n.mcc-empty {\n  color: #b5bfd8;\n  font-size: 13px;\n  line-height: 1.8;\n  text-align: center;\n}\n.mcc-status {\n  flex-shrink: 0;\n  color: #a6b2cf;\n  font-size: 10px;\n  line-height: 1.5;\n  margin: 6px 0;\n}\n.mcc-error {\n  color: #ffc4bb;\n}\n.mcc-panel footer {\n  display: flex;\n  justify-content: center;\n  padding: 2px 0 5px;\n}\n.mcc-panel .mcc-end {\n  background: #ed4353;\n  min-width: 124px;\n  height: 42px;\n  border-radius: 30px;\n  font-size: 20px;\n}\n.mcc-end span {\n  font-size: 12px;\n  margin-left: 7px;\n}\n.mcc-reopen {\n  display: none;\n}\nmarinara-capability-conversation-calls.mcc-minimized > div:first-child {\n  height: 58px !important;\n  width: min(310px, calc(100vw - 28px)) !important;\n  border-radius: 20px !important;\n}\n.mcc-minimized [data-marinara-call-chat] {\n  display: none !important;\n}\n.mcc-minimized .mcc-panel {\n  padding: 0;\n}\n.mcc-minimized .mcc-panel > :not(.mcc-reopen) {\n  display: none;\n}\n.mcc-minimized .mcc-reopen {\n  display: block;\n  width: 100%;\n  height: 58px;\n  background: #202738;\n  padding: 0 16px;\n  text-align: left;\n  font-size: 13px;\n}\n@media (max-width: 600px) {\n  marinara-capability-conversation-calls.mcc-active > div:first-child {\n    top: calc(var(--mcc-top, 0px) + 40px) !important;\n    bottom: auto !important;\n    right: 14px !important;\n    height: min(600px, calc(var(--mcc-vh, 100dvh) - 80px)) !important;\n  }\n  marinara-capability-conversation-calls.mcc-minimized > div:first-child {\n    height: 58px !important;\n  }\n}\n.mcc-keyboard .mcc-avatar {\n  display: none;\n}\n.mcc-keyboard .mcc-panel {\n  padding-top: 12px;\n}\n.mcc-keyboard .mcc-name {\n  font-size: 17px;\n}\n/* Explicit foregrounds keep light ME themes from recoloring the dark phone. */\nhtml body .mcc-panel .mcc-name,\nhtml body .mcc-panel .mcc-text,\nhtml body .mcc-library .mcc-text,\nhtml body .mcc-library strong {\n  color: var(--mcc-text, #f5f7ff) !important;\n  opacity: 1 !important;\n  text-shadow: none !important;\n}\nhtml body .mcc-panel small,\nhtml body .mcc-panel .mcc-original,\nhtml body .mcc-panel .mcc-time,\nhtml body .mcc-panel .mcc-status,\nhtml body .mcc-library small,\nhtml body .mcc-library .mcc-original {\n  color: var(--mcc-muted, #b5bfd8) !important;\n  opacity: 1 !important;\n}\nhtml body .mcc-panel .mcc-error {\n  color: #ffb9b9 !important;\n}\nhtml body .mcc-panel .mcc-bubble,\nhtml body .mcc-library .mcc-bubble {\n  background: var(--mcc-incoming, #101728) !important;\n}\nhtml body .mcc-panel .mcc-user,\nhtml body .mcc-library .mcc-user {\n  background: var(--mcc-outgoing, #3b4875) !important;\n}\nhtml body .mcc-panel .mcc-tools button {\n  color: var(--mcc-accent, #809bff) !important;\n}\nhtml body .mcc-panel .mcc-reopen {\n  color: var(--mcc-text, #f5f7ff) !important;\n  background: var(--mcc-background, #202738) !important;\n}\n.mcc-active > div:first-child::before {\n  content: \"\";\n  position: absolute;\n  z-index: 2;\n  top: 7px;\n  left: calc(50% - 30px);\n  width: 60px;\n  height: 6px;\n  border-radius: 20px;\n  background: #070a11;\n  box-shadow: 0 1px 0 #ffffff13;\n  pointer-events: none;\n}\n.mcc-active > div:first-child::after {\n  content: \"\";\n  position: absolute;\n  z-index: 2;\n  bottom: 5px;\n  left: calc(50% - 38px);\n  width: 76px;\n  height: 3px;\n  border-radius: 20px;\n  background: #b5bfd865;\n  pointer-events: none;\n}\n.mcc-panel {\n  padding-top: 24px;\n}\n.mcc-header > div:first-child {\n  flex: 1;\n  min-width: 0;\n}\n.mcc-name {\n  max-width: 150px;\n  font-size: 20px;\n}\n.mcc-tools {\n  gap: 2px;\n}\n.mcc-tools button {\n  width: 32px;\n  min-width: 32px;\n  height: 40px;\n  font-size: 16px;\n}\n.mcc-avatar {\n  position: relative;\n}\n.mcc-secondary-label {\n  display: block;\n  margin-top: 9px;\n  font-size: 10px;\n}\n.mcc-secondary-label[hidden] {\n  display: none;\n}\n.mcc-original[hidden] {\n  display: none !important;\n}\n.mcc-minimized > div:first-child::before,\n.mcc-minimized > div:first-child::after {\n  display: none;\n}\n.mcc-history-launcher {\n  position: fixed;\n  right: 14px;\n  bottom: 88px;\n  z-index: 79;\n  border: 1px solid #7484a655 !important;\n  border-radius: 18px !important;\n  padding: 10px 14px !important;\n  background: #202738 !important;\n  color: #f5f7ff !important;\n  box-shadow: 0 4px 20px #0005;\n  font: 13px system-ui !important;\n  cursor: pointer;\n}\n.mcc-history-launcher[hidden] {\n  display: none !important;\n}\n.mcc-library {\n  box-sizing: border-box;\n  position: fixed;\n  top: calc(var(--mcc-top, 0px) + 28px);\n  right: 14px;\n  z-index: 110;\n  width: min(390px, calc(100vw - 28px));\n  max-height: calc(var(--mcc-vh, 100dvh) - 56px);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  padding: 14px;\n  border: 4px solid #0a0e17;\n  outline: 1px solid #8796b955;\n  border-radius: 28px;\n  background: var(--mcc-background, #202738) !important;\n  color: var(--mcc-text, #f5f7ff) !important;\n  box-shadow: 0 16px 60px #0009;\n  font:\n    14px system-ui,\n    sans-serif;\n}\n.mcc-library header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  margin-bottom: 12px;\n}\n.mcc-library main {\n  overflow: auto;\n  min-height: 0;\n  overscroll-behavior: contain;\n}\n.mcc-library button,\n.mcc-library select {\n  font: inherit !important;\n  cursor: pointer;\n  color: var(--mcc-text, #f5f7ff) !important;\n  background: var(--mcc-incoming, #101728) !important;\n  border: 1px solid #8796b933 !important;\n  border-radius: 12px !important;\n  min-height: 40px;\n  padding: 8px 12px !important;\n}\n.mcc-library .mcc-close {\n  font-size: 22px !important;\n  width: 40px;\n  min-width: 40px;\n}\n.mcc-library .mcc-record {\n  display: block;\n  width: 100%;\n  margin-bottom: 10px;\n  text-align: left;\n  white-space: normal;\n  line-height: 1.6;\n}\n.mcc-library .mcc-replay {\n  margin-top: 10px;\n  color: var(--mcc-accent, #809bff) !important;\n}\n.mcc-library .mcc-back {\n  margin-bottom: 12px;\n}\n.mcc-library .mcc-color-fields {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.mcc-library label {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  color: var(--mcc-text, #f5f7ff) !important;\n  font-size: 12px;\n}\n.mcc-library input[type=\"color\"] {\n  width: 44px;\n  height: 40px;\n  border: 0;\n  background: transparent;\n  padding: 2px;\n  cursor: pointer;\n}\n.mcc-library .mcc-order-label {\n  display: block;\n  margin: 18px 0 12px;\n}\n.mcc-library select {\n  display: block;\n  width: 100%;\n  margin-top: 8px;\n}\n.mcc-library p:not(.mcc-text):not(.mcc-original) {\n  font-size: 12px !important;\n  color: var(--mcc-muted, #b5bfd8) !important;\n  line-height: 1.6;\n}\n.mcc-inline {\n  box-sizing: border-box;\n  max-width: 576px;\n  margin: 0 auto 8px;\n  border: 1px solid var(--border, #d4dae7);\n  border-radius: 14px;\n  overflow: hidden;\n}\n.mcc-inline summary {\n  cursor: pointer;\n  padding: 13px 16px;\n  min-height: 46px;\n  background: var(--secondary, #e4e9f2) !important;\n  color: var(--foreground, #232b3b) !important;\n  font-size: 14px;\n  font-family: inherit;\n  user-select: none;\n}\n.mcc-inline-content {\n  padding: 14px;\n  background: var(--mcc-background, #202738) !important;\n  color: var(--mcc-text, #f5f7ff) !important;\n  max-height: 65dvh;\n  overflow: auto;\n  overscroll-behavior: contain;\n}\nhtml body .mcc-inline .mcc-text {\n  color: var(--mcc-text, #f5f7ff) !important;\n  opacity: 1 !important;\n  text-shadow: none !important;\n}\nhtml body .mcc-inline small,\nhtml body .mcc-inline .mcc-original {\n  color: var(--mcc-muted, #b5bfd8) !important;\n  opacity: 1 !important;\n}\nhtml body .mcc-inline .mcc-bubble {\n  background: var(--mcc-incoming, #101728) !important;\n}\nhtml body .mcc-inline .mcc-user {\n  background: var(--mcc-outgoing, #3b4875) !important;\n}\n.mcc-inline .mcc-replay {\n  margin-top: 10px;\n  min-height: 42px;\n  padding: 8px 12px !important;\n  border: 1px solid #8796b944 !important;\n  border-radius: 12px !important;\n  background: var(--mcc-incoming, #101728) !important;\n  color: var(--mcc-accent, #809bff) !important;\n  font-size: 14px;\n  font-family: inherit;\n  cursor: pointer;\n}\n@media (max-width: 600px) {\n  .mcc-inline {\n    margin-left: 16px;\n    margin-right: 16px;\n  }\n}\n@media (max-height: 520px) {\n  .mcc-avatar {\n    display: none;\n  }\n  .mcc-panel {\n    padding-top: 12px;\n  }\n  .mcc-name {\n    font-size: 17px;\n  }\n}\n\n.mcc-audio-actions{display:flex;flex-wrap:wrap;gap:8px}.mcc-audio-actions .mcc-replay{min-height:44px}.mcc-audio-feedback{font-size:12px;line-height:1.5;color:var(--mcc-muted,#b5bfd8)!important;white-space:pre-wrap;overflow-wrap:anywhere}.mcc-audio-feedback:empty{display:none}\n\nhtml body .mcc-panel .mcc-audio-actions{display:flex!important;flex-wrap:wrap;gap:8px;margin-top:10px}html body .mcc-panel .mcc-audio-actions button{display:inline-flex!important;align-items:center;min-height:44px;padding:8px 12px!important;border:1px solid #8796b944!important;border-radius:12px!important;background:var(--mcc-incoming,#101728)!important;color:var(--mcc-accent,#809bff)!important;font-size:13px!important;opacity:1!important}\n\nhtml body .mcc-panel .mcc-audio-feedback{color:var(--mcc-muted,#b5bfd8)!important;font-size:12px!important;opacity:1!important}\n";
  embeddedStyle.textContent += `
html body .mcc-edit-dialog textarea{width:100%;box-sizing:border-box;min-height:140px;max-height:35dvh;resize:vertical;font:16px system-ui;background:var(--mcc-incoming,#101728);color:var(--mcc-text,#f5f7ff);border:1px solid #8796b955;border-radius:12px;padding:12px}
html body .mcc-panel .mcc-edit{display:inline-flex!important;min-height:40px;padding:8px 12px!important;margin-top:8px;background:var(--mcc-incoming,#101728)!important;color:var(--mcc-accent,#809bff)!important;border:1px solid #8796b944!important;border-radius:12px!important;font-size:13px!important}
.mcc-edit-dialog{z-index:120!important;overflow:auto!important}
`;
  embeddedStyle.textContent += `
html body .mcc-inline .mcc-audio-actions,html body .mcc-panel .mcc-audio-actions{display:flex!important;gap:6px!important;align-items:center;flex-wrap:wrap;margin-top:8px!important}
html body .mcc-inline .mcc-audio-actions button,html body .mcc-panel .mcc-audio-actions button{width:32px!important;min-width:32px!important;height:30px!important;min-height:30px!important;margin:0!important;padding:0!important;border-radius:8px!important;font-size:0!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;line-height:1!important}
html body .mcc-audio-actions button[data-icon]::before{content:attr(data-icon);font:15px system-ui;color:var(--mcc-accent,#809bff)}
html body .mcc-audio-actions button:disabled{opacity:.45!important}
@media(pointer:coarse){html body .mcc-inline .mcc-audio-actions button,html body .mcc-panel .mcc-audio-actions button{height:34px!important;min-height:34px!important}}
`;
  (document.head || document.body).append(embeddedStyle);
  let disposed = false,
    surface = null,
    stage = null,
    panel = null,
    session = null,
    messages = [],
    fingerprint = "",
    busy = false,
    nativeMode = false,
    polling = false,
    showOriginal = true,
    error = "";
  const cache = new Map(),
    pending = new Map();
  const SETTINGS_KEY = "marinara.compact-phone.settings.v3";
  const defaults = {
    background: "#202738",
    text: "#f5f7ff",
    muted: "#b5bfd8",
    incoming: "#101728",
    outgoing: "#3b4875",
    accent: "#809bff",
    primary: "original",
  };
  let settings = { ...defaults },
    dbPromise,
    historyRoot = null,
    replayAudio = null,
    replayUrl = null,
    replayCancel = null,
    replayGeneration = 0,
    replayButton = null;
  const records = new Map(),
    clips = new Map(),
    waitingAudio = [],
    audioOffsets = new Map();
  const callEvents = new Map(),
    eventLoads = new Set(),
    folds = new Map();
  function currentChat() {
    return (
      document.querySelector(
        'marinara-capability-conversation-calls[view="surface"]',
      )?.capabilityProps?.chatId ||
      document.querySelector("[data-chat-id]")?.getAttribute("data-chat-id") ||
      ""
    );
  }
  function collectEvents(chatId, rows) {
    if (!Array.isArray(rows)) return;
    let map = callEvents.get(chatId);
    if (!map) {
      map = new Map();
      callEvents.set(chatId, map);
    }
    for (const message of rows) {
      let extra = message.extra;
      try {
        if (typeof extra === "string") extra = JSON.parse(extra);
      } catch {}
      const event = extra?.conversationCallEvent;
      if (
        event?.callId &&
        ["started", "active", "ended"].includes(event.status)
      )
        map.set(message.id, { ...event, createdAt: message.createdAt });
    }
  }
  function timeLabel(value) {
    return new Date(value).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }
  function inlineHistory() {
    if (disposed) return;
    const chatId = currentChat();
    if (!chatId) return;
    for (const [key, fold] of folds)
      if (
        !fold.node.isConnected ||
        !fold.start.isConnected ||
        !fold.end.isConnected ||
        fold.chatId !== chatId
      ) {
        fold.node.remove();
        folds.delete(key);
      }
    if (!eventLoads.has(chatId)) {
      eventLoads.add(chatId);
      api(`/api/chats/${encodeURIComponent(chatId)}/messages?limit=200`)
        .then((rows) => collectEvents(chatId, rows))
        .catch(() => {});
    }
    const events = [...(callEvents.get(chatId)?.values() || [])].sort((a, b) =>
      str(a.createdAt).localeCompare(str(b.createdAt)),
    );
    if (!events.length) return;
    // Native call-event cards omit data-message-id. Bind by native title/time,
    // server callId and order; refuse ambiguous matches instead of mixing calls.
    const labels = [
      ...document.querySelectorAll("div.truncate.font-semibold"),
    ].filter(
      (el) =>
        ["Call Started", "Call Ended"].includes(el.textContent.trim()) &&
        !el.closest(".mcc-inline"),
    );
    const groups = new Map();
    for (const label of labels) {
      const type =
          label.textContent.trim() === "Call Started" ? "start" : "end",
        subtitle = label.nextElementSibling?.textContent || "";
      const candidates = events.filter(
        (event) =>
          (event.status === "ended" ? "end" : "start") === type &&
          subtitle.includes(timeLabel(event.createdAt)),
      );
      const key =
        type + ":" + candidates.map((e) => e.callId + e.createdAt).join("|");
      if (!candidates.length) continue;
      if (!groups.has(key)) groups.set(key, { candidates, labels: [] });
      groups.get(key).labels.push(label);
    }
    const pairs = new Map();
    for (const group of groups.values()) {
      if (group.candidates.length !== group.labels.length) continue;
      group.labels.forEach((label, index) => {
        const event = group.candidates[index],
          row = label.closest(".group");
        if (!row) return;
        const pair = pairs.get(event.callId) || {};
        pair[event.status === "ended" ? "end" : "start"] = row;
        pairs.set(event.callId, pair);
      });
    }
    for (const [id, pair] of pairs) {
      if (
        !pair.start ||
        !pair.end ||
        !(
          pair.start.compareDocumentPosition(pair.end) &
          Node.DOCUMENT_POSITION_FOLLOWING
        )
      )
        continue;
      const key = chatId + ":" + id;
      if (folds.has(key)) continue;
      const node = document.createElement("details");
      node.className = "mcc-inline";
      node.dataset.callId = id;
      node.innerHTML =
        '<summary><span>통화 대사 펼치기</span></summary><div class="mcc-inline-content"></div>';
      applyColors(node);
      pair.start.after(node);
      folds.set(key, { node, chatId, start: pair.start, end: pair.end });
      node.ontoggle = async () => {
        if (!node.open) {
          stopReplay();
          node.querySelector("summary span").textContent = "통화 대사 펼치기";
          return;
        }
        node.querySelector("summary span").textContent = "통화 대사 접기";
        if (node.dataset.loaded === "true") return;
        const content = node.querySelector(".mcc-inline-content");
        content.textContent = "불러오는 중…";
        try {
          await historyReady;
          let record = records.get(id);
          if (!record) {
            const rows = await api(
              `/api/conversation-calls/${encodeURIComponent(id)}/messages`,
            );
            const map = document.querySelector(
              'marinara-capability-conversation-calls[view="surface"]',
            )?.capabilityProps?.characterMap;
            record = {
              id,
              chatId,
              names: Object.fromEntries(
                [...(map?.entries?.() || [])].map(([cid, c]) => [cid, c.name]),
              ),
              userName: "나",
              messages: (Array.isArray(rows) ? rows : []).filter(
                (m) =>
                  m.extra?.hiddenFromUser !== true &&
                  !["command", "system"].includes(m.kind),
              ),
              translations: {},
            };
          }
          if (disposed || !node.isConnected) return;
          records.set(record.id, record);
          content.replaceChildren();
          renderRecord(content, record, node);
          node.dataset.loaded = "true";
          if (!record.messages.length)
            content.textContent = "저장된 통화 대사가 없습니다.";
        } catch {
          content.textContent =
            "통화 대사를 불러오지 못했습니다. 접었다가 다시 펼치면 재시도합니다.";
        }
      };
    }
  }
  const historyReady = stored("calls", "getAll").then((rows) => {
    for (const record of rows || []) {
      record.inputOriginals ||= {};
      record.translations ||= {};
      if (!records.has(record.id)) records.set(record.id, record);
    }
  });
  try {
    const saved = JSON.parse(localStorage.getItem(SETTINGS_KEY) || "{}");
    for (const key of Object.keys(defaults))
      if (
        key === "primary"
          ? ["original", "translated"].includes(saved[key])
          : /^#[0-9a-f]{6}$/i.test(saved[key] || "")
      )
        settings[key] = saved[key];
  } catch {}
  function applyColors(root) {
    if (!root?.style) return;
    for (const key of [
      "background",
      "text",
      "muted",
      "incoming",
      "outgoing",
      "accent",
    ])
      root.style.setProperty(`--mcc-${key}`, settings[key]);
  }
  function openDB() {
    if (typeof indexedDB === "undefined") return Promise.resolve(null);
    return (dbPromise ||= new Promise((resolve) => {
      const req = indexedDB.open("marinara-compact-call-history", 1);
      req.onupgradeneeded = () => {
        for (const [name, key] of [
          ["calls", "id"],
          ["audio", "key"],
        ])
          if (!req.result.objectStoreNames.contains(name))
            req.result.createObjectStore(name, { keyPath: key });
      };
      req.onsuccess = () => {
        req.result.onversionchange = () => {
          req.result.close();
          dbPromise = null;
        };
        resolve(req.result);
      };
      req.onerror = () => {
        error =
          "통화 내역 저장소를 열 수 없습니다. 이 페이지에서만 내역을 유지합니다.";
        status();
        resolve(null);
      };
    }));
  }
  async function stored(store, operation, value) {
    const db = await openDB();
    if (!db) return null;
    return new Promise((resolve) => {
      const tx = db.transaction(
        store,
        operation === "get" || operation === "getAll"
          ? "readonly"
          : "readwrite",
      );
      const req = tx.objectStore(store)[operation](value);
      let result = null;
      req.onsuccess = () => {
        result = req.result;
      };
      tx.oncomplete = () => resolve(result);
      tx.onerror = tx.onabort = () => {
        error = "통화 내역 저장 실패 · 브라우저 저장 공간을 확인해 주세요.";
        status();
        resolve(null);
      };
    });
  }
  function recordCall() {
    if (!session?.id) return null;
    let record = records.get(session.id);
    if (!record) {
      const names = Object.fromEntries(
        (props().chatCharIds || []).map((id) => [
          id,
          character(id)?.name || "캐릭터",
        ]),
      );
      record = {
        id: session.id,
        chatId: props().chatId,
        startedAt: session.startedAt || session.createdAt,
        names,
        pronunciations: [
          ...(props().chatCharIds || []).map((id) => ({
            name: character(id)?.name || "",
            phoneticName: character(id)?.phoneticName || "",
          })),
          {
            name: props().personaInfo?.name || "",
            phoneticName: props().personaInfo?.phoneticName || "",
          },
        ],
        userName: props().personaInfo?.name || "나",
        title: Object.values(names).join(", ") || "통화",
        messages: [],
        translations: {},
        inputOriginals: {},
        status: session.status,
      };
      records.set(record.id, record);
    }
    const safe = messages
      .filter(
        (m) =>
          m.extra?.hiddenFromUser !== true &&
          !["command", "system"].includes(m.kind),
      )
      .map((m) => ({
        id: m.id,
        content:
          m.participantKind === "user"
            ? (record.inputOriginals?.[m.id] ?? m.content)
            : m.content,
        participantKind: m.participantKind,
        characterId: m.characterId,
        kind: m.kind,
        extra: m.extra,
        createdAt: m.createdAt,
      }));
    const signature = JSON.stringify([safe, session.status]);
    if (record.signature !== signature) {
      record.messages = safe;
      record.signature = signature;
      record.status = session.status;
      stored("calls", "put", record);
    }
    return record;
  }
  function cropStyle(crop) {
    if (!crop) return {};
    if ("zoom" in crop) {
      if (!crop.fullImage && crop.zoom <= 1) return {};
      return {
        ...(crop.fullImage ? { objectFit: "contain" } : {}),
        transform: `scale(${crop.zoom}) translate(${crop.offsetX}%, ${crop.offsetY}%)`,
      };
    }
    if (!(crop.srcWidth > 0 && crop.srcHeight > 0)) return {};
    return {
      position: "absolute",
      width: `${100 / crop.srcWidth}%`,
      height: `${100 / crop.srcHeight}%`,
      left: `${(-crop.srcX / crop.srcWidth) * 100}%`,
      top: `${(-crop.srcY / crop.srcHeight) * 100}%`,
      maxWidth: "none",
      maxHeight: "none",
      objectFit: "fill",
    };
  }
  const normalized = (text) =>
    str(text)
      .replace(/\[[^\]]*\]/g, "")
      .replace(/\s+/g, "")
      .trim();
  function reserveAudio(callId, body) {
    const record = records.get(callId),
      text = normalized(body?.text);
    if (!text) return null;
    const match = record?.messages.find((m) => {
      if (
        m.participantKind !== "character" ||
        !normalized(spokenText(m.content, record.pronunciations)).includes(text)
      )
        return false;
      return (
        normalized(spokenText(m.content, record.pronunciations)).indexOf(
          text,
          audioOffsets.get(`${callId}:${m.id}`) || 0,
        ) >= 0
      );
    });
    if (!match) return null;
    const key = `${callId}:${match.id}`,
      offset = audioOffsets.get(key) || 0;
    audioOffsets.set(
      key,
      normalized(spokenText(match.content, record.pronunciations)).indexOf(
        text,
        offset,
      ) + text.length,
    );
    let audio = clips.get(key);
    if (!audio) {
      audio = { key, callId, messageId: match.id, chunks: [] };
      clips.set(key, audio);
    }
    audio.request = {
      speaker: body.speaker,
      tone: body.tone,
      voice: body.voice,
    };
    const index = audio.chunks.length;
    audio.chunks.push(null);
    return { key, index };
  }
  async function captureAudio(callId, body, blob, reserved) {
    if (disposed || !blob?.size || !str(body?.text)) return;
    if (reserved) {
      const audio = clips.get(reserved.key);
      if (audio) {
        audio.chunks[reserved.index] = blob;
        await stored("audio", "put", audio);
      }
      return;
    }
    const record = records.get(callId),
      text = normalized(body.text);
    const match = record?.messages.find((m) => {
      if (
        m.participantKind !== "character" ||
        !normalized(spokenText(m.content, record.pronunciations)).includes(text)
      )
        return false;
      return (
        normalized(spokenText(m.content, record.pronunciations)).indexOf(
          text,
          audioOffsets.get(`${callId}:${m.id}`) || 0,
        ) >= 0
      );
    });
    if (!match) {
      waitingAudio.push({ callId, body, blob });
      return;
    }
    const key = `${callId}:${match.id}`,
      offset = audioOffsets.get(key) || 0;
    audioOffsets.set(
      key,
      normalized(spokenText(match.content, record.pronunciations)).indexOf(
        text,
        offset,
      ) + text.length,
    );
    let audio = clips.get(key);
    if (!audio) {
      audio = { key, callId, messageId: match.id, chunks: [] };
      clips.set(key, audio);
    }
    audio.request = {
      speaker: body.speaker,
      tone: body.tone,
      voice: body.voice,
    };
    audio.chunks.push(blob);
    await stored("audio", "put", audio);
  }
  function stopReplay() {
    replayGeneration++;
    replayAudio?.pause();
    replayCancel?.();
    replayCancel = null;
    replayAudio = null;
    if (replayUrl) URL.revokeObjectURL(replayUrl);
    replayUrl = null;
    if (replayButton) {
      replayButton.disabled = false;
      replayButton.textContent = "▶ 다시듣기"; replayButton.setAttribute("aria-label", "▶ 다시듣기"); replayButton.dataset.icon = "▶"; replayButton.title = "저장 음성 다시듣기";
    }
    replayButton = null;
  }
  async function replay(record, message, button, container = historyRoot) {
    if (replayButton === button && replayAudio) {
      stopReplay();
      return;
    }
    stopReplay();
    const generation = replayGeneration;
    replayButton = button;
    button.disabled = true;
    try {
      const audio =
        clips.get(`${record.id}:${message.id}`) ||
        (await stored("audio", "get", `${record.id}:${message.id}`));
      if (!audio?.chunks?.filter(Boolean).length) {
        button.textContent = "저장된 음성 없음"; button.setAttribute("aria-label", "저장된 음성 없음");
        return;
      }
      clips.set(audio.key, audio);
      for (const blob of audio.chunks.filter(Boolean)) {
        if (
          disposed ||
          !container?.isConnected ||
          (container.tagName === "DETAILS" && !container.open) ||
          generation !== replayGeneration
        )
          break;
        replayUrl = URL.createObjectURL(blob);
        const player = new Audio(replayUrl);
        replayAudio = player;
        button.textContent = "■ 재생 중 · 정지"; button.setAttribute("aria-label", "■ 재생 중 · 정지"); button.dataset.icon = "■"; button.title = "재생 정지";
        button.disabled = false;
        await new Promise((resolve, reject) => {
          replayCancel = resolve;
          player.onended = resolve;
          player.onerror = () => reject(new Error("저장된 음성 재생 실패"));
          player.play().catch(reject);
        });
        if (generation !== replayGeneration) break;
        URL.revokeObjectURL(replayUrl);
        replayUrl = null;
        replayAudio = null;
        replayCancel = null;
      }
      button.textContent = "▶ 다시듣기"; button.setAttribute("aria-label", "▶ 다시듣기"); button.dataset.icon = "▶"; button.title = "저장 음성 다시듣기";
    } catch (cause) {
      button.textContent =
        cause?.name === "NotAllowedError"
          ? "음성 준비 완료 · 눌러 재생"
          : "재생 실패 · 다시 시도";
    } finally {
      button.disabled = false;
    }
  }
  function closeHistory() {
    stopReplay();
    historyRoot?.remove();
    historyRoot = null;
  }
  function createDialog(title) {
    closeHistory();
    const root = document.createElement("section");
    root.className = "mcc-library";
    root.setAttribute("role", "dialog");
    root.setAttribute("aria-label", title);
    root.innerHTML = `<header><strong>${esc(title)}</strong><button type="button" class="mcc-close" aria-label="닫기">×</button></header><main></main>`;
    document.body.append(root);
    historyRoot = root;
    applyColors(root);
    root.querySelector(".mcc-close").onclick = closeHistory;
    return root;
  }
  function openSettings() {
    const root = createDialog("전화 화면 설정"),
      main = root.querySelector("main");
    const labels = {
      background: "화면 배경",
      text: "본문·이름 글자",
      muted: "원문·보조 글자",
      incoming: "상대 말풍선",
      outgoing: "내 말풍선",
      accent: "강조색",
    };
    main.innerHTML = `<div class="mcc-color-fields">${Object.entries(labels)
      .map(
        ([key, label]) =>
          `<label>${label}<input type="color" data-color="${key}" value="${settings[key]}"></label>`,
      )
      .join(
        "",
      )}</div><label class="mcc-order-label">크게 표시할 대사<select aria-label="크게 표시할 대사"><option value="original">원문 먼저 · 번역문 아래</option><option value="translated">번역문 먼저 · 원문 아래</option></select></label><button type="button" class="mcc-reset">기본 색상으로 초기화</button><p>색상과 표시 순서는 이 브라우저에 저장됩니다.</p>`;
    const save = () => {
      try {
        localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
      } catch {}
      applyColors(surface);
      applyColors(root);
      fingerprint = "";
      renderMessages();
    };
    main.querySelectorAll("input").forEach((input) => {
      input.oninput = () => {
        settings[input.dataset.color] = input.value;
        save();
      };
    });
    const select = main.querySelector("select");
    select.value = settings.primary;
    select.onchange = () => {
      settings.primary = select.value;
      save();
    };
    main.querySelector(".mcc-reset").onclick = () => {
      settings = { ...defaults };
      save();
      openSettings();
    };
  }
  // Same whole-name Unicode boundary replacement as native Calls hq().
  function spokenText(text, people = [], preserveCues = false) {
    let result = (preserveCues ? str(text) : str(text).replace(/\[[^\]\r\n]+\]/g, " "))
      .replace(/\s+/g, " ")
      .trim();
    for (const person of people || []) {
      const name = str(person.name).trim(),
        phonetic = str(person.phoneticName).trim();
      if (!name || !phonetic || name === phonetic) continue;
      const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      result = result.replace(
        new RegExp(
          `(^|[^\\p{L}\\p{N}_])(${escaped})(?=$|[^\\p{L}\\p{N}_])`,
          "giu",
        ),
        (_, prefix) => prefix + phonetic,
      );
    }
    return result;
  }
  const regenerating = new Set();
  function assignedVoice(config, speaker, characterId) {
    const normalize = (value) =>
      str(value)
        .toLowerCase()
        .replace(/[_-]+/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    const base = (value) => {
      let text = normalize(value),
        previous = "";
      while (text && text !== previous) {
        previous = text;
        text = text
          .replace(/\s*(?:\([^()]*\)|\[[^\]]*\]|\{[^{}]*})\s*$/g, "")
          .trim();
      }
      return (
        text.match(/^(.+?)\s+(?:[-–—:|])\s+[^-–—:|]+$/)?.[1]?.trim() || text
      );
    };
    const name = normalize(speaker);
    if (
      config.narratorVoiceEnabled &&
      ["narrator", "gm", "game master", "system"].includes(name)
    )
      return config.narratorVoice || config.voice || "";
    if (config.voiceMode === "per-character") {
      const assignments = Array.isArray(config.voiceAssignments)
        ? config.voiceAssignments
        : [];
      const match = assignments.find(
        (a) =>
          a.voice &&
          ((characterId && a.characterId === characterId) ||
            (name && normalize(a.characterName) === name)),
      );
      if (match) return match.voice;
      const matches = new Set(
        assignments
          .filter(
            (a) =>
              a.voice &&
              a.characterName &&
              base(a.characterName) === base(speaker),
          )
          .map((a) => a.voice),
      );
      if (matches.size === 1) return [...matches][0];
    }
    return config.voice || "";
  }
  async function regenerate(record, message, button, replayControl, feedback) {
    const key = `${record.id}:${message.id}`;
    if (disposed || regenerating.has(key)) return;
    if (
      !window.confirm(
        "이 대사의 원문으로 음성을 다시 생성할까요? TTS API를 사용하며 비용이 발생할 수 있습니다. 성공하면 저장 음성을 교체합니다.",
      )
    )
      return;
    regenerating.add(key);
    button.disabled = true;
    replayControl.disabled = true;
    button.textContent = "생성 중…"; button.setAttribute("aria-label", "생성 중…"); button.dataset.icon = "…"; button.title = "생성 중";
    feedback.textContent = "";
    stopReplay();
    try {
      const config = await api("/api/tts/config");
      if (config.enabled !== true)
        throw new Error("연결 탭에서 TTS를 활성화해 주세요.");
      const old = clips.get(key) || (await stored("audio", "get", key));
      const speaker =
        record.names?.[message.characterId] ||
        old?.request?.speaker ||
        message.extra?.turn?.speakerName ||
        "캐릭터";
      const voice = assignedVoice(config, speaker, message.characterId);
      if (!voice)
        throw new Error("연결 탭에서 이 캐릭터의 보이스를 설정해 주세요.");
      const tone = message.extra?.turn?.tone || old?.request?.tone;
      const people = [...(record.pronunciations || [])];
      // Read current native profile pronunciation; do not modify the character card.
      for (const id of Object.keys(record.names || {})) {
        const profile = await api(`/api/characters/${encodeURIComponent(id)}`).catch(() => null);
        if (!profile) continue;
        let data = profile.data;
        try {
          if (typeof data === "string") data = JSON.parse(data);
        } catch {}
        const name = data?.name || profile.name || record.names[id];
        const phoneticName =
          data?.extensions?.phoneticName || profile.phoneticName || "";
        const index = people.findIndex(
          (p) => p.name === record.names[id] || p.name === name,
        );
        if (index >= 0) people.splice(index, 1);
        people.push({ name: record.names[id], phoneticName });
        if (name !== record.names[id]) people.push({ name, phoneticName });
      }
      record.pronunciations = people;
      const text = spokenText(messageText(record, message).source, people, true);
      if (!text) throw new Error("재생성할 원문이 없습니다.");
      // Use original content only; split at the native endpoint's 4096-character limit.
      const parts = [];
      let part = "";
      for (const char of text) {
        if (part.length + char.length > 3900) {
          parts.push(part);
          part = "";
        }
        part += char;
      }
      if (part) parts.push(part);
      const chunks = [];
      for (const text of parts) {
        if (disposed) throw new Error("확장이 비활성화되어 중단했습니다.");
        const headers = new Headers({
          "content-type": "application/json",
          "x-marinara-csrf": "1",
        });
        const secret = localStorage.getItem("marinara_admin_secret");
        if (secret) headers.set("X-Admin-Secret", secret);
        const currentConfig = await api("/api/tts/config");
        if (currentConfig.enabled !== true) throw new Error("연결 탭의 TTS가 꺼져 있어 생성을 중단했습니다.");
        // Bypass our observation wrapper: one deliberate TTS request per chunk.
        const response = await downstream.call(window, "/api/tts/speak", {
          method: "POST",
          headers,
          body: JSON.stringify({
            text,
            speaker,
            voice,
            ...(tone ? { tone } : {}),
          }),
        });
        if (!response.ok) {
          let detail;
          try {
            detail = await response.json();
          } catch {}
          throw new Error(
            detail?.error ||
              detail?.message ||
              `TTS 실패 (HTTP ${response.status})`,
          );
        }
        const blob = await response.blob();
        if (!blob.size) throw new Error("빈 음성 응답입니다.");
        chunks.push(blob);
      }
      if (disposed) return;
      const audio = {
        key,
        callId: record.id,
        messageId: message.id,
        chunks,
        request: { speaker, voice, tone },
      };
      clips.set(key, audio);
      await stored("audio", "put", audio);
      records.set(record.id, record);
      await stored("calls", "put", record);
      replayControl.textContent = "▶ 다시듣기"; replayControl.setAttribute("aria-label", "▶ 다시듣기");
      feedback.textContent = "재생성 완료 · 다시듣기로 재생할 수 있습니다.";
    } catch (cause) {
      feedback.textContent = `${cause.message} · 기존 저장 음성은 유지됩니다.`;
    } finally {
      regenerating.delete(key);
      button.disabled = false;
      replayControl.disabled = false;
      button.textContent = "↻ 음성 재생성"; button.setAttribute("aria-label", "↻ 음성 재생성"); button.dataset.icon = "↻"; button.title = "음성 재생성";
      if (feedback.closest(".mcc-transcript")) feedback.scrollIntoView?.({block:"nearest"});
    }
  }
  function audioActions(bubble, record, message, container) {
    if (!record || message.participantKind !== "character" || bubble.querySelector(".mcc-audio-actions .mcc-replay:not(.mcc-edit):not(.mcc-translate)")) return;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "mcc-replay";
    button.textContent = "▶ 다시듣기"; button.setAttribute("aria-label", "▶ 다시듣기"); button.title = "저장 음성 다시듣기"; button.dataset.icon = "▶";
    button.onclick = () => replay(record, message, button, container);
    const regenerateButton = document.createElement("button");
    regenerateButton.type = "button";
    regenerateButton.className = "mcc-replay";
    regenerateButton.textContent = "↻ 음성 재생성"; regenerateButton.setAttribute("aria-label", "↻ 음성 재생성"); regenerateButton.title = "음성 재생성"; regenerateButton.dataset.icon = "↻";
    const feedback = document.createElement("p");
    feedback.className = "mcc-audio-feedback";
    feedback.setAttribute("role", "status");
    regenerateButton.onclick = () =>
      regenerate(record, message, regenerateButton, button, feedback);
    const actions = actionBar(bubble);
    actions.append(button, regenerateButton);
    bubble.append(feedback);
  }
  // Display filtering never changes the native message or the TTS source.
  function visibleText(value) {
    const cues = /\[([^\]\n]{1,80})\]/g;
    return str(value).replace(cues, (tag, cue) => {
      const action = /^(?:(?:very|soft|softly|quiet|quietly|gentle|gently|deep|deeply|light|lightly|slight|slightly|short|long|nervous|nervously|warm|warmly|slow|slowly|brief|briefly|small|little|sad|sadly|happy|happily|loud|loudly|dramatic|dramatically|sarcastic|sarcastically)\s+)*(?:sighs?|sighing|chuckles?|chuckling|laughs?|laughing|giggles?|giggling|scoffs?|scoffing|snickers?|snickering|snorts?|snorting|pause|pauses|pausing|whispers?|whispering|whispered|softly|breathes?|breathing|inhales?|exhales?|gasps?|gasping|coughs?|coughing|clears? throat|clearing throat|hums?|humming|crying|sobbing|sniffs?|sniffling|groans?|yawns?|yawning|hesitates?|hesitating|shouts?|shouting|excited|surprised|curious|annoyed|thoughtful|deadpan|whimsical)(?:\s+(?:very\s+)?(?:softly|quietly|gently|deeply|lightly|slightly|nervously|warmly|slowly|briefly|sadly|happily|loudly|dramatically|sarcastically))?[.!]?$/i;
      return action.test(cue.trim()) || /^(한숨|웃음|작은 웃음|가볍게 웃음|쿠스쿠스|킥킥|속삭임|속삭이며|잠시 멈춤|잠깐 멈춤|일시정지|숨소리)$/.test(cue.trim()) ? "" : tag;
    }).replace(/[ \t]{2,}/g, " ").trim();
  }
  function messageText(record, message) {
    const edit = record?.edits?.[message.id];
    const source = edit?.original ?? (message.participantKind === "user"
      ? record?.inputOriginals?.[message.id] ?? message.content : message.content);
    const override = record?.translationOverrides?.[message.id];
    const translated = override?.disabled ? "" : override?.translated ?? edit?.translated ?? record?.translations?.[message.id];
    return { source, translated: translated && visibleText(translated) !== visibleText(source) ? translated : "" };
  }
  function displayPair(record, message) {
    const { source, translated } = messageText(record, message);
    const reversed = settings.primary === "translated" && !!translated;
    return { primary: visibleText(reversed ? translated : source),
      secondary: translated ? visibleText(reversed ? source : translated) : "",
      label: reversed ? "번역문" : "원문", secondaryLabel: reversed ? "원문" : "번역문" };
  }
  let editDialog = null;
  function editAction(bubble, record, message) {
    if (!record || bubble.querySelector(".mcc-edit")) return;
    const button = document.createElement("button");
    button.type = "button"; button.className = "mcc-replay mcc-edit";
    button.textContent = "✎ 편집"; button.setAttribute("aria-label", "✎ 편집"); button.title = "대사 편집"; button.dataset.icon = "✎";
    button.onclick = () => {
      editDialog?.remove();
      const dialog = document.createElement("section");
      editDialog = dialog;
      dialog.className = "mcc-library mcc-edit-dialog";
      dialog.setAttribute("role", "dialog"); dialog.setAttribute("aria-modal", "true");
      dialog.setAttribute("aria-label", "통화 대사 편집");
      dialog.innerHTML = `<header><strong>통화 대사 편집</strong><button type="button" class="mcc-close" aria-label="편집 닫기">×</button></header><p>화면·통화 내역·번역·음성 재생성에 적용됩니다. 서버에 저장된 모델 대화 기록은 바뀌지 않습니다. 기존 음성은 자동으로 재생성하지 않습니다.</p><textarea aria-label="대사 원문" rows="6"></textarea><div class="mcc-audio-actions"><button type="button" class="mcc-save">저장</button><button type="button" class="mcc-cancel">취소</button></div><p class="mcc-edit-feedback" role="status"></p>`;
      const field = dialog.querySelector("textarea");
      field.value = messageText(record, message).source;
      const close = () => { dialog.remove(); if (editDialog === dialog) editDialog = null; };
      dialog.querySelector(".mcc-close").onclick = close;
      dialog.querySelector(".mcc-cancel").onclick = close;
      dialog.querySelector(".mcc-save").onclick = async () => {
        const save = dialog.querySelector(".mcc-save"), feedback = dialog.querySelector(".mcc-edit-feedback");
        const original = field.value.trim();
        if (!original) { feedback.textContent = "빈 대사는 저장할 수 없습니다."; return; }
        save.disabled = true; field.disabled = true;
        try {
          const direction = message.participantKind === "user" ? "input" : "output";
          const m = await translationMeta(record);
          const translated = record.translationOverrides?.[message.id]?.disabled ? "" : await translate(visibleText(original), direction, m, record.chatId);
          if (disposed || !dialog.isConnected) return;
          record.edits ||= {};
          record.edits[message.id] = { original, translated, editedAt: new Date().toISOString() };
          if (record.translationOverrides?.[message.id] && !record.translationOverrides[message.id].disabled)
            delete record.translationOverrides[message.id];
          await stored("calls", "put", record);
          close(); await refreshRecordViews(record);
        } catch (cause) { feedback.textContent = `저장 실패: ${cause.message}`; }
        finally { save.disabled = false; field.disabled = false; }
      };
      dialog.onkeydown = e => { if (e.key === "Escape") close(); };
      document.body.append(dialog); field.focus();
    };
    actionBar(bubble).append(button);
  }
  function actionBar(bubble) {
    let bar = bubble.querySelector(".mcc-audio-actions");
    if (!bar) { bar = document.createElement("div"); bar.className = "mcc-audio-actions"; bubble.append(bar); }
    return bar;
  }
  async function translationMeta(record) {
    const found = [...document.querySelectorAll('marinara-capability-conversation-calls')]
      .find(el => el.capabilityProps?.chatId === record.chatId);
    if (found?.capabilityProps?.metadata) return {...found.capabilityProps.metadata};
    const chat = await api(`/api/chats/${encodeURIComponent(record.chatId)}`);
    return typeof chat.metadata === "string" ? JSON.parse(chat.metadata) : {...chat.metadata};
  }
  async function refreshRecordViews(record) {
    records.set(record.id, record);
    fingerprint = "";
    await renderMessages();
    for (const fold of folds.values()) {
      if (fold.node.dataset.callId !== record.id) continue;
      if (!fold.node.open) { fold.node.dataset.loaded = "false"; continue; }
      const content = fold.node.querySelector(".mcc-inline-content"), top = content.scrollTop;
      content.replaceChildren(); renderRecord(content, record, fold.node);
      content.scrollTop = top; fold.node.dataset.loaded = "true";
    }
  }
  function translationAction(bubble, record, message) {
    if (!record || bubble.querySelector(".mcc-translate")) return;
    const button = document.createElement("button"); button.type = "button";
    button.className = "mcc-replay mcc-translate";
    const exists = !!messageText(record, message).translated;
    button.textContent = exists ? "번역 삭제" : "번역";
    button.title = button.textContent; button.setAttribute("aria-label", button.textContent); button.dataset.icon = exists ? "A×" : "A↔";
    button.onclick = async () => {
      button.disabled = true;
      try {
        record.translationOverrides ||= {};
        if (exists) record.translationOverrides[message.id] = { disabled: true };
        else {
          const source = messageText(record, message).source;
          const m = await translationMeta(record);
          const translated = await translate(visibleText(source), message.participantKind === "user" ? "input" : "output", m, record.chatId, true);
          if (disposed || messageText(record, message).source !== source) return;
          record.translationOverrides[message.id] = { disabled: false, translated };
        }
        await stored("calls", "put", record); await refreshRecordViews(record);
      } catch (cause) {
        let feedback = bubble.querySelector(".mcc-translation-feedback");
        if (!feedback) { feedback = document.createElement("p"); feedback.className = "mcc-audio-feedback mcc-translation-feedback"; feedback.setAttribute("role","status"); bubble.append(feedback); }
        feedback.textContent = `번역 처리 실패: ${cause.message}`;
      } finally { button.disabled = false; }
    };
    actionBar(bubble).append(button);
  }
  function renderRecord(main, record, container) {
    for (const message of record.messages) {
      const bubble = document.createElement("article");
      bubble.className = `mcc-bubble ${message.participantKind === "user" ? "mcc-user" : ""}`;
      const pair = displayPair(record, message);
      bubble.innerHTML = `<small>${esc(message.participantKind === "user" ? record.userName : record.names[message.characterId] || "캐릭터")} · ${pair.label}</small><p class="mcc-text">${esc(pair.primary)}</p>${pair.secondary ? `<small>${pair.secondaryLabel}</small><p class="mcc-original">${esc(pair.secondary)}</p>` : ""}`;
      editAction(bubble, record, message);
      translationAction(bubble, record, message);
      audioActions(bubble, record, message, container);
      main.append(bubble);
    }
  }
  const props = () => surface?.capabilityProps || {},
    meta = () => ({ ...props().metadata });
  const str = (v) => (typeof v === "string" ? v : "");
  const esc = (v) =>
    str(v).replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[c],
    );
  // Matches native getChatTranslationConfig: directional settings, legacy fallback,
  // undefined prompt inherits legacy; explicit null disables legacy prompt.
  function translationBody(text, direction, m, chatId) {
    const input = direction === "input",
      target = input
        ? m.translationInputTargetLang
        : m.translationOutputTargetLang;
    const prompt = input ? m.translationInputPrompt : m.translationOutputPrompt;
    const provider = ["ai", "deepl", "deeplx", "google"].includes(
      m.translationProvider,
    )
      ? m.translationProvider
      : "google";
    const body = {
      chatId,
      text,
      provider,
      targetLanguage:
        str(target).trim() || str(m.translationTargetLang).trim() || "en",
    };
    if (provider === "ai") {
      if (str(m.translationConnectionId))
        body.connectionId = m.translationConnectionId;
      const effective = prompt === undefined ? m.translationPrompt : prompt;
      if (typeof effective === "string") body.systemPrompt = effective;
    } else if (provider === "deepl" && str(m.translationDeeplApiKey))
      body.deeplApiKey = m.translationDeeplApiKey;
    else if (provider === "deeplx" && str(m.translationDeeplxUrl))
      body.deeplxUrl = m.translationDeeplxUrl;
    return body;
  }
  async function api(path, options = {}) {
    const headers = new Headers(options.headers);
    if (options.body) {
      headers.set("content-type", "application/json");
      headers.set("x-marinara-csrf", "1");
    }
    const secret = localStorage.getItem("marinara_admin_secret");
    if (secret) headers.set("X-Admin-Secret", secret);
    const r = await (host?.fetch
      ? host.fetch(path, { ...options, headers })
      : downstream.call(window, path, { ...options, headers }));
    const value = await r.json();
    if (!r.ok)
      throw new Error(value.error || value.message || `HTTP ${r.status}`);
    return value;
  }
  function translate(text, direction, m, chatId, force = false) {
    if (!force && m[direction === "input" ? "translateInput" : "autoTranslate"] !== true)
      return Promise.resolve(text);
    const body = translationBody(text, direction, m, chatId),
      key = JSON.stringify(body);
    if (cache.has(key)) return Promise.resolve(cache.get(key));
    if (pending.has(key)) return pending.get(key);
    const p = api("/api/translate", {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((v) => {
        if (!str(v.translatedText).trim())
          throw new Error("번역 결과가 비어 있습니다.");
        cache.set(key, v.translatedText.trim());
        if (cache.size > 200) cache.delete(cache.keys().next().value);
        return v.translatedText.trim();
      })
      .finally(() => pending.delete(key));
    pending.set(key, p);
    return p;
  }
  function pathname(input) {
    try {
      const url = new URL(
        input instanceof Request ? input.url : String(input),
        location.href,
      );
      return url.origin === new URL(location.href).origin ? url.pathname : "";
    } catch {
      return "";
    }
  }
  async function wrappedFetch(input, init) {
    discover();
    const path = pathname(input),
      method = String(
        init?.method || (input instanceof Request ? input.method : "GET"),
      ).toUpperCase();
    if (!disposed && path === "/api/tts/speak" && method === "POST") {
      try {
        const config = await api("/api/tts/config");
        if (config.enabled !== true) return new Response(JSON.stringify({error:"TTS가 꺼져 있어 음성 요청을 차단했습니다."}), {status:409,headers:{"content-type":"application/json","X-Marinara-Extension-TTS-Suppressed":"1"}});
      } catch {
        return new Response(JSON.stringify({error:"TTS 활성화 상태를 확인하지 못해 음성 요청을 보내지 않았습니다."}), {status:503,headers:{"content-type":"application/json"}});
      }
    }
    const chatMessages = path.match(/^\/api\/chats\/([^/]+)\/messages$/);
    if (!disposed && chatMessages && method === "GET") {
      const r = await downstream.call(window, input, init);
      if (r.ok)
        r.clone()
          .json()
          .then((rows) => {
            if (!disposed)
              collectEvents(decodeURIComponent(chatMessages[1]), rows);
          })
          .catch(() => {});
      return r;
    }
    if (
      !disposed &&
      stage?.isConnected &&
      !nativeMode &&
      path === "/api/tts/speak"
    ) {
      await historyReady;
      const callId = session?.id;
      let audioBody;
      try {
        audioBody = JSON.parse(
          typeof init?.body === "string"
            ? init.body
            : input instanceof Request
              ? await input.clone().text()
              : "",
        );
      } catch {}
      const reservedAudio = callId ? reserveAudio(callId, audioBody) : null;
      try {
        const r = await downstream.call(window, input, init);
        if (r.ok && callId)
          await r
            .clone()
            .blob()
            .then((blob) =>
              captureAudio(callId, audioBody, blob, reservedAudio),
            )
            .catch(() => {});
        if (!r.ok) {
          error = `순정 TTS 실패 (HTTP ${r.status}) · 연결 탭의 미리듣기도 확인해 주세요.`;
          status();
        }
        return r;
      } catch (cause) {
        error = "순정 TTS 연결 실패 · 연결 탭의 미리듣기도 확인해 주세요.";
        status();
        throw cause;
      }
    }
    if (
      !disposed &&
      session &&
      path === `/api/conversation-calls/${session.id}/end` &&
      method === "POST"
    ) {
      const record = recordCall(),
        r = await downstream.call(window, input, init);
      if (r.ok && record) {
        record.status = "ended";
        session = { ...session, status: "ended" };
        stored("calls", "put", record);
      }
      return r;
    }
    const match = path.match(
      /^\/api\/conversation-calls\/([^/]+)\/(messages|idle)$/,
    );
    if (!disposed && match && method === "GET" && path.endsWith("/messages") && stage?.isConnected) {
      const current = surface;
      const response = await downstream.call(window, input, init);
      if (response.ok && !disposed && surface === current) {
        const rows = await response.clone().json().catch(() => null);
        if (Array.isArray(rows) && (!session || session.id === match[1])) {
          session ||= { id: match[1], chatId: props().chatId, status: "active" };
          merge(rows);
          renderMessages();
        }
      }
      return response;
    }
    const own =
      !disposed &&
      stage?.isConnected &&
      !nativeMode &&
      match &&
      (!session || match[1] === session.id);
    // Text-only mode waits for actual user input, not microphone silence checks.
    if (own && session && method === "POST" && path.endsWith("/idle"))
      return new Response(
        JSON.stringify({ session, assistantMessages: [], turns: [] }),
        { headers: { "content-type": "application/json" } },
      );
    if (own && method === "POST" && path.endsWith("/messages")) {
      let body;
      try {
        body = JSON.parse(
          typeof init?.body === "string"
            ? init.body
            : input instanceof Request
              ? await input.clone().text()
              : "",
        );
      } catch {}
      if (body?.inputMode === "typed" && typeof body.content === "string") {
        if (busy) throw new Error("이전 메시지 응답을 기다려 주세요.");
        busy = true;
        error = "";
        status();
        try {
          await historyReady;
          const id = match[1],
            chatId = props().chatId,
            m = meta();
          const inputOriginal = body.content;
          body.content = await translate(body.content, "input", m, chatId);
          if (
            disposed ||
            (session && session.id !== id) ||
            props().chatId !== chatId
          )
            throw new Error("통화 변경으로 전송을 취소했습니다.");
          const options = { ...init, body: JSON.stringify(body) };
          const r = await downstream.call(
            window,
            input instanceof Request ? new Request(input, options) : input,
            input instanceof Request ? undefined : options,
          );
          if (r.ok) {
            const v = await r
              .clone()
              .json()
              .catch(() => null);
            if (v && !disposed && (!session || session.id === id)) {
              if (v.session) session = v.session;
              const record = recordCall();
              if (record && v.userMessage) {
                record.inputOriginals ||= {};
                record.inputOriginals[v.userMessage.id] = inputOriginal;
                if (v.userMessage.content !== inputOriginal)
                  record.translations[v.userMessage.id] = v.userMessage.content;
                await stored("calls", "put", record);
              }
              merge(
                [v.userMessage, ...(v.assistantMessages || [])].filter(Boolean),
              );
              renderMessages();
            }
          } else error = `순정 전송 실패 (HTTP ${r.status})`;
          return r; // Native response and turns stay untouched; native Calls runs TTS.
        } catch (cause) {
          error = `전송 중단: ${cause.message}`;
          throw cause;
        } finally {
          busy = false;
          status();
        }
      }
    }
    return downstream.call(window, input, init);
  }
  window.fetch = wrappedFetch;
  function merge(items) {
    const map = new Map(messages.map((m) => [m.id, m]));
    items.forEach((m) => map.set(m.id, m));
    messages = [...map.values()].sort((a, b) =>
      str(a.createdAt).localeCompare(str(b.createdAt)),
    );
    recordCall();
    for (const audio of waitingAudio.splice(0))
      captureAudio(audio.callId, audio.body, audio.blob);
  }
  const character = (id) => props().characterMap?.get?.(id);
  function status() {
    if (panel) {
      const el = panel.querySelector(".mcc-status");
      el.textContent =
        error ||
        (busy ? "번역·응답 처리 중…" : "텍스트 통화 · 음성은 순정 TTS로 재생");
      el.classList.toggle("mcc-error", !!error);
    }
  }
  function header() {
    if (!panel) return;
    const latest = [...messages]
      .reverse()
      .find((m) => m.participantKind === "character");
    const c = character(latest?.characterId || props().chatCharIds?.[0]),
      name = c?.name || "통화 중";
    const started = Date.parse(session?.startedAt || session?.createdAt || ""),
      secs = Number.isFinite(started)
        ? Math.max(0, Math.floor((Date.now() - started) / 1000))
        : 0;
    const duration = `${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, "0")}`;
    panel.querySelector(".mcc-name").textContent = name;
    panel.querySelector(".mcc-time").textContent = duration;
    panel.querySelector(".mcc-reopen").textContent =
      `☎ ${name} · ${duration} · 통화 열기`;
    const avatar = panel.querySelector(".mcc-avatar");
    const avatarKey = JSON.stringify([c?.avatarUrl, c?.avatarCrop]);
    if (avatar.dataset.url !== avatarKey) {
      avatar.dataset.url = avatarKey;
      avatar.replaceChildren();
      if (c?.avatarUrl) {
        const img = document.createElement("img");
        img.src = c.avatarUrl;
        img.alt = name;
        Object.assign(img.style, cropStyle(c.avatarCrop));
        avatar.append(img);
      } else avatar.textContent = name.slice(0, 1);
    }
    status();
  }
  async function renderMessages() {
    if (!panel) return;
    const p = panel,
      id = session?.id,
      m = meta(),
      chatId = props().chatId;
    const items = messages
      .filter(
        (v) =>
          v.extra?.hiddenFromUser !== true &&
          !["command", "system"].includes(v.kind) &&
          str(v.content).trim(),
      )
      .slice(-30);
    const key = JSON.stringify([id, items, m, showOriginal, settings.primary]);
    if (key === fingerprint) return;
    fingerprint = key;
    const log = panel.querySelector(".mcc-transcript"),
      bottom = log.scrollHeight - log.scrollTop - log.clientHeight < 50,
      top = log.scrollTop;
    log.innerHTML = items.length
      ? items
          .map(
            (v) =>
              `<article class="mcc-bubble ${v.participantKind === "user" ? "mcc-user" : ""}" data-id="${esc(v.id)}"><small>${esc(v.participantKind === "user" ? props().personaInfo?.name || "나" : character(v.characterId)?.name || "캐릭터")} · <span class="mcc-primary-label">原文 / 원문</span></small><p class="mcc-text">${esc(visibleText(v.content))}</p><small class="mcc-secondary-label" hidden></small><p class="mcc-original" hidden></p></article>`,
          )
          .join("")
      : '<p class="mcc-empty">연결되었습니다. 아래 입력창으로 대화하세요.<br>음성 대사와 번역이 여기에 표시됩니다.</p>';
    const liveRecord = recordCall();
    for (const message of items) {
      const bubble = [...log.children].find(node => node.dataset.id === message.id);
      if (bubble) { audioActions(bubble, liveRecord, message, panel); editAction(bubble, liveRecord, message); translationAction(bubble, liveRecord, message); }
    }
    log.scrollTop = bottom ? log.scrollHeight : top;
    header();
    for (const v of items.filter((v) => v.participantKind === "user")) {
      const pair = displayPair(records.get(id), v);
      const bubble = [...log.children].find((n) => n.dataset.id === v.id);
      if (!bubble) continue;
      bubble.querySelector(".mcc-text").textContent = pair.primary;
      bubble.querySelector(".mcc-primary-label").textContent = pair.label;
      const other = bubble.querySelector(".mcc-original"), label = bubble.querySelector(".mcc-secondary-label");
      other.textContent = pair.secondary; other.hidden = !showOriginal || !pair.secondary;
      label.textContent = pair.secondaryLabel; label.hidden = other.hidden;
    }
    for (const v of items.filter((v) => v.participantKind === "character"))
      try {
        const currentRecord = records.get(id);
        if (currentRecord?.translationOverrides?.[v.id]?.disabled) {
          const bubble = [...log.children].find(n => n.dataset.id === v.id), pair = displayPair(currentRecord, v);
          if (bubble) { bubble.querySelector(".mcc-text").textContent = pair.primary; bubble.querySelector(".mcc-primary-label").textContent = pair.label; bubble.querySelector(".mcc-original").hidden = true; bubble.querySelector(".mcc-secondary-label").hidden = true; }
          continue;
        }
        const rawSource = messageText(currentRecord, v).source;
        const translated = currentRecord?.translationOverrides?.[v.id]?.translated ?? await translate(visibleText(rawSource), "output", m, chatId);
        if (
          disposed ||
          panel !== p ||
          session?.id !== id ||
          fingerprint !== key
        )
          return;
        const bubble = [...log.children].find((n) => n.dataset.id === v.id);
        if (!bubble) continue;
        const record = records.get(id);
        if (record?.translationOverrides?.[v.id]?.disabled) continue;
        if (record && translated !== v.content) {
          record.translations[v.id] = translated;
          stored("calls", "put", record);
        }
        const pair = displayPair(record, v);
        bubble.querySelector(".mcc-text").textContent = pair.primary;
        bubble.querySelector(".mcc-primary-label").textContent = pair.label;
        const original = bubble.querySelector(".mcc-original");
        original.textContent = pair.secondary; original.hidden = !showOriginal || !pair.secondary;
        const secondaryLabel = bubble.querySelector(".mcc-secondary-label");
        secondaryLabel.textContent = pair.secondaryLabel; secondaryLabel.hidden = original.hidden;
        bubble.querySelector(".mcc-translate")?.remove(); translationAction(bubble, record, v);
        if (bottom) log.scrollTop = log.scrollHeight;
      } catch (cause) {
        if (panel === p) {
          error = `수신 번역 실패: ${cause.message} · 원문 표시 중`;
          status();
        }
      }
  }
  function minimize(value) {
    surface?.classList.toggle("mcc-minimized", value);
    panel
      ?.querySelector(".mcc-reopen")
      .setAttribute("aria-expanded", String(!value));
  }
  function detach() {
    recordCall();
    surface?.classList.remove("mcc-active", "mcc-minimized");
    panel?.remove();
    surface = stage = panel = null;
    session = null;
    messages = [];
    fingerprint = "";
  }
  function nativeEndButton(root) {
    return root?.querySelector('button[title="End call"]') || root?.querySelector("button.mari-chrome-control--danger");
  }
  function attach(found, foundStage) {
    detach();
    surface = found;
    stage = foundStage;
    nativeMode = false;
    const form = surface.querySelector("[data-marinara-call-chat] form");
    if (
      !form?.querySelector("textarea") ||
      !nativeEndButton(stage)
    ) {
      surface = stage = null;
      return;
    }
    panel = document.createElement("section");
    panel.className = "mcc-panel";
    panel.setAttribute("aria-label", "텍스트 통화");
    panel.innerHTML =
      '<button class="mcc-reopen" type="button" aria-expanded="true"></button><header class="mcc-header"><div><span class="mcc-tag">● CONNECTED</span><strong class="mcc-name"></strong><span class="mcc-time"></span></div><div class="mcc-tools"><button type="button" data-action="cc" aria-label="보조 자막 전환" aria-pressed="true">CC</button><button type="button" data-action="settings" aria-label="전화 화면 설정">⚙</button><button type="button" data-action="minimize" aria-label="통화 최소화">−</button></div></header><div class="mcc-avatar"></div><div class="mcc-transcript" role="log" aria-label="통화 대사와 번역"></div><div class="mcc-status" role="status"></div><footer><button type="button" class="mcc-end">☎ <span>통화 종료</span></button></footer>';
    stage.append(panel);
    surface.classList.add("mcc-active");
    applyColors(surface);
    panel.querySelector(".mcc-reopen").onclick = () => minimize(false);
    panel.querySelector('[data-action="minimize"]').onclick = () =>
      minimize(true);
    panel.querySelector('[data-action="settings"]').onclick = openSettings;
    panel.querySelector('[data-action="cc"]').onclick = (e) => {
      showOriginal = !showOriginal;
      e.currentTarget.setAttribute("aria-pressed", String(showOriginal));
      fingerprint = "";
      renderMessages();
    };
    panel.querySelector(".mcc-end").onclick = () =>
      nativeEndButton(stage)?.click();
    header();
    renderMessages();
  }
  function discover() {
    if (disposed) return;
    inlineHistory();
    const found = document.querySelector(
        'marinara-capability-conversation-calls[view="surface"]',
      ),
      s = found?.querySelector("[data-marinara-call-stage]");
    if (!s) {
      detach();
      return;
    }
    if (stage !== s) attach(found, s);
  }
  const seenCallStatus = new Map();
  async function poll() {
    discover();
    await historyReady;
    if (disposed || polling) return;
    const current = document.querySelector('marinara-capability-conversation-calls[view="surface"]');
    const chatId = current?.capabilityProps?.chatId;
    if (!chatId) return;
    polling = true;
    try {
      const result = await api(
        `/api/conversation-calls/chat/${encodeURIComponent(chatId)}/status`,
      );
      if (disposed || !current.isConnected || current.capabilityProps?.chatId !== chatId) return;
      const stateKey = JSON.stringify([result.activeCall?.id, result.activeCall?.status, result.ringingCall?.id]);
      const previous = seenCallStatus.get(chatId); seenCallStatus.set(chatId, stateKey);
      if (previous !== stateKey && (result.ringingCall || previous !== undefined))
        window.dispatchEvent(new CustomEvent("marinara-capability-server-event", {detail:{packageId:"conversation-calls",chatId}}));
      if (surface !== current || !stage?.isConnected) return;
      const active = result.activeCall;
      if (!active) {
        session = null;
        messages = [];
        return;
      }
      if (session?.id !== active.id) {
        messages = [];
        fingerprint = "";
        minimize(false);
      }
      session = active;
      const items = await api(
        `/api/conversation-calls/${encodeURIComponent(active.id)}/messages`,
      );
      if (
        disposed ||
        surface !== current ||
        props().chatId !== chatId ||
        session?.id !== active.id
      )
        return;
      merge(Array.isArray(items) ? items : []);
      header();
      renderMessages();
    } catch (cause) {
      if (!disposed) {
        error = `상태 조회 실패: ${cause.message}`;
        status();
      }
    } finally {
      polling = false;
    }
  }
  function click(e) {
    if (
      e.target.closest?.(
        'marinara-capability-conversation-calls[view="toolbar"]',
      )
    )
      minimize(false);
  }
  function viewport() {
    const v = window.visualViewport;
    if (v) {
      document.documentElement.style.setProperty("--mcc-vh", `${v.height}px`);
      document.documentElement.style.setProperty(
        "--mcc-top",
        `${v.offsetTop}px`,
      );
      document.documentElement.classList.toggle("mcc-keyboard", v.height < 520);
    }
  }
  const timer = setInterval(poll, 2000),
    discovery = setInterval(discover, 300);
  document.addEventListener("click", click, true);
  window.visualViewport?.addEventListener("resize", viewport);
  window.visualViewport?.addEventListener("scroll", viewport);
  viewport();
  poll();
  function dispose() {
    if (disposed) return;
    disposed = true;
    clearInterval(timer);
    clearInterval(discovery);
    document.removeEventListener("click", click, true);
    window.visualViewport?.removeEventListener("resize", viewport);
    window.visualViewport?.removeEventListener("scroll", viewport);
    if (window.fetch === wrappedFetch) window.fetch = downstream;
    detach();
    closeHistory();
    editDialog?.remove();
    embeddedStyle.remove();
    for (const fold of folds.values()) fold.node.remove();
    folds.clear();
    cache.clear();
    pending.clear();
    seenCallStatus.clear();
    document.documentElement.classList.remove("mcc-keyboard");
    document.documentElement.style.removeProperty("--mcc-vh");
    document.documentElement.style.removeProperty("--mcc-top");
  }
  window[KEY] = { version: "3.5.0", dispose };
  host?.onCleanup?.(dispose);
})();
