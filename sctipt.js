switch(window.navigator.language){
    case "ja":
        setTimeout("location.href='./ja/index.html'",10);
        break;
    case "en":
        setTimeout("location.href='./en/index.html'",10);
        break;
    default:
        setTimeout("location.href='./en/index.html'",10);
        break;
}