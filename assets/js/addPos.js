/**********************************Toast*****************************/
var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
    toastTrigger.addEventListener('click', function () {
        var toast = new bootstrap.Toast(toastLiveExample)

        toast.show();

       /* $('.butClose').trigger('click');*/
    })
};

/*Stop add pos*************/
var toastTriggerStop = document.getElementById('liveToastBtnStop')
var toastLiveExampleStop = document.getElementById('liveToastStop')
if (toastTriggerStop) {
    toastTriggerStop.addEventListener('click', function () {
        var toast = new bootstrap.Toast(toastLiveExampleStop)

        toast.show();

       /* $('.butClose').trigger('click');*/
    })
};
/********************New pos**********************************/
function addNewPos() {
    
   function getRandomInt(max) {
  return Math.floor(Math.random() * max);
};
    var rand = getRandomInt(1000);
    console.log("tunglePos");
    var color = $('#color').val();
    var style = $('#style').val();
    var type = $('#type').val();
    var brand = $('#brand').val();
    var kolection = $('#kolection').val();
    var countr = $('#countr').val();
    var material = $('#material').val();
    var surface = $('#surface').val();
    var clSt = $('#clSt').val();
    var clSl = $('#clSl').val();
    var other = $('#other').val();
    var width = $('#width').val();
    var height = $('#height').val();
    var descript = $('#descript').val();
    var price = $('#price').val();
    var img = $('#addImgNew').val();
    var name = $('#name').val();
    
    
    

     var selectVal = $("#selectId option:selected").val();
    console.log(selectVal)

    



    let newPos = [{
        "name" : name,
        "kode" : rand,
        "color": color,
        "style": style,
        "type": type,
        "brand": brand,
        "kolection": kolection,
        "countr": countr,
        "material": material,
        "surface": surface,
        "clSt": clSt,
        "clSl": clSl,
        "other": other,
        "width": width,
        "height": height,
        "descript": descript,
        "price": price,
        "visibl": true,
        "img": img,
    }]


    if (selectVal == "tile") {
        $('.thileCatalog').remove();
     
        tungle = false;
        tile.unshift(newPos);
        console.log("tile");
        addTile();
      addPlumb();
    }
     else if (selectVal == "plumbing") {
        $('.plumbingCatalog').remove();
        tunglePlumbing = false;
        console.log("plumbing1111");
        plumbing.unshift(newPos);
  
        addPlumb();
    }else if(selectVal == "tileBath"){
      
         $('.thileCatalog').remove();
        tungle = false;
        tile.unshift(newPos);
        console.log("tileBath");
        addTile();
       
    }




    console.log(newPos);

    /*addTile();*/



};
$('.addPos').click(function () {
    addNewPos()
});
