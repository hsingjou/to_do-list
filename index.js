//此段目的在於，每個清單項目都添加一個X的符號，（讓使用者欲刪除清單項目時，可以點選這個符號，以進行刪除動作。）也就是當程式剛執行時，即可在清單項目範例上看見
var mylist = document.getElementsByTagName("li");//找到程式當中所有<li>元素，並且對它進行操作
var i;
for (i = 0; i < mylist.length; i++) {  //此for迴圈表示每個<li>元素都要有一個x按鈕
var span = document.createElement("span");
var txt = document.createTextNode("\u00D7");
span.className = "close"; //在<span>建立一個類別，取名為close
span.appendChild(txt);//把txt，即文本節點，附加到<span>
mylist[i].appendChild(span);//把<span>附加到所選取之<li>，讓<li>成為<span>之子元素
}

//刪除按鈕的點擊事件處理程序
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) { //此for迴圈之用意，允許使用者點擊“x”（即刪除按鈕）後會使清單項目<li>隱藏
close[i].onclick = function() {
    var div = this.parentElement;//獲取刪除按鈕之父元素，即<li>
    div.style.display = "none";
}
}

//當按下新增按鈕時，會呼叫newThing（）這個方法。此段在顯示使用者所輸入之內容於清單上，並且建立X，供使用者刪除清單項目內容
function newThing() {
    var li = document.createElement("li"); //此行在建立一個<li>元素，並將之存放到li這個變數當中
    var inputValue = document.getElementById("input_text").value;//讀取input textbox的值，並將之存放到變數inputValue中
    var t = document.createTextNode(inputValue);//透過動態方式，將存放在inputValue中的文字內容儲存到變數t中 
    li.appendChild(t);//把文本節點t附加到li元素上，這樣在清單項目上就會列出使用者輸入的文字
    if (inputValue === '') {
        alert("請輸入文字後再按新增 .ᐟ.ᐟ ");
    } else {
        document.getElementById("mylist").appendChild(li);//如果inputValue不為空，則將建立的列表項目li附加到id為"mylist"的元素中。
    }
    document.getElementById("input_text").value = "";//按下新增按鈕，產生新的清單項目<li>之後，使用者剛剛在input欄位輸入的文字就會清空


    //此段在建立清單之刪除功能
    var span = document.createElement("span");//此行在建立一個<span>元素，並將之存放到span這個變數當中
    var txt = document.createTextNode("\u00D7");//在此建立一個文本節點，X，用來表示刪除清單項目之按鈕
    span.className = "close";//在span建立一個類別，類別名稱為close
    span.appendChild(txt);//把文本節點txt附加到span元素上
    li.appendChild(span);//把<span>元素附加到<li>元素上，目的在於將刪除按鈕添加到清單列表中，以便用戶點擊該項目進行刪除

    for (i = 0; i < close.length; i++) { //此for迴圈是在按下新增按鈕呼叫newThing（）方法後，在每一個「新增」的項目上添加刪除按鈕
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        }
    }
}


//此段目的在於幫每一個<li>元素添加事件監聽器，以實現使用者點擊清單項目時會觸發之功能，而這裡的功能是指「完成」清單
var list = document.querySelector('ul');//用於選擇程式碼中，第一個<ul>元素，並且將資料存放到list變數中
list.addEventListener('click', function(ev) { //利用事件監聽器，監聽list的click事件，並將事件對象傳到參數ev中
if (ev.target.tagName === 'LI') { //當使用者點擊及清單項目，此段會去檢查被點擊的元素是否為<li>，
ev.target.classList.toggle('checked');//如果是，則切換到checked類別，如此一來就能標註此清單項目已經完成了
}
}, false);
