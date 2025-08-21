# Threads Unspoil (Scoped CSS)

透過改變 CSS 去自動檢視 threads 上的防暴雷內容。


|  before   | after  |
|  ----  | ----  |
| <img width="268" height="106" alt="image" src="https://github.com/user-attachments/assets/d416897d-5a9b-489a-9e9a-96b7c88f41af" />  | <img width="268" height="106" alt="image" src="https://github.com/user-attachments/assets/eb292e72-a6d8-4fe5-9d73-ca18f7eba229" /> |




## 安裝（Edge / Chrome）
1. 下載或 clone 本專案。
2. 打開 `edge://extensions` 或 `chrome://extensions`。
3. 開啟「開發人員模式」→「載入未封裝項目」→ 指向此專案資料夾。
4. 造訪 `https://www.threads.net/` 或 `https://www.threads.com/` 測試。

## 原理
- `scope.js`：尋找含有遮罩層的容器，標記 `data-unspoil`。
- `unspoil.css`：僅對標記容器內的元素：
  - `.xg01cxk { opacity: 1 !important; }`
  - `.x47corl { pointer-events: auto !important; opacity: 1 !important; }`

## 檔案說明
- `manifest.json`：Manifest v3，內容指向上述兩個檔案並限制在 Threads 網域。
- `unspoil.css`：範圍化 CSS。
- `scope.js`：偵測遮罩並在容器掛 `data-unspoil`。

## 注意事項
- 僅影響本機顯示；請遵守 Threads / Meta 使用條款與社群規範。
- 若 Threads 更改類名（如 `.xg01cxk` / `.x47corl`），需更新選擇器。
