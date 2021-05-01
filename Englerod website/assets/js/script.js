function openIcon(evt, iconName) {
    var i, container, tablinks; 
    container = document.getElementsByClassName("container");
    for (i = 0; i < container.length; i++) {
        container[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks [i].className.replace(" active", "");
    }
    document.getElementById(iconName).style.display = 'grid';
    evt.currentTarget.className += "active";
}
