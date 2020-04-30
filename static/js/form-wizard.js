var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
    // This function will display the specified tab of the form...
    var x = document.getElementsByClassName("tab");
    x[n].style.animation = "mymove  0.3s";
    x[n].style.display = "block";
    //... and fix the Previous/Next buttons:
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
        x[n].style.animation = "0.3s";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 2)) {
        document.getElementById("btn-submit").classList.remove("d-none");
        document.getElementById("nextBtn").classList.add("hide");
    } else {
        document.getElementById("nextBtn").classList.add("block");
    }
    if (n == 4) {
        document.getElementById("nextBtn").style.display = "none";
        document.getElementById("prevBtn").style.display = "none";
        document.getElementById("btn-submit").style.display = "none";
    }
        document.getElementById("return-first").addEventListener("click", function(){
            document.getElementById("nextBtn").style.display = "inline";
            x[currentTab].style.display = "none";
            showTab(currentTab=0);
        });
    //... and run a function that will display the correct step indicator:
    fixStepIndicator(n);
    bgheader(n);
}

function nextPrev(n) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    document.getElementsByClassName("step-icon")[currentTab].className += " finish";
    document.getElementsByClassName("step-icon")[currentTab + n].className += " finish";
    if (currentTab == 0){
        document.getElementsByClassName("icon-step")[0].className += " icon-checked";
    } else if(currentTab == 1){
        document.getElementsByClassName("icon-step")[1].className += " icon-checked";
    } else if (currentTab == 2){
        document.getElementsByClassName("icon-step")[2].className += " icon-checked";
    } else if (currentTab == 3){
        document.getElementsByClassName("icon-step")[3].className += " icon-checked";
    }

    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // Otherwise, display the correct tab:
    showTab(currentTab);
}
function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step-icon");
    for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", " ");
    }
    //... and adds the "active" class on the current step:
    x[n].className += " active";
}
function bgheader(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step-header");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", " ");
    }
    //... and adds the "active" class on the current step:
    x[n].className += " active";
}