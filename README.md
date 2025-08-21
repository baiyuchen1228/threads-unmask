# Threads Unmask

**厭倦了每次都要手動點擊，才能查看 Threads 上的內容嗎？**

`Threads Unmask` 能自動揭開所有被隱藏的貼文，讓您無需任何點擊，享受更順暢的瀏覽體驗。

| Before | After |
| --- | --- |
| <img width="268" height="106" alt="image" src="https://github.com/user-attachments/assets/d416897d-5a9b-489a-9e9a-96b7c88f41af" /> | <img width="268" height="106" alt="image" src="https://github.com/user-attachments/assets/eb292e72-a6d8-4fe5-9d73-ca18f7eba229" /> |

## ✨ 特色 (Features)

*   **自動顯示**：自動揭開被標示為「暴雷」的貼文。
*   **無需點擊**：節省您的時間與操作。
*   **輕量高效**：僅使用 CSS 和幾行 JS，對瀏覽器性能影響極小。

## 🚀 安裝 (Installation)

#### 簡易安裝 (推薦給所有使用者)
1.  前往本專案的 [**Releases**](https://github.com/baiyuchen1228/threads-unmask/releases) 頁面下載最新版的 `threads-unmask.zip` 檔案。
2.  解壓縮下載的檔案。
3.  打開瀏覽器的擴充功能頁面 (`edge://extensions` 或 `chrome://extensions`)。
4.  開啟右上角的「開發人員模式」。
5.  點擊「載入解壓縮(edge)」或「載入未封裝項目(chrome)」，然後選擇剛剛解壓縮出來的資料夾即可。

#### 開發者安裝
1.  `git clone https://github.com/baiyuchen1228/threads-unmask.git`
2.  打開瀏覽器擴充功能頁面，開啟「開發人員模式」。
3.  點擊「載入解壓縮(edge)」或「載入未封裝項目(chrome)」，指向 clone 下來的專案資料夾。

## ⚙️ 原理 (How it works)

本擴充功能透過以下方式運作：
*   `core.js`：使用 `MutationObserver` 監聽頁面變化，當找到含有遮罩的容器時，為其掛上 `data-unmask` 標籤。
*   `unmask.css`：利用 CSS 屬性選擇器 `[data-unmask]`，僅針對被標記的容器，強制解除內容的透明度與滑鼠事件限制。

## ⚠️ 注意事項
*   本擴充功能僅影響您本機的瀏覽器顯示，不會修改任何網路內容。
*   若未來 Threads 網站更新其 CSS 類名，可能會導致此擴充功能失效，屆時需要更新版本。

## 🤝 貢獻 (Contributing)
歡迎回報問題或提出建議！請直接到 [GitHub Issues](https://github.com/baiyuchen1228/threads-unmask/issues) 頁面提交。
