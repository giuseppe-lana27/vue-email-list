var app = new Vue(
  {
    el: '#app',
    data: {
      emails: [],
    },
    mounted: function(){
      for(var i = 0; i < 10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( (risposta) => {
          this.emails.push(risposta.data.response);
        });
      }
      console.log(this.emails);
    }
  }
)
