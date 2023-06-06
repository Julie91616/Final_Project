var info = document.getElementById('info');
var hist = document.getElementById('history');
var comm = document.getElementById('comment');

function vip_info() {
    info.style.display="block";
    if(hist.style.display!="none")
        hist.style.display="none";
    if(comm.style.display!="none")
        comm.style.display="none";
}

function vip_hist() {
    hist.style.display="block";
    if(info.style.display!="none")
        info.style.display="none";
    if(comm.style.display!="none")
        comm.style.display="none";
}

function vip_comm() {
    comm.style.display="block";
    if(info.style.display!="none")
        info.style.display="none";
    if(hist.style.display!="none")
        hist.style.display="none";
}