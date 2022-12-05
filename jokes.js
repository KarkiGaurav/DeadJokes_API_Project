                                                            // with the help of "ASYNC awit"  //


        const jokes = document.getElementById("joke");
        const jokeBtn = document.getElementById("joke-btn");
        
         const generatejokes = async() =>{
        
            try{
            const setHeader = {
                headers: {
                    Accept : "application/json"
                }
            }
            
             const res = await fetch("https://icanhazdadjoke.com/", setHeader)
             const data = await res.json();
             jokes.innerHTML = data.joke;
             }catch(error){
                 console.log(`the error is ${error}`);
                }
            }


        jokeBtn.addEventListener("click", generatejokes);
        generatejokes();





                                              //   with the help of fetch API     //



        // const jokes = document.getElementById("joke");
        // const jokeBtn = document.getElementById("joke-btn");
        
        //  const generatejokes = () =>{

        //     const setHeader = {
        //         headers: {
        //             Accept : "application/json"
        //         }
        //     }
            
        //      fetch("https://icanhazdadjoke.com/", setHeader)
        //      .then((res) => res.json() )
        //       .then((data) => {
        //           jokes.innerHTML = data.joke;
        //       }).catch((error) => {
        //          console.log(error);
        //         }) 
        //     }


        // jokeBtn.addEventListener("click", generatejokes);
        // generatejokes();



   
