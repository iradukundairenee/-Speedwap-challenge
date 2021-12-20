$(document).ready(function(){
    $(".widget").click(function() {
      let posttion = $(this).data('position');
      $("#result").text(posttion)
    }) 
    $("#widget1").mouseleave(function() {
    $("#widget1").animate({
        height: '60px',
        width: '60px'
      })
    })
    $("#widget1").mouseover(function() {
        $("#widget1").animate({
            height: '55px',
            width: '55px'
          })
        })
    $("#widget2").mouseleave(function() {
        $("#widget2").animate({
            height: '60px',
            width: '60px'
          })
        })
        $("#widget2").mouseover(function() {
            $("#widget2").animate({
                height: '55px',
                width: '55px'
              })
            })
        $("#widget3").mouseleave(function() {
            $("#widget3").animate({
                height: '60px',
                width: '60px'
              })
            })
            $("#widget3").mouseover(function() {
                $("#widget3").animate({
                    height: '55px',
                    width: '55px'
                  })
                })
            $("#widget4").mouseleave(function() {
                $("#widget4").animate({
                    height: '60px',
                    width: '60px'
                  })
                })
                $("#widget4").mouseover(function() {
                    $("#widget4").animate({
                        height: '55px',
                        width: '55px'
                      })
                    })
                $("#widget5").mouseleave(function() {
                    $("#widget5").animate({
                        height: '60px',
                        width: '60px'
                      })
                    })
                    $("#widget5").mouseover(function() {
                        $("#widget5").animate({
                            height: '50px',
                            width: '50px'
                          })
                        })
                    $("#widget6").mouseleave(function() {
                        $("#widget6").animate({
                            height: '60px',
                            width: '60px'
                          })
                        })
                        $("#widget6").mouseover(function() {
                            $("#widget6").animate({
                                height: '55px',
                                width: '55px'
                              })
                            })
                        $("#widget7").mouseleave(function() {
                            $("#widget7").animate({
                                height: '60px',
                                width: '60px'
                              })
                            })
                            $("#widget7").mouseover(function() {
                                $("#widget7").animate({
                                    height: '55px',
                                    width: '55px'
                                  })
                                })
                            $("#widget8").mouseleave(function() {
                                $("#widget8").animate({
                                    height: '60px',
                                    width: '60px'
                                  })
                                })
                                $("#widget8").mouseover(function() {
                                    $("#widget8").animate({
                                        height: '55px',
                                        width: '5rpx'
                                      })
                                    })
                                $("#widget9").mouseleave(function() {
                                    $("#widget9").animate({
                                        height: '60px',
                                        width: '60px'
                                      })
                                    })
                                    $("#widget9").mouseover(function() {
                                        $("#widget9").animate({
                                            height: '55px',
                                            width: '55px'
                                          })
                                        })
  }); 
  