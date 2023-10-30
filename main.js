document.getElementById('menu_btn').addEventListener("click", hideshowinfo);
    function hideshowinfo() {
        let x = document.querySelector('.info');
        if (x.classList == "info"){
        x.classList.add("info_active");
        } else {
        x.classList.remove("info_active")}
    };
document.getElementById('portfolio_btn').addEventListener("click", hideshowportf);
    function hideshowportf() {
        let list = document.querySelector('.portfolio_list');
        if (list.classList == "portfolio_list"){
        list.classList.add("portfolio_list_active");
        } else {
        list.classList.remove("portfolio_list_active")}
    };