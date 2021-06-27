import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  if (inputText === "") return alert("未入力");
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  const li = document.createElement("li");
  li.innerText = text;
  li.className = "list-row";

  // 削除ボタン
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "削除";
  deleteBtn.addEventListener("click", () => {
    deleteFromIncompleteList(deleteBtn.parentNode);
  });

  // 完了ボタン
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "完了";
  completeBtn.addEventListener("click", () => {
    deleteFromIncompleteList(completeBtn.parentNode);

    const addTarget = completeBtn.parentNode;
    const text = addTarget.firstChild.textContent;

    addTarget.textContent = null;

    const liComp = document.createElement("li");
    liComp.innerText = text;
    liComp.className = "list-row";

    // 完了したToDo
    const returnBtn = document.createElement("button");
    returnBtn.innerText = "戻す";
    returnBtn.addEventListener("click", () => {
      const deleteTarget = returnBtn.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキスト取得
      const text = returnBtn.parentNode.firstChild.textContent;
      createIncompleteList(text);
    });
    liComp.appendChild(returnBtn);
    document.getElementById("complete-list").appendChild(liComp);
  });

  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
