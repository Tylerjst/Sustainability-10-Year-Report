// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawChart);


$(document).ready(function(){

//NavBar//

  $(window).scroll(function() {
  if ($(document).scrollTop() > 898) {

    $('.scrollNav').fadeIn(500).removeClass('invisible');
  } else {
    $('.scrollNav').fadeOut(500);
  }
});

$(".nav .box").click(function(){
  $(".foldMenu").toggleClass("invisible");

});

$(".mobileLink-Campus").hover(function() {
    $(".mobileLink-Campus").css("background-color", "#32CD32");
  },
  function(){
    $(".mobileLink-Campus").css("background-color", "#333");
  });

$(".mobileLink-H20").hover(function() {
      $(".mobileLink-H20").css("background-color", "#32CD32");
  },
  function(){
      $(".mobileLink-H20").css("background-color", "#333");
  });

$(".mobileLink-Food").hover(function() {
      $(".mobileLink-Food").css("background-color", "#32CD32");
  },
  function(){
      $(".mobileLink-Food").css("background-color", "#333");
  });

$(".mobileLink-Recycle").hover(function() {
      $(".mobileLink-Recycle").css("background-color", "#32CD32");
  },
  function(){
      $(".mobileLink-Recycle").css("background-color", "#333");
  });

$(".mobileLink-Education").hover(function() {
      $(".mobileLink-Education").css("background-color", "#32CD32");
  },
  function(){
      $(".mobileLink-Education").css("background-color", "#333");
  });
//ScrollNav///



$(".jumpLink-Campus").hover(function() {
    $(".jumpLink-Campus").css("background-color", "#375c57");
    $(".jumpLinkText-Campus").css("display", "block");
  },
  function(){
    $(".jumpLink").css("background", "none");
    $(".jumpLinkText").css("display", "none");
  });

  //fill circle//
  $(window).scroll(function(){
    if ($(document).scrollTop() > 3000){
        $(".jumpLink-Campus").css("background-color", "#375c57");
      }
    else{
      $(".jumpLink-Campus").css("background", "none");
    }
  });

  $(".jumpLink-H20").hover(function() {
      $(".jumpLink-H20").css("background-color", "#375c57");
      $(".jumpLinkText-H20").css("display", "block");
    },
    function(){
      $(".jumpLink").css("background", "none");
      $(".jumpLinkText").css("display", "none");
    });

    //fill circle//
    $(window).scroll(function(){
      if ($(document).scrollTop() > 6500){
        $(".jumpLink-H20").css("background-color", "#375c57");
      }
      else{
        $(".jumpLink-H20").css("background", "none");
      }
    });


    $(".jumpLink-Food").hover(function() {
        $(".jumpLink-Food").css("background-color", "#375c57");
        $(".jumpLinkText-Food").css("display", "block");
    },
      function(){
        $(".jumpLink").css("background", "none");
        $(".jumpLinkText").css("display", "none");
      });

      //fill circle//
      $(window).scroll(function(){
        if ($(document).scrollTop() > 10000){
          $(".jumpLink-Food").css("background-color", "#375c57");
        }
        else{
          $(".jumpLink-Food").css("background", "none");
        }
      });

      $(".jumpLink-Recycle").hover(function() {
          $(".jumpLink-Recycle").css("background-color", "#375c57");
          $(".jumpLinkText-Recycle").css("display", "block");
        },
        function(){
          $(".jumpLink").css("background", "none");
          $(".jumpLinkText").css("display", "none");
        });

        //fill circle//
        $(window).scroll(function(){
          if ($(document).scrollTop() > 13080){
            $(".jumpLink-Recycle").css("background-color", "#375c57");
          }
          else{
            $(".jumpLink-Recycle").css("background", "none");
          }
        });



        $(".jumpLink-Education").hover(function() {
            $(".jumpLink-Education").css("background-color", "#375c57");
            $(".jumpLinkText-Education").css("display", "block");
          },
          function(){
            $(".jumpLink").css("background", "none");
            $(".jumpLinkText").css("display", "none");
          });

          //fill circle//
          $(window).scroll(function(){
            if ($(document).scrollTop() > 16100){
              $(".jumpLink-Education").css("background-color", "#375c57");
            }
            else{
              $(".jumpLink-Education").css("background", "none");
            }
          });


    $('.Reduce').addClass('invisible');

    // $('i').hover(function(){
    //     $('.Reduce').removeClass('invisible')
    //     },
    //     function(){$('.Reduce').addClass('invisible')
    //     });
    //
    //
    // $('i').hover(function() {
    //     $('i').tooltip('show')
    // },
    // function(){
    //     $('i').tooltip('hide')
    // });

//Carousel//

    $('.arrow-next').click(function(){
        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();
        if(nextSlide.length == 0){
            nextSlide = $('.slide').first();
        }
        currentSlide.fadeOut(600).removeClass('active-slide');
        nextSlide.fadeIn(600).addClass('active-slide');
        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();
        if(nextDot.length == 0){
            nextDot = $('.dot').first();
        }
        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');

    });

    $('.arrow-prev').click(function(){
        var currentSlide = $('.active-slide');
        var prevSlide = currentSlide.prev();
        if(prevSlide.length == 0){
            prevSlide = $('.slide').last();
        }
        currentSlide.fadeOut(600).removeClass('active-slide');
        prevSlide.fadeIn(600).addClass('active-slide');

        var currentDot = $('.active-dot');
        var prevDot = currentDot.prev();
            if(prevDot.length == 0){
                prevDot = $('.dot').last();
            }
        currentDot.removeClass('active-dot');
        prevDot.addClass('active-dot');

    });

//ScrollNav links//

    $('#home').click(function(){
        $('html, body').animate({
        scrollTop: $("#top").offset().top
    }, 0);
  });

    $('#goals').click(function(){
        $('html, body').animate({
        scrollTop: $(".Goals").offset().top
    }, 1500);
  });
    $('#awards').click(function(){
        $('html, body').animate({
        scrollTop: $(".Awards").offset().top
    }, 1500);
  });

  $('.jumpLink-Campus').click(function(){
      $('html, body').animate({
      scrollTop: $(".CampusIntegration").offset().top
  }, 1500);
  });
  $('.mobileLink-Campus').click(function(){
      $('html, body').animate({
      scrollTop: $(".CampusIntegration").offset().top
  }, 1500);
  });


  $('.jumpLink-H20').click(function(){
      $('html, body').animate({
      scrollTop: $(".energy").offset().top
  }, 1500);
  });
  $('.mobileLink-H20').click(function(){
      $('html, body').animate({
      scrollTop: $(".energy").offset().top
  }, 1500);
  });


  $('.jumpLink-Food').click(function(){
      $('html, body').animate({
      scrollTop: $(".food").offset().top
  }, 1500);
  });
  $('.mobileLink-Food').click(function(){
      $('html, body').animate({
      scrollTop: $(".food").offset().top
  }, 1500);
  });

  $('.jumpLink-Recycle').click(function(){
      $('html, body').animate({
      scrollTop: $(".Reuse").offset().top
  }, 1500);
  });
  $('.mobileLink-Recycle').click(function(){
      $('html, body').animate({
      scrollTop: $(".Reuse").offset().top
  }, 1500);
  });

  $('.jumpLink-Education').click(function(){
      $('html, body').animate({
      scrollTop: $(".Education").offset().top
  }, 1500);
  });
  $('.mobileLink-Education').click(function(){
      $('html, body').animate({
      scrollTop: $(".Education").offset().top
  }, 1500);
  });


//Circles

  $('#titGoals').click(function(){
      $('html, body').animate({
      scrollTop: $(".Goals").offset().top
  }, 2000);
  });

  $('#titOper').click(function(){
      $('html, body').animate({
      scrollTop: $(".CampusIntegration").offset().top
  }, 4000);
  });


  $('#titH20').click(function(){
      $('html, body').animate({
      scrollTop: $(".energy").offset().top
  }, 4000);
  });


  $('#titFood').click(function(){
      $('html, body').animate({
      scrollTop: $(".food").offset().top
  }, 4000);
  });

  $('#titRecy').click(function(){
      $('html, body').animate({
      scrollTop: $(".Reuse").offset().top
  }, 4000);
  });

  $('#titEduc').click(function(){
      $('html, body').animate({
      scrollTop: $(".Education").offset().top
  }, 4000);
  });



  $('.fa-facebook-square').hover(function(){
    $(this).addClass('active-fb')},

    function(){
      $(this).removeClass('active-fb')
    });

    $('.fa-envelope').hover(function(){
      $(this).addClass('active-fb')},

      function(){
        $(this).removeClass('active-fb')
      });

      $('.fa-twitter').hover(function(){
        $(this).addClass('active-fb')},

        function(){
          $(this).removeClass('active-fb')
        });

        $('.btn').hover(function(){
          $(this).addClass('active-button')},

          function(){
            $(this).removeClass('active-button')
          });

});






