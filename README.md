# TimeExchange Web Project

* TimeExchange FB : [台北技能交換 Skill Exchange in Taipei](https://www.facebook.com/groups/689157281218904/)

## Getting Started

	$ npm i
	$ npm run watch

Then connect to `http://localhost:8080/` with browser.

## 多國翻譯流程
1. 從最新之`develop`分枝`Branch`(名稱可以叫`feature/i18n-SignUp`之類的)
2. 在`tx-web/locale/`目錄下有根據不同功能區分多個子目錄。子目錄裡會有`zh-tw.json`與`en.json`兩個`JSON`檔。
	* `zh-tw.json`: 對應的中文語言。可以在這裏潤飾中文語句。
	* `en.json`: 對應的英文語言。檔案一開始應該會是`zh-tw.json`的鏡像檔案，把中文直接改成英文翻譯即可。
3. 翻譯完成後於`git`中`Commit`，並`push`至`GitLab`
4. `Gitlab -> Merge Requests -> New Merge Request` 新建`feature/i18n-XXXX`的PR並將Target Branch設為`develop`
5. 設定Approvers後`Submit`即可。
