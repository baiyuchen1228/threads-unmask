(() => {
    // 找到含 .x47corl 的區塊，往上抓貼文容器並加 data-unspoil
    const markContainers = (root = document) => {
      const flags = root.querySelectorAll('.x47corl');
      for (const f of flags) {
        let n = f, steps = 0;
        // 向上找夠大的 DIV/ARTICLE 作為容器
        while (n && steps < 8) {
          if (!(n instanceof Element)) break;
          const r = n.getBoundingClientRect?.() || { width: 0, height: 0 };
          if ((n.tagName === 'ARTICLE' || n.tagName === 'DIV') && r.width >= 280 && r.height >= 120) {
            n.setAttribute('data-unspoil', '1');
            break;
          }
          n = n.parentElement; steps++;
        }
      }
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
        if (m.type === 'attributes' && m.target.matches?.('.x47corl')) markContainers(document);
      }
    }).observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
  })();
  