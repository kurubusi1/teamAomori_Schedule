const planClickEvent = document.getElementById("planButton");

const saveClickEvent = document.getElementById("saveButton");
// 要素を取得
let planTable = document.getElementById('planTable');



//現在のdisplayプロパティの値を保持
const displayOriginal = planTable.style.display;

// noneにして非表示
// planTable.style.display = 'none';

//元に戻して表示
// planTable.style.display = displayOriginal;

// 予定を書き込むクリックするたびに,wizardクラスがついたり、きえたり
// clickEvent.addEventListener('click' ,() => {
//     getWizard.classList.toggle('wizard');

//     console.log('click botton');

// });

planClickEvent.addEventListener('click' ,() => {
    if(planTable.style.display == "block"){
        planTable.style.display = 'none';
        saveClickEvent.style.display = 'none';

    } else {
        planTable.style.display = 'block';
        saveClickEvent.style.display = 'block';
    }

});

saveClickEvent.addEventListener('click' ,() => {
    if(planTable.style.display == "block"){
        planTable.style.display = 'none';
        saveClickEvent.style.display = 'none';

    } else {
        planTable.style.display = 'block';
        saveClickEvent.style.display = 'block';
    }

});

const getWizard = document.getElementById('inputWizard');

getWizard.addEventListener('click' ,() => {
    getWizard.classList.toggle('wizard');

    console.log('click botton');

});



// const displayOriginal = getWizard.style.display;
// getWizard.style.display = displayOriginal;

// getWizard.style.display = 'none';






