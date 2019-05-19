function openCity(evt, selected_button) {
    var i, content, links;
    content = document.getElementsByClassName("gallery_content");
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    links = document.getElementsByClassName("gallery_links");
    for (i = 0; i < links.length; i++) {
        links[i].className = links[i].className.replace(" active", "");
    }
    document.getElementById(selected_button).style.display = "block";
    evt.currentTarget.className += " active";
}