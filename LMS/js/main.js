const diveLinker = new DiveLinker("dive");
const dive = document.getElementById("dive");
const deleteBtn = document.getElementById("deleteBtn");
var sceneIndex = "22630";
var score = 0;
var isCorr = 0;
var state = 0;
var index = 0;
var load = false;
var load2 = 0;
var tempIndex;
var question;
var uname = "主";
var saveArray = [];
var items = [];
var wrongAlert = false;
var textArray = [];
function updateTextArray(){
    textArray = [
    [uname,"嗨！學妹！有問題都可以問我喔！",0],
    ["學妹",'謝謝學長(◍•ᴗ•◍)'],
    ["","升上了大二後抽了直屬，我抽到了一個可愛的學妹，為了幫助剛離開家鄉來到外地求學的她，我留下了我的聯絡方式，還加了她的IG。",0],
    ["",'我們大致認識了彼此，也約好開學後要帶她去認識台南有哪些好吃的，感覺我們非常合得來。',0],
    ["",'(開學前幾天...)',0],
    ["學妹","學長…能幫我組電腦嗎…我沒有電腦，我爸媽叫我自己組一台，但是...我不會組...",0],
    [uname,"額...好啊！當然沒問題！",0],
    [uname,"(讓妳知道上過我們系上頂尖的蘇俊銘老師計概課後的我有多厲害！)",0],
    ["學妹","謝謝學長！那我給你我的預算和需求～（獲得　需求預算表）",0],
    [GetNewItem,"Form",false,"N"],
    [uname,"不會啦～小事小事 ",0],
    ["","(回家後...)",1],
    ["","糟了...沒有實際裝過阿...，還是先上網準備相關資料好了...",1],
    [false,"Computer"],
    [false,Save],
    [GetNewItem,"GetNotes",false,"N"],
    ["","（獲得　重點筆記）",1],
    [uname,"好累阿...咦！都這個時間了，先去吃個飯好了。",1],
    ["","(飯後)",0],
    ["同學","甚麼！？你要幫XXX組電腦？",0],
    [uname,"對...對啦，怎樣？不行喔？",0],
    ["同學","笑死，也不是不行啦...只是你真的會組嗎...？",0],
    [uname,"會啦，不然你考我幾題，我肯定答出來給你看。",0],
    [false,"Question"],
    [false,Save],
    ["","(到了原價屋...)",3],
    [uname,"額...不好意思，我想要組電腦，這邊是我的需求和預算。",3],
    ["店員","你的需求內嗎...好，我幫你配幾單，你來挑挑看。",3],
    //[false,""],
    [uname,"...那我選這台好了。",3],
    ["店員","好的，另外如果你需要的話我們可以幫您組裝。",3],
    [uname,"真的嗎！那真是太好了，麻煩您了！",3],
    ["店員","只不過...需要一個禮拜的時間喔。",3],
    [uname,"哇...好吧...",3],
    ["","(想起前幾天跟學妹的聊天...)",3],
    ["學妹","學長學長，電腦還行嗎？想知道組的怎麼樣了～",0],
    [uname,"妳放心～我一定幫妳組一台最讚的啦哈哈。",0],
    ["學妹","有學長你就讓我好放心喔～學長真可靠～",0],
    [uname,"哈哈不用這麼誇張啦～(暈了)",0],
    ["學妹","那能在開學前拿到電腦嗎？我怕開學後跟不上課程...",0],
    ["","看到學妹如此擔憂，身為學長的我當然不行不管。",0],
    [uname,"當然沒問題，交給你學長我絕對沒問題。",0],
    ["學妹","哇～謝謝學長～",0],
    ["模糊的聲音","先生～先生～不好意思～",3],
    ["店員","先生先生，請問有需要我們幫您組裝嗎？先生？先生？",3],
    [uname,"啊啊！不好意思，剛剛在想事情...那沒關係，我自己組裝就好。",3],
    ["","(幾天後零件到了...)",1],
    [uname,"得趕快裝好讓她能趕快拿到才行...就直接來試試看吧！",1],
    [ChangeScene,"22727",false,"S"],
    [false,Save],
    [uname,"終於組好了！呼～現在就拿去她家給她吧。",1],
    ["","(到了學妹家)",2],
    [uname,"嗨！",2],
    ["學妹","學長你怎麼會來！",2],
    [uname,"來給妳驚喜啊～(從背後拿出不知道藏在哪裡的主機)",2],
    ["學妹","哇～學長你真的好厲害喔～",2],
    [uname,"沒有啦～來，我現在就幫妳裝上。",2],
    ["學妹","好啊～",2],
    [uname,"怎麼了嗎？",2],
    ["","(學妹滿臉通紅，整個人晃來晃去，欲言又止。)",2],
    ["","難道時機終於到了嗎？我心想。",2],
    ["學妹","學長...我有一件事想跟你...",2],
    [uname,"甚麼事？",2],
    ["學妹","我...我不會裝系統，不曉得學長能不能幫我裝？",2],
    [uname,"蛤...喔...當然，當然好啊！",2],
    ["","(拿出存有「在WINDOWS官網下載好的WIN10系統安裝檔」的USB)",2],
    ["學妹","耶！謝謝學長！",2],
    [ChangeScene,"22632",false,"S"],
    [false,Save],
    [uname,"調整好系統開機順序就可以開始安裝系統囉！",2],
    ["學妹","喔～好神奇啊～",2],
    [uname,"只要開機時讓電腦先讀取安裝在隨身碟中的系統安裝檔就行了啦～",2],
    ["學妹","真是太棒了！終於可以用電腦了～",2],
    [uname,"真是太好了呢，要不要去吃個好吃的慶祝一下啊哈哈～",2],
    ["學妹","下次好了，我已經跟人有約了，抱歉...",2],
    [uname,"不會啦，我也是臨時約的而已。",2],
    ["學妹","真的...很不好意思...你都幫我組電腦了...下次一定！",2],
    [uname,"好啊下次約～妳現在還是先跟同學熟起來比較重要，不要變系邊喔。",2],
    ["學妹","蛤，喔學長我不是要跟班上同學出去啦。",2],
    [uname,"？？  不然妳這邊還有認識其他人喔！？。",2],
    ["學妹","喔沒有啦～我男友來台南找我玩啊～",2],
    [uname,"喔...真...的喔...看不出來妳有男...朋友欸...",2],
    ["學妹","蛤！幹嘛這樣講啦...喔...",2],
    ["","原來一切都是我自作多情...",2],
    ["","(之後簡單講了幾句就離開了，講了甚麼也不記得了)",2],
    ["","(一個人慢慢地走著)",0],
    ["","(走著)",0],
    ["","(走著)",3],
    ["","(走在這段時光的點點滴滴)",3],
    ["","(看著展示櫃中反射出可笑的自己)",3],
    ["店員","先生要組電腦嗎？",3],
    [uname,"沒有，我看看而已。",3],
    [uname,"看看而已。",3],
    ["","電腦人，正篇結束。",3],
    ["","幾個月後",0],
    ["學妹","欸學長～好久不見～",0],
    [uname,"嗨～妳...妳好啊～",0],
    [uname,"最近還好嗎？",0],
    ["學妹","最近我...",0],
    ["學妹","我發現電腦好像都很燙，不曉得是不是需要清理...",0],
    ["","怎麼一見面就是講電腦的事啊...",0],
    ["學妹","學長...可以幫我嗎...",0],
    [uname,"好...好啊...當然沒問題...",0],
    ["","看著她楚楚可憐的模樣，只能答應了...",0],
    ["學妹","真的太好了～學長人真好～",0],
    ["","(到了她房間後)",2],
    [uname,"那我就直接來重上散熱膏了。",2],
    [uname,"主機容易積灰塵，散熱膏幾個月會就會乾掉，需要定期換喔。",2],
    ["學妹","真的嗎...？我都不懂這些欸...",2],
    [uname,"哈哈，如果有不懂的再來問我喔！",2],
    ["","一不注意就得意起來了",2],
    [ChangeScene,"23620",false,"S"],
    [false,Save],
    [uname,"OK!這樣就完成了!",2],
    ["學妹","挖～謝謝學長～",2],
    [uname,"不會啦～小事小事～",2],
    ["學妹","真的好開心...有學長在...我就...好安心...",2],
    [uname,"蛤...我...妳這樣說太誇張了啦...",2],
    ["","明明已經知道結果了，卻還是始終下不了船",2],
    ["","電腦人，後篇結束。",3],
    [false,Save],
    [false,"Ending"],
    ];
    return textArray
}
