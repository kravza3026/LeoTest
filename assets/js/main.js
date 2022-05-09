  var tungle = false;
  var tunglePos;
  var tunglePlumbing = false;
  var testin = 1;
  var atributsId = [];
  var atributsIdPlumb = [];
  var atributsIdTile = [];

  function addTile() {
      var tileId;


      if (tungle == false) {
          tungle = true;
          /*console.log(tile);*/
          /*$('.plumbingCatalog').fadeOut(2000);*/

          $.each(tileBath, function (key, data) {

              $.each(data, function (index, value) {
                  if (value['visibl'] == true) {
                      atributsIdTile.unshift(value.kode);
                      $('<div class="thileCatalog col thumb " id ="' + value['kode'] + '" data-kode="' + value['kode'] + '"><div class="card rounded-0 product-card"><a href="#"><img src="' + value['img'] + '" class="card-img-top" alt="..."></a><div class="card-body"><div class="product-info"><a href="#"><h6 style="height: 60px" class="product-name mb-2">' + value['name'] + '</h6></a>' +
                          '<div class="d-flex align-items-center">' +
                          '<div class="mb-1 product-price">' +
                          '<span class="fs-5">' + value['price'] + '</span>' +
                          '</div>' +

                          '</div>' +
                          '<div class="product mt-2">' +
                          '<div class="d-grid gap-2">' +
                          '<div class="d-flex justify-content-between p-1 bg-white">' +
                          '<span class="row row-cols-1  align-items-left">Країна</span>' +
                          '<span class="row row-cols-2   align-items-right">' + value['countr'] + '</span>' +
                          '</div>' +
                          '<div class="d-flex justify-content-between p-1 bg-white">' +
                          '<span class="row row-cols-1  align-items-left">Бренд</span>' +
                          '<span class="row row-cols-2   align-items-right">' + value['brand'] + '</span>' +
                          '</div>' +
                          '<div class="d-flex justify-content-between p-1 bg-white">' +
                          '<span class="row row-cols-1  align-items-left">Код товару</span>' +
                          '<span class="row row-cols-2   align-items-right">' + value['kode'] + '</span>' +
                          '	</div>' + '<button onclick="myFunction(' + value['kode'] + ')" type="button"  class="btn btn-secondary btn-lg btn-block" id="removedPos">Видалити </button>' +
                          '<a onclick="infoPos(' + value['kode'] + ')"  href="javascript:;" class="btn btn-light btn-ecomm" data-bs-toggle="modal" data-bs-target="#QuickViewProduct">' + '<i class="bx bx-zoom-in"></i>Quick View</a>' +
                          '<a onclick="redFunct(' + value['kode'] + ')" href="javascript:;" class="btn btn-light btn-ecomm" data-bs-toggle="modal" data-bs-target="#QuickViewProduct_red">' + 'Редагувати</a>' +
                          '</div></div></div></div></div></div>').appendTo('#products');
                  }
              });
          });
          $.each(tile, function (key, data) {

              $.each(data, function (index, value) {
                  if (value['visibl'] == true) {
                      atributsIdTile.unshift(value.kode);
                      $('<div class="thileCatalog col thumb " id ="' + value['kode'] + '" data-kode="' + value['kode'] + '"><div class="card rounded-0 product-card"><a href="#"><img src="' + value['img'] + '" class="card-img-top" alt="..."></a><div class="card-body"><div class="product-info"><a href="#"><h6 style="height: 60px" class="product-name mb-2">' + value['name'] + '</h6></a>' +
                          '<div class="d-flex align-items-center">' +
                          '<div class="mb-1 product-price">' +
                          '<span class="fs-5">' + value['price'] + '</span>' +
                          '</div>' +

                          '</div>' +
                          '<div class="product mt-2">' +
                          '<div class="d-grid gap-2">' +
                          '<div class="d-flex justify-content-between p-1 bg-white">' +
                          '<span class="row row-cols-1  align-items-left">Країна</span>' +
                          '<span class="row row-cols-2   align-items-right">' + value['countr'] + '</span>' +
                          '</div>' +
                          '<div class="d-flex justify-content-between p-1 bg-white">' +
                          '<span class="row row-cols-1  align-items-left">Бренд</span>' +
                          '<span class="row row-cols-2   align-items-right">' + value['brand'] + '</span>' +
                          '</div>' +
                          '<div class="d-flex justify-content-between p-1 bg-white">' +
                          '<span class="row row-cols-1  align-items-left">Код товару</span>' +
                          '<span class="row row-cols-2   align-items-right">' + value['kode'] + '</span>' +
                          '	</div>' + '<button onclick="myFunction(' + value['kode'] + ')" type="button"  class="btn btn-secondary btn-lg btn-block" id="removedPos">Видалити </button>' +
                          '<a onclick="infoPos(' + value['kode'] + ')"  href="javascript:;" class="btn btn-light btn-ecomm" data-bs-toggle="modal" data-bs-target="#QuickViewProduct">' + '<i class="bx bx-zoom-in"></i>Quick View</a>' +
                          '<a onclick="redFunct(' + value['kode'] + ')" href="javascript:;" class="btn btn-light btn-ecomm" data-bs-toggle="modal" data-bs-target="#QuickViewProduct_red">' + 'Редагувати</a>' +
                          '</div></div></div></div></div></div>').appendTo('#products');
                  }
              });
          });

      } /*else{$('.thileCont').fadeIn(500);};*/

  };


  function addPlumb() {


      if (tunglePlumbing == false) {
          tunglePlumbing = true;

          /*$('.thileCatalog').fadeOut(2000);*/

          $.each(plumbing, function (key, data) {

              $.each(data, function (index, value) {

                  if (value['visibl'] == true) {
                      atributsIdPlumb.unshift(value.kode);
                      $('<div class="plumbingCatalog col thumb " id ="' + value['kode'] + '" data-kode="' + value['kode'] + '"><div class="card rounded-0 product-card"><a href="#"><img src="' + value['img'] + '" class="card-img-top" alt="..."></a><div class="card-body"><div class="product-info"><a href="#"><h6 style="height: 60px" class="product-name mb-2">' + value['name'] + '</h6></a>' +
                          '<div class="d-flex align-items-center">' +
                          '<div class="mb-1 product-price">' +
                          '<span class="fs-5">' + value['price'] + '</span>' +
                          '</div>' +

                          '</div>' +
                          '<div class="product mt-2">' +
                          '<div class="d-grid gap-2">' +
                          '<div class="d-flex justify-content-between p-1 bg-white">' +
                          '<span class="row row-cols-1  align-items-left">Країна</span>' +
                          '<span class="row row-cols-2   align-items-right">' + value['countr'] + '</span>' +
                          '</div>' +
                          '<div class="d-flex justify-content-between p-1 bg-white">' +
                          '<span class="row row-cols-1  align-items-left">Бренд</span>' +
                          '<span class="row row-cols-2   align-items-right">' + value['brand'] + '</span>' +
                          '</div>' +
                          '<div class="d-flex justify-content-between p-1 bg-white">' +
                          '<span class="row row-cols-1  align-items-left">Код товару</span>' +
                          '<span class="row row-cols-2   align-items-right">' + value['kode'] + '</span>' +
                          '	</div>' + '<button onclick="myFunction(' + value['kode'] + ')" type="button"  class="btn btn-secondary btn-lg btn-block" id="removedPos">Видалити </button>' +
                          '<a onclick="infoPos(' + value['kode'] + ')"  href="javascript:;" class="btn btn-light btn-ecomm" data-bs-toggle="modal" data-bs-target="#QuickViewProduct">' + '<i class="bx bx-zoom-in"></i>Quick View</a>' +
                          '<a onclick="redFunct(' + value['kode'] + ')" href="javascript:;" class="btn btn-light btn-ecomm" data-bs-toggle="modal" data-bs-target="#QuickViewProduct_red">' + 'Редагувати</a>' +
                          '</div></div></div></div></div></div>').appendTo('#products');

                  };
              });

          });


      }

  };







  /*****************************************Add Pos END*******************************/
  $(document).ready(function () {
    tungle = false;
          tunglePlumbing = false;tunglePos = "all";
      addTile(), addPlumb();

      atributsId = atributsIdPlumb.concat(atributsIdTile);

  });

  $('.allPos').click(function allClick() {
      atributsId = atributsIdTile;
      addTile();
      addPlumb();
      $('.plumbingCatalog').fadeIn(500);
      $('.thileCatalog').fadeIn(500);
      tunglePos = "all";
      atributsId = atributsIdPlumb.concat(atributsIdTile);
      $('.category').text('Всі товари');
  });

  $('.tile').click(function tileClick() {
      atributsId = atributsIdTile;
      addTile();
      $('.plumbingCatalog').fadeOut(500);
      $('.thileCatalog').fadeIn(500);
      tunglePos = "tile";
      
      addTile();
      $('.category').text('Плитка');
  });
  $('.plumbing').click(function plumbingClick() {
      atributsId = atributsIdPlumb;
      
      addPlumb();
      $('.thileCatalog').fadeOut(500);
      $('.plumbingCatalog').fadeIn(500);
      tunglePos = "plumbing";
     
      $('.category').text('Ванни');

  });
  /**************************Delete pos****************************************/
  function myFunction(id) {
      var text = id;
      var text_delet;
      for (var i = 0; i < product.length; i++) {
          for (var j = 0; j < product[i].length; j++) {
              for (var k = 0; k < product[i][j].length; k++) {
                  text_delet = product[i][j][k].kode;
                  if (text == text_delet) {

                      const spl = product[i][j].splice(k, k + 1);
                    
                  };
              }
          }

      };
      if (tunglePos == "plumbing") {
          $('.plumbingCatalog').remove();
          tunglePlumbing = false;
          addPlumb();
          onsole.log("all")
      } else if (tunglePos == "tile") {
          $('.thileCatalog').remove();
          tungle = false;

          addTile();
      } else if (tunglePos == "all") {
          $('.thileCatalog').remove();
          $('.plumbingCatalog').remove();
          tungle = false;
          tunglePlumbing = false;
          addPlumb();
          addTile();
         
      }

  } /*)*/ ;
 

  /*******************search click**************************************/
  $(document).mouseup(function (e) {
      var container = $('.itemsSearc');

      if (container.has(e.target).length === 0) {
          container.hide();
          $('.errorSearch').removeAttr("style").hide();
      }
  });
  var resultSearch = 0;

  function startSearchNow() {
      $('.itemsSearc').remove();
      $('.errorSearch').removeAttr("style").hide();

      var text = $('#searchText').val();
      
      for (var i = 0; i < product.length; i++) {
          for (var j = 0; j < product[i].length; j++) {
              for (var k = 0; k < product[i][j].length; k++) {
                  var visble = product[i][j][k];
                  var searchKode = product[i][j][k].kode;
                  var searchText = product[i][j][k].name;
                  searchText = searchText.toLowerCase();
                  text = text.toLowerCase();

                  if (searchText.includes(text) !== true) {


                  } else {
                      visble.visibl = true;
                      resultSearch++;

                      /*$('#searchList').fadeIn(5000);*/
                      $('<li class="nav-item itemsSearc " onclick="infoPos(' + searchKode + ')" style="list-style-type:none" ><a class="" href="#">                            <div style="background-color: white" class="d-flex d-flex justify-content-around btn btn-light btn-ecomm" data-bs-toggle="modal" data-bs-target="#QuickViewProduct">                                <div class="" style="padding:20px">                                    <h6 class="cart-product-title">' + visble.name + ' / ' + visble.color + '  / ' + visble.style + ' / ' + visble.kode + ' / ' + visble.brand + '   </h6>                                    <h4 class="cart-product-price"> Ціна: ' + visble.price + '</h4>                                </div><div class="position-relative">                                  <div class="cart-product" style="width: 150px">                                        <img style="width: 150px" src="' + visble.img + '" class="" alt="product image">                                    </div> </div></div></a></li>').appendTo('#searchList');
                  };
              }

          }
      };
      $('.thileCatalog').remove();
      tungle = false;
      $('.plumbingCatalog').remove();
      tunglePlumbing = false;
      addPlumb();
      addTile();
      
      if (resultSearch > 0) {
          $('.errorSearch').removeAttr("style").hide();
      } else {
          $('.errorSearch').removeAttr("style").show();
      };
      resultSearch = 0;
  } /*)*/ ;
  /************************redact****************************************      */

  function redFunct(id) {
      console.log(id);

      let text_redact;
      for (let a = 0; a < product.length; a++) {
          for (let j = 0; j < product[a].length; j++) {
              for (let k = 0; k < product[a][j].length; k++) {
                  if (id == product[a][j][k].kode) {
                      console.log('a: ' + a + ' j: ' + j + ' k: ' + k);

                      $('#colorRedact').val(product[a][j][k].color);
                      $('#nameRedact').val(product[a][j][k].name);
                      $('#styleRedact').val(product[a][j][k].style);
                      $('#typeRedact').val(product[a][j][k].type);
                      $('#brandRedact').val(product[a][j][k].brand);
                      $('#kolectionRedact').val(product[a][j][k].kolection);
                      $('#countrRedact').val(product[a][j][k].countr);
                      $('#materialRedact').val(product[a][j][k].material);
                      $('#surfaceRedact').val(product[a][j][k].surface);
                      $('#clStRedact').val(product[a][j][k].clSt);
                      $('#clSlRedact').val(product[a][j][k].clSl);
                      $('#otherRedact').val(product[a][j][k].other);
                      $('#widthRedact').val(product[a][j][k].width);
                      $('#heightRedact').val(product[a][j][k].height);
                      $('#descriptRedact').val(product[a][j][k].descript);
                      $('#priceRedact').val(product[a][j][k].price);
                      $('#imgRedactFoto').val(product[a][j][k].img);
                      $('#kodeRedact').val(product[a][j][k].kode);

                      $('#imgPos').remove();
                      console.log('img delete');
                      $('<img id="imgPos" src="' + product[a][j][k].img + '" class="img-fluid" alt="">').prependTo('#imgRedact');




                  } else {
                      console.log('no found')
                  };

              }

          }
      };

  }
  $('.redPos').click(function () {

      var kodePos = $('#kodeRedact').val();
      console.log(kodePos);
      for (let a = 0; a < product.length; a++) {
          for (let j = 0; j < product[a].length; j++) {
              for (let k = 0; k < product[a][j].length; k++) {
                  if (kodePos == product[a][j][k].kode) {

                      /* text_redact.color = 'res';*/
                      product[a][j][k] = {
                          "kode": kodePos,
                          "name": $('#nameRedact').val(),
                          "color": $('#colorRedact').val(),
                          "style": $('#typeRedact').val(),
                          "type": $('#typeRedact').val(),
                          "brand": $('#brandRedact').val(),
                          "kolection": $('#kolectionRedact').val(),
                          "countr": $('#countrRedact').val(),
                          "material": $('#materialRedact').val(),
                          "surface": $('#surfaceRedact').val(),
                          "clSt": $('#clStRedact').val(),
                          "clSl": $('#clSlRedact').val(),
                          "other": $('#otherRedact').val(),
                          "width": $('#widthRedact').val(),
                          "height": $('#heightRedact').val(),
                          "descript": $('#descriptRedact').val(),
                          "price": $('#priceRedact').val(),
                          "img": $('#imgRedactFoto').val(),
                          "visibl": true,


                      };




                      if (tunglePos == "plumbing") {
                          $('.plumbingCatalog').remove();
                          tunglePlumbing = false;



                          console.log('редагований :');


                          addPlumb();
                      } else {
                          $('.thileCatalog').remove();
                          tungle = false;

                          addTile();
                      }



                      ; /*)*/ ;
                  }
              }
          }
      };
  })
  /**************************info***********************************************/

  function infoPos(id) {
      testin = id;

      for (var i = 0; i < product.length; i++) {
          for (var j = 0; j < product[i].length; j++) {
              for (var k = 0; k < product[i][j].length; k++) {
                  var text_info = product[i][j][k];

                  if (id == text_info.kode) {


                      $('#colorInfo').text(text_info.color);
                      $('#nameInfo').text(text_info.name);
                      $('#styleInfo').text(text_info.style);
                      $('#typeInfo').text(text_info.type);
                      $('#brandInfo').text(text_info.brand);
                      $('#kolectionInfo').text(text_info.kolection);
                      $('#countrInfo').text(text_info.countr);
                      $('#materialInfo').text(text_info.material);
                      $('#surfaceInfo').text(text_info.surface);
                      $('#clStInfo').text(text_info.clSt);
                      $('#clSlInfo').text(text_info.clSl);
                      $('#otherInfo').text(text_info.other);
                      $('#widthInfo').text(text_info.width);
                      $('#heightInfo').text(text_info.height);
                      $('#descriptInfo').text(text_info.descript);
                      $('#priceInfo').text(text_info.price);
                      $('#descrInfo').text(text_info.descript);


                      $('#imgInfo').remove();
                      $('<img id="imgInfo" src="' + text_info.img + '" class="img-fluid" alt="">').appendTo('#addImg');





                  };
              }
          }
      };

  };
  /*******************Nawigation info******************************/
  function infoPre() {
      console.log(testin);
      for (var i = 0; i < atributsId.length; i++) {
          if (testin == atributsId[i]) {

              /*   console.log(atributsId[i-1]);*/
              if (i == 0) {
                  i = atributsId.length
              };
              testin = atributsId[i - 1];
              infoPos(testin);
             
          }
      }



  };
  /*******************************NEXT************************************/
  function infoNext() {

      var posit;


      for (var i = 0; i < atributsId.length; i++) {
          if (testin == atributsId[i]) {

              posit = (atributsId[i++]);

              if (i < atributsId.length) {
                  infoPos(atributsId[i++]);
              } else {
                  i = 0;
                  infoPos(atributsId[i++])
              }
          }

      }




  };


  /**********************SELECT****************************************/
  function funSelect() {
      var sel = document.getElementById('mySelect').selectedIndex;
      var options = document.getElementById('mySelect').options;
      var selOpt = options[sel].value;
      if ((selOpt == 1) || (tunglePos == "plumbing")) {
          $('.tile').trigger('click');

      } else if ((selOpt == 3)) {
          $('.plumbing').trigger('click');

      } else if (selOpt == 2) {

      }

  }
