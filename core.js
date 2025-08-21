(() => {
    const markContainers = (root = document) => {
      root.querySelectorAll('.xg01cxk').forEach(el => {
        const firstChild = el.firstElementChild;
        if (firstChild && firstChild.tagName.toLowerCase() === 'span') {
          el.className = el.className.replace('xg01cxk',''); // 移除 class
        }
      });
    };

    const kickoff = () => markContainers(document);
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', kickoff, { once: true });
    } else {
      kickoff();
    }
    // 動態載入也處理
    new MutationObserver(muts => {
      for (const m of muts) {
        if (m.type === 'childList' && m.addedNodes.length) markContainers(document);
      }
    }).observe(document.documentElement, { childList: true, subtree: true });
  })();