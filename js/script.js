"use strict";

const getContainer = document.querySelector("#excercise_type");
const getBtns = document.querySelectorAll(".btn_wrap .btn-group button");
const getImg = document.querySelector("#excercise_type .images img");
const getText = document.querySelector("#excercise_type .texts .para");

// data list
const data = [
    {
        text:
            "Morbi ornare metus sit amet viverra auctor. Aenean pulvinar commodo leo, sit amet volutpat velit varius eu. Curabitur hendrerit eros nisl, in ornare libero porta vel. Curabitur urna sapien, ullamcorper sed mi sed, auctor eleifend justo. Morbi rhoncus, mi nec congue aliquam, leo metus commodo augue, eu consequat augue nisl eu mi. Aliquam erat volutpat. Pellentesque quis sollicitudin augue. Fusce in tortor sed erat vestibulum pellentesque non in purus. Ut porttitor, felis sit amet vestibulum tincidunt, est velit pharetra lorem, quis iaculis arcu urna sollicitudin ante. Sed interdum mauris ac enim finibus, ac facilisis velit aliquet. Mauris facilisis turpis porttitor odio euismod congue. Vivamus ac eleifend urna. Aenean rutrum mi id lobortis vulputate. Nam euismod lacinia sapien, sit amet aliquet turpis vehicula eget. Duis sollicitudin risus non condimentum viverra.  ",
        img: "./img/fitness/one.png",
    },
    {
        text:
            " Donec porta sed quam ac posuere. Aliquam lorem purus, fringilla et viverra in, euismod vitae justo. Sed vitae aliquam dui, in dictum lorem. Curabitur pellentesque viverra dapibus. Vestibulum varius eu velit ut imperdiet. Maecenas ultrices magna elit, ut lobortis arcu vestibulum id. Praesent non tempor libero, id interdum libero. Aenean turpis tortor, luctus a efficitur eu, porta id massa. Quisque id magna vitae lorem congue maximus. Vivamus purus neque, gravida sit amet egestas eget, pharetra non neque. Quisque purus ipsum, luctus eu odio non, suscipit facilisis eros. Sed eleifend dui nisi. Praesent leo ligula, tincidunt a nulla non, sollicitudin feugiat nunc. Quisque scelerisque nisi ligula. Cras scelerisque, mauris vitae blandit fringilla, nunc orci tempor nulla, sed porttitor tortor diam nec ante. Mauris hendrerit consectetur turpis sit amet laoreet. ",
        img: "./img/fitness/two.png",
    },
    {
        text:
            " Morbi ac pulvinar tellus, vitae placerat mi. Vestibulum vel nisl id risus lacinia consectetur. Cras in ipsum suscipit, efficitur dolor a, suscipit libero. Integer rhoncus congue dui, non fringilla tortor dapibus vel. Curabitur dapibus mi nec venenatis auctor. Fusce fermentum, velit ac vulputate sagittis, nisl eros viverra libero, non tempus enim orci ut odio. Morbi quis quam sed quam tincidunt venenatis. Morbi ultrices arcu vitae lectus sodales lobortis. Fusce fermentum consectetur condimentum. Integer porta purus eu condimentum porttitor. In placerat eu lorem eget tempor. Morbi purus urna, placerat vitae turpis at, maximus ultrices arcu. Nullam interdum diam nec posuere aliquam. Donec aliquam dui non scelerisque ultrices. Proin placerat, ligula in malesuada imperdiet, justo lacus bibendum dolor, at interdum augue nisl quis leo. Praesent bibendum tempus augue sit amet eleifend. ",
        img: "./img/fitness/three.png",
    },
];

// remove active

function removeActive(list, item) {
    list.forEach((item) => {
        item.classList.remove("active");
    });
    item.classList.add("active");
}

// content changer
function contentChangeHandler(index, data, imgTag, textTag) {
    imgTag.src = data[index].img;
    textTag.innerHTML = data[index].text;
}

// add event listener

getBtns.forEach((item, index) => {
    item.addEventListener("click", (event) => {
        removeActive(getBtns, item);
        contentChangeHandler(index, data, getImg, getText);
    });
});
