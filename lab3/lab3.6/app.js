function MenuItem(title, url){
    this.title = title;
    this.url = url;
    this.show = function(){
        document.write(`<li><a href=${url}>${title}</a></li>`);
    }
}

let url1 = "drive.google.com/drive/folders/1Sjsk8uaZVhVzueq4W7Nr1HjNZz3Pugo";
let menuItem1 = new MenuItem("Первый пункт меню", url1);
menuItem1.show();

let url2 = "drive.google.com/drive/u/0/folders/1dkYhn1wmMfFR8RSHUy8ce2roucWnIWML?direction=a";
let menuItem2 = new MenuItem("Второй пункт меню", url2);
menuItem2.show();

let url3 = "drive.google.com/drive/folders/1vW40wkeFPNE8_8NGLtGJlhwReHNT0vgk";
let menuItem3 = new MenuItem("Третий пункт меню", url3);
menuItem3.show();

let url4 = "drive.google.com/drive/folders/1VcuNgkeuUXTdqPln9JrE-CBkpuJ6qOc3";
let menuItem4 = new MenuItem("Четвёртый пункт меню", url4);
menuItem4.show();