function drawChart(){

  var data = new google.visualization.arrayToDataTable([
    ['Year','Certified' ,'Silver','Gold', 'Total'],
    ['2002',0 ,325000 ,0 , 325000],
    ['2003',0 , 325000, 0, 325000],
    ['2004',0 ,325000 ,0 , 325000],
    ['2005', 325000,325000 ,0, 325000*2 ],
    ['2006', 325000,325000 ,122000, 325000*2+122000 ],
    ['2007',325000 ,325000 ,122000, 325000*2+122000 ],
    ['2008',325000 ,422540 , 122000, 325000+422540+122000],
    ['2009',532195 ,520772 ,476979, 532195+ 520772+476979 ],
    ['2010', 532195 ,682819 , 587027, 532195+682819+587027 ],
    ['2011',532195 ,859186 , 587027, 532195+859186+587027],
    ['2012',532195 ,1054186 ,701027, 532195+1054186+701027],
    ['2013',532195 , 1080892 , 816312, 532195+1080892+816312],
    ['2014',532195 ,1110393 , 816312, 532195+1110393+816312],
    ['2015',532195 , 1322354 ,948234, 532195+1322354+948234]

  ]);

  var options = {
            title:'Area Covered by LEED Buildings',
            titleTextStyle:{color:'#191970',fontSize:16,},
            vAxis:{title:'Square Feet'},
            // hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},

        };

        var formatter = new google.visualization.NumberFormat(
          {groupingSymbol:',', fractionDigits:'0'});
        formatter.format(data, 1);
        formatter.format(data, 2);
        formatter.format(data, 3);
        formatter.format(data, 4);
        var chart = new google.visualization.LineChart(document.getElementById('columnchart_material'));

        chart.draw(data, options);


       var data2 = google.visualization.arrayToDataTable([
        ['Type of Commuter', 'Percentage'],
        ['Walkers', 186],
        ['Bike', 141],
        ['Carpool', 816],
        ['Transit', 1335],
        ['Vanpool', 152],
        ['Park and Ride', 416]
      ]);

      var options2 = {
        title:'Distribution of Alternate Commuters, 2011',
        titleTextStyle:{color:'#191970',fontSize:16,},
        pieHole: 0.5,
        legend:{alignment:'bottom'},
        tooltip:{ text: 'percentage'},
      };

      var chart2 = new google.visualization.PieChart(document.getElementById('donutchart'));
      chart2.draw(data2, options2);

    var data3 = new google.visualization.arrayToDataTable([
      ['Year','Gallons Used'],
      ['2007',284426000 ],
      ['2008',282477000 ],
      ['2009',253871000 ],
      ['2010',231473000],
      ['2011',245226000],
      ['2012',240290000],
      ['2013',213681000],
      ['2014',0 ],
      ['2015',0 ],

    ]);

    var options3 = {
      title: 'Total Water Consumption',
      titleTextStyle:{color:'#191970',fontSize:16,},
      legend:'none',
      pointsVisible: true,
      vAxis: {minValue: 0, title:'Gallons of Water'},
    };
    var formatter3 = new google.visualization.NumberFormat(
      {groupingSymbol:',', fractionDigits:'0'});
    formatter3.format(data3, 1);

    var chart3 = new google.visualization.AreaChart(document.getElementById('area_div'));
    chart3.draw(data3, options3);


    var data4 = new google.visualization.arrayToDataTable([
      ['Year', 'Btu / Sq.Ft.'],
      ['2005' , 229642],
      ['2006' , 228736],
      ['2007' , 223143],
      ['2008' , 211986],
      ['2009' , 203902],
      ['2010' , 197088],
      ['2011' , 197002],
      ['2012' , 191228],
      ['2013' , 192587],
      ['2014' , 0],
      ['2005' , 0]

    ]);
    var options4 = {
      title:'Total Energy Consumption',
      titleTextStyle:{color:'#191970',fontSize:16,},
      curveType: 'function',
      pointsVisible: true,
      legend: 'none',
      vAxis: {viewWindow:{min:0}, title:'Btu per Square Foot'},
    };


    var formatter4 = new google.visualization.NumberFormat(
      {groupingSymbol:',', fractionDigits:'0'});
    formatter4.format(data4, 1);

    var chart4 = new google.visualization.AreaChart(document.getElementById('curve_chart'));

    chart4.draw(data4, options4);


    var data5 = google.visualization.arrayToDataTable([
      ['Year', 'Metric Tons of CO2'],
      ['2005',74476 ],
      ['2006', 74311],
      ['2007', 73603],
      ['2008', 66325],
      ['2009', 60628],
      ['2010', 59164],
      ['2011', 0],
      ['2012', 51778]
    ]);
    var options5 = {
      title: 'Total CO2 Emissions',
      titleTextStyle:{color:'#191970',fontSize:16,},
      pointsVisible: true,
      legend: 'none',
      vAxis: {minValue: 0, title:'Metric Tons of eCO2'}
    };

    var formatter5 = new google.visualization.NumberFormat(
      {groupingSymbol:',', fractionDigits:'0'});
    formatter5.format(data5, 1);

    var chart5 = new google.visualization.AreaChart(document.getElementById('area_div5'));
    chart5.draw(data5, options5);



    var data7 = google.visualization.arrayToDataTable([
      ['Type of Food', 'Emory Dining', 'Oxford Dining'],
      ['Milk and Dairy',37.3, 17.2],
      ['Eggs',20 ,0 ],
      ['Fruits and Veggies', 19 ,9.6 ],
      ['Poultry',80.2, 100 ],
      ['Beef',8.1 ,0 ],
      ['Pork and Other Meats',13.3 , 0],
      ['Seafood', 16.3 , 7],
      ['Grocery', 15.4, 7.9],

    ]);

    var options7 = {
      title: 'Percentage of Either Sustainable or Local Food Products, 2013',
      titleTextStyle:{color:'#191970',fontSize:16,},
      legend:'bottom',
    };
    //
    // var formatter7 = new google.visualization.NumberFormat(
    //   {suffix:'%'});
    // formatter7.format(data7, 1);
    // formatter7.format(data7, 2);

    var chart7 = new google.visualization.ColumnChart(document.getElementById('ColumnChart7'));
    chart7.draw(data7,options7);

    var data8 = google.visualization.arrayToDataTable([
      ['Year', '% Recycled'],
      ['2005',5 ],
      ['2006', 4],
      ['2007', 15],
      ['2008', 11],
      ['2009', 11.5],
      ['2010', 39.9],
      ['2011', 75.8],
      ['2012', 90.9],
      ['2013', 63.2]
    ]);
    var options8 = {
      title: '% of Waste Recycled',
      titleTextStyle:{color:'#191970',fontSize:16,},
      pointsVisible: true,
      legend: 'none',
      vAxis: {minValue: 0}
    };

    var formatter8 = new google.visualization.NumberFormat(
      {groupingSymbol:',', fractionDigits:'0'});
    formatter5.format(data5, 1);

    var chart8 = new google.visualization.AreaChart(document.getElementById('area_div8'));
    chart8.draw(data8, options8);

    var data9 = google.visualization.arrayToDataTable([
      ['Year', '% Diverted', '% Landfilled'],
      ['2005',67.7, 32.3],
      ['2006',60, 40],
      ['2007',45, 55],
      ['2008',47.5, 52.5],
      ['2009',49, 51],
      ['2010',67.7, 32.3],
      ['2011',97, 3],
      ['2012',98, 2],
      ['2013',96, 4],

    ]);

    var options9 = {
      legend:'bottom',
      isStacked: 'true',
      title:'% of Diverted Waste per Year',
      titleTextStyle:{color:'#191970',fontSize:16,},
    };
    //
    // var formatter7 = new google.visualization.NumberFormat(
    //   {suffix:'%'});
    // formatter7.format(data7, 1);
    // formatter7.format(data7, 2);

    var chart9 = new google.visualization.ColumnChart(document.getElementById('ColumnChart9'));
    chart9.draw(data9,options9);



}

$(window).resize(function(){
  drawChart();
});
