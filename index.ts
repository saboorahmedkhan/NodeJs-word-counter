import inquirer from "inquirer";

const counter = (paragraph:string) => paragraph.replace(/\s/g,"").length

async function startWordCount (counter:(text:string) =>number){
    
    do{
        let res = await inquirer.prompt({
            type:"input",
            message:"Write paragraph here...",
            name:"paragraph"
    
        })
              console.log(`Word count is: ${counter(res.paragraph)}`)  
    }
    while(true)
}

startWordCount(counter)