$.ajax({
      url: "https://api.icndb.com/jokes/random/3",
      
      success: function (data) {
          console.log(data)
          const joke = data.value[0].joke
          const joke2 = data.value[1].joke
          const joke3 = data.value[2].joke
          $('#jokes').html(joke)
          $('#jokes2').html(joke2)
          $('#jokes3').html(joke3)
      },
      error: function 
      (request, error) {
          console.log(error)
          console.log(request)
      },


})
