document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("blockquote p").forEach(function (p) {
        if (p.textContent.startsWith("[!NOTE]")) {
            p.parentNode.classList.add("note");
            p.innerHTML = p.innerHTML.replace("[!NOTE]", "");
        } else if (p.textContent.startsWith("[!WARN]")) {
            p.parentNode.classList.add("warn");
            p.innerHTML = p.innerHTML.replace("[!WARN]", "");
        } else if (p.textContent.startsWith("[!ERROR]")) {
            p.parentNode.classList.add("error");
            p.innerHTML = p.innerHTML.replace("[!ERROR]", "");
        }
    });
});
