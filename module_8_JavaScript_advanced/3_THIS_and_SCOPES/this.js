/*
THIS => este, esta, isto

Em JS, ele faz referência a:
                            * NODE => module.exports
                            * WEB  => window

ESCOPO:
        => Global = quando começamos a escrever a aplicação.
           No contexto global, o THIS faz referência ao objeto global.
           que é o objeto window no navegador de internet ou ao objeto
           global no Node.js.
           
        => Local = Por exemplo, dentro de uma funçõ.
        ex:

        const name = 'Edmar'        //=> GLOBAL
        
        function myName() {
            const myName = 'Edmar'  //=>LOCAL
        }        */

        console.log(global)  // dentro do escopo global existe um objeto 
                             // que no **Node** é chamado global e ele 
                             // contém diversas ferramentas do JS.
                             // na **Web** chama-se window.
        
        // const person = {
        //     name: 'Edmar',
        //     age: 41,
        //     talk: function(){
        //         console.log(this.name)  // exemplo do THIS em escopo local
        //     }
        // }
        // person.talk()

        const person = {
            name: 'Edmar',
            age: 41,
            talk: function(){
                console.log(this.name)  // exemplo do THIS em escopo local
            }
        }
        
        function myFunction(){
            //console.log(this) => em um caso como este o THIS está se referenciando em global
            this.console.log('Agora me transformei em global')
        }

        myFunction